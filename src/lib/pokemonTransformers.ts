import {
  PokemonDexNumber,
  PokemonEncounterSummary,
  PokemonFlavorText,
  PokemonImageVariant,
  PokemonFormSummary,
  PokemonMoveSummary,
  PokemonSpeciesProfile,
  PokemonType,
} from '@/data/pokemon';
import { PokeApiLanguage, cleanPokeApiText, findPokeApiLocalizedEntry } from '@/lib/i18n';
import {
  PokeAPIAbility,
  PokeAPIEncounter,
  PokeAPIPokemon,
  PokeAPISpecies,
} from '@/lib/pokeApiClient';

export const mapPokeApiType = (typeName: string): PokemonType => {
  const typeMap: Record<string, PokemonType> = {
    normal: 'normal',
    fire: 'fire',
    water: 'water',
    electric: 'electric',
    grass: 'grass',
    ice: 'ice',
    fighting: 'fighting',
    poison: 'poison',
    ground: 'ground',
    flying: 'flying',
    psychic: 'psychic',
    bug: 'bug',
    rock: 'rock',
    ghost: 'ghost',
    dragon: 'dragon',
    dark: 'dark',
    steel: 'steel',
    fairy: 'fairy',
  };

  return typeMap[typeName] || 'normal';
};

export const formatEnglishPokemonName = (name: string): string => {
  return name
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');
};

export const formatResourceName = (name: string): string => {
  return name
    .split(/[-\s]+/)
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');
};

export const getResourceIdFromUrl = (url: string): number | null => {
  const match = url.match(/\/(\d+)\/?$/);
  return match ? Number(match[1]) : null;
};

export const getLocalizedName = (
  entries: { name: string; language: { name: string } }[] | undefined,
  language: PokeApiLanguage,
  fallback: string
): string => {
  return findPokeApiLocalizedEntry(entries, language)?.name || fallback;
};

export const getLocalizedDescription = (
  speciesData: PokeAPISpecies | null,
  language: PokeApiLanguage
): string => {
  const flavorText = findPokeApiLocalizedEntry(speciesData?.flavor_text_entries, language);
  return flavorText?.flavor_text ? cleanPokeApiText(flavorText.flavor_text) : '';
};

const RESOURCE_LABELS: Record<PokeApiLanguage, Record<string, string>> = {
  'zh-hans': {
    black: '黑色',
    blue: '蓝色',
    brown: '褐色',
    gray: '灰色',
    green: '绿色',
    pink: '粉色',
    purple: '紫色',
    red: '红色',
    white: '白色',
    yellow: '黄色',
    cave: '洞窟',
    forest: '森林',
    grassland: '草原',
    mountain: '山地',
    rare: '稀有',
    roughTerrain: '崎岖地形',
    sea: '海洋',
    urban: '城市',
    watersEdge: '水边',
    armor: '铠甲',
    arms: '双臂',
    ball: '球形',
    blob: '不定形',
    bugWings: '虫翼',
    fish: '鱼形',
    heads: '多头',
    humanoid: '人型',
    legs: '双足',
    quadruped: '四足',
    squiggle: '蛇形',
    tentacles: '触手',
    upright: '直立',
    wings: '翅膀',
    slow: '慢',
    medium: '中等',
    fast: '快',
    mediumSlow: '中慢',
    slowThenVeryFast: '先慢后快',
    fastThenVerySlow: '先快后慢',
    monster: '怪兽',
    water1: '水中1',
    bug: '虫',
    flying: '飞行',
    ground: '陆上',
    fairy: '妖精',
    plant: '植物',
    humanshape: '人型',
    water3: '水中3',
    mineral: '矿物',
    indeterminate: '不定形',
    water2: '水中2',
    ditto: '百变怪',
    dragon: '龙',
    noEggs: '未发现',
  },
  en: {
    black: 'Black',
    blue: 'Blue',
    brown: 'Brown',
    gray: 'Gray',
    green: 'Green',
    pink: 'Pink',
    purple: 'Purple',
    red: 'Red',
    white: 'White',
    yellow: 'Yellow',
    cave: 'Cave',
    forest: 'Forest',
    grassland: 'Grassland',
    mountain: 'Mountain',
    rare: 'Rare',
    roughTerrain: 'Rough Terrain',
    sea: 'Sea',
    urban: 'Urban',
    watersEdge: "Water's Edge",
    armor: 'Armor',
    arms: 'Arms',
    ball: 'Ball',
    blob: 'Blob',
    bugWings: 'Bug Wings',
    fish: 'Fish',
    heads: 'Heads',
    humanoid: 'Humanoid',
    legs: 'Legs',
    quadruped: 'Quadruped',
    squiggle: 'Squiggle',
    tentacles: 'Tentacles',
    upright: 'Upright',
    wings: 'Wings',
    slow: 'Slow',
    medium: 'Medium',
    fast: 'Fast',
    mediumSlow: 'Medium Slow',
    slowThenVeryFast: 'Slow Then Very Fast',
    fastThenVerySlow: 'Fast Then Very Slow',
    monster: 'Monster',
    water1: 'Water 1',
    bug: 'Bug',
    flying: 'Flying',
    ground: 'Field',
    fairy: 'Fairy',
    plant: 'Grass',
    humanshape: 'Human-Like',
    water3: 'Water 3',
    mineral: 'Mineral',
    indeterminate: 'Amorphous',
    water2: 'Water 2',
    ditto: 'Ditto',
    dragon: 'Dragon',
    noEggs: 'Undiscovered',
  },
};

