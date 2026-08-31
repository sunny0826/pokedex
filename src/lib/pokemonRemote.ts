import { createApiCacheKey, getCachedOrFetch, POKEAPI_DATA_CACHE_TTL_MS } from '@/lib/apiCache';
import type { PokeApiLanguage } from '@/lib/i18n';
import {
  POKEAPI_BASE,
  fetchPokemonResource,
  fetchPokemonSpeciesList,
  fetchSpeciesResource,
} from '@/lib/pokeApiClient';
import { getPokemonSpecialFormKinds } from '@/lib/pokemonSpecialForms';
import {
  formatEnglishPokemonName,
  getLocalizedName,
  getResourceIdFromUrl,
  mapPokeApiType,
} from '@/lib/pokemonTransformers';
import type { PokemonListItem } from '@/lib/pokemonListItem';

const REMOTE_FETCH_CONCURRENCY = 6;
const SPECIES_PAGE_LIMIT = 50;

const mapWithConcurrency = async <T, R>(
  items: readonly T[],
  concurrency: number,
  mapper: (item: T) => Promise<R>
): Promise<R[]> => {
  if (items.length === 0) return [];

  const results = new Array<R>(items.length);
  let nextIndex = 0;

  const worker = async () => {
    while (nextIndex < items.length) {
      const currentIndex = nextIndex;
      nextIndex += 1;
      results[currentIndex] = await mapper(items[currentIndex]);
    }
  };

  await Promise.all(
    Array.from({ length: Math.min(concurrency, items.length) }, () => worker())
  );

  return results;
};

const toPokemonListItemFromApi = async (
  id: number,
  language: PokeApiLanguage
): Promise<PokemonListItem> => {
  const [pokemonData, speciesById] = await Promise.all([
    fetchPokemonResource(id),
    fetchSpeciesResource(`${POKEAPI_BASE}/pokemon-species/${id}`).catch(() => null),
  ]);
  const speciesData =
    speciesById ??
    (await fetchSpeciesResource(pokemonData.species.url).catch(() => null));
  const englishName = formatEnglishPokemonName(pokemonData.name);

  return {
    id: pokemonData.id,
    name: getLocalizedName(speciesData?.names, language, englishName),
    nameEn: englishName,
    types: pokemonData.types.map((entry) => mapPokeApiType(entry.type.name)),
    specialForms: getPokemonSpecialFormKinds(pokemonData.id),
  };
};

const fetchPokemonListItemFromApi = (
  id: number,
  language: PokeApiLanguage
): Promise<PokemonListItem> => {
  return getCachedOrFetch(
    createApiCacheKey('pokemon-list-item', language, id),
    () => toPokemonListItemFromApi(id, language)
  );
};

const fetchPokemonListItemsByIds = async (
  ids: readonly number[],
  language: PokeApiLanguage
): Promise<PokemonListItem[]> => {
  const items = await mapWithConcurrency(ids, REMOTE_FETCH_CONCURRENCY, async (id) => {
    try {
      return await fetchPokemonListItemFromApi(id, language);
    } catch {
      return null;
    }
  });

  return items
    .filter((item): item is PokemonListItem => Boolean(item))
    .sort((left, right) => left.id - right.id);
};

export const fetchRemotePokemonCatalogSize = async (): Promise<number> => {
  return getCachedOrFetch(
    createApiCacheKey('pokemon-species-count'),
    async () => {
      const page = await fetchPokemonSpeciesList(0, 1);
      return page.count;
    },
    POKEAPI_DATA_CACHE_TTL_MS,
    (count) => count > 0
  );
};

const fetchRemoteSpeciesIds = async (offset: number, limit: number): Promise<number[]> => {
  const page = await fetchPokemonSpeciesList(offset, limit);
  return page.results
    .map((entry) => getResourceIdFromUrl(entry.url))
    .filter((id): id is number => id !== null);
};

const fetchAllRemoteSpeciesIds = async (): Promise<number[]> => {
  return getCachedOrFetch(createApiCacheKey('pokemon-species-ids'), async () => {
    const count = await fetchRemotePokemonCatalogSize();
    const page = await fetchPokemonSpeciesList(0, Math.max(count, SPECIES_PAGE_LIMIT));
    return page.results
      .map((entry) => getResourceIdFromUrl(entry.url))
      .filter((id): id is number => id !== null)
      .sort((left, right) => left - right);
  });
};

export const fetchRemotePokemonList = async (
  offset: number,
  limit: number,
  language: PokeApiLanguage,
  includeAll = false
): Promise<PokemonListItem[]> => {
  const ids = includeAll
    ? await fetchAllRemoteSpeciesIds()
    : await fetchRemoteSpeciesIds(offset, limit);

  return fetchPokemonListItemsByIds(ids, language);
};

export const fetchRemotePokemonRange = async (
  startId: number,
  endId: number,
  language: PokeApiLanguage
): Promise<PokemonListItem[]> => {
  if (endId < startId) return [];

  const ids = Array.from({ length: endId - startId + 1 }, (_, index) => startId + index);
  return fetchPokemonListItemsByIds(ids, language);
};

export const fetchRemotePokemonIds = async (
  ids: readonly number[],
  language: PokeApiLanguage
): Promise<PokemonListItem[]> => {
  return fetchPokemonListItemsByIds(ids, language);
};
