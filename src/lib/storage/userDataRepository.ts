import { getStorageDatabase } from './database';
import { fallbackStorage, readFallbackJson, writeFallbackJson } from './localStorageFallback';

export interface StoredFavoriteGroup {
  id: string;
  name: string;
  color: string;
  pokemonIds: number[];
}

export interface StoredSavedTeam {
  id: string;
  name: string;
  pokemonIds: (number | null)[];
  createdAt: string;
  updatedAt: string;
}

export interface StoredBattleRecord {
  id: string;
  winnerId: number;
  winnerName: string;
  loserId: number;
  loserName: string;
  battleMode: 'auto' | 'manual';
  turns: number;
  timestamp: number;
}

export interface StoredPokemonStats {
  id: number;
  name: string;
  wins: number;
  losses: number;
  totalBattles: number;
  winRate: number;
}

export interface StoredBattleStats {
  totalBattles: number;
  manualBattles: number;
  autoBattles: number;
  records: StoredBattleRecord[];
  pokemonStats: Record<number, StoredPokemonStats>;
}

const FAVORITES_KEY = 'pokedex_favorites';
const GROUPS_KEY = 'pokedex_favorite_groups';
const SAVED_TEAMS_KEY = 'pokedex_saved_teams';
const BATTLE_STATS_KEY = 'pokedex-battle-stats';
const MIGRATION_KEY = 'local_storage_migrated';

interface FavoriteRow {
  pokemon_id: number;
}

interface GroupRow {
  id: string;
  name: string;
  color: string;
}

interface GroupMemberRow {
  group_id: string;
  pokemon_id: number;
}

interface SavedTeamRow {
  id: string;
  name: string;
  pokemon_ids_json: string;
  created_at: number;
  updated_at: number;
}

interface BattleRecordRow {
  id: string;
  winner_id: number;
  winner_name: string;
  loser_id: number;
  loser_name: string;
  battle_mode: 'auto' | 'manual';
  turns: number;
  created_at: number;
}

interface PokemonBattleStatRow {
  pokemon_id: number;
  name: string;
  wins: number;
  losses: number;
  total_battles: number;
}

interface MetaRow {
  value: string;
}

const parseJson = <T>(value: string | null, fallbackValue: T): T => {
  try {
    return value ? (JSON.parse(value) as T) : fallbackValue;
  } catch {
    return fallbackValue;
  }
};

const toTimestamp = (value: string | number | undefined): number => {
  if (typeof value === 'number' && Number.isFinite(value)) return value;
  if (typeof value === 'string') {
    const timestamp = Date.parse(value);
    if (Number.isFinite(timestamp)) return timestamp;
  }
  return Date.now();
};

const toIso = (value: number): string => new Date(value).toISOString();

const getInitialBattleStats = (): StoredBattleStats => ({
  totalBattles: 0,
  manualBattles: 0,
  autoBattles: 0,
  records: [],
  pokemonStats: {},
});

let migrationPromise: Promise<void> | null = null;

const loadLegacyBattleStats = () => readFallbackJson<StoredBattleStats>(BATTLE_STATS_KEY, getInitialBattleStats());

const saveFavoriteRows = async (favorites: number[], groups: StoredFavoriteGroup[]) => {
  const database = await getStorageDatabase();
  if (database.backend === 'fallback') {
    writeFallbackJson(FAVORITES_KEY, favorites);
    writeFallbackJson(GROUPS_KEY, groups);
    return;
  }

  await database.run('DELETE FROM favorite_group_member');
  await database.run('DELETE FROM favorite_group');
  await database.run('DELETE FROM favorite_pokemon');

  const now = Date.now();
  for (const pokemonId of favorites) {
    await database.run(
      `INSERT OR REPLACE INTO favorite_pokemon (pokemon_id, created_at) VALUES (?, ?)`,
      [pokemonId, now]
    );
  }

  for (const group of groups) {
    await database.run(
      `INSERT OR REPLACE INTO favorite_group (id, name, color, created_at, updated_at) VALUES (?, ?, ?, ?, ?)`,
      [group.id, group.name, group.color, now, now]
    );

    for (const pokemonId of group.pokemonIds) {
      await database.run(
        `INSERT OR REPLACE INTO favorite_group_member (group_id, pokemon_id, created_at) VALUES (?, ?, ?)`,
        [group.id, pokemonId, now]
      );
    }
  }
};