const toResourceKey = (name: string): string => {
  return name.replace(/-([a-z])/g, (_, character: string) => character.toUpperCase());
};

const formatLocalizedResourceName = (
  name: string | undefined,
  language: PokeApiLanguage,
  fallback = ''
): string => {
  if (!name) return fallback;
  const key = toResourceKey(name);
  return RESOURCE_LABELS[language][key] ?? formatResourceName(name);
};

const formatGenerationName = (name: string | undefined, language: PokeApiLanguage): string => {
  if (!name) return '';
  const generationId = name.split('-').pop()?.toUpperCase();
  return language === 'zh-hans' ? `第${generationId}世代` : `Generation ${generationId}`;
};

const POKEDEX_LABELS: Record<PokeApiLanguage, Record<string, string>> = {
  'zh-hans': {
    national: '全国',
    kanto: '关都',
    originalJohto: '城都',
    updatedJohto: '城都',
    hoenn: '丰缘',
    originalSinnoh: '神奥',
    extendedSinnoh: '神奥',
    originalUnova: '合众',
    updatedUnova: '合众',
    kalosCentral: '卡洛斯 中央',
    kalosCoastal: '卡洛斯 海岸',
    kalosMountain: '卡洛斯 山岳',
    originalAlola: '阿罗拉',
    originalMelemele: '美乐美乐',
    originalAkala: '阿卡拉',
    originalUlaula: '乌拉乌拉',
    originalPoni: '波尼',
    updatedAlola: '阿罗拉',
    updatedMelemele: '美乐美乐',
    updatedAkala: '阿卡拉',
    updatedUlaula: '乌拉乌拉',
    updatedPoni: '波尼',
    letsgoKanto: "Let's Go 关都",
    galar: '伽勒尔',
    isleOfArmor: '铠岛',
    crownTundra: '王冠雪原',
    hisui: '洗翠',
    paldea: '帕底亚',
    kitakami: '北上',
    blueberry: '蓝莓',
  },
  en: {
    national: 'National',
    kanto: 'Kanto',
    originalJohto: 'Johto',
    updatedJohto: 'Johto',
    hoenn: 'Hoenn',
    originalSinnoh: 'Sinnoh',
    extendedSinnoh: 'Sinnoh',
    originalUnova: 'Unova',
    updatedUnova: 'Unova',
    kalosCentral: 'Kalos Central',
    kalosCoastal: 'Kalos Coastal',
    kalosMountain: 'Kalos Mountain',
    originalAlola: 'Alola',
    originalMelemele: 'Melemele',
    originalAkala: 'Akala',
    originalUlaula: 'Ulaula',
    originalPoni: 'Poni',
    updatedAlola: 'Alola',
    updatedMelemele: 'Melemele',
    updatedAkala: 'Akala',
    updatedUlaula: 'Ulaula',
    updatedPoni: 'Poni',
    letsgoKanto: "Let's Go Kanto",
    galar: 'Galar',
    isleOfArmor: 'Isle of Armor',
    crownTundra: 'Crown Tundra',
    hisui: 'Hisui',
    paldea: 'Paldea',
    kitakami: 'Kitakami',
    blueberry: 'Blueberry',
  },
};

