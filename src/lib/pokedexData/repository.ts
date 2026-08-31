import type { PokeApiLanguage } from '@/lib/i18n';
import type { Pokemon } from '@/data/pokemon';
import type { PokemonListItem } from '@/lib/pokemonListItem';
import { shouldUseLocalPokedexDatabase } from '@/lib/runtime';
import { POKEDEX_DATA_SCHEMA_VERSION, type StoredEvolutionChain } from './types';
import { getActivePokedexDataDatabaseName } from './packageManager';
import { openPokedexDataConnection } from './sqlite';

interface JsonRow {
  value_json: string;
}

interface CountRow {
  count: number;
}

interface QueryResult<T> {
  values?: T[];
}

const getRows = <T>(result: QueryResult<T>): T[] => result.values ?? [];

const parseJsonRow = <T>(row: JsonRow | undefined): T | null => {
  if (!row?.value_json) return null;

  try {
    return JSON.parse(row.value_json) as T;
  } catch {
    return null;
  }
};

const queryDataPackage = async <T>(
  query: (databaseName: string) => Promise<T>
): Promise<T | null> => {
  if (!shouldUseLocalPokedexDatabase()) return null;

  try {
    const databaseName = await getActivePokedexDataDatabaseName();
    return await query(databaseName);
  } catch {
    return null;
  }
};

export const isPokedexDataPackageAvailable = async (): Promise<boolean> => {
  return Boolean(
    await queryDataPackage(async (databaseName) => {
      const connection = await openPokedexDataConnection(databaseName, true);
      const result = await connection.query('SELECT COUNT(*) AS count FROM data_meta WHERE key = ?', [
        'schema_version',
      ]);
      const count = getRows<CountRow>(result)[0]?.count ?? 0;
      return count > 0;
    })
  );
};

export const readPokemonListFromDataPackage = async (
  language: PokeApiLanguage,
  offset = 0,
  limit = 50,
  includeAll = false
): Promise<PokemonListItem[] | null> => {
  return queryDataPackage(async (databaseName) => {
    const connection = await openPokedexDataConnection(databaseName, true);
    const sqlLimit = includeAll ? -1 : limit;
    const result = await connection.query(
      `SELECT value_json FROM pokemon_list_item
       WHERE language = ?
       ORDER BY pokemon_id ASC
       LIMIT ? OFFSET ?`,
      [language, sqlLimit, includeAll ? 0 : offset]
    );

    return getRows<JsonRow>(result)
      .map((row) => parseJsonRow<PokemonListItem>(row))
      .filter((pokemon): pokemon is PokemonListItem => Boolean(pokemon));
  });
};

export const readPokemonRangeFromDataPackage = async (
  language: PokeApiLanguage,
  startId: number,
  endId: number
): Promise<PokemonListItem[] | null> => {
  return queryDataPackage(async (databaseName) => {
    const connection = await openPokedexDataConnection(databaseName, true);
    const result = await connection.query(
      `SELECT value_json FROM pokemon_list_item
       WHERE language = ? AND pokemon_id >= ? AND pokemon_id <= ?
       ORDER BY pokemon_id ASC`,
      [language, startId, endId]
    );

    return getRows<JsonRow>(result)
      .map((row) => parseJsonRow<PokemonListItem>(row))
      .filter((pokemon): pokemon is PokemonListItem => Boolean(pokemon));
  });
};

export const readPokemonIdsFromDataPackage = async (
  language: PokeApiLanguage,
  ids: readonly number[]
): Promise<PokemonListItem[] | null> => {
  if (!ids.length) return [];

  return queryDataPackage(async (databaseName) => {
    const connection = await openPokedexDataConnection(databaseName, true);
    const placeholders = ids.map(() => '?').join(',');
    const result = await connection.query(
      `SELECT value_json FROM pokemon_list_item
       WHERE language = ? AND pokemon_id IN (${placeholders})
       ORDER BY pokemon_id ASC`,
      [language, ...ids]
    );

    return getRows<JsonRow>(result)
      .map((row) => parseJsonRow<PokemonListItem>(row))
      .filter((pokemon): pokemon is PokemonListItem => Boolean(pokemon));
  });
};

export const readPokemonDetailFromDataPackage = async (
  id: number,
  language: PokeApiLanguage
): Promise<Pokemon | null> => {
  return queryDataPackage(async (databaseName) => {
    const connection = await openPokedexDataConnection(databaseName, true);
    const result = await connection.query(
      `SELECT value_json FROM pokemon_detail
       WHERE pokemon_id = ? AND language = ? AND schema_version = ?`,
      [id, language, POKEDEX_DATA_SCHEMA_VERSION]
    );

    return parseJsonRow<Pokemon>(getRows<JsonRow>(result)[0]);
  });
};

export const readEvolutionChainFromDataPackage = async (
  pokemonId: number,
  language: PokeApiLanguage
) => {
  return queryDataPackage(async (databaseName) => {
    const connection = await openPokedexDataConnection(databaseName, true);
    const result = await connection.query(
      `SELECT value_json FROM pokemon_evolution_chain
       WHERE pokemon_id = ? AND language = ? AND schema_version = ?`,
      [pokemonId, language, POKEDEX_DATA_SCHEMA_VERSION]
    );

    return parseJsonRow<StoredEvolutionChain>(getRows<JsonRow>(result)[0])?.stages ?? null;
  });
};
