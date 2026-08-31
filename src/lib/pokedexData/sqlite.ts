import { Capacitor } from '@capacitor/core';
import {
  CapacitorSQLite,
  SQLiteConnection,
  type SQLiteDBConnection,
} from '@capacitor-community/sqlite';

let sqlitePromise: Promise<SQLiteConnection> | null = null;

const ensureJeepSqliteElement = async () => {
  if (typeof window === 'undefined') return;

  if (!customElements.get('jeep-sqlite')) {
    const { defineCustomElements } = await import('jeep-sqlite/loader');
    defineCustomElements(window);
  }

  if (!document.querySelector('jeep-sqlite')) {
    const element = document.createElement('jeep-sqlite');
    element.setAttribute('autoSave', 'true');
    document.body.appendChild(element);
  }

  await customElements.whenDefined('jeep-sqlite');
};

export const getPokedexSqliteConnection = async (): Promise<SQLiteConnection> => {
  if (!sqlitePromise) {
    sqlitePromise = (async () => {
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

      return sqlite;
    })();
  }

  return sqlitePromise;
};

export const openPokedexDataConnection = async (
  databaseName: string,
  readonly = true
): Promise<SQLiteDBConnection> => {
  const sqlite = await getPokedexSqliteConnection();
  const existing = await sqlite.isConnection(databaseName, readonly);
  const connection = existing.result
    ? await sqlite.retrieveConnection(databaseName, readonly)
    : await sqlite.createConnection(databaseName, false, 'no-encryption', 1, readonly);

  await connection.open();
  return connection;
};

export const closePokedexDataConnection = async (databaseName: string, readonly = true) => {
  const sqlite = await getPokedexSqliteConnection();
  const existing = await sqlite.isConnection(databaseName, readonly).catch(() => ({ result: false }));
  if (existing.result) {
    await sqlite.closeConnection(databaseName, readonly);
  }
};

export const savePokedexWebStore = async (databaseName: string) => {
  if (Capacitor.getPlatform() !== 'web') return;
  const sqlite = await getPokedexSqliteConnection();
  await sqlite.saveToStore(databaseName).catch((error) => {
    console.warn(`Failed to save ${databaseName} web store`, error);
  });
};
