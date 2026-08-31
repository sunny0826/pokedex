import type { PokemonType } from '@/data/pokemon';
import type { PokeApiLanguage } from '@/lib/i18n';

export interface LocalPokemonIndexItem {
  readonly id: number;
  readonly name: string;
  readonly nameZh: string;
  readonly nameEn: string;
  readonly types: readonly PokemonType[];
  readonly generation: number;
  readonly spriteUrl: string;
  readonly artworkUrl: string;
}

export const LOCAL_POKEMON_INDEX_GENERATED_AT = '2026-05-12T02:50:23.421Z';
export const LOCAL_POKEMON_MAX_ID = 1025;

export const localPokemonIndex = [
  {
    "id": 1,
    "name": "妙蛙种子",
    "nameZh": "妙蛙种子",
    "nameEn": "Bulbasaur",
    "types": [
      "grass",
      "poison"
    ],
    "generation": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
  },
  {
    "id": 2,
    "name": "妙蛙草",
    "nameZh": "妙蛙草",
    "nameEn": "Ivysaur",
    "types": [
      "grass",
      "poison"
    ],
    "generation": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png"
  },
  {
    "id": 3,
    "name": "妙蛙花",
    "nameZh": "妙蛙花",
    "nameEn": "Venusaur",
    "types": [
      "grass",
      "poison"
    ],
    "generation": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png"
  },
  {
    "id": 4,
    "name": "小火龙",
    "nameZh": "小火龙",
    "nameEn": "Charmander",
    "types": [
      "fire"
    ],
    "generation": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png"
  },
  {
    "id": 5,
    "name": "火恐龙",
    "nameZh": "火恐龙",
    "nameEn": "Charmeleon",
    "types": [
      "fire"
    ],
    "generation": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png"
  },
  {
    "id": 6,
    "name": "喷火龙",
    "nameZh": "喷火龙",
    "nameEn": "Charizard",
    "types": [
      "fire",
      "flying"
    ],
    "generation": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png"
  },
  {
    "id": 7,
    "name": "杰尼龟",
    "nameZh": "杰尼龟",
    "nameEn": "Squirtle",
    "types": [
      "water"
    ],
    "generation": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png"
  },
  {
    "id": 8,
    "name": "卡咪龟",
    "nameZh": "卡咪龟",
    "nameEn": "Wartortle",
    "types": [
      "water"
    ],
    "generation": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/8.png"
  },
  {
    "id": 9,
    "name": "水箭龟",
    "nameZh": "水箭龟",
    "nameEn": "Blastoise",
    "types": [
      "water"
    ],
    "generation": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png"
  },
  {
    "id": 10,
    "name": "绿毛虫",
    "nameZh": "绿毛虫",
    "nameEn": "Caterpie",
    "types": [
      "bug"
    ],
    "generation": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10.png"
  },
  {
    "id": 11,
    "name": "铁甲蛹",
    "nameZh": "铁甲蛹",
    "nameEn": "Metapod",
    "types": [
      "bug"
    ],
    "generation": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/11.png"
  },
  {
    "id": 12,
    "name": "巴大蝶",
    "nameZh": "巴大蝶",
    "nameEn": "Butterfree",
    "types": [
      "bug",
      "flying"
    ],
    "generation": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/12.png"
  },
  {
    "id": 13,
    "name": "独角虫",
    "nameZh": "独角虫",
    "nameEn": "Weedle",
    "types": [
      "bug",
      "poison"
    ],
    "generation": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/13.png"
  },
  {
    "id": 14,
    "name": "铁壳蛹",
    "nameZh": "铁壳蛹",
    "nameEn": "Kakuna",
    "types": [
      "bug",
      "poison"
    ],
    "generation": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/14.png"
  },
  {
    "id": 15,
    "name": "大针蜂",
    "nameZh": "大针蜂",
    "nameEn": "Beedrill",
    "types": [
      "bug",
      "poison"
    ],
    "generation": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/15.png"
  },
  {
    "id": 16,
    "name": "波波",
    "nameZh": "波波",
    "nameEn": "Pidgey",
    "types": [
      "normal",
      "flying"
    ],
    "generation": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/16.png"
  },
  {
    "id": 17,
    "name": "比比鸟",
    "nameZh": "比比鸟",
    "nameEn": "Pidgeotto",
    "types": [
      "normal",
      "flying"
    ],
    "generation": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/17.png"
  },
  {
    "id": 18,
    "name": "大比鸟",
    "nameZh": "大比鸟",
    "nameEn": "Pidgeot",
    "types": [
      "normal",
      "flying"
    ],
    "generation": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/18.png"
  },
  {
    "id": 19,
    "name": "小拉达",
    "nameZh": "小拉达",
    "nameEn": "Rattata",
    "types": [
      "normal"
    ],
    "generation": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/19.png"
  },
  {
    "id": 20,
    "name": "拉达",
    "nameZh": "拉达",
    "nameEn": "Raticate",
    "types": [
      "normal"
    ],
    "generation": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/20.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/20.png"
  },
  {
    "id": 21,
    "name": "烈雀",
    "nameZh": "烈雀",
    "nameEn": "Spearow",
    "types": [
      "normal",
      "flying"
    ],
    "generation": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/21.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/21.png"
  },
  {
    "id": 22,
    "name": "大嘴雀",
    "nameZh": "大嘴雀",
    "nameEn": "Fearow",
    "types": [
      "normal",
      "flying"
    ],
    "generation": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/22.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/22.png"
  },
  {
    "id": 23,
    "name": "阿柏蛇",
    "nameZh": "阿柏蛇",
    "nameEn": "Ekans",
    "types": [
      "poison"
    ],
    "generation": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/23.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/23.png"
  },
  {
    "id": 24,
    "name": "阿柏怪",
    "nameZh": "阿柏怪",
    "nameEn": "Arbok",
    "types": [
      "poison"
    ],
    "generation": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/24.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/24.png"
  },
  {
    "id": 25,
    "name": "皮卡丘",
    "nameZh": "皮卡丘",
    "nameEn": "Pikachu",
    "types": [
      "electric"
    ],
    "generation": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png"
  },
  {
    "id": 26,
    "name": "雷丘",
    "nameZh": "雷丘",
    "nameEn": "Raichu",
    "types": [
      "electric"
    ],
    "generation": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/26.png"
  },
  {
    "id": 27,
    "name": "穿山鼠",
    "nameZh": "穿山鼠",
    "nameEn": "Sandshrew",
    "types": [
      "ground"
    ],
    "generation": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/27.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/27.png"
  },
  {
    "id": 28,
    "name": "穿山王",
    "nameZh": "穿山王",
    "nameEn": "Sandslash",
    "types": [
      "ground"
    ],
    "generation": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/28.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/28.png"
  },
  {
    "id": 29,
    "name": "尼多兰",
    "nameZh": "尼多兰",
    "nameEn": "Nidoran♀",
    "types": [
      "poison"
    ],
    "generation": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/29.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/29.png"
  },
  {
    "id": 30,
    "name": "尼多娜",
    "nameZh": "尼多娜",
    "nameEn": "Nidorina",
    "types": [
      "poison"
    ],
    "generation": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/30.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/30.png"
  },
  {
    "id": 31,
    "name": "尼多后",
    "nameZh": "尼多后",
    "nameEn": "Nidoqueen",
    "types": [
      "poison",
      "ground"
    ],
    "generation": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/31.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/31.png"
  },
  {
    "id": 32,
    "name": "尼多朗",
    "nameZh": "尼多朗",
    "nameEn": "Nidoran♂",
    "types": [
      "poison"
    ],
    "generation": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/32.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/32.png"
  },
  {
    "id": 33,
    "name": "尼多力诺",
    "nameZh": "尼多力诺",
    "nameEn": "Nidorino",
    "types": [
      "poison"
    ],
    "generation": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/33.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/33.png"
  },
  {
    "id": 34,
    "name": "尼多王",
    "nameZh": "尼多王",
    "nameEn": "Nidoking",
    "types": [
      "poison",
      "ground"
    ],
    "generation": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/34.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/34.png"
  },
  {
    "id": 35,
    "name": "皮皮",
    "nameZh": "皮皮",
    "nameEn": "Clefairy",
    "types": [
      "fairy"
    ],
    "generation": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/35.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/35.png"
  },
  {
    "id": 36,
    "name": "皮可西",
    "nameZh": "皮可西",
    "nameEn": "Clefable",
    "types": [
      "fairy"
    ],
    "generation": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/36.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/36.png"
  },
  {
    "id": 37,
    "name": "六尾",
    "nameZh": "六尾",
    "nameEn": "Vulpix",
    "types": [
      "fire"
    ],
    "generation": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/37.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/37.png"
  },
  {
    "id": 38,
    "name": "九尾",
    "nameZh": "九尾",
    "nameEn": "Ninetales",
    "types": [
      "fire"
    ],
    "generation": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/38.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/38.png"
  },
  {
    "id": 39,
    "name": "胖丁",
    "nameZh": "胖丁",
    "nameEn": "Jigglypuff",
    "types": [
      "normal",
      "fairy"
    ],
    "generation": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/39.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/39.png"
  },
  {
    "id": 40,
    "name": "胖可丁",
    "nameZh": "胖可丁",
    "nameEn": "Wigglytuff",
    "types": [
      "normal",
      "fairy"
    ],
    "generation": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/40.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/40.png"
  },
  {
    "id": 41,
    "name": "超音蝠",
    "nameZh": "超音蝠",
    "nameEn": "Zubat",
    "types": [
      "poison",
      "flying"
    ],
    "generation": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/41.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/41.png"
  },
  {
    "id": 42,
    "name": "大嘴蝠",
    "nameZh": "大嘴蝠",
    "nameEn": "Golbat",
    "types": [
      "poison",
      "flying"
    ],
    "generation": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/42.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/42.png"
  },
  {
    "id": 43,
    "name": "走路草",
    "nameZh": "走路草",
    "nameEn": "Oddish",
    "types": [
      "grass",
      "poison"
    ],
    "generation": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/43.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/43.png"
  },
  {
    "id": 44,
    "name": "臭臭花",
    "nameZh": "臭臭花",
    "nameEn": "Gloom",
    "types": [
      "grass",
      "poison"
    ],
    "generation": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/44.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/44.png"
  },
  {
    "id": 45,
    "name": "霸王花",
    "nameZh": "霸王花",
    "nameEn": "Vileplume",
    "types": [
      "grass",
      "poison"
    ],
    "generation": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/45.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/45.png"
  },
  {
    "id": 46,
    "name": "派拉斯",
    "nameZh": "派拉斯",
    "nameEn": "Paras",
    "types": [
      "bug",
      "grass"
    ],
    "generation": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/46.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/46.png"
  },
  {
    "id": 47,
    "name": "派拉斯特",
    "nameZh": "派拉斯特",
    "nameEn": "Parasect",
    "types": [
      "bug",
      "grass"
    ],
    "generation": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/47.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/47.png"
  },
  {
    "id": 48,
    "name": "毛球",
    "nameZh": "毛球",
    "nameEn": "Venonat",
    "types": [
      "bug",
      "poison"
    ],
    "generation": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/48.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/48.png"
  },
  {
    "id": 49,
    "name": "摩鲁蛾",
    "nameZh": "摩鲁蛾",
    "nameEn": "Venomoth",
    "types": [
      "bug",
      "poison"
    ],
    "generation": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/49.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/49.png"
  },
  {
    "id": 50,
    "name": "地鼠",
    "nameZh": "地鼠",
    "nameEn": "Diglett",
    "types": [
      "ground"
    ],
    "generation": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/50.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/50.png"
  },
  {
    "id": 51,
    "name": "三地鼠",
    "nameZh": "三地鼠",
    "nameEn": "Dugtrio",
    "types": [
      "ground"
    ],
    "generation": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/51.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/51.png"
  },
  {
    "id": 52,
    "name": "喵喵",
    "nameZh": "喵喵",
    "nameEn": "Meowth",
    "types": [
      "normal"
    ],
    "generation": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/52.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/52.png"
  },
  {
    "id": 53,
    "name": "猫老大",
    "nameZh": "猫老大",
    "nameEn": "Persian",
    "types": [
      "normal"
    ],
    "generation": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/53.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/53.png"
  },
  {
    "id": 54,
    "name": "可达鸭",
    "nameZh": "可达鸭",
    "nameEn": "Psyduck",
    "types": [
      "water"
    ],
    "generation": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/54.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/54.png"
  },
  {
    "id": 55,
    "name": "哥达鸭",
    "nameZh": "哥达鸭",
    "nameEn": "Golduck",
    "types": [
      "water"
    ],
    "generation": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/55.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/55.png"
  },
  {
    "id": 56,
    "name": "猴怪",
    "nameZh": "猴怪",
    "nameEn": "Mankey",
    "types": [
      "fighting"
    ],
    "generation": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/56.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/56.png"
  },
  {
    "id": 57,
    "name": "火暴猴",
    "nameZh": "火暴猴",
    "nameEn": "Primeape",
    "types": [
      "fighting"
    ],
    "generation": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/57.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/57.png"
  },
  {
    "id": 58,
    "name": "卡蒂狗",
    "nameZh": "卡蒂狗",
    "nameEn": "Growlithe",
    "types": [
      "fire"
    ],
    "generation": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/58.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/58.png"
  },
  {
    "id": 59,
    "name": "风速狗",
    "nameZh": "风速狗",
    "nameEn": "Arcanine",
    "types": [
      "fire"
    ],
    "generation": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/59.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/59.png"
  },
  {
    "id": 60,
    "name": "蚊香蝌蚪",
    "nameZh": "蚊香蝌蚪",
    "nameEn": "Poliwag",
    "types": [
      "water"
    ],
    "generation": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/60.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/60.png"
  },
  {
    "id": 61,
    "name": "蚊香君",
    "nameZh": "蚊香君",
    "nameEn": "Poliwhirl",
    "types": [
      "water"
    ],
    "generation": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/61.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/61.png"
  },
  {
    "id": 62,
    "name": "蚊香泳士",
    "nameZh": "蚊香泳士",
    "nameEn": "Poliwrath",
    "types": [
      "water",
      "fighting"
    ],
    "generation": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/62.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/62.png"
  },
  {
    "id": 63,
    "name": "凯西",
    "nameZh": "凯西",
    "nameEn": "Abra",
    "types": [
      "psychic"
    ],
    "generation": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/63.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/63.png"
  },
  {
    "id": 64,
    "name": "勇基拉",
    "nameZh": "勇基拉",
    "nameEn": "Kadabra",
    "types": [
      "psychic"
    ],
    "generation": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/64.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/64.png"
  },
  {
    "id": 65,
    "name": "胡地",
    "nameZh": "胡地",
    "nameEn": "Alakazam",
    "types": [
      "psychic"
    ],
    "generation": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/65.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/65.png"
  },
  {
    "id": 66,
    "name": "腕力",
    "nameZh": "腕力",
    "nameEn": "Machop",
    "types": [
      "fighting"
    ],
    "generation": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/66.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/66.png"
  },
  {
    "id": 67,
    "name": "豪力",
    "nameZh": "豪力",
    "nameEn": "Machoke",
    "types": [
      "fighting"
    ],
    "generation": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/67.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/67.png"
  },
  {
    "id": 68,
    "name": "怪力",
    "nameZh": "怪力",
    "nameEn": "Machamp",
    "types": [
      "fighting"
    ],
    "generation": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/68.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/68.png"
  },
  {
    "id": 69,
    "name": "喇叭芽",
    "nameZh": "喇叭芽",
    "nameEn": "Bellsprout",
    "types": [
      "grass",
      "poison"
    ],
    "generation": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/69.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/69.png"
  },
  {
    "id": 70,
    "name": "口呆花",
    "nameZh": "口呆花",
    "nameEn": "Weepinbell",
    "types": [
      "grass",
      "poison"
    ],
    "generation": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/70.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/70.png"
  },
  {
    "id": 71,
    "name": "大食花",
    "nameZh": "大食花",
    "nameEn": "Victreebel",
    "types": [
      "grass",
      "poison"
    ],
    "generation": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/71.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/71.png"
  },
  {
    "id": 72,
    "name": "玛瑙水母",
    "nameZh": "玛瑙水母",
    "nameEn": "Tentacool",
    "types": [
      "water",
      "poison"
    ],
    "generation": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/72.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/72.png"
  },
  {
    "id": 73,
    "name": "毒刺水母",
    "nameZh": "毒刺水母",
    "nameEn": "Tentacruel",
    "types": [
      "water",
      "poison"
    ],
    "generation": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/73.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/73.png"
  },
  {
    "id": 74,
    "name": "小拳石",
    "nameZh": "小拳石",
    "nameEn": "Geodude",
    "types": [
      "rock",
      "ground"
    ],
    "generation": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/74.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/74.png"
  },
  {
    "id": 75,
    "name": "隆隆石",
    "nameZh": "隆隆石",
    "nameEn": "Graveler",
    "types": [
      "rock",
      "ground"
    ],
    "generation": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/75.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/75.png"
  },
  {
    "id": 76,
    "name": "隆隆岩",
    "nameZh": "隆隆岩",
    "nameEn": "Golem",
    "types": [
      "rock",
      "ground"
    ],
    "generation": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/76.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/76.png"
  },
  {
    "id": 77,
    "name": "小火马",
    "nameZh": "小火马",
    "nameEn": "Ponyta",
    "types": [
      "fire"
    ],
    "generation": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/77.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/77.png"
  },
  {
    "id": 78,
    "name": "烈焰马",
    "nameZh": "烈焰马",
    "nameEn": "Rapidash",
    "types": [
      "fire"
    ],
    "generation": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/78.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/78.png"
  },
  {
    "id": 79,
    "name": "呆呆兽",
    "nameZh": "呆呆兽",
    "nameEn": "Slowpoke",
    "types": [
      "water",
      "psychic"
    ],
    "generation": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/79.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/79.png"
  },
  {
    "id": 80,
    "name": "呆壳兽",
    "nameZh": "呆壳兽",
    "nameEn": "Slowbro",
    "types": [
      "water",
      "psychic"
    ],
    "generation": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/80.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/80.png"
  },
  {
    "id": 81,
    "name": "小磁怪",
    "nameZh": "小磁怪",
    "nameEn": "Magnemite",
    "types": [
      "electric",
      "steel"
    ],
    "generation": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/81.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/81.png"
  },
  {
    "id": 82,
    "name": "三合一磁怪",
    "nameZh": "三合一磁怪",
    "nameEn": "Magneton",
    "types": [
      "electric",
      "steel"
    ],
    "generation": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/82.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/82.png"
  },
  {
    "id": 83,
    "name": "大葱鸭",
    "nameZh": "大葱鸭",
    "nameEn": "Farfetch’d",
    "types": [
      "normal",
      "flying"
    ],
    "generation": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/83.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/83.png"
  },
  {
    "id": 84,
    "name": "嘟嘟",
    "nameZh": "嘟嘟",
    "nameEn": "Doduo",
    "types": [
      "normal",
      "flying"
    ],
    "generation": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/84.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/84.png"
  },
  {
    "id": 85,
    "name": "嘟嘟利",
    "nameZh": "嘟嘟利",
    "nameEn": "Dodrio",
    "types": [
      "normal",
      "flying"
    ],
    "generation": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/85.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/85.png"
  },
  {
    "id": 86,
    "name": "小海狮",
    "nameZh": "小海狮",
    "nameEn": "Seel",
    "types": [
      "water"
    ],
    "generation": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/86.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/86.png"
  },
  {
    "id": 87,
    "name": "白海狮",
    "nameZh": "白海狮",
    "nameEn": "Dewgong",
    "types": [
      "water",
      "ice"
    ],
    "generation": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/87.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/87.png"
  },
  {
    "id": 88,
    "name": "臭泥",
    "nameZh": "臭泥",
    "nameEn": "Grimer",
    "types": [
      "poison"
    ],
    "generation": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/88.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/88.png"
  },
  {
    "id": 89,
    "name": "臭臭泥",
    "nameZh": "臭臭泥",
    "nameEn": "Muk",
    "types": [
      "poison"
    ],
    "generation": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/89.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/89.png"
  },
  {
    "id": 90,
    "name": "大舌贝",
    "nameZh": "大舌贝",
    "nameEn": "Shellder",
    "types": [
      "water"
    ],
    "generation": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/90.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/90.png"
  },
  {
    "id": 91,
    "name": "刺甲贝",
    "nameZh": "刺甲贝",
    "nameEn": "Cloyster",
    "types": [
      "water",
      "ice"
    ],
    "generation": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/91.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/91.png"
  },
  {
    "id": 92,
    "name": "鬼斯",
    "nameZh": "鬼斯",
    "nameEn": "Gastly",
    "types": [
      "ghost",
      "poison"
    ],
    "generation": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/92.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/92.png"
  },
  {
    "id": 93,
    "name": "鬼斯通",
    "nameZh": "鬼斯通",
    "nameEn": "Haunter",
    "types": [
      "ghost",
      "poison"
    ],
    "generation": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/93.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/93.png"
  },
  {
    "id": 94,
    "name": "耿鬼",
    "nameZh": "耿鬼",
    "nameEn": "Gengar",
    "types": [
      "ghost",
      "poison"
    ],
    "generation": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/94.png"
  },
  {
    "id": 95,
    "name": "大岩蛇",
    "nameZh": "大岩蛇",
    "nameEn": "Onix",
    "types": [
      "rock",
      "ground"
    ],
    "generation": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/95.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/95.png"
  },
  {
    "id": 96,
    "name": "催眠貘",
    "nameZh": "催眠貘",
    "nameEn": "Drowzee",
    "types": [
      "psychic"
    ],
    "generation": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/96.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/96.png"
  },
  {
    "id": 97,
    "name": "引梦貘人",
    "nameZh": "引梦貘人",
    "nameEn": "Hypno",
    "types": [
      "psychic"
    ],
    "generation": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/97.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/97.png"
  },
  {
    "id": 98,
    "name": "大钳蟹",
    "nameZh": "大钳蟹",
    "nameEn": "Krabby",
    "types": [
      "water"
    ],
    "generation": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/98.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/98.png"
  },
  {
    "id": 99,
    "name": "巨钳蟹",
    "nameZh": "巨钳蟹",
    "nameEn": "Kingler",
    "types": [
      "water"
    ],
    "generation": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/99.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/99.png"
  },
  {
    "id": 100,
    "name": "霹雳电球",
    "nameZh": "霹雳电球",
    "nameEn": "Voltorb",
    "types": [
      "electric"
    ],
    "generation": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/100.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/100.png"
  },
  {
    "id": 101,
    "name": "顽皮雷弹",
    "nameZh": "顽皮雷弹",
    "nameEn": "Electrode",
    "types": [
      "electric"
    ],
    "generation": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/101.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/101.png"
  },
  {
    "id": 102,
    "name": "蛋蛋",
    "nameZh": "蛋蛋",
    "nameEn": "Exeggcute",
    "types": [
      "grass",
      "psychic"
    ],
    "generation": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/102.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/102.png"
  },
  {
    "id": 103,
    "name": "椰蛋树",
    "nameZh": "椰蛋树",
    "nameEn": "Exeggutor",
    "types": [
      "grass",
      "psychic"
    ],
    "generation": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/103.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/103.png"
  },
  {
    "id": 104,
    "name": "卡拉卡拉",
    "nameZh": "卡拉卡拉",
    "nameEn": "Cubone",
    "types": [
      "ground"
    ],
    "generation": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/104.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/104.png"
  },
  {
    "id": 105,
    "name": "嘎啦嘎啦",
    "nameZh": "嘎啦嘎啦",
    "nameEn": "Marowak",
    "types": [
      "ground"
    ],
    "generation": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/105.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/105.png"
  },
  {
    "id": 106,
    "name": "飞腿郎",
    "nameZh": "飞腿郎",
    "nameEn": "Hitmonlee",
    "types": [
      "fighting"
    ],
    "generation": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/106.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/106.png"
  },
  {
    "id": 107,
    "name": "快拳郎",
    "nameZh": "快拳郎",
    "nameEn": "Hitmonchan",
    "types": [
      "fighting"
    ],
    "generation": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/107.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/107.png"
  },
  {
    "id": 108,
    "name": "大舌头",
    "nameZh": "大舌头",
    "nameEn": "Lickitung",
    "types": [
      "normal"
    ],
    "generation": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/108.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/108.png"
  },
  {
    "id": 109,
    "name": "瓦斯弹",
    "nameZh": "瓦斯弹",
    "nameEn": "Koffing",
    "types": [
      "poison"
    ],
    "generation": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/109.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/109.png"
  },
  {
    "id": 110,
    "name": "双弹瓦斯",
    "nameZh": "双弹瓦斯",
    "nameEn": "Weezing",
    "types": [
      "poison"
    ],
    "generation": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/110.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/110.png"
  },
  {
    "id": 111,
    "name": "独角犀牛",
    "nameZh": "独角犀牛",
    "nameEn": "Rhyhorn",
    "types": [
      "ground",
      "rock"
    ],
    "generation": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/111.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/111.png"
  },
  {
    "id": 112,
    "name": "钻角犀兽",
    "nameZh": "钻角犀兽",
    "nameEn": "Rhydon",
    "types": [
      "ground",
      "rock"
    ],
    "generation": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/112.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/112.png"
  },
  {
    "id": 113,
    "name": "吉利蛋",
    "nameZh": "吉利蛋",
    "nameEn": "Chansey",
    "types": [
      "normal"
    ],
    "generation": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/113.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/113.png"
  },
  {
    "id": 114,
    "name": "蔓藤怪",
    "nameZh": "蔓藤怪",
    "nameEn": "Tangela",
    "types": [
      "grass"
    ],
    "generation": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/114.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/114.png"
  },
  {
    "id": 115,
    "name": "袋兽",
    "nameZh": "袋兽",
    "nameEn": "Kangaskhan",
    "types": [
      "normal"
    ],
    "generation": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/115.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/115.png"
  },
  {
    "id": 116,
    "name": "墨海马",
    "nameZh": "墨海马",
    "nameEn": "Horsea",
    "types": [
      "water"
    ],
    "generation": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/116.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/116.png"
  },
  {
    "id": 117,
    "name": "海刺龙",
    "nameZh": "海刺龙",
    "nameEn": "Seadra",
    "types": [
      "water"
    ],
    "generation": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/117.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/117.png"
  },
  {
    "id": 118,
    "name": "角金鱼",
    "nameZh": "角金鱼",
    "nameEn": "Goldeen",
    "types": [
      "water"
    ],
    "generation": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/118.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/118.png"
  },
  {
    "id": 119,
    "name": "金鱼王",
    "nameZh": "金鱼王",
    "nameEn": "Seaking",
    "types": [
      "water"
    ],
    "generation": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/119.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/119.png"
  },
  {
    "id": 120,
    "name": "海星星",
    "nameZh": "海星星",
    "nameEn": "Staryu",
    "types": [
      "water"
    ],
    "generation": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/120.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/120.png"
  },
  {
    "id": 121,
    "name": "宝石海星",
    "nameZh": "宝石海星",
    "nameEn": "Starmie",
    "types": [
      "water",
      "psychic"
    ],
    "generation": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/121.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/121.png"
  },
  {
    "id": 122,
    "name": "魔墙人偶",
    "nameZh": "魔墙人偶",
    "nameEn": "Mr. Mime",
    "types": [
      "psychic",
      "fairy"
    ],
    "generation": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/122.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/122.png"
  },
  {
    "id": 123,
    "name": "飞天螳螂",
    "nameZh": "飞天螳螂",
    "nameEn": "Scyther",
    "types": [
      "bug",
      "flying"
    ],
    "generation": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/123.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/123.png"
  },
  {
    "id": 124,
    "name": "迷唇姐",
    "nameZh": "迷唇姐",
    "nameEn": "Jynx",
    "types": [
      "ice",
      "psychic"
    ],
    "generation": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/124.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/124.png"
  },
  {
    "id": 125,
    "name": "电击兽",
    "nameZh": "电击兽",
    "nameEn": "Electabuzz",
    "types": [
      "electric"
    ],
    "generation": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/125.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/125.png"
  },
  {
    "id": 126,
    "name": "鸭嘴火兽",
    "nameZh": "鸭嘴火兽",
    "nameEn": "Magmar",
    "types": [
      "fire"
    ],
    "generation": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/126.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/126.png"
  },
  {
    "id": 127,
    "name": "凯罗斯",
    "nameZh": "凯罗斯",
    "nameEn": "Pinsir",
    "types": [
      "bug"
    ],
    "generation": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/127.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/127.png"
  },
  {
    "id": 128,
    "name": "肯泰罗",
    "nameZh": "肯泰罗",
    "nameEn": "Tauros",
    "types": [
      "normal"
    ],
    "generation": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/128.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/128.png"
  },
  {
    "id": 129,
    "name": "鲤鱼王",
    "nameZh": "鲤鱼王",
    "nameEn": "Magikarp",
    "types": [
      "water"
    ],
    "generation": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/129.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/129.png"
  },
  {
    "id": 130,
    "name": "暴鲤龙",
    "nameZh": "暴鲤龙",
    "nameEn": "Gyarados",
    "types": [
      "water",
      "flying"
    ],
    "generation": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/130.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/130.png"
  },
  {
    "id": 131,
    "name": "拉普拉斯",
    "nameZh": "拉普拉斯",
    "nameEn": "Lapras",
    "types": [
      "water",
      "ice"
    ],
    "generation": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/131.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/131.png"
  },
  {
    "id": 132,
    "name": "百变怪",
    "nameZh": "百变怪",
    "nameEn": "Ditto",
    "types": [
      "normal"
    ],
    "generation": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/132.png"
  },
  {
    "id": 133,
    "name": "伊布",
    "nameZh": "伊布",
    "nameEn": "Eevee",
    "types": [
      "normal"
    ],
    "generation": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/133.png"
  },
  {
    "id": 134,
    "name": "水伊布",
    "nameZh": "水伊布",
    "nameEn": "Vaporeon",
    "types": [
      "water"
    ],
    "generation": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/134.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/134.png"
  },
  {
    "id": 135,
    "name": "雷伊布",
    "nameZh": "雷伊布",
    "nameEn": "Jolteon",
    "types": [
      "electric"
    ],
    "generation": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/135.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/135.png"
  },
  {
    "id": 136,
    "name": "火伊布",
    "nameZh": "火伊布",
    "nameEn": "Flareon",
    "types": [
      "fire"
    ],
    "generation": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/136.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/136.png"
  },
  {
    "id": 137,
    "name": "多边兽",
    "nameZh": "多边兽",
    "nameEn": "Porygon",
    "types": [
      "normal"
    ],
    "generation": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/137.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/137.png"
  },
  {
    "id": 138,
    "name": "菊石兽",
    "nameZh": "菊石兽",
    "nameEn": "Omanyte",
    "types": [
      "rock",
      "water"
    ],
    "generation": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/138.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/138.png"
  },
  {
    "id": 139,
    "name": "多刺菊石兽",
    "nameZh": "多刺菊石兽",
    "nameEn": "Omastar",
    "types": [
      "rock",
      "water"
    ],
    "generation": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/139.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/139.png"
  },
  {
    "id": 140,
    "name": "化石盔",
    "nameZh": "化石盔",
    "nameEn": "Kabuto",
    "types": [
      "rock",
      "water"
    ],
    "generation": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/140.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/140.png"
  },
  {
    "id": 141,
    "name": "镰刀盔",
    "nameZh": "镰刀盔",
    "nameEn": "Kabutops",
    "types": [
      "rock",
      "water"
    ],
    "generation": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/141.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/141.png"
  },
  {
    "id": 142,
    "name": "化石翼龙",
    "nameZh": "化石翼龙",
    "nameEn": "Aerodactyl",
    "types": [
      "rock",
      "flying"
    ],
    "generation": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/142.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/142.png"
  },
  {
    "id": 143,
    "name": "卡比兽",
    "nameZh": "卡比兽",
    "nameEn": "Snorlax",
    "types": [
      "normal"
    ],
    "generation": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/143.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/143.png"
  },
  {
    "id": 144,
    "name": "急冻鸟",
    "nameZh": "急冻鸟",
    "nameEn": "Articuno",
    "types": [
      "ice",
      "flying"
    ],
    "generation": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/144.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/144.png"
  },
  {
    "id": 145,
    "name": "闪电鸟",
    "nameZh": "闪电鸟",
    "nameEn": "Zapdos",
    "types": [
      "electric",
      "flying"
    ],
    "generation": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/145.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/145.png"
  },
  {
    "id": 146,
    "name": "火焰鸟",
    "nameZh": "火焰鸟",
    "nameEn": "Moltres",
    "types": [
      "fire",
      "flying"
    ],
    "generation": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/146.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/146.png"
  },
  {
    "id": 147,
    "name": "迷你龙",
    "nameZh": "迷你龙",
    "nameEn": "Dratini",
    "types": [
      "dragon"
    ],
    "generation": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/147.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/147.png"
  },
  {
    "id": 148,
    "name": "哈克龙",
    "nameZh": "哈克龙",
    "nameEn": "Dragonair",
    "types": [
      "dragon"
    ],
    "generation": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/148.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/148.png"
  },
  {
    "id": 149,
    "name": "快龙",
    "nameZh": "快龙",
    "nameEn": "Dragonite",
    "types": [
      "dragon",
      "flying"
    ],
    "generation": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/149.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/149.png"
  },
  {
    "id": 150,
    "name": "超梦",
    "nameZh": "超梦",
    "nameEn": "Mewtwo",
    "types": [
      "psychic"
    ],
    "generation": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/150.png"
  },
  {
    "id": 151,
    "name": "梦幻",
    "nameZh": "梦幻",
    "nameEn": "Mew",
    "types": [
      "psychic"
    ],
    "generation": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/151.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/151.png"
  },
  {
    "id": 152,
    "name": "菊草叶",
    "nameZh": "菊草叶",
    "nameEn": "Chikorita",
    "types": [
      "grass"
    ],
    "generation": 2,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/152.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/152.png"
  },
  {
    "id": 153,
    "name": "月桂叶",
    "nameZh": "月桂叶",
    "nameEn": "Bayleef",
    "types": [
      "grass"
    ],
    "generation": 2,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/153.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/153.png"
  },
  {
    "id": 154,
    "name": "大竺葵",
    "nameZh": "大竺葵",
    "nameEn": "Meganium",
    "types": [
      "grass"
    ],
    "generation": 2,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/154.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/154.png"
  },
  {
    "id": 155,
    "name": "火球鼠",
    "nameZh": "火球鼠",
    "nameEn": "Cyndaquil",
    "types": [
      "fire"
    ],
    "generation": 2,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/155.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/155.png"
  },
  {
    "id": 156,
    "name": "火岩鼠",
    "nameZh": "火岩鼠",
    "nameEn": "Quilava",
    "types": [
      "fire"
    ],
    "generation": 2,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/156.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/156.png"
  },
  {
    "id": 157,
    "name": "火暴兽",
    "nameZh": "火暴兽",
    "nameEn": "Typhlosion",
    "types": [
      "fire"
    ],
    "generation": 2,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/157.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/157.png"
  },
  {
    "id": 158,
    "name": "小锯鳄",
    "nameZh": "小锯鳄",
    "nameEn": "Totodile",
    "types": [
      "water"
    ],
    "generation": 2,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/158.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/158.png"
  },
  {
    "id": 159,
    "name": "蓝鳄",
    "nameZh": "蓝鳄",
    "nameEn": "Croconaw",
    "types": [
      "water"
    ],
    "generation": 2,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/159.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/159.png"
  },
  {
    "id": 160,
    "name": "大力鳄",
    "nameZh": "大力鳄",
    "nameEn": "Feraligatr",
    "types": [
      "water"
    ],
    "generation": 2,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/160.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/160.png"
  },
  {
    "id": 161,
    "name": "尾立",
    "nameZh": "尾立",
    "nameEn": "Sentret",
    "types": [
      "normal"
    ],
    "generation": 2,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/161.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/161.png"
  },
  {
    "id": 162,
    "name": "大尾立",
    "nameZh": "大尾立",
    "nameEn": "Furret",
    "types": [
      "normal"
    ],
    "generation": 2,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/162.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/162.png"
  },
  {
    "id": 163,
    "name": "咕咕",
    "nameZh": "咕咕",
    "nameEn": "Hoothoot",
    "types": [
      "normal",
      "flying"
    ],
    "generation": 2,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/163.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/163.png"
  },
  {
    "id": 164,
    "name": "猫头夜鹰",
    "nameZh": "猫头夜鹰",
    "nameEn": "Noctowl",
    "types": [
      "normal",
      "flying"
    ],
    "generation": 2,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/164.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/164.png"
  },
  {
    "id": 165,
    "name": "芭瓢虫",
    "nameZh": "芭瓢虫",
    "nameEn": "Ledyba",
    "types": [
      "bug",
      "flying"
    ],
    "generation": 2,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/165.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/165.png"
  },
  {
    "id": 166,
    "name": "安瓢虫",
    "nameZh": "安瓢虫",
    "nameEn": "Ledian",
    "types": [
      "bug",
      "flying"
    ],
    "generation": 2,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/166.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/166.png"
  },
  {
    "id": 167,
    "name": "圆丝蛛",
    "nameZh": "圆丝蛛",
    "nameEn": "Spinarak",
    "types": [
      "bug",
      "poison"
    ],
    "generation": 2,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/167.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/167.png"
  },
  {
    "id": 168,
    "name": "阿利多斯",
    "nameZh": "阿利多斯",
    "nameEn": "Ariados",
    "types": [
      "bug",
      "poison"
    ],
    "generation": 2,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/168.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/168.png"
  },
  {
    "id": 169,
    "name": "叉字蝠",
    "nameZh": "叉字蝠",
    "nameEn": "Crobat",
    "types": [
      "poison",
      "flying"
    ],
    "generation": 2,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/169.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/169.png"
  },
  {
    "id": 170,
    "name": "灯笼鱼",
    "nameZh": "灯笼鱼",
    "nameEn": "Chinchou",
    "types": [
      "water",
      "electric"
    ],
    "generation": 2,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/170.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/170.png"
  },
  {
    "id": 171,
    "name": "电灯怪",
    "nameZh": "电灯怪",
    "nameEn": "Lanturn",
    "types": [
      "water",
      "electric"
    ],
    "generation": 2,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/171.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/171.png"
  },
  {
    "id": 172,
    "name": "皮丘",
    "nameZh": "皮丘",
    "nameEn": "Pichu",
    "types": [
      "electric"
    ],
    "generation": 2,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/172.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/172.png"
  },
  {
    "id": 173,
    "name": "皮宝宝",
    "nameZh": "皮宝宝",
    "nameEn": "Cleffa",
    "types": [
      "fairy"
    ],
    "generation": 2,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/173.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/173.png"
  },
  {
    "id": 174,
    "name": "宝宝丁",
    "nameZh": "宝宝丁",
    "nameEn": "Igglybuff",
    "types": [
      "normal",
      "fairy"
    ],
    "generation": 2,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/174.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/174.png"
  },
  {
    "id": 175,
    "name": "波克比",
    "nameZh": "波克比",
    "nameEn": "Togepi",
    "types": [
      "fairy"
    ],
    "generation": 2,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/175.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/175.png"
  },
  {
    "id": 176,
    "name": "波克基古",
    "nameZh": "波克基古",
    "nameEn": "Togetic",
    "types": [
      "fairy",
      "flying"
    ],
    "generation": 2,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/176.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/176.png"
  },
  {
    "id": 177,
    "name": "天然雀",
    "nameZh": "天然雀",
    "nameEn": "Natu",
    "types": [
      "psychic",
      "flying"
    ],
    "generation": 2,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/177.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/177.png"
  },
  {
    "id": 178,
    "name": "天然鸟",
    "nameZh": "天然鸟",
    "nameEn": "Xatu",
    "types": [
      "psychic",
      "flying"
    ],
    "generation": 2,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/178.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/178.png"
  },
  {
    "id": 179,
    "name": "咩利羊",
    "nameZh": "咩利羊",
    "nameEn": "Mareep",
    "types": [
      "electric"
    ],
    "generation": 2,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/179.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/179.png"
  },
  {
    "id": 180,
    "name": "茸茸羊",
    "nameZh": "茸茸羊",
    "nameEn": "Flaaffy",
    "types": [
      "electric"
    ],
    "generation": 2,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/180.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/180.png"
  },
  {
    "id": 181,
    "name": "电龙",
    "nameZh": "电龙",
    "nameEn": "Ampharos",
    "types": [
      "electric"
    ],
    "generation": 2,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/181.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/181.png"
  },
  {
    "id": 182,
    "name": "美丽花",
    "nameZh": "美丽花",
    "nameEn": "Bellossom",
    "types": [
      "grass"
    ],
    "generation": 2,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/182.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/182.png"
  },
  {
    "id": 183,
    "name": "玛力露",
    "nameZh": "玛力露",
    "nameEn": "Marill",
    "types": [
      "water",
      "fairy"
    ],
    "generation": 2,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/183.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/183.png"
  },
  {
    "id": 184,
    "name": "玛力露丽",
    "nameZh": "玛力露丽",
    "nameEn": "Azumarill",
    "types": [
      "water",
      "fairy"
    ],
    "generation": 2,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/184.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/184.png"
  },
  {
    "id": 185,
    "name": "树才怪",
    "nameZh": "树才怪",
    "nameEn": "Sudowoodo",
    "types": [
      "rock"
    ],
    "generation": 2,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/185.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/185.png"
  },
  {
    "id": 186,
    "name": "蚊香蛙皇",
    "nameZh": "蚊香蛙皇",
    "nameEn": "Politoed",
    "types": [
      "water"
    ],
    "generation": 2,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/186.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/186.png"
  },
  {
    "id": 187,
    "name": "毽子草",
    "nameZh": "毽子草",
    "nameEn": "Hoppip",
    "types": [
      "grass",
      "flying"
    ],
    "generation": 2,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/187.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/187.png"
  },
  {
    "id": 188,
    "name": "毽子花",
    "nameZh": "毽子花",
    "nameEn": "Skiploom",
    "types": [
      "grass",
      "flying"
    ],
    "generation": 2,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/188.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/188.png"
  },
  {
    "id": 189,
    "name": "毽子棉",
    "nameZh": "毽子棉",
    "nameEn": "Jumpluff",
    "types": [
      "grass",
      "flying"
    ],
    "generation": 2,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/189.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/189.png"
  },
  {
    "id": 190,
    "name": "长尾怪手",
    "nameZh": "长尾怪手",
    "nameEn": "Aipom",
    "types": [
      "normal"
    ],
    "generation": 2,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/190.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/190.png"
  },
  {
    "id": 191,
    "name": "向日种子",
    "nameZh": "向日种子",
    "nameEn": "Sunkern",
    "types": [
      "grass"
    ],
    "generation": 2,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/191.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/191.png"
  },
  {
    "id": 192,
    "name": "向日花怪",
    "nameZh": "向日花怪",
    "nameEn": "Sunflora",
    "types": [
      "grass"
    ],
    "generation": 2,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/192.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/192.png"
  },
  {
    "id": 193,
    "name": "蜻蜻蜓",
    "nameZh": "蜻蜻蜓",
    "nameEn": "Yanma",
    "types": [
      "bug",
      "flying"
    ],
    "generation": 2,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/193.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/193.png"
  },
  {
    "id": 194,
    "name": "乌波",
    "nameZh": "乌波",
    "nameEn": "Wooper",
    "types": [
      "water",
      "ground"
    ],
    "generation": 2,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/194.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/194.png"
  },
  {
    "id": 195,
    "name": "沼王",
    "nameZh": "沼王",
    "nameEn": "Quagsire",
    "types": [
      "water",
      "ground"
    ],
    "generation": 2,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/195.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/195.png"
  },
  {
    "id": 196,
    "name": "太阳伊布",
    "nameZh": "太阳伊布",
    "nameEn": "Espeon",
    "types": [
      "psychic"
    ],
    "generation": 2,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/196.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/196.png"
  },
  {
    "id": 197,
    "name": "月亮伊布",
    "nameZh": "月亮伊布",
    "nameEn": "Umbreon",
    "types": [
      "dark"
    ],
    "generation": 2,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/197.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/197.png"
  },
  {
    "id": 198,
    "name": "黑暗鸦",
    "nameZh": "黑暗鸦",
    "nameEn": "Murkrow",
    "types": [
      "dark",
      "flying"
    ],
    "generation": 2,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/198.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/198.png"
  },
  {
    "id": 199,
    "name": "呆呆王",
    "nameZh": "呆呆王",
    "nameEn": "Slowking",
    "types": [
      "water",
      "psychic"
    ],
    "generation": 2,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/199.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/199.png"
  },
  {
    "id": 200,
    "name": "梦妖",
    "nameZh": "梦妖",
    "nameEn": "Misdreavus",
    "types": [
      "ghost"
    ],
    "generation": 2,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/200.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/200.png"
  },
  {
    "id": 201,
    "name": "未知图腾",
    "nameZh": "未知图腾",
    "nameEn": "Unown",
    "types": [
      "psychic"
    ],
    "generation": 2,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/201.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/201.png"
  },
  {
    "id": 202,
    "name": "果然翁",
    "nameZh": "果然翁",
    "nameEn": "Wobbuffet",
    "types": [
      "psychic"
    ],
    "generation": 2,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/202.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/202.png"
  },
  {
    "id": 203,
    "name": "麒麟奇",
    "nameZh": "麒麟奇",
    "nameEn": "Girafarig",
    "types": [
      "normal",
      "psychic"
    ],
    "generation": 2,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/203.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/203.png"
  },
  {
    "id": 204,
    "name": "榛果球",
    "nameZh": "榛果球",
    "nameEn": "Pineco",
    "types": [
      "bug"
    ],
    "generation": 2,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/204.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/204.png"
  },
  {
    "id": 205,
    "name": "佛烈托斯",
    "nameZh": "佛烈托斯",
    "nameEn": "Forretress",
    "types": [
      "bug",
      "steel"
    ],
    "generation": 2,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/205.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/205.png"
  },
  {
    "id": 206,
    "name": "土龙弟弟",
    "nameZh": "土龙弟弟",
    "nameEn": "Dunsparce",
    "types": [
      "normal"
    ],
    "generation": 2,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/206.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/206.png"
  },
  {
    "id": 207,
    "name": "天蝎",
    "nameZh": "天蝎",
    "nameEn": "Gligar",
    "types": [
      "ground",
      "flying"
    ],
    "generation": 2,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/207.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/207.png"
  },
  {
    "id": 208,
    "name": "大钢蛇",
    "nameZh": "大钢蛇",
    "nameEn": "Steelix",
    "types": [
      "steel",
      "ground"
    ],
    "generation": 2,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/208.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/208.png"
  },
  {
    "id": 209,
    "name": "布鲁",
    "nameZh": "布鲁",
    "nameEn": "Snubbull",
    "types": [
      "fairy"
    ],
    "generation": 2,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/209.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/209.png"
  },
  {
    "id": 210,
    "name": "布鲁皇",
    "nameZh": "布鲁皇",
    "nameEn": "Granbull",
    "types": [
      "fairy"
    ],
    "generation": 2,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/210.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/210.png"
  },
  {
    "id": 211,
    "name": "千针鱼",
    "nameZh": "千针鱼",
    "nameEn": "Qwilfish",
    "types": [
      "water",
      "poison"
    ],
    "generation": 2,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/211.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/211.png"
  },
  {
    "id": 212,
    "name": "巨钳螳螂",
    "nameZh": "巨钳螳螂",
    "nameEn": "Scizor",
    "types": [
      "bug",
      "steel"
    ],
    "generation": 2,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/212.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/212.png"
  },
  {
    "id": 213,
    "name": "壶壶",
    "nameZh": "壶壶",
    "nameEn": "Shuckle",
    "types": [
      "bug",
      "rock"
    ],
    "generation": 2,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/213.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/213.png"
  },
  {
    "id": 214,
    "name": "赫拉克罗斯",
    "nameZh": "赫拉克罗斯",
    "nameEn": "Heracross",
    "types": [
      "bug",
      "fighting"
    ],
    "generation": 2,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/214.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/214.png"
  },
  {
    "id": 215,
    "name": "狃拉",
    "nameZh": "狃拉",
    "nameEn": "Sneasel",
    "types": [
      "dark",
      "ice"
    ],
    "generation": 2,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/215.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/215.png"
  },
  {
    "id": 216,
    "name": "熊宝宝",
    "nameZh": "熊宝宝",
    "nameEn": "Teddiursa",
    "types": [
      "normal"
    ],
    "generation": 2,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/216.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/216.png"
  },
  {
    "id": 217,
    "name": "圈圈熊",
    "nameZh": "圈圈熊",
    "nameEn": "Ursaring",
    "types": [
      "normal"
    ],
    "generation": 2,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/217.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/217.png"
  },
  {
    "id": 218,
    "name": "熔岩虫",
    "nameZh": "熔岩虫",
    "nameEn": "Slugma",
    "types": [
      "fire"
    ],
    "generation": 2,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/218.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/218.png"
  },
  {
    "id": 219,
    "name": "熔岩蜗牛",
    "nameZh": "熔岩蜗牛",
    "nameEn": "Magcargo",
    "types": [
      "fire",
      "rock"
    ],
    "generation": 2,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/219.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/219.png"
  },
  {
    "id": 220,
    "name": "小山猪",
    "nameZh": "小山猪",
    "nameEn": "Swinub",
    "types": [
      "ice",
      "ground"
    ],
    "generation": 2,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/220.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/220.png"
  },
  {
    "id": 221,
    "name": "长毛猪",
    "nameZh": "长毛猪",
    "nameEn": "Piloswine",
    "types": [
      "ice",
      "ground"
    ],
    "generation": 2,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/221.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/221.png"
  },
  {
    "id": 222,
    "name": "太阳珊瑚",
    "nameZh": "太阳珊瑚",
    "nameEn": "Corsola",
    "types": [
      "water",
      "rock"
    ],
    "generation": 2,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/222.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/222.png"
  },
  {
    "id": 223,
    "name": "铁炮鱼",
    "nameZh": "铁炮鱼",
    "nameEn": "Remoraid",
    "types": [
      "water"
    ],
    "generation": 2,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/223.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/223.png"
  },
  {
    "id": 224,
    "name": "章鱼桶",
    "nameZh": "章鱼桶",
    "nameEn": "Octillery",
    "types": [
      "water"
    ],
    "generation": 2,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/224.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/224.png"
  },
  {
    "id": 225,
    "name": "信使鸟",
    "nameZh": "信使鸟",
    "nameEn": "Delibird",
    "types": [
      "ice",
      "flying"
    ],
    "generation": 2,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/225.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/225.png"
  },
  {
    "id": 226,
    "name": "巨翅飞鱼",
    "nameZh": "巨翅飞鱼",
    "nameEn": "Mantine",
    "types": [
      "water",
      "flying"
    ],
    "generation": 2,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/226.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/226.png"
  },
  {
    "id": 227,
    "name": "盔甲鸟",
    "nameZh": "盔甲鸟",
    "nameEn": "Skarmory",
    "types": [
      "steel",
      "flying"
    ],
    "generation": 2,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/227.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/227.png"
  },
  {
    "id": 228,
    "name": "戴鲁比",
    "nameZh": "戴鲁比",
    "nameEn": "Houndour",
    "types": [
      "dark",
      "fire"
    ],
    "generation": 2,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/228.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/228.png"
  },
  {
    "id": 229,
    "name": "黑鲁加",
    "nameZh": "黑鲁加",
    "nameEn": "Houndoom",
    "types": [
      "dark",
      "fire"
    ],
    "generation": 2,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/229.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/229.png"
  },
  {
    "id": 230,
    "name": "刺龙王",
    "nameZh": "刺龙王",
    "nameEn": "Kingdra",
    "types": [
      "water",
      "dragon"
    ],
    "generation": 2,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/230.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/230.png"
  },
  {
    "id": 231,
    "name": "小小象",
    "nameZh": "小小象",
    "nameEn": "Phanpy",
    "types": [
      "ground"
    ],
    "generation": 2,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/231.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/231.png"
  },
  {
    "id": 232,
    "name": "顿甲",
    "nameZh": "顿甲",
    "nameEn": "Donphan",
    "types": [
      "ground"
    ],
    "generation": 2,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/232.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/232.png"
  },
  {
    "id": 233,
    "name": "多边兽２型",
    "nameZh": "多边兽２型",
    "nameEn": "Porygon2",
    "types": [
      "normal"
    ],
    "generation": 2,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/233.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/233.png"
  },
  {
    "id": 234,
    "name": "惊角鹿",
    "nameZh": "惊角鹿",
    "nameEn": "Stantler",
    "types": [
      "normal"
    ],
    "generation": 2,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/234.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/234.png"
  },
  {
    "id": 235,
    "name": "图图犬",
    "nameZh": "图图犬",
    "nameEn": "Smeargle",
    "types": [
      "normal"
    ],
    "generation": 2,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/235.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/235.png"
  },
  {
    "id": 236,
    "name": "无畏小子",
    "nameZh": "无畏小子",
    "nameEn": "Tyrogue",
    "types": [
      "fighting"
    ],
    "generation": 2,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/236.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/236.png"
  },
  {
    "id": 237,
    "name": "战舞郎",
    "nameZh": "战舞郎",
    "nameEn": "Hitmontop",
    "types": [
      "fighting"
    ],
    "generation": 2,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/237.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/237.png"
  },
  {
    "id": 238,
    "name": "迷唇娃",
    "nameZh": "迷唇娃",
    "nameEn": "Smoochum",
    "types": [
      "ice",
      "psychic"
    ],
    "generation": 2,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/238.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/238.png"
  },
  {
    "id": 239,
    "name": "电击怪",
    "nameZh": "电击怪",
    "nameEn": "Elekid",
    "types": [
      "electric"
    ],
    "generation": 2,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/239.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/239.png"
  },
  {
    "id": 240,
    "name": "鸭嘴宝宝",
    "nameZh": "鸭嘴宝宝",
    "nameEn": "Magby",
    "types": [
      "fire"
    ],
    "generation": 2,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/240.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/240.png"
  },
  {
    "id": 241,
    "name": "大奶罐",
    "nameZh": "大奶罐",
    "nameEn": "Miltank",
    "types": [
      "normal"
    ],
    "generation": 2,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/241.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/241.png"
  },
  {
    "id": 242,
    "name": "幸福蛋",
    "nameZh": "幸福蛋",
    "nameEn": "Blissey",
    "types": [
      "normal"
    ],
    "generation": 2,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/242.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/242.png"
  },
  {
    "id": 243,
    "name": "雷公",
    "nameZh": "雷公",
    "nameEn": "Raikou",
    "types": [
      "electric"
    ],
    "generation": 2,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/243.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/243.png"
  },
  {
    "id": 244,
    "name": "炎帝",
    "nameZh": "炎帝",
    "nameEn": "Entei",
    "types": [
      "fire"
    ],
    "generation": 2,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/244.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/244.png"
  },
  {
    "id": 245,
    "name": "水君",
    "nameZh": "水君",
    "nameEn": "Suicune",
    "types": [
      "water"
    ],
    "generation": 2,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/245.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/245.png"
  },
  {
    "id": 246,
    "name": "幼基拉斯",
    "nameZh": "幼基拉斯",
    "nameEn": "Larvitar",
    "types": [
      "rock",
      "ground"
    ],
    "generation": 2,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/246.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/246.png"
  },
  {
    "id": 247,
    "name": "沙基拉斯",
    "nameZh": "沙基拉斯",
    "nameEn": "Pupitar",
    "types": [
      "rock",
      "ground"
    ],
    "generation": 2,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/247.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/247.png"
  },
  {
    "id": 248,
    "name": "班基拉斯",
    "nameZh": "班基拉斯",
    "nameEn": "Tyranitar",
    "types": [
      "rock",
      "dark"
    ],
    "generation": 2,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/248.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/248.png"
  },
  {
    "id": 249,
    "name": "洛奇亚",
    "nameZh": "洛奇亚",
    "nameEn": "Lugia",
    "types": [
      "psychic",
      "flying"
    ],
    "generation": 2,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/249.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/249.png"
  },
  {
    "id": 250,
    "name": "凤王",
    "nameZh": "凤王",
    "nameEn": "Ho-Oh",
    "types": [
      "fire",
      "flying"
    ],
    "generation": 2,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/250.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/250.png"
  },
  {
    "id": 251,
    "name": "时拉比",
    "nameZh": "时拉比",
    "nameEn": "Celebi",
    "types": [
      "psychic",
      "grass"
    ],
    "generation": 2,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/251.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/251.png"
  },
  {
    "id": 252,
    "name": "木守宫",
    "nameZh": "木守宫",
    "nameEn": "Treecko",
    "types": [
      "grass"
    ],
    "generation": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/252.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/252.png"
  },
  {
    "id": 253,
    "name": "森林蜥蜴",
    "nameZh": "森林蜥蜴",
    "nameEn": "Grovyle",
    "types": [
      "grass"
    ],
    "generation": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/253.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/253.png"
  },
  {
    "id": 254,
    "name": "蜥蜴王",
    "nameZh": "蜥蜴王",
    "nameEn": "Sceptile",
    "types": [
      "grass"
    ],
    "generation": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/254.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/254.png"
  },
  {
    "id": 255,
    "name": "火稚鸡",
    "nameZh": "火稚鸡",
    "nameEn": "Torchic",
    "types": [
      "fire"
    ],
    "generation": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/255.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/255.png"
  },
  {
    "id": 256,
    "name": "力壮鸡",
    "nameZh": "力壮鸡",
    "nameEn": "Combusken",
    "types": [
      "fire",
      "fighting"
    ],
    "generation": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/256.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/256.png"
  },
  {
    "id": 257,
    "name": "火焰鸡",
    "nameZh": "火焰鸡",
    "nameEn": "Blaziken",
    "types": [
      "fire",
      "fighting"
    ],
    "generation": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/257.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/257.png"
  },
  {
    "id": 258,
    "name": "水跃鱼",
    "nameZh": "水跃鱼",
    "nameEn": "Mudkip",
    "types": [
      "water"
    ],
    "generation": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/258.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/258.png"
  },
  {
    "id": 259,
    "name": "沼跃鱼",
    "nameZh": "沼跃鱼",
    "nameEn": "Marshtomp",
    "types": [
      "water",
      "ground"
    ],
    "generation": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/259.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/259.png"
  },
  {
    "id": 260,
    "name": "巨沼怪",
    "nameZh": "巨沼怪",
    "nameEn": "Swampert",
    "types": [
      "water",
      "ground"
    ],
    "generation": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/260.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/260.png"
  },
  {
    "id": 261,
    "name": "土狼犬",
    "nameZh": "土狼犬",
    "nameEn": "Poochyena",
    "types": [
      "dark"
    ],
    "generation": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/261.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/261.png"
  },
  {
    "id": 262,
    "name": "大狼犬",
    "nameZh": "大狼犬",
    "nameEn": "Mightyena",
    "types": [
      "dark"
    ],
    "generation": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/262.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/262.png"
  },
  {
    "id": 263,
    "name": "蛇纹熊",
    "nameZh": "蛇纹熊",
    "nameEn": "Zigzagoon",
    "types": [
      "normal"
    ],
    "generation": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/263.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/263.png"
  },
  {
    "id": 264,
    "name": "直冲熊",
    "nameZh": "直冲熊",
    "nameEn": "Linoone",
    "types": [
      "normal"
    ],
    "generation": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/264.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/264.png"
  },
  {
    "id": 265,
    "name": "刺尾虫",
    "nameZh": "刺尾虫",
    "nameEn": "Wurmple",
    "types": [
      "bug"
    ],
    "generation": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/265.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/265.png"
  },
  {
    "id": 266,
    "name": "甲壳茧",
    "nameZh": "甲壳茧",
    "nameEn": "Silcoon",
    "types": [
      "bug"
    ],
    "generation": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/266.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/266.png"
  },
  {
    "id": 267,
    "name": "狩猎凤蝶",
    "nameZh": "狩猎凤蝶",
    "nameEn": "Beautifly",
    "types": [
      "bug",
      "flying"
    ],
    "generation": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/267.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/267.png"
  },
  {
    "id": 268,
    "name": "盾甲茧",
    "nameZh": "盾甲茧",
    "nameEn": "Cascoon",
    "types": [
      "bug"
    ],
    "generation": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/268.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/268.png"
  },
  {
    "id": 269,
    "name": "毒粉蛾",
    "nameZh": "毒粉蛾",
    "nameEn": "Dustox",
    "types": [
      "bug",
      "poison"
    ],
    "generation": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/269.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/269.png"
  },
  {
    "id": 270,
    "name": "莲叶童子",
    "nameZh": "莲叶童子",
    "nameEn": "Lotad",
    "types": [
      "water",
      "grass"
    ],
    "generation": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/270.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/270.png"
  },
  {
    "id": 271,
    "name": "莲帽小童",
    "nameZh": "莲帽小童",
    "nameEn": "Lombre",
    "types": [
      "water",
      "grass"
    ],
    "generation": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/271.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/271.png"
  },
  {
    "id": 272,
    "name": "乐天河童",
    "nameZh": "乐天河童",
    "nameEn": "Ludicolo",
    "types": [
      "water",
      "grass"
    ],
    "generation": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/272.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/272.png"
  },
  {
    "id": 273,
    "name": "橡实果",
    "nameZh": "橡实果",
    "nameEn": "Seedot",
    "types": [
      "grass"
    ],
    "generation": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/273.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/273.png"
  },
  {
    "id": 274,
    "name": "长鼻叶",
    "nameZh": "长鼻叶",
    "nameEn": "Nuzleaf",
    "types": [
      "grass",
      "dark"
    ],
    "generation": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/274.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/274.png"
  },
  {
    "id": 275,
    "name": "狡猾天狗",
    "nameZh": "狡猾天狗",
    "nameEn": "Shiftry",
    "types": [
      "grass",
      "dark"
    ],
    "generation": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/275.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/275.png"
  },
  {
    "id": 276,
    "name": "傲骨燕",
    "nameZh": "傲骨燕",
    "nameEn": "Taillow",
    "types": [
      "normal",
      "flying"
    ],
    "generation": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/276.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/276.png"
  },
  {
    "id": 277,
    "name": "大王燕",
    "nameZh": "大王燕",
    "nameEn": "Swellow",
    "types": [
      "normal",
      "flying"
    ],
    "generation": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/277.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/277.png"
  },
  {
    "id": 278,
    "name": "长翅鸥",
    "nameZh": "长翅鸥",
    "nameEn": "Wingull",
    "types": [
      "water",
      "flying"
    ],
    "generation": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/278.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/278.png"
  },
  {
    "id": 279,
    "name": "大嘴鸥",
    "nameZh": "大嘴鸥",
    "nameEn": "Pelipper",
    "types": [
      "water",
      "flying"
    ],
    "generation": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/279.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/279.png"
  },
  {
    "id": 280,
    "name": "拉鲁拉丝",
    "nameZh": "拉鲁拉丝",
    "nameEn": "Ralts",
    "types": [
      "psychic",
      "fairy"
    ],
    "generation": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/280.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/280.png"
  },
  {
    "id": 281,
    "name": "奇鲁莉安",
    "nameZh": "奇鲁莉安",
    "nameEn": "Kirlia",
    "types": [
      "psychic",
      "fairy"
    ],
    "generation": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/281.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/281.png"
  },
  {
    "id": 282,
    "name": "沙奈朵",
    "nameZh": "沙奈朵",
    "nameEn": "Gardevoir",
    "types": [
      "psychic",
      "fairy"
    ],
    "generation": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/282.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/282.png"
  },
  {
    "id": 283,
    "name": "溜溜糖球",
    "nameZh": "溜溜糖球",
    "nameEn": "Surskit",
    "types": [
      "bug",
      "water"
    ],
    "generation": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/283.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/283.png"
  },
  {
    "id": 284,
    "name": "雨翅蛾",
    "nameZh": "雨翅蛾",
    "nameEn": "Masquerain",
    "types": [
      "bug",
      "flying"
    ],
    "generation": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/284.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/284.png"
  },
  {
    "id": 285,
    "name": "蘑蘑菇",
    "nameZh": "蘑蘑菇",
    "nameEn": "Shroomish",
    "types": [
      "grass"
    ],
    "generation": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/285.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/285.png"
  },
  {
    "id": 286,
    "name": "斗笠菇",
    "nameZh": "斗笠菇",
    "nameEn": "Breloom",
    "types": [
      "grass",
      "fighting"
    ],
    "generation": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/286.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/286.png"
  },
  {
    "id": 287,
    "name": "懒人獭",
    "nameZh": "懒人獭",
    "nameEn": "Slakoth",
    "types": [
      "normal"
    ],
    "generation": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/287.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/287.png"
  },
  {
    "id": 288,
    "name": "过动猿",
    "nameZh": "过动猿",
    "nameEn": "Vigoroth",
    "types": [
      "normal"
    ],
    "generation": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/288.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/288.png"
  },
  {
    "id": 289,
    "name": "请假王",
    "nameZh": "请假王",
    "nameEn": "Slaking",
    "types": [
      "normal"
    ],
    "generation": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/289.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/289.png"
  },
  {
    "id": 290,
    "name": "土居忍士",
    "nameZh": "土居忍士",
    "nameEn": "Nincada",
    "types": [
      "bug",
      "ground"
    ],
    "generation": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/290.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/290.png"
  },
  {
    "id": 291,
    "name": "铁面忍者",
    "nameZh": "铁面忍者",
    "nameEn": "Ninjask",
    "types": [
      "bug",
      "flying"
    ],
    "generation": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/291.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/291.png"
  },
  {
    "id": 292,
    "name": "脱壳忍者",
    "nameZh": "脱壳忍者",
    "nameEn": "Shedinja",
    "types": [
      "bug",
      "ghost"
    ],
    "generation": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/292.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/292.png"
  },
  {
    "id": 293,
    "name": "咕妞妞",
    "nameZh": "咕妞妞",
    "nameEn": "Whismur",
    "types": [
      "normal"
    ],
    "generation": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/293.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/293.png"
  },
  {
    "id": 294,
    "name": "吼爆弹",
    "nameZh": "吼爆弹",
    "nameEn": "Loudred",
    "types": [
      "normal"
    ],
    "generation": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/294.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/294.png"
  },
  {
    "id": 295,
    "name": "爆音怪",
    "nameZh": "爆音怪",
    "nameEn": "Exploud",
    "types": [
      "normal"
    ],
    "generation": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/295.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/295.png"
  },
  {
    "id": 296,
    "name": "幕下力士",
    "nameZh": "幕下力士",
    "nameEn": "Makuhita",
    "types": [
      "fighting"
    ],
    "generation": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/296.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/296.png"
  },
  {
    "id": 297,
    "name": "铁掌力士",
    "nameZh": "铁掌力士",
    "nameEn": "Hariyama",
    "types": [
      "fighting"
    ],
    "generation": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/297.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/297.png"
  },
  {
    "id": 298,
    "name": "露力丽",
    "nameZh": "露力丽",
    "nameEn": "Azurill",
    "types": [
      "normal",
      "fairy"
    ],
    "generation": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/298.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/298.png"
  },
  {
    "id": 299,
    "name": "朝北鼻",
    "nameZh": "朝北鼻",
    "nameEn": "Nosepass",
    "types": [
      "rock"
    ],
    "generation": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/299.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/299.png"
  },
  {
    "id": 300,
    "name": "向尾喵",
    "nameZh": "向尾喵",
    "nameEn": "Skitty",
    "types": [
      "normal"
    ],
    "generation": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/300.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/300.png"
  },
  {
    "id": 301,
    "name": "优雅猫",
    "nameZh": "优雅猫",
    "nameEn": "Delcatty",
    "types": [
      "normal"
    ],
    "generation": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/301.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/301.png"
  },
  {
    "id": 302,
    "name": "勾魂眼",
    "nameZh": "勾魂眼",
    "nameEn": "Sableye",
    "types": [
      "dark",
      "ghost"
    ],
    "generation": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/302.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/302.png"
  },
  {
    "id": 303,
    "name": "大嘴娃",
    "nameZh": "大嘴娃",
    "nameEn": "Mawile",
    "types": [
      "steel",
      "fairy"
    ],
    "generation": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/303.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/303.png"
  },
  {
    "id": 304,
    "name": "可可多拉",
    "nameZh": "可可多拉",
    "nameEn": "Aron",
    "types": [
      "steel",
      "rock"
    ],
    "generation": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/304.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/304.png"
  },
  {
    "id": 305,
    "name": "可多拉",
    "nameZh": "可多拉",
    "nameEn": "Lairon",
    "types": [
      "steel",
      "rock"
    ],
    "generation": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/305.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/305.png"
  },
  {
    "id": 306,
    "name": "波士可多拉",
    "nameZh": "波士可多拉",
    "nameEn": "Aggron",
    "types": [
      "steel",
      "rock"
    ],
    "generation": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/306.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/306.png"
  },
  {
    "id": 307,
    "name": "玛沙那",
    "nameZh": "玛沙那",
    "nameEn": "Meditite",
    "types": [
      "fighting",
      "psychic"
    ],
    "generation": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/307.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/307.png"
  },
  {
    "id": 308,
    "name": "恰雷姆",
    "nameZh": "恰雷姆",
    "nameEn": "Medicham",
    "types": [
      "fighting",
      "psychic"
    ],
    "generation": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/308.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/308.png"
  },
  {
    "id": 309,
    "name": "落雷兽",
    "nameZh": "落雷兽",
    "nameEn": "Electrike",
    "types": [
      "electric"
    ],
    "generation": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/309.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/309.png"
  },
  {
    "id": 310,
    "name": "雷电兽",
    "nameZh": "雷电兽",
    "nameEn": "Manectric",
    "types": [
      "electric"
    ],
    "generation": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/310.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/310.png"
  },
  {
    "id": 311,
    "name": "正电拍拍",
    "nameZh": "正电拍拍",
    "nameEn": "Plusle",
    "types": [
      "electric"
    ],
    "generation": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/311.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/311.png"
  },
  {
    "id": 312,
    "name": "負电拍拍",
    "nameZh": "負电拍拍",
    "nameEn": "Minun",
    "types": [
      "electric"
    ],
    "generation": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/312.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/312.png"
  },
  {
    "id": 313,
    "name": "电萤虫",
    "nameZh": "电萤虫",
    "nameEn": "Volbeat",
    "types": [
      "bug"
    ],
    "generation": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/313.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/313.png"
  },
  {
    "id": 314,
    "name": "甜甜萤",
    "nameZh": "甜甜萤",
    "nameEn": "Illumise",
    "types": [
      "bug"
    ],
    "generation": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/314.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/314.png"
  },
  {
    "id": 315,
    "name": "毒蔷薇",
    "nameZh": "毒蔷薇",
    "nameEn": "Roselia",
    "types": [
      "grass",
      "poison"
    ],
    "generation": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/315.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/315.png"
  },
  {
    "id": 316,
    "name": "溶食兽",
    "nameZh": "溶食兽",
    "nameEn": "Gulpin",
    "types": [
      "poison"
    ],
    "generation": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/316.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/316.png"
  },
  {
    "id": 317,
    "name": "吞食兽",
    "nameZh": "吞食兽",
    "nameEn": "Swalot",
    "types": [
      "poison"
    ],
    "generation": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/317.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/317.png"
  },
  {
    "id": 318,
    "name": "利牙鱼",
    "nameZh": "利牙鱼",
    "nameEn": "Carvanha",
    "types": [
      "water",
      "dark"
    ],
    "generation": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/318.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/318.png"
  },
  {
    "id": 319,
    "name": "巨牙鲨",
    "nameZh": "巨牙鲨",
    "nameEn": "Sharpedo",
    "types": [
      "water",
      "dark"
    ],
    "generation": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/319.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/319.png"
  },
  {
    "id": 320,
    "name": "吼吼鲸",
    "nameZh": "吼吼鲸",
    "nameEn": "Wailmer",
    "types": [
      "water"
    ],
    "generation": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/320.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/320.png"
  },
  {
    "id": 321,
    "name": "吼鲸王",
    "nameZh": "吼鲸王",
    "nameEn": "Wailord",
    "types": [
      "water"
    ],
    "generation": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/321.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/321.png"
  },
  {
    "id": 322,
    "name": "呆火驼",
    "nameZh": "呆火驼",
    "nameEn": "Numel",
    "types": [
      "fire",
      "ground"
    ],
    "generation": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/322.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/322.png"
  },
  {
    "id": 323,
    "name": "喷火驼",
    "nameZh": "喷火驼",
    "nameEn": "Camerupt",
    "types": [
      "fire",
      "ground"
    ],
    "generation": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/323.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/323.png"
  },
  {
    "id": 324,
    "name": "煤炭龟",
    "nameZh": "煤炭龟",
    "nameEn": "Torkoal",
    "types": [
      "fire"
    ],
    "generation": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/324.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/324.png"
  },
  {
    "id": 325,
    "name": "跳跳猪",
    "nameZh": "跳跳猪",
    "nameEn": "Spoink",
    "types": [
      "psychic"
    ],
    "generation": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/325.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/325.png"
  },
  {
    "id": 326,
    "name": "噗噗猪",
    "nameZh": "噗噗猪",
    "nameEn": "Grumpig",
    "types": [
      "psychic"
    ],
    "generation": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/326.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/326.png"
  },
  {
    "id": 327,
    "name": "晃晃斑",
    "nameZh": "晃晃斑",
    "nameEn": "Spinda",
    "types": [
      "normal"
    ],
    "generation": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/327.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/327.png"
  },
  {
    "id": 328,
    "name": "大颚蚁",
    "nameZh": "大颚蚁",
    "nameEn": "Trapinch",
    "types": [
      "ground"
    ],
    "generation": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/328.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/328.png"
  },
  {
    "id": 329,
    "name": "超音波幼虫",
    "nameZh": "超音波幼虫",
    "nameEn": "Vibrava",
    "types": [
      "ground",
      "dragon"
    ],
    "generation": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/329.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/329.png"
  },
  {
    "id": 330,
    "name": "沙漠蜻蜓",
    "nameZh": "沙漠蜻蜓",
    "nameEn": "Flygon",
    "types": [
      "ground",
      "dragon"
    ],
    "generation": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/330.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/330.png"
  },
  {
    "id": 331,
    "name": "刺球仙人掌",
    "nameZh": "刺球仙人掌",
    "nameEn": "Cacnea",
    "types": [
      "grass"
    ],
    "generation": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/331.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/331.png"
  },
  {
    "id": 332,
    "name": "梦歌仙人掌",
    "nameZh": "梦歌仙人掌",
    "nameEn": "Cacturne",
    "types": [
      "grass",
      "dark"
    ],
    "generation": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/332.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/332.png"
  },
  {
    "id": 333,
    "name": "青绵鸟",
    "nameZh": "青绵鸟",
    "nameEn": "Swablu",
    "types": [
      "normal",
      "flying"
    ],
    "generation": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/333.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/333.png"
  },
  {
    "id": 334,
    "name": "七夕青鸟",
    "nameZh": "七夕青鸟",
    "nameEn": "Altaria",
    "types": [
      "dragon",
      "flying"
    ],
    "generation": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/334.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/334.png"
  },
  {
    "id": 335,
    "name": "猫鼬斩",
    "nameZh": "猫鼬斩",
    "nameEn": "Zangoose",
    "types": [
      "normal"
    ],
    "generation": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/335.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/335.png"
  },
  {
    "id": 336,
    "name": "饭匙蛇",
    "nameZh": "饭匙蛇",
    "nameEn": "Seviper",
    "types": [
      "poison"
    ],
    "generation": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/336.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/336.png"
  },
  {
    "id": 337,
    "name": "月石",
    "nameZh": "月石",
    "nameEn": "Lunatone",
    "types": [
      "rock",
      "psychic"
    ],
    "generation": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/337.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/337.png"
  },
  {
    "id": 338,
    "name": "太阳岩",
    "nameZh": "太阳岩",
    "nameEn": "Solrock",
    "types": [
      "rock",
      "psychic"
    ],
    "generation": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/338.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/338.png"
  },
  {
    "id": 339,
    "name": "泥泥鳅",
    "nameZh": "泥泥鳅",
    "nameEn": "Barboach",
    "types": [
      "water",
      "ground"
    ],
    "generation": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/339.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/339.png"
  },
  {
    "id": 340,
    "name": "鲶鱼王",
    "nameZh": "鲶鱼王",
    "nameEn": "Whiscash",
    "types": [
      "water",
      "ground"
    ],
    "generation": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/340.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/340.png"
  },
  {
    "id": 341,
    "name": "龙虾小兵",
    "nameZh": "龙虾小兵",
    "nameEn": "Corphish",
    "types": [
      "water"
    ],
    "generation": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/341.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/341.png"
  },
  {
    "id": 342,
    "name": "铁螯龙虾",
    "nameZh": "铁螯龙虾",
    "nameEn": "Crawdaunt",
    "types": [
      "water",
      "dark"
    ],
    "generation": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/342.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/342.png"
  },
  {
    "id": 343,
    "name": "天秤偶",
    "nameZh": "天秤偶",
    "nameEn": "Baltoy",
    "types": [
      "ground",
      "psychic"
    ],
    "generation": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/343.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/343.png"
  },
  {
    "id": 344,
    "name": "念力土偶",
    "nameZh": "念力土偶",
    "nameEn": "Claydol",
    "types": [
      "ground",
      "psychic"
    ],
    "generation": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/344.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/344.png"
  },
  {
    "id": 345,
    "name": "触手百合",
    "nameZh": "触手百合",
    "nameEn": "Lileep",
    "types": [
      "rock",
      "grass"
    ],
    "generation": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/345.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/345.png"
  },
  {
    "id": 346,
    "name": "摇篮百合",
    "nameZh": "摇篮百合",
    "nameEn": "Cradily",
    "types": [
      "rock",
      "grass"
    ],
    "generation": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/346.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/346.png"
  },
  {
    "id": 347,
    "name": "太古羽虫",
    "nameZh": "太古羽虫",
    "nameEn": "Anorith",
    "types": [
      "rock",
      "bug"
    ],
    "generation": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/347.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/347.png"
  },
  {
    "id": 348,
    "name": "太古盔甲",
    "nameZh": "太古盔甲",
    "nameEn": "Armaldo",
    "types": [
      "rock",
      "bug"
    ],
    "generation": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/348.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/348.png"
  },
  {
    "id": 349,
    "name": "丑丑鱼",
    "nameZh": "丑丑鱼",
    "nameEn": "Feebas",
    "types": [
      "water"
    ],
    "generation": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/349.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/349.png"
  },
  {
    "id": 350,
    "name": "美纳斯",
    "nameZh": "美纳斯",
    "nameEn": "Milotic",
    "types": [
      "water"
    ],
    "generation": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/350.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/350.png"
  },
  {
    "id": 351,
    "name": "飘浮泡泡",
    "nameZh": "飘浮泡泡",
    "nameEn": "Castform",
    "types": [
      "normal"
    ],
    "generation": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/351.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/351.png"
  },
  {
    "id": 352,
    "name": "变隐龙",
    "nameZh": "变隐龙",
    "nameEn": "Kecleon",
    "types": [
      "normal"
    ],
    "generation": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/352.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/352.png"
  },
  {
    "id": 353,
    "name": "怨影娃娃",
    "nameZh": "怨影娃娃",
    "nameEn": "Shuppet",
    "types": [
      "ghost"
    ],
    "generation": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/353.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/353.png"
  },
  {
    "id": 354,
    "name": "诅咒娃娃",
    "nameZh": "诅咒娃娃",
    "nameEn": "Banette",
    "types": [
      "ghost"
    ],
    "generation": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/354.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/354.png"
  },
  {
    "id": 355,
    "name": "夜巡灵",
    "nameZh": "夜巡灵",
    "nameEn": "Duskull",
    "types": [
      "ghost"
    ],
    "generation": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/355.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/355.png"
  },
  {
    "id": 356,
    "name": "彷徨夜灵",
    "nameZh": "彷徨夜灵",
    "nameEn": "Dusclops",
    "types": [
      "ghost"
    ],
    "generation": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/356.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/356.png"
  },
  {
    "id": 357,
    "name": "热带龙",
    "nameZh": "热带龙",
    "nameEn": "Tropius",
    "types": [
      "grass",
      "flying"
    ],
    "generation": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/357.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/357.png"
  },
  {
    "id": 358,
    "name": "风铃铃",
    "nameZh": "风铃铃",
    "nameEn": "Chimecho",
    "types": [
      "psychic"
    ],
    "generation": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/358.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/358.png"
  },
  {
    "id": 359,
    "name": "阿勃梭鲁",
    "nameZh": "阿勃梭鲁",
    "nameEn": "Absol",
    "types": [
      "dark"
    ],
    "generation": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/359.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/359.png"
  },
  {
    "id": 360,
    "name": "小果然",
    "nameZh": "小果然",
    "nameEn": "Wynaut",
    "types": [
      "psychic"
    ],
    "generation": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/360.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/360.png"
  },
  {
    "id": 361,
    "name": "雪童子",
    "nameZh": "雪童子",
    "nameEn": "Snorunt",
    "types": [
      "ice"
    ],
    "generation": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/361.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/361.png"
  },
  {
    "id": 362,
    "name": "冰鬼护",
    "nameZh": "冰鬼护",
    "nameEn": "Glalie",
    "types": [
      "ice"
    ],
    "generation": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/362.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/362.png"
  },
  {
    "id": 363,
    "name": "海豹球",
    "nameZh": "海豹球",
    "nameEn": "Spheal",
    "types": [
      "ice",
      "water"
    ],
    "generation": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/363.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/363.png"
  },
  {
    "id": 364,
    "name": "海魔狮",
    "nameZh": "海魔狮",
    "nameEn": "Sealeo",
    "types": [
      "ice",
      "water"
    ],
    "generation": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/364.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/364.png"
  },
  {
    "id": 365,
    "name": "帝牙海狮",
    "nameZh": "帝牙海狮",
    "nameEn": "Walrein",
    "types": [
      "ice",
      "water"
    ],
    "generation": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/365.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/365.png"
  },
  {
    "id": 366,
    "name": "珍珠贝",
    "nameZh": "珍珠贝",
    "nameEn": "Clamperl",
    "types": [
      "water"
    ],
    "generation": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/366.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/366.png"
  },
  {
    "id": 367,
    "name": "猎斑鱼",
    "nameZh": "猎斑鱼",
    "nameEn": "Huntail",
    "types": [
      "water"
    ],
    "generation": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/367.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/367.png"
  },
  {
    "id": 368,
    "name": "樱花鱼",
    "nameZh": "樱花鱼",
    "nameEn": "Gorebyss",
    "types": [
      "water"
    ],
    "generation": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/368.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/368.png"
  },
  {
    "id": 369,
    "name": "古空棘鱼",
    "nameZh": "古空棘鱼",
    "nameEn": "Relicanth",
    "types": [
      "water",
      "rock"
    ],
    "generation": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/369.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/369.png"
  },
  {
    "id": 370,
    "name": "爱心鱼",
    "nameZh": "爱心鱼",
    "nameEn": "Luvdisc",
    "types": [
      "water"
    ],
    "generation": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/370.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/370.png"
  },
  {
    "id": 371,
    "name": "宝贝龙",
    "nameZh": "宝贝龙",
    "nameEn": "Bagon",
    "types": [
      "dragon"
    ],
    "generation": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/371.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/371.png"
  },
  {
    "id": 372,
    "name": "甲壳龙",
    "nameZh": "甲壳龙",
    "nameEn": "Shelgon",
    "types": [
      "dragon"
    ],
    "generation": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/372.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/372.png"
  },
  {
    "id": 373,
    "name": "暴飞龙",
    "nameZh": "暴飞龙",
    "nameEn": "Salamence",
    "types": [
      "dragon",
      "flying"
    ],
    "generation": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/373.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/373.png"
  },
  {
    "id": 374,
    "name": "铁哑铃",
    "nameZh": "铁哑铃",
    "nameEn": "Beldum",
    "types": [
      "steel",
      "psychic"
    ],
    "generation": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/374.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/374.png"
  },
  {
    "id": 375,
    "name": "金属怪",
    "nameZh": "金属怪",
    "nameEn": "Metang",
    "types": [
      "steel",
      "psychic"
    ],
    "generation": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/375.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/375.png"
  },
  {
    "id": 376,
    "name": "巨金怪",
    "nameZh": "巨金怪",
    "nameEn": "Metagross",
    "types": [
      "steel",
      "psychic"
    ],
    "generation": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/376.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/376.png"
  },
  {
    "id": 377,
    "name": "雷吉洛克",
    "nameZh": "雷吉洛克",
    "nameEn": "Regirock",
    "types": [
      "rock"
    ],
    "generation": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/377.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/377.png"
  },
  {
    "id": 378,
    "name": "雷吉艾斯",
    "nameZh": "雷吉艾斯",
    "nameEn": "Regice",
    "types": [
      "ice"
    ],
    "generation": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/378.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/378.png"
  },
  {
    "id": 379,
    "name": "雷吉斯奇鲁",
    "nameZh": "雷吉斯奇鲁",
    "nameEn": "Registeel",
    "types": [
      "steel"
    ],
    "generation": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/379.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/379.png"
  },
  {
    "id": 380,
    "name": "拉帝亚斯",
    "nameZh": "拉帝亚斯",
    "nameEn": "Latias",
    "types": [
      "dragon",
      "psychic"
    ],
    "generation": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/380.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/380.png"
  },
  {
    "id": 381,
    "name": "拉帝欧斯",
    "nameZh": "拉帝欧斯",
    "nameEn": "Latios",
    "types": [
      "dragon",
      "psychic"
    ],
    "generation": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/381.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/381.png"
  },
  {
    "id": 382,
    "name": "盖欧卡",
    "nameZh": "盖欧卡",
    "nameEn": "Kyogre",
    "types": [
      "water"
    ],
    "generation": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/382.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/382.png"
  },
  {
    "id": 383,
    "name": "固拉多",
    "nameZh": "固拉多",
    "nameEn": "Groudon",
    "types": [
      "ground"
    ],
    "generation": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/383.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/383.png"
  },
  {
    "id": 384,
    "name": "烈空坐",
    "nameZh": "烈空坐",
    "nameEn": "Rayquaza",
    "types": [
      "dragon",
      "flying"
    ],
    "generation": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/384.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/384.png"
  },
  {
    "id": 385,
    "name": "基拉祈",
    "nameZh": "基拉祈",
    "nameEn": "Jirachi",
    "types": [
      "steel",
      "psychic"
    ],
    "generation": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/385.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/385.png"
  },
  {
    "id": 386,
    "name": "代欧奇希斯",
    "nameZh": "代欧奇希斯",
    "nameEn": "Deoxys",
    "types": [
      "psychic"
    ],
    "generation": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/386.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/386.png"
  },
  {
    "id": 387,
    "name": "草苗龟",
    "nameZh": "草苗龟",
    "nameEn": "Turtwig",
    "types": [
      "grass"
    ],
    "generation": 4,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/387.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/387.png"
  },
  {
    "id": 388,
    "name": "树林龟",
    "nameZh": "树林龟",
    "nameEn": "Grotle",
    "types": [
      "grass"
    ],
    "generation": 4,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/388.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/388.png"
  },
  {
    "id": 389,
    "name": "土台龟",
    "nameZh": "土台龟",
    "nameEn": "Torterra",
    "types": [
      "grass",
      "ground"
    ],
    "generation": 4,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/389.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/389.png"
  },
  {
    "id": 390,
    "name": "小火焰猴",
    "nameZh": "小火焰猴",
    "nameEn": "Chimchar",
    "types": [
      "fire"
    ],
    "generation": 4,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/390.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/390.png"
  },
  {
    "id": 391,
    "name": "猛火猴",
    "nameZh": "猛火猴",
    "nameEn": "Monferno",
    "types": [
      "fire",
      "fighting"
    ],
    "generation": 4,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/391.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/391.png"
  },
  {
    "id": 392,
    "name": "烈焰猴",
    "nameZh": "烈焰猴",
    "nameEn": "Infernape",
    "types": [
      "fire",
      "fighting"
    ],
    "generation": 4,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/392.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/392.png"
  },
  {
    "id": 393,
    "name": "波加曼",
    "nameZh": "波加曼",
    "nameEn": "Piplup",
    "types": [
      "water"
    ],
    "generation": 4,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/393.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/393.png"
  },
  {
    "id": 394,
    "name": "波皇子",
    "nameZh": "波皇子",
    "nameEn": "Prinplup",
    "types": [
      "water"
    ],
    "generation": 4,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/394.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/394.png"
  },
  {
    "id": 395,
    "name": "帝王拿波",
    "nameZh": "帝王拿波",
    "nameEn": "Empoleon",
    "types": [
      "water",
      "steel"
    ],
    "generation": 4,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/395.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/395.png"
  },
  {
    "id": 396,
    "name": "姆克儿",
    "nameZh": "姆克儿",
    "nameEn": "Starly",
    "types": [
      "normal",
      "flying"
    ],
    "generation": 4,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/396.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/396.png"
  },
  {
    "id": 397,
    "name": "姆克鸟",
    "nameZh": "姆克鸟",
    "nameEn": "Staravia",
    "types": [
      "normal",
      "flying"
    ],
    "generation": 4,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/397.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/397.png"
  },
  {
    "id": 398,
    "name": "姆克鹰",
    "nameZh": "姆克鹰",
    "nameEn": "Staraptor",
    "types": [
      "normal",
      "flying"
    ],
    "generation": 4,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/398.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/398.png"
  },
  {
    "id": 399,
    "name": "大牙狸",
    "nameZh": "大牙狸",
    "nameEn": "Bidoof",
    "types": [
      "normal"
    ],
    "generation": 4,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/399.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/399.png"
  },
  {
    "id": 400,
    "name": "大尾狸",
    "nameZh": "大尾狸",
    "nameEn": "Bibarel",
    "types": [
      "normal",
      "water"
    ],
    "generation": 4,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/400.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/400.png"
  },
  {
    "id": 401,
    "name": "圆法师",
    "nameZh": "圆法师",
    "nameEn": "Kricketot",
    "types": [
      "bug"
    ],
    "generation": 4,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/401.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/401.png"
  },
  {
    "id": 402,
    "name": "音箱蟀",
    "nameZh": "音箱蟀",
    "nameEn": "Kricketune",
    "types": [
      "bug"
    ],
    "generation": 4,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/402.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/402.png"
  },
  {
    "id": 403,
    "name": "小猫怪",
    "nameZh": "小猫怪",
    "nameEn": "Shinx",
    "types": [
      "electric"
    ],
    "generation": 4,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/403.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/403.png"
  },
  {
    "id": 404,
    "name": "勒克猫",
    "nameZh": "勒克猫",
    "nameEn": "Luxio",
    "types": [
      "electric"
    ],
    "generation": 4,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/404.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/404.png"
  },
  {
    "id": 405,
    "name": "伦琴猫",
    "nameZh": "伦琴猫",
    "nameEn": "Luxray",
    "types": [
      "electric"
    ],
    "generation": 4,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/405.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/405.png"
  },
  {
    "id": 406,
    "name": "含羞苞",
    "nameZh": "含羞苞",
    "nameEn": "Budew",
    "types": [
      "grass",
      "poison"
    ],
    "generation": 4,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/406.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/406.png"
  },
  {
    "id": 407,
    "name": "罗丝雷朵",
    "nameZh": "罗丝雷朵",
    "nameEn": "Roserade",
    "types": [
      "grass",
      "poison"
    ],
    "generation": 4,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/407.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/407.png"
  },
  {
    "id": 408,
    "name": "头盖龙",
    "nameZh": "头盖龙",
    "nameEn": "Cranidos",
    "types": [
      "rock"
    ],
    "generation": 4,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/408.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/408.png"
  },
  {
    "id": 409,
    "name": "战槌龙",
    "nameZh": "战槌龙",
    "nameEn": "Rampardos",
    "types": [
      "rock"
    ],
    "generation": 4,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/409.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/409.png"
  },
  {
    "id": 410,
    "name": "盾甲龙",
    "nameZh": "盾甲龙",
    "nameEn": "Shieldon",
    "types": [
      "rock",
      "steel"
    ],
    "generation": 4,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/410.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/410.png"
  },
  {
    "id": 411,
    "name": "护城龙",
    "nameZh": "护城龙",
    "nameEn": "Bastiodon",
    "types": [
      "rock",
      "steel"
    ],
    "generation": 4,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/411.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/411.png"
  },
  {
    "id": 412,
    "name": "结草儿",
    "nameZh": "结草儿",
    "nameEn": "Burmy",
    "types": [
      "bug"
    ],
    "generation": 4,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/412.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/412.png"
  },
  {
    "id": 413,
    "name": "结草贵妇",
    "nameZh": "结草贵妇",
    "nameEn": "Wormadam",
    "types": [
      "bug",
      "grass"
    ],
    "generation": 4,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/413.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/413.png"
  },
  {
    "id": 414,
    "name": "绅士蛾",
    "nameZh": "绅士蛾",
    "nameEn": "Mothim",
    "types": [
      "bug",
      "flying"
    ],
    "generation": 4,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/414.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/414.png"
  },
  {
    "id": 415,
    "name": "三蜜蜂",
    "nameZh": "三蜜蜂",
    "nameEn": "Combee",
    "types": [
      "bug",
      "flying"
    ],
    "generation": 4,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/415.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/415.png"
  },
  {
    "id": 416,
    "name": "蜂女王",
    "nameZh": "蜂女王",
    "nameEn": "Vespiquen",
    "types": [
      "bug",
      "flying"
    ],
    "generation": 4,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/416.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/416.png"
  },
  {
    "id": 417,
    "name": "帕奇利兹",
    "nameZh": "帕奇利兹",
    "nameEn": "Pachirisu",
    "types": [
      "electric"
    ],
    "generation": 4,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/417.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/417.png"
  },
  {
    "id": 418,
    "name": "泳圈鼬",
    "nameZh": "泳圈鼬",
    "nameEn": "Buizel",
    "types": [
      "water"
    ],
    "generation": 4,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/418.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/418.png"
  },
  {
    "id": 419,
    "name": "浮潜鼬",
    "nameZh": "浮潜鼬",
    "nameEn": "Floatzel",
    "types": [
      "water"
    ],
    "generation": 4,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/419.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/419.png"
  },
  {
    "id": 420,
    "name": "樱花宝",
    "nameZh": "樱花宝",
    "nameEn": "Cherubi",
    "types": [
      "grass"
    ],
    "generation": 4,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/420.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/420.png"
  },
  {
    "id": 421,
    "name": "樱花儿",
    "nameZh": "樱花儿",
    "nameEn": "Cherrim",
    "types": [
      "grass"
    ],
    "generation": 4,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/421.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/421.png"
  },
  {
    "id": 422,
    "name": "无壳海兔",
    "nameZh": "无壳海兔",
    "nameEn": "Shellos",
    "types": [
      "water"
    ],
    "generation": 4,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/422.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/422.png"
  },
  {
    "id": 423,
    "name": "海兔兽",
    "nameZh": "海兔兽",
    "nameEn": "Gastrodon",
    "types": [
      "water",
      "ground"
    ],
    "generation": 4,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/423.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/423.png"
  },
  {
    "id": 424,
    "name": "双尾怪手",
    "nameZh": "双尾怪手",
    "nameEn": "Ambipom",
    "types": [
      "normal"
    ],
    "generation": 4,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/424.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/424.png"
  },
  {
    "id": 425,
    "name": "飘飘球",
    "nameZh": "飘飘球",
    "nameEn": "Drifloon",
    "types": [
      "ghost",
      "flying"
    ],
    "generation": 4,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/425.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/425.png"
  },
  {
    "id": 426,
    "name": "随风球",
    "nameZh": "随风球",
    "nameEn": "Drifblim",
    "types": [
      "ghost",
      "flying"
    ],
    "generation": 4,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/426.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/426.png"
  },
  {
    "id": 427,
    "name": "卷卷耳",
    "nameZh": "卷卷耳",
    "nameEn": "Buneary",
    "types": [
      "normal"
    ],
    "generation": 4,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/427.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/427.png"
  },
  {
    "id": 428,
    "name": "长耳兔",
    "nameZh": "长耳兔",
    "nameEn": "Lopunny",
    "types": [
      "normal"
    ],
    "generation": 4,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/428.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/428.png"
  },
  {
    "id": 429,
    "name": "梦妖魔",
    "nameZh": "梦妖魔",
    "nameEn": "Mismagius",
    "types": [
      "ghost"
    ],
    "generation": 4,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/429.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/429.png"
  },
  {
    "id": 430,
    "name": "乌鸦头头",
    "nameZh": "乌鸦头头",
    "nameEn": "Honchkrow",
    "types": [
      "dark",
      "flying"
    ],
    "generation": 4,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/430.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/430.png"
  },
  {
    "id": 431,
    "name": "魅力喵",
    "nameZh": "魅力喵",
    "nameEn": "Glameow",
    "types": [
      "normal"
    ],
    "generation": 4,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/431.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/431.png"
  },
  {
    "id": 432,
    "name": "东施喵",
    "nameZh": "东施喵",
    "nameEn": "Purugly",
    "types": [
      "normal"
    ],
    "generation": 4,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/432.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/432.png"
  },
  {
    "id": 433,
    "name": "铃铛响",
    "nameZh": "铃铛响",
    "nameEn": "Chingling",
    "types": [
      "psychic"
    ],
    "generation": 4,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/433.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/433.png"
  },
  {
    "id": 434,
    "name": "臭鼬噗",
    "nameZh": "臭鼬噗",
    "nameEn": "Stunky",
    "types": [
      "poison",
      "dark"
    ],
    "generation": 4,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/434.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/434.png"
  },
  {
    "id": 435,
    "name": "坦克臭鼬",
    "nameZh": "坦克臭鼬",
    "nameEn": "Skuntank",
    "types": [
      "poison",
      "dark"
    ],
    "generation": 4,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/435.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/435.png"
  },
  {
    "id": 436,
    "name": "铜镜怪",
    "nameZh": "铜镜怪",
    "nameEn": "Bronzor",
    "types": [
      "steel",
      "psychic"
    ],
    "generation": 4,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/436.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/436.png"
  },
  {
    "id": 437,
    "name": "青铜钟",
    "nameZh": "青铜钟",
    "nameEn": "Bronzong",
    "types": [
      "steel",
      "psychic"
    ],
    "generation": 4,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/437.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/437.png"
  },
  {
    "id": 438,
    "name": "盆才怪",
    "nameZh": "盆才怪",
    "nameEn": "Bonsly",
    "types": [
      "rock"
    ],
    "generation": 4,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/438.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/438.png"
  },
  {
    "id": 439,
    "name": "魔尼尼",
    "nameZh": "魔尼尼",
    "nameEn": "Mime Jr.",
    "types": [
      "psychic",
      "fairy"
    ],
    "generation": 4,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/439.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/439.png"
  },
  {
    "id": 440,
    "name": "小福蛋",
    "nameZh": "小福蛋",
    "nameEn": "Happiny",
    "types": [
      "normal"
    ],
    "generation": 4,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/440.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/440.png"
  },
  {
    "id": 441,
    "name": "聒噪鸟",
    "nameZh": "聒噪鸟",
    "nameEn": "Chatot",
    "types": [
      "normal",
      "flying"
    ],
    "generation": 4,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/441.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/441.png"
  },
  {
    "id": 442,
    "name": "花岩怪",
    "nameZh": "花岩怪",
    "nameEn": "Spiritomb",
    "types": [
      "ghost",
      "dark"
    ],
    "generation": 4,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/442.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/442.png"
  },
  {
    "id": 443,
    "name": "圆陆鲨",
    "nameZh": "圆陆鲨",
    "nameEn": "Gible",
    "types": [
      "dragon",
      "ground"
    ],
    "generation": 4,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/443.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/443.png"
  },
  {
    "id": 444,
    "name": "尖牙陆鲨",
    "nameZh": "尖牙陆鲨",
    "nameEn": "Gabite",
    "types": [
      "dragon",
      "ground"
    ],
    "generation": 4,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/444.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/444.png"
  },
  {
    "id": 445,
    "name": "烈咬陆鲨",
    "nameZh": "烈咬陆鲨",
    "nameEn": "Garchomp",
    "types": [
      "dragon",
      "ground"
    ],
    "generation": 4,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/445.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/445.png"
  },
  {
    "id": 446,
    "name": "小卡比兽",
    "nameZh": "小卡比兽",
    "nameEn": "Munchlax",
    "types": [
      "normal"
    ],
    "generation": 4,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/446.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/446.png"
  },
  {
    "id": 447,
    "name": "利欧路",
    "nameZh": "利欧路",
    "nameEn": "Riolu",
    "types": [
      "fighting"
    ],
    "generation": 4,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/447.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/447.png"
  },
  {
    "id": 448,
    "name": "路卡利欧",
    "nameZh": "路卡利欧",
    "nameEn": "Lucario",
    "types": [
      "fighting",
      "steel"
    ],
    "generation": 4,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/448.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/448.png"
  },
  {
    "id": 449,
    "name": "沙河马",
    "nameZh": "沙河马",
    "nameEn": "Hippopotas",
    "types": [
      "ground"
    ],
    "generation": 4,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/449.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/449.png"
  },
  {
    "id": 450,
    "name": "河马兽",
    "nameZh": "河马兽",
    "nameEn": "Hippowdon",
    "types": [
      "ground"
    ],
    "generation": 4,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/450.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/450.png"
  },
  {
    "id": 451,
    "name": "钳尾蝎",
    "nameZh": "钳尾蝎",
    "nameEn": "Skorupi",
    "types": [
      "poison",
      "bug"
    ],
    "generation": 4,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/451.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/451.png"
  },
  {
    "id": 452,
    "name": "龙王蝎",
    "nameZh": "龙王蝎",
    "nameEn": "Drapion",
    "types": [
      "poison",
      "dark"
    ],
    "generation": 4,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/452.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/452.png"
  },
  {
    "id": 453,
    "name": "不良蛙",
    "nameZh": "不良蛙",
    "nameEn": "Croagunk",
    "types": [
      "poison",
      "fighting"
    ],
    "generation": 4,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/453.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/453.png"
  },
  {
    "id": 454,
    "name": "毒骷蛙",
    "nameZh": "毒骷蛙",
    "nameEn": "Toxicroak",
    "types": [
      "poison",
      "fighting"
    ],
    "generation": 4,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/454.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/454.png"
  },
  {
    "id": 455,
    "name": "尖牙笼",
    "nameZh": "尖牙笼",
    "nameEn": "Carnivine",
    "types": [
      "grass"
    ],
    "generation": 4,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/455.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/455.png"
  },
  {
    "id": 456,
    "name": "荧光鱼",
    "nameZh": "荧光鱼",
    "nameEn": "Finneon",
    "types": [
      "water"
    ],
    "generation": 4,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/456.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/456.png"
  },
  {
    "id": 457,
    "name": "霓虹鱼",
    "nameZh": "霓虹鱼",
    "nameEn": "Lumineon",
    "types": [
      "water"
    ],
    "generation": 4,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/457.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/457.png"
  },
  {
    "id": 458,
    "name": "小球飞鱼",
    "nameZh": "小球飞鱼",
    "nameEn": "Mantyke",
    "types": [
      "water",
      "flying"
    ],
    "generation": 4,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/458.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/458.png"
  },
  {
    "id": 459,
    "name": "雪笠怪",
    "nameZh": "雪笠怪",
    "nameEn": "Snover",
    "types": [
      "grass",
      "ice"
    ],
    "generation": 4,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/459.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/459.png"
  },
  {
    "id": 460,
    "name": "暴雪王",
    "nameZh": "暴雪王",
    "nameEn": "Abomasnow",
    "types": [
      "grass",
      "ice"
    ],
    "generation": 4,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/460.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/460.png"
  },
  {
    "id": 461,
    "name": "玛狃拉",
    "nameZh": "玛狃拉",
    "nameEn": "Weavile",
    "types": [
      "dark",
      "ice"
    ],
    "generation": 4,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/461.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/461.png"
  },
  {
    "id": 462,
    "name": "自爆磁怪",
    "nameZh": "自爆磁怪",
    "nameEn": "Magnezone",
    "types": [
      "electric",
      "steel"
    ],
    "generation": 4,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/462.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/462.png"
  },
  {
    "id": 463,
    "name": "大舌舔",
    "nameZh": "大舌舔",
    "nameEn": "Lickilicky",
    "types": [
      "normal"
    ],
    "generation": 4,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/463.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/463.png"
  },
  {
    "id": 464,
    "name": "超甲狂犀",
    "nameZh": "超甲狂犀",
    "nameEn": "Rhyperior",
    "types": [
      "ground",
      "rock"
    ],
    "generation": 4,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/464.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/464.png"
  },
  {
    "id": 465,
    "name": "巨蔓藤",
    "nameZh": "巨蔓藤",
    "nameEn": "Tangrowth",
    "types": [
      "grass"
    ],
    "generation": 4,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/465.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/465.png"
  },
  {
    "id": 466,
    "name": "电击魔兽",
    "nameZh": "电击魔兽",
    "nameEn": "Electivire",
    "types": [
      "electric"
    ],
    "generation": 4,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/466.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/466.png"
  },
  {
    "id": 467,
    "name": "鸭嘴炎兽",
    "nameZh": "鸭嘴炎兽",
    "nameEn": "Magmortar",
    "types": [
      "fire"
    ],
    "generation": 4,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/467.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/467.png"
  },
  {
    "id": 468,
    "name": "波克基斯",
    "nameZh": "波克基斯",
    "nameEn": "Togekiss",
    "types": [
      "fairy",
      "flying"
    ],
    "generation": 4,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/468.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/468.png"
  },
  {
    "id": 469,
    "name": "远古巨蜓",
    "nameZh": "远古巨蜓",
    "nameEn": "Yanmega",
    "types": [
      "bug",
      "flying"
    ],
    "generation": 4,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/469.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/469.png"
  },
  {
    "id": 470,
    "name": "叶伊布",
    "nameZh": "叶伊布",
    "nameEn": "Leafeon",
    "types": [
      "grass"
    ],
    "generation": 4,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/470.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/470.png"
  },
  {
    "id": 471,
    "name": "冰伊布",
    "nameZh": "冰伊布",
    "nameEn": "Glaceon",
    "types": [
      "ice"
    ],
    "generation": 4,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/471.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/471.png"
  },
  {
    "id": 472,
    "name": "天蝎王",
    "nameZh": "天蝎王",
    "nameEn": "Gliscor",
    "types": [
      "ground",
      "flying"
    ],
    "generation": 4,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/472.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/472.png"
  },
  {
    "id": 473,
    "name": "象牙猪",
    "nameZh": "象牙猪",
    "nameEn": "Mamoswine",
    "types": [
      "ice",
      "ground"
    ],
    "generation": 4,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/473.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/473.png"
  },
  {
    "id": 474,
    "name": "多边兽乙型",
    "nameZh": "多边兽乙型",
    "nameEn": "Porygon-Z",
    "types": [
      "normal"
    ],
    "generation": 4,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/474.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/474.png"
  },
  {
    "id": 475,
    "name": "艾路雷朵",
    "nameZh": "艾路雷朵",
    "nameEn": "Gallade",
    "types": [
      "psychic",
      "fighting"
    ],
    "generation": 4,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/475.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/475.png"
  },
  {
    "id": 476,
    "name": "大朝北鼻",
    "nameZh": "大朝北鼻",
    "nameEn": "Probopass",
    "types": [
      "rock",
      "steel"
    ],
    "generation": 4,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/476.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/476.png"
  },
  {
    "id": 477,
    "name": "黑夜魔灵",
    "nameZh": "黑夜魔灵",
    "nameEn": "Dusknoir",
    "types": [
      "ghost"
    ],
    "generation": 4,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/477.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/477.png"
  },
  {
    "id": 478,
    "name": "雪妖女",
    "nameZh": "雪妖女",
    "nameEn": "Froslass",
    "types": [
      "ice",
      "ghost"
    ],
    "generation": 4,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/478.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/478.png"
  },
  {
    "id": 479,
    "name": "洛托姆",
    "nameZh": "洛托姆",
    "nameEn": "Rotom",
    "types": [
      "electric",
      "ghost"
    ],
    "generation": 4,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/479.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/479.png"
  },
  {
    "id": 480,
    "name": "由克希",
    "nameZh": "由克希",
    "nameEn": "Uxie",
    "types": [
      "psychic"
    ],
    "generation": 4,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/480.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/480.png"
  },
  {
    "id": 481,
    "name": "艾姆利多",
    "nameZh": "艾姆利多",
    "nameEn": "Mesprit",
    "types": [
      "psychic"
    ],
    "generation": 4,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/481.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/481.png"
  },
  {
    "id": 482,
    "name": "亚克诺姆",
    "nameZh": "亚克诺姆",
    "nameEn": "Azelf",
    "types": [
      "psychic"
    ],
    "generation": 4,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/482.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/482.png"
  },
  {
    "id": 483,
    "name": "帝牙卢卡",
    "nameZh": "帝牙卢卡",
    "nameEn": "Dialga",
    "types": [
      "steel",
      "dragon"
    ],
    "generation": 4,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/483.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/483.png"
  },
  {
    "id": 484,
    "name": "帕路奇亚",
    "nameZh": "帕路奇亚",
    "nameEn": "Palkia",
    "types": [
      "water",
      "dragon"
    ],
    "generation": 4,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/484.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/484.png"
  },
  {
    "id": 485,
    "name": "席多蓝恩",
    "nameZh": "席多蓝恩",
    "nameEn": "Heatran",
    "types": [
      "fire",
      "steel"
    ],
    "generation": 4,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/485.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/485.png"
  },
  {
    "id": 486,
    "name": "雷吉奇卡斯",
    "nameZh": "雷吉奇卡斯",
    "nameEn": "Regigigas",
    "types": [
      "normal"
    ],
    "generation": 4,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/486.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/486.png"
  },
  {
    "id": 487,
    "name": "骑拉帝纳",
    "nameZh": "骑拉帝纳",
    "nameEn": "Giratina",
    "types": [
      "ghost",
      "dragon"
    ],
    "generation": 4,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/487.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/487.png"
  },
  {
    "id": 488,
    "name": "克雷色利亚",
    "nameZh": "克雷色利亚",
    "nameEn": "Cresselia",
    "types": [
      "psychic"
    ],
    "generation": 4,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/488.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/488.png"
  },
  {
    "id": 489,
    "name": "霏欧纳",
    "nameZh": "霏欧纳",
    "nameEn": "Phione",
    "types": [
      "water"
    ],
    "generation": 4,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/489.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/489.png"
  },
  {
    "id": 490,
    "name": "玛纳霏",
    "nameZh": "玛纳霏",
    "nameEn": "Manaphy",
    "types": [
      "water"
    ],
    "generation": 4,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/490.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/490.png"
  },
  {
    "id": 491,
    "name": "达克莱伊",
    "nameZh": "达克莱伊",
    "nameEn": "Darkrai",
    "types": [
      "dark"
    ],
    "generation": 4,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/491.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/491.png"
  },
  {
    "id": 492,
    "name": "谢米",
    "nameZh": "谢米",
    "nameEn": "Shaymin",
    "types": [
      "grass"
    ],
    "generation": 4,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/492.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/492.png"
  },
  {
    "id": 493,
    "name": "阿尔宙斯",
    "nameZh": "阿尔宙斯",
    "nameEn": "Arceus",
    "types": [
      "normal"
    ],
    "generation": 4,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/493.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/493.png"
  },
  {
    "id": 494,
    "name": "比克提尼",
    "nameZh": "比克提尼",
    "nameEn": "Victini",
    "types": [
      "psychic",
      "fire"
    ],
    "generation": 5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/494.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/494.png"
  },
  {
    "id": 495,
    "name": "藤藤蛇",
    "nameZh": "藤藤蛇",
    "nameEn": "Snivy",
    "types": [
      "grass"
    ],
    "generation": 5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/495.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/495.png"
  },
  {
    "id": 496,
    "name": "青藤蛇",
    "nameZh": "青藤蛇",
    "nameEn": "Servine",
    "types": [
      "grass"
    ],
    "generation": 5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/496.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/496.png"
  },
  {
    "id": 497,
    "name": "君主蛇",
    "nameZh": "君主蛇",
    "nameEn": "Serperior",
    "types": [
      "grass"
    ],
    "generation": 5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/497.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/497.png"
  },
  {
    "id": 498,
    "name": "暖暖猪",
    "nameZh": "暖暖猪",
    "nameEn": "Tepig",
    "types": [
      "fire"
    ],
    "generation": 5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/498.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/498.png"
  },
  {
    "id": 499,
    "name": "炒炒猪",
    "nameZh": "炒炒猪",
    "nameEn": "Pignite",
    "types": [
      "fire",
      "fighting"
    ],
    "generation": 5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/499.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/499.png"
  },
  {
    "id": 500,
    "name": "炎武王",
    "nameZh": "炎武王",
    "nameEn": "Emboar",
    "types": [
      "fire",
      "fighting"
    ],
    "generation": 5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/500.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/500.png"
  },
  {
    "id": 501,
    "name": "水水獭",
    "nameZh": "水水獭",
    "nameEn": "Oshawott",
    "types": [
      "water"
    ],
    "generation": 5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/501.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/501.png"
  },
  {
    "id": 502,
    "name": "双刃丸",
    "nameZh": "双刃丸",
    "nameEn": "Dewott",
    "types": [
      "water"
    ],
    "generation": 5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/502.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/502.png"
  },
  {
    "id": 503,
    "name": "大剑鬼",
    "nameZh": "大剑鬼",
    "nameEn": "Samurott",
    "types": [
      "water"
    ],
    "generation": 5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/503.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/503.png"
  },
  {
    "id": 504,
    "name": "探探鼠",
    "nameZh": "探探鼠",
    "nameEn": "Patrat",
    "types": [
      "normal"
    ],
    "generation": 5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/504.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/504.png"
  },
  {
    "id": 505,
    "name": "步哨鼠",
    "nameZh": "步哨鼠",
    "nameEn": "Watchog",
    "types": [
      "normal"
    ],
    "generation": 5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/505.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/505.png"
  },
  {
    "id": 506,
    "name": "小约克",
    "nameZh": "小约克",
    "nameEn": "Lillipup",
    "types": [
      "normal"
    ],
    "generation": 5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/506.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/506.png"
  },
  {
    "id": 507,
    "name": "哈约克",
    "nameZh": "哈约克",
    "nameEn": "Herdier",
    "types": [
      "normal"
    ],
    "generation": 5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/507.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/507.png"
  },
  {
    "id": 508,
    "name": "长毛狗",
    "nameZh": "长毛狗",
    "nameEn": "Stoutland",
    "types": [
      "normal"
    ],
    "generation": 5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/508.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/508.png"
  },
  {
    "id": 509,
    "name": "扒手猫",
    "nameZh": "扒手猫",
    "nameEn": "Purrloin",
    "types": [
      "dark"
    ],
    "generation": 5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/509.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/509.png"
  },
  {
    "id": 510,
    "name": "酷豹",
    "nameZh": "酷豹",
    "nameEn": "Liepard",
    "types": [
      "dark"
    ],
    "generation": 5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/510.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/510.png"
  },
  {
    "id": 511,
    "name": "花椰猴",
    "nameZh": "花椰猴",
    "nameEn": "Pansage",
    "types": [
      "grass"
    ],
    "generation": 5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/511.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/511.png"
  },
  {
    "id": 512,
    "name": "花椰猿",
    "nameZh": "花椰猿",
    "nameEn": "Simisage",
    "types": [
      "grass"
    ],
    "generation": 5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/512.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/512.png"
  },
  {
    "id": 513,
    "name": "爆香猴",
    "nameZh": "爆香猴",
    "nameEn": "Pansear",
    "types": [
      "fire"
    ],
    "generation": 5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/513.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/513.png"
  },
  {
    "id": 514,
    "name": "爆香猿",
    "nameZh": "爆香猿",
    "nameEn": "Simisear",
    "types": [
      "fire"
    ],
    "generation": 5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/514.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/514.png"
  },
  {
    "id": 515,
    "name": "冷水猴",
    "nameZh": "冷水猴",
    "nameEn": "Panpour",
    "types": [
      "water"
    ],
    "generation": 5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/515.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/515.png"
  },
  {
    "id": 516,
    "name": "冷水猿",
    "nameZh": "冷水猿",
    "nameEn": "Simipour",
    "types": [
      "water"
    ],
    "generation": 5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/516.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/516.png"
  },
  {
    "id": 517,
    "name": "食梦梦",
    "nameZh": "食梦梦",
    "nameEn": "Munna",
    "types": [
      "psychic"
    ],
    "generation": 5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/517.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/517.png"
  },
  {
    "id": 518,
    "name": "梦梦蚀",
    "nameZh": "梦梦蚀",
    "nameEn": "Musharna",
    "types": [
      "psychic"
    ],
    "generation": 5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/518.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/518.png"
  },
  {
    "id": 519,
    "name": "豆豆鸽",
    "nameZh": "豆豆鸽",
    "nameEn": "Pidove",
    "types": [
      "normal",
      "flying"
    ],
    "generation": 5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/519.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/519.png"
  },
  {
    "id": 520,
    "name": "咕咕鸽",
    "nameZh": "咕咕鸽",
    "nameEn": "Tranquill",
    "types": [
      "normal",
      "flying"
    ],
    "generation": 5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/520.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/520.png"
  },
  {
    "id": 521,
    "name": "高傲雉鸡",
    "nameZh": "高傲雉鸡",
    "nameEn": "Unfezant",
    "types": [
      "normal",
      "flying"
    ],
    "generation": 5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/521.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/521.png"
  },
  {
    "id": 522,
    "name": "斑斑马",
    "nameZh": "斑斑马",
    "nameEn": "Blitzle",
    "types": [
      "electric"
    ],
    "generation": 5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/522.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/522.png"
  },
  {
    "id": 523,
    "name": "雷电斑马",
    "nameZh": "雷电斑马",
    "nameEn": "Zebstrika",
    "types": [
      "electric"
    ],
    "generation": 5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/523.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/523.png"
  },
  {
    "id": 524,
    "name": "石丸子",
    "nameZh": "石丸子",
    "nameEn": "Roggenrola",
    "types": [
      "rock"
    ],
    "generation": 5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/524.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/524.png"
  },
  {
    "id": 525,
    "name": "地幔岩",
    "nameZh": "地幔岩",
    "nameEn": "Boldore",
    "types": [
      "rock"
    ],
    "generation": 5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/525.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/525.png"
  },
  {
    "id": 526,
    "name": "庞岩怪",
    "nameZh": "庞岩怪",
    "nameEn": "Gigalith",
    "types": [
      "rock"
    ],
    "generation": 5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/526.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/526.png"
  },
  {
    "id": 527,
    "name": "滚滚蝙蝠",
    "nameZh": "滚滚蝙蝠",
    "nameEn": "Woobat",
    "types": [
      "psychic",
      "flying"
    ],
    "generation": 5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/527.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/527.png"
  },
  {
    "id": 528,
    "name": "心蝙蝠",
    "nameZh": "心蝙蝠",
    "nameEn": "Swoobat",
    "types": [
      "psychic",
      "flying"
    ],
    "generation": 5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/528.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/528.png"
  },
  {
    "id": 529,
    "name": "螺钉地鼠",
    "nameZh": "螺钉地鼠",
    "nameEn": "Drilbur",
    "types": [
      "ground"
    ],
    "generation": 5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/529.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/529.png"
  },
  {
    "id": 530,
    "name": "龙头地鼠",
    "nameZh": "龙头地鼠",
    "nameEn": "Excadrill",
    "types": [
      "ground",
      "steel"
    ],
    "generation": 5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/530.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/530.png"
  },
  {
    "id": 531,
    "name": "差不多娃娃",
    "nameZh": "差不多娃娃",
    "nameEn": "Audino",
    "types": [
      "normal"
    ],
    "generation": 5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/531.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/531.png"
  },
  {
    "id": 532,
    "name": "搬运小匠",
    "nameZh": "搬运小匠",
    "nameEn": "Timburr",
    "types": [
      "fighting"
    ],
    "generation": 5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/532.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/532.png"
  },
  {
    "id": 533,
    "name": "铁骨土人",
    "nameZh": "铁骨土人",
    "nameEn": "Gurdurr",
    "types": [
      "fighting"
    ],
    "generation": 5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/533.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/533.png"
  },
  {
    "id": 534,
    "name": "修建老匠",
    "nameZh": "修建老匠",
    "nameEn": "Conkeldurr",
    "types": [
      "fighting"
    ],
    "generation": 5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/534.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/534.png"
  },
  {
    "id": 535,
    "name": "圆蝌蚪",
    "nameZh": "圆蝌蚪",
    "nameEn": "Tympole",
    "types": [
      "water"
    ],
    "generation": 5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/535.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/535.png"
  },
  {
    "id": 536,
    "name": "蓝蟾蜍",
    "nameZh": "蓝蟾蜍",
    "nameEn": "Palpitoad",
    "types": [
      "water",
      "ground"
    ],
    "generation": 5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/536.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/536.png"
  },
  {
    "id": 537,
    "name": "蟾蜍王",
    "nameZh": "蟾蜍王",
    "nameEn": "Seismitoad",
    "types": [
      "water",
      "ground"
    ],
    "generation": 5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/537.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/537.png"
  },
  {
    "id": 538,
    "name": "投摔鬼",
    "nameZh": "投摔鬼",
    "nameEn": "Throh",
    "types": [
      "fighting"
    ],
    "generation": 5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/538.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/538.png"
  },
  {
    "id": 539,
    "name": "打击鬼",
    "nameZh": "打击鬼",
    "nameEn": "Sawk",
    "types": [
      "fighting"
    ],
    "generation": 5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/539.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/539.png"
  },
  {
    "id": 540,
    "name": "虫宝包",
    "nameZh": "虫宝包",
    "nameEn": "Sewaddle",
    "types": [
      "bug",
      "grass"
    ],
    "generation": 5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/540.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/540.png"
  },
  {
    "id": 541,
    "name": "宝包茧",
    "nameZh": "宝包茧",
    "nameEn": "Swadloon",
    "types": [
      "bug",
      "grass"
    ],
    "generation": 5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/541.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/541.png"
  },
  {
    "id": 542,
    "name": "保姆虫",
    "nameZh": "保姆虫",
    "nameEn": "Leavanny",
    "types": [
      "bug",
      "grass"
    ],
    "generation": 5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/542.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/542.png"
  },
  {
    "id": 543,
    "name": "百足蜈蚣",
    "nameZh": "百足蜈蚣",
    "nameEn": "Venipede",
    "types": [
      "bug",
      "poison"
    ],
    "generation": 5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/543.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/543.png"
  },
  {
    "id": 544,
    "name": "车轮球",
    "nameZh": "车轮球",
    "nameEn": "Whirlipede",
    "types": [
      "bug",
      "poison"
    ],
    "generation": 5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/544.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/544.png"
  },
  {
    "id": 545,
    "name": "蜈蚣王",
    "nameZh": "蜈蚣王",
    "nameEn": "Scolipede",
    "types": [
      "bug",
      "poison"
    ],
    "generation": 5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/545.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/545.png"
  },
  {
    "id": 546,
    "name": "木棉球",
    "nameZh": "木棉球",
    "nameEn": "Cottonee",
    "types": [
      "grass",
      "fairy"
    ],
    "generation": 5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/546.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/546.png"
  },
  {
    "id": 547,
    "name": "风妖精",
    "nameZh": "风妖精",
    "nameEn": "Whimsicott",
    "types": [
      "grass",
      "fairy"
    ],
    "generation": 5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/547.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/547.png"
  },
  {
    "id": 548,
    "name": "百合根娃娃",
    "nameZh": "百合根娃娃",
    "nameEn": "Petilil",
    "types": [
      "grass"
    ],
    "generation": 5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/548.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/548.png"
  },
  {
    "id": 549,
    "name": "裙儿小姐",
    "nameZh": "裙儿小姐",
    "nameEn": "Lilligant",
    "types": [
      "grass"
    ],
    "generation": 5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/549.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/549.png"
  },
  {
    "id": 550,
    "name": "野蛮鲈鱼",
    "nameZh": "野蛮鲈鱼",
    "nameEn": "Basculin",
    "types": [
      "water"
    ],
    "generation": 5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/550.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/550.png"
  },
  {
    "id": 551,
    "name": "黑眼鳄",
    "nameZh": "黑眼鳄",
    "nameEn": "Sandile",
    "types": [
      "ground",
      "dark"
    ],
    "generation": 5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/551.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/551.png"
  },
  {
    "id": 552,
    "name": "混混鳄",
    "nameZh": "混混鳄",
    "nameEn": "Krokorok",
    "types": [
      "ground",
      "dark"
    ],
    "generation": 5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/552.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/552.png"
  },
  {
    "id": 553,
    "name": "流氓鳄",
    "nameZh": "流氓鳄",
    "nameEn": "Krookodile",
    "types": [
      "ground",
      "dark"
    ],
    "generation": 5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/553.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/553.png"
  },
  {
    "id": 554,
    "name": "火红不倒翁",
    "nameZh": "火红不倒翁",
    "nameEn": "Darumaka",
    "types": [
      "fire"
    ],
    "generation": 5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/554.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/554.png"
  },
  {
    "id": 555,
    "name": "达摩狒狒",
    "nameZh": "达摩狒狒",
    "nameEn": "Darmanitan",
    "types": [
      "fire"
    ],
    "generation": 5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/555.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/555.png"
  },
  {
    "id": 556,
    "name": "沙铃仙人掌",
    "nameZh": "沙铃仙人掌",
    "nameEn": "Maractus",
    "types": [
      "grass"
    ],
    "generation": 5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/556.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/556.png"
  },
  {
    "id": 557,
    "name": "石居蟹",
    "nameZh": "石居蟹",
    "nameEn": "Dwebble",
    "types": [
      "bug",
      "rock"
    ],
    "generation": 5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/557.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/557.png"
  },
  {
    "id": 558,
    "name": "岩殿居蟹",
    "nameZh": "岩殿居蟹",
    "nameEn": "Crustle",
    "types": [
      "bug",
      "rock"
    ],
    "generation": 5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/558.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/558.png"
  },
  {
    "id": 559,
    "name": "滑滑小子",
    "nameZh": "滑滑小子",
    "nameEn": "Scraggy",
    "types": [
      "dark",
      "fighting"
    ],
    "generation": 5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/559.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/559.png"
  },
  {
    "id": 560,
    "name": "头巾混混",
    "nameZh": "头巾混混",
    "nameEn": "Scrafty",
    "types": [
      "dark",
      "fighting"
    ],
    "generation": 5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/560.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/560.png"
  },
  {
    "id": 561,
    "name": "象征鸟",
    "nameZh": "象征鸟",
    "nameEn": "Sigilyph",
    "types": [
      "psychic",
      "flying"
    ],
    "generation": 5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/561.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/561.png"
  },
  {
    "id": 562,
    "name": "哭哭面具",
    "nameZh": "哭哭面具",
    "nameEn": "Yamask",
    "types": [
      "ghost"
    ],
    "generation": 5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/562.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/562.png"
  },
  {
    "id": 563,
    "name": "迭失棺",
    "nameZh": "迭失棺",
    "nameEn": "Cofagrigus",
    "types": [
      "ghost"
    ],
    "generation": 5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/563.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/563.png"
  },
  {
    "id": 564,
    "name": "原盖海龟",
    "nameZh": "原盖海龟",
    "nameEn": "Tirtouga",
    "types": [
      "water",
      "rock"
    ],
    "generation": 5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/564.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/564.png"
  },
  {
    "id": 565,
    "name": "肋骨海龟",
    "nameZh": "肋骨海龟",
    "nameEn": "Carracosta",
    "types": [
      "water",
      "rock"
    ],
    "generation": 5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/565.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/565.png"
  },
  {
    "id": 566,
    "name": "始祖小鸟",
    "nameZh": "始祖小鸟",
    "nameEn": "Archen",
    "types": [
      "rock",
      "flying"
    ],
    "generation": 5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/566.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/566.png"
  },
  {
    "id": 567,
    "name": "始祖大鸟",
    "nameZh": "始祖大鸟",
    "nameEn": "Archeops",
    "types": [
      "rock",
      "flying"
    ],
    "generation": 5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/567.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/567.png"
  },
  {
    "id": 568,
    "name": "破破袋",
    "nameZh": "破破袋",
    "nameEn": "Trubbish",
    "types": [
      "poison"
    ],
    "generation": 5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/568.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/568.png"
  },
  {
    "id": 569,
    "name": "灰尘山",
    "nameZh": "灰尘山",
    "nameEn": "Garbodor",
    "types": [
      "poison"
    ],
    "generation": 5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/569.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/569.png"
  },
  {
    "id": 570,
    "name": "索罗亚",
    "nameZh": "索罗亚",
    "nameEn": "Zorua",
    "types": [
      "dark"
    ],
    "generation": 5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/570.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/570.png"
  },
  {
    "id": 571,
    "name": "索罗亚克",
    "nameZh": "索罗亚克",
    "nameEn": "Zoroark",
    "types": [
      "dark"
    ],
    "generation": 5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/571.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/571.png"
  },
  {
    "id": 572,
    "name": "泡沫栗鼠",
    "nameZh": "泡沫栗鼠",
    "nameEn": "Minccino",
    "types": [
      "normal"
    ],
    "generation": 5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/572.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/572.png"
  },
  {
    "id": 573,
    "name": "奇诺栗鼠",
    "nameZh": "奇诺栗鼠",
    "nameEn": "Cinccino",
    "types": [
      "normal"
    ],
    "generation": 5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/573.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/573.png"
  },
  {
    "id": 574,
    "name": "哥德宝宝",
    "nameZh": "哥德宝宝",
    "nameEn": "Gothita",
    "types": [
      "psychic"
    ],
    "generation": 5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/574.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/574.png"
  },
  {
    "id": 575,
    "name": "哥德小童",
    "nameZh": "哥德小童",
    "nameEn": "Gothorita",
    "types": [
      "psychic"
    ],
    "generation": 5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/575.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/575.png"
  },
  {
    "id": 576,
    "name": "哥德小姐",
    "nameZh": "哥德小姐",
    "nameEn": "Gothitelle",
    "types": [
      "psychic"
    ],
    "generation": 5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/576.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/576.png"
  },
  {
    "id": 577,
    "name": "单卵细胞球",
    "nameZh": "单卵细胞球",
    "nameEn": "Solosis",
    "types": [
      "psychic"
    ],
    "generation": 5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/577.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/577.png"
  },
  {
    "id": 578,
    "name": "双卵细胞球",
    "nameZh": "双卵细胞球",
    "nameEn": "Duosion",
    "types": [
      "psychic"
    ],
    "generation": 5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/578.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/578.png"
  },
  {
    "id": 579,
    "name": "人造细胞卵",
    "nameZh": "人造细胞卵",
    "nameEn": "Reuniclus",
    "types": [
      "psychic"
    ],
    "generation": 5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/579.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/579.png"
  },
  {
    "id": 580,
    "name": "鸭宝宝",
    "nameZh": "鸭宝宝",
    "nameEn": "Ducklett",
    "types": [
      "water",
      "flying"
    ],
    "generation": 5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/580.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/580.png"
  },
  {
    "id": 581,
    "name": "舞天鹅",
    "nameZh": "舞天鹅",
    "nameEn": "Swanna",
    "types": [
      "water",
      "flying"
    ],
    "generation": 5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/581.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/581.png"
  },
  {
    "id": 582,
    "name": "迷你冰",
    "nameZh": "迷你冰",
    "nameEn": "Vanillite",
    "types": [
      "ice"
    ],
    "generation": 5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/582.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/582.png"
  },
  {
    "id": 583,
    "name": "多多冰",
    "nameZh": "多多冰",
    "nameEn": "Vanillish",
    "types": [
      "ice"
    ],
    "generation": 5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/583.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/583.png"
  },
  {
    "id": 584,
    "name": "双倍多多冰",
    "nameZh": "双倍多多冰",
    "nameEn": "Vanilluxe",
    "types": [
      "ice"
    ],
    "generation": 5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/584.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/584.png"
  },
  {
    "id": 585,
    "name": "四季鹿",
    "nameZh": "四季鹿",
    "nameEn": "Deerling",
    "types": [
      "normal",
      "grass"
    ],
    "generation": 5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/585.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/585.png"
  },
  {
    "id": 586,
    "name": "萌芽鹿",
    "nameZh": "萌芽鹿",
    "nameEn": "Sawsbuck",
    "types": [
      "normal",
      "grass"
    ],
    "generation": 5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/586.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/586.png"
  },
  {
    "id": 587,
    "name": "电飞鼠",
    "nameZh": "电飞鼠",
    "nameEn": "Emolga",
    "types": [
      "electric",
      "flying"
    ],
    "generation": 5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/587.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/587.png"
  },
  {
    "id": 588,
    "name": "盖盖虫",
    "nameZh": "盖盖虫",
    "nameEn": "Karrablast",
    "types": [
      "bug"
    ],
    "generation": 5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/588.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/588.png"
  },
  {
    "id": 589,
    "name": "骑士蜗牛",
    "nameZh": "骑士蜗牛",
    "nameEn": "Escavalier",
    "types": [
      "bug",
      "steel"
    ],
    "generation": 5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/589.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/589.png"
  },
  {
    "id": 590,
    "name": "哎呀球菇",
    "nameZh": "哎呀球菇",
    "nameEn": "Foongus",
    "types": [
      "grass",
      "poison"
    ],
    "generation": 5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/590.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/590.png"
  },
  {
    "id": 591,
    "name": "败露球菇",
    "nameZh": "败露球菇",
    "nameEn": "Amoonguss",
    "types": [
      "grass",
      "poison"
    ],
    "generation": 5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/591.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/591.png"
  },
  {
    "id": 592,
    "name": "轻飘飘",
    "nameZh": "轻飘飘",
    "nameEn": "Frillish",
    "types": [
      "water",
      "ghost"
    ],
    "generation": 5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/592.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/592.png"
  },
  {
    "id": 593,
    "name": "胖嘟嘟",
    "nameZh": "胖嘟嘟",
    "nameEn": "Jellicent",
    "types": [
      "water",
      "ghost"
    ],
    "generation": 5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/593.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/593.png"
  },
  {
    "id": 594,
    "name": "保姆曼波",
    "nameZh": "保姆曼波",
    "nameEn": "Alomomola",
    "types": [
      "water"
    ],
    "generation": 5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/594.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/594.png"
  },
  {
    "id": 595,
    "name": "电电虫",
    "nameZh": "电电虫",
    "nameEn": "Joltik",
    "types": [
      "bug",
      "electric"
    ],
    "generation": 5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/595.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/595.png"
  },
  {
    "id": 596,
    "name": "电蜘蛛",
    "nameZh": "电蜘蛛",
    "nameEn": "Galvantula",
    "types": [
      "bug",
      "electric"
    ],
    "generation": 5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/596.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/596.png"
  },
  {
    "id": 597,
    "name": "种子铁球",
    "nameZh": "种子铁球",
    "nameEn": "Ferroseed",
    "types": [
      "grass",
      "steel"
    ],
    "generation": 5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/597.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/597.png"
  },
  {
    "id": 598,
    "name": "坚果哑铃",
    "nameZh": "坚果哑铃",
    "nameEn": "Ferrothorn",
    "types": [
      "grass",
      "steel"
    ],
    "generation": 5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/598.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/598.png"
  },
  {
    "id": 599,
    "name": "齿轮儿",
    "nameZh": "齿轮儿",
    "nameEn": "Klink",
    "types": [
      "steel"
    ],
    "generation": 5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/599.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/599.png"
  },
  {
    "id": 600,
    "name": "齿轮组",
    "nameZh": "齿轮组",
    "nameEn": "Klang",
    "types": [
      "steel"
    ],
    "generation": 5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/600.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/600.png"
  },
  {
    "id": 601,
    "name": "齿轮怪",
    "nameZh": "齿轮怪",
    "nameEn": "Klinklang",
    "types": [
      "steel"
    ],
    "generation": 5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/601.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/601.png"
  },
  {
    "id": 602,
    "name": "麻麻小鱼",
    "nameZh": "麻麻小鱼",
    "nameEn": "Tynamo",
    "types": [
      "electric"
    ],
    "generation": 5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/602.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/602.png"
  },
  {
    "id": 603,
    "name": "麻麻鳗",
    "nameZh": "麻麻鳗",
    "nameEn": "Eelektrik",
    "types": [
      "electric"
    ],
    "generation": 5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/603.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/603.png"
  },
  {
    "id": 604,
    "name": "麻麻鳗鱼王",
    "nameZh": "麻麻鳗鱼王",
    "nameEn": "Eelektross",
    "types": [
      "electric"
    ],
    "generation": 5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/604.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/604.png"
  },
  {
    "id": 605,
    "name": "小灰怪",
    "nameZh": "小灰怪",
    "nameEn": "Elgyem",
    "types": [
      "psychic"
    ],
    "generation": 5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/605.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/605.png"
  },
  {
    "id": 606,
    "name": "大宇怪",
    "nameZh": "大宇怪",
    "nameEn": "Beheeyem",
    "types": [
      "psychic"
    ],
    "generation": 5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/606.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/606.png"
  },
  {
    "id": 607,
    "name": "烛光灵",
    "nameZh": "烛光灵",
    "nameEn": "Litwick",
    "types": [
      "ghost",
      "fire"
    ],
    "generation": 5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/607.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/607.png"
  },
  {
    "id": 608,
    "name": "灯火幽灵",
    "nameZh": "灯火幽灵",
    "nameEn": "Lampent",
    "types": [
      "ghost",
      "fire"
    ],
    "generation": 5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/608.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/608.png"
  },
  {
    "id": 609,
    "name": "水晶灯火灵",
    "nameZh": "水晶灯火灵",
    "nameEn": "Chandelure",
    "types": [
      "ghost",
      "fire"
    ],
    "generation": 5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/609.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/609.png"
  },
  {
    "id": 610,
    "name": "牙牙",
    "nameZh": "牙牙",
    "nameEn": "Axew",
    "types": [
      "dragon"
    ],
    "generation": 5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/610.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/610.png"
  },
  {
    "id": 611,
    "name": "斧牙龙",
    "nameZh": "斧牙龙",
    "nameEn": "Fraxure",
    "types": [
      "dragon"
    ],
    "generation": 5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/611.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/611.png"
  },
  {
    "id": 612,
    "name": "双斧战龙",
    "nameZh": "双斧战龙",
    "nameEn": "Haxorus",
    "types": [
      "dragon"
    ],
    "generation": 5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/612.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/612.png"
  },
  {
    "id": 613,
    "name": "喷嚏熊",
    "nameZh": "喷嚏熊",
    "nameEn": "Cubchoo",
    "types": [
      "ice"
    ],
    "generation": 5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/613.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/613.png"
  },
  {
    "id": 614,
    "name": "冻原熊",
    "nameZh": "冻原熊",
    "nameEn": "Beartic",
    "types": [
      "ice"
    ],
    "generation": 5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/614.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/614.png"
  },
  {
    "id": 615,
    "name": "几何雪花",
    "nameZh": "几何雪花",
    "nameEn": "Cryogonal",
    "types": [
      "ice"
    ],
    "generation": 5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/615.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/615.png"
  },
  {
    "id": 616,
    "name": "小嘴蜗",
    "nameZh": "小嘴蜗",
    "nameEn": "Shelmet",
    "types": [
      "bug"
    ],
    "generation": 5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/616.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/616.png"
  },
  {
    "id": 617,
    "name": "敏捷虫",
    "nameZh": "敏捷虫",
    "nameEn": "Accelgor",
    "types": [
      "bug"
    ],
    "generation": 5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/617.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/617.png"
  },
  {
    "id": 618,
    "name": "泥巴鱼",
    "nameZh": "泥巴鱼",
    "nameEn": "Stunfisk",
    "types": [
      "ground",
      "electric"
    ],
    "generation": 5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/618.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/618.png"
  },
  {
    "id": 619,
    "name": "功夫鼬",
    "nameZh": "功夫鼬",
    "nameEn": "Mienfoo",
    "types": [
      "fighting"
    ],
    "generation": 5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/619.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/619.png"
  },
  {
    "id": 620,
    "name": "师父鼬",
    "nameZh": "师父鼬",
    "nameEn": "Mienshao",
    "types": [
      "fighting"
    ],
    "generation": 5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/620.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/620.png"
  },
  {
    "id": 621,
    "name": "赤面龙",
    "nameZh": "赤面龙",
    "nameEn": "Druddigon",
    "types": [
      "dragon"
    ],
    "generation": 5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/621.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/621.png"
  },
  {
    "id": 622,
    "name": "泥偶小人",
    "nameZh": "泥偶小人",
    "nameEn": "Golett",
    "types": [
      "ground",
      "ghost"
    ],
    "generation": 5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/622.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/622.png"
  },
  {
    "id": 623,
    "name": "泥偶巨人",
    "nameZh": "泥偶巨人",
    "nameEn": "Golurk",
    "types": [
      "ground",
      "ghost"
    ],
    "generation": 5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/623.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/623.png"
  },
  {
    "id": 624,
    "name": "驹刀小兵",
    "nameZh": "驹刀小兵",
    "nameEn": "Pawniard",
    "types": [
      "dark",
      "steel"
    ],
    "generation": 5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/624.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/624.png"
  },
  {
    "id": 625,
    "name": "劈斩司令",
    "nameZh": "劈斩司令",
    "nameEn": "Bisharp",
    "types": [
      "dark",
      "steel"
    ],
    "generation": 5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/625.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/625.png"
  },
  {
    "id": 626,
    "name": "爆炸头水牛",
    "nameZh": "爆炸头水牛",
    "nameEn": "Bouffalant",
    "types": [
      "normal"
    ],
    "generation": 5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/626.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/626.png"
  },
  {
    "id": 627,
    "name": "毛头小鹰",
    "nameZh": "毛头小鹰",
    "nameEn": "Rufflet",
    "types": [
      "normal",
      "flying"
    ],
    "generation": 5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/627.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/627.png"
  },
  {
    "id": 628,
    "name": "勇士雄鹰",
    "nameZh": "勇士雄鹰",
    "nameEn": "Braviary",
    "types": [
      "normal",
      "flying"
    ],
    "generation": 5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/628.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/628.png"
  },
  {
    "id": 629,
    "name": "秃鹰丫头",
    "nameZh": "秃鹰丫头",
    "nameEn": "Vullaby",
    "types": [
      "dark",
      "flying"
    ],
    "generation": 5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/629.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/629.png"
  },
  {
    "id": 630,
    "name": "秃鹰娜",
    "nameZh": "秃鹰娜",
    "nameEn": "Mandibuzz",
    "types": [
      "dark",
      "flying"
    ],
    "generation": 5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/630.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/630.png"
  },
  {
    "id": 631,
    "name": "熔蚁兽",
    "nameZh": "熔蚁兽",
    "nameEn": "Heatmor",
    "types": [
      "fire"
    ],
    "generation": 5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/631.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/631.png"
  },
  {
    "id": 632,
    "name": "铁蚁",
    "nameZh": "铁蚁",
    "nameEn": "Durant",
    "types": [
      "bug",
      "steel"
    ],
    "generation": 5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/632.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/632.png"
  },
  {
    "id": 633,
    "name": "单首龙",
    "nameZh": "单首龙",
    "nameEn": "Deino",
    "types": [
      "dark",
      "dragon"
    ],
    "generation": 5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/633.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/633.png"
  },
  {
    "id": 634,
    "name": "双首暴龙",
    "nameZh": "双首暴龙",
    "nameEn": "Zweilous",
    "types": [
      "dark",
      "dragon"
    ],
    "generation": 5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/634.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/634.png"
  },
  {
    "id": 635,
    "name": "三首恶龙",
    "nameZh": "三首恶龙",
    "nameEn": "Hydreigon",
    "types": [
      "dark",
      "dragon"
    ],
    "generation": 5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/635.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/635.png"
  },
  {
    "id": 636,
    "name": "燃烧虫",
    "nameZh": "燃烧虫",
    "nameEn": "Larvesta",
    "types": [
      "bug",
      "fire"
    ],
    "generation": 5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/636.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/636.png"
  },
  {
    "id": 637,
    "name": "火神蛾",
    "nameZh": "火神蛾",
    "nameEn": "Volcarona",
    "types": [
      "bug",
      "fire"
    ],
    "generation": 5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/637.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/637.png"
  },
  {
    "id": 638,
    "name": "勾帕路翁",
    "nameZh": "勾帕路翁",
    "nameEn": "Cobalion",
    "types": [
      "steel",
      "fighting"
    ],
    "generation": 5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/638.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/638.png"
  },
  {
    "id": 639,
    "name": "代拉基翁",
    "nameZh": "代拉基翁",
    "nameEn": "Terrakion",
    "types": [
      "rock",
      "fighting"
    ],
    "generation": 5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/639.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/639.png"
  },
  {
    "id": 640,
    "name": "毕力吉翁",
    "nameZh": "毕力吉翁",
    "nameEn": "Virizion",
    "types": [
      "grass",
      "fighting"
    ],
    "generation": 5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/640.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/640.png"
  },
  {
    "id": 641,
    "name": "龙卷云",
    "nameZh": "龙卷云",
    "nameEn": "Tornadus",
    "types": [
      "flying"
    ],
    "generation": 5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/641.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/641.png"
  },
  {
    "id": 642,
    "name": "雷电云",
    "nameZh": "雷电云",
    "nameEn": "Thundurus",
    "types": [
      "electric",
      "flying"
    ],
    "generation": 5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/642.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/642.png"
  },
  {
    "id": 643,
    "name": "莱希拉姆",
    "nameZh": "莱希拉姆",
    "nameEn": "Reshiram",
    "types": [
      "dragon",
      "fire"
    ],
    "generation": 5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/643.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/643.png"
  },
  {
    "id": 644,
    "name": "捷克罗姆",
    "nameZh": "捷克罗姆",
    "nameEn": "Zekrom",
    "types": [
      "dragon",
      "electric"
    ],
    "generation": 5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/644.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/644.png"
  },
  {
    "id": 645,
    "name": "土地云",
    "nameZh": "土地云",
    "nameEn": "Landorus",
    "types": [
      "ground",
      "flying"
    ],
    "generation": 5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/645.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/645.png"
  },
  {
    "id": 646,
    "name": "酋雷姆",
    "nameZh": "酋雷姆",
    "nameEn": "Kyurem",
    "types": [
      "dragon",
      "ice"
    ],
    "generation": 5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/646.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/646.png"
  },
  {
    "id": 647,
    "name": "凯路迪欧",
    "nameZh": "凯路迪欧",
    "nameEn": "Keldeo",
    "types": [
      "water",
      "fighting"
    ],
    "generation": 5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/647.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/647.png"
  },
  {
    "id": 648,
    "name": "美洛耶塔",
    "nameZh": "美洛耶塔",
    "nameEn": "Meloetta",
    "types": [
      "normal",
      "psychic"
    ],
    "generation": 5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/648.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/648.png"
  },
  {
    "id": 649,
    "name": "盖诺赛克特",
    "nameZh": "盖诺赛克特",
    "nameEn": "Genesect",
    "types": [
      "bug",
      "steel"
    ],
    "generation": 5,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/649.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/649.png"
  },
  {
    "id": 650,
    "name": "哈力栗",
    "nameZh": "哈力栗",
    "nameEn": "Chespin",
    "types": [
      "grass"
    ],
    "generation": 6,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/650.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/650.png"
  },
  {
    "id": 651,
    "name": "胖胖哈力",
    "nameZh": "胖胖哈力",
    "nameEn": "Quilladin",
    "types": [
      "grass"
    ],
    "generation": 6,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/651.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/651.png"
  },
  {
    "id": 652,
    "name": "布里卡隆",
    "nameZh": "布里卡隆",
    "nameEn": "Chesnaught",
    "types": [
      "grass",
      "fighting"
    ],
    "generation": 6,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/652.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/652.png"
  },
  {
    "id": 653,
    "name": "火狐狸",
    "nameZh": "火狐狸",
    "nameEn": "Fennekin",
    "types": [
      "fire"
    ],
    "generation": 6,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/653.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/653.png"
  },
  {
    "id": 654,
    "name": "长尾火狐",
    "nameZh": "长尾火狐",
    "nameEn": "Braixen",
    "types": [
      "fire"
    ],
    "generation": 6,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/654.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/654.png"
  },
  {
    "id": 655,
    "name": "妖火红狐",
    "nameZh": "妖火红狐",
    "nameEn": "Delphox",
    "types": [
      "fire",
      "psychic"
    ],
    "generation": 6,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/655.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/655.png"
  },
  {
    "id": 656,
    "name": "呱呱泡蛙",
    "nameZh": "呱呱泡蛙",
    "nameEn": "Froakie",
    "types": [
      "water"
    ],
    "generation": 6,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/656.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/656.png"
  },
  {
    "id": 657,
    "name": "呱头蛙",
    "nameZh": "呱头蛙",
    "nameEn": "Frogadier",
    "types": [
      "water"
    ],
    "generation": 6,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/657.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/657.png"
  },
  {
    "id": 658,
    "name": "甲贺忍蛙",
    "nameZh": "甲贺忍蛙",
    "nameEn": "Greninja",
    "types": [
      "water",
      "dark"
    ],
    "generation": 6,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/658.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/658.png"
  },
  {
    "id": 659,
    "name": "掘掘兔",
    "nameZh": "掘掘兔",
    "nameEn": "Bunnelby",
    "types": [
      "normal"
    ],
    "generation": 6,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/659.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/659.png"
  },
  {
    "id": 660,
    "name": "掘地兔",
    "nameZh": "掘地兔",
    "nameEn": "Diggersby",
    "types": [
      "normal",
      "ground"
    ],
    "generation": 6,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/660.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/660.png"
  },
  {
    "id": 661,
    "name": "小箭雀",
    "nameZh": "小箭雀",
    "nameEn": "Fletchling",
    "types": [
      "normal",
      "flying"
    ],
    "generation": 6,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/661.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/661.png"
  },
  {
    "id": 662,
    "name": "火箭雀",
    "nameZh": "火箭雀",
    "nameEn": "Fletchinder",
    "types": [
      "fire",
      "flying"
    ],
    "generation": 6,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/662.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/662.png"
  },
  {
    "id": 663,
    "name": "烈箭鹰",
    "nameZh": "烈箭鹰",
    "nameEn": "Talonflame",
    "types": [
      "fire",
      "flying"
    ],
    "generation": 6,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/663.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/663.png"
  },
  {
    "id": 664,
    "name": "粉蝶虫",
    "nameZh": "粉蝶虫",
    "nameEn": "Scatterbug",
    "types": [
      "bug"
    ],
    "generation": 6,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/664.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/664.png"
  },
  {
    "id": 665,
    "name": "粉蝶蛹",
    "nameZh": "粉蝶蛹",
    "nameEn": "Spewpa",
    "types": [
      "bug"
    ],
    "generation": 6,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/665.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/665.png"
  },
  {
    "id": 666,
    "name": "彩粉蝶",
    "nameZh": "彩粉蝶",
    "nameEn": "Vivillon",
    "types": [
      "bug",
      "flying"
    ],
    "generation": 6,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/666.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/666.png"
  },
  {
    "id": 667,
    "name": "小狮狮",
    "nameZh": "小狮狮",
    "nameEn": "Litleo",
    "types": [
      "fire",
      "normal"
    ],
    "generation": 6,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/667.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/667.png"
  },
  {
    "id": 668,
    "name": "火炎狮",
    "nameZh": "火炎狮",
    "nameEn": "Pyroar",
    "types": [
      "fire",
      "normal"
    ],
    "generation": 6,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/668.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/668.png"
  },
  {
    "id": 669,
    "name": "花蓓蓓",
    "nameZh": "花蓓蓓",
    "nameEn": "Flabébé",
    "types": [
      "fairy"
    ],
    "generation": 6,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/669.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/669.png"
  },
  {
    "id": 670,
    "name": "花叶蒂",
    "nameZh": "花叶蒂",
    "nameEn": "Floette",
    "types": [
      "fairy"
    ],
    "generation": 6,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/670.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/670.png"
  },
  {
    "id": 671,
    "name": "花洁夫人",
    "nameZh": "花洁夫人",
    "nameEn": "Florges",
    "types": [
      "fairy"
    ],
    "generation": 6,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/671.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/671.png"
  },
  {
    "id": 672,
    "name": "坐骑小羊",
    "nameZh": "坐骑小羊",
    "nameEn": "Skiddo",
    "types": [
      "grass"
    ],
    "generation": 6,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/672.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/672.png"
  },
  {
    "id": 673,
    "name": "坐骑山羊",
    "nameZh": "坐骑山羊",
    "nameEn": "Gogoat",
    "types": [
      "grass"
    ],
    "generation": 6,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/673.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/673.png"
  },
  {
    "id": 674,
    "name": "顽皮熊猫",
    "nameZh": "顽皮熊猫",
    "nameEn": "Pancham",
    "types": [
      "fighting"
    ],
    "generation": 6,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/674.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/674.png"
  },
  {
    "id": 675,
    "name": "霸道熊猫",
    "nameZh": "霸道熊猫",
    "nameEn": "Pangoro",
    "types": [
      "fighting",
      "dark"
    ],
    "generation": 6,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/675.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/675.png"
  },
  {
    "id": 676,
    "name": "多丽米亚",
    "nameZh": "多丽米亚",
    "nameEn": "Furfrou",
    "types": [
      "normal"
    ],
    "generation": 6,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/676.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/676.png"
  },
  {
    "id": 677,
    "name": "妙喵",
    "nameZh": "妙喵",
    "nameEn": "Espurr",
    "types": [
      "psychic"
    ],
    "generation": 6,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/677.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/677.png"
  },
  {
    "id": 678,
    "name": "超能妙喵",
    "nameZh": "超能妙喵",
    "nameEn": "Meowstic",
    "types": [
      "psychic"
    ],
    "generation": 6,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/678.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/678.png"
  },
  {
    "id": 679,
    "name": "独剑鞘",
    "nameZh": "独剑鞘",
    "nameEn": "Honedge",
    "types": [
      "steel",
      "ghost"
    ],
    "generation": 6,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/679.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/679.png"
  },
  {
    "id": 680,
    "name": "双剑鞘",
    "nameZh": "双剑鞘",
    "nameEn": "Doublade",
    "types": [
      "steel",
      "ghost"
    ],
    "generation": 6,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/680.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/680.png"
  },
  {
    "id": 681,
    "name": "坚盾剑怪",
    "nameZh": "坚盾剑怪",
    "nameEn": "Aegislash",
    "types": [
      "steel",
      "ghost"
    ],
    "generation": 6,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/681.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/681.png"
  },
  {
    "id": 682,
    "name": "粉香香",
    "nameZh": "粉香香",
    "nameEn": "Spritzee",
    "types": [
      "fairy"
    ],
    "generation": 6,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/682.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/682.png"
  },
  {
    "id": 683,
    "name": "芳香精",
    "nameZh": "芳香精",
    "nameEn": "Aromatisse",
    "types": [
      "fairy"
    ],
    "generation": 6,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/683.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/683.png"
  },
  {
    "id": 684,
    "name": "绵绵泡芙",
    "nameZh": "绵绵泡芙",
    "nameEn": "Swirlix",
    "types": [
      "fairy"
    ],
    "generation": 6,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/684.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/684.png"
  },
  {
    "id": 685,
    "name": "胖甜妮",
    "nameZh": "胖甜妮",
    "nameEn": "Slurpuff",
    "types": [
      "fairy"
    ],
    "generation": 6,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/685.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/685.png"
  },
  {
    "id": 686,
    "name": "好啦鱿",
    "nameZh": "好啦鱿",
    "nameEn": "Inkay",
    "types": [
      "dark",
      "psychic"
    ],
    "generation": 6,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/686.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/686.png"
  },
  {
    "id": 687,
    "name": "乌贼王",
    "nameZh": "乌贼王",
    "nameEn": "Malamar",
    "types": [
      "dark",
      "psychic"
    ],
    "generation": 6,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/687.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/687.png"
  },
  {
    "id": 688,
    "name": "龟脚脚",
    "nameZh": "龟脚脚",
    "nameEn": "Binacle",
    "types": [
      "rock",
      "water"
    ],
    "generation": 6,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/688.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/688.png"
  },
  {
    "id": 689,
    "name": "龟足巨铠",
    "nameZh": "龟足巨铠",
    "nameEn": "Barbaracle",
    "types": [
      "rock",
      "water"
    ],
    "generation": 6,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/689.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/689.png"
  },
  {
    "id": 690,
    "name": "垃垃藻",
    "nameZh": "垃垃藻",
    "nameEn": "Skrelp",
    "types": [
      "poison",
      "water"
    ],
    "generation": 6,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/690.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/690.png"
  },
  {
    "id": 691,
    "name": "毒藻龙",
    "nameZh": "毒藻龙",
    "nameEn": "Dragalge",
    "types": [
      "poison",
      "dragon"
    ],
    "generation": 6,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/691.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/691.png"
  },
  {
    "id": 692,
    "name": "铁臂枪虾",
    "nameZh": "铁臂枪虾",
    "nameEn": "Clauncher",
    "types": [
      "water"
    ],
    "generation": 6,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/692.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/692.png"
  },
  {
    "id": 693,
    "name": "钢炮臂虾",
    "nameZh": "钢炮臂虾",
    "nameEn": "Clawitzer",
    "types": [
      "water"
    ],
    "generation": 6,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/693.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/693.png"
  },
  {
    "id": 694,
    "name": "伞电蜥",
    "nameZh": "伞电蜥",
    "nameEn": "Helioptile",
    "types": [
      "electric",
      "normal"
    ],
    "generation": 6,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/694.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/694.png"
  },
  {
    "id": 695,
    "name": "光电伞蜥",
    "nameZh": "光电伞蜥",
    "nameEn": "Heliolisk",
    "types": [
      "electric",
      "normal"
    ],
    "generation": 6,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/695.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/695.png"
  },
  {
    "id": 696,
    "name": "宝宝暴龙",
    "nameZh": "宝宝暴龙",
    "nameEn": "Tyrunt",
    "types": [
      "rock",
      "dragon"
    ],
    "generation": 6,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/696.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/696.png"
  },
  {
    "id": 697,
    "name": "怪颚龙",
    "nameZh": "怪颚龙",
    "nameEn": "Tyrantrum",
    "types": [
      "rock",
      "dragon"
    ],
    "generation": 6,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/697.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/697.png"
  },
  {
    "id": 698,
    "name": "冰雪龙",
    "nameZh": "冰雪龙",
    "nameEn": "Amaura",
    "types": [
      "rock",
      "ice"
    ],
    "generation": 6,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/698.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/698.png"
  },
  {
    "id": 699,
    "name": "冰雪巨龙",
    "nameZh": "冰雪巨龙",
    "nameEn": "Aurorus",
    "types": [
      "rock",
      "ice"
    ],
    "generation": 6,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/699.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/699.png"
  },
  {
    "id": 700,
    "name": "仙子伊布",
    "nameZh": "仙子伊布",
    "nameEn": "Sylveon",
    "types": [
      "fairy"
    ],
    "generation": 6,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/700.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/700.png"
  },
  {
    "id": 701,
    "name": "摔角鹰人",
    "nameZh": "摔角鹰人",
    "nameEn": "Hawlucha",
    "types": [
      "fighting",
      "flying"
    ],
    "generation": 6,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/701.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/701.png"
  },
  {
    "id": 702,
    "name": "咚咚鼠",
    "nameZh": "咚咚鼠",
    "nameEn": "Dedenne",
    "types": [
      "electric",
      "fairy"
    ],
    "generation": 6,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/702.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/702.png"
  },
  {
    "id": 703,
    "name": "小碎钻",
    "nameZh": "小碎钻",
    "nameEn": "Carbink",
    "types": [
      "rock",
      "fairy"
    ],
    "generation": 6,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/703.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/703.png"
  },
  {
    "id": 704,
    "name": "黏黏宝",
    "nameZh": "黏黏宝",
    "nameEn": "Goomy",
    "types": [
      "dragon"
    ],
    "generation": 6,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/704.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/704.png"
  },
  {
    "id": 705,
    "name": "黏美儿",
    "nameZh": "黏美儿",
    "nameEn": "Sliggoo",
    "types": [
      "dragon"
    ],
    "generation": 6,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/705.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/705.png"
  },
  {
    "id": 706,
    "name": "黏美龙",
    "nameZh": "黏美龙",
    "nameEn": "Goodra",
    "types": [
      "dragon"
    ],
    "generation": 6,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/706.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/706.png"
  },
  {
    "id": 707,
    "name": "钥圈儿",
    "nameZh": "钥圈儿",
    "nameEn": "Klefki",
    "types": [
      "steel",
      "fairy"
    ],
    "generation": 6,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/707.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/707.png"
  },
  {
    "id": 708,
    "name": "小木灵",
    "nameZh": "小木灵",
    "nameEn": "Phantump",
    "types": [
      "ghost",
      "grass"
    ],
    "generation": 6,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/708.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/708.png"
  },
  {
    "id": 709,
    "name": "朽木妖",
    "nameZh": "朽木妖",
    "nameEn": "Trevenant",
    "types": [
      "ghost",
      "grass"
    ],
    "generation": 6,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/709.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/709.png"
  },
  {
    "id": 710,
    "name": "南瓜精",
    "nameZh": "南瓜精",
    "nameEn": "Pumpkaboo",
    "types": [
      "ghost",
      "grass"
    ],
    "generation": 6,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/710.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/710.png"
  },
  {
    "id": 711,
    "name": "南瓜怪人",
    "nameZh": "南瓜怪人",
    "nameEn": "Gourgeist",
    "types": [
      "ghost",
      "grass"
    ],
    "generation": 6,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/711.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/711.png"
  },
  {
    "id": 712,
    "name": "冰宝",
    "nameZh": "冰宝",
    "nameEn": "Bergmite",
    "types": [
      "ice"
    ],
    "generation": 6,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/712.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/712.png"
  },
  {
    "id": 713,
    "name": "冰岩怪",
    "nameZh": "冰岩怪",
    "nameEn": "Avalugg",
    "types": [
      "ice"
    ],
    "generation": 6,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/713.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/713.png"
  },
  {
    "id": 714,
    "name": "嗡蝠",
    "nameZh": "嗡蝠",
    "nameEn": "Noibat",
    "types": [
      "flying",
      "dragon"
    ],
    "generation": 6,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/714.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/714.png"
  },
  {
    "id": 715,
    "name": "音波龙",
    "nameZh": "音波龙",
    "nameEn": "Noivern",
    "types": [
      "flying",
      "dragon"
    ],
    "generation": 6,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/715.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/715.png"
  },
  {
    "id": 716,
    "name": "哲尔尼亚斯",
    "nameZh": "哲尔尼亚斯",
    "nameEn": "Xerneas",
    "types": [
      "fairy"
    ],
    "generation": 6,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/716.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/716.png"
  },
  {
    "id": 717,
    "name": "伊裴尔塔尔",
    "nameZh": "伊裴尔塔尔",
    "nameEn": "Yveltal",
    "types": [
      "dark",
      "flying"
    ],
    "generation": 6,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/717.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/717.png"
  },
  {
    "id": 718,
    "name": "基格尔德",
    "nameZh": "基格尔德",
    "nameEn": "Zygarde",
    "types": [
      "dragon",
      "ground"
    ],
    "generation": 6,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/718.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/718.png"
  },
  {
    "id": 719,
    "name": "蒂安希",
    "nameZh": "蒂安希",
    "nameEn": "Diancie",
    "types": [
      "rock",
      "fairy"
    ],
    "generation": 6,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/719.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/719.png"
  },
  {
    "id": 720,
    "name": "胡帕",
    "nameZh": "胡帕",
    "nameEn": "Hoopa",
    "types": [
      "psychic",
      "ghost"
    ],
    "generation": 6,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/720.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/720.png"
  },
  {
    "id": 721,
    "name": "波尔凯尼恩",
    "nameZh": "波尔凯尼恩",
    "nameEn": "Volcanion",
    "types": [
      "fire",
      "water"
    ],
    "generation": 6,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/721.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/721.png"
  },
  {
    "id": 722,
    "name": "木木枭",
    "nameZh": "木木枭",
    "nameEn": "Rowlet",
    "types": [
      "grass",
      "flying"
    ],
    "generation": 7,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/722.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/722.png"
  },
  {
    "id": 723,
    "name": "投羽枭",
    "nameZh": "投羽枭",
    "nameEn": "Dartrix",
    "types": [
      "grass",
      "flying"
    ],
    "generation": 7,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/723.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/723.png"
  },
  {
    "id": 724,
    "name": "狙射树枭",
    "nameZh": "狙射树枭",
    "nameEn": "Decidueye",
    "types": [
      "grass",
      "ghost"
    ],
    "generation": 7,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/724.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/724.png"
  },
  {
    "id": 725,
    "name": "火斑喵",
    "nameZh": "火斑喵",
    "nameEn": "Litten",
    "types": [
      "fire"
    ],
    "generation": 7,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/725.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/725.png"
  },
  {
    "id": 726,
    "name": "炎热喵",
    "nameZh": "炎热喵",
    "nameEn": "Torracat",
    "types": [
      "fire"
    ],
    "generation": 7,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/726.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/726.png"
  },
  {
    "id": 727,
    "name": "炽焰咆哮虎",
    "nameZh": "炽焰咆哮虎",
    "nameEn": "Incineroar",
    "types": [
      "fire",
      "dark"
    ],
    "generation": 7,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/727.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/727.png"
  },
  {
    "id": 728,
    "name": "球球海狮",
    "nameZh": "球球海狮",
    "nameEn": "Popplio",
    "types": [
      "water"
    ],
    "generation": 7,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/728.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/728.png"
  },
  {
    "id": 729,
    "name": "花漾海狮",
    "nameZh": "花漾海狮",
    "nameEn": "Brionne",
    "types": [
      "water"
    ],
    "generation": 7,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/729.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/729.png"
  },
  {
    "id": 730,
    "name": "西狮海壬",
    "nameZh": "西狮海壬",
    "nameEn": "Primarina",
    "types": [
      "water",
      "fairy"
    ],
    "generation": 7,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/730.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/730.png"
  },
  {
    "id": 731,
    "name": "小笃儿",
    "nameZh": "小笃儿",
    "nameEn": "Pikipek",
    "types": [
      "normal",
      "flying"
    ],
    "generation": 7,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/731.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/731.png"
  },
  {
    "id": 732,
    "name": "喇叭啄鸟",
    "nameZh": "喇叭啄鸟",
    "nameEn": "Trumbeak",
    "types": [
      "normal",
      "flying"
    ],
    "generation": 7,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/732.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/732.png"
  },
  {
    "id": 733,
    "name": "铳嘴大鸟",
    "nameZh": "铳嘴大鸟",
    "nameEn": "Toucannon",
    "types": [
      "normal",
      "flying"
    ],
    "generation": 7,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/733.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/733.png"
  },
  {
    "id": 734,
    "name": "猫鼬少",
    "nameZh": "猫鼬少",
    "nameEn": "Yungoos",
    "types": [
      "normal"
    ],
    "generation": 7,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/734.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/734.png"
  },
  {
    "id": 735,
    "name": "猫鼬探长",
    "nameZh": "猫鼬探长",
    "nameEn": "Gumshoos",
    "types": [
      "normal"
    ],
    "generation": 7,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/735.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/735.png"
  },
  {
    "id": 736,
    "name": "强颚鸡母虫",
    "nameZh": "强颚鸡母虫",
    "nameEn": "Grubbin",
    "types": [
      "bug"
    ],
    "generation": 7,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/736.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/736.png"
  },
  {
    "id": 737,
    "name": "虫电宝",
    "nameZh": "虫电宝",
    "nameEn": "Charjabug",
    "types": [
      "bug",
      "electric"
    ],
    "generation": 7,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/737.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/737.png"
  },
  {
    "id": 738,
    "name": "锹农炮虫",
    "nameZh": "锹农炮虫",
    "nameEn": "Vikavolt",
    "types": [
      "bug",
      "electric"
    ],
    "generation": 7,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/738.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/738.png"
  },
  {
    "id": 739,
    "name": "好胜蟹",
    "nameZh": "好胜蟹",
    "nameEn": "Crabrawler",
    "types": [
      "fighting"
    ],
    "generation": 7,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/739.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/739.png"
  },
  {
    "id": 740,
    "name": "好胜毛蟹",
    "nameZh": "好胜毛蟹",
    "nameEn": "Crabominable",
    "types": [
      "fighting",
      "ice"
    ],
    "generation": 7,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/740.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/740.png"
  },
  {
    "id": 741,
    "name": "花舞鸟",
    "nameZh": "花舞鸟",
    "nameEn": "Oricorio",
    "types": [
      "fire",
      "flying"
    ],
    "generation": 7,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/741.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/741.png"
  },
  {
    "id": 742,
    "name": "萌虻",
    "nameZh": "萌虻",
    "nameEn": "Cutiefly",
    "types": [
      "bug",
      "fairy"
    ],
    "generation": 7,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/742.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/742.png"
  },
  {
    "id": 743,
    "name": "蝶结萌虻",
    "nameZh": "蝶结萌虻",
    "nameEn": "Ribombee",
    "types": [
      "bug",
      "fairy"
    ],
    "generation": 7,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/743.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/743.png"
  },
  {
    "id": 744,
    "name": "岩狗狗",
    "nameZh": "岩狗狗",
    "nameEn": "Rockruff",
    "types": [
      "rock"
    ],
    "generation": 7,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/744.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/744.png"
  },
  {
    "id": 745,
    "name": "鬃岩狼人",
    "nameZh": "鬃岩狼人",
    "nameEn": "Lycanroc",
    "types": [
      "rock"
    ],
    "generation": 7,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/745.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/745.png"
  },
  {
    "id": 746,
    "name": "弱丁鱼",
    "nameZh": "弱丁鱼",
    "nameEn": "Wishiwashi",
    "types": [
      "water"
    ],
    "generation": 7,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/746.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/746.png"
  },
  {
    "id": 747,
    "name": "好坏星",
    "nameZh": "好坏星",
    "nameEn": "Mareanie",
    "types": [
      "poison",
      "water"
    ],
    "generation": 7,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/747.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/747.png"
  },
  {
    "id": 748,
    "name": "超坏星",
    "nameZh": "超坏星",
    "nameEn": "Toxapex",
    "types": [
      "poison",
      "water"
    ],
    "generation": 7,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/748.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/748.png"
  },
  {
    "id": 749,
    "name": "泥驴仔",
    "nameZh": "泥驴仔",
    "nameEn": "Mudbray",
    "types": [
      "ground"
    ],
    "generation": 7,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/749.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/749.png"
  },
  {
    "id": 750,
    "name": "重泥挽马",
    "nameZh": "重泥挽马",
    "nameEn": "Mudsdale",
    "types": [
      "ground"
    ],
    "generation": 7,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/750.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/750.png"
  },
  {
    "id": 751,
    "name": "滴蛛",
    "nameZh": "滴蛛",
    "nameEn": "Dewpider",
    "types": [
      "water",
      "bug"
    ],
    "generation": 7,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/751.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/751.png"
  },
  {
    "id": 752,
    "name": "滴蛛霸",
    "nameZh": "滴蛛霸",
    "nameEn": "Araquanid",
    "types": [
      "water",
      "bug"
    ],
    "generation": 7,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/752.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/752.png"
  },
  {
    "id": 753,
    "name": "伪螳草",
    "nameZh": "伪螳草",
    "nameEn": "Fomantis",
    "types": [
      "grass"
    ],
    "generation": 7,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/753.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/753.png"
  },
  {
    "id": 754,
    "name": "兰螳花",
    "nameZh": "兰螳花",
    "nameEn": "Lurantis",
    "types": [
      "grass"
    ],
    "generation": 7,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/754.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/754.png"
  },
  {
    "id": 755,
    "name": "睡睡菇",
    "nameZh": "睡睡菇",
    "nameEn": "Morelull",
    "types": [
      "grass",
      "fairy"
    ],
    "generation": 7,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/755.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/755.png"
  },
  {
    "id": 756,
    "name": "灯罩夜菇",
    "nameZh": "灯罩夜菇",
    "nameEn": "Shiinotic",
    "types": [
      "grass",
      "fairy"
    ],
    "generation": 7,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/756.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/756.png"
  },
  {
    "id": 757,
    "name": "夜盗火蜥",
    "nameZh": "夜盗火蜥",
    "nameEn": "Salandit",
    "types": [
      "poison",
      "fire"
    ],
    "generation": 7,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/757.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/757.png"
  },
  {
    "id": 758,
    "name": "焰后蜥",
    "nameZh": "焰后蜥",
    "nameEn": "Salazzle",
    "types": [
      "poison",
      "fire"
    ],
    "generation": 7,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/758.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/758.png"
  },
  {
    "id": 759,
    "name": "童偶熊",
    "nameZh": "童偶熊",
    "nameEn": "Stufful",
    "types": [
      "normal",
      "fighting"
    ],
    "generation": 7,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/759.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/759.png"
  },
  {
    "id": 760,
    "name": "穿着熊",
    "nameZh": "穿着熊",
    "nameEn": "Bewear",
    "types": [
      "normal",
      "fighting"
    ],
    "generation": 7,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/760.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/760.png"
  },
  {
    "id": 761,
    "name": "甜竹竹",
    "nameZh": "甜竹竹",
    "nameEn": "Bounsweet",
    "types": [
      "grass"
    ],
    "generation": 7,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/761.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/761.png"
  },
  {
    "id": 762,
    "name": "甜舞妮",
    "nameZh": "甜舞妮",
    "nameEn": "Steenee",
    "types": [
      "grass"
    ],
    "generation": 7,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/762.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/762.png"
  },
  {
    "id": 763,
    "name": "甜冷美后",
    "nameZh": "甜冷美后",
    "nameEn": "Tsareena",
    "types": [
      "grass"
    ],
    "generation": 7,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/763.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/763.png"
  },
  {
    "id": 764,
    "name": "花疗环环",
    "nameZh": "花疗环环",
    "nameEn": "Comfey",
    "types": [
      "fairy"
    ],
    "generation": 7,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/764.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/764.png"
  },
  {
    "id": 765,
    "name": "智挥猩",
    "nameZh": "智挥猩",
    "nameEn": "Oranguru",
    "types": [
      "normal",
      "psychic"
    ],
    "generation": 7,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/765.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/765.png"
  },
  {
    "id": 766,
    "name": "投掷猴",
    "nameZh": "投掷猴",
    "nameEn": "Passimian",
    "types": [
      "fighting"
    ],
    "generation": 7,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/766.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/766.png"
  },
  {
    "id": 767,
    "name": "胆小虫",
    "nameZh": "胆小虫",
    "nameEn": "Wimpod",
    "types": [
      "bug",
      "water"
    ],
    "generation": 7,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/767.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/767.png"
  },
  {
    "id": 768,
    "name": "具甲武者",
    "nameZh": "具甲武者",
    "nameEn": "Golisopod",
    "types": [
      "bug",
      "water"
    ],
    "generation": 7,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/768.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/768.png"
  },
  {
    "id": 769,
    "name": "沙丘娃",
    "nameZh": "沙丘娃",
    "nameEn": "Sandygast",
    "types": [
      "ghost",
      "ground"
    ],
    "generation": 7,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/769.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/769.png"
  },
  {
    "id": 770,
    "name": "噬沙堡爷",
    "nameZh": "噬沙堡爷",
    "nameEn": "Palossand",
    "types": [
      "ghost",
      "ground"
    ],
    "generation": 7,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/770.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/770.png"
  },
  {
    "id": 771,
    "name": "拳海参",
    "nameZh": "拳海参",
    "nameEn": "Pyukumuku",
    "types": [
      "water"
    ],
    "generation": 7,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/771.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/771.png"
  },
  {
    "id": 772,
    "name": "属性：空",
    "nameZh": "属性：空",
    "nameEn": "Type: Null",
    "types": [
      "normal"
    ],
    "generation": 7,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/772.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/772.png"
  },
  {
    "id": 773,
    "name": "银伴战兽",
    "nameZh": "银伴战兽",
    "nameEn": "Silvally",
    "types": [
      "normal"
    ],
    "generation": 7,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/773.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/773.png"
  },
  {
    "id": 774,
    "name": "小陨星",
    "nameZh": "小陨星",
    "nameEn": "Minior",
    "types": [
      "rock",
      "flying"
    ],
    "generation": 7,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/774.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/774.png"
  },
  {
    "id": 775,
    "name": "树枕尾熊",
    "nameZh": "树枕尾熊",
    "nameEn": "Komala",
    "types": [
      "normal"
    ],
    "generation": 7,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/775.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/775.png"
  },
  {
    "id": 776,
    "name": "爆焰龟兽",
    "nameZh": "爆焰龟兽",
    "nameEn": "Turtonator",
    "types": [
      "fire",
      "dragon"
    ],
    "generation": 7,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/776.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/776.png"
  },
  {
    "id": 777,
    "name": "托戈德玛尔",
    "nameZh": "托戈德玛尔",
    "nameEn": "Togedemaru",
    "types": [
      "electric",
      "steel"
    ],
    "generation": 7,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/777.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/777.png"
  },
  {
    "id": 778,
    "name": "谜拟丘",
    "nameZh": "谜拟丘",
    "nameEn": "Mimikyu",
    "types": [
      "ghost",
      "fairy"
    ],
    "generation": 7,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/778.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/778.png"
  },
  {
    "id": 779,
    "name": "磨牙彩皮鱼",
    "nameZh": "磨牙彩皮鱼",
    "nameEn": "Bruxish",
    "types": [
      "water",
      "psychic"
    ],
    "generation": 7,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/779.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/779.png"
  },
  {
    "id": 780,
    "name": "老翁龙",
    "nameZh": "老翁龙",
    "nameEn": "Drampa",
    "types": [
      "normal",
      "dragon"
    ],
    "generation": 7,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/780.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/780.png"
  },
  {
    "id": 781,
    "name": "破破舵轮",
    "nameZh": "破破舵轮",
    "nameEn": "Dhelmise",
    "types": [
      "ghost",
      "grass"
    ],
    "generation": 7,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/781.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/781.png"
  },
  {
    "id": 782,
    "name": "心鳞宝",
    "nameZh": "心鳞宝",
    "nameEn": "Jangmo-o",
    "types": [
      "dragon"
    ],
    "generation": 7,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/782.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/782.png"
  },
  {
    "id": 783,
    "name": "鳞甲龙",
    "nameZh": "鳞甲龙",
    "nameEn": "Hakamo-o",
    "types": [
      "dragon",
      "fighting"
    ],
    "generation": 7,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/783.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/783.png"
  },
  {
    "id": 784,
    "name": "杖尾鳞甲龙",
    "nameZh": "杖尾鳞甲龙",
    "nameEn": "Kommo-o",
    "types": [
      "dragon",
      "fighting"
    ],
    "generation": 7,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/784.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/784.png"
  },
  {
    "id": 785,
    "name": "卡璞・鸣鸣",
    "nameZh": "卡璞・鸣鸣",
    "nameEn": "Tapu Koko",
    "types": [
      "electric",
      "fairy"
    ],
    "generation": 7,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/785.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/785.png"
  },
  {
    "id": 786,
    "name": "卡璞・蝶蝶",
    "nameZh": "卡璞・蝶蝶",
    "nameEn": "Tapu Lele",
    "types": [
      "psychic",
      "fairy"
    ],
    "generation": 7,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/786.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/786.png"
  },
  {
    "id": 787,
    "name": "卡璞・哞哞",
    "nameZh": "卡璞・哞哞",
    "nameEn": "Tapu Bulu",
    "types": [
      "grass",
      "fairy"
    ],
    "generation": 7,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/787.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/787.png"
  },
  {
    "id": 788,
    "name": "卡璞・鳍鳍",
    "nameZh": "卡璞・鳍鳍",
    "nameEn": "Tapu Fini",
    "types": [
      "water",
      "fairy"
    ],
    "generation": 7,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/788.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/788.png"
  },
  {
    "id": 789,
    "name": "科斯莫古",
    "nameZh": "科斯莫古",
    "nameEn": "Cosmog",
    "types": [
      "psychic"
    ],
    "generation": 7,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/789.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/789.png"
  },
  {
    "id": 790,
    "name": "科斯莫姆",
    "nameZh": "科斯莫姆",
    "nameEn": "Cosmoem",
    "types": [
      "psychic"
    ],
    "generation": 7,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/790.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/790.png"
  },
  {
    "id": 791,
    "name": "索尔迦雷欧",
    "nameZh": "索尔迦雷欧",
    "nameEn": "Solgaleo",
    "types": [
      "psychic",
      "steel"
    ],
    "generation": 7,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/791.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/791.png"
  },
  {
    "id": 792,
    "name": "露奈雅拉",
    "nameZh": "露奈雅拉",
    "nameEn": "Lunala",
    "types": [
      "psychic",
      "ghost"
    ],
    "generation": 7,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/792.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/792.png"
  },
  {
    "id": 793,
    "name": "虚吾伊德",
    "nameZh": "虚吾伊德",
    "nameEn": "Nihilego",
    "types": [
      "rock",
      "poison"
    ],
    "generation": 7,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/793.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/793.png"
  },
  {
    "id": 794,
    "name": "爆肌蚊",
    "nameZh": "爆肌蚊",
    "nameEn": "Buzzwole",
    "types": [
      "bug",
      "fighting"
    ],
    "generation": 7,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/794.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/794.png"
  },
  {
    "id": 795,
    "name": "费洛美螂",
    "nameZh": "费洛美螂",
    "nameEn": "Pheromosa",
    "types": [
      "bug",
      "fighting"
    ],
    "generation": 7,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/795.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/795.png"
  },
  {
    "id": 796,
    "name": "电束木",
    "nameZh": "电束木",
    "nameEn": "Xurkitree",
    "types": [
      "electric"
    ],
    "generation": 7,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/796.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/796.png"
  },
  {
    "id": 797,
    "name": "铁火辉夜",
    "nameZh": "铁火辉夜",
    "nameEn": "Celesteela",
    "types": [
      "steel",
      "flying"
    ],
    "generation": 7,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/797.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/797.png"
  },
  {
    "id": 798,
    "name": "纸御剑",
    "nameZh": "纸御剑",
    "nameEn": "Kartana",
    "types": [
      "grass",
      "steel"
    ],
    "generation": 7,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/798.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/798.png"
  },
  {
    "id": 799,
    "name": "恶食大王",
    "nameZh": "恶食大王",
    "nameEn": "Guzzlord",
    "types": [
      "dark",
      "dragon"
    ],
    "generation": 7,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/799.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/799.png"
  },
  {
    "id": 800,
    "name": "奈克洛兹玛",
    "nameZh": "奈克洛兹玛",
    "nameEn": "Necrozma",
    "types": [
      "psychic"
    ],
    "generation": 7,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/800.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/800.png"
  },
  {
    "id": 801,
    "name": "玛机雅娜",
    "nameZh": "玛机雅娜",
    "nameEn": "Magearna",
    "types": [
      "steel",
      "fairy"
    ],
    "generation": 7,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/801.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/801.png"
  },
  {
    "id": 802,
    "name": "玛夏多",
    "nameZh": "玛夏多",
    "nameEn": "Marshadow",
    "types": [
      "fighting",
      "ghost"
    ],
    "generation": 7,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/802.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/802.png"
  },
  {
    "id": 803,
    "name": "毒贝比",
    "nameZh": "毒贝比",
    "nameEn": "Poipole",
    "types": [
      "poison"
    ],
    "generation": 7,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/803.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/803.png"
  },
  {
    "id": 804,
    "name": "四颚针龙",
    "nameZh": "四颚针龙",
    "nameEn": "Naganadel",
    "types": [
      "poison",
      "dragon"
    ],
    "generation": 7,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/804.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/804.png"
  },
  {
    "id": 805,
    "name": "垒磊石",
    "nameZh": "垒磊石",
    "nameEn": "Stakataka",
    "types": [
      "rock",
      "steel"
    ],
    "generation": 7,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/805.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/805.png"
  },
  {
    "id": 806,
    "name": "砰头小丑",
    "nameZh": "砰头小丑",
    "nameEn": "Blacephalon",
    "types": [
      "fire",
      "ghost"
    ],
    "generation": 7,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/806.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/806.png"
  },
  {
    "id": 807,
    "name": "捷拉奥拉",
    "nameZh": "捷拉奥拉",
    "nameEn": "Zeraora",
    "types": [
      "electric"
    ],
    "generation": 7,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/807.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/807.png"
  },
  {
    "id": 808,
    "name": "美录坦",
    "nameZh": "美录坦",
    "nameEn": "Meltan",
    "types": [
      "steel"
    ],
    "generation": 7,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/808.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/808.png"
  },
  {
    "id": 809,
    "name": "美录梅塔",
    "nameZh": "美录梅塔",
    "nameEn": "Melmetal",
    "types": [
      "steel"
    ],
    "generation": 7,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/809.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/809.png"
  },
  {
    "id": 810,
    "name": "敲音猴",
    "nameZh": "敲音猴",
    "nameEn": "Grookey",
    "types": [
      "grass"
    ],
    "generation": 8,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/810.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/810.png"
  },
  {
    "id": 811,
    "name": "啪咚猴",
    "nameZh": "啪咚猴",
    "nameEn": "Thwackey",
    "types": [
      "grass"
    ],
    "generation": 8,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/811.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/811.png"
  },
  {
    "id": 812,
    "name": "轰擂金刚猩",
    "nameZh": "轰擂金刚猩",
    "nameEn": "Rillaboom",
    "types": [
      "grass"
    ],
    "generation": 8,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/812.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/812.png"
  },
  {
    "id": 813,
    "name": "炎兔儿",
    "nameZh": "炎兔儿",
    "nameEn": "Scorbunny",
    "types": [
      "fire"
    ],
    "generation": 8,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/813.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/813.png"
  },
  {
    "id": 814,
    "name": "腾蹴小将",
    "nameZh": "腾蹴小将",
    "nameEn": "Raboot",
    "types": [
      "fire"
    ],
    "generation": 8,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/814.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/814.png"
  },
  {
    "id": 815,
    "name": "闪焰王牌",
    "nameZh": "闪焰王牌",
    "nameEn": "Cinderace",
    "types": [
      "fire"
    ],
    "generation": 8,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/815.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/815.png"
  },
  {
    "id": 816,
    "name": "泪眼蜥",
    "nameZh": "泪眼蜥",
    "nameEn": "Sobble",
    "types": [
      "water"
    ],
    "generation": 8,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/816.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/816.png"
  },
  {
    "id": 817,
    "name": "变涩蜥",
    "nameZh": "变涩蜥",
    "nameEn": "Drizzile",
    "types": [
      "water"
    ],
    "generation": 8,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/817.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/817.png"
  },
  {
    "id": 818,
    "name": "千面避役",
    "nameZh": "千面避役",
    "nameEn": "Inteleon",
    "types": [
      "water"
    ],
    "generation": 8,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/818.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/818.png"
  },
  {
    "id": 819,
    "name": "贪心栗鼠",
    "nameZh": "贪心栗鼠",
    "nameEn": "Skwovet",
    "types": [
      "normal"
    ],
    "generation": 8,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/819.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/819.png"
  },
  {
    "id": 820,
    "name": "藏饱栗鼠",
    "nameZh": "藏饱栗鼠",
    "nameEn": "Greedent",
    "types": [
      "normal"
    ],
    "generation": 8,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/820.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/820.png"
  },
  {
    "id": 821,
    "name": "稚山雀",
    "nameZh": "稚山雀",
    "nameEn": "Rookidee",
    "types": [
      "flying"
    ],
    "generation": 8,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/821.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/821.png"
  },
  {
    "id": 822,
    "name": "蓝鸦",
    "nameZh": "蓝鸦",
    "nameEn": "Corvisquire",
    "types": [
      "flying"
    ],
    "generation": 8,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/822.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/822.png"
  },
  {
    "id": 823,
    "name": "钢铠鸦",
    "nameZh": "钢铠鸦",
    "nameEn": "Corviknight",
    "types": [
      "flying",
      "steel"
    ],
    "generation": 8,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/823.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/823.png"
  },
  {
    "id": 824,
    "name": "索侦虫",
    "nameZh": "索侦虫",
    "nameEn": "Blipbug",
    "types": [
      "bug"
    ],
    "generation": 8,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/824.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/824.png"
  },
  {
    "id": 825,
    "name": "天罩虫",
    "nameZh": "天罩虫",
    "nameEn": "Dottler",
    "types": [
      "bug",
      "psychic"
    ],
    "generation": 8,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/825.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/825.png"
  },
  {
    "id": 826,
    "name": "以欧路普",
    "nameZh": "以欧路普",
    "nameEn": "Orbeetle",
    "types": [
      "bug",
      "psychic"
    ],
    "generation": 8,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/826.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/826.png"
  },
  {
    "id": 827,
    "name": "狡小狐",
    "nameZh": "狡小狐",
    "nameEn": "Nickit",
    "types": [
      "dark"
    ],
    "generation": 8,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/827.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/827.png"
  },
  {
    "id": 828,
    "name": "猾大狐",
    "nameZh": "猾大狐",
    "nameEn": "Thievul",
    "types": [
      "dark"
    ],
    "generation": 8,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/828.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/828.png"
  },
  {
    "id": 829,
    "name": "幼棉棉",
    "nameZh": "幼棉棉",
    "nameEn": "Gossifleur",
    "types": [
      "grass"
    ],
    "generation": 8,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/829.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/829.png"
  },
  {
    "id": 830,
    "name": "白蓬蓬",
    "nameZh": "白蓬蓬",
    "nameEn": "Eldegoss",
    "types": [
      "grass"
    ],
    "generation": 8,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/830.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/830.png"
  },
  {
    "id": 831,
    "name": "毛辫羊",
    "nameZh": "毛辫羊",
    "nameEn": "Wooloo",
    "types": [
      "normal"
    ],
    "generation": 8,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/831.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/831.png"
  },
  {
    "id": 832,
    "name": "毛毛角羊",
    "nameZh": "毛毛角羊",
    "nameEn": "Dubwool",
    "types": [
      "normal"
    ],
    "generation": 8,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/832.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/832.png"
  },
  {
    "id": 833,
    "name": "咬咬龟",
    "nameZh": "咬咬龟",
    "nameEn": "Chewtle",
    "types": [
      "water"
    ],
    "generation": 8,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/833.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/833.png"
  },
  {
    "id": 834,
    "name": "暴噬龟",
    "nameZh": "暴噬龟",
    "nameEn": "Drednaw",
    "types": [
      "water",
      "rock"
    ],
    "generation": 8,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/834.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/834.png"
  },
  {
    "id": 835,
    "name": "来电汪",
    "nameZh": "来电汪",
    "nameEn": "Yamper",
    "types": [
      "electric"
    ],
    "generation": 8,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/835.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/835.png"
  },
  {
    "id": 836,
    "name": "逐电犬",
    "nameZh": "逐电犬",
    "nameEn": "Boltund",
    "types": [
      "electric"
    ],
    "generation": 8,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/836.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/836.png"
  },
  {
    "id": 837,
    "name": "小炭仔",
    "nameZh": "小炭仔",
    "nameEn": "Rolycoly",
    "types": [
      "rock"
    ],
    "generation": 8,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/837.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/837.png"
  },
  {
    "id": 838,
    "name": "大炭车",
    "nameZh": "大炭车",
    "nameEn": "Carkol",
    "types": [
      "rock",
      "fire"
    ],
    "generation": 8,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/838.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/838.png"
  },
  {
    "id": 839,
    "name": "巨炭山",
    "nameZh": "巨炭山",
    "nameEn": "Coalossal",
    "types": [
      "rock",
      "fire"
    ],
    "generation": 8,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/839.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/839.png"
  },
  {
    "id": 840,
    "name": "啃果虫",
    "nameZh": "啃果虫",
    "nameEn": "Applin",
    "types": [
      "grass",
      "dragon"
    ],
    "generation": 8,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/840.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/840.png"
  },
  {
    "id": 841,
    "name": "苹裹龙",
    "nameZh": "苹裹龙",
    "nameEn": "Flapple",
    "types": [
      "grass",
      "dragon"
    ],
    "generation": 8,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/841.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/841.png"
  },
  {
    "id": 842,
    "name": "丰蜜龙",
    "nameZh": "丰蜜龙",
    "nameEn": "Appletun",
    "types": [
      "grass",
      "dragon"
    ],
    "generation": 8,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/842.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/842.png"
  },
  {
    "id": 843,
    "name": "沙包蛇",
    "nameZh": "沙包蛇",
    "nameEn": "Silicobra",
    "types": [
      "ground"
    ],
    "generation": 8,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/843.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/843.png"
  },
  {
    "id": 844,
    "name": "沙螺蟒",
    "nameZh": "沙螺蟒",
    "nameEn": "Sandaconda",
    "types": [
      "ground"
    ],
    "generation": 8,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/844.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/844.png"
  },
  {
    "id": 845,
    "name": "古月鸟",
    "nameZh": "古月鸟",
    "nameEn": "Cramorant",
    "types": [
      "flying",
      "water"
    ],
    "generation": 8,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/845.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/845.png"
  },
  {
    "id": 846,
    "name": "刺梭鱼",
    "nameZh": "刺梭鱼",
    "nameEn": "Arrokuda",
    "types": [
      "water"
    ],
    "generation": 8,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/846.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/846.png"
  },
  {
    "id": 847,
    "name": "戽斗尖梭",
    "nameZh": "戽斗尖梭",
    "nameEn": "Barraskewda",
    "types": [
      "water"
    ],
    "generation": 8,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/847.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/847.png"
  },
  {
    "id": 848,
    "name": "电音婴",
    "nameZh": "电音婴",
    "nameEn": "Toxel",
    "types": [
      "electric",
      "poison"
    ],
    "generation": 8,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/848.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/848.png"
  },
  {
    "id": 849,
    "name": "颤弦蝾螈",
    "nameZh": "颤弦蝾螈",
    "nameEn": "Toxtricity",
    "types": [
      "electric",
      "poison"
    ],
    "generation": 8,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/849.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/849.png"
  },
  {
    "id": 850,
    "name": "烧火蚣",
    "nameZh": "烧火蚣",
    "nameEn": "Sizzlipede",
    "types": [
      "fire",
      "bug"
    ],
    "generation": 8,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/850.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/850.png"
  },
  {
    "id": 851,
    "name": "焚焰蚣",
    "nameZh": "焚焰蚣",
    "nameEn": "Centiskorch",
    "types": [
      "fire",
      "bug"
    ],
    "generation": 8,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/851.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/851.png"
  },
  {
    "id": 852,
    "name": "拳拳蛸",
    "nameZh": "拳拳蛸",
    "nameEn": "Clobbopus",
    "types": [
      "fighting"
    ],
    "generation": 8,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/852.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/852.png"
  },
  {
    "id": 853,
    "name": "八爪武师",
    "nameZh": "八爪武师",
    "nameEn": "Grapploct",
    "types": [
      "fighting"
    ],
    "generation": 8,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/853.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/853.png"
  },
  {
    "id": 854,
    "name": "来悲茶",
    "nameZh": "来悲茶",
    "nameEn": "Sinistea",
    "types": [
      "ghost"
    ],
    "generation": 8,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/854.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/854.png"
  },
  {
    "id": 855,
    "name": "怖思壶",
    "nameZh": "怖思壶",
    "nameEn": "Polteageist",
    "types": [
      "ghost"
    ],
    "generation": 8,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/855.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/855.png"
  },
  {
    "id": 856,
    "name": "迷布莉姆",
    "nameZh": "迷布莉姆",
    "nameEn": "Hatenna",
    "types": [
      "psychic"
    ],
    "generation": 8,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/856.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/856.png"
  },
  {
    "id": 857,
    "name": "提布莉姆",
    "nameZh": "提布莉姆",
    "nameEn": "Hattrem",
    "types": [
      "psychic"
    ],
    "generation": 8,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/857.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/857.png"
  },
  {
    "id": 858,
    "name": "布莉姆温",
    "nameZh": "布莉姆温",
    "nameEn": "Hatterene",
    "types": [
      "psychic",
      "fairy"
    ],
    "generation": 8,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/858.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/858.png"
  },
  {
    "id": 859,
    "name": "捣蛋小妖",
    "nameZh": "捣蛋小妖",
    "nameEn": "Impidimp",
    "types": [
      "dark",
      "fairy"
    ],
    "generation": 8,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/859.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/859.png"
  },
  {
    "id": 860,
    "name": "诈唬魔",
    "nameZh": "诈唬魔",
    "nameEn": "Morgrem",
    "types": [
      "dark",
      "fairy"
    ],
    "generation": 8,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/860.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/860.png"
  },
  {
    "id": 861,
    "name": "长毛巨魔",
    "nameZh": "长毛巨魔",
    "nameEn": "Grimmsnarl",
    "types": [
      "dark",
      "fairy"
    ],
    "generation": 8,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/861.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/861.png"
  },
  {
    "id": 862,
    "name": "堵拦熊",
    "nameZh": "堵拦熊",
    "nameEn": "Obstagoon",
    "types": [
      "dark",
      "normal"
    ],
    "generation": 8,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/862.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/862.png"
  },
  {
    "id": 863,
    "name": "喵头目",
    "nameZh": "喵头目",
    "nameEn": "Perrserker",
    "types": [
      "steel"
    ],
    "generation": 8,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/863.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/863.png"
  },
  {
    "id": 864,
    "name": "魔灵珊瑚",
    "nameZh": "魔灵珊瑚",
    "nameEn": "Cursola",
    "types": [
      "ghost"
    ],
    "generation": 8,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/864.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/864.png"
  },
  {
    "id": 865,
    "name": "葱游兵",
    "nameZh": "葱游兵",
    "nameEn": "Sirfetch’d",
    "types": [
      "fighting"
    ],
    "generation": 8,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/865.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/865.png"
  },
  {
    "id": 866,
    "name": "踏冰人偶",
    "nameZh": "踏冰人偶",
    "nameEn": "Mr. Rime",
    "types": [
      "ice",
      "psychic"
    ],
    "generation": 8,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/866.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/866.png"
  },
  {
    "id": 867,
    "name": "迭失板",
    "nameZh": "迭失板",
    "nameEn": "Runerigus",
    "types": [
      "ground",
      "ghost"
    ],
    "generation": 8,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/867.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/867.png"
  },
  {
    "id": 868,
    "name": "小仙奶",
    "nameZh": "小仙奶",
    "nameEn": "Milcery",
    "types": [
      "fairy"
    ],
    "generation": 8,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/868.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/868.png"
  },
  {
    "id": 869,
    "name": "霜奶仙",
    "nameZh": "霜奶仙",
    "nameEn": "Alcremie",
    "types": [
      "fairy"
    ],
    "generation": 8,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/869.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/869.png"
  },
  {
    "id": 870,
    "name": "列阵兵",
    "nameZh": "列阵兵",
    "nameEn": "Falinks",
    "types": [
      "fighting"
    ],
    "generation": 8,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/870.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/870.png"
  },
  {
    "id": 871,
    "name": "啪嚓海胆",
    "nameZh": "啪嚓海胆",
    "nameEn": "Pincurchin",
    "types": [
      "electric"
    ],
    "generation": 8,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/871.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/871.png"
  },
  {
    "id": 872,
    "name": "雪吞虫",
    "nameZh": "雪吞虫",
    "nameEn": "Snom",
    "types": [
      "ice",
      "bug"
    ],
    "generation": 8,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/872.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/872.png"
  },
  {
    "id": 873,
    "name": "雪绒蛾",
    "nameZh": "雪绒蛾",
    "nameEn": "Frosmoth",
    "types": [
      "ice",
      "bug"
    ],
    "generation": 8,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/873.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/873.png"
  },
  {
    "id": 874,
    "name": "巨石丁",
    "nameZh": "巨石丁",
    "nameEn": "Stonjourner",
    "types": [
      "rock"
    ],
    "generation": 8,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/874.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/874.png"
  },
  {
    "id": 875,
    "name": "冰砌鹅",
    "nameZh": "冰砌鹅",
    "nameEn": "Eiscue",
    "types": [
      "ice"
    ],
    "generation": 8,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/875.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/875.png"
  },
  {
    "id": 876,
    "name": "爱管侍",
    "nameZh": "爱管侍",
    "nameEn": "Indeedee",
    "types": [
      "psychic",
      "normal"
    ],
    "generation": 8,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/876.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/876.png"
  },
  {
    "id": 877,
    "name": "莫鲁贝可",
    "nameZh": "莫鲁贝可",
    "nameEn": "Morpeko",
    "types": [
      "electric",
      "dark"
    ],
    "generation": 8,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/877.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/877.png"
  },
  {
    "id": 878,
    "name": "铜象",
    "nameZh": "铜象",
    "nameEn": "Cufant",
    "types": [
      "steel"
    ],
    "generation": 8,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/878.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/878.png"
  },
  {
    "id": 879,
    "name": "大王铜象",
    "nameZh": "大王铜象",
    "nameEn": "Copperajah",
    "types": [
      "steel"
    ],
    "generation": 8,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/879.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/879.png"
  },
  {
    "id": 880,
    "name": "雷鸟龙",
    "nameZh": "雷鸟龙",
    "nameEn": "Dracozolt",
    "types": [
      "electric",
      "dragon"
    ],
    "generation": 8,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/880.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/880.png"
  },
  {
    "id": 881,
    "name": "雷鸟海兽",
    "nameZh": "雷鸟海兽",
    "nameEn": "Arctozolt",
    "types": [
      "electric",
      "ice"
    ],
    "generation": 8,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/881.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/881.png"
  },
  {
    "id": 882,
    "name": "鳃鱼龙",
    "nameZh": "鳃鱼龙",
    "nameEn": "Dracovish",
    "types": [
      "water",
      "dragon"
    ],
    "generation": 8,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/882.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/882.png"
  },
  {
    "id": 883,
    "name": "鳃鱼海兽",
    "nameZh": "鳃鱼海兽",
    "nameEn": "Arctovish",
    "types": [
      "water",
      "ice"
    ],
    "generation": 8,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/883.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/883.png"
  },
  {
    "id": 884,
    "name": "铝钢龙",
    "nameZh": "铝钢龙",
    "nameEn": "Duraludon",
    "types": [
      "steel",
      "dragon"
    ],
    "generation": 8,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/884.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/884.png"
  },
  {
    "id": 885,
    "name": "多龙梅西亚",
    "nameZh": "多龙梅西亚",
    "nameEn": "Dreepy",
    "types": [
      "dragon",
      "ghost"
    ],
    "generation": 8,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/885.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/885.png"
  },
  {
    "id": 886,
    "name": "多龙奇",
    "nameZh": "多龙奇",
    "nameEn": "Drakloak",
    "types": [
      "dragon",
      "ghost"
    ],
    "generation": 8,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/886.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/886.png"
  },
  {
    "id": 887,
    "name": "多龙巴鲁托",
    "nameZh": "多龙巴鲁托",
    "nameEn": "Dragapult",
    "types": [
      "dragon",
      "ghost"
    ],
    "generation": 8,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/887.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/887.png"
  },
  {
    "id": 888,
    "name": "苍响",
    "nameZh": "苍响",
    "nameEn": "Zacian",
    "types": [
      "fairy"
    ],
    "generation": 8,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/888.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/888.png"
  },
  {
    "id": 889,
    "name": "藏玛然特",
    "nameZh": "藏玛然特",
    "nameEn": "Zamazenta",
    "types": [
      "fighting"
    ],
    "generation": 8,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/889.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/889.png"
  },
  {
    "id": 890,
    "name": "无极汰那",
    "nameZh": "无极汰那",
    "nameEn": "Eternatus",
    "types": [
      "poison",
      "dragon"
    ],
    "generation": 8,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/890.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/890.png"
  },
  {
    "id": 891,
    "name": "熊徒弟",
    "nameZh": "熊徒弟",
    "nameEn": "Kubfu",
    "types": [
      "fighting"
    ],
    "generation": 8,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/891.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/891.png"
  },
  {
    "id": 892,
    "name": "武道熊师",
    "nameZh": "武道熊师",
    "nameEn": "Urshifu",
    "types": [
      "fighting",
      "dark"
    ],
    "generation": 8,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/892.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/892.png"
  },
  {
    "id": 893,
    "name": "萨戮德",
    "nameZh": "萨戮德",
    "nameEn": "Zarude",
    "types": [
      "dark",
      "grass"
    ],
    "generation": 8,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/893.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/893.png"
  },
  {
    "id": 894,
    "name": "雷吉艾勒奇",
    "nameZh": "雷吉艾勒奇",
    "nameEn": "Regieleki",
    "types": [
      "electric"
    ],
    "generation": 8,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/894.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/894.png"
  },
  {
    "id": 895,
    "name": "雷吉铎拉戈",
    "nameZh": "雷吉铎拉戈",
    "nameEn": "Regidrago",
    "types": [
      "dragon"
    ],
    "generation": 8,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/895.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/895.png"
  },
  {
    "id": 896,
    "name": "雪暴马",
    "nameZh": "雪暴马",
    "nameEn": "Glastrier",
    "types": [
      "ice"
    ],
    "generation": 8,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/896.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/896.png"
  },
  {
    "id": 897,
    "name": "灵幽马",
    "nameZh": "灵幽马",
    "nameEn": "Spectrier",
    "types": [
      "ghost"
    ],
    "generation": 8,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/897.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/897.png"
  },
  {
    "id": 898,
    "name": "蕾冠王",
    "nameZh": "蕾冠王",
    "nameEn": "Calyrex",
    "types": [
      "psychic",
      "grass"
    ],
    "generation": 8,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/898.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/898.png"
  },
  {
    "id": 899,
    "name": "诡角鹿",
    "nameZh": "诡角鹿",
    "nameEn": "Wyrdeer",
    "types": [
      "normal",
      "psychic"
    ],
    "generation": 8,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/899.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/899.png"
  },
  {
    "id": 900,
    "name": "劈斧螳螂",
    "nameZh": "劈斧螳螂",
    "nameEn": "Kleavor",
    "types": [
      "bug",
      "rock"
    ],
    "generation": 8,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/900.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/900.png"
  },
  {
    "id": 901,
    "name": "月月熊",
    "nameZh": "月月熊",
    "nameEn": "Ursaluna",
    "types": [
      "ground",
      "normal"
    ],
    "generation": 8,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/901.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/901.png"
  },
  {
    "id": 902,
    "name": "幽尾玄鱼",
    "nameZh": "幽尾玄鱼",
    "nameEn": "Basculegion",
    "types": [
      "water",
      "ghost"
    ],
    "generation": 8,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/902.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/902.png"
  },
  {
    "id": 903,
    "name": "大狃拉",
    "nameZh": "大狃拉",
    "nameEn": "Sneasler",
    "types": [
      "fighting",
      "poison"
    ],
    "generation": 8,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/903.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/903.png"
  },
  {
    "id": 904,
    "name": "万针鱼",
    "nameZh": "万针鱼",
    "nameEn": "Overqwil",
    "types": [
      "dark",
      "poison"
    ],
    "generation": 8,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/904.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/904.png"
  },
  {
    "id": 905,
    "name": "眷恋云",
    "nameZh": "眷恋云",
    "nameEn": "Enamorus",
    "types": [
      "fairy",
      "flying"
    ],
    "generation": 8,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/905.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/905.png"
  },
  {
    "id": 906,
    "name": "新叶喵",
    "nameZh": "新叶喵",
    "nameEn": "Sprigatito",
    "types": [
      "grass"
    ],
    "generation": 9,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/906.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/906.png"
  },
  {
    "id": 907,
    "name": "蒂蕾喵",
    "nameZh": "蒂蕾喵",
    "nameEn": "Floragato",
    "types": [
      "grass"
    ],
    "generation": 9,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/907.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/907.png"
  },
  {
    "id": 908,
    "name": "魔幻假面喵",
    "nameZh": "魔幻假面喵",
    "nameEn": "Meowscarada",
    "types": [
      "grass",
      "dark"
    ],
    "generation": 9,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/908.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/908.png"
  },
  {
    "id": 909,
    "name": "呆火鳄",
    "nameZh": "呆火鳄",
    "nameEn": "Fuecoco",
    "types": [
      "fire"
    ],
    "generation": 9,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/909.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/909.png"
  },
  {
    "id": 910,
    "name": "炙烫鳄",
    "nameZh": "炙烫鳄",
    "nameEn": "Crocalor",
    "types": [
      "fire"
    ],
    "generation": 9,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/910.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/910.png"
  },
  {
    "id": 911,
    "name": "骨纹巨声鳄",
    "nameZh": "骨纹巨声鳄",
    "nameEn": "Skeledirge",
    "types": [
      "fire",
      "ghost"
    ],
    "generation": 9,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/911.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/911.png"
  },
  {
    "id": 912,
    "name": "润水鸭",
    "nameZh": "润水鸭",
    "nameEn": "Quaxly",
    "types": [
      "water"
    ],
    "generation": 9,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/912.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/912.png"
  },
  {
    "id": 913,
    "name": "涌跃鸭",
    "nameZh": "涌跃鸭",
    "nameEn": "Quaxwell",
    "types": [
      "water"
    ],
    "generation": 9,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/913.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/913.png"
  },
  {
    "id": 914,
    "name": "狂欢浪舞鸭",
    "nameZh": "狂欢浪舞鸭",
    "nameEn": "Quaquaval",
    "types": [
      "water",
      "fighting"
    ],
    "generation": 9,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/914.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/914.png"
  },
  {
    "id": 915,
    "name": "爱吃豚",
    "nameZh": "爱吃豚",
    "nameEn": "Lechonk",
    "types": [
      "normal"
    ],
    "generation": 9,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/915.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/915.png"
  },
  {
    "id": 916,
    "name": "飘香豚",
    "nameZh": "飘香豚",
    "nameEn": "Oinkologne",
    "types": [
      "normal"
    ],
    "generation": 9,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/916.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/916.png"
  },
  {
    "id": 917,
    "name": "团珠蛛",
    "nameZh": "团珠蛛",
    "nameEn": "Tarountula",
    "types": [
      "bug"
    ],
    "generation": 9,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/917.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/917.png"
  },
  {
    "id": 918,
    "name": "操陷蛛",
    "nameZh": "操陷蛛",
    "nameEn": "Spidops",
    "types": [
      "bug"
    ],
    "generation": 9,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/918.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/918.png"
  },
  {
    "id": 919,
    "name": "豆蟋蟀",
    "nameZh": "豆蟋蟀",
    "nameEn": "Nymble",
    "types": [
      "bug"
    ],
    "generation": 9,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/919.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/919.png"
  },
  {
    "id": 920,
    "name": "烈腿蝗",
    "nameZh": "烈腿蝗",
    "nameEn": "Lokix",
    "types": [
      "bug",
      "dark"
    ],
    "generation": 9,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/920.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/920.png"
  },
  {
    "id": 921,
    "name": "布拨",
    "nameZh": "布拨",
    "nameEn": "Pawmi",
    "types": [
      "electric"
    ],
    "generation": 9,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/921.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/921.png"
  },
  {
    "id": 922,
    "name": "布土拨",
    "nameZh": "布土拨",
    "nameEn": "Pawmo",
    "types": [
      "electric",
      "fighting"
    ],
    "generation": 9,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/922.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/922.png"
  },
  {
    "id": 923,
    "name": "巴布土拨",
    "nameZh": "巴布土拨",
    "nameEn": "Pawmot",
    "types": [
      "electric",
      "fighting"
    ],
    "generation": 9,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/923.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/923.png"
  },
  {
    "id": 924,
    "name": "一对鼠",
    "nameZh": "一对鼠",
    "nameEn": "Tandemaus",
    "types": [
      "normal"
    ],
    "generation": 9,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/924.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/924.png"
  },
  {
    "id": 925,
    "name": "一家鼠",
    "nameZh": "一家鼠",
    "nameEn": "Maushold",
    "types": [
      "normal"
    ],
    "generation": 9,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/925.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/925.png"
  },
  {
    "id": 926,
    "name": "狗仔包",
    "nameZh": "狗仔包",
    "nameEn": "Fidough",
    "types": [
      "fairy"
    ],
    "generation": 9,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/926.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/926.png"
  },
  {
    "id": 927,
    "name": "麻花犬",
    "nameZh": "麻花犬",
    "nameEn": "Dachsbun",
    "types": [
      "fairy"
    ],
    "generation": 9,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/927.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/927.png"
  },
  {
    "id": 928,
    "name": "迷你芙",
    "nameZh": "迷你芙",
    "nameEn": "Smoliv",
    "types": [
      "grass",
      "normal"
    ],
    "generation": 9,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/928.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/928.png"
  },
  {
    "id": 929,
    "name": "奥利纽",
    "nameZh": "奥利纽",
    "nameEn": "Dolliv",
    "types": [
      "grass",
      "normal"
    ],
    "generation": 9,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/929.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/929.png"
  },
  {
    "id": 930,
    "name": "奥利瓦",
    "nameZh": "奥利瓦",
    "nameEn": "Arboliva",
    "types": [
      "grass",
      "normal"
    ],
    "generation": 9,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/930.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/930.png"
  },
  {
    "id": 931,
    "name": "怒鹦哥",
    "nameZh": "怒鹦哥",
    "nameEn": "Squawkabilly",
    "types": [
      "normal",
      "flying"
    ],
    "generation": 9,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/931.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/931.png"
  },
  {
    "id": 932,
    "name": "盐石宝",
    "nameZh": "盐石宝",
    "nameEn": "Nacli",
    "types": [
      "rock"
    ],
    "generation": 9,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/932.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/932.png"
  },
  {
    "id": 933,
    "name": "盐石垒",
    "nameZh": "盐石垒",
    "nameEn": "Naclstack",
    "types": [
      "rock"
    ],
    "generation": 9,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/933.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/933.png"
  },
  {
    "id": 934,
    "name": "盐石巨灵",
    "nameZh": "盐石巨灵",
    "nameEn": "Garganacl",
    "types": [
      "rock"
    ],
    "generation": 9,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/934.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/934.png"
  },
  {
    "id": 935,
    "name": "炭小侍",
    "nameZh": "炭小侍",
    "nameEn": "Charcadet",
    "types": [
      "fire"
    ],
    "generation": 9,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/935.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/935.png"
  },
  {
    "id": 936,
    "name": "红莲铠骑",
    "nameZh": "红莲铠骑",
    "nameEn": "Armarouge",
    "types": [
      "fire",
      "psychic"
    ],
    "generation": 9,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/936.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/936.png"
  },
  {
    "id": 937,
    "name": "苍炎刃鬼",
    "nameZh": "苍炎刃鬼",
    "nameEn": "Ceruledge",
    "types": [
      "fire",
      "ghost"
    ],
    "generation": 9,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/937.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/937.png"
  },
  {
    "id": 938,
    "name": "光蚪仔",
    "nameZh": "光蚪仔",
    "nameEn": "Tadbulb",
    "types": [
      "electric"
    ],
    "generation": 9,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/938.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/938.png"
  },
  {
    "id": 939,
    "name": "电肚蛙",
    "nameZh": "电肚蛙",
    "nameEn": "Bellibolt",
    "types": [
      "electric"
    ],
    "generation": 9,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/939.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/939.png"
  },
  {
    "id": 940,
    "name": "电海燕",
    "nameZh": "电海燕",
    "nameEn": "Wattrel",
    "types": [
      "electric",
      "flying"
    ],
    "generation": 9,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/940.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/940.png"
  },
  {
    "id": 941,
    "name": "大电海燕",
    "nameZh": "大电海燕",
    "nameEn": "Kilowattrel",
    "types": [
      "electric",
      "flying"
    ],
    "generation": 9,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/941.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/941.png"
  },
  {
    "id": 942,
    "name": "偶叫獒",
    "nameZh": "偶叫獒",
    "nameEn": "Maschiff",
    "types": [
      "dark"
    ],
    "generation": 9,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/942.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/942.png"
  },
  {
    "id": 943,
    "name": "獒教父",
    "nameZh": "獒教父",
    "nameEn": "Mabosstiff",
    "types": [
      "dark"
    ],
    "generation": 9,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/943.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/943.png"
  },
  {
    "id": 944,
    "name": "滋汁鼹",
    "nameZh": "滋汁鼹",
    "nameEn": "Shroodle",
    "types": [
      "poison",
      "normal"
    ],
    "generation": 9,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/944.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/944.png"
  },
  {
    "id": 945,
    "name": "涂标客",
    "nameZh": "涂标客",
    "nameEn": "Grafaiai",
    "types": [
      "poison",
      "normal"
    ],
    "generation": 9,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/945.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/945.png"
  },
  {
    "id": 946,
    "name": "纳噬草",
    "nameZh": "纳噬草",
    "nameEn": "Bramblin",
    "types": [
      "grass",
      "ghost"
    ],
    "generation": 9,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/946.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/946.png"
  },
  {
    "id": 947,
    "name": "怖纳噬草",
    "nameZh": "怖纳噬草",
    "nameEn": "Brambleghast",
    "types": [
      "grass",
      "ghost"
    ],
    "generation": 9,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/947.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/947.png"
  },
  {
    "id": 948,
    "name": "原野水母",
    "nameZh": "原野水母",
    "nameEn": "Toedscool",
    "types": [
      "ground",
      "grass"
    ],
    "generation": 9,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/948.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/948.png"
  },
  {
    "id": 949,
    "name": "陆地水母",
    "nameZh": "陆地水母",
    "nameEn": "Toedscruel",
    "types": [
      "ground",
      "grass"
    ],
    "generation": 9,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/949.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/949.png"
  },
  {
    "id": 950,
    "name": "毛崖蟹",
    "nameZh": "毛崖蟹",
    "nameEn": "Klawf",
    "types": [
      "rock"
    ],
    "generation": 9,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/950.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/950.png"
  },
  {
    "id": 951,
    "name": "热辣娃",
    "nameZh": "热辣娃",
    "nameEn": "Capsakid",
    "types": [
      "grass"
    ],
    "generation": 9,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/951.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/951.png"
  },
  {
    "id": 952,
    "name": "狠辣椒",
    "nameZh": "狠辣椒",
    "nameEn": "Scovillain",
    "types": [
      "grass",
      "fire"
    ],
    "generation": 9,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/952.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/952.png"
  },
  {
    "id": 953,
    "name": "虫滚泥",
    "nameZh": "虫滚泥",
    "nameEn": "Rellor",
    "types": [
      "bug"
    ],
    "generation": 9,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/953.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/953.png"
  },
  {
    "id": 954,
    "name": "虫甲圣",
    "nameZh": "虫甲圣",
    "nameEn": "Rabsca",
    "types": [
      "bug",
      "psychic"
    ],
    "generation": 9,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/954.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/954.png"
  },
  {
    "id": 955,
    "name": "飘飘雏",
    "nameZh": "飘飘雏",
    "nameEn": "Flittle",
    "types": [
      "psychic"
    ],
    "generation": 9,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/955.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/955.png"
  },
  {
    "id": 956,
    "name": "超能艳鸵",
    "nameZh": "超能艳鸵",
    "nameEn": "Espathra",
    "types": [
      "psychic"
    ],
    "generation": 9,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/956.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/956.png"
  },
  {
    "id": 957,
    "name": "小锻匠",
    "nameZh": "小锻匠",
    "nameEn": "Tinkatink",
    "types": [
      "fairy",
      "steel"
    ],
    "generation": 9,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/957.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/957.png"
  },
  {
    "id": 958,
    "name": "巧锻匠",
    "nameZh": "巧锻匠",
    "nameEn": "Tinkatuff",
    "types": [
      "fairy",
      "steel"
    ],
    "generation": 9,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/958.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/958.png"
  },
  {
    "id": 959,
    "name": "巨锻匠",
    "nameZh": "巨锻匠",
    "nameEn": "Tinkaton",
    "types": [
      "fairy",
      "steel"
    ],
    "generation": 9,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/959.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/959.png"
  },
  {
    "id": 960,
    "name": "海地鼠",
    "nameZh": "海地鼠",
    "nameEn": "Wiglett",
    "types": [
      "water"
    ],
    "generation": 9,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/960.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/960.png"
  },
  {
    "id": 961,
    "name": "三海地鼠",
    "nameZh": "三海地鼠",
    "nameEn": "Wugtrio",
    "types": [
      "water"
    ],
    "generation": 9,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/961.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/961.png"
  },
  {
    "id": 962,
    "name": "下石鸟",
    "nameZh": "下石鸟",
    "nameEn": "Bombirdier",
    "types": [
      "flying",
      "dark"
    ],
    "generation": 9,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/962.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/962.png"
  },
  {
    "id": 963,
    "name": "波普海豚",
    "nameZh": "波普海豚",
    "nameEn": "Finizen",
    "types": [
      "water"
    ],
    "generation": 9,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/963.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/963.png"
  },
  {
    "id": 964,
    "name": "海豚侠",
    "nameZh": "海豚侠",
    "nameEn": "Palafin",
    "types": [
      "water"
    ],
    "generation": 9,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/964.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/964.png"
  },
  {
    "id": 965,
    "name": "噗隆隆",
    "nameZh": "噗隆隆",
    "nameEn": "Varoom",
    "types": [
      "steel",
      "poison"
    ],
    "generation": 9,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/965.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/965.png"
  },
  {
    "id": 966,
    "name": "普隆隆姆",
    "nameZh": "普隆隆姆",
    "nameEn": "Revavroom",
    "types": [
      "steel",
      "poison"
    ],
    "generation": 9,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/966.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/966.png"
  },
  {
    "id": 967,
    "name": "摩托蜥",
    "nameZh": "摩托蜥",
    "nameEn": "Cyclizar",
    "types": [
      "dragon",
      "normal"
    ],
    "generation": 9,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/967.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/967.png"
  },
  {
    "id": 968,
    "name": "拖拖蚓",
    "nameZh": "拖拖蚓",
    "nameEn": "Orthworm",
    "types": [
      "steel"
    ],
    "generation": 9,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/968.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/968.png"
  },
  {
    "id": 969,
    "name": "晶光芽",
    "nameZh": "晶光芽",
    "nameEn": "Glimmet",
    "types": [
      "rock",
      "poison"
    ],
    "generation": 9,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/969.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/969.png"
  },
  {
    "id": 970,
    "name": "晶光花",
    "nameZh": "晶光花",
    "nameEn": "Glimmora",
    "types": [
      "rock",
      "poison"
    ],
    "generation": 9,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/970.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/970.png"
  },
  {
    "id": 971,
    "name": "墓仔狗",
    "nameZh": "墓仔狗",
    "nameEn": "Greavard",
    "types": [
      "ghost"
    ],
    "generation": 9,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/971.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/971.png"
  },
  {
    "id": 972,
    "name": "墓扬犬",
    "nameZh": "墓扬犬",
    "nameEn": "Houndstone",
    "types": [
      "ghost"
    ],
    "generation": 9,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/972.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/972.png"
  },
  {
    "id": 973,
    "name": "纏红鹤",
    "nameZh": "纏红鹤",
    "nameEn": "Flamigo",
    "types": [
      "flying",
      "fighting"
    ],
    "generation": 9,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/973.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/973.png"
  },
  {
    "id": 974,
    "name": "走鲸",
    "nameZh": "走鲸",
    "nameEn": "Cetoddle",
    "types": [
      "ice"
    ],
    "generation": 9,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/974.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/974.png"
  },
  {
    "id": 975,
    "name": "浩大鲸",
    "nameZh": "浩大鲸",
    "nameEn": "Cetitan",
    "types": [
      "ice"
    ],
    "generation": 9,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/975.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/975.png"
  },
  {
    "id": 976,
    "name": "轻身鳕",
    "nameZh": "轻身鳕",
    "nameEn": "Veluza",
    "types": [
      "water",
      "psychic"
    ],
    "generation": 9,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/976.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/976.png"
  },
  {
    "id": 977,
    "name": "吃吼霸",
    "nameZh": "吃吼霸",
    "nameEn": "Dondozo",
    "types": [
      "water"
    ],
    "generation": 9,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/977.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/977.png"
  },
  {
    "id": 978,
    "name": "米立龙",
    "nameZh": "米立龙",
    "nameEn": "Tatsugiri",
    "types": [
      "dragon",
      "water"
    ],
    "generation": 9,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/978.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/978.png"
  },
  {
    "id": 979,
    "name": "弃世猴",
    "nameZh": "弃世猴",
    "nameEn": "Annihilape",
    "types": [
      "fighting",
      "ghost"
    ],
    "generation": 9,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/979.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/979.png"
  },
  {
    "id": 980,
    "name": "土王",
    "nameZh": "土王",
    "nameEn": "Clodsire",
    "types": [
      "poison",
      "ground"
    ],
    "generation": 9,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/980.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/980.png"
  },
  {
    "id": 981,
    "name": "奇麒麟",
    "nameZh": "奇麒麟",
    "nameEn": "Farigiraf",
    "types": [
      "normal",
      "psychic"
    ],
    "generation": 9,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/981.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/981.png"
  },
  {
    "id": 982,
    "name": "土龙节节",
    "nameZh": "土龙节节",
    "nameEn": "Dudunsparce",
    "types": [
      "normal"
    ],
    "generation": 9,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/982.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/982.png"
  },
  {
    "id": 983,
    "name": "仆刀将军",
    "nameZh": "仆刀将军",
    "nameEn": "Kingambit",
    "types": [
      "dark",
      "steel"
    ],
    "generation": 9,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/983.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/983.png"
  },
  {
    "id": 984,
    "name": "雄伟牙",
    "nameZh": "雄伟牙",
    "nameEn": "Great Tusk",
    "types": [
      "ground",
      "fighting"
    ],
    "generation": 9,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/984.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/984.png"
  },
  {
    "id": 985,
    "name": "吼叫尾",
    "nameZh": "吼叫尾",
    "nameEn": "Scream Tail",
    "types": [
      "fairy",
      "psychic"
    ],
    "generation": 9,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/985.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/985.png"
  },
  {
    "id": 986,
    "name": "猛恶菇",
    "nameZh": "猛恶菇",
    "nameEn": "Brute Bonnet",
    "types": [
      "grass",
      "dark"
    ],
    "generation": 9,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/986.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/986.png"
  },
  {
    "id": 987,
    "name": "振翼发",
    "nameZh": "振翼发",
    "nameEn": "Flutter Mane",
    "types": [
      "ghost",
      "fairy"
    ],
    "generation": 9,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/987.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/987.png"
  },
  {
    "id": 988,
    "name": "爬地翅",
    "nameZh": "爬地翅",
    "nameEn": "Slither Wing",
    "types": [
      "bug",
      "fighting"
    ],
    "generation": 9,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/988.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/988.png"
  },
  {
    "id": 989,
    "name": "沙铁皮",
    "nameZh": "沙铁皮",
    "nameEn": "Sandy Shocks",
    "types": [
      "electric",
      "ground"
    ],
    "generation": 9,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/989.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/989.png"
  },
  {
    "id": 990,
    "name": "铁轍迹",
    "nameZh": "铁轍迹",
    "nameEn": "Iron Treads",
    "types": [
      "ground",
      "steel"
    ],
    "generation": 9,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/990.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/990.png"
  },
  {
    "id": 991,
    "name": "铁包袱",
    "nameZh": "铁包袱",
    "nameEn": "Iron Bundle",
    "types": [
      "ice",
      "water"
    ],
    "generation": 9,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/991.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/991.png"
  },
  {
    "id": 992,
    "name": "铁臂膀",
    "nameZh": "铁臂膀",
    "nameEn": "Iron Hands",
    "types": [
      "fighting",
      "electric"
    ],
    "generation": 9,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/992.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/992.png"
  },
  {
    "id": 993,
    "name": "铁脖颈",
    "nameZh": "铁脖颈",
    "nameEn": "Iron Jugulis",
    "types": [
      "dark",
      "flying"
    ],
    "generation": 9,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/993.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/993.png"
  },
  {
    "id": 994,
    "name": "铁毒蛾",
    "nameZh": "铁毒蛾",
    "nameEn": "Iron Moth",
    "types": [
      "fire",
      "poison"
    ],
    "generation": 9,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/994.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/994.png"
  },
  {
    "id": 995,
    "name": "铁荆棘",
    "nameZh": "铁荆棘",
    "nameEn": "Iron Thorns",
    "types": [
      "rock",
      "electric"
    ],
    "generation": 9,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/995.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/995.png"
  },
  {
    "id": 996,
    "name": "凉脊龙",
    "nameZh": "凉脊龙",
    "nameEn": "Frigibax",
    "types": [
      "dragon",
      "ice"
    ],
    "generation": 9,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/996.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/996.png"
  },
  {
    "id": 997,
    "name": "冻脊龙",
    "nameZh": "冻脊龙",
    "nameEn": "Arctibax",
    "types": [
      "dragon",
      "ice"
    ],
    "generation": 9,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/997.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/997.png"
  },
  {
    "id": 998,
    "name": "戟脊龙",
    "nameZh": "戟脊龙",
    "nameEn": "Baxcalibur",
    "types": [
      "dragon",
      "ice"
    ],
    "generation": 9,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/998.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/998.png"
  },
  {
    "id": 999,
    "name": "索财灵",
    "nameZh": "索财灵",
    "nameEn": "Gimmighoul",
    "types": [
      "ghost"
    ],
    "generation": 9,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/999.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/999.png"
  },
  {
    "id": 1000,
    "name": "赛富豪",
    "nameZh": "赛富豪",
    "nameEn": "Gholdengo",
    "types": [
      "steel",
      "ghost"
    ],
    "generation": 9,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1000.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1000.png"
  },
  {
    "id": 1001,
    "name": "古简蜗",
    "nameZh": "古简蜗",
    "nameEn": "Wo-Chien",
    "types": [
      "dark",
      "grass"
    ],
    "generation": 9,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1001.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1001.png"
  },
  {
    "id": 1002,
    "name": "古剑豹",
    "nameZh": "古剑豹",
    "nameEn": "Chien-Pao",
    "types": [
      "dark",
      "ice"
    ],
    "generation": 9,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1002.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1002.png"
  },
  {
    "id": 1003,
    "name": "古鼎鹿",
    "nameZh": "古鼎鹿",
    "nameEn": "Ting-Lu",
    "types": [
      "dark",
      "ground"
    ],
    "generation": 9,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1003.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1003.png"
  },
  {
    "id": 1004,
    "name": "古玉鱼",
    "nameZh": "古玉鱼",
    "nameEn": "Chi-Yu",
    "types": [
      "dark",
      "fire"
    ],
    "generation": 9,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1004.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1004.png"
  },
  {
    "id": 1005,
    "name": "轰鸣月",
    "nameZh": "轰鸣月",
    "nameEn": "Roaring Moon",
    "types": [
      "dragon",
      "dark"
    ],
    "generation": 9,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1005.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1005.png"
  },
  {
    "id": 1006,
    "name": "铁武者",
    "nameZh": "铁武者",
    "nameEn": "Iron Valiant",
    "types": [
      "fairy",
      "fighting"
    ],
    "generation": 9,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1006.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1006.png"
  },
  {
    "id": 1007,
    "name": "故勒顿",
    "nameZh": "故勒顿",
    "nameEn": "Koraidon",
    "types": [
      "fighting",
      "dragon"
    ],
    "generation": 9,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1007.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1007.png"
  },
  {
    "id": 1008,
    "name": "密勒顿",
    "nameZh": "密勒顿",
    "nameEn": "Miraidon",
    "types": [
      "electric",
      "dragon"
    ],
    "generation": 9,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1008.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1008.png"
  },
  {
    "id": 1009,
    "name": "波荡水",
    "nameZh": "波荡水",
    "nameEn": "Walking Wake",
    "types": [
      "water",
      "dragon"
    ],
    "generation": 9,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1009.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1009.png"
  },
  {
    "id": 1010,
    "name": "铁斑叶",
    "nameZh": "铁斑叶",
    "nameEn": "Iron Leaves",
    "types": [
      "grass",
      "psychic"
    ],
    "generation": 9,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1010.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1010.png"
  },
  {
    "id": 1011,
    "name": "裹蜜虫",
    "nameZh": "裹蜜虫",
    "nameEn": "Dipplin",
    "types": [
      "grass",
      "dragon"
    ],
    "generation": 9,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1011.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1011.png"
  },
  {
    "id": 1012,
    "name": "斯魔茶",
    "nameZh": "斯魔茶",
    "nameEn": "Poltchageist",
    "types": [
      "grass",
      "ghost"
    ],
    "generation": 9,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1012.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1012.png"
  },
  {
    "id": 1013,
    "name": "来悲粗茶",
    "nameZh": "来悲粗茶",
    "nameEn": "Sinistcha",
    "types": [
      "grass",
      "ghost"
    ],
    "generation": 9,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1013.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1013.png"
  },
  {
    "id": 1014,
    "name": "够赞狗",
    "nameZh": "够赞狗",
    "nameEn": "Okidogi",
    "types": [
      "poison",
      "fighting"
    ],
    "generation": 9,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1014.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1014.png"
  },
  {
    "id": 1015,
    "name": "愿增猿",
    "nameZh": "愿增猿",
    "nameEn": "Munkidori",
    "types": [
      "poison",
      "psychic"
    ],
    "generation": 9,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1015.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1015.png"
  },
  {
    "id": 1016,
    "name": "吉雉鸡",
    "nameZh": "吉雉鸡",
    "nameEn": "Fezandipiti",
    "types": [
      "poison",
      "fairy"
    ],
    "generation": 9,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1016.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1016.png"
  },
  {
    "id": 1017,
    "name": "厄诡椪",
    "nameZh": "厄诡椪",
    "nameEn": "Ogerpon",
    "types": [
      "grass"
    ],
    "generation": 9,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1017.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1017.png"
  },
  {
    "id": 1018,
    "name": "铝钢桥龙",
    "nameZh": "铝钢桥龙",
    "nameEn": "Archaludon",
    "types": [
      "steel",
      "dragon"
    ],
    "generation": 9,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1018.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1018.png"
  },
  {
    "id": 1019,
    "name": "蜜集大蛇",
    "nameZh": "蜜集大蛇",
    "nameEn": "Hydrapple",
    "types": [
      "grass",
      "dragon"
    ],
    "generation": 9,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1019.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1019.png"
  },
  {
    "id": 1020,
    "name": "破空焰",
    "nameZh": "破空焰",
    "nameEn": "Gouging Fire",
    "types": [
      "fire",
      "dragon"
    ],
    "generation": 9,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1020.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1020.png"
  },
  {
    "id": 1021,
    "name": "猛雷鼓",
    "nameZh": "猛雷鼓",
    "nameEn": "Raging Bolt",
    "types": [
      "electric",
      "dragon"
    ],
    "generation": 9,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1021.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1021.png"
  },
  {
    "id": 1022,
    "name": "鐵磐岩",
    "nameZh": "鐵磐岩",
    "nameEn": "Iron Boulder",
    "types": [
      "rock",
      "psychic"
    ],
    "generation": 9,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1022.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1022.png"
  },
  {
    "id": 1023,
    "name": "鐵頭殼",
    "nameZh": "鐵頭殼",
    "nameEn": "Iron Crown",
    "types": [
      "steel",
      "psychic"
    ],
    "generation": 9,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1023.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1023.png"
  },
  {
    "id": 1024,
    "name": "太乐巴戈斯",
    "nameZh": "太乐巴戈斯",
    "nameEn": "Terapagos",
    "types": [
      "normal"
    ],
    "generation": 9,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1024.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1024.png"
  },
  {
    "id": 1025,
    "name": "桃歹郎",
    "nameZh": "桃歹郎",
    "nameEn": "Pecharunt",
    "types": [
      "poison",
      "ghost"
    ],
    "generation": 9,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1025.png",
    "artworkUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1025.png"
  }
] as const satisfies readonly LocalPokemonIndexItem[];

export const getLocalPokemonDisplayName = (
  pokemon: LocalPokemonIndexItem,
  language: PokeApiLanguage
): string => {
  return language === 'zh-hans' ? pokemon.nameZh : pokemon.nameEn;
};
