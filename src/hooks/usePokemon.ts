import { useQuery, useInfiniteQuery } from '@tanstack/react-query';
import { Pokemon, PokemonAbilityDetail } from '@/data/pokemon';
import {
  LOCAL_POKEMON_MAX_ID,
  localPokemonIndex,
} from '@/data/generated/pokemonIndex';
import { PokeApiLanguage } from '@/lib/i18n';
import { POKEAPI_DATA_CACHE_TTL_MS, createApiCacheKey, getCachedOrFetch } from '@/lib/apiCache';
import {
  fetchAbilityResource,
  fetchEncounterResources,
  fetchPokemonResource,
  fetchSpeciesResource,
} from '@/lib/pokeApiClient';
import {
  formatEnglishPokemonName,
  getAbilityNameAndEffect,
  getLocalizedDescription,
  getLocalizedName,
  getPokemonShinyImageUrl,
  getStatValue,
  mapPokeApiType,
  summarizeDexNumbers,
  summarizeEncounters,
  summarizeFlavorTexts,
  summarizeImageVariants,
  summarizeMoves,
  summarizePokemonForms,
  summarizeSpeciesProfile,
} from '@/lib/pokemonTransformers';
import {
  localPokemonById,
  toPokemonListItem,
  type PokemonListItem,
} from '@/lib/pokemonListItem';
import {
  readPokemonDetailFromDataPackage,
  readPokemonIdsFromDataPackage,
  readPokemonListFromDataPackage,
  readPokemonRangeFromDataPackage,
} from '@/lib/pokedexData/repository';
import { getPokedexDataPackageStatus } from '@/lib/pokedexData/packageManager';
import {
  fetchRemotePokemonCatalogSize,
  fetchRemotePokemonIds,
  fetchRemotePokemonList,
  fetchRemotePokemonRange,
} from '@/lib/pokemonRemote';
import { shouldUseLocalPokedexDatabase } from '@/lib/runtime';
import { useI18n } from './useI18n';

const POKEMON_LIMIT = 50;
export const MAX_POKEMON_ID = LOCAL_POKEMON_MAX_ID;
const QUERY_CACHE_TIME = POKEAPI_DATA_CACHE_TTL_MS;

export type { PokemonListItem } from '@/lib/pokemonListItem';

export const usePokemonDataPackageStatus = () => {
  return useQuery({
    queryKey: ['pokemonDataPackageStatus'],
    queryFn: getPokedexDataPackageStatus,
    enabled: shouldUseLocalPokedexDatabase(),
    staleTime: QUERY_CACHE_TIME,
    gcTime: QUERY_CACHE_TIME,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });
};

const fetchAbilityDetailFromApi = async (
  ability: { name: string; url: string },
  language: PokeApiLanguage,
  isHidden: boolean
): Promise<PokemonAbilityDetail> => {
  try {
    const data = await fetchAbilityResource(ability.url);
    const { name, effect } = getAbilityNameAndEffect(data, language);
    return { name, isHidden, effect };
  } catch {
    return {
      name: formatEnglishPokemonName(ability.name),
      isHidden,
      effect: '',
    };
  }
};

const fetchAbilityDetail = (
  ability: { name: string; url: string },
  language: PokeApiLanguage,
  isHidden: boolean
): Promise<PokemonAbilityDetail> => {
  return getCachedOrFetch(
    createApiCacheKey('ability-detail', language, ability.name, isHidden),
    () => fetchAbilityDetailFromApi(ability, language, isHidden)
  );
};

const fetchPokemonEncounters = (
  encounterUrl: string,
  language: PokeApiLanguage,
  pokemonName: string
) => {
  return getCachedOrFetch(
    createApiCacheKey('pokemon-encounters', language, pokemonName),
    async () => summarizeEncounters(await fetchEncounterResources(encounterUrl), language)
  );
};

