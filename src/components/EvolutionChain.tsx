import { useQuery } from '@tanstack/react-query';
import { getPokemonImageUrl, getTypeName, type PokemonType } from '@/data/pokemon';
import { Loader2, ChevronRight, Sparkles } from 'lucide-react';
import { PokeApiLanguage, findPokeApiLocalizedEntry } from '@/lib/i18n';
import { POKEAPI_DATA_CACHE_TTL_MS, createApiCacheKey, getCachedOrFetch } from '@/lib/apiCache';
import { useI18n } from '@/hooks/useI18n';
import { readEvolutionChainFromDataPackage } from '@/lib/pokedexData/repository';
import type { StoredEvolutionStage } from '@/lib/pokedexData/types';

const POKEAPI_BASE = 'https://pokeapi.co/api/v2';
const QUERY_CACHE_TIME = POKEAPI_DATA_CACHE_TTL_MS;

// Mega evolution data: pokemonId -> mega form info
const MEGA_EVOLUTIONS: Record<number, { name: string; nameZh: string; formId: string }[]> = {
  3: [{ name: 'venusaur-mega', nameZh: '超级妙蛙花', formId: '10033' }],
  6: [
    { name: 'charizard-mega-x', nameZh: '超级喷火龙X', formId: '10034' },
    { name: 'charizard-mega-y', nameZh: '超级喷火龙Y', formId: '10035' },
  ],
  9: [{ name: 'blastoise-mega', nameZh: '超级水箭龟', formId: '10036' }],
  15: [{ name: 'beedrill-mega', nameZh: '超级大针蜂', formId: '10090' }],
  18: [{ name: 'pidgeot-mega', nameZh: '超级大比鸟', formId: '10073' }],
  65: [{ name: 'alakazam-mega', nameZh: '超级胡地', formId: '10037' }],
  80: [{ name: 'slowbro-mega', nameZh: '超级呆壳兽', formId: '10071' }],
  94: [{ name: 'gengar-mega', nameZh: '超级耿鬼', formId: '10038' }],
  115: [{ name: 'kangaskhan-mega', nameZh: '超级袋兽', formId: '10039' }],
  127: [{ name: 'pinsir-mega', nameZh: '超级凯罗斯', formId: '10040' }],
  130: [{ name: 'gyarados-mega', nameZh: '超级暴鲤龙', formId: '10041' }],
  142: [{ name: 'aerodactyl-mega', nameZh: '超级化石翼龙', formId: '10042' }],
  150: [
    { name: 'mewtwo-mega-x', nameZh: '超级超梦X', formId: '10043' },
    { name: 'mewtwo-mega-y', nameZh: '超级超梦Y', formId: '10044' },
  ],
  181: [{ name: 'ampharos-mega', nameZh: '超级电龙', formId: '10045' }],
  208: [{ name: 'steelix-mega', nameZh: '超级大钢蛇', formId: '10072' }],
  212: [{ name: 'scizor-mega', nameZh: '超级巨钳螳螂', formId: '10046' }],
  214: [{ name: 'heracross-mega', nameZh: '超级赫拉克罗斯', formId: '10047' }],
  229: [{ name: 'houndoom-mega', nameZh: '超级黑鲁加', formId: '10048' }],
  248: [{ name: 'tyranitar-mega', nameZh: '超级班基拉斯', formId: '10049' }],
  254: [{ name: 'sceptile-mega', nameZh: '超级蜥蜴王', formId: '10065' }],
  257: [{ name: 'blaziken-mega', nameZh: '超级火焰鸡', formId: '10050' }],
  260: [{ name: 'swampert-mega', nameZh: '超级巨沼怪', formId: '10064' }],
  282: [{ name: 'gardevoir-mega', nameZh: '超级沙奈朵', formId: '10051' }],
  302: [{ name: 'sableye-mega', nameZh: '超级勾魂眼', formId: '10066' }],
  303: [{ name: 'mawile-mega', nameZh: '超级大嘴娃', formId: '10052' }],
  306: [{ name: 'aggron-mega', nameZh: '超级波士可多拉', formId: '10053' }],
  308: [{ name: 'medicham-mega', nameZh: '超级恰雷姆', formId: '10054' }],
  310: [{ name: 'manectric-mega', nameZh: '超级雷电兽', formId: '10055' }],
  319: [{ name: 'sharpedo-mega', nameZh: '超级巨牙鲨', formId: '10070' }],
  323: [{ name: 'camerupt-mega', nameZh: '超级喷火驼', formId: '10087' }],
  334: [{ name: 'altaria-mega', nameZh: '超级七夕青鸟', formId: '10067' }],
  354: [{ name: 'banette-mega', nameZh: '超级诅咒娃娃', formId: '10056' }],
  359: [{ name: 'absol-mega', nameZh: '超级阿勃梭鲁', formId: '10057' }],
  362: [{ name: 'glalie-mega', nameZh: '超级冰鬼护', formId: '10074' }],
  373: [{ name: 'salamence-mega', nameZh: '超级暴飞龙', formId: '10089' }],
  376: [{ name: 'metagross-mega', nameZh: '超级巨金怪', formId: '10076' }],
  380: [{ name: 'latias-mega', nameZh: '超级拉帝亚斯', formId: '10062' }],
  381: [{ name: 'latios-mega', nameZh: '超级拉帝欧斯', formId: '10063' }],
  384: [{ name: 'rayquaza-mega', nameZh: '超级烈空坐', formId: '10079' }],
  428: [{ name: 'lopunny-mega', nameZh: '超级长耳兔', formId: '10088' }],
  445: [{ name: 'garchomp-mega', nameZh: '超级烈咬陆鲨', formId: '10058' }],
  448: [{ name: 'lucario-mega', nameZh: '超级路卡利欧', formId: '10059' }],
  460: [{ name: 'abomasnow-mega', nameZh: '超级暴雪王', formId: '10060' }],
  475: [{ name: 'gallade-mega', nameZh: '超级艾路雷朵', formId: '10068' }],
  531: [{ name: 'audino-mega', nameZh: '超级差不多娃娃', formId: '10069' }],
  719: [{ name: 'diancie-mega', nameZh: '超级蒂安希', formId: '10075' }],
};

