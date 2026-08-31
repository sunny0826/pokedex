import type { PokemonType } from '@/data/pokemon';
import {
  getLocalPokemonDisplayName,
  localPokemonIndex,
  type LocalPokemonIndexItem,
} from '@/data/generated/pokemonIndex';
import type { PokeApiLanguage } from '@/lib/i18n';
import { getPokemonSpecialFormKinds, type PokemonSpecialFormKind } from '@/lib/pokemonSpecialForms';

export interface PokemonListItem {
  id: number;
  name: string;
  nameEn: string;
  types: PokemonType[];
  specialForms: PokemonSpecialFormKind[];
}

export const localPokemonById = new Map<number, LocalPokemonIndexItem>(
  localPokemonIndex.map((pokemon) => [pokemon.id, pokemon])
);

export const toPokemonListItem = (
  pokemon: LocalPokemonIndexItem,
  language: PokeApiLanguage
): PokemonListItem => ({
  id: pokemon.id,
  name: getLocalPokemonDisplayName(pokemon, language),
  nameEn: pokemon.nameEn,
  types: [...pokemon.types],
  specialForms: getPokemonSpecialFormKinds(pokemon.id),
});
