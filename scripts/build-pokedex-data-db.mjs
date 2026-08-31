import { mkdir, stat, writeFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import initSqlJs from 'sql.js';
import JSZip from 'jszip';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, '..');
const outputDir = path.join(repoRoot, 'public/assets/databases');
const defaultDbPath = path.join(outputDir, 'pokedex_zh_data.db');
const defaultManifestPath = path.join(outputDir, 'pokedex_zh_data.manifest.json');
const defaultDatabaseListPath = path.join(outputDir, 'databases.json');

const POKEAPI_BASE = 'https://pokeapi.co/api/v2';
const GRAPHQL_ENDPOINT = 'https://beta.pokeapi.co/graphql/v1beta';
const MAX_POKEMON_ID = 1025;
const DATA_SCHEMA_VERSION = 1;
const DEFAULT_MIN_APP_VERSION = '0.0.0';
const DEFAULT_SOURCE = 'pokeapi';
const DEFAULT_REMOTE_BASE_URL = '';
const LANGUAGES = ['zh-hans', 'en'];

const INDEX_QUERY = `
query PokemonIndex($limit: Int!) {
  pokemon_v2_pokemon(where: {id: {_lte: $limit}}, order_by: {id: asc}) {
    id
    name
    pokemon_v2_pokemontypes(order_by: {slot: asc}) {
      pokemon_v2_type {
        name
      }
    }
    pokemon_v2_pokemonspecy {
      generation_id
      pokemon_v2_pokemonspeciesnames(where: {language_id: {_in: [9, 12]}}) {
        language_id
        name
      }
    }
  }
}
`;

const pokemonTypes = new Set([
  'normal', 'fire', 'water', 'electric', 'grass', 'ice',
  'fighting', 'poison', 'ground', 'flying', 'psychic', 'bug',
  'rock', 'ghost', 'dragon', 'dark', 'steel', 'fairy',
]);