// Primal Reversion data: pokemonId -> primal form info
const PRIMAL_REVERSIONS: Record<number, { name: string; nameZh: string; formId: string }> = {
  382: { name: 'kyogre-primal', nameZh: '原始盖欧卡', formId: '10077' },
  383: { name: 'groudon-primal', nameZh: '原始固拉多', formId: '10078' },
};

const getSpecialFormImageUrl = (formId: string): string => {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${formId}.png`;
};

interface EvolutionChainLink {
  species: { name: string; url: string };
  evolution_details: {
    min_level: number | null;
    trigger: { name: string } | null;
    item: { name: string } | null;
    held_item: { name: string } | null;
    min_happiness: number | null;
    min_affection: number | null;
    min_beauty: number | null;
    time_of_day: string;
    known_move: { name: string } | null;
    known_move_type: { name: string } | null;
    location: { name: string } | null;
    needs_overworld_rain: boolean;
    party_species: { name: string } | null;
    party_type: { name: string } | null;
    relative_physical_stats: number | null;
    trade_species: { name: string } | null;
    turn_upside_down: boolean;
  }[];
  evolves_to: EvolutionChainLink[];
}

interface EvolutionChainResponse {
  chain: EvolutionChainLink;
}

interface EvolutionStage {
  id: number;
  name: string;
  nameZh: string;
  condition: string;
  isMega?: boolean;
  isPrimal?: boolean;
  isGigantamax?: boolean;
  specialFormId?: string;
}

const toEvolutionStages = (stages: StoredEvolutionStage[][]): EvolutionStage[][] => {
  return stages.map((stage) => stage.map((pokemon) => ({ ...pokemon })));
};

interface PokemonSpeciesNameEntry {
  name: string;
  language: { name: string };
}

interface PokemonSpeciesVariety {
  is_default: boolean;
  pokemon: { name: string; url: string };
}

interface PokemonSpeciesEvolutionData {
  evolution_chain?: { url: string };
  names?: PokemonSpeciesNameEntry[];
  varieties?: PokemonSpeciesVariety[];
}

interface PokemonFormNameEntry {
  name: string;
  language: { name: string };
}

interface PokemonFormData {
  name: string;
  names?: PokemonFormNameEntry[];
  form_names?: PokemonFormNameEntry[];
  form_name?: string;
  pokemon: { name: string; url: string };
}

const fetchJson = async <T,>(url: string): Promise<T> => {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`Failed to fetch ${url}`);
  return response.json() as Promise<T>;
};

const getSpeciesIdFromUrl = (url: string): number | null => {
  const id = Number(url.split('/').filter(Boolean).pop());
  return Number.isFinite(id) ? id : null;
};

const fetchPokemonSpecies = (speciesUrlOrId: string | number): Promise<PokemonSpeciesEvolutionData> => {
  const url =
    typeof speciesUrlOrId === 'number'
      ? `${POKEAPI_BASE}/pokemon-species/${speciesUrlOrId}`
      : speciesUrlOrId;
  const speciesId =
    typeof speciesUrlOrId === 'number' ? speciesUrlOrId : getSpeciesIdFromUrl(speciesUrlOrId);
  const key = speciesId
    ? createApiCacheKey('pokemon-species', speciesId)
    : createApiCacheKey('pokemon-species-url', speciesUrlOrId);

  return getCachedOrFetch(key, () => fetchJson<PokemonSpeciesEvolutionData>(url));
};

const fetchEvolutionChainData = (url: string): Promise<EvolutionChainResponse> => {
  return getCachedOrFetch(
    createApiCacheKey('evolution-chain-raw', url),
    () => fetchJson<EvolutionChainResponse>(url)
  );
};

const getPokemonIdFromUrl = (url: string): number | null => {
  const id = Number(url.split('/').filter(Boolean).pop());
  return Number.isFinite(id) ? id : null;
};

const formatPokemonFormName = (name: string): string => {
  return name
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');
};

const formatGigantamaxName = (name: string, localizedBaseName: string, language: PokeApiLanguage): string => {
  const baseName = name.replace(/-gmax$/, '');
  if (language === 'zh-hans') {
    return `超极巨${localizedBaseName}`;
  }

  return `Gigantamax ${formatPokemonFormName(baseName)}`;
};

const fetchPokemonForm = (formUrlOrName: string): Promise<PokemonFormData> => {
  const isUrl = formUrlOrName.startsWith('http');
  const formName = isUrl ? formUrlOrName.split('/').filter(Boolean).pop() || formUrlOrName : formUrlOrName;
  const url = isUrl ? formUrlOrName : `${POKEAPI_BASE}/pokemon-form/${formUrlOrName}`;

  return getCachedOrFetch(
    createApiCacheKey('pokemon-form', formName),
    () => fetchJson<PokemonFormData>(url)
  );
};

const fetchGigantamaxForms = async (
  speciesData: PokemonSpeciesEvolutionData,
  localizedBaseName: string,
  language: PokeApiLanguage,
  t: ReturnType<typeof useI18n>['t']
): Promise<EvolutionStage[]> => {
  const gmaxVarieties = speciesData.varieties?.filter((variety) => variety.pokemon.name.endsWith('-gmax')) ?? [];
  const forms = await Promise.all(
    gmaxVarieties.map(async (variety): Promise<EvolutionStage | null> => {
      const formData = await fetchPokemonForm(variety.pokemon.name).catch(() => null);
      const pokemonId = getPokemonIdFromUrl(variety.pokemon.url);
      if (!pokemonId) return null;

      const localizedName =
        findPokeApiLocalizedEntry(formData?.names, language)?.name ||
        formatGigantamaxName(variety.pokemon.name, localizedBaseName, language);

      return {
        id: pokemonId,
        name: variety.pokemon.name,
        nameZh: localizedName,
        condition: t('evolution.gigantamax'),
        isGigantamax: true,
        specialFormId: String(pokemonId),
      };
    })
  );

  return forms.filter((form): form is EvolutionStage => form !== null);
};

// Fetch evolution chain for a Pokemon
const fetchEvolutionChain = async (
  pokemonId: number,
  language: PokeApiLanguage,
  t: ReturnType<typeof useI18n>['t']
): Promise<EvolutionStage[][]> => {
  const localEvolutionChain = await readEvolutionChainFromDataPackage(pokemonId, language);
  if (localEvolutionChain) return toEvolutionStages(localEvolutionChain);

  // First get species to find evolution chain URL
  const speciesData = await fetchPokemonSpecies(pokemonId).catch(() => null);
  if (!speciesData) return [];

  const evolutionChainUrl = speciesData.evolution_chain?.url;
  if (!evolutionChainUrl) return [];

  // Fetch evolution chain
  const chainData = await fetchEvolutionChainData(evolutionChainUrl).catch(() => null);
  if (!chainData) return [];

  // Parse chain into stages
  const stages: EvolutionStage[][] = [];

  const parseChain = async (link: EvolutionChainLink, stageIndex: number, condition: string) => {
    const speciesUrl = link.species.url;
    const speciesId = parseInt(speciesUrl.split('/').filter(Boolean).pop() || '0');

    // Get localized name. PokeAPI language names are lowercase, e.g. zh-hans.
    let nameZh = link.species.name;
    const speciesData = await fetchPokemonSpecies(speciesUrl).catch(() => null);
    if (speciesData) {
      const localizedName = findPokeApiLocalizedEntry(speciesData.names, language);
      if (localizedName) nameZh = localizedName.name;
    }

    if (!stages[stageIndex]) stages[stageIndex] = [];
    stages[stageIndex].push({
      id: speciesId,
      name: link.species.name,
      nameZh,
      condition,
    });

    // Process evolutions
    for (const evolution of link.evolves_to) {
      const conditionText = formatEvolutionCondition(evolution.evolution_details, language, t);

      await parseChain(evolution, stageIndex + 1, conditionText);
    }
  };

  await parseChain(chainData.chain, 0, '');

  const normalStages = stages.map((stage) => [...stage]);
  const specialStagesByIndex = new Map<number, EvolutionStage[]>();
  const addSpecialStage = (sourceStageIndex: number, form: EvolutionStage) => {
    const targetStageIndex = sourceStageIndex + 1;
    const forms = specialStagesByIndex.get(targetStageIndex) ?? [];
    forms.push(form);
    specialStagesByIndex.set(targetStageIndex, forms);
  };

  for (const [stageIndex, stage] of normalStages.entries()) {
    for (const pokemon of stage) {
      const megaForms = MEGA_EVOLUTIONS[pokemon.id];
      if (megaForms) {
        for (const mega of megaForms) {
          addSpecialStage(stageIndex, {
            id: pokemon.id,
            name: mega.name,
            nameZh: mega.nameZh,
            condition: t('evolution.megaStone'),
            isMega: true,
            specialFormId: mega.formId,
          });
        }
      }

      const primalForm = PRIMAL_REVERSIONS[pokemon.id];
      if (primalForm) {
        addSpecialStage(stageIndex, {
          id: pokemon.id,
          name: primalForm.name,
          nameZh: primalForm.nameZh,
          condition: t('evolution.primalReversion'),
          isPrimal: true,
          specialFormId: primalForm.formId,
        });
      }

      const speciesData = await fetchPokemonSpecies(pokemon.id).catch(() => null);
      if (speciesData) {
        const gmaxForms = await fetchGigantamaxForms(speciesData, pokemon.nameZh, language, t);
        for (const gmaxForm of gmaxForms) {
          addSpecialStage(stageIndex, gmaxForm);
        }
      }
    }
  }

  for (const [stageIndex, specialStage] of specialStagesByIndex) {
    if (!stages[stageIndex]) stages[stageIndex] = [];
    stages[stageIndex].push(...specialStage);
  }

  return stages;
};

const itemNames: Record<string, { zh: string; en: string }> = {
  'thunder-stone': { zh: '雷之石', en: 'Thunder Stone' },
  'fire-stone': { zh: '火之石', en: 'Fire Stone' },
  'water-stone': { zh: '水之石', en: 'Water Stone' },
  'leaf-stone': { zh: '叶之石', en: 'Leaf Stone' },
  'moon-stone': { zh: '月之石', en: 'Moon Stone' },
  'sun-stone': { zh: '日之石', en: 'Sun Stone' },
  'shiny-stone': { zh: '光之石', en: 'Shiny Stone' },
  'dusk-stone': { zh: '暗之石', en: 'Dusk Stone' },
  'dawn-stone': { zh: '觉醒之石', en: 'Dawn Stone' },
  'ice-stone': { zh: '冰之石', en: 'Ice Stone' },
  'oval-stone': { zh: '浑圆之石', en: 'Oval Stone' },
  'kings-rock': { zh: '王者之证', en: "King's Rock" },
  'metal-coat': { zh: '金属膜', en: 'Metal Coat' },
  'dragon-scale': { zh: '龙之鳞片', en: 'Dragon Scale' },
  upgrade: { zh: '升级数据', en: 'Upgrade' },
  'dubious-disc': { zh: '可疑补丁', en: 'Dubious Disc' },
  protector: { zh: '护具', en: 'Protector' },
  electirizer: { zh: '电力增幅器', en: 'Electirizer' },
  magmarizer: { zh: '熔岩增幅器', en: 'Magmarizer' },
  'reaper-cloth': { zh: '灵界之布', en: 'Reaper Cloth' },
  'prism-scale': { zh: '美丽鳞片', en: 'Prism Scale' },
  'whipped-dream': { zh: '掼奶油', en: 'Whipped Dream' },
  sachet: { zh: '香袋', en: 'Sachet' },
  'razor-claw': { zh: '锐利之爪', en: 'Razor Claw' },
  'razor-fang': { zh: '锐利之牙', en: 'Razor Fang' },
  'deep-sea-tooth': { zh: '深海之牙', en: 'Deep Sea Tooth' },
  'deep-sea-scale': { zh: '深海鳞片', en: 'Deep Sea Scale' },
};

const locationNames: Record<string, { zh: string; en: string }> = {
  'eterna-forest': { zh: '永恒森林', en: 'Eterna Forest' },
  'pinwheel-forest': { zh: '矢车森林', en: 'Pinwheel Forest' },
  'kalos-route-20': { zh: '卡洛斯20号道路', en: 'Kalos Route 20' },
  'sinnoh-route-217': { zh: '神奥217号道路', en: 'Sinnoh Route 217' },
  'twist-mountain': { zh: '螺旋山', en: 'Twist Mountain' },
  'frost-cavern': { zh: '冰结洞窟', en: 'Frost Cavern' },
};

const formatItemName = (name: string, language: PokeApiLanguage): string => {
  const itemName = itemNames[name];
  if (itemName) return language === 'zh-hans' ? itemName.zh : itemName.en;
  return formatResourceName(name);
};

const formatResourceName = (name: string): string => {
  return name
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');
};

const formatLocationName = (name: string, language: PokeApiLanguage): string => {
  const locationName = locationNames[name];
  if (locationName) return language === 'zh-hans' ? locationName.zh : locationName.en;
  return formatResourceName(name);
};

const pokemonTypeNames: PokemonType[] = [
  'normal', 'fire', 'water', 'electric', 'grass', 'ice',
  'fighting', 'poison', 'ground', 'flying', 'psychic', 'bug',
  'rock', 'ghost', 'dragon', 'dark', 'steel', 'fairy',
];

const formatTypeConditionName = (name: string, language: PokeApiLanguage): string => {
  if (pokemonTypeNames.includes(name as PokemonType)) {
    return getTypeName(name as PokemonType, language === 'zh-hans' ? 'zh' : 'en');
  }

  return formatResourceName(name);
};

const dedupe = (values: string[]): string[] => [...new Set(values.filter(Boolean))];

const joinParts = (parts: string[], language: PokeApiLanguage): string => {
  return dedupe(parts).join(language === 'zh-hans' ? ' + ' : ' + ');
};

const joinAlternatives = (parts: string[], language: PokeApiLanguage): string => {
  return dedupe(parts).join(language === 'zh-hans' ? ' 或 ' : ' or ');
};

const formatEvolutionDetail = (
  detail: EvolutionChainLink['evolution_details'][number],
  language: PokeApiLanguage,
  t: ReturnType<typeof useI18n>['t']
): string => {
  const parts: string[] = [];

  if (detail.min_level) parts.push(`Lv.${detail.min_level}`);
  if (detail.item) parts.push(formatItemName(detail.item.name, language));
  if (detail.held_item) parts.push(t('evolution.holding', { item: formatItemName(detail.held_item.name, language) }));
  if (detail.min_happiness) {
    parts.push(language === 'zh-hans' ? `亲密度${detail.min_happiness}` : `Friendship ${detail.min_happiness}`);
  }
  if (detail.min_affection) {
    parts.push(language === 'zh-hans' ? `友好度${detail.min_affection}` : `Affection ${detail.min_affection}`);
  }
  if (detail.min_beauty) {
    parts.push(language === 'zh-hans' ? `美丽度${detail.min_beauty}` : `Beauty ${detail.min_beauty}`);
  }
  if (detail.known_move) {
    const moveName = formatResourceName(detail.known_move.name);
    parts.push(language === 'zh-hans' ? `学会${moveName}` : `Know ${moveName}`);
  }
  if (detail.known_move_type) {
    const typeName = formatTypeConditionName(detail.known_move_type.name, language);
    parts.push(language === 'zh-hans' ? `学会${typeName}招式` : `Know ${typeName} move`);
  }
  if (detail.location) {
    const locationName = formatLocationName(detail.location.name, language);
    parts.push(language === 'zh-hans' ? `在${locationName}` : `At ${locationName}`);
  }
  if (detail.time_of_day) {
    parts.push(detail.time_of_day === 'day' ? t('evolution.day') : t('evolution.night'));
  }
  if (detail.needs_overworld_rain) {
    parts.push(language === 'zh-hans' ? '雨天' : 'Rain');
  }
  if (detail.party_species) {
    const speciesName = formatResourceName(detail.party_species.name);
    parts.push(language === 'zh-hans' ? `同行${speciesName}` : `With ${speciesName}`);
  }
  if (detail.party_type) {
    const typeName = formatTypeConditionName(detail.party_type.name, language);
    parts.push(language === 'zh-hans' ? `队伍有${typeName}属性` : `Party has ${typeName}`);
  }
  if (detail.relative_physical_stats !== null) {
    const statText =
      detail.relative_physical_stats > 0
        ? language === 'zh-hans' ? '攻击 > 防御' : 'Attack > Defense'
        : detail.relative_physical_stats < 0
          ? language === 'zh-hans' ? '攻击 < 防御' : 'Attack < Defense'
          : language === 'zh-hans' ? '攻击 = 防御' : 'Attack = Defense';
    parts.push(statText);
  }
  if (detail.trigger?.name === 'trade') {
    parts.push(t('evolution.trade'));
  }
  if (detail.trade_species) {
    const speciesName = formatResourceName(detail.trade_species.name);
    parts.push(language === 'zh-hans' ? `与${speciesName}交换` : `Trade for ${speciesName}`);
  }
  if (detail.turn_upside_down) {
    parts.push(language === 'zh-hans' ? '倒置主机' : 'Hold system upside down');
  }

  return joinParts(parts.length > 0 ? parts : [t('evolution.special')], language);
};

const formatEvolutionCondition = (
  details: EvolutionChainLink['evolution_details'],
  language: PokeApiLanguage,
  t: ReturnType<typeof useI18n>['t']
): string => {
  if (details.length === 0) return '';

  return joinAlternatives(
    details.map((detail) => formatEvolutionDetail(detail, language, t)),
    language
  );
};

export const useEvolutionChain = (pokemonId: number | null) => {
  const { pokeApiLanguage, t } = useI18n();

  return useQuery({
    queryKey: ['evolutionChain', pokemonId, pokeApiLanguage],
    queryFn: () => fetchEvolutionChain(pokemonId!, pokeApiLanguage, t),
    enabled: pokemonId !== null,
    staleTime: QUERY_CACHE_TIME,
    gcTime: QUERY_CACHE_TIME,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });
};

export interface SpecialFormPreview {
  name: string;
  imageUrl: string;
  type: 'mega' | 'primal' | 'gmax';
}

interface EvolutionChainProps {
  pokemonId: number;
  onSelectPokemon?: (id: number) => void;
  onPreviewSpecialForm?: (form: SpecialFormPreview | null) => void;
}

export const EvolutionChain = ({ pokemonId, onSelectPokemon, onPreviewSpecialForm }: EvolutionChainProps) => {
  const { data: stages, isLoading } = useEvolutionChain(pokemonId);
  const { t } = useI18n();

  const handleSpecialFormClick = (pokemon: EvolutionStage) => {
    if ((pokemon.isMega || pokemon.isPrimal || pokemon.isGigantamax) && pokemon.specialFormId && onPreviewSpecialForm) {
      onPreviewSpecialForm({
        name: pokemon.nameZh,
        imageUrl: getSpecialFormImageUrl(pokemon.specialFormId),
        type: pokemon.isMega ? 'mega' : pokemon.isPrimal ? 'primal' : 'gmax',
      });
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-4">
        <Loader2 className="w-6 h-6 animate-spin text-pokedex-text" />
      </div>
    );
  }

  if (!stages || stages.length <= 1) {
    return (
      <div className="text-center text-pokedex-text/60 py-4">
        <p className="font-pixel text-[10px]">{t('evolution.none')}</p>
      </div>
    );
  }

  return (
    <div className="grid w-full max-w-full grid-cols-1 gap-3 overflow-x-hidden py-2 sm:flex sm:flex-wrap sm:items-stretch sm:justify-center sm:gap-2 sm:overflow-visible">
      {stages.map((stage, stageIndex) => (
        <div key={stageIndex} className="flex min-w-0 items-center sm:shrink-0">
          <div className="grid w-full min-w-0 grid-cols-2 gap-2 min-[380px]:grid-cols-3 sm:flex sm:w-auto sm:flex-col">
            {stage.map((pokemon, pokemonIndex) => (
              <div key={`${pokemon.id}-${pokemon.name}-${pokemonIndex}`} className="flex min-w-0 items-center gap-1">
                {stageIndex > 0 && (
                  <div className="flex w-10 shrink-0 flex-col items-center justify-center px-0.5 sm:w-12 sm:px-1">
                    {pokemon.isMega ? (
                      <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-purple-400" />
                    ) : pokemon.isPrimal ? (
                      <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-amber-400" />
                    ) : pokemon.isGigantamax ? (
                      <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-pokedex-blue" />
                    ) : (
                      <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 text-pokedex-text/50" />
                    )}
                    <span className={`max-w-full break-words text-center text-[8px] leading-tight sm:text-[9px] ${
                      pokemon.isMega
                        ? 'text-purple-400 font-medium'
                        : pokemon.isPrimal
                          ? 'text-amber-400 font-medium'
                          : pokemon.isGigantamax
                            ? 'text-pokedex-blue font-medium'
                            : 'text-pokedex-text/60'
                    }`}>
                      {pokemon.condition || t('evolution.evolve')}
                    </span>
                  </div>
                )}
                <button
                  onClick={() => {
                    if (pokemon.isMega || pokemon.isPrimal || pokemon.isGigantamax) {
                      handleSpecialFormClick(pokemon);
                    } else {
                      onSelectPokemon?.(pokemon.id);
                    }
                  }}
                  className={`relative flex min-h-[96px] min-w-0 flex-1 flex-col items-center justify-center rounded-lg border p-2 transition-all sm:min-w-[76px] sm:flex-none ${
                    pokemon.isMega
                      ? 'bg-gradient-to-br from-purple-500/20 to-pink-500/20 border-purple-400/50 hover:from-purple-500/30 hover:to-pink-500/30 cursor-pointer'
                      : pokemon.isPrimal
                        ? 'bg-gradient-to-br from-amber-500/20 to-red-500/20 border-amber-400/50 hover:from-amber-500/30 hover:to-red-500/30 cursor-pointer'
                        : pokemon.isGigantamax
                          ? 'bg-gradient-to-br from-pokedex-blue/20 to-pokedex-text/15 border-pokedex-blue/50 hover:from-pokedex-blue/30 hover:to-pokedex-text/25 cursor-pointer'
                          : pokemon.id === pokemonId
                            ? 'bg-pokedex-screen-light border-pokedex-text text-pokedex-text hover:bg-pokedex-text/10'
                            : 'bg-pokedex-screen-light border-transparent text-pokedex-text/70 hover:bg-pokedex-text/10'
                  }`}
                >
                  {pokemon.isMega && (
                    <div className="absolute -top-1 -right-1">
                      <Sparkles className="w-3 h-3 text-purple-400" />
                    </div>
                  )}
                  {pokemon.isPrimal && (
                    <div className="absolute -top-1 -right-1">
                      <Sparkles className="w-3 h-3 text-amber-400" />
                    </div>
                  )}
                  {pokemon.isGigantamax && (
                    <div className="absolute -top-1 -right-1">
                      <Sparkles className="w-3 h-3 text-pokedex-blue" />
                    </div>
                  )}
                  <img
                    src={(pokemon.isMega || pokemon.isPrimal || pokemon.isGigantamax) && pokemon.specialFormId
                      ? getSpecialFormImageUrl(pokemon.specialFormId)
                      : getPokemonImageUrl(pokemon.id)
                    }
                    alt={pokemon.nameZh}
                    className="w-12 h-12 object-contain"
                    loading="lazy"
                    decoding="async"
                  />
                  <span className={`max-w-full truncate text-[8px] font-medium sm:max-w-[60px] sm:text-[10px] ${
                    pokemon.isMega
                      ? 'text-purple-300'
                      : pokemon.isPrimal
                        ? 'text-amber-300'
                        : pokemon.isGigantamax
                          ? 'text-pokedex-blue'
                          : ''
                  }`}>
                    {pokemon.nameZh}
                  </span>
                  {pokemon.isMega && (
                    <span className="text-[6px] sm:text-[8px] text-purple-400/80 font-medium">
                      MEGA
                    </span>
                  )}
                  {pokemon.isPrimal && (
                    <span className="text-[6px] sm:text-[8px] text-amber-400/80 font-medium">
                      {t('evolution.primalShort')}
                    </span>
                  )}
                  {pokemon.isGigantamax && (
                    <span className="text-[6px] sm:text-[8px] text-pokedex-blue/80 font-medium">
                      {t('evolution.gigantamaxShort')}
                    </span>
                  )}
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