const fetchPokemonRange = async (
  startId: number,
  endId: number,
  language: PokeApiLanguage
): Promise<PokemonListItem[]> => {
  if (!shouldUseLocalPokedexDatabase()) {
    return fetchRemotePokemonRange(startId, endId, language);
  }

  const localDataPackageItems = await readPokemonRangeFromDataPackage(language, startId, endId);
  if (localDataPackageItems?.length) return localDataPackageItems;

  return localPokemonIndex
    .filter((pokemon) => pokemon.id >= startId && pokemon.id <= endId)
    .map((pokemon) => toPokemonListItem(pokemon, language));
};

const fetchPokemonBatch = async (
  offset: number,
  language: PokeApiLanguage,
  includeAll = false
): Promise<PokemonListItem[]> => {
  if (!shouldUseLocalPokedexDatabase()) {
    return fetchRemotePokemonList(offset, POKEMON_LIMIT, language, includeAll);
  }

  const localDataPackageItems = await readPokemonListFromDataPackage(language, offset, POKEMON_LIMIT, includeAll);
  if (localDataPackageItems?.length) return localDataPackageItems;

  const source = includeAll
    ? localPokemonIndex
    : localPokemonIndex.slice(offset, offset + POKEMON_LIMIT);

  return source.map((pokemon) => toPokemonListItem(pokemon, language));
};

const fetchPokemonIds = async (
  ids: readonly number[],
  language: PokeApiLanguage
): Promise<PokemonListItem[]> => {
  if (!shouldUseLocalPokedexDatabase()) {
    return fetchRemotePokemonIds(ids, language);
  }

  const localDataPackageItems = await readPokemonIdsFromDataPackage(language, ids);
  if (localDataPackageItems?.length) return localDataPackageItems;

  return ids
    .map((id) => localPokemonById.get(id))
    .filter((pokemon): pokemon is NonNullable<typeof pokemon> => Boolean(pokemon))
    .map((pokemon) => toPokemonListItem(pokemon, language));
};

const fetchPokemonDetailFromApi = async (id: number, language: PokeApiLanguage): Promise<Pokemon> => {
  const pokemonData = await fetchPokemonResource(id);
  const speciesData = await fetchSpeciesResource(pokemonData.species.url).catch(() => null);

  const englishName = formatEnglishPokemonName(pokemonData.name);
  const name = getLocalizedName(speciesData?.names, language, englishName);
  const description = getLocalizedDescription(speciesData, language);

  const [abilityDetails, encounters] = await Promise.all([
    Promise.all(pokemonData.abilities.map((entry) => fetchAbilityDetail(entry.ability, language, entry.is_hidden))),
    fetchPokemonEncounters(pokemonData.location_area_encounters, language, pokemonData.name),
  ]);

  return {
    id: pokemonData.id,
    name,
    nameEn: englishName,
    types: pokemonData.types.map((entry) => mapPokeApiType(entry.type.name)),
    description,
    height: pokemonData.height / 10,
    weight: pokemonData.weight / 10,
    baseExperience: pokemonData.base_experience ?? undefined,
    abilities: abilityDetails.map((ability) => ability.name),
    abilityDetails,
    forms: summarizePokemonForms(speciesData?.varieties ?? [], pokemonData.name, language),
    moves: summarizeMoves(pokemonData.moves, language),
    encounters,
    speciesProfile: summarizeSpeciesProfile(speciesData, language),
    dexNumbers: summarizeDexNumbers(speciesData, language),
    flavorTexts: summarizeFlavorTexts(speciesData, language),
    imageVariants: summarizeImageVariants(pokemonData),
    shinyImageUrl: getPokemonShinyImageUrl(pokemonData),
    cryUrl: pokemonData.cries?.latest || pokemonData.cries?.legacy,
    stats: {
      hp: getStatValue(pokemonData, 'hp'),
      attack: getStatValue(pokemonData, 'attack'),
      defense: getStatValue(pokemonData, 'defense'),
      spAttack: getStatValue(pokemonData, 'special-attack'),
      spDefense: getStatValue(pokemonData, 'special-defense'),
      speed: getStatValue(pokemonData, 'speed'),
    },
  };
};

