import { Capacitor } from '@capacitor/core';
import { shouldUseLocalPokedexDatabase } from '@/lib/runtime';
import { getStorageDatabase } from '@/lib/storage/database';
import { fallbackStorage } from '@/lib/storage/localStorageFallback';
import {
  POKEDEX_DATA_DB_BASE_NAME,
  POKEDEX_DATA_MANIFEST_PATH,
  POKEDEX_DATA_SCHEMA_VERSION,
  type DataPackageApplyResult,
  type DataPackageStatus,
  type DataPackageUpdateCheck,
  type PokedexDataManifest,
  type PokedexDataPackageMeta,
} from './types';
import {
  closePokedexDataConnection,
  getPokedexSqliteConnection,
  openPokedexDataConnection,
  savePokedexWebStore,
} from './sqlite';

const ACTIVE_DATA_DB_META_KEY = 'active_data_db';
const FALLBACK_ACTIVE_DATA_DB_KEY = 'pokedex-active-data-db';
const FALLBACK_REMOTE_MANIFEST_KEY = 'pokedex-data-remote-manifest-url';

interface MetaRow {
  key: string;
  value: string;
}

interface IntegrityRow {
  integrity_check: string;
}

const normalizeDatasetVersion = (version: string) => version.replace(/[^a-zA-Z0-9_-]+/g, '');

export const getDataDatabaseNameForVersion = (datasetVersion: string): string => {
  const normalizedVersion = normalizeDatasetVersion(datasetVersion);
  return normalizedVersion ? `${POKEDEX_DATA_DB_BASE_NAME}_${normalizedVersion}` : POKEDEX_DATA_DB_BASE_NAME;
};

const getDataDatabaseNameForManifest = (manifest: PokedexDataManifest): string => {
  return manifest.databaseName || getDataDatabaseNameForVersion(manifest.latestDatasetVersion);
};

const readActiveDatabaseName = async (): Promise<string | null> => {
  const database = await getStorageDatabase();
  if (database.backend === 'fallback') {
    return fallbackStorage.getItem(FALLBACK_ACTIVE_DATA_DB_KEY);
  }

  const rows = await database.query<{ value: string }>('SELECT value FROM app_meta WHERE key = ?', [
    ACTIVE_DATA_DB_META_KEY,
  ]);

  return rows[0]?.value ?? null;
};

const writeActiveDatabaseName = async (databaseName: string): Promise<void> => {
  const database = await getStorageDatabase();
  if (database.backend === 'fallback') {
    fallbackStorage.setItem(FALLBACK_ACTIVE_DATA_DB_KEY, databaseName);
    return;
  }

  await database.run(
    `INSERT OR REPLACE INTO app_meta (key, value, updated_at) VALUES (?, ?, ?)`,
    [ACTIVE_DATA_DB_META_KEY, databaseName, Date.now()]
  );
};

export const setRemoteDataManifestUrl = (url: string | null) => {
  if (url) {
    fallbackStorage.setItem(FALLBACK_REMOTE_MANIFEST_KEY, url);
  } else {
    fallbackStorage.removeItem(FALLBACK_REMOTE_MANIFEST_KEY);
  }
};

export const getRemoteDataManifestUrl = () => {
  const configuredUrl = import.meta.env.VITE_POKEDEX_DATA_MANIFEST_URL as string | undefined;
  return configuredUrl || fallbackStorage.getItem(FALLBACK_REMOTE_MANIFEST_KEY);
};

const readMetaFromDatabase = async (databaseName: string): Promise<PokedexDataPackageMeta | null> => {
  try {
    const connection = await openPokedexDataConnection(databaseName, true);
    const rows = await connection.query('SELECT key, value FROM data_meta');
    const values = ((rows.values ?? []) as MetaRow[]).reduce<Record<string, string>>((acc, row) => {
      acc[row.key] = row.value;
      return acc;
    }, {});

    if (!values.dataset_version || !values.schema_version) return null;

    return {
      datasetVersion: values.dataset_version,
      schemaVersion: Number(values.schema_version),
      minAppVersion: values.min_app_version || '0.0.0',
      generatedAt: values.generated_at || '',
      source: values.source || '',
      sourceCommit: values.source_commit || undefined,
      maxPokemonId: Number(values.max_pokemon_id || 0),
      contentSha256: values.content_sha256 || undefined,
    };
  } catch {
    return null;
  } finally {
    await closePokedexDataConnection(databaseName, true).catch(() => undefined);
  }
};

