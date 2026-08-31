export type PokemonSpecialFilterKind =
  | 'mega'
  | 'primal'
  | 'gmax'
  | 'legendary'
  | 'mythical'
  | 'ultraBeast';

export type PokemonSpecialFormKind = PokemonSpecialFilterKind;

const MEGA_EVOLUTION_IDS = [
  3, 6, 9, 15, 18, 65, 80, 94, 115, 127, 130, 142, 150, 181, 208, 212, 214, 229, 248,
  254, 257, 260, 282, 302, 303, 306, 308, 310, 319, 323, 334, 354, 359, 362, 373, 376,
  380, 381, 384, 428, 445, 448, 460, 475, 531, 719,
] as const;

const PRIMAL_REVERSION_IDS = [382, 383] as const;

const GIGANTAMAX_IDS = [
  3, 6, 9, 12, 25, 52, 68, 94, 99, 131, 133, 143, 569, 809, 812, 815, 818, 823, 826,
  834, 839, 841, 842, 844, 849, 851, 858, 861, 869, 879, 884, 892,
] as const;

const LEGENDARY_IDS = [
  144, 145, 146, 150, 243, 244, 245, 249, 250, 377, 378, 379, 380, 381, 382, 383, 384,
  480, 481, 482, 483, 484, 485, 486, 487, 488, 638, 639, 640, 641, 642, 643, 644, 645,
  646, 716, 717, 718, 772, 773, 785, 786, 787, 788, 789, 790, 791, 792, 800, 888, 889,
  890, 891, 892, 894, 895, 896, 897, 898, 905, 1001, 1002, 1003, 1004, 1007, 1008,
  1014, 1015, 1016, 1017, 1024,
] as const;

const MYTHICAL_IDS = [
  151, 251, 385, 386, 489, 490, 491, 492, 493, 494, 647, 648, 649, 719, 720, 721, 801,
  802, 807, 808, 809, 893, 1025,
] as const;

const ULTRA_BEAST_IDS = [793, 794, 795, 796, 797, 798, 799, 803, 804, 805, 806] as const;

export const pokemonSpecialFormIds: Record<PokemonSpecialFilterKind, readonly number[]> = {
  mega: MEGA_EVOLUTION_IDS,
  primal: PRIMAL_REVERSION_IDS,
  gmax: GIGANTAMAX_IDS,
  legendary: LEGENDARY_IDS,
  mythical: MYTHICAL_IDS,
  ultraBeast: ULTRA_BEAST_IDS,
};

export const getPokemonSpecialFormKinds = (pokemonId: number): PokemonSpecialFilterKind[] => {
  const kinds: PokemonSpecialFilterKind[] = [];

  if (MEGA_EVOLUTION_IDS.includes(pokemonId as (typeof MEGA_EVOLUTION_IDS)[number])) {
    kinds.push('mega');
  }

  if (PRIMAL_REVERSION_IDS.includes(pokemonId as (typeof PRIMAL_REVERSION_IDS)[number])) {
    kinds.push('primal');
  }

  if (GIGANTAMAX_IDS.includes(pokemonId as (typeof GIGANTAMAX_IDS)[number])) {
    kinds.push('gmax');
  }

  if (LEGENDARY_IDS.includes(pokemonId as (typeof LEGENDARY_IDS)[number])) {
    kinds.push('legendary');
  }

  if (MYTHICAL_IDS.includes(pokemonId as (typeof MYTHICAL_IDS)[number])) {
    kinds.push('mythical');
  }

  if (ULTRA_BEAST_IDS.includes(pokemonId as (typeof ULTRA_BEAST_IDS)[number])) {
    kinds.push('ultraBeast');
  }

  return kinds;
};