const VERSION_LABELS: Record<string, string> = {
  red: 'Red',
  blue: 'Blue',
  yellow: 'Yellow',
  gold: 'Gold',
  silver: 'Silver',
  crystal: 'Crystal',
  ruby: 'Ruby',
  sapphire: 'Sapphire',
  emerald: 'Emerald',
  firered: 'FireRed',
  leafgreen: 'LeafGreen',
  diamond: 'Diamond',
  pearl: 'Pearl',
  platinum: 'Platinum',
  heartgold: 'HeartGold',
  soulsilver: 'SoulSilver',
  black: 'Black',
  white: 'White',
  'black-2': 'Black 2',
  'white-2': 'White 2',
  x: 'X',
  y: 'Y',
  'omega-ruby': 'Omega Ruby',
  'alpha-sapphire': 'Alpha Sapphire',
  sun: 'Sun',
  moon: 'Moon',
  'ultra-sun': 'Ultra Sun',
  'ultra-moon': 'Ultra Moon',
  'lets-go-pikachu': "Let's Go Pikachu",
  'lets-go-eevee': "Let's Go Eevee",
  sword: 'Sword',
  shield: 'Shield',
  'brilliant-diamond': 'Brilliant Diamond',
  'shining-pearl': 'Shining Pearl',
  'legends-arceus': 'Legends Arceus',
  scarlet: 'Scarlet',
  violet: 'Violet',
};

const formatPokedexName = (name: string, language: PokeApiLanguage): string => {
  const key = toResourceKey(name);
  return POKEDEX_LABELS[language][key] ?? formatResourceName(name);
};

const formatVersionName = (name: string): string => {
  return VERSION_LABELS[name] ?? formatResourceName(name);
};

const summarizeGenderRatio = (genderRate: number): PokemonSpeciesProfile['gender'] => {
  if (genderRate < 0) {
    return { male: null, female: null, genderless: true };
  }

  const female = genderRate * 12.5;
  return {
    male: 100 - female,
    female,
    genderless: false,
  };
};

export const summarizeSpeciesProfile = (
  speciesData: PokeAPISpecies | null,
  language: PokeApiLanguage
): PokemonSpeciesProfile | undefined => {
  if (!speciesData) return undefined;

  const genus =
    findPokeApiLocalizedEntry(speciesData.genera, language)?.genus ||
    findPokeApiLocalizedEntry(speciesData.genera, 'en')?.genus ||
    '';

  return {
    genus,
    color: formatLocalizedResourceName(speciesData.color?.name, language),
    habitat: formatLocalizedResourceName(
      speciesData.habitat?.name,
      language,
      language === 'zh-hans' ? '未知' : 'Unknown'
    ),
    growthRate: formatLocalizedResourceName(speciesData.growth_rate?.name, language),
    generation: formatGenerationName(speciesData.generation?.name, language),
    shape: formatLocalizedResourceName(speciesData.shape?.name, language),
    captureRate: speciesData.capture_rate,
    baseHappiness: speciesData.base_happiness,
    gender: summarizeGenderRatio(speciesData.gender_rate),
    eggGroups: speciesData.egg_groups.map((eggGroup) => formatLocalizedResourceName(eggGroup.name, language)),
    hatchSteps: (speciesData.hatch_counter + 1) * 255,
    flags: [
      speciesData.is_baby ? 'baby' : null,
      speciesData.is_legendary ? 'legendary' : null,
      speciesData.is_mythical ? 'mythical' : null,
    ].filter((flag): flag is PokemonSpeciesProfile['flags'][number] => Boolean(flag)),
  };
};

export const getPokemonShinyImageUrl = (pokemonData: PokeAPIPokemon): string | undefined => {
  return pokemonData.sprites.other?.['official-artwork']?.front_shiny || pokemonData.sprites.front_shiny || undefined;
};

export const summarizeImageVariants = (pokemonData: PokeAPIPokemon): PokemonImageVariant[] => {
  const officialArtwork = pokemonData.sprites.other?.['official-artwork'];
  const variants: (PokemonImageVariant | null)[] = [
    officialArtwork?.front_default
      ? { kind: 'official', imageUrl: officialArtwork.front_default }
      : null,
    officialArtwork?.front_shiny
      ? { kind: 'officialShiny', imageUrl: officialArtwork.front_shiny }
      : null,
    pokemonData.sprites.front_default
      ? { kind: 'front', imageUrl: pokemonData.sprites.front_default }
      : null,
    pokemonData.sprites.back_default
      ? { kind: 'back', imageUrl: pokemonData.sprites.back_default }
      : null,
    pokemonData.sprites.front_shiny
      ? { kind: 'frontShiny', imageUrl: pokemonData.sprites.front_shiny }
      : null,
    pokemonData.sprites.back_shiny
      ? { kind: 'backShiny', imageUrl: pokemonData.sprites.back_shiny }
      : null,
  ];

  return variants.filter((variant): variant is PokemonImageVariant => Boolean(variant));
};

