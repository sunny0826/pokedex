import { PokemonType } from './pokemon';
import type { AppLanguage } from '@/lib/i18n';

// 状态效果类型
export type StatusEffect = 'burn' | 'poison' | 'paralysis' | 'freeze' | 'sleep' | 'confusion';

export interface StatusEffectInfo {
  id: StatusEffect;
  name: string;
  nameEn: string;
  icon: string;
  color: string;
  description: string;
  descriptionEn: string;
}

export const statusEffects: Record<StatusEffect, StatusEffectInfo> = {
  burn: { id: 'burn', name: '灼伤', nameEn: 'Burn', icon: '🔥', color: 'bg-orange-500', description: '每回合损失最大HP的1/16，物理攻击减半', descriptionEn: 'Loses 1/16 max HP each turn and physical attack is halved' },
  poison: { id: 'poison', name: '中毒', nameEn: 'Poison', icon: '☠️', color: 'bg-purple-500', description: '每回合损失最大HP的1/8', descriptionEn: 'Loses 1/8 max HP each turn' },
  paralysis: { id: 'paralysis', name: '麻痹', nameEn: 'Paralysis', icon: '⚡', color: 'bg-yellow-500', description: '速度减半，25%几率无法行动', descriptionEn: 'Speed is halved with a 25% chance to be unable to act' },
  freeze: { id: 'freeze', name: '冰冻', nameEn: 'Freeze', icon: '❄️', color: 'bg-cyan-400', description: '无法行动，每回合20%几率解冻', descriptionEn: 'Cannot act and has a 20% chance to thaw each turn' },
  sleep: { id: 'sleep', name: '睡眠', nameEn: 'Sleep', icon: '💤', color: 'bg-indigo-400', description: '无法行动，持续1-3回合后苏醒', descriptionEn: 'Cannot act and wakes after 1-3 turns' },
  confusion: { id: 'confusion', name: '混乱', nameEn: 'Confusion', icon: '💫', color: 'bg-pink-400', description: '33%几率攻击自己，持续2-5回合', descriptionEn: '33% chance to hurt itself for 2-5 turns' },
};

export interface Move {
  id: string;
  name: string;
  nameEn: string;
  type: PokemonType;
  power: number;
  accuracy: number;
  category: 'physical' | 'special' | 'status';
  pp: number;
  description: string;
  statusEffect?: StatusEffect;
  statusChance?: number; // 0-100
}

// Move with current PP tracking for battle
export interface MoveWithPP extends Move {
  currentPp: number;
}