const megaEvolutions = {
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

const primalReversions = {
  382: { name: 'kyogre-primal', nameZh: '原始盖欧卡', formId: '10077' },
  383: { name: 'groudon-primal', nameZh: '原始固拉多', formId: '10078' },
};

const specialFormIds = {
  mega: [3, 6, 9, 15, 18, 65, 80, 94, 115, 127, 130, 142, 150, 181, 208, 212, 214, 229, 248, 254, 257, 260, 282, 302, 303, 306, 308, 310, 319, 323, 334, 354, 359, 362, 373, 376, 380, 381, 384, 428, 445, 448, 460, 475, 531, 719],
  primal: [382, 383],
  gmax: [3, 6, 9, 12, 25, 52, 68, 94, 99, 131, 133, 143, 569, 809, 812, 815, 818, 823, 826, 834, 839, 841, 842, 844, 849, 851, 858, 861, 869, 879, 884, 892],
  legendary: [144, 145, 146, 150, 243, 244, 245, 249, 250, 377, 378, 379, 380, 381, 382, 383, 384, 480, 481, 482, 483, 484, 485, 486, 487, 488, 638, 639, 640, 641, 642, 643, 644, 645, 646, 716, 717, 718, 772, 773, 785, 786, 787, 788, 789, 790, 791, 792, 800, 888, 889, 890, 891, 892, 894, 895, 896, 897, 898, 905, 1001, 1002, 1003, 1004, 1007, 1008, 1014, 1015, 1016, 1024],
  mythical: [151, 251, 385, 386, 489, 490, 491, 492, 493, 494, 647, 648, 649, 719, 720, 721, 801, 802, 807, 808, 809, 893, 1025],
  ultraBeast: [793, 794, 795, 796, 797, 798, 799, 803, 804, 805, 806],
};

const resourceLabels = {
  'zh-hans': {
    black: '黑色', blue: '蓝色', brown: '褐色', gray: '灰色', green: '绿色', pink: '粉色', purple: '紫色', red: '红色', white: '白色', yellow: '黄色',
    cave: '洞窟', forest: '森林', grassland: '草原', mountain: '山地', rare: '稀有', roughTerrain: '崎岖地形', sea: '海洋', urban: '城市', watersEdge: '水边',
    armor: '铠甲', arms: '双臂', ball: '球形', blob: '不定形', bugWings: '虫翼', fish: '鱼形', heads: '多头', humanoid: '人型', legs: '双足', quadruped: '四足', squiggle: '蛇形', tentacles: '触手', upright: '直立', wings: '翅膀',
    slow: '慢', medium: '中等', fast: '快', mediumSlow: '中慢', slowThenVeryFast: '先慢后快', fastThenVerySlow: '先快后慢',
    monster: '怪兽', water1: '水中1', bug: '虫', flying: '飞行', ground: '陆上', fairy: '妖精', plant: '植物', humanshape: '人型', water3: '水中3', mineral: '矿物', indeterminate: '不定形', water2: '水中2', ditto: '百变怪', dragon: '龙', noEggs: '未发现',
  },
  en: {
    black: 'Black', blue: 'Blue', brown: 'Brown', gray: 'Gray', green: 'Green', pink: 'Pink', purple: 'Purple', red: 'Red', white: 'White', yellow: 'Yellow',
    cave: 'Cave', forest: 'Forest', grassland: 'Grassland', mountain: 'Mountain', rare: 'Rare', roughTerrain: 'Rough Terrain', sea: 'Sea', urban: 'Urban', watersEdge: "Water's Edge",
    armor: 'Armor', arms: 'Arms', ball: 'Ball', blob: 'Blob', bugWings: 'Bug Wings', fish: 'Fish', heads: 'Heads', humanoid: 'Humanoid', legs: 'Legs', quadruped: 'Quadruped', squiggle: 'Squiggle', tentacles: 'Tentacles', upright: 'Upright', wings: 'Wings',
    slow: 'Slow', medium: 'Medium', fast: 'Fast', mediumSlow: 'Medium Slow', slowThenVeryFast: 'Slow Then Very Fast', fastThenVerySlow: 'Fast Then Very Slow',
    monster: 'Monster', water1: 'Water 1', bug: 'Bug', flying: 'Flying', ground: 'Field', fairy: 'Fairy', plant: 'Grass', humanshape: 'Human-Like', water3: 'Water 3', mineral: 'Mineral', indeterminate: 'Amorphous', water2: 'Water 2', ditto: 'Ditto', dragon: 'Dragon', noEggs: 'Undiscovered',
  },
};

const pokedexLabels = {
  'zh-hans': {
    national: '全国', kanto: '关都', originalJohto: '城都', updatedJohto: '城都', hoenn: '丰缘', originalSinnoh: '神奥', extendedSinnoh: '神奥', originalUnova: '合众', updatedUnova: '合众', kalosCentral: '卡洛斯 中央', kalosCoastal: '卡洛斯 海岸', kalosMountain: '卡洛斯 山岳', originalAlola: '阿罗拉', originalMelemele: '美乐美乐', originalAkala: '阿卡拉', originalUlaula: '乌拉乌拉', originalPoni: '波尼', updatedAlola: '阿罗拉', updatedMelemele: '美乐美乐', updatedAkala: '阿卡拉', updatedUlaula: '乌拉乌拉', updatedPoni: '波尼', letsgoKanto: "Let's Go 关都", galar: '伽勒尔', isleOfArmor: '铠岛', crownTundra: '王冠雪原', hisui: '洗翠', paldea: '帕底亚', kitakami: '北上', blueberry: '蓝莓',
  },
  en: {
    national: 'National', kanto: 'Kanto', originalJohto: 'Johto', updatedJohto: 'Johto', hoenn: 'Hoenn', originalSinnoh: 'Sinnoh', extendedSinnoh: 'Sinnoh', originalUnova: 'Unova', updatedUnova: 'Unova', kalosCentral: 'Kalos Central', kalosCoastal: 'Kalos Coastal', kalosMountain: 'Kalos Mountain', originalAlola: 'Alola', originalMelemele: 'Melemele', originalAkala: 'Akala', originalUlaula: 'Ulaula', originalPoni: 'Poni', updatedAlola: 'Alola', updatedMelemele: 'Melemele', updatedAkala: 'Akala', updatedUlaula: 'Ulaula', updatedPoni: 'Poni', letsgoKanto: "Let's Go Kanto", galar: 'Galar', isleOfArmor: 'Isle of Armor', crownTundra: 'Crown Tundra', hisui: 'Hisui', paldea: 'Paldea', kitakami: 'Kitakami', blueberry: 'Blueberry',
  },
};

const versionLabels = {
  red: 'Red', blue: 'Blue', yellow: 'Yellow', gold: 'Gold', silver: 'Silver', crystal: 'Crystal', ruby: 'Ruby', sapphire: 'Sapphire', emerald: 'Emerald', firered: 'FireRed', leafgreen: 'LeafGreen', diamond: 'Diamond', pearl: 'Pearl', platinum: 'Platinum', heartgold: 'HeartGold', soulsilver: 'SoulSilver', black: 'Black', white: 'White', 'black-2': 'Black 2', 'white-2': 'White 2', x: 'X', y: 'Y', 'omega-ruby': 'Omega Ruby', 'alpha-sapphire': 'Alpha Sapphire', sun: 'Sun', moon: 'Moon', 'ultra-sun': 'Ultra Sun', 'ultra-moon': 'Ultra Moon', 'lets-go-pikachu': "Let's Go Pikachu", 'lets-go-eevee': "Let's Go Eevee", sword: 'Sword', shield: 'Shield', 'brilliant-diamond': 'Brilliant Diamond', 'shining-pearl': 'Shining Pearl', 'legends-arceus': 'Legends Arceus', scarlet: 'Scarlet', violet: 'Violet',
};

const moveMethodLabels = {
  'zh-hans': { 'level-up': '升级', machine: '机器', tutor: '教学', egg: '遗传' },
  en: { 'level-up': 'Level', machine: 'TM', tutor: 'Tutor', egg: 'Egg' },
};

const encounterMethodLabels = {
  'zh-hans': { walk: '草丛', surf: '冲浪', 'old-rod': '旧钓竿', 'good-rod': '好钓竿', 'super-rod': '厉害钓竿', gift: '赠送', overworld: '地图', 'overworld-flying': '飞行', 'overworld-flying-special': '特殊飞行', pokeflute: '宝可梦之笛' },
  en: { walk: 'Walk', surf: 'Surf', 'old-rod': 'Old Rod', 'good-rod': 'Good Rod', 'super-rod': 'Super Rod', gift: 'Gift', overworld: 'Overworld', 'overworld-flying': 'Flying', 'overworld-flying-special': 'Special Flying', pokeflute: 'Poké Flute' },
};

const formLabels = {
  'zh-hans': [['-alola', '阿罗拉'], ['-galar', '伽勒尔'], ['-hisui', '洗翠'], ['-paldea', '帕底亚'], ['-mega-x', 'Mega X'], ['-mega-y', 'Mega Y'], ['-mega', 'Mega'], ['-gmax', '超极巨化'], ['-totem', '霸主'], ['-origin', '起源'], ['-therian', '灵兽'], ['-incarnate', '化身'], ['-altered', '别种'], ['-sky', '天空'], ['-land', '陆上'], ['-blade', '刀剑'], ['-shield', '盾牌'], ['-school', '鱼群'], ['-solo', '单独']],
  en: [['-alola', 'Alolan'], ['-galar', 'Galarian'], ['-hisui', 'Hisuian'], ['-paldea', 'Paldean'], ['-mega-x', 'Mega X'], ['-mega-y', 'Mega Y'], ['-mega', 'Mega'], ['-gmax', 'Gigantamax'], ['-totem', 'Totem'], ['-origin', 'Origin'], ['-therian', 'Therian'], ['-incarnate', 'Incarnate'], ['-altered', 'Altered'], ['-sky', 'Sky'], ['-land', 'Land'], ['-blade', 'Blade'], ['-shield', 'Shield'], ['-school', 'School'], ['-solo', 'Solo']],
};

const itemNames = {
  'thunder-stone': { zh: '雷之石', en: 'Thunder Stone' }, 'fire-stone': { zh: '火之石', en: 'Fire Stone' }, 'water-stone': { zh: '水之石', en: 'Water Stone' }, 'leaf-stone': { zh: '叶之石', en: 'Leaf Stone' }, 'moon-stone': { zh: '月之石', en: 'Moon Stone' }, 'sun-stone': { zh: '日之石', en: 'Sun Stone' }, 'shiny-stone': { zh: '光之石', en: 'Shiny Stone' }, 'dusk-stone': { zh: '暗之石', en: 'Dusk Stone' }, 'dawn-stone': { zh: '觉醒之石', en: 'Dawn Stone' }, 'ice-stone': { zh: '冰之石', en: 'Ice Stone' }, 'oval-stone': { zh: '浑圆之石', en: 'Oval Stone' }, 'kings-rock': { zh: '王者之证', en: "King's Rock" }, 'metal-coat': { zh: '金属膜', en: 'Metal Coat' }, 'dragon-scale': { zh: '龙之鳞片', en: 'Dragon Scale' }, upgrade: { zh: '升级数据', en: 'Upgrade' }, 'dubious-disc': { zh: '可疑补丁', en: 'Dubious Disc' }, protector: { zh: '护具', en: 'Protector' }, electirizer: { zh: '电力增幅器', en: 'Electirizer' }, magmarizer: { zh: '熔岩增幅器', en: 'Magmarizer' }, 'reaper-cloth': { zh: '灵界之布', en: 'Reaper Cloth' }, 'prism-scale': { zh: '美丽鳞片', en: 'Prism Scale' }, 'whipped-dream': { zh: '掼奶油', en: 'Whipped Dream' }, sachet: { zh: '香袋', en: 'Sachet' }, 'razor-claw': { zh: '锐利之爪', en: 'Razor Claw' }, 'razor-fang': { zh: '锐利之牙', en: 'Razor Fang' }, 'deep-sea-tooth': { zh: '深海之牙', en: 'Deep Sea Tooth' }, 'deep-sea-scale': { zh: '深海鳞片', en: 'Deep Sea Scale' },
};

const locationNames = {
  'eterna-forest': { zh: '永恒森林', en: 'Eterna Forest' }, 'pinwheel-forest': { zh: '矢车森林', en: 'Pinwheel Forest' }, 'kalos-route-20': { zh: '卡洛斯20号道路', en: 'Kalos Route 20' }, 'sinnoh-route-217': { zh: '神奥217号道路', en: 'Sinnoh Route 217' }, 'twist-mountain': { zh: '螺旋山', en: 'Twist Mountain' }, 'frost-cavern': { zh: '冰结洞窟', en: 'Frost Cavern' },
};

const translations = {
  'zh-hans': {
    evolutionGigantamax: '超极巨化',
    evolutionMegaStone: 'Mega进化石',
    evolutionPrimalReversion: '原始回归',
    evolutionHolding: (item) => `携带${item}`,
    evolutionDay: '白天',
    evolutionNight: '夜晚',
    evolutionTrade: '通信交换',
    evolutionSpecial: '特殊条件',
    unknown: '未知',
  },
  en: {
    evolutionGigantamax: 'Gigantamax',
    evolutionMegaStone: 'Mega Stone',
    evolutionPrimalReversion: 'Primal Reversion',
    evolutionHolding: (item) => `Holding ${item}`,
    evolutionDay: 'Day',
    evolutionNight: 'Night',
    evolutionTrade: 'Trade',
    evolutionSpecial: 'Special condition',
    unknown: 'Unknown',
  },
};

const parseArgs = () => {
  const options = {
    outputPath: defaultDbPath,
    manifestPath: defaultManifestPath,
    databaseListPath: defaultDatabaseListPath,
    maxPokemonId: MAX_POKEMON_ID,
    datasetVersion: new Date().toISOString().slice(0, 10).replaceAll('-', '.'),
    minAppVersion: DEFAULT_MIN_APP_VERSION,
    source: DEFAULT_SOURCE,
    sourceCommit: '',
    remoteBaseUrl: process.env.POKEDEX_DATA_REMOTE_BASE_URL || DEFAULT_REMOTE_BASE_URL,
    noZip: false,
    concurrency: 8,
  };

  const args = process.argv.slice(2);
  for (let index = 0; index < args.length; index += 1) {
    const arg = args[index];
    if (arg === '--output') options.outputPath = path.resolve(args[++index]);
    else if (arg === '--manifest') options.manifestPath = path.resolve(args[++index]);
    else if (arg === '--database-list') options.databaseListPath = path.resolve(args[++index]);
    else if (arg === '--max-id') options.maxPokemonId = Number(args[++index]);
    else if (arg === '--dataset-version') options.datasetVersion = args[++index];
    else if (arg === '--min-app-version') options.minAppVersion = args[++index];
    else if (arg === '--source') options.source = args[++index];
    else if (arg === '--source-commit') options.sourceCommit = args[++index];
    else if (arg === '--remote-base-url') options.remoteBaseUrl = args[++index];
    else if (arg === '--concurrency') options.concurrency = Number(args[++index]);
    else if (arg === '--no-zip') options.noZip = true;
  }

  return options;
};

const cleanText = (text) => text.replace(/\n|\f/g, ' ');
const formatEnglishName = (name) => name.split('-').map((part) => part.charAt(0).toUpperCase() + part.slice(1)).join(' ');
const formatResourceName = (name) => name.split(/[-\s]+/).filter(Boolean).map((part) => part.charAt(0).toUpperCase() + part.slice(1)).join(' ');
const toResourceKey = (name) => name.replace(/-([a-z])/g, (_, character) => character.toUpperCase());
const getResourceIdFromUrl = (url) => {
  const match = url.match(/\/(\d+)\/?$/);
  return match ? Number(match[1]) : null;
};
const findLocalizedEntry = (entries, language, fallbackLanguages = ['en', 'zh-hans']) => {
  if (!entries?.length) return undefined;
  const exact = entries.find((entry) => entry.language.name.toLowerCase() === language.toLowerCase());
  if (exact) return exact;

  for (const fallbackLanguage of fallbackLanguages.filter((fallback) => fallback !== language)) {
    const match = entries.find((entry) => entry.language.name.toLowerCase() === fallbackLanguage);
    if (match) return match;
  }

  return entries[0];
};

const formatGenerationName = (name, language) => {
  if (!name) return '';
  const generationId = name.split('-').pop()?.toUpperCase();
  return language === 'zh-hans' ? `第${generationId}世代` : `Generation ${generationId}`;
};
const formatLocalizedResourceName = (name, language, fallback = '') => {
  if (!name) return fallback;
  return resourceLabels[language][toResourceKey(name)] ?? formatResourceName(name);
};
const formatPokedexName = (name, language) => pokedexLabels[language][toResourceKey(name)] ?? formatResourceName(name);
const formatVersionName = (name) => versionLabels[name] ?? formatResourceName(name);
const formatVersionGroup = (name) => name.split('-').map((part) => part.charAt(0).toUpperCase() + part.slice(1)).join('/');
const mapType = (name) => pokemonTypes.has(name) ? name : 'normal';

const getSpecialFormKinds = (pokemonId) => Object.entries(specialFormIds)
  .filter(([, ids]) => ids.includes(pokemonId))
  .map(([kind]) => kind);

const summarizeGenderRatio = (genderRate) => {
  if (genderRate < 0) return { male: null, female: null, genderless: true };
  const female = genderRate * 12.5;
  return { male: 100 - female, female, genderless: false };
};

const summarizeSpeciesProfile = (speciesData, language) => {
  if (!speciesData) return undefined;

  const genus =
    findLocalizedEntry(speciesData.genera, language)?.genus ||
    findLocalizedEntry(speciesData.genera, 'en')?.genus ||
    '';

  return {
    genus,
    color: formatLocalizedResourceName(speciesData.color?.name, language),
    habitat: formatLocalizedResourceName(speciesData.habitat?.name, language, translations[language].unknown),
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
    ].filter(Boolean),
  };
};