export const migrateLegacyLocalStorageIfNeeded = async () => {
  if (migrationPromise) return migrationPromise;

  migrationPromise = (async () => {
    const database = await getStorageDatabase();
    if (database.backend === 'fallback') return;

    const rows = await database.query<MetaRow>('SELECT value FROM app_meta WHERE key = ?', [MIGRATION_KEY]);
    if (rows[0]?.value === 'true') return;

    const legacyFavorites = readFallbackJson<number[]>(FAVORITES_KEY, []);
    const legacyGroups = readFallbackJson<StoredFavoriteGroup[]>(GROUPS_KEY, []);
    const legacyTeams = readFallbackJson<StoredSavedTeam[]>(SAVED_TEAMS_KEY, []);
    const legacyBattleStats = loadLegacyBattleStats();

    if (legacyFavorites.length || legacyGroups.length) {
      await saveFavoriteRows(legacyFavorites, legacyGroups);
    }

    if (legacyTeams.length) {
      await saveSavedTeams(legacyTeams);
    }

    if (legacyBattleStats.totalBattles || legacyBattleStats.records.length) {
      await saveBattleStats(legacyBattleStats);
    }

    await database.run(
      `INSERT OR REPLACE INTO app_meta (key, value, updated_at) VALUES (?, ?, ?)`,
      [MIGRATION_KEY, 'true', Date.now()]
    );
  })();

  return migrationPromise;
};

export const loadFavoriteData = async () => {
  const database = await getStorageDatabase();
  if (database.backend === 'fallback') {
    return {
      favorites: readFallbackJson<number[]>(FAVORITES_KEY, []),
      groups: readFallbackJson<StoredFavoriteGroup[]>(GROUPS_KEY, []),
    };
  }

  await migrateLegacyLocalStorageIfNeeded();

  const [favoriteRows, groupRows, memberRows] = await Promise.all([
    database.query<FavoriteRow>('SELECT pokemon_id FROM favorite_pokemon ORDER BY created_at, pokemon_id'),
    database.query<GroupRow>('SELECT id, name, color FROM favorite_group ORDER BY created_at, name'),
    database.query<GroupMemberRow>('SELECT group_id, pokemon_id FROM favorite_group_member ORDER BY created_at'),
  ]);

  const membersByGroup = new Map<string, number[]>();
  for (const member of memberRows) {
    const members = membersByGroup.get(member.group_id) ?? [];
    members.push(member.pokemon_id);
    membersByGroup.set(member.group_id, members);
  }

  return {
    favorites: favoriteRows.map((row) => row.pokemon_id),
    groups: groupRows.map((row) => ({
      id: row.id,
      name: row.name,
      color: row.color,
      pokemonIds: membersByGroup.get(row.id) ?? [],
    })),
  };
};

export const saveFavoriteData = async (favorites: number[], groups: StoredFavoriteGroup[]) => {
  await saveFavoriteRows(favorites, groups);
};

export const loadSavedTeams = async (): Promise<StoredSavedTeam[]> => {
  const database = await getStorageDatabase();
  if (database.backend === 'fallback') {
    return readFallbackJson<StoredSavedTeam[]>(SAVED_TEAMS_KEY, []);
  }

  await migrateLegacyLocalStorageIfNeeded();

  const rows = await database.query<SavedTeamRow>(
    'SELECT id, name, pokemon_ids_json, created_at, updated_at FROM saved_team ORDER BY updated_at DESC'
  );

  return rows.map((row) => ({
    id: row.id,
    name: row.name,
    pokemonIds: parseJson<(number | null)[]>(row.pokemon_ids_json, []),
    createdAt: toIso(row.created_at),
    updatedAt: toIso(row.updated_at),
  }));
};

