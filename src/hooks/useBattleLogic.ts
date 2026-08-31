import { useState, useCallback, useEffect } from 'react';
import { Pokemon, PokemonType } from '@/data/pokemon';
import { Move, MoveWithPP, generateMovesForPokemon, getMoveName, getStatusEffectName, StatusEffect } from '@/data/moves';
import { usePokemonDetail } from '@/hooks/usePokemon';
import { TranslationKey } from '@/lib/i18n';
import { allTypes, getTypeEffectiveness, typeChart } from '@/lib/typeEffectiveness';
import { useI18n } from './useI18n';

export { allTypes, getTypeEffectiveness, typeChart };

// 状态效果持续信息
export interface ActiveStatus {
  effect: StatusEffect;
  turnsRemaining?: number; // 用于睡眠和混乱
}

// Battle state types
export interface BattleState {
  hp1: number;
  hp2: number;
  maxHp1: number;
  maxHp2: number;
  turn: number;
  currentAttacker: 1 | 2;
  phase: 'idle' | 'selecting' | 'battling' | 'attacking' | 'damaged' | 'status' | 'finished';
  winner: 1 | 2 | null;
  battleLog: BattleLogEntry[];
  speed: number;
  battleMode: 'auto' | 'manual';
  pokemon1Moves: MoveWithPP[];
  pokemon2Moves: MoveWithPP[];
  waitingForMove: boolean;
  status1: ActiveStatus | null;
  status2: ActiveStatus | null;
}

export interface BattleLogEntry {
  turn: number;
  attacker: string;
  defender: string;
  damage: number;
  effectiveness: number;
  isCritical: boolean;
  message: string;
  moveName?: string;
  statusApplied?: StatusEffect;
  statusDamage?: number;
}

// Calculate damage using simplified Pokemon formula
const calculateDamage = (
  attacker: Pokemon,
  defender: Pokemon,
  move: Move,
  attackerStatus: ActiveStatus | null
): { damage: number; effectiveness: number; isCritical: boolean; missed: boolean } => {
  // Check accuracy
  if (move.accuracy < 999 && Math.random() * 100 > move.accuracy) {
    return { damage: 0, effectiveness: 1, isCritical: false, missed: true };
  }

  const level = 50;
  const isPhysical = move.category === 'physical';
  let attack = isPhysical ? attacker.stats.attack : attacker.stats.spAttack;
  const defense = isPhysical ? defender.stats.defense : defender.stats.spDefense;

  // 灼伤降低物理攻击
  if (attackerStatus?.effect === 'burn' && isPhysical) {
    attack = Math.floor(attack * 0.5);
  }

  // Base damage formula
  const baseDamage = ((2 * level / 5 + 2) * move.power * attack / defense / 50 + 2);

  // Type effectiveness
  const effectiveness = getTypeEffectiveness(move.type, defender.types);

  // Critical hit (6.25% chance)
  const isCritical = Math.random() < 0.0625;
  const critMultiplier = isCritical ? 1.5 : 1;

  // Random factor (0.85-1.0)
  const random = 0.85 + Math.random() * 0.15;

  // STAB bonus
  const stab = attacker.types.includes(move.type) ? 1.5 : 1;

  const finalDamage = Math.floor(baseDamage * effectiveness * critMultiplier * random * stab);

  return { damage: Math.max(1, finalDamage), effectiveness, isCritical, missed: false };
};

// 检查是否触发状态效果
const checkStatusInfliction = (move: Move, defenderStatus: ActiveStatus | null): StatusEffect | null => {
  if (!move.statusEffect || !move.statusChance) return null;
  if (defenderStatus) return null; // 已有状态效果

  if (Math.random() * 100 < move.statusChance) {
    return move.statusEffect;
  }
  return null;
};

// 检查攻击者是否可以行动
const canAct = (status: ActiveStatus | null): { canAct: boolean; reasonKey?: TranslationKey; curedStatus?: boolean; selfDamage?: boolean } => {
  if (!status) return { canAct: true };

  switch (status.effect) {
    case 'paralysis':
      if (Math.random() < 0.25) {
        return { canAct: false, reasonKey: 'battle.reason.paralysis' };
      }
      return { canAct: true };

    case 'freeze':
      if (Math.random() < 0.2) {
        return { canAct: true, curedStatus: true };
      }
      return { canAct: false, reasonKey: 'battle.reason.freeze' };

    case 'sleep':
      if (status.turnsRemaining && status.turnsRemaining <= 0) {
        return { canAct: true, curedStatus: true };
      }
      return { canAct: false, reasonKey: 'battle.reason.sleep' };

    case 'confusion':
      if (status.turnsRemaining && status.turnsRemaining <= 0) {
        return { canAct: true, curedStatus: true };
      }
      if (Math.random() < 0.33) {
        return { canAct: false, reasonKey: 'battle.reason.confusion', selfDamage: true };
      }
      return { canAct: true };

    default:
      return { canAct: true };
  }
};

