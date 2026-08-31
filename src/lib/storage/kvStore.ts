import { getStorageDatabase } from './database';
import { readFallbackJson, writeFallbackJson } from './localStorageFallback';

const FALLBACK_PREFIX = 'pokedex-kv:';

interface KvRow {
  value_json: string;
}

export const kvStore = {
  async get<T>(key: string, fallbackValue: T): Promise<T> {
    const database = await getStorageDatabase();

    if (database.backend === 'fallback') {
      return readFallbackJson(`${FALLBACK_PREFIX}${key}`, fallbackValue);
    }

    const rows = await database.query<KvRow>('SELECT value_json FROM kv_store WHERE key = ?', [key]);
    const value = rows[0]?.value_json;
    if (!value) return fallbackValue;

    try {
      return JSON.parse(value) as T;
    } catch {
      return fallbackValue;
    }
  },

  async set<T>(key: string, value: T): Promise<void> {
    const database = await getStorageDatabase();

    if (database.backend === 'fallback') {
      writeFallbackJson(`${FALLBACK_PREFIX}${key}`, value);
      return;
    }

    await database.run(
      `INSERT OR REPLACE INTO kv_store (key, value_json, updated_at) VALUES (?, ?, ?)`,
      [key, JSON.stringify(value), Date.now()]
    );
  },

  async remove(key: string): Promise<void> {
    const database = await getStorageDatabase();

    if (database.backend === 'fallback') return;

    await database.run('DELETE FROM kv_store WHERE key = ?', [key]);
  },
};
