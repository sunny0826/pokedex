const canUseLocalStorage = () => {
  if (typeof window === 'undefined') return false;

  try {
    const key = '__pokedex_storage_probe__';
    window.localStorage.setItem(key, key);
    window.localStorage.removeItem(key);
    return true;
  } catch {
    return false;
  }
};

const memoryStore = new Map<string, string>();

export const fallbackStorage = {
  getItem(key: string): string | null {
    if (canUseLocalStorage()) return window.localStorage.getItem(key);
    return memoryStore.get(key) ?? null;
  },

  setItem(key: string, value: string) {
    if (canUseLocalStorage()) {
      window.localStorage.setItem(key, value);
      return;
    }

    memoryStore.set(key, value);
  },

  removeItem(key: string) {
    if (canUseLocalStorage()) {
      window.localStorage.removeItem(key);
      return;
    }

    memoryStore.delete(key);
  },

  keys(): string[] {
    if (!canUseLocalStorage()) return [...memoryStore.keys()];

    const keys: string[] = [];
    for (let index = 0; index < window.localStorage.length; index += 1) {
      const key = window.localStorage.key(index);
      if (key) keys.push(key);
    }
    return keys;
  },
};

export const readFallbackJson = <T>(key: string, fallbackValue: T): T => {
  try {
    const raw = fallbackStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallbackValue;
  } catch {
    return fallbackValue;
  }
};

export const writeFallbackJson = <T>(key: string, value: T) => {
  fallbackStorage.setItem(key, JSON.stringify(value));
};
