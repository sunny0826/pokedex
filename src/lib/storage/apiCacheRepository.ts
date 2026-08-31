import { getStorageDatabase } from './database';
import { fallbackStorage } from './localStorageFallback';

export interface StoredApiCacheEntry<T> {
  version: number;
  createdAt: number;
  expiresAt: number;
  value: T;
}

interface ApiCacheRow {
  version: number;
  value_json: string;
  created_at: number;
  expires_at: number;
}

interface MetaRow {
  value: string;
}

const FALLBACK_PREFIX = 'pokedex-api-cache:';
const API_CACHE_MIGRATION_KEY = 'api_cache_local_storage_migrated';

let apiCacheMigrationPromise: Promise<void> | null = null;

const migrateLegacyApiCacheIfNeeded = async () => {
  if (apiCacheMigrationPromise) return apiCacheMigrationPromise;

  apiCacheMigrationPromise = (async () => {
    const database = await getStorageDatabase();
    if (database.backend === 'fallback') return;

    const rows = await database.query<MetaRow>('SELECT value FROM app_meta WHERE key = ?', [API_CACHE_MIGRATION_KEY]);
    if (rows[0]?.value === 'true') return;

    const now = Date.now();
    const cacheKeys = fallbackStorage.keys().filter((key) => key.startsWith(FALLBACK_PREFIX));

    for (const storageKey of cacheKeys) {
      try {
        const rawEntry = fallbackStorage.getItem(storageKey);
        if (!rawEntry) continue;
        const entry = JSON.parse(rawEntry) as StoredApiCacheEntry<unknown>;
        if (
          typeof entry.version !== 'number' ||
          typeof entry.createdAt !== 'number' ||
          typeof entry.expiresAt !== 'number' ||
          entry.expiresAt <= now
        ) {
          continue;
        }

        await database.run(
          `INSERT OR IGNORE INTO api_cache (cache_key, version, value_json, created_at, expires_at)
           VALUES (?, ?, ?, ?, ?)`,
          [
            storageKey.slice(FALLBACK_PREFIX.length),
            entry.version,
            JSON.stringify(entry.value),
            entry.createdAt,
            entry.expiresAt,
          ]
        );
      } catch {
        // Skip malformed legacy entries. They are left in localStorage for rollback.
      }
    }

    await database.run(
      `INSERT OR REPLACE INTO app_meta (key, value, updated_at) VALUES (?, ?, ?)`,
      [API_CACHE_MIGRATION_KEY, 'true', Date.now()]
    );
  })();

  return apiCacheMigrationPromise;
};

export const readApiCacheEntry = async <T>(key: string): Promise<StoredApiCacheEntry<T> | null> => {
  const database = await getStorageDatabase();

  if (database.backend === 'fallback') {
    try {
      const raw = fallbackStorage.getItem(`${FALLBACK_PREFIX}${key}`);
      return raw ? (JSON.parse(raw) as StoredApiCacheEntry<T>) : null;
    } catch {
      fallbackStorage.removeItem(`${FALLBACK_PREFIX}${key}`);
      return null;
    }
  }

  await migrateLegacyApiCacheIfNeeded();

  const rows = await database.query<ApiCacheRow>(
    `SELECT version, value_json, created_at, expires_at FROM api_cache WHERE cache_key = ?`,
    [key]
  );
  const row = rows[0];
  if (!row) return null;

  try {
    return {
      version: row.version,
      createdAt: row.created_at,
      expiresAt: row.expires_at,
      value: JSON.parse(row.value_json) as T,
    };
  } catch {
    await removeApiCacheEntry(key);
    return null;
  }
};

export const writeApiCacheEntry = async <T>(
  key: string,
  entry: StoredApiCacheEntry<T>
): Promise<void> => {
  const database = await getStorageDatabase();

  if (database.backend === 'fallback') {
    fallbackStorage.setItem(`${FALLBACK_PREFIX}${key}`, JSON.stringify(entry));
    return;
  }

  await migrateLegacyApiCacheIfNeeded();

  await database.run(
    `INSERT OR REPLACE INTO api_cache (cache_key, version, value_json, created_at, expires_at)
     VALUES (?, ?, ?, ?, ?)`,
    [key, entry.version, JSON.stringify(entry.value), entry.createdAt, entry.expiresAt]
  );
};

export const removeApiCacheEntry = async (key: string): Promise<void> => {
  const database = await getStorageDatabase();

  if (database.backend === 'fallback') {
    fallbackStorage.removeItem(`${FALLBACK_PREFIX}${key}`);
    return;
  }

  await migrateLegacyApiCacheIfNeeded();

  await database.run('DELETE FROM api_cache WHERE cache_key = ?', [key]);
};

export const trimApiCache = async (): Promise<void> => {
  const database = await getStorageDatabase();
  const now = Date.now();

  if (database.backend === 'fallback') {
    const cacheKeys = fallbackStorage.keys().filter((key) => key.startsWith(FALLBACK_PREFIX));
    const entries = cacheKeys
      .map((storageKey) => {
        try {
          const rawEntry = fallbackStorage.getItem(storageKey);
          if (!rawEntry) return null;
          const entry = JSON.parse(rawEntry) as StoredApiCacheEntry<unknown>;
          if (entry.expiresAt <= now) {
            fallbackStorage.removeItem(storageKey);
            return null;
          }
          return { storageKey, createdAt: entry.createdAt };
        } catch {
          fallbackStorage.removeItem(storageKey);
          return null;
        }
      })
      .filter((entry): entry is { storageKey: string; createdAt: number } => Boolean(entry))
      .sort((a, b) => a.createdAt - b.createdAt);

    const entriesToRemove = Math.ceil(entries.length * 0.2);
    for (const entry of entries.slice(0, entriesToRemove)) {
      fallbackStorage.removeItem(entry.storageKey);
    }
    return;
  }

  await migrateLegacyApiCacheIfNeeded();

  await database.run('DELETE FROM api_cache WHERE expires_at <= ?', [now]);
  await database.run(
    `DELETE FROM api_cache
     WHERE cache_key IN (
       SELECT cache_key FROM api_cache
       ORDER BY created_at ASC
       LIMIT (SELECT CAST(COUNT(*) * 0.2 AS INTEGER) FROM api_cache)
     )`
  );
};