// 每个属性的代表性技能（添加状态效果）
export const movesByType: Record<PokemonType, Move[]> = {
  normal: [
    { id: 'tackle', name: '撞击', nameEn: 'Tackle', type: 'normal', power: 40, accuracy: 100, category: 'physical', pp: 35, description: '用整个身体撞向对手进行攻击。' },
    { id: 'body-slam', name: '泰山压顶', nameEn: 'Body Slam', type: 'normal', power: 85, accuracy: 100, category: 'physical', pp: 15, description: '用整个身体压向对手进行攻击。有时会让对手陷入麻痹状态。', statusEffect: 'paralysis', statusChance: 30 },
    { id: 'hyper-beam', name: '破坏光线', nameEn: 'Hyper Beam', type: 'normal', power: 150, accuracy: 90, category: 'special', pp: 5, description: '发射强力光线攻击对手。下一回合自己将无法动弹。' },
  ],
  fire: [
    { id: 'ember', name: '火花', nameEn: 'Ember', type: 'fire', power: 40, accuracy: 100, category: 'special', pp: 25, description: '向对手发射小型火焰进行攻击。有时会让对手陷入灼伤状态。', statusEffect: 'burn', statusChance: 10 },
    { id: 'flamethrower', name: '喷射火焰', nameEn: 'Flamethrower', type: 'fire', power: 90, accuracy: 100, category: 'special', pp: 15, description: '用烈焰烧尽对手进行攻击。有时会让对手陷入灼伤状态。', statusEffect: 'burn', statusChance: 10 },
    { id: 'fire-blast', name: '大字爆炎', nameEn: 'Fire Blast', type: 'fire', power: 110, accuracy: 85, category: 'special', pp: 5, description: '用大字形状的火焰烧尽对手。有时会让对手陷入灼伤状态。', statusEffect: 'burn', statusChance: 30 },
  ],
  water: [
    { id: 'water-gun', name: '水枪', nameEn: 'Water Gun', type: 'water', power: 40, accuracy: 100, category: 'special', pp: 25, description: '向对手猛烈地喷射水流进行攻击。' },
    { id: 'surf', name: '冲浪', nameEn: 'Surf', type: 'water', power: 90, accuracy: 100, category: 'special', pp: 15, description: '利用大浪攻击自己周围所有的宝可梦。' },
    { id: 'hydro-pump', name: '水炮', nameEn: 'Hydro Pump', type: 'water', power: 110, accuracy: 80, category: 'special', pp: 5, description: '向对手猛烈地喷射大量水流进行攻击。' },
  ],
  electric: [
    { id: 'thunder-shock', name: '电击', nameEn: 'Thunder Shock', type: 'electric', power: 40, accuracy: 100, category: 'special', pp: 30, description: '发射电流攻击对手。有时会让对手陷入麻痹状态。', statusEffect: 'paralysis', statusChance: 10 },
    { id: 'thunderbolt', name: '十万伏特', nameEn: 'Thunderbolt', type: 'electric', power: 90, accuracy: 100, category: 'special', pp: 15, description: '向对手发送强烈的电击进行攻击。有时会让对手陷入麻痹状态。', statusEffect: 'paralysis', statusChance: 10 },
    { id: 'thunder', name: '打雷', nameEn: 'Thunder', type: 'electric', power: 110, accuracy: 70, category: 'special', pp: 10, description: '向对手劈下暴雷进行攻击。有时会让对手陷入麻痹状态。', statusEffect: 'paralysis', statusChance: 30 },
  ],
  grass: [
    { id: 'vine-whip', name: '藤鞭', nameEn: 'Vine Whip', type: 'grass', power: 45, accuracy: 100, category: 'physical', pp: 25, description: '用如同鞭子般弯曲细长的藤蔓摔打对手进行攻击。' },
    { id: 'razor-leaf', name: '飞叶快刀', nameEn: 'Razor Leaf', type: 'grass', power: 55, accuracy: 95, category: 'physical', pp: 25, description: '飞出叶片，切斩对手进行攻击。容易击中要害。' },
    { id: 'solar-beam', name: '日光束', nameEn: 'Solar Beam', type: 'grass', power: 120, accuracy: 100, category: 'special', pp: 10, description: '第1回合收集满满的日光，第2回合发射光束进行攻击。' },
  ],
  ice: [
    { id: 'ice-shard', name: '冰砾', nameEn: 'Ice Shard', type: 'ice', power: 40, accuracy: 100, category: 'physical', pp: 30, description: '瞬间制作冰块，快速地掷向对手。必定能够先制攻击。' },
    { id: 'ice-beam', name: '冰冻光线', nameEn: 'Ice Beam', type: 'ice', power: 90, accuracy: 100, category: 'special', pp: 10, description: '向对手发射冰冻光线进行攻击。有时会让对手陷入冰冻状态。', statusEffect: 'freeze', statusChance: 10 },
    { id: 'blizzard', name: '暴风雪', nameEn: 'Blizzard', type: 'ice', power: 110, accuracy: 70, category: 'special', pp: 5, description: '用猛烈的暴风雪攻击对手。有时会让对手陷入冰冻状态。', statusEffect: 'freeze', statusChance: 10 },
  ],
  fighting: [
    { id: 'karate-chop', name: '空手劈', nameEn: 'Karate Chop', type: 'fighting', power: 50, accuracy: 100, category: 'physical', pp: 25, description: '用锋利的手刀劈向对手进行攻击。容易击中要害。' },
    { id: 'brick-break', name: '劈瓦', nameEn: 'Brick Break', type: 'fighting', power: 75, accuracy: 100, category: 'physical', pp: 15, description: '用手刀劈向对手进行攻击。还可以破坏光墙和反射壁等。' },
    { id: 'close-combat', name: '近身战', nameEn: 'Close Combat', type: 'fighting', power: 120, accuracy: 100, category: 'physical', pp: 5, description: '放弃守护，向对手的身边接近并进行攻击。自己的防御和特防会降低。' },
  ],
  poison: [
    { id: 'poison-sting', name: '毒针', nameEn: 'Poison Sting', type: 'poison', power: 15, accuracy: 100, category: 'physical', pp: 35, description: '将有毒的针刺入对手进行攻击。有时会让对手陷入中毒状态。', statusEffect: 'poison', statusChance: 30 },
    { id: 'sludge-bomb', name: '污泥炸弹', nameEn: 'Sludge Bomb', type: 'poison', power: 90, accuracy: 100, category: 'special', pp: 10, description: '用污泥投掷对手进行攻击。有时会让对手陷入中毒状态。', statusEffect: 'poison', statusChance: 30 },
    { id: 'gunk-shot', name: '垃圾射击', nameEn: 'Gunk Shot', type: 'poison', power: 120, accuracy: 80, category: 'physical', pp: 5, description: '用肮脏的垃圾撞向对手进行攻击。有时会让对手陷入中毒状态。', statusEffect: 'poison', statusChance: 30 },
  ],
  ground: [
    { id: 'mud-slap', name: '掷泥', nameEn: 'Mud-Slap', type: 'ground', power: 20, accuracy: 100, category: 'special', pp: 10, description: '向对手的脸等投掷泥巴进行攻击。会降低对手的命中率。' },
    { id: 'dig', name: '挖洞', nameEn: 'Dig', type: 'ground', power: 80, accuracy: 100, category: 'physical', pp: 10, description: '第1回合钻入地底，第2回合攻击对手。' },
    { id: 'earthquake', name: '地震', nameEn: 'Earthquake', type: 'ground', power: 100, accuracy: 100, category: 'physical', pp: 10, description: '利用地震的冲击，攻击自己周围所有的宝可梦。' },
  ],
  flying: [
    { id: 'gust', name: '起风', nameEn: 'Gust', type: 'flying', power: 40, accuracy: 100, category: 'special', pp: 35, description: '用翅膀将刮起的狂风袭向对手进行攻击。' },
    { id: 'aerial-ace', name: '燕返', nameEn: 'Aerial Ace', type: 'flying', power: 60, accuracy: 999, category: 'physical', pp: 20, description: '以迅雷不及掩耳之势接近对手，进行切斩。攻击必定会命中。' },
    { id: 'brave-bird', name: '勇鸟猛攻', nameEn: 'Brave Bird', type: 'flying', power: 120, accuracy: 100, category: 'physical', pp: 15, description: '收起翅膀，以低空飞行突进对手。自己也会受到不小的伤害。' },
  ],
  psychic: [
    { id: 'confusion', name: '念力', nameEn: 'Confusion', type: 'psychic', power: 50, accuracy: 100, category: 'special', pp: 25, description: '向对手发送弱小的念力进行攻击。有时会使对手混乱。', statusEffect: 'confusion', statusChance: 10 },
    { id: 'psychic', name: '精神强念', nameEn: 'Psychic', type: 'psychic', power: 90, accuracy: 100, category: 'special', pp: 10, description: '向对手发送强大的念力进行攻击。有时会降低对手的特防。' },
    { id: 'psystrike', name: '精神击破', nameEn: 'Psystrike', type: 'psychic', power: 100, accuracy: 100, category: 'special', pp: 10, description: '将神奇的念波实体化攻击对手。给予对手物理伤害。' },
  ],
  bug: [
    { id: 'bug-bite', name: '虫咬', nameEn: 'Bug Bite', type: 'bug', power: 60, accuracy: 100, category: 'physical', pp: 20, description: '咬住进行攻击。当对手携带树果时，可以食用并获得其效果。' },
    { id: 'x-scissor', name: 'X 剪', nameEn: 'X-Scissor', type: 'bug', power: 80, accuracy: 100, category: 'physical', pp: 15, description: '用如剪刀般交叉的镰刀或爪子劈开对手进行攻击。' },
    { id: 'megahorn', name: '超级角击', nameEn: 'Megahorn', type: 'bug', power: 120, accuracy: 85, category: 'physical', pp: 10, description: '用坚硬且华丽的角刺向对手进行攻击。' },
  ],
  rock: [
    { id: 'rock-throw', name: '落石', nameEn: 'Rock Throw', type: 'rock', power: 50, accuracy: 90, category: 'physical', pp: 15, description: '拿起小岩石，投掷对手进行攻击。' },
    { id: 'rock-slide', name: '岩崩', nameEn: 'Rock Slide', type: 'rock', power: 75, accuracy: 90, category: 'physical', pp: 10, description: '将大岩石猛烈地撞向对手进行攻击。有时会使对手畏缩。' },
    { id: 'stone-edge', name: '尖石攻击', nameEn: 'Stone Edge', type: 'rock', power: 100, accuracy: 80, category: 'physical', pp: 5, description: '用尖尖的岩石刺入对手进行攻击。容易击中要害。' },
  ],
  ghost: [
    { id: 'lick', name: '舌舔', nameEn: 'Lick', type: 'ghost', power: 30, accuracy: 100, category: 'physical', pp: 30, description: '用长长的舌头舔对手进行攻击。有时会让对手陷入麻痹状态。', statusEffect: 'paralysis', statusChance: 30 },
    { id: 'shadow-ball', name: '暗影球', nameEn: 'Shadow Ball', type: 'ghost', power: 80, accuracy: 100, category: 'special', pp: 15, description: '投掷一团黑影进行攻击。有时会降低对手的特防。' },
    { id: 'shadow-force', name: '暗影潜袭', nameEn: 'Shadow Force', type: 'ghost', power: 120, accuracy: 100, category: 'physical', pp: 5, description: '第1回合消失踪影，第2回合攻击对手。连守护也能击破。' },
  ],
  dragon: [
    { id: 'dragon-rage', name: '龙之怒', nameEn: 'Dragon Rage', type: 'dragon', power: 40, accuracy: 100, category: 'special', pp: 10, description: '将愤怒的冲击波撞向对手进行攻击。必定给予40的固定伤害。' },
    { id: 'dragon-claw', name: '龙爪', nameEn: 'Dragon Claw', type: 'dragon', power: 80, accuracy: 100, category: 'physical', pp: 15, description: '用尖锐的巨爪劈开对手进行攻击。' },
    { id: 'outrage', name: '逆鳞', nameEn: 'Outrage', type: 'dragon', power: 120, accuracy: 100, category: 'physical', pp: 10, description: '在2～3回合内，乱打一通地进行攻击。大闹一番后自己会陷入混乱。', statusEffect: 'confusion', statusChance: 100 },
  ],
  dark: [
    { id: 'bite', name: '咬住', nameEn: 'Bite', type: 'dark', power: 60, accuracy: 100, category: 'physical', pp: 25, description: '用尖锐的牙齿咬住对手进行攻击。有时会使对手畏缩。' },
    { id: 'crunch', name: '咬碎', nameEn: 'Crunch', type: 'dark', power: 80, accuracy: 100, category: 'physical', pp: 15, description: '用利牙咬碎对手进行攻击。有时会降低对手的防御。' },
    { id: 'dark-pulse', name: '恶之波动', nameEn: 'Dark Pulse', type: 'dark', power: 80, accuracy: 100, category: 'special', pp: 15, description: '从体内发出充满邪恶的气场进行攻击。有时会使对手畏缩。' },
  ],
  steel: [
    { id: 'metal-claw', name: '金属爪', nameEn: 'Metal Claw', type: 'steel', power: 50, accuracy: 95, category: 'physical', pp: 35, description: '用钢铁的爪子劈开对手进行攻击。有时会提高自己的攻击。' },
    { id: 'iron-head', name: '铁头', nameEn: 'Iron Head', type: 'steel', power: 80, accuracy: 100, category: 'physical', pp: 15, description: '用钢铁般坚硬的头撞向对手进行攻击。有时会使对手畏缩。' },
    { id: 'flash-cannon', name: '加农光炮', nameEn: 'Flash Cannon', type: 'steel', power: 80, accuracy: 100, category: 'special', pp: 10, description: '将身体的光芒聚集在一点释放出去。有时会降低对手的特防。' },
  ],
  fairy: [
    { id: 'fairy-wind', name: '妖精之风', nameEn: 'Fairy Wind', type: 'fairy', power: 40, accuracy: 100, category: 'special', pp: 30, description: '刮起妖精之风，吹向对手进行攻击。' },
    { id: 'dazzling-gleam', name: '魔法闪耀', nameEn: 'Dazzling Gleam', type: 'fairy', power: 80, accuracy: 100, category: 'special', pp: 10, description: '向对手发射强光，给予伤害。' },
    { id: 'moonblast', name: '月亮之力', nameEn: 'Moonblast', type: 'fairy', power: 95, accuracy: 100, category: 'special', pp: 15, description: '借用月亮的力量进行攻击。有时会降低对手的特攻。' },
  ],
};

