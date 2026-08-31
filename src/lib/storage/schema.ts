export const DATABASE_NAME = 'pokedex_zh';
export const DATABASE_VERSION = 1;

export const STORAGE_SCHEMA_SQL = `
CREATE TABLE IF NOT EXISTS app_meta (
  key TEXT PRIMARY KEY NOT NULL,
  value TEXT NOT NULL,
  updated_at INTEGER NOT NULL
);

CREATE TABLE IF NOT EXISTS kv_store (
  key TEXT PRIMARY KEY NOT NULL,
  value_json TEXT NOT NULL,
  updated_at INTEGER NOT NULL
);

CREATE TABLE IF NOT EXISTS favorite_pokemon (
  pokemon_id INTEGER PRIMARY KEY NOT NULL,
  created_at INTEGER NOT NULL
);

CREATE TABLE IF NOT EXISTS favorite_group (
  id TEXT PRIMARY KEY NOT NULL,
  name TEXT NOT NULL,
  color TEXT NOT NULL,
  created_at INTEGER NOT NULL,
  updated_at INTEGER NOT NULL
);

CREATE TABLE IF NOT EXISTS favorite_group_member (
  group_id TEXT NOT NULL,
  pokemon_id INTEGER NOT NULL,
  created_at INTEGER NOT NULL,
  PRIMARY KEY (group_id, pokemon_id),
  FOREIGN KEY (group_id) REFERENCES favorite_group(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS saved_team (
  id TEXT PRIMARY KEY NOT NULL,
  name TEXT NOT NULL,
  pokemon_ids_json TEXT NOT NULL,
  created_at INTEGER NOT NULL,
  updated_at INTEGER NOT NULL
);

CREATE TABLE IF NOT EXISTS battle_record (
  id TEXT PRIMARY KEY NOT NULL,
  winner_id INTEGER NOT NULL,
  winner_name TEXT NOT NULL,
  loser_id INTEGER NOT NULL,
  loser_name TEXT NOT NULL,
  battle_mode TEXT NOT NULL,
  turns INTEGER NOT NULL,
  created_at INTEGER NOT NULL
);

CREATE TABLE IF NOT EXISTS pokemon_battle_stat (
  pokemon_id INTEGER PRIMARY KEY NOT NULL,
  name TEXT NOT NULL,
  wins INTEGER NOT NULL DEFAULT 0,
  losses INTEGER NOT NULL DEFAULT 0,
  total_battles INTEGER NOT NULL DEFAULT 0,
  updated_at INTEGER NOT NULL
);

CREATE TABLE IF NOT EXISTS api_cache (
  cache_key TEXT PRIMARY KEY NOT NULL,
  version INTEGER NOT NULL,
  value_json TEXT NOT NULL,
  created_at INTEGER NOT NULL,
  expires_at INTEGER NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_api_cache_expires_at ON api_cache(expires_at);
CREATE INDEX IF NOT EXISTS idx_battle_record_created_at ON battle_record(created_at);
`;
