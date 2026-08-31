export const POKEAPI_BASE = 'https://pokeapi.co/api/v2';

export interface PokeAPIPokemon {
  id: number;
  name: string;
  base_experience: number | null;
  types: { slot: number; type: { name: string } }[];
  height: number;
  weight: number;
  species: { name: string; url: string };
  abilities: { ability: { name: string; url: string }; is_hidden: boolean }[];
  forms: { name: string; url: string }[];
  moves: {
    move: { name: string; url: string };
    version_group_details: {
      level_learned_at: number;
      move_learn_method: { name: string };
      version_group: { name: string };
    }[];
  }[];
  cries?: { latest?: string; legacy?: string };
  location_area_encounters: string;
  sprites: {
    front_default?: string | null;
    back_default?: string | null;
    front_shiny?: string | null;
    back_shiny?: string | null;
    other?: {
      'official-artwork'?: {
        front_default?: string | null;
        front_shiny?: string | null;
      };
    };
  };
  stats: { base_stat: number; stat: { name: string } }[];
}

export interface PokeAPISpecies {
  names: { name: string; language: { name: string } }[];
  flavor_text_entries: { flavor_text: string; language: { name: string }; version: { name: string } }[];
  pokedex_numbers: { entry_number: number; pokedex: { name: string; url: string } }[];
  genera: { genus: string; language: { name: string } }[];
  varieties: { is_default: boolean; pokemon: { name: string; url: string } }[];
  color: { name: string };
  habitat: { name: string } | null;
  growth_rate: { name: string };
  generation: { name: string };
  shape: { name: string } | null;
  capture_rate: number;
  base_happiness: number;
  gender_rate: number;
  is_baby: boolean;
  is_legendary: boolean;
  is_mythical: boolean;
  egg_groups: { name: string; url: string }[];
  hatch_counter: number;
}

export interface PokeAPIAbility {
  name: string;
  names: { name: string; language: { name: string } }[];
  flavor_text_entries: {
    flavor_text: string;
    language: { name: string };
    version_group: { name: string };
  }[];
  effect_entries: {
    short_effect: string;
    effect: string;
    language: { name: string };
  }[];
}

export interface PokeAPIEncounter {
  location_area: { name: string; url: string };
  version_details: {
    version: { name: string };
    max_chance: number;
    encounter_details: {
      min_level: number;
      max_level: number;
      chance: number;
      method: { name: string };
    }[];
  }[];
}

export interface PokeAPINamedResource {
  name: string;
  url: string;
}

export interface PokeAPIResourceList {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokeAPINamedResource[];
}

export const fetchPokeApiJson = async <T,>(url: string): Promise<T> => {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`Failed to fetch ${url}`);
  return response.json() as Promise<T>;
};

export const fetchPokemonResource = (id: number): Promise<PokeAPIPokemon> => {
  return fetchPokeApiJson<PokeAPIPokemon>(`${POKEAPI_BASE}/pokemon/${id}`);
};

export const fetchPokemonSpeciesList = (
  offset: number,
  limit: number
): Promise<PokeAPIResourceList> => {
  return fetchPokeApiJson<PokeAPIResourceList>(
    `${POKEAPI_BASE}/pokemon-species?offset=${offset}&limit=${limit}`
  );
};

export const fetchSpeciesResource = (url: string): Promise<PokeAPISpecies> => {
  return fetchPokeApiJson<PokeAPISpecies>(url);
};

export const fetchAbilityResource = (url: string): Promise<PokeAPIAbility> => {
  return fetchPokeApiJson<PokeAPIAbility>(url);
};

export const fetchEncounterResources = (url: string): Promise<PokeAPIEncounter[]> => {
  return fetchPokeApiJson<PokeAPIEncounter[]>(url);
};