export const summarizeDexNumbers = (
  speciesData: PokeAPISpecies | null,
  language: PokeApiLanguage
): PokemonDexNumber[] => {
  return (speciesData?.pokedex_numbers ?? [])
    .filter((entry) => entry.entry_number > 0)
    .slice(0, 8)
    .map((entry) => ({
      pokedex: formatPokedexName(entry.pokedex.name, language),
      entryNumber: entry.entry_number,
    }));
};

export const summarizeFlavorTexts = (
  speciesData: PokeAPISpecies | null,
  language: PokeApiLanguage
): PokemonFlavorText[] => {
  const seenTexts = new Set<string>();

  return (speciesData?.flavor_text_entries ?? [])
    .filter((entry) => entry.language.name === language)
    .map((entry) => ({
      version: formatVersionName(entry.version.name),
      text: cleanPokeApiText(entry.flavor_text),
    }))
    .filter((entry) => {
      if (!entry.text || seenTexts.has(entry.text)) return false;
      seenTexts.add(entry.text);
      return true;
    })
    .slice(0, 4);
};

export const getStatValue = (pokemonData: PokeAPIPokemon, statName: string): number => {
  const stat = pokemonData.stats.find((entry) => entry.stat.name === statName);
  return stat?.base_stat || 0;
};

export const getAbilityNameAndEffect = (
  abilityData: PokeAPIAbility,
  language: PokeApiLanguage
): { name: string; effect: string } => {
  const name = getLocalizedName(abilityData.names, language, formatEnglishPokemonName(abilityData.name));
  const flavorText = findPokeApiLocalizedEntry(abilityData.flavor_text_entries, language);
  const effectEntry = findPokeApiLocalizedEntry(abilityData.effect_entries, language);
  const effect = flavorText?.flavor_text
    ? cleanPokeApiText(flavorText.flavor_text)
    : effectEntry?.short_effect
      ? cleanPokeApiText(effectEntry.short_effect)
      : '';

  return { name, effect };
};

const FORM_LABELS: Record<PokeApiLanguage, [string, string][]> = {
  'zh-hans': [
    ['-alola', '阿罗拉'],
    ['-galar', '伽勒尔'],
    ['-hisui', '洗翠'],
    ['-paldea', '帕底亚'],
    ['-mega-x', 'Mega X'],
    ['-mega-y', 'Mega Y'],
    ['-mega', 'Mega'],
    ['-gmax', '超极巨化'],
    ['-totem', '霸主'],
    ['-origin', '起源'],
    ['-therian', '灵兽'],
    ['-incarnate', '化身'],
    ['-altered', '别种'],
    ['-sky', '天空'],
    ['-land', '陆上'],
    ['-blade', '刀剑'],
    ['-shield', '盾牌'],
    ['-school', '鱼群'],
    ['-solo', '单独'],
  ],
  en: [
    ['-alola', 'Alolan'],
    ['-galar', 'Galarian'],
    ['-hisui', 'Hisuian'],
    ['-paldea', 'Paldean'],
    ['-mega-x', 'Mega X'],
    ['-mega-y', 'Mega Y'],
    ['-mega', 'Mega'],
    ['-gmax', 'Gigantamax'],
    ['-totem', 'Totem'],
    ['-origin', 'Origin'],
    ['-therian', 'Therian'],
    ['-incarnate', 'Incarnate'],
    ['-altered', 'Altered'],
    ['-sky', 'Sky'],
    ['-land', 'Land'],
    ['-blade', 'Blade'],
    ['-shield', 'Shield'],
    ['-school', 'School'],
    ['-solo', 'Solo'],
  ],
};

const getFallbackFormLabel = (name: string, language: PokeApiLanguage): string => {
  const normalized = name.toLowerCase();
  const matchedLabel = FORM_LABELS[language].find(([suffix]) => normalized.includes(suffix))?.[1];
  return matchedLabel ?? formatEnglishPokemonName(name);
};

