import type { Pokemon } from '@/data/pokemon';
import type { PokemonListItem } from '@/lib/pokemonListItem';

export const POKEDEX_DATA_DB_BASE_NAME = 'pokedex_zh_data';
export const POKEDEX_DATA_SCHEMA_VERSION = 1;
export const POKEDEX_DATA_MANIFEST_PATH = '/assets/databases/pokedex_zh_data.manifest.json';

export interface PokedexDataManifest {
  latestDatasetVersion: string;
  schemaVersion: number;
  minAppVersion: string;
  url: string;
  sha256: string;
  sizeBytes: number;
  databaseName?: string;
  databaseSha256?: string;
  databaseSizeBytes?: number;
  dataContentSha256?: string;
  generatedAt: string;
  source: string;
  sourceCommit?: string;
  maxPokemonId: number;
  notes?: string;
}

export interface PokedexDataPackageMeta {
  datasetVersion: string;
  schemaVersion: number;
  minAppVersion: string;
  generatedAt: string;
  source: string;
  sourceCommit?: string;
  maxPokemonId: number;
  contentSha256?: string;
}

export type StoredPokemonListItem = PokemonListItem;
export type StoredPokemonDetail = Pokemon;

export interface StoredEvolutionChain {
  stages: StoredEvolutionStage[][];
}

export interface StoredEvolutionStage {
  id: number;
  name: string;
  nameZh: string;
  condition: string;
  isMega?: boolean;
  isPrimal?: boolean;
  isGigantamax?: boolean;
  specialFormId?: string;
}

export interface DataPackageStatus {
  available: boolean;
  activeDatabase: string | null;
  bundledDatabase: string;
  activeMeta: PokedexDataPackageMeta | null;
}

export interface DataPackageUpdateCheck {
  checkedAt: number;
  current: PokedexDataPackageMeta | null;
  manifest: PokedexDataManifest | null;
  updateAvailable: boolean;
  reason?: string;
}

export interface DataPackageApplyResult {
  updated: boolean;
  activeDatabase: string;
  meta: PokedexDataPackageMeta;
}