export const saveSavedTeams = async (teams: StoredSavedTeam[]) => {
  const database = await getStorageDatabase();
  if (database.backend === 'fallback') {
    writeFallbackJson(SAVED_TEAMS_KEY, teams);
    return;
  }

  await database.run('DELETE FROM saved_team');

  for (const team of teams) {
    await database.run(
      `INSERT OR REPLACE INTO saved_team (id, name, pokemon_ids_json, created_at, updated_at)
       VALUES (?, ?, ?, ?, ?)`,
      [
        team.id,
        team.name,
        JSON.stringify(team.pokemonIds),
        toTimestamp(team.createdAt),
        toTimestamp(team.updatedAt),
      ]
    );
  }
};

export const loadBattleStats = async (): Promise<StoredBattleStats> => {
  const database = await getStorageDatabase();
  if (database.backend === 'fallback') {
    return loadLegacyBattleStats();
  }

  await migrateLegacyLocalStorageIfNeeded();

  const [recordRows, statRows] = await Promise.all([
    database.query<BattleRecordRow>(
      `SELECT id, winner_id, winner_name, loser_id, loser_name, battle_mode, turns, created_at
       FROM battle_record
       ORDER BY created_at DESC
       LIMIT 100`
    ),
    database.query<PokemonBattleStatRow>(
      `SELECT pokemon_id, name, wins, losses, total_battles FROM pokemon_battle_stat`
    ),
  ]);

  const records = recordRows.map((row) => ({
    id: row.id,
    winnerId: row.winner_id,
    winnerName: row.winner_name,
    loserId: row.loser_id,
    loserName: row.loser_name,
    battleMode: row.battle_mode,
    turns: row.turns,
    timestamp: row.created_at,
  }));

  const pokemonStats: Record<number, StoredPokemonStats> = {};
  for (const row of statRows) {
    const totalBattles = row.total_battles;
    pokemonStats[row.pokemon_id] = {
      id: row.pokemon_id,
      name: row.name,
      wins: row.wins,
      losses: row.losses,
      totalBattles,
      winRate: totalBattles ? (row.wins / totalBattles) * 100 : 0,
    };
  }

  const manualBattles = records.filter((record) => record.battleMode === 'manual').length;
  const autoBattles = records.filter((record) => record.battleMode === 'auto').length;

  return {
    totalBattles: records.length,
    manualBattles,
    autoBattles,
    records,
    pokemonStats,
  };
};

export const saveBattleStats = async (stats: StoredBattleStats) => {
  const database = await getStorageDatabase();
  if (database.backend === 'fallback') {
    writeFallbackJson(BATTLE_STATS_KEY, stats);
    return;
  }

  await database.run('DELETE FROM battle_record');
  await database.run('DELETE FROM pokemon_battle_stat');

  for (const record of stats.records.slice(0, 100)) {
    await database.run(
      `INSERT OR REPLACE INTO battle_record
       (id, winner_id, winner_name, loser_id, loser_name, battle_mode, turns, created_at)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        record.id,
        record.winnerId,
        record.winnerName,
        record.loserId,
        record.loserName,
        record.battleMode,
        record.turns,
        record.timestamp,
      ]
    );
  }

  for (const stat of Object.values(stats.pokemonStats)) {
    await database.run(
      `INSERT OR REPLACE INTO pokemon_battle_stat
       (pokemon_id, name, wins, losses, total_battles, updated_at)
       VALUES (?, ?, ?, ?, ?, ?)`,
      [stat.id, stat.name, stat.wins, stat.losses, stat.totalBattles, Date.now()]
    );
  }
};

export const exportLegacyUserDataSnapshot = () => ({
  favorites: readFallbackJson<number[]>(FAVORITES_KEY, []),
  groups: readFallbackJson<StoredFavoriteGroup[]>(GROUPS_KEY, []),
  savedTeams: readFallbackJson<StoredSavedTeam[]>(SAVED_TEAMS_KEY, []),
  battleStats: readFallbackJson<StoredBattleStats>(BATTLE_STATS_KEY, getInitialBattleStats()),
  legacyKeys: fallbackStorage.keys().filter((key) => key.startsWith('pokedex')),
});