const summarizeImageVariants = (pokemonData) => {
  const artwork = pokemonData.sprites.other?.['official-artwork'];
  return [
    artwork?.front_default ? { kind: 'official', imageUrl: artwork.front_default } : null,
    artwork?.front_shiny ? { kind: 'officialShiny', imageUrl: artwork.front_shiny } : null,
    pokemonData.sprites.front_default ? { kind: 'front', imageUrl: pokemonData.sprites.front_default } : null,
    pokemonData.sprites.back_default ? { kind: 'back', imageUrl: pokemonData.sprites.back_default } : null,
    pokemonData.sprites.front_shiny ? { kind: 'frontShiny', imageUrl: pokemonData.sprites.front_shiny } : null,
    pokemonData.sprites.back_shiny ? { kind: 'backShiny', imageUrl: pokemonData.sprites.back_shiny } : null,
  ].filter(Boolean);
};

const summarizeDexNumbers = (speciesData, language) => (speciesData?.pokedex_numbers ?? [])
  .filter((entry) => entry.entry_number > 0)
  .slice(0, 8)
  .map((entry) => ({ pokedex: formatPokedexName(entry.pokedex.name, language), entryNumber: entry.entry_number }));

const summarizeFlavorTexts = (speciesData, language) => {
  const seen = new Set();
  return (speciesData?.flavor_text_entries ?? [])
    .filter((entry) => entry.language.name === language)
    .map((entry) => ({ version: formatVersionName(entry.version.name), text: cleanText(entry.flavor_text) }))
    .filter((entry) => {
      if (!entry.text || seen.has(entry.text)) return false;
      seen.add(entry.text);
      return true;
    })
    .slice(0, 4);
};