export const summarizePokemonForms = (
  varieties: PokeAPISpecies['varieties'],
  currentPokemonName: string,
  language: PokeApiLanguage
): PokemonFormSummary[] => {
  return varieties
    .filter((variety) => variety.pokemon.name !== currentPokemonName)
    .slice(0, 8)
    .map((variety) => {
      const pokemonId = getResourceIdFromUrl(variety.pokemon.url);
      if (!pokemonId) return null;

      return {
        name: formatEnglishPokemonName(variety.pokemon.name),
        label: getFallbackFormLabel(variety.pokemon.name, language),
        pokemonId,
        imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`,
        isDefault: variety.is_default,
      };
    })
    .filter((form): form is PokemonFormSummary => Boolean(form));
};

const MOVE_METHOD_LABELS: Record<PokeApiLanguage, Record<string, string>> = {
  'zh-hans': {
    'level-up': '升级',
    machine: '机器',
    tutor: '教学',
    egg: '遗传',
  },
  en: {
    'level-up': 'Level',
    machine: 'TM',
    tutor: 'Tutor',
    egg: 'Egg',
  },
};

const ENCOUNTER_METHOD_LABELS: Record<PokeApiLanguage, Record<string, string>> = {
  'zh-hans': {
    walk: '草丛',
    surf: '冲浪',
    'old-rod': '旧钓竿',
    'good-rod': '好钓竿',
    'super-rod': '厉害钓竿',
    gift: '赠送',
    overworld: '地图',
    'overworld-flying': '飞行',
    'overworld-flying-special': '特殊飞行',
    pokeflute: '宝可梦之笛',
  },
  en: {
    walk: 'Walk',
    surf: 'Surf',
    'old-rod': 'Old Rod',
    'good-rod': 'Good Rod',
    'super-rod': 'Super Rod',
    gift: 'Gift',
    overworld: 'Overworld',
    'overworld-flying': 'Flying',
    'overworld-flying-special': 'Special Flying',
    pokeflute: 'Poké Flute',
  },
};

const formatMoveMethod = (method: string, language: PokeApiLanguage): string => {
  return MOVE_METHOD_LABELS[language][method] ?? formatResourceName(method);
};

const formatEncounterMethod = (method: string, language: PokeApiLanguage): string => {
  return ENCOUNTER_METHOD_LABELS[language][method] ?? formatResourceName(method);
};

export const formatVersionGroup = (versionGroup: string): string => {
  return versionGroup
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join('/');
};

export const summarizeMoves = (
  moves: PokeAPIPokemon['moves'],
  language: PokeApiLanguage
): PokemonMoveSummary[] => {
  const summaries = moves
    .map((move) => {
      const latestDetail = [...move.version_group_details].pop();
      if (!latestDetail) return null;

      return {
        name: formatEnglishPokemonName(move.move.name),
        method: formatMoveMethod(latestDetail.move_learn_method.name, language),
        level: latestDetail.level_learned_at > 0 ? latestDetail.level_learned_at : null,
        versionGroup: formatVersionGroup(latestDetail.version_group.name),
        methodRank:
          latestDetail.move_learn_method.name === 'level-up'
            ? 0
            : latestDetail.move_learn_method.name === 'machine'
              ? 1
              : latestDetail.move_learn_method.name === 'tutor'
                ? 2
                : 3,
      };
    })
    .filter((move): move is PokemonMoveSummary & { methodRank: number } => Boolean(move))
    .sort((a, b) => {
      if (a.methodRank !== b.methodRank) return a.methodRank - b.methodRank;
      return (a.level ?? 999) - (b.level ?? 999);
    })
    .slice(0, 10);

  return summaries.map(({ methodRank, ...move }) => move);
};

export const summarizeEncounters = (
  encounters: PokeAPIEncounter[],
  language: PokeApiLanguage
): PokemonEncounterSummary[] => {
  const summaries = encounters.slice(0, 5).map((encounter) => {
    const versionDetail = encounter.version_details[encounter.version_details.length - 1];
    const detail = versionDetail?.encounter_details[0];
    if (!versionDetail || !detail) return null;

    const minLevel = Math.min(detail.min_level, detail.max_level);
    const maxLevel = Math.max(detail.min_level, detail.max_level);

    return {
      location: formatResourceName(encounter.location_area.name),
      version: formatVersionGroup(versionDetail.version.name),
      method: formatEncounterMethod(detail.method.name, language),
      levelRange: minLevel === maxLevel ? `${minLevel}` : `${minLevel}-${maxLevel}`,
      chance: versionDetail.max_chance || detail.chance,
    };
  });

  return summaries.filter((summary): summary is PokemonEncounterSummary => Boolean(summary));
};
