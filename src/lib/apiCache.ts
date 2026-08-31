import {
  readApiCacheEntry,
  removeApiCacheEntry as removeStoredApiCacheEntry,
  trimApiCache,
  writeApiCacheEntry,
  type StoredApiCacheEntry,
} from './storage/apiCacheRepository';

const CACHE_VERSION = 1;

export const POKEAPI_DATA_CACHE_TTL_MS = 1000 * 60 * 60 * 24 * 30; // 30 days

type CacheKeyPart = string | number | boolean | null | undefined;

interface CacheEntry<T> extends StoredApiCacheEntry<T> {
  version: number;
  createdAt: number;
  expiresAt: number;
  value: T;
}

const memoryCache = new Map<string, CacheEntry<unknown>>();
const pendingRequests = new Map<string, Promise<unknown>>();

export const createApiCacheKey = (...parts: CacheKeyPart[]): string => {
  return parts
    .filter((part) => part !== null && part !== undefined)
    .map((part) => encodeURIComponent(String(part)))
    .join(':');
};

const removeCacheEntry = async (key: string) => {
  memoryCache.delete(key);
  await removeStoredApiCacheEntry(key).catch(() => undefined);
};

const readCacheEntry = async <T>(key: string): Promise<CacheEntry<T> | null> => {
  const memoryEntry = memoryCache.get(key) as CacheEntry<T> | undefined;
  if (memoryEntry) {
    if (memoryEntry.version === CACHE_VERSION) return memoryEntry;
    await removeCacheEntry(key);
    return null;
  }

  try {
    const entry = await readApiCacheEntry<T>(key);
    if (!entry) return null;

    if (entry.version !== CACHE_VERSION || typeof entry.expiresAt !== 'number') {
      await removeCacheEntry(key);
      return null;
    }

    memoryCache.set(key, entry as CacheEntry<unknown>);
    return entry;
  } catch {
    await removeCacheEntry(key);
    return null;
  }
};

const writeCacheEntry = async <T>(key: string, value: T, ttlMs: number) => {
  const now = Date.now();
  const entry: CacheEntry<T> = {
    version: CACHE_VERSION,
    createdAt: now,
    expiresAt: now + ttlMs,
    value,
  };

  memoryCache.set(key, entry as CacheEntry<unknown>);

  try {
    await writeApiCacheEntry(key, entry);
  } catch {
    try {
      await trimApiCache();
      await writeApiCacheEntry(key, entry);
    } catch {
      // Keep the in-memory entry even if persistent storage is full or disabled.
    }
  }
};

export const getCachedOrFetch = async <T>(
  key: string,
  fetcher: () => Promise<T>,
  ttlMs = POKEAPI_DATA_CACHE_TTL_MS,
  shouldCache: (value: T) => boolean = () => true
): Promise<T> => {
  const entry = await readCacheEntry<T>(key);
  const now = Date.now();

  if (entry && entry.expiresAt > now) {
    return entry.value;
  }

  const pendingRequest = pendingRequests.get(key) as Promise<T> | undefined;
  if (pendingRequest) return pendingRequest;

  const request = fetcher()
    .then((value) => {
      if (shouldCache(value)) {
        void writeCacheEntry(key, value, ttlMs);
      }
      return value;
    })
    .catch((error) => {
      if (entry) return entry.value;
      throw error;
    })
    .finally(() => {
      pendingRequests.delete(key);
    });

  pendingRequests.set(key, request);
  return request;
};
