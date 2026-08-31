import type { AppLanguage } from '@/lib/i18n';

export interface Pokemon {
  id: number;
  name: string;
  nameEn: string;
  types: PokemonType[];
  description: string;
  height: number;
  weight: number;
  abilities: string[];
  abilityDetails?: PokemonAbilityDetail[];
  forms?: PokemonFormSummary[];
  moves?: PokemonMoveSummary[];
  encounters?: PokemonEncounterSummary[];
  speciesProfile?: PokemonSpeciesProfile;
  dexNumbers?: PokemonDexNumber[];
  flavorTexts?: PokemonFlavorText[];
  imageVariants?: PokemonImageVariant[];
  shinyImageUrl?: string;
  baseExperience?: number;
  cryUrl?: string;
  stats: {
    hp: number;
    attack: number;
    defense: number;
    spAttack: number;
    spDefense: number;
    speed: number;
  };
}

export interface PokemonAbilityDetail {
  name: string;
  isHidden: boolean;
  effect: string;
}

export interface PokemonFormSummary {
  name: string;
  label: string;
  pokemonId: number;
  imageUrl: string;
  isDefault: boolean;
}

export interface PokemonMoveSummary {
  name: string;
  method: string;
  level: number | null;
  versionGroup: string;
}

export interface PokemonEncounterSummary {
  location: string;
  version: string;
  method: string;
  levelRange: string;
  chance: number;
}

export interface PokemonDexNumber {
  pokedex: string;
  entryNumber: number;
}

export interface PokemonFlavorText {
  version: string;
  text: string;
}

export type PokemonImageVariantKind =
  | 'official'
  | 'officialShiny'
  | 'front'
  | 'back'
  | 'frontShiny'
  | 'backShiny';

export interface PokemonImageVariant {
  kind: PokemonImageVariantKind;
  imageUrl: string;
}

export interface PokemonSpeciesProfile {
  genus: string;
  color: string;
  habitat: string;
  growthRate: string;
  generation: string;
  shape: string;
  captureRate: number;
  baseHappiness: number;
  gender: PokemonGenderRatio;
  eggGroups: string[];
  hatchSteps: number;
  flags: PokemonSpeciesFlag[];
}

export interface PokemonGenderRatio {
  male: number | null;
  female: number | null;
  genderless: boolean;
}

export type PokemonSpeciesFlag = 'baby' | 'legendary' | 'mythical';

export type PokemonType = 
  | 'normal' | 'fire' | 'water' | 'electric' | 'grass' | 'ice'
  | 'fighting' | 'poison' | 'ground' | 'flying' | 'psychic' | 'bug'
  | 'rock' | 'ghost' | 'dragon' | 'dark' | 'steel' | 'fairy';

export const typeNamesByLanguage: Record<AppLanguage, Record<PokemonType, string>> = {
  zh: {
    normal: '一般',
    fire: '火',
    water: '水',
    electric: '电',
    grass: '草',
    ice: '冰',
    fighting: '格斗',
    poison: '毒',
    ground: '地面',
    flying: '飞行',
    psychic: '超能力',
    bug: '虫',
    rock: '岩石',
    ghost: '幽灵',
    dragon: '龙',
    dark: '恶',
    steel: '钢',
    fairy: '妖精',
  },
  en: {
    normal: 'Normal',
    fire: 'Fire',
    water: 'Water',
    electric: 'Electric',
    grass: 'Grass',
    ice: 'Ice',
    fighting: 'Fighting',
    poison: 'Poison',
    ground: 'Ground',
    flying: 'Flying',
    psychic: 'Psychic',
    bug: 'Bug',
    rock: 'Rock',
    ghost: 'Ghost',
    dragon: 'Dragon',
    dark: 'Dark',
    steel: 'Steel',
    fairy: 'Fairy',
  },
};

export const typeNames = typeNamesByLanguage.zh;

export const getTypeName = (type: PokemonType, language: AppLanguage = 'zh'): string => {
  return typeNamesByLanguage[language][type] ?? typeNames[type];
};

export const typeColorClasses: Record<PokemonType, string> = {
  normal: 'bg-type-normal',
  fire: 'bg-type-fire',
  water: 'bg-type-water',
  electric: 'bg-type-electric',
  grass: 'bg-type-grass',
  ice: 'bg-type-ice',
  fighting: 'bg-type-fighting',
  poison: 'bg-type-poison',
  ground: 'bg-type-ground',
  flying: 'bg-type-flying',
  psychic: 'bg-type-psychic',
  bug: 'bg-type-bug',
  rock: 'bg-type-rock',
  ghost: 'bg-type-ghost',
  dragon: 'bg-type-dragon',
  dark: 'bg-type-dark',
  steel: 'bg-type-steel',
  fairy: 'bg-type-fairy',
};