const getStatValue = (pokemonData, statName) => pokemonData.stats.find((entry) => entry.stat.name === statName)?.base_stat || 0;

const getAbilityNameAndEffect = (abilityData, language) => {
  const name = findLocalizedEntry(abilityData.names, language)?.name || formatEnglishName(abilityData.name);
  const flavorText = findLocalizedEntry(abilityData.flavor_text_entries, language);
  const effectEntry = findLocalizedEntry(abilityData.effect_entries, language);
  const effect = flavorText?.flavor_text
    ? cleanText(flavorText.flavor_text)
    : effectEntry?.short_effect
      ? cleanText(effectEntry.short_effect)
      : '';

  return { name, effect };
};

const getFallbackFormLabel = (name, language) => {
  const normalized = name.toLowerCase();
  const matched = formLabels[language].find(([suffix]) => normalized.includes(suffix))?.[1];
  return matched ?? formatEnglishName(name);
};

const summarizePokemonForms = (varieties, currentPokemonName, language) => varieties
  .filter((variety) => variety.pokemon.name !== currentPokemonName)
  .slice(0, 8)
  .map((variety) => {
    const pokemonId = getResourceIdFromUrl(variety.pokemon.url);
    if (!pokemonId) return null;

    return {
      name: formatEnglishName(variety.pokemon.name),
      label: getFallbackFormLabel(variety.pokemon.name, language),
      pokemonId,
      imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`,
      isDefault: variety.is_default,
    };
  })
  .filter(Boolean);

const summarizeMoves = (moves, language) => moves
  .map((move) => {
    const latestDetail = [...move.version_group_details].pop();
    if (!latestDetail) return null;

    return {
      name: formatEnglishName(move.move.name),
      method: moveMethodLabels[language][latestDetail.move_learn_method.name] ?? formatResourceName(latestDetail.move_learn_method.name),
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
  .filter(Boolean)
  .sort((a, b) => a.methodRank !== b.methodRank ? a.methodRank - b.methodRank : (a.level ?? 999) - (b.level ?? 999))
  .slice(0, 10)
  .map(({ methodRank, ...move }) => move);

const summarizeEncounters = (encounters, language) => encounters.slice(0, 5).map((encounter) => {
  const versionDetail = encounter.version_details[encounter.version_details.length - 1];
  const detail = versionDetail?.encounter_details[0];
  if (!versionDetail || !detail) return null;
  const minLevel = Math.min(detail.min_level, detail.max_level);
  const maxLevel = Math.max(detail.min_level, detail.max_level);
  return {
    location: formatResourceName(encounter.location_area.name),
    version: formatVersionGroup(versionDetail.version.name),
    method: encounterMethodLabels[language][detail.method.name] ?? formatResourceName(detail.method.name),
    levelRange: minLevel === maxLevel ? `${minLevel}` : `${minLevel}-${maxLevel}`,
    chance: versionDetail.max_chance || detail.chance,
  };
}).filter(Boolean);

const buildPokemonDetail = (pokemonData, speciesData, language, abilityDataByName, encounterDataByPokemonName) => {
  const englishName = formatEnglishName(pokemonData.name);
  const abilityDetails = pokemonData.abilities.map((entry) => {
    const abilityData = abilityDataByName.get(entry.ability.name);
    if (!abilityData) return { name: formatEnglishName(entry.ability.name), isHidden: entry.is_hidden, effect: '' };
    const { name, effect } = getAbilityNameAndEffect(abilityData, language);
    return { name, isHidden: entry.is_hidden, effect };
  });

  return {
    id: pokemonData.id,
    name: findLocalizedEntry(speciesData?.names, language)?.name || englishName,
    nameEn: englishName,
    types: pokemonData.types.map((entry) => mapType(entry.type.name)),
    description: findLocalizedEntry(speciesData?.flavor_text_entries, language)?.flavor_text
      ? cleanText(findLocalizedEntry(speciesData?.flavor_text_entries, language).flavor_text)
      : '',
    height: pokemonData.height / 10,
    weight: pokemonData.weight / 10,
    baseExperience: pokemonData.base_experience ?? undefined,
    abilities: abilityDetails.map((ability) => ability.name),
    abilityDetails,
    forms: summarizePokemonForms(speciesData?.varieties ?? [], pokemonData.name, language),
    moves: summarizeMoves(pokemonData.moves, language),
    encounters: summarizeEncounters(encounterDataByPokemonName.get(pokemonData.name) ?? [], language),
    speciesProfile: summarizeSpeciesProfile(speciesData, language),
    dexNumbers: summarizeDexNumbers(speciesData, language),
    flavorTexts: summarizeFlavorTexts(speciesData, language),
    imageVariants: summarizeImageVariants(pokemonData),
    shinyImageUrl: pokemonData.sprites.other?.['official-artwork']?.front_shiny || pokemonData.sprites.front_shiny || undefined,
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

const formatPokemonFormName = (name) => name.split('-').map((part) => part.charAt(0).toUpperCase() + part.slice(1)).join(' ');
const formatGigantamaxName = (name, localizedBaseName, language) => {
  const baseName = name.replace(/-gmax$/, '');
  return language === 'zh-hans' ? `超极巨${localizedBaseName}` : `Gigantamax ${formatPokemonFormName(baseName)}`;
};
const getPokemonIdFromUrl = getResourceIdFromUrl;
const formatItemName = (name, language) => {
  const item = itemNames[name];
  if (item) return language === 'zh-hans' ? item.zh : item.en;
  return formatResourceName(name);
};
const formatLocationName = (name, language) => {
  const location = locationNames[name];
  if (location) return language === 'zh-hans' ? location.zh : location.en;
  return formatResourceName(name);
};
const formatTypeConditionName = (name, language) => {
  if (pokemonTypes.has(name)) return language === 'zh-hans' ? ({
    normal: '一般', fire: '火', water: '水', electric: '电', grass: '草', ice: '冰', fighting: '格斗', poison: '毒', ground: '地面', flying: '飞行', psychic: '超能力', bug: '虫', rock: '岩石', ghost: '幽灵', dragon: '龙', dark: '恶', steel: '钢', fairy: '妖精',
  }[name]) : formatResourceName(name);
  return formatResourceName(name);
};
const dedupe = (values) => [...new Set(values.filter(Boolean))];
const joinParts = (parts, language) => dedupe(parts).join(language === 'zh-hans' ? ' + ' : ' + ');
const joinAlternatives = (parts, language) => dedupe(parts).join(language === 'zh-hans' ? ' 或 ' : ' or ');

const formatEvolutionDetail = (detail, language) => {
  const t = translations[language];
  const parts = [];
  if (detail.min_level) parts.push(`Lv.${detail.min_level}`);
  if (detail.item) parts.push(formatItemName(detail.item.name, language));
  if (detail.held_item) parts.push(t.evolutionHolding(formatItemName(detail.held_item.name, language)));
  if (detail.min_happiness) parts.push(language === 'zh-hans' ? `亲密度${detail.min_happiness}` : `Friendship ${detail.min_happiness}`);
  if (detail.min_affection) parts.push(language === 'zh-hans' ? `友好度${detail.min_affection}` : `Affection ${detail.min_affection}`);
  if (detail.min_beauty) parts.push(language === 'zh-hans' ? `美丽度${detail.min_beauty}` : `Beauty ${detail.min_beauty}`);
  if (detail.known_move) parts.push(language === 'zh-hans' ? `学会${formatResourceName(detail.known_move.name)}` : `Know ${formatResourceName(detail.known_move.name)}`);
  if (detail.known_move_type) parts.push(language === 'zh-hans' ? `学会${formatTypeConditionName(detail.known_move_type.name, language)}招式` : `Know ${formatTypeConditionName(detail.known_move_type.name, language)} move`);
  if (detail.location) parts.push(language === 'zh-hans' ? `在${formatLocationName(detail.location.name, language)}` : `At ${formatLocationName(detail.location.name, language)}`);
  if (detail.time_of_day) parts.push(detail.time_of_day === 'day' ? t.evolutionDay : t.evolutionNight);
  if (detail.needs_overworld_rain) parts.push(language === 'zh-hans' ? '雨天' : 'Rain');
  if (detail.party_species) parts.push(language === 'zh-hans' ? `同行${formatResourceName(detail.party_species.name)}` : `With ${formatResourceName(detail.party_species.name)}`);
  if (detail.party_type) parts.push(language === 'zh-hans' ? `队伍有${formatTypeConditionName(detail.party_type.name, language)}属性` : `Party has ${formatTypeConditionName(detail.party_type.name, language)}`);
  if (detail.relative_physical_stats !== null) {
    parts.push(detail.relative_physical_stats > 0 ? (language === 'zh-hans' ? '攻击 > 防御' : 'Attack > Defense') : detail.relative_physical_stats < 0 ? (language === 'zh-hans' ? '攻击 < 防御' : 'Attack < Defense') : (language === 'zh-hans' ? '攻击 = 防御' : 'Attack = Defense'));
  }
  if (detail.trigger?.name === 'trade') parts.push(t.evolutionTrade);
  if (detail.trade_species) parts.push(language === 'zh-hans' ? `与${formatResourceName(detail.trade_species.name)}交换` : `Trade for ${formatResourceName(detail.trade_species.name)}`);
  if (detail.turn_upside_down) parts.push(language === 'zh-hans' ? '倒置主机' : 'Hold system upside down');
  return joinParts(parts.length > 0 ? parts : [t.evolutionSpecial], language);
};
const formatEvolutionCondition = (details, language) => details.length ? joinAlternatives(details.map((detail) => formatEvolutionDetail(detail, language)), language) : '';

const buildEvolutionChain = (pokemonId, language, speciesDataById, speciesDataByName, evolutionChainByUrl, formDataByName) => {
  const speciesData = speciesDataById.get(pokemonId);
  const evolutionChainUrl = speciesData?.evolution_chain?.url;
  const chainData = evolutionChainUrl ? evolutionChainByUrl.get(evolutionChainUrl) : null;
  if (!chainData) return [];

  const stages = [];
  const parseChain = (link, stageIndex, condition) => {
    const speciesId = getPokemonIdFromUrl(link.species.url);
    const linkedSpeciesData = speciesDataById.get(speciesId) ?? speciesDataByName.get(link.species.name);
    const localizedName = findLocalizedEntry(linkedSpeciesData?.names, language)?.name || link.species.name;
    if (!stages[stageIndex]) stages[stageIndex] = [];
    stages[stageIndex].push({ id: speciesId, name: link.species.name, nameZh: localizedName, condition });
    for (const evolution of link.evolves_to) {
      parseChain(evolution, stageIndex + 1, formatEvolutionCondition(evolution.evolution_details, language));
    }
  };

  parseChain(chainData.chain, 0, '');

  const normalStages = stages.map((stage) => [...stage]);
  const specialStagesByIndex = new Map();
  const addSpecialStage = (sourceStageIndex, form) => {
    const targetStageIndex = sourceStageIndex + 1;
    const forms = specialStagesByIndex.get(targetStageIndex) ?? [];
    forms.push(form);
    specialStagesByIndex.set(targetStageIndex, forms);
  };

  for (const [stageIndex, stage] of normalStages.entries()) {
    for (const pokemon of stage) {
      for (const mega of megaEvolutions[pokemon.id] ?? []) {
        addSpecialStage(stageIndex, { id: pokemon.id, name: mega.name, nameZh: mega.nameZh, condition: translations[language].evolutionMegaStone, isMega: true, specialFormId: mega.formId });
      }
      const primal = primalReversions[pokemon.id];
      if (primal) addSpecialStage(stageIndex, { id: pokemon.id, name: primal.name, nameZh: primal.nameZh, condition: translations[language].evolutionPrimalReversion, isPrimal: true, specialFormId: primal.formId });
      const stageSpeciesData = speciesDataById.get(pokemon.id);
      const gmaxVarieties = stageSpeciesData?.varieties?.filter((variety) => variety.pokemon.name.endsWith('-gmax')) ?? [];
      for (const variety of gmaxVarieties) {
        const pokemonId = getPokemonIdFromUrl(variety.pokemon.url);
        if (!pokemonId) continue;
        const formData = formDataByName.get(variety.pokemon.name);
        const localizedName = findLocalizedEntry(formData?.names, language)?.name || formatGigantamaxName(variety.pokemon.name, pokemon.nameZh, language);
        addSpecialStage(stageIndex, { id: pokemonId, name: variety.pokemon.name, nameZh: localizedName, condition: translations[language].evolutionGigantamax, isGigantamax: true, specialFormId: String(pokemonId) });
      }
    }
  }

  for (const [stageIndex, specialStage] of specialStagesByIndex) {
    if (!stages[stageIndex]) stages[stageIndex] = [];
    stages[stageIndex].push(...specialStage);
  }

  return stages;
};

const graphql = async (query, variables) => {
  const response = await fetch(GRAPHQL_ENDPOINT, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ query, variables }),
  });
  if (!response.ok) throw new Error(`PokeAPI GraphQL returned ${response.status}`);
  const json = await response.json();
  if (json.errors?.length) throw new Error(JSON.stringify(json.errors));
  return json;
};

const fetchJson = async (url) => {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`Failed to fetch ${url}: ${response.status}`);
  return response.json();
};

const mapLimit = async (items, limit, mapper) => {
  const results = new Array(items.length);
  let index = 0;
  const workers = Array.from({ length: Math.max(1, limit) }, async () => {
    while (index < items.length) {
      const currentIndex = index++;
      results[currentIndex] = await mapper(items[currentIndex], currentIndex);
    }
  });
  await Promise.all(workers);
  return results;
};

const toArtworkUrl = (id) => `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
const toSpriteUrl = (id) => `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

const fetchPokemonIndex = async (maxPokemonId) => {
  const response = await graphql(INDEX_QUERY, { limit: maxPokemonId });
  const pokemons = response.data?.pokemon_v2_pokemon;
  if (!Array.isArray(pokemons)) throw new Error('PokeAPI response did not include data.pokemon_v2_pokemon');

  return pokemons.map((pokemon) => {
    const names = pokemon.pokemon_v2_pokemonspecy?.pokemon_v2_pokemonspeciesnames ?? [];
    const nameEn = names.find((entry) => entry.language_id === 9)?.name ?? formatEnglishName(pokemon.name);
    const nameZh = names.find((entry) => entry.language_id === 12)?.name ?? nameEn;
    return {
      id: pokemon.id,
      name: nameZh,
      nameZh,
      nameEn,
      types: pokemon.pokemon_v2_pokemontypes.map((entry) => entry.pokemon_v2_type.name),
      generation: pokemon.pokemon_v2_pokemonspecy?.generation_id ?? 0,
      spriteUrl: toSpriteUrl(pokemon.id),
      artworkUrl: toArtworkUrl(pokemon.id),
    };
  });
};

const buildListItem = (pokemon, language) => ({
  id: pokemon.id,
  name: language === 'zh-hans' ? pokemon.nameZh : pokemon.nameEn,
  nameEn: pokemon.nameEn,
  types: pokemon.types,
  specialForms: getSpecialFormKinds(pokemon.id),
});

const setupSchema = (db) => {
  db.run(`
    PRAGMA journal_mode = OFF;
    PRAGMA synchronous = OFF;
    CREATE TABLE data_meta (
      key TEXT PRIMARY KEY NOT NULL,
      value TEXT NOT NULL
    );
    CREATE TABLE pokemon_list_item (
      pokemon_id INTEGER NOT NULL,
      language TEXT NOT NULL,
      value_json TEXT NOT NULL,
      PRIMARY KEY (pokemon_id, language)
    );
    CREATE TABLE pokemon_detail (
      pokemon_id INTEGER NOT NULL,
      language TEXT NOT NULL,
      schema_version INTEGER NOT NULL,
      value_json TEXT NOT NULL,
      PRIMARY KEY (pokemon_id, language, schema_version)
    );
    CREATE TABLE pokemon_evolution_chain (
      pokemon_id INTEGER NOT NULL,
      language TEXT NOT NULL,
      schema_version INTEGER NOT NULL,
      value_json TEXT NOT NULL,
      PRIMARY KEY (pokemon_id, language, schema_version)
    );
    CREATE TABLE pokeapi_resource (
      resource_type TEXT NOT NULL,
      resource_id TEXT NOT NULL,
      resource_name TEXT,
      value_json TEXT NOT NULL,
      PRIMARY KEY (resource_type, resource_id)
    );
    CREATE INDEX idx_pokemon_list_item_language ON pokemon_list_item(language, pokemon_id);
  `);
};

const insertMeta = (db, key, value) => {
  db.run('INSERT OR REPLACE INTO data_meta (key, value) VALUES (?, ?)', [key, String(value)]);
};

const insertJson = (statement, values, value) => {
  statement.run([...values, JSON.stringify(value)]);
};

const hashQueryRows = (db, hash, sql) => {
  const result = db.exec(sql);
  hash.update(sql);
  hash.update('\n');
  for (const table of result) {
    for (const row of table.values) {
      hash.update(JSON.stringify(row));
      hash.update('\n');
    }
  }
};

const computeContentHash = (db) => {
  const hash = createHash('sha256');
  hashQueryRows(db, hash, "SELECT key, value FROM data_meta WHERE key != 'content_sha256' ORDER BY key");
  hashQueryRows(db, hash, 'SELECT pokemon_id, language, value_json FROM pokemon_list_item ORDER BY pokemon_id, language');
  hashQueryRows(db, hash, 'SELECT pokemon_id, language, schema_version, value_json FROM pokemon_detail ORDER BY pokemon_id, language, schema_version');
  hashQueryRows(db, hash, 'SELECT pokemon_id, language, schema_version, value_json FROM pokemon_evolution_chain ORDER BY pokemon_id, language, schema_version');
  hashQueryRows(db, hash, 'SELECT resource_type, resource_id, resource_name, value_json FROM pokeapi_resource ORDER BY resource_type, resource_id');
  return hash.digest('hex');
};

const exportDbWithHash = async (db, outputPath) => {
  const contentHash = computeContentHash(db);
  insertMeta(db, 'content_sha256', contentHash);
  const bytes = Buffer.from(db.export());
  const databaseHash = createHash('sha256').update(bytes).digest('hex');
  await writeFile(outputPath, bytes);
  return { databaseHash, contentHash, sizeBytes: bytes.length, bytes };
};

const zipDatabase = async (fileName, bytes) => {
  const zip = new JSZip();
  zip.file(fileName, bytes);
  return zip.generateAsync({
    type: 'nodebuffer',
    compression: 'DEFLATE',
    compressionOptions: { level: 9 },
  });
};

const buildRemoteUrl = (remoteBaseUrl, fileName) => {
  if (!remoteBaseUrl) return fileName;
  return `${remoteBaseUrl.replace(/\/$/, '')}/${fileName}`;
};

const normalizeDatasetVersion = (version) => version.replace(/[^a-zA-Z0-9_-]+/g, '');

const getDataDatabaseNameForVersion = (datasetVersion) => {
  const normalizedVersion = normalizeDatasetVersion(datasetVersion);
  return normalizedVersion ? `pokedex_zh_data_${normalizedVersion}` : 'pokedex_zh_data';
};

const main = async () => {
  const options = parseArgs();
  const outputPath = options.outputPath;
  const outputFileName = path.basename(outputPath);
  const remoteDatabaseName = getDataDatabaseNameForVersion(options.datasetVersion);
  const remoteDbFileName = `${remoteDatabaseName}.db`;
  const packageFileName = options.noZip ? remoteDbFileName : `${remoteDbFileName}.zip`;
  const packagePath = path.join(path.dirname(outputPath), packageFileName);
  const generatedAt = new Date().toISOString();

  await mkdir(path.dirname(outputPath), { recursive: true });
  await mkdir(path.dirname(options.manifestPath), { recursive: true });
  await mkdir(path.dirname(options.databaseListPath), { recursive: true });

  console.log(`Fetching Pokemon index for ${options.maxPokemonId} entries...`);
  const pokemonIndex = await fetchPokemonIndex(options.maxPokemonId);
  if (pokemonIndex.length !== options.maxPokemonId) {
    throw new Error(`Expected ${options.maxPokemonId} Pokemon index entries, got ${pokemonIndex.length}`);
  }

  const SQL = await initSqlJs();
  const db = new SQL.Database();
  setupSchema(db);

  insertMeta(db, 'dataset_version', options.datasetVersion);
  insertMeta(db, 'schema_version', DATA_SCHEMA_VERSION);
  insertMeta(db, 'min_app_version', options.minAppVersion);
  insertMeta(db, 'generated_at', generatedAt);
  insertMeta(db, 'source', options.source);
  insertMeta(db, 'source_commit', options.sourceCommit);
  insertMeta(db, 'max_pokemon_id', options.maxPokemonId);

  const listStatement = db.prepare('INSERT INTO pokemon_list_item (pokemon_id, language, value_json) VALUES (?, ?, ?)');
  for (const pokemon of pokemonIndex) {
    for (const language of LANGUAGES) {
      insertJson(listStatement, [pokemon.id, language], buildListItem(pokemon, language));
    }
  }
  listStatement.free();

  console.log('Fetching Pokemon, species, encounters, abilities, forms, and evolution chains...');
  const pokemonResources = await mapLimit(
    pokemonIndex,
    options.concurrency,
    (pokemon) => fetchJson(`${POKEAPI_BASE}/pokemon/${pokemon.id}`)
  );
  const speciesResources = await mapLimit(
    pokemonIndex,
    options.concurrency,
    (pokemon) => fetchJson(`${POKEAPI_BASE}/pokemon-species/${pokemon.id}`)
  );

  const abilityUrls = new Map();
  const formUrls = new Map();
  const evolutionChainUrls = new Map();
  for (const pokemon of pokemonResources) {
    for (const entry of pokemon.abilities) abilityUrls.set(entry.ability.name, entry.ability.url);
  }
  for (const species of speciesResources) {
    if (species.evolution_chain?.url) evolutionChainUrls.set(species.evolution_chain.url, species.evolution_chain.url);
    for (const variety of species.varieties ?? []) {
      if (variety.pokemon.name.endsWith('-gmax')) {
        formUrls.set(variety.pokemon.name, `${POKEAPI_BASE}/pokemon-form/${variety.pokemon.name}`);
      }
    }
  }

  const [abilityResources, encounterResources, formResources, evolutionChainResources] = await Promise.all([
    mapLimit([...abilityUrls], options.concurrency, async ([name, url]) => [name, await fetchJson(url)]),
    mapLimit(pokemonResources, options.concurrency, async (pokemon) => [pokemon.name, await fetchJson(pokemon.location_area_encounters)]),
    mapLimit([...formUrls], options.concurrency, async ([name, url]) => [name, await fetchJson(url)]),
    mapLimit([...evolutionChainUrls], options.concurrency, async ([url]) => [url, await fetchJson(url)]),
  ]);

  const abilityDataByName = new Map(abilityResources);
  const encounterDataByPokemonName = new Map(encounterResources);
  const formDataByName = new Map(formResources);
  const evolutionChainByUrl = new Map(evolutionChainResources);
  const speciesDataById = new Map(speciesResources.map((species) => [species.id, species]));
  const speciesDataByName = new Map(speciesResources.map((species) => [species.name, species]));

  const rawStatement = db.prepare('INSERT INTO pokeapi_resource (resource_type, resource_id, resource_name, value_json) VALUES (?, ?, ?, ?)');
  for (const pokemon of pokemonResources) insertJson(rawStatement, ['pokemon', String(pokemon.id), pokemon.name], pokemon);
  for (const species of speciesResources) insertJson(rawStatement, ['pokemon-species', String(species.id), species.name], species);
  for (const [name, ability] of abilityDataByName) insertJson(rawStatement, ['ability', String(ability.id ?? name), name], ability);
  for (const [name, form] of formDataByName) insertJson(rawStatement, ['pokemon-form', String(form.id ?? name), name], form);
  for (const [url, chain] of evolutionChainByUrl) insertJson(rawStatement, ['evolution-chain', String(chain.id ?? url), url], chain);
  for (const [name, encounters] of encounterDataByPokemonName) insertJson(rawStatement, ['pokemon-encounters', name, name], encounters);
  rawStatement.free();

  const detailStatement = db.prepare('INSERT INTO pokemon_detail (pokemon_id, language, schema_version, value_json) VALUES (?, ?, ?, ?)');
  const evolutionStatement = db.prepare('INSERT INTO pokemon_evolution_chain (pokemon_id, language, schema_version, value_json) VALUES (?, ?, ?, ?)');
  for (const pokemonData of pokemonResources) {
    const speciesData = speciesDataById.get(pokemonData.id) ?? null;
    for (const language of LANGUAGES) {
      const detail = buildPokemonDetail(pokemonData, speciesData, language, abilityDataByName, encounterDataByPokemonName);
      insertJson(detailStatement, [pokemonData.id, language, DATA_SCHEMA_VERSION], detail);
      const stages = buildEvolutionChain(pokemonData.id, language, speciesDataById, speciesDataByName, evolutionChainByUrl, formDataByName);
      insertJson(evolutionStatement, [pokemonData.id, language, DATA_SCHEMA_VERSION], { stages });
    }
  }
  detailStatement.free();
  evolutionStatement.free();

  const integrity = db.exec('PRAGMA integrity_check')?.[0]?.values?.[0]?.[0];
  if (integrity !== 'ok') throw new Error(`SQLite integrity_check failed: ${integrity}`);

  const { databaseHash, contentHash, sizeBytes, bytes } = await exportDbWithHash(db, outputPath);
  const packageBytes = options.noZip ? bytes : await zipDatabase(remoteDbFileName, bytes);
  const packageHash = createHash('sha256').update(packageBytes).digest('hex');
  if (options.noZip) {
    if (packagePath !== outputPath) {
      await writeFile(packagePath, packageBytes);
    }
  } else {
    await writeFile(packagePath, packageBytes);
  }

  const manifest = {
    latestDatasetVersion: options.datasetVersion,
    schemaVersion: DATA_SCHEMA_VERSION,
    minAppVersion: options.minAppVersion,
    url: buildRemoteUrl(options.remoteBaseUrl, packageFileName),
    sha256: packageHash,
    sizeBytes: packageBytes.length,
    databaseName: remoteDatabaseName,
    databaseSha256: databaseHash,
    databaseSizeBytes: sizeBytes,
    dataContentSha256: contentHash,
    generatedAt,
    source: options.source,
    sourceCommit: options.sourceCommit || undefined,
    maxPokemonId: options.maxPokemonId,
    notes: `SQLite data package generated from ${options.source}`,
  };

  await writeFile(options.manifestPath, `${JSON.stringify(manifest, null, 2)}\n`, 'utf8');
  await writeFile(options.databaseListPath, `${JSON.stringify({ databaseList: [outputFileName] }, null, 2)}\n`, 'utf8');

  const dbStat = await stat(outputPath);
  console.log(`Generated ${path.relative(repoRoot, outputPath)} (${dbStat.size} bytes)`);
  if (!options.noZip) {
    const zipStat = await stat(packagePath);
    console.log(`Generated ${path.relative(repoRoot, packagePath)} (${zipStat.size} bytes)`);
  } else if (packagePath !== outputPath) {
    const packageStat = await stat(packagePath);
    console.log(`Generated ${path.relative(repoRoot, packagePath)} (${packageStat.size} bytes)`);
  }
  console.log(`Generated ${path.relative(repoRoot, options.manifestPath)}`);
};

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