const ensureBundledDataCopied = async () => {
  const sqlite = await getPokedexSqliteConnection();
  await sqlite.copyFromAssets(false).catch(() => undefined);
};

const findBundledDatabaseName = async (): Promise<string> => {
  await ensureBundledDataCopied();

  const sqlite = await getPokedexSqliteConnection();
  const databaseList = await sqlite.getDatabaseList().catch(() => ({ values: [] as string[] }));
  const values = (databaseList.values ?? [])
    .map((value) => value.replace(/SQLite\.db$/, ''))
    .filter((value) => value === POKEDEX_DATA_DB_BASE_NAME || value.startsWith(`${POKEDEX_DATA_DB_BASE_NAME}_`))
    .sort();

  return values[values.length - 1] ?? POKEDEX_DATA_DB_BASE_NAME;
};

export const getActivePokedexDataDatabaseName = async (): Promise<string> => {
  if (!shouldUseLocalPokedexDatabase()) {
    throw new Error('Pokedex data package is unavailable on web runtime');
  }

  const activeDatabaseName = await readActiveDatabaseName();
  if (activeDatabaseName) return activeDatabaseName;

  const bundledDatabaseName = await findBundledDatabaseName();
  await writeActiveDatabaseName(bundledDatabaseName);
  return bundledDatabaseName;
};

const EMPTY_DATA_PACKAGE_STATUS: DataPackageStatus = {
  available: false,
  activeDatabase: null,
  bundledDatabase: '',
  activeMeta: null,
};

export const getPokedexDataPackageStatus = async (): Promise<DataPackageStatus> => {
  if (!shouldUseLocalPokedexDatabase()) {
    return EMPTY_DATA_PACKAGE_STATUS;
  }

  const bundledDatabase = await findBundledDatabaseName();
  const activeDatabase = await getActivePokedexDataDatabaseName().catch(() => null);
  const activeMeta = activeDatabase ? await readMetaFromDatabase(activeDatabase) : null;

  return {
    available: Boolean(activeMeta),
    activeDatabase,
    bundledDatabase,
    activeMeta,
  };
};

const compareVersion = (left: string, right: string): number => {
  const leftParts = left.split(/[^0-9a-zA-Z]+/).filter(Boolean);
  const rightParts = right.split(/[^0-9a-zA-Z]+/).filter(Boolean);
  const length = Math.max(leftParts.length, rightParts.length);

  for (let index = 0; index < length; index += 1) {
    const leftPart = leftParts[index] ?? '0';
    const rightPart = rightParts[index] ?? '0';
    const leftNumber = Number(leftPart);
    const rightNumber = Number(rightPart);
    const comparison =
      Number.isFinite(leftNumber) && Number.isFinite(rightNumber)
        ? leftNumber - rightNumber
        : leftPart.localeCompare(rightPart);

    if (comparison !== 0) return comparison > 0 ? 1 : -1;
  }

  return 0;
};

export const fetchPokedexDataManifest = async (
  manifestUrl = getRemoteDataManifestUrl()
): Promise<PokedexDataManifest | null> => {
  if (!manifestUrl) return null;

  const response = await fetch(manifestUrl, { cache: 'no-cache' });
  if (!response.ok) throw new Error(`Failed to fetch Pokedex data manifest: ${response.status}`);
  return response.json() as Promise<PokedexDataManifest>;
};

export const checkPokedexDataUpdate = async (
  manifestUrl = getRemoteDataManifestUrl()
): Promise<DataPackageUpdateCheck> => {
  if (!shouldUseLocalPokedexDatabase()) {
    return {
      checkedAt: Date.now(),
      current: null,
      manifest: null,
      updateAvailable: false,
      reason: 'web-runtime',
    };
  }

  const current = (await getPokedexDataPackageStatus()).activeMeta;
  const manifest = await fetchPokedexDataManifest(manifestUrl).catch(() => null);

  if (!manifest) {
    return {
      checkedAt: Date.now(),
      current,
      manifest: null,
      updateAvailable: false,
      reason: 'manifest-unavailable',
    };
  }

  if (manifest.schemaVersion !== POKEDEX_DATA_SCHEMA_VERSION) {
    return {
      checkedAt: Date.now(),
      current,
      manifest,
      updateAvailable: false,
      reason: 'schema-version-mismatch',
    };
  }

  return {
    checkedAt: Date.now(),
    current,
    manifest,
    updateAvailable:
      !current || compareVersion(manifest.latestDatasetVersion, current.datasetVersion) > 0,
  };
};