export const pokemonList: Pokemon[] = [
  {
    id: 1,
    name: '妙蛙种子',
    nameEn: 'Bulbasaur',
    types: ['grass', 'poison'],
    description: '它出生后暂时由背上的种子提供养分成长。',
    height: 0.7,
    weight: 6.9,
    abilities: ['茂盛', '叶绿素'],
    stats: { hp: 45, attack: 49, defense: 49, spAttack: 65, spDefense: 65, speed: 45 },
  },
  {
    id: 2,
    name: '妙蛙草',
    nameEn: 'Ivysaur',
    types: ['grass', 'poison'],
    description: '当它开始准备从背上的花蕾开出大花时，会散发甜甜的香味。',
    height: 1.0,
    weight: 13.0,
    abilities: ['茂盛', '叶绿素'],
    stats: { hp: 60, attack: 62, defense: 63, spAttack: 80, spDefense: 80, speed: 60 },
  },
  {
    id: 3,
    name: '妙蛙花',
    nameEn: 'Venusaur',
    types: ['grass', 'poison'],
    description: '背上花的香气让人心情平静。在战斗中这花会释放芳香的花粉。',
    height: 2.0,
    weight: 100.0,
    abilities: ['茂盛', '叶绿素'],
    stats: { hp: 80, attack: 82, defense: 83, spAttack: 100, spDefense: 100, speed: 80 },
  },
  {
    id: 4,
    name: '小火龙',
    nameEn: 'Charmander',
    types: ['fire'],
    description: '尾巴上燃烧的火焰代表着它的生命力。当它虚弱时，火焰也会变小。',
    height: 0.6,
    weight: 8.5,
    abilities: ['猛火', '太阳之力'],
    stats: { hp: 39, attack: 52, defense: 43, spAttack: 60, spDefense: 50, speed: 65 },
  },
  {
    id: 5,
    name: '火恐龙',
    nameEn: 'Charmeleon',
    types: ['fire'],
    description: '性格粗暴，用尖锐的爪子无情地打倒对手。',
    height: 1.1,
    weight: 19.0,
    abilities: ['猛火', '太阳之力'],
    stats: { hp: 58, attack: 64, defense: 58, spAttack: 80, spDefense: 65, speed: 80 },
  },
  {
    id: 6,
    name: '喷火龙',
    nameEn: 'Charizard',
    types: ['fire', 'flying'],
    description: '用强壮的翅膀能飞到很高的天空。它的火焰能熔化一切。',
    height: 1.7,
    weight: 90.5,
    abilities: ['猛火', '太阳之力'],
    stats: { hp: 78, attack: 84, defense: 78, spAttack: 109, spDefense: 85, speed: 100 },
  },
  {
    id: 7,
    name: '杰尼龟',
    nameEn: 'Squirtle',
    types: ['water'],
    description: '出生后，背上会慢慢隆起变硬成龟壳。会从嘴里喷出泡沫。',
    height: 0.5,
    weight: 9.0,
    abilities: ['激流', '雨盘'],
    stats: { hp: 44, attack: 48, defense: 65, spAttack: 50, spDefense: 64, speed: 43 },
  },
  {
    id: 8,
    name: '卡咪龟',
    nameEn: 'Wartortle',
    types: ['water'],
    description: '耳朵上的毛茸茸尾巴是长寿的象征，深受人们喜爱。',
    height: 1.0,
    weight: 22.5,
    abilities: ['激流', '雨盘'],
    stats: { hp: 59, attack: 63, defense: 80, spAttack: 65, spDefense: 80, speed: 58 },
  },
  {
    id: 9,
    name: '水箭龟',
    nameEn: 'Blastoise',
    types: ['water'],
    description: '从龟壳上的喷水口喷出的水柱，连铁壁都能击穿。',
    height: 1.6,
    weight: 85.5,
    abilities: ['激流', '雨盘'],
    stats: { hp: 79, attack: 83, defense: 100, spAttack: 85, spDefense: 105, speed: 78 },
  },
  {
    id: 10,
    name: '绿毛虫',
    nameEn: 'Caterpie',
    types: ['bug'],
    description: '用头上的触角散发出臭味来赶走敌人、保护自己。',
    height: 0.3,
    weight: 2.9,
    abilities: ['鳞粉', '逃跑'],
    stats: { hp: 45, attack: 30, defense: 35, spAttack: 20, spDefense: 20, speed: 45 },
  },
  {
    id: 11,
    name: '铁甲蛹',
    nameEn: 'Metapod',
    types: ['bug'],
    description: '外壳如钢铁般坚硬。在进化前几乎不会动。',
    height: 0.7,
    weight: 9.9,
    abilities: ['蜕皮'],
    stats: { hp: 50, attack: 20, defense: 55, spAttack: 25, spDefense: 25, speed: 30 },
  },
  {
    id: 12,
    name: '巴大蝶',
    nameEn: 'Butterfree',
    types: ['bug', 'flying'],
    description: '翅膀上覆盖着防水的粉末，因此即使在雨天也能飞行。',
    height: 1.1,
    weight: 32.0,
    abilities: ['复眼', '有色眼镜'],
    stats: { hp: 60, attack: 45, defense: 50, spAttack: 90, spDefense: 80, speed: 70 },
  },
  {
    id: 25,
    name: '皮卡丘',
    nameEn: 'Pikachu',
    types: ['electric'],
    description: '当好几只皮卡丘聚在一起时，它们的电力会引发雷电落到周围。',
    height: 0.4,
    weight: 6.0,
    abilities: ['静电', '避雷针'],
    stats: { hp: 35, attack: 55, defense: 40, spAttack: 50, spDefense: 50, speed: 90 },
  },
  {
    id: 26,
    name: '雷丘',
    nameEn: 'Raichu',
    types: ['electric'],
    description: '当体内积蓄了过多电力时，会变得具有攻击性。',
    height: 0.8,
    weight: 30.0,
    abilities: ['静电', '避雷针'],
    stats: { hp: 60, attack: 90, defense: 55, spAttack: 90, spDefense: 80, speed: 110 },
  },
  {
    id: 39,
    name: '胖丁',
    nameEn: 'Jigglypuff',
    types: ['normal', 'fairy'],
    description: '用不间断的唱歌让敌人睡着，然后用记号笔在脸上涂鸦。',
    height: 0.5,
    weight: 5.5,
    abilities: ['迷人之躯', '胜利之星'],
    stats: { hp: 115, attack: 45, defense: 20, spAttack: 45, spDefense: 25, speed: 20 },
  },
  {
    id: 94,
    name: '耿鬼',
    nameEn: 'Gengar',
    types: ['ghost', 'poison'],
    description: '会悄悄靠近人类，使周围温度骤降约5度。',
    height: 1.5,
    weight: 40.5,
    abilities: ['诅咒之躯'],
    stats: { hp: 60, attack: 65, defense: 60, spAttack: 130, spDefense: 75, speed: 110 },
  },
  {
    id: 133,
    name: '伊布',
    nameEn: 'Eevee',
    types: ['normal'],
    description: '因为基因不稳定，所以有很多进化的可能性。',
    height: 0.3,
    weight: 6.5,
    abilities: ['逃跑', '适应力'],
    stats: { hp: 55, attack: 55, defense: 50, spAttack: 45, spDefense: 65, speed: 55 },
  },
  {
    id: 143,
    name: '卡比兽',
    nameEn: 'Snorlax',
    types: ['normal'],
    description: '一天要吃下400公斤的食物，吃完就睡。',
    height: 2.1,
    weight: 460.0,
    abilities: ['免疫', '厚脂肪'],
    stats: { hp: 160, attack: 110, defense: 65, spAttack: 65, spDefense: 110, speed: 30 },
  },
  {
    id: 150,
    name: '超梦',
    nameEn: 'Mewtwo',
    types: ['psychic'],
    description: '由梦幻的基因经过重组而诞生。是所有宝可梦中最凶恶的。',
    height: 2.0,
    weight: 122.0,
    abilities: ['压迫感', '紧张感'],
    stats: { hp: 106, attack: 110, defense: 90, spAttack: 154, spDefense: 90, speed: 130 },
  },
  {
    id: 151,
    name: '梦幻',
    nameEn: 'Mew',
    types: ['psychic'],
    description: '因为能使用所有招式，被认为是宝可梦的始祖。',
    height: 0.4,
    weight: 4.0,
    abilities: ['同步'],
    stats: { hp: 100, attack: 100, defense: 100, spAttack: 100, spDefense: 100, speed: 100 },
  },
  {
    id: 495,
    name: '藤藤蛇',
    nameEn: 'Snivy',
    types: ['grass'],
    description: '如果沐浴在阳光下，就能比平时动作迅速。比起手，藤蔓用得更灵活。',
    height: 0.6,
    weight: 8.1,
    abilities: ['茂盛', '唱反调'],
    stats: { hp: 45, attack: 45, defense: 55, spAttack: 45, spDefense: 55, speed: 63 },
  },
  {
    id: 496,
    name: '青藤蛇',
    nameEn: 'Servine',
    types: ['grass'],
    description: '在阴暗的地方会变得虚弱。会用光合作用来制造能量。',
    height: 0.8,
    weight: 16.0,
    abilities: ['茂盛', '唱反调'],
    stats: { hp: 60, attack: 60, defense: 75, spAttack: 60, spDefense: 75, speed: 83 },
  },
  {
    id: 497,
    name: '君主蛇',
    nameEn: 'Serperior',
    types: ['grass'],
    description: '只用凌厉的眼神就能让对手畏惧退缩。',
    height: 3.3,
    weight: 63.0,
    abilities: ['茂盛', '唱反调'],
    stats: { hp: 75, attack: 75, defense: 95, spAttack: 75, spDefense: 95, speed: 113 },
  },
];

export const getPokemonById = (id: number): Pokemon | undefined => {
  return pokemonList.find(p => p.id === id);
};

export const getPokemonImageUrl = (id: number): string => {
  const paddedId = String(id).padStart(3, '0');
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
};

export const getPokemonSpriteUrl = (id: number): string => {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
};