// 计算状态伤害
const getStatusDamage = (status: ActiveStatus | null, maxHp: number): number => {
  if (!status) return 0;

  switch (status.effect) {
    case 'burn':
      return Math.max(1, Math.floor(maxHp / 16));
    case 'poison':
      return Math.max(1, Math.floor(maxHp / 8));
    default:
      return 0;
  }
};

export const useBattleLogic = () => {
  const { language, t } = useI18n();
  const [pokemon1Id, setPokemon1Id] = useState<number | null>(null);
  const [pokemon2Id, setPokemon2Id] = useState<number | null>(null);
  const [showDamage, setShowDamage] = useState<{ side: 1 | 2; damage: number; isCritical: boolean; effectiveness: number } | null>(null);
  const [attackEffect, setAttackEffect] = useState<{ type: PokemonType; side: 1 | 2 } | null>(null);
  const [statusInflicted, setStatusInflicted] = useState<{ side: 1 | 2; status: StatusEffect } | null>(null);

  const [battleState, setBattleState] = useState<BattleState>({
    hp1: 0,
    hp2: 0,
    maxHp1: 0,
    maxHp2: 0,
    turn: 0,
    currentAttacker: 1,
    phase: 'idle',
    winner: null,
    battleLog: [],
    speed: 1,
    battleMode: 'manual',
    pokemon1Moves: [],
    pokemon2Moves: [],
    waitingForMove: false,
    status1: null,
    status2: null,
  });

  const { data: pokemon1 } = usePokemonDetail(pokemon1Id);
  const { data: pokemon2 } = usePokemonDetail(pokemon2Id);

  // Initialize battle
  const startBattle = useCallback((mode: 'auto' | 'manual' = 'manual') => {
    if (!pokemon1 || !pokemon2) return;

    // Generate moves for both Pokemon
    const p1Moves = generateMovesForPokemon(pokemon1.types);
    const p2Moves = generateMovesForPokemon(pokemon2.types);

    // Determine who goes first based on speed
    const first = pokemon1.stats.speed >= pokemon2.stats.speed ? 1 : 2;

    setBattleState({
      hp1: pokemon1.stats.hp * 3, // Scale HP for longer battles
      hp2: pokemon2.stats.hp * 3,
      maxHp1: pokemon1.stats.hp * 3,
      maxHp2: pokemon2.stats.hp * 3,
      turn: 1,
      currentAttacker: first as 1 | 2,
      phase: mode === 'manual' ? 'selecting' : 'battling',
      winner: null,
      battleLog: [],
      speed: battleState.speed,
      battleMode: mode,
      pokemon1Moves: p1Moves,
      pokemon2Moves: p2Moves,
      waitingForMove: mode === 'manual',
      status1: null,
      status2: null,
    });
  }, [pokemon1, pokemon2, battleState.speed]);

  // Reset battle
  const resetBattle = useCallback(() => {
    setBattleState({
      hp1: 0,
      hp2: 0,
      maxHp1: 0,
      maxHp2: 0,
      turn: 0,
      currentAttacker: 1,
      phase: 'idle',
      winner: null,
      battleLog: [],
      speed: battleState.speed,
      battleMode: 'manual',
      pokemon1Moves: [],
      pokemon2Moves: [],
      waitingForMove: false,
      status1: null,
      status2: null,
    });
    setShowDamage(null);
    setAttackEffect(null);
    setStatusInflicted(null);
  }, [battleState.speed]);

  // 处理回合结束的状态伤害和切换攻击者
  const proceedToNextPhase = useCallback(() => {
    setBattleState(prev => {
      if (prev.winner) {
        return { ...prev, phase: 'finished', waitingForMove: false };
      }

      // 处理状态伤害（在攻击后触发）
      const attackerStatus = prev.currentAttacker === 1 ? prev.status1 : prev.status2;
      const maxHp = prev.currentAttacker === 1 ? prev.maxHp1 : prev.maxHp2;
      const statusDamage = getStatusDamage(attackerStatus, maxHp);

      let newHp1 = prev.hp1;
      let newHp2 = prev.hp2;
      let statusLog: BattleLogEntry | null = null;

      if (statusDamage > 0 && attackerStatus) {
        const attackerName = prev.currentAttacker === 1 ? pokemon1?.name : pokemon2?.name;
        const defenderName = prev.currentAttacker === 1 ? pokemon2?.name : pokemon1?.name;

        if (prev.currentAttacker === 1) {
          newHp1 = Math.max(0, prev.hp1 - statusDamage);
        } else {
          newHp2 = Math.max(0, prev.hp2 - statusDamage);
        }

        statusLog = {
          turn: prev.turn,
          attacker: attackerName || '',
          defender: defenderName || '',
          damage: statusDamage,
          effectiveness: 1,
          isCritical: false,
          message: t('battle.statusDamage', {
            name: attackerName || '',
            status: getStatusEffectName(attackerStatus.effect, language),
            damage: statusDamage,
          }),
          statusDamage,
        };
      }

      // Check for winner after status damage
      let winner = prev.winner;
      if (newHp1 <= 0) {
        winner = 2;
      } else if (newHp2 <= 0) {
        winner = 1;
      }

      if (winner) {
        return {
          ...prev,
          hp1: newHp1,
          hp2: newHp2,
          phase: 'finished',
          waitingForMove: false,
          winner,
          battleLog: statusLog ? [...prev.battleLog, statusLog] : prev.battleLog,
        };
      }

      const nextAttacker = prev.currentAttacker === 1 ? 2 : 1;
      const nextTurn = prev.currentAttacker === 2 ? prev.turn + 1 : prev.turn;

      if (prev.battleMode === 'manual') {
        return {
          ...prev,
          hp1: newHp1,
          hp2: newHp2,
          phase: nextAttacker === 1 ? 'selecting' : 'battling',
          currentAttacker: nextAttacker as 1 | 2,
          turn: nextTurn,
          waitingForMove: nextAttacker === 1,
          battleLog: statusLog ? [...prev.battleLog, statusLog] : prev.battleLog,
        };
      }

      return {
        ...prev,
        hp1: newHp1,
        hp2: newHp2,
        phase: 'battling',
        currentAttacker: nextAttacker as 1 | 2,
        turn: nextTurn,
        battleLog: statusLog ? [...prev.battleLog, statusLog] : prev.battleLog,
      };
    });
  }, [pokemon1, pokemon2, language, t]);

  // Select a move (for manual mode)
  const selectMove = useCallback((move: MoveWithPP) => {
    if (!pokemon1 || !pokemon2 || !battleState.waitingForMove) return;
    if (move.currentPp <= 0) return; // Cannot use move with no PP

    const attacker = battleState.currentAttacker === 1 ? pokemon1 : pokemon2;
    const defender = battleState.currentAttacker === 1 ? pokemon2 : pokemon1;
    const attackerStatus = battleState.currentAttacker === 1 ? battleState.status1 : battleState.status2;
    const defenderStatus = battleState.currentAttacker === 1 ? battleState.status2 : battleState.status1;

    // 检查能否行动
    const actCheck = canAct(attackerStatus);

    // Consume PP and update phase
    setBattleState(prev => {
      const movesKey = prev.currentAttacker === 1 ? 'pokemon1Moves' : 'pokemon2Moves';
      const updatedMoves = prev[movesKey].map(m =>
        m.id === move.id ? { ...m, currentPp: m.currentPp - 1 } : m
      );

      return {
        ...prev,
        phase: 'attacking',
        waitingForMove: false,
        [movesKey]: updatedMoves,
      };
    });

    // 处理状态解除
    if (actCheck.curedStatus) {
      const statusName = attackerStatus ? getStatusEffectName(attackerStatus.effect, language) : '';
      setBattleState(prev => {
        const newLog: BattleLogEntry = {
          turn: prev.turn,
          attacker: attacker.name,
          defender: defender.name,
          damage: 0,
          effectiveness: 1,
          isCritical: false,
          message: t('battle.statusRecovered', { name: attacker.name, status: statusName }),
        };
        return {
          ...prev,
          status1: prev.currentAttacker === 1 ? null : prev.status1,
          status2: prev.currentAttacker === 2 ? null : prev.status2,
          battleLog: [...prev.battleLog, newLog],
        };
      });
    }

    // 如果无法行动
    if (!actCheck.canAct) {
      setTimeout(() => {
        setBattleState(prev => {
          // 混乱自伤
          let selfDamage = 0;
          if (actCheck.selfDamage) {
            selfDamage = Math.floor(40 * (attacker.stats.attack / attacker.stats.defense));
          }
          const reason = actCheck.reasonKey ? t(actCheck.reasonKey) : '';

          const newLog: BattleLogEntry = {
            turn: prev.turn,
            attacker: attacker.name,
            defender: defender.name,
            damage: selfDamage,
            effectiveness: 1,
            isCritical: false,
            message: selfDamage > 0
              ? t('battle.cannotActDamage', { name: attacker.name, reason, damage: selfDamage })
              : t('battle.cannotAct', { name: attacker.name, reason }),
          };

          const newHp1 = prev.currentAttacker === 1 ? Math.max(0, prev.hp1 - selfDamage) : prev.hp1;
          const newHp2 = prev.currentAttacker === 2 ? Math.max(0, prev.hp2 - selfDamage) : prev.hp2;

          // 更新睡眠和混乱回合
          let newStatus1 = prev.status1;
          let newStatus2 = prev.status2;
          if (prev.currentAttacker === 1 && prev.status1?.turnsRemaining !== undefined) {
            newStatus1 = { ...prev.status1, turnsRemaining: prev.status1.turnsRemaining - 1 };
          }
          if (prev.currentAttacker === 2 && prev.status2?.turnsRemaining !== undefined) {
            newStatus2 = { ...prev.status2, turnsRemaining: prev.status2.turnsRemaining - 1 };
          }

          return {
            ...prev,
            hp1: newHp1,
            hp2: newHp2,
            phase: 'damaged',
            battleLog: [...prev.battleLog, newLog],
            status1: newStatus1,
            status2: newStatus2,
          };
        });

        // 继续到下一阶段
        setTimeout(() => {
          proceedToNextPhase();
        }, 500 / battleState.speed);
      }, 400 / battleState.speed);
      return;
    }

    const { damage, effectiveness, isCritical, missed } = calculateDamage(attacker, defender, move, attackerStatus);

    // Show attack effect
    setAttackEffect({ type: move.type, side: battleState.currentAttacker });

    setTimeout(() => {
      setAttackEffect(null);

      if (missed) {
        // Attack missed
        setBattleState(prev => {
          const newLog: BattleLogEntry = {
            turn: prev.turn,
            attacker: attacker.name,
            defender: defender.name,
            damage: 0,
            effectiveness: 1,
            isCritical: false,
            message: t('battle.missed', {
              attacker: attacker.name,
              move: getMoveName(move, language),
            }),
            moveName: getMoveName(move, language),
          };

          return {
            ...prev,
            phase: 'damaged',
            battleLog: [...prev.battleLog, newLog],
          };
        });
      } else {
        // Show damage
        setShowDamage({
          side: battleState.currentAttacker === 1 ? 2 : 1,
          damage,
          isCritical,
          effectiveness
        });

        // 检查状态效果
        const newStatusEffect = checkStatusInfliction(move, defenderStatus);
        if (newStatusEffect) {
          setStatusInflicted({
            side: battleState.currentAttacker === 1 ? 2 : 1,
            status: newStatusEffect
          });
        }

        setBattleState(prev => {
          const newHp1 = prev.currentAttacker === 2 ? Math.max(0, prev.hp1 - damage) : prev.hp1;
          const newHp2 = prev.currentAttacker === 1 ? Math.max(0, prev.hp2 - damage) : prev.hp2;

          // 应用状态效果
          let newStatus1 = prev.status1;
          let newStatus2 = prev.status2;
          if (newStatusEffect) {
            const turnsRemaining = newStatusEffect === 'sleep'
              ? Math.floor(Math.random() * 3) + 1
              : newStatusEffect === 'confusion'
                ? Math.floor(Math.random() * 4) + 2
                : undefined;

            if (prev.currentAttacker === 1) {
              newStatus2 = { effect: newStatusEffect, turnsRemaining };
            } else {
              newStatus1 = { effect: newStatusEffect, turnsRemaining };
            }
          }

          const statusMsg = newStatusEffect
            ? t('battle.statusApplied', {
              defender: defender.name,
              status: getStatusEffectName(newStatusEffect, language),
            })
            : '';

          const newLog: BattleLogEntry = {
            turn: prev.turn,
            attacker: attacker.name,
            defender: defender.name,
            damage,
            effectiveness,
            isCritical,
            message: t('battle.damage', {
              attacker: attacker.name,
              move: getMoveName(move, language),
              defender: defender.name,
              damage,
              status: statusMsg,
            }),
            moveName: getMoveName(move, language),
            statusApplied: newStatusEffect || undefined,
          };

          // Check for winner
          let winner: 1 | 2 | null = null;

          if (newHp1 <= 0) {
            winner = 2;
          } else if (newHp2 <= 0) {
            winner = 1;
          }

          return {
            ...prev,
            hp1: newHp1,
            hp2: newHp2,
            phase: 'damaged',
            battleLog: [...prev.battleLog, newLog],
            winner,
            status1: newStatus1,
            status2: newStatus2,
          };
        });
      }

      setTimeout(() => {
        setShowDamage(null);
        setStatusInflicted(null);
        proceedToNextPhase();
      }, 500 / battleState.speed);
    }, 400 / battleState.speed);
  }, [pokemon1, pokemon2, battleState, language, t, proceedToNextPhase]);

  // Execute one turn (for auto mode or AI turn)
  const executeTurn = useCallback(() => {
    if (!pokemon1 || !pokemon2) return;
    if (battleState.phase !== 'battling') return;

    const moves = battleState.currentAttacker === 1 ? battleState.pokemon1Moves : battleState.pokemon2Moves;

    // AI selects a random move from available moves (with PP > 0)
    const availableMoves = moves.filter(m => m.currentPp > 0);
    if (availableMoves.length === 0) {
      // No moves left - use Struggle (placeholder: just skip turn)
      proceedToNextPhase();
      return;
    }

    const move = availableMoves[Math.floor(Math.random() * availableMoves.length)];
    if (!move) return;

    // 临时设置 waitingForMove 为 true 以便 selectMove 可以执行
    setBattleState(prev => ({ ...prev, waitingForMove: true }));

    setTimeout(() => {
      selectMove(move);
    }, 100);
  }, [pokemon1, pokemon2, battleState.phase, battleState.currentAttacker, battleState.pokemon1Moves, battleState.pokemon2Moves, selectMove, proceedToNextPhase]);

  // Auto-battle loop (for auto mode) or AI turn (for manual mode)
  useEffect(() => {
    if (battleState.phase === 'battling') {
      if (battleState.battleMode === 'auto' || battleState.currentAttacker === 2) {
        const timer = setTimeout(executeTurn, 800 / battleState.speed);
        return () => clearTimeout(timer);
      }
    }
  }, [battleState.phase, battleState.currentAttacker, battleState.battleMode, executeTurn, battleState.speed]);

  // Get current attacker's moves
  const getCurrentMoves = useCallback(() => {
    if (battleState.currentAttacker === 1) {
      return battleState.pokemon1Moves;
    }
    return battleState.pokemon2Moves;
  }, [battleState.currentAttacker, battleState.pokemon1Moves, battleState.pokemon2Moves]);

  // Get battle result info when finished
  const getBattleResult = useCallback(() => {
    if (battleState.phase !== 'finished' || !battleState.winner || !pokemon1 || !pokemon2) {
      return null;
    }

    return {
      winnerId: battleState.winner === 1 ? pokemon1.id : pokemon2.id,
      winnerName: battleState.winner === 1 ? pokemon1.name : pokemon2.name,
      loserId: battleState.winner === 1 ? pokemon2.id : pokemon1.id,
      loserName: battleState.winner === 1 ? pokemon2.name : pokemon1.name,
      battleMode: battleState.battleMode,
      turns: battleState.turn,
    };
  }, [battleState, pokemon1, pokemon2]);

  return {
    pokemon1Id,
    setPokemon1Id,
    pokemon2Id,
    setPokemon2Id,
    pokemon1,
    pokemon2,
    battleState,
    setBattleState,
    startBattle,
    resetBattle,
    showDamage,
    attackEffect,
    selectMove,
    getCurrentMoves,
    statusInflicted,
    getBattleResult,
  };
};
