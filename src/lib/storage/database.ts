import { Capacitor } from '@capacitor/core';
import {
  CapacitorSQLite,
  SQLiteConnection,
  type SQLiteDBConnection,
} from '@capacitor-community/sqlite';
import { shouldUseLocalPokedexDatabase } from '@/lib/runtime';
import { DATABASE_NAME, DATABASE_VERSION, STORAGE_SCHEMA_SQL } from './schema';

export interface StorageDatabase {
  backend: 'sqlite' | 'fallback';
  execute(sql: string): Promise<void>;
  query<T = Record<string, unknown>>(sql: string, values?: unknown[]): Promise<T[]>;
  run(sql: string, values?: unknown[]): Promise<void>;
}

let databasePromise: Promise<StorageDatabase> | null = null;

const createFallbackDatabase = (): StorageDatabase => ({
  backend: 'fallback',
  async execute() {},
  async query() {
    return [];
  },
  async run() {},
});

const ensureJeepSqliteElement = async () => {
  if (typeof window === 'undefined') return;

  if (!customElements.get('jeep-sqlite')) {
    try {
      const { defineCustomElements } = await import('jeep-sqlite/loader');
      defineCustomElements(window);
    } catch (error) {
      console.warn('Failed to register jeep-sqlite custom element', error);
      return;
    }
  }

  if (!document.querySelector('jeep-sqlite')) {
    const element = document.createElement('jeep-sqlite');
    element.setAttribute('autoSave', 'true');
    document.body.appendChild(element);
  }

  await customElements.whenDefined('jeep-sqlite');
};

const createSqliteDatabase = async (): Promise<StorageDatabase> => {
  if (Capacitor.getPlatform() === 'web') {
    await ensureJeepSqliteElement();
  }

  const sqlite = new SQLiteConnection(CapacitorSQLite);

  if (Capacitor.getPlatform() === 'web') {
    await sqlite.initWebStore();
  }

  const consistency = await sqlite.checkConnectionsConsistency().catch(() => ({ result: true }));
  if (!consistency.result) {
    await sqlite.closeAllConnections().catch(() => undefined);
  }

  const existingConnection = await sqlite.isConnection(DATABASE_NAME, false);
  const connection: SQLiteDBConnection = existingConnection.result
    ? await sqlite.retrieveConnection(DATABASE_NAME, false)
    : await sqlite.createConnection(DATABASE_NAME, false, 'no-encryption', DATABASE_VERSION, false);

  await connection.open();
  await connection.execute(STORAGE_SCHEMA_SQL);
  await connection.run(
    `INSERT OR REPLACE INTO app_meta (key, value, updated_at) VALUES (?, ?, ?)`,
    ['schema_version', String(DATABASE_VERSION), Date.now()]
  );

  const persistWebStore = async () => {
    if (Capacitor.getPlatform() === 'web') {
      await sqlite.saveToStore(DATABASE_NAME).catch((error) => {
        console.warn('Failed to save SQLite web store', error);
      });
    }
  };

  return {
    backend: 'sqlite',
    async execute(sql: string) {
      await connection.execute(sql);
      await persistWebStore();
    },
    async query<T = Record<string, unknown>>(sql: string, values: unknown[] = []) {
      const result = await connection.query(sql, values);
      return (result.values ?? []) as T[];
    },
    async run(sql: string, values: unknown[] = []) {
      await connection.run(sql, values);
      await persistWebStore();
    },
  };
};

export const getStorageDatabase = async (): Promise<StorageDatabase> => {
  if (!shouldUseLocalPokedexDatabase()) {
    if (!databasePromise) {
      databasePromise = Promise.resolve(createFallbackDatabase());
    }
    return databasePromise;
  }

  if (!databasePromise) {
    databasePromise = createSqliteDatabase().catch((error) => {
      console.warn('SQLite unavailable, using fallback storage', error);
      return createFallbackDatabase();
    });
  }

  return databasePromise;
};

export const isSqliteStorageAvailable = async () => {
  const database = await getStorageDatabase();
  return database.backend === 'sqlite';
};