const fetchPokemonDetail = (id: number, language: PokeApiLanguage): Promise<Pokemon> => {
  if (!shouldUseLocalPokedexDatabase()) {
    return getCachedOrFetch(
      createApiCacheKey('pokemon-detail-v2', language, id),
      () => fetchPokemonDetailFromApi(id, language)
    );
  }

  return readPokemonDetailFromDataPackage(id, language).then((localPokemon) => {
    if (localPokemon) return localPokemon;

    return getCachedOrFetch(
      createApiCacheKey('pokemon-detail-v2', language, id),
      () => fetchPokemonDetailFromApi(id, language)
    );
  });
};

interface UsePokemonListOptions {
  autoLoadAll?: boolean;
}

interface UsePokemonRangeListOptions {
  startId: number | null;
  endId: number | null;
  cacheKey: string | number | null;
  enabled?: boolean;
}

interface UsePokemonIdListOptions {
  ids: readonly number[];
  cacheKey: string | number | null;
  enabled?: boolean;
}

export const usePokemonList = ({ autoLoadAll = false }: UsePokemonListOptions = {}) => {
  const { pokeApiLanguage } = useI18n();
  const dataPackageStatusQuery = usePokemonDataPackageStatus();
  const remoteCatalogQuery = useQuery({
    queryKey: ['pokemonRemoteCatalogSize'],
    queryFn: fetchRemotePokemonCatalogSize,
    enabled: !shouldUseLocalPokedexDatabase(),
    staleTime: QUERY_CACHE_TIME,
    gcTime: QUERY_CACHE_TIME,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });
  const maxPokemonId = shouldUseLocalPokedexDatabase()
    ? dataPackageStatusQuery.data?.activeMeta?.maxPokemonId || MAX_POKEMON_ID
    : remoteCatalogQuery.data || MAX_POKEMON_ID;
  const query = useInfiniteQuery({
    queryKey: ['pokemonList', pokeApiLanguage, autoLoadAll ? 'all' : 'paged'],
    queryFn: ({ pageParam = 0 }) => fetchPokemonBatch(Number(pageParam), pokeApiLanguage, autoLoadAll),
    getNextPageParam: (lastPage, allPages) => {
      if (autoLoadAll || lastPage.length < POKEMON_LIMIT) return undefined;
      const loadedCount = allPages.reduce((count, page) => count + page.length, 0);
      return loadedCount < maxPokemonId ? loadedCount : undefined;
    },
    initialPageParam: 0,
    staleTime: QUERY_CACHE_TIME,
    gcTime: QUERY_CACHE_TIME,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });

  return { ...query, maxPokemonId };
};

export const usePokemonRangeList = ({
  startId,
  endId,
  cacheKey,
  enabled = true,
}: UsePokemonRangeListOptions) => {
  const { pokeApiLanguage } = useI18n();
  const canFetch = enabled && startId !== null && endId !== null && startId <= endId;

  return useQuery({
    queryKey: ['pokemonRangeList', pokeApiLanguage, cacheKey, startId, endId],
    queryFn: () => fetchPokemonRange(startId!, endId!, pokeApiLanguage),
    enabled: canFetch,
    staleTime: QUERY_CACHE_TIME,
    gcTime: QUERY_CACHE_TIME,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });
};

export const usePokemonIdList = ({
  ids,
  cacheKey,
  enabled = true,
}: UsePokemonIdListOptions) => {
  const { pokeApiLanguage } = useI18n();
  const idsSignature = ids.join('-');
  const canFetch = enabled && ids.length > 0;

  return useQuery({
    queryKey: ['pokemonIdList', pokeApiLanguage, cacheKey, idsSignature],
    queryFn: () => fetchPokemonIds(ids, pokeApiLanguage),
    enabled: canFetch,
    staleTime: QUERY_CACHE_TIME,
    gcTime: QUERY_CACHE_TIME,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });
};

export const usePokemonDetail = (id: number | null) => {
  const { pokeApiLanguage } = useI18n();

  return useQuery({
    queryKey: ['pokemonDetailV2', id, pokeApiLanguage],
    queryFn: () => fetchPokemonDetail(id!, pokeApiLanguage),
    enabled: id !== null,
    staleTime: QUERY_CACHE_TIME,
    gcTime: QUERY_CACHE_TIME,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });
};