// 为宝可梦生成技能列表（基于其属性）
export const generateMovesForPokemon = (types: PokemonType[]): MoveWithPP[] => {
  const moves: Move[] = [];
  
  // 从每个属性获取2个技能
  types.forEach(type => {
    const typeMoves = movesByType[type];
    if (typeMoves.length >= 2) {
      // 获取一个弱技能和一个强技能
      moves.push(typeMoves[0]); // 弱技能
      moves.push(typeMoves[typeMoves.length - 1]); // 强技能
    } else {
      moves.push(...typeMoves);
    }
  });
  
  // 如果只有一个属性，添加一般属性的技能
  if (types.length === 1 && moves.length < 4) {
    const normalMoves = movesByType.normal;
    moves.push(normalMoves[1]); // 泰山压顶
  }
  
  // 确保最多4个技能，并添加当前PP
  return moves.slice(0, 4).map(move => ({
    ...move,
    currentPp: move.pp,
  }));
};

export const getMoveName = (move: Move, language: AppLanguage = 'zh'): string => {
  return language === 'en' ? move.nameEn : move.name;
};

export const getStatusEffectName = (effect: StatusEffect, language: AppLanguage = 'zh'): string => {
  const status = statusEffects[effect];
  return language === 'en' ? status.nameEn : status.name;
};

export const getStatusEffectDescription = (effect: StatusEffect, language: AppLanguage = 'zh'): string => {
  const status = statusEffects[effect];
  return language === 'en' ? status.descriptionEn : status.description;
};