const validateDownloadedDatabase = async (
  databaseName: string,
  manifest: PokedexDataManifest
): Promise<PokedexDataPackageMeta> => {
  const connection = await openPokedexDataConnection(databaseName, true);

  try {
    const integrityRows = await connection.query('PRAGMA integrity_check');
    const integrity = ((integrityRows.values ?? []) as IntegrityRow[])[0]?.integrity_check;
    if (integrity !== 'ok') {
      throw new Error(`Downloaded Pokedex data failed integrity_check: ${integrity || 'empty result'}`);
    }
  } finally {
    await closePokedexDataConnection(databaseName, true).catch(() => undefined);
  }

  const meta = await readMetaFromDatabase(databaseName);
  if (!meta) throw new Error('Downloaded Pokedex data is missing data_meta');
  if (meta.schemaVersion !== manifest.schemaVersion) {
    throw new Error(`Downloaded Pokedex data schema ${meta.schemaVersion} does not match manifest ${manifest.schemaVersion}`);
  }
  if (meta.datasetVersion !== manifest.latestDatasetVersion) {
    throw new Error(`Downloaded Pokedex data version ${meta.datasetVersion} does not match manifest ${manifest.latestDatasetVersion}`);
  }
  const expectedDataContentHash = manifest.dataContentSha256;
  if (expectedDataContentHash) {
    if (!meta.contentSha256) {
      throw new Error('Downloaded Pokedex data is missing content hash metadata');
    }
    if (meta.contentSha256 !== expectedDataContentHash) {
      throw new Error('Downloaded Pokedex data content hash does not match manifest');
    }
  }

  return meta;
};

const sha256Hex = async (data: ArrayBuffer): Promise<string> => {
  const digest = await crypto.subtle.digest('SHA-256', data);
  return [...new Uint8Array(digest)]
    .map((byte) => byte.toString(16).padStart(2, '0'))
    .join('');
};

const verifyRemotePackageHash = async (manifest: PokedexDataManifest): Promise<void> => {
  if (!manifest.sha256) return;

  const response = await fetch(manifest.url, { cache: 'no-cache' });
  if (!response.ok) {
    throw new Error(`Failed to download Pokedex data for hash verification: ${response.status}`);
  }

  const data = await response.arrayBuffer();
  const actualHash = await sha256Hex(data);
  if (actualHash !== manifest.sha256) {
    throw new Error('Downloaded Pokedex data hash does not match manifest');
  }
};

export const installPokedexDataPackage = async (
  manifest: PokedexDataManifest
): Promise<DataPackageApplyResult> => {
  if (!shouldUseLocalPokedexDatabase()) {
    throw new Error('Pokedex data package install is Android-only');
  }

  if (manifest.schemaVersion !== POKEDEX_DATA_SCHEMA_VERSION) {
    throw new Error(`Unsupported Pokedex data schema ${manifest.schemaVersion}`);
  }

  const databaseName = getDataDatabaseNameForManifest(manifest);
  const sqlite = await getPokedexSqliteConnection();

  await verifyRemotePackageHash(manifest);
  await sqlite.getFromHTTPRequest(manifest.url, true);

  const meta = await validateDownloadedDatabase(databaseName, manifest);
  await writeActiveDatabaseName(databaseName);

  if (Capacitor.getPlatform() === 'web') {
    await savePokedexWebStore(databaseName);
  }

  return {
    updated: true,
    activeDatabase: databaseName,
    meta,
  };
};

export const installBundledPokedexDataPackage = async (): Promise<DataPackageApplyResult | null> => {
  if (!shouldUseLocalPokedexDatabase()) return null;

  const activeDatabaseName = await readActiveDatabaseName();
  if (activeDatabaseName) {
    const activeMeta = await readMetaFromDatabase(activeDatabaseName);
    if (activeMeta) {
      return {
        updated: false,
        activeDatabase: activeDatabaseName,
        meta: activeMeta,
      };
    }
  }

  const databaseName = await findBundledDatabaseName();
  const meta = await readMetaFromDatabase(databaseName);
  if (!meta) return null;

  await writeActiveDatabaseName(databaseName);
  return {
    updated: false,
    activeDatabase: databaseName,
    meta,
  };
};

export const loadBundledPokedexDataManifest = async (): Promise<PokedexDataManifest | null> => {
  const response = await fetch(POKEDEX_DATA_MANIFEST_PATH).catch(() => null);
  if (!response?.ok) return null;
  return response.json() as Promise<PokedexDataManifest>;
};
