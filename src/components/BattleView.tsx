import { useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PokemonType, Pokemon, getPokemonImageUrl } from '@/data/pokemon';
import { MoveWithPP, StatusEffect, getMoveName, getStatusEffectName, statusEffects } from '@/data/moves';
import { BattleState, BattleLogEntry, ActiveStatus } from '@/hooks/useBattleLogic';
import { TypeBadge } from './TypeBadge';
import { Swords, RotateCcw, Play, X, User, Zap, Target, BarChart3 } from 'lucide-react';
import { PokemonGrid, PokemonGridProps } from './PokemonGrid';
import { useI18n } from '@/hooks/useI18n';

// --- Helper Components ---

// HP Bar Component
const HPBar = ({ current, max, side }: { current: number; max: number; side: 1 | 2 }) => {
  const percent = max > 0 ? Math.max(0, (current / max) * 100) : 0;
  const getColor = () => {
    if (percent > 50) return 'bg-green-500';
    if (percent > 20) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  return (
    <div className="space-y-1">
      <div className="flex justify-between text-[10px] font-pixel">
        <span className="text-pokedex-text/50">HP</span>
        <span className="text-pokedex-text">{Math.max(0, Math.round(current))}/{max}</span>
      </div>
      <div className="h-2 bg-pokedex-screen-dark rounded-full overflow-hidden">
        <motion.div
          className={`h-full origin-left ${getColor()} rounded-full`}
          initial={{ scaleX: 1 }}
          animate={{ scaleX: percent / 100 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        />
      </div>
    </div>
  );
};

// Attack Effect Component
const AttackEffect = ({ type, side }: { type: PokemonType; side: 1 | 2 }) => {
  const colors: Record<string, string> = {
    fire: '#f97316',
    water: '#3b82f6',
    grass: '#22c55e',
    electric: '#eab308',
    ice: '#06b6d4',
    fighting: '#dc2626',
    poison: '#a855f7',
    ground: '#92400e',
    flying: '#7dd3fc',
    psychic: '#ec4899',
    bug: '#84cc16',
    rock: '#78716c',
    ghost: '#7c3aed',
    dragon: '#6366f1',
    dark: '#1f2937',
    steel: '#9ca3af',
    fairy: '#f9a8d4',
    normal: '#a8a29e',
  };

  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center pointer-events-none z-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 1, 1, 0] }}
      transition={{ duration: 0.5, times: [0, 0.1, 0.7, 1] }}
    >
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-3 h-3 rounded-full"
          style={{ backgroundColor: colors[type] || colors.normal }}
          initial={{
            x: side === 1 ? -50 : 50,
            y: 0,
            scale: 0.5,
            opacity: 0.8
          }}
          animate={{
            x: side === 1 ? 50 : -50,
            y: (i - 4) * 15,
            scale: [0.5, 1.2, 0],
            opacity: [0.8, 1, 0]
          }}
          transition={{
            duration: 0.4,
            delay: i * 0.03,
            ease: 'easeOut'
          }}
        />
      ))}
    </motion.div>
  );
};

// Damage Number Component
const DamageNumber = ({ damage, isCritical, effectiveness }: { damage: number; isCritical: boolean; effectiveness: number }) => {
  const { t } = useI18n();
  let color = 'text-white';
  if (effectiveness > 1) color = 'text-green-400';
  if (effectiveness < 1) color = 'text-red-400';
  if (effectiveness === 0) color = 'text-gray-400';

  return (
    <motion.div
      className={`absolute font-pixel text-lg ${color} drop-shadow-lg z-30`}
      initial={{ y: 0, opacity: 1, scale: 1 }}
      animate={{ y: -40, opacity: 0, scale: 1.5 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      {isCritical && <span className="text-yellow-400 text-xs block">{t('battle.critical')}</span>}
      -{damage}
    </motion.div>
  );
};

// Status Badge Component
const StatusBadge = ({ status }: { status: ActiveStatus }) => {
  const { language } = useI18n();
  const info = statusEffects[status.effect];

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className={`${info.color} px-1.5 py-0.5 rounded text-[8px] text-white font-bold flex items-center gap-0.5 shadow-sm`}
    >
      <span>{info.icon}</span>
      <span>{getStatusEffectName(status.effect, language)}</span>
      {status.turnsRemaining !== undefined && (
        <span className="text-white/70">({status.turnsRemaining})</span>
      )}
    </motion.div>
  );
};

// Status Infliction Animation
const StatusInflictedAnimation = ({ status, side }: { status: StatusEffect; side: 1 | 2 }) => {
  const info = statusEffects[status];

  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center pointer-events-none z-25"
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 1, 1, 0] }}
      transition={{ duration: 1, times: [0, 0.2, 0.8, 1] }}
    >
      <motion.div
        className="text-4xl"
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: [0, 1.5, 1.2], rotate: [0, 20, 0] }}
        transition={{ duration: 0.6 }}
      >
        {info.icon}
      </motion.div>
    </motion.div>
  );
};

// Battle Log Component
const BattleLog = ({ log }: { log: BattleLogEntry[] }) => {
  const { t } = useI18n();
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [log]);

  return (
    <div
      ref={scrollRef}
      className="h-24 sm:h-20 bg-pokedex-screen-dark rounded-lg p-2 overflow-y-auto scrollbar-pokedex border border-pokedex-text/10"
    >
      {log.length === 0 ? (
        <p className="text-[10px] text-pokedex-text/30 text-center py-4">{t('battle.logEmpty')}</p>
      ) : (
        <div className="space-y-1">
          {log.map((entry, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-[10px] text-pokedex-text/80"
            >
              <span className="text-pokedex-text/50">{t('battle.turn', { turn: entry.turn })}</span>
              {entry.message}
              {entry.isCritical && <span className="text-yellow-400 ml-1">{t('battle.critical')}</span>}
              {entry.effectiveness > 1 && <span className="text-green-400 ml-1">{t('battle.superEffective')}</span>}
              {entry.effectiveness < 1 && entry.effectiveness > 0 && <span className="text-red-400 ml-1">{t('battle.notVeryEffective')}</span>}
              {entry.effectiveness === 0 && <span className="text-gray-400 ml-1">{t('battle.noEffect')}</span>}
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

// Move Button Component
const MoveButton = ({ move, onSelect, disabled }: { move: MoveWithPP; onSelect: (move: MoveWithPP) => void; disabled: boolean }) => {
  const { language, t } = useI18n();
  const typeColors: Record<string, string> = {
    normal: 'from-gray-400 to-gray-500',
    fire: 'from-orange-500 to-red-600',
    water: 'from-blue-400 to-blue-600',
    electric: 'from-yellow-400 to-yellow-500',
    grass: 'from-green-400 to-green-600',
    ice: 'from-cyan-300 to-cyan-500',
    fighting: 'from-red-600 to-red-800',
    poison: 'from-purple-500 to-purple-700',
    ground: 'from-amber-600 to-amber-800',
    flying: 'from-indigo-300 to-indigo-500',
    psychic: 'from-pink-400 to-pink-600',
    bug: 'from-lime-500 to-lime-700',
    rock: 'from-stone-500 to-stone-700',
    ghost: 'from-violet-600 to-violet-800',
    dragon: 'from-indigo-600 to-purple-700',
    dark: 'from-gray-700 to-gray-900',
    steel: 'from-slate-400 to-slate-600',
    fairy: 'from-pink-300 to-pink-500',
  };

  const noPP = move.currentPp <= 0;
  const isDisabled = disabled || noPP;

  return (
    <motion.button
      onClick={() => !isDisabled && onSelect(move)}
      disabled={isDisabled}
      className={`
        relative min-h-11 p-2 rounded-lg bg-gradient-to-br ${typeColors[move.type] || typeColors.normal}
        text-white shadow-md overflow-hidden
        ${isDisabled ? 'opacity-50 cursor-not-allowed grayscale' : 'active:scale-95 cursor-pointer'}
        transition-transform duration-150
      `}
      whileTap={!isDisabled ? { scale: 0.95 } : {}}
    >
      <div className="flex flex-col items-start gap-0.5">
        <div className="flex items-center gap-1 w-full">
          <span className="font-bold text-[11px] truncate flex-1">{getMoveName(move, language)}</span>
          <TypeBadge type={move.type} size="sm" />
        </div>
        <div className="flex items-center gap-2 text-[9px] text-white/80">
          <span className="flex items-center gap-0.5">
            <Zap className="w-2.5 h-2.5" />
            {move.power}
          </span>
          <span className="flex items-center gap-0.5">
            <Target className="w-2.5 h-2.5" />
            {move.accuracy === 999 ? t('battle.sureHit') : `${move.accuracy}%`}
          </span>
          <span className="text-white/60">
            {move.category === 'physical'
              ? t('battle.physical')
              : move.category === 'special'
                ? t('battle.special')
                : t('battle.status')}
          </span>
          <span className={`font-bold ${noPP ? 'text-red-300' : 'text-white/90'}`}>
            PP {move.currentPp}/{move.pp}
          </span>
        </div>
      </div>
      {noPP && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/40">
          <span className="text-[10px] font-bold text-red-300">{t('battle.noPp')}</span>
        </div>
      )}
    </motion.button>
  );
};

// Move Selection Panel
const MoveSelectionPanel = ({
  moves,
  onSelectMove,
  pokemonName,
  disabled
}: {
  moves: MoveWithPP[];
  onSelectMove: (move: MoveWithPP) => void;
  pokemonName: string;
  disabled: boolean;
}) => {
  const { t } = useI18n();

  return (
    <div className="bg-pokedex-screen-light rounded-lg p-2 border border-pokedex-text/10">
      <div className="text-[10px] text-pokedex-text/60 mb-2 flex items-center gap-1">
        <Swords className="w-3 h-3" />
        {t('battle.moveQuestion', { name: pokemonName })}
      </div>
      <div className="grid grid-cols-1 gap-2 min-[380px]:grid-cols-2">
        {moves.map((move) => (
          <MoveButton
            key={move.id}
            move={move}
            onSelect={onSelectMove}
            disabled={disabled}
          />
        ))}
      </div>
    </div>
  );
};

// --- Main Components ---

interface BattleSelectorProps {
  pokemonGridProps: PokemonGridProps;
  pokemon1: Pokemon | null | undefined;
  pokemon2: Pokemon | null | undefined;
  activeSlot: 1 | 2;
  setActiveSlot: (slot: 1 | 2) => void;
}

export const BattleSelector = ({
  pokemonGridProps,
  pokemon1,
  pokemon2,
  activeSlot,
  setActiveSlot,
}: BattleSelectorProps) => {
  const { t } = useI18n();

  return (
    <div className="flex flex-col h-full bg-pokedex-screen">
      {/* P1 / P2 Selector Slots */}
      <div className="flex-shrink-0 p-2 sm:p-3 bg-pokedex-screen-light border-b border-pokedex-text/20 grid grid-cols-2 gap-2 sm:gap-3">
        {/* Slot 1 */}
        <button
          onClick={() => setActiveSlot(1)}
          className={`
            relative min-h-[88px] p-2 rounded-lg border transition-all duration-200 flex flex-col items-center gap-1
            ${activeSlot === 1
              ? 'bg-pokedex-blue/10 border-pokedex-blue shadow-sm'
              : 'bg-pokedex-screen border-transparent hover:bg-pokedex-screen/80 hover:border-pokedex-text/20'
            }
          `}
        >
          <div className="text-[10px] font-pixel text-pokedex-text/60">{t('battle.player', { id: 1 })}</div>
          {pokemon1 ? (
            <div className="flex items-center gap-2 w-full justify-center">
              <img src={getPokemonImageUrl(pokemon1.id)} alt={pokemon1.name} className="w-8 h-8 sm:w-10 sm:h-10 object-contain" loading="lazy" decoding="async" />
              <div className="hidden sm:block text-xs font-bold text-pokedex-text truncate max-w-[60px]">{pokemon1.name}</div>
            </div>
          ) : (
             <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-pokedex-text/5 flex items-center justify-center">
                <User className="w-4 h-4 text-pokedex-text/30" />
             </div>
          )}
          {activeSlot === 1 && (
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-pokedex-blue rotate-45" />
          )}
        </button>

        {/* Slot 2 */}
        <button
          onClick={() => setActiveSlot(2)}
          className={`
            relative min-h-[88px] p-2 rounded-lg border transition-all duration-200 flex flex-col items-center gap-1
            ${activeSlot === 2
              ? 'bg-pokedex-red/10 border-pokedex-red shadow-sm'
              : 'bg-pokedex-screen border-transparent hover:bg-pokedex-screen/80 hover:border-pokedex-text/20'
            }
          `}
        >
          <div className="text-[10px] font-pixel text-pokedex-text/60">{t('battle.player', { id: 2 })}</div>
          {pokemon2 ? (
            <div className="flex items-center gap-2 w-full justify-center">
               <img src={getPokemonImageUrl(pokemon2.id)} alt={pokemon2.name} className="w-8 h-8 sm:w-10 sm:h-10 object-contain" loading="lazy" decoding="async" />
               <div className="hidden sm:block text-xs font-bold text-pokedex-text truncate max-w-[60px]">{pokemon2.name}</div>
            </div>
          ) : (
             <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-pokedex-text/5 flex items-center justify-center">
                <User className="w-4 h-4 text-pokedex-text/30" />
             </div>
          )}
          {activeSlot === 2 && (
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-pokedex-red rotate-45" />
          )}
        </button>
      </div>

      {/* Pokemon List */}
      <div className="flex-1 min-h-0 relative">
        <PokemonGrid {...pokemonGridProps} />
      </div>
    </div>
  );
};

interface BattleArenaProps {
  battleState: BattleState;
  pokemon1: Pokemon | null | undefined;
  pokemon2: Pokemon | null | undefined;
  onStart: (mode: 'auto' | 'manual') => void;
  onReset: () => void;
  showDamage: { side: 1 | 2; damage: number; isCritical: boolean; effectiveness: number } | null;
  attackEffect: { type: PokemonType; side: 1 | 2 } | null;
  onExit: () => void;
  onSelectMove: (move: MoveWithPP) => void;
  currentMoves: MoveWithPP[];
  statusInflicted: { side: 1 | 2; status: StatusEffect } | null;
  onShowStats?: () => void;
  totalBattles?: number;
}

export const BattleArena = ({
  battleState,
  pokemon1,
  pokemon2,
  onStart,
  onReset,
  showDamage,
  attackEffect,
  onExit,
  onSelectMove,
  currentMoves,
  statusInflicted,
  onShowStats,
  totalBattles = 0,
}: BattleArenaProps) => {
  const { t } = useI18n();
  const isIdle = battleState.phase === 'idle';
  const isSelecting = battleState.phase === 'selecting' && battleState.waitingForMove;
  const isBattling = battleState.phase !== 'idle' && battleState.phase !== 'finished';

  return (
    <div className="h-full flex flex-col bg-pokedex-screen">
      {/* Header */}
      <div className="flex min-h-11 items-center justify-between px-3 py-2 bg-pokedex-screen-light border-b border-pokedex-text/20">
        <div className="flex items-center gap-2">
           <Swords className="w-4 h-4 text-pokedex-text" />
           <h2 className="text-sm font-bold text-pokedex-text">{t('battle.title')}</h2>
           {!isIdle && (
             <span className="text-[10px] px-2 py-0.5 rounded bg-pokedex-text/10 text-pokedex-text/60">
               {battleState.battleMode === 'auto' ? t('battle.auto') : t('battle.manual')}
             </span>
           )}
        </div>
        <div className="flex items-center gap-1">
          {onShowStats && (
            <button
              onClick={onShowStats}
              className="min-h-11 min-w-11 p-2 rounded-full hover:bg-pokedex-text/10 transition-colors text-pokedex-text/70 hover:text-pokedex-text flex items-center justify-center gap-1"
              title={t('battle.stats')}
              aria-label={t('battle.stats')}
            >
              <BarChart3 className="w-4 h-4" />
              {totalBattles > 0 && (
                <span className="text-[10px] font-bold text-pokedex-blue">{totalBattles}</span>
              )}
            </button>
          )}
          <button
            onClick={onExit}
            className="min-h-11 min-w-11 p-2 rounded-full hover:bg-pokedex-text/10 transition-colors text-pokedex-text/70 hover:text-pokedex-text"
            title={t('battle.exit')}
            aria-label={t('battle.exit')}
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Main Arena Content */}
      <div className="flex-1 overflow-hidden p-2 sm:p-3 flex flex-col">
        {pokemon1 && pokemon2 ? (
          <div className="flex-1 flex flex-col space-y-2">
             {/* Battle Scene */}
             <div className="relative flex-1 bg-gradient-to-b from-pokedex-screen to-pokedex-screen-dark rounded-lg border border-pokedex-text/10 p-3 flex items-center justify-center overflow-hidden min-h-[140px]">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-pokedex-text to-transparent" />

                {/* Attack Effects */}
                {attackEffect && <AttackEffect type={attackEffect.type} side={attackEffect.side} />}

                <div className="relative w-full max-w-sm aspect-[2/1] flex items-center justify-between gap-4">
                   {/* Pokemon 1 (Left) */}
                   <div className="relative flex flex-col items-center gap-1 w-1/3">
                      <div className="relative w-full aspect-square flex items-center justify-center">
                        <motion.img
                          src={getPokemonImageUrl(pokemon1.id)}
                          alt={pokemon1.name}
                          className="w-full h-full object-contain"
                          animate={{
                            x: battleState.phase === 'attacking' && battleState.currentAttacker === 1 ? 20 : 0,
                            scale: battleState.phase === 'damaged' && battleState.currentAttacker === 2 ? 0.9 : 1,
                            opacity: battleState.hp1 <= 0 ? 0.5 : 1
                          }}
                        />
                        {showDamage?.side === 1 && (
                          <DamageNumber {...showDamage} />
                        )}
                        <AnimatePresence>
                          {statusInflicted?.side === 1 && (
                            <StatusInflictedAnimation status={statusInflicted.status} side={1} />
                          )}
                        </AnimatePresence>
                      </div>
                      <div className="w-full">
                         <div className="flex items-center justify-between text-[9px] mb-0.5">
                            <div className="flex items-center gap-1">
                              <span className="font-bold truncate">{pokemon1.name}</span>
                              {battleState.status1 && <StatusBadge status={battleState.status1} />}
                            </div>
                            <div className="flex gap-0.5">
                               {pokemon1.types.map(t => <TypeBadge key={t} type={t} size="sm" />)}
                            </div>
                         </div>
                         <HPBar current={battleState.hp1} max={battleState.maxHp1} side={1} />
                      </div>
                   </div>

                   {/* VS / Status */}
                   <div className="flex flex-col items-center justify-center">
                      {isIdle ? (
                        <div className="text-lg font-black italic text-pokedex-text/20">VS</div>
                      ) : (
                        <div className="text-[10px] font-pixel text-pokedex-text/50">
                          {t('battle.turnShort', { turn: battleState.turn })}
                        </div>
                      )}
                   </div>

                   {/* Pokemon 2 (Right) */}
                   <div className="relative flex flex-col items-center gap-1 w-1/3">
                      <div className="relative w-full aspect-square flex items-center justify-center">
                        <motion.img
                          src={getPokemonImageUrl(pokemon2.id)}
                          alt={pokemon2.name}
                          className="w-full h-full object-contain"
                          animate={{
                            x: battleState.phase === 'attacking' && battleState.currentAttacker === 2 ? -20 : 0,
                            scale: battleState.phase === 'damaged' && battleState.currentAttacker === 1 ? 0.9 : 1,
                            opacity: battleState.hp2 <= 0 ? 0.5 : 1
                          }}
                        />
                        {showDamage?.side === 2 && (
                          <DamageNumber {...showDamage} />
                        )}
                        <AnimatePresence>
                          {statusInflicted?.side === 2 && (
                            <StatusInflictedAnimation status={statusInflicted.status} side={2} />
                          )}
                        </AnimatePresence>
                      </div>
                      <div className="w-full">
                         <div className="flex items-center justify-between text-[9px] mb-0.5">
                            <div className="flex items-center gap-1">
                              <span className="font-bold truncate">{pokemon2.name}</span>
                              {battleState.status2 && <StatusBadge status={battleState.status2} />}
                            </div>
                            <div className="flex gap-0.5">
                               {pokemon2.types.map(t => <TypeBadge key={t} type={t} size="sm" />)}
                            </div>
                         </div>
                         <HPBar current={battleState.hp2} max={battleState.maxHp2} side={2} />
                      </div>
                   </div>
                </div>

                {/* Winner Overlay */}
                {battleState.winner && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-40"
                  >
                    <div className="bg-pokedex-screen border-2 border-pokedex-text p-4 rounded-xl shadow-2xl text-center">
                       <h3 className="text-xl font-bold text-pokedex-text mb-2">{t('battle.end')}</h3>
                       <p className="text-sm text-pokedex-text/80 mb-4">
                         {t('battle.winner', { name: battleState.winner === 1 ? pokemon1.name : pokemon2.name })}
                       </p>
                       <button
                         onClick={onReset}
                         className="min-h-11 px-4 py-2 bg-pokedex-blue text-white rounded font-pixel text-xs hover:bg-pokedex-blue/90 active:scale-95 transition-transform"
                       >
                         {t('battle.again')}
                       </button>
                    </div>
                  </motion.div>
                )}
             </div>

             {/* Move Selection or Controls */}
             {isSelecting && currentMoves.length > 0 ? (
               <MoveSelectionPanel
                 moves={currentMoves}
                 onSelectMove={onSelectMove}
                 pokemonName={pokemon1.name}
                 disabled={!battleState.waitingForMove}
               />
             ) : (
               <div className="flex flex-col gap-2">
                 {isIdle && (
                     <div className="grid grid-cols-1 gap-2 min-[380px]:grid-cols-2">
                     <button
                       onClick={() => onStart('manual')}
                       className="flex min-h-11 items-center justify-center gap-2 px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg font-pixel text-xs transition-colors shadow-md active:scale-95"
                     >
                       <Swords className="w-4 h-4" /> {t('battle.manual')}
                     </button>
                     <button
                       onClick={() => onStart('auto')}
                       className="flex min-h-11 items-center justify-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-pixel text-xs transition-colors shadow-md active:scale-95"
                     >
                       <Play className="w-4 h-4" /> {t('battle.auto')}
                     </button>
                   </div>
                 )}
                 {isBattling && !isSelecting && (
                   <div className="flex justify-center">
                     <button
                       onClick={onReset}
                       className="flex min-h-11 items-center justify-center gap-2 px-6 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded-lg font-pixel text-xs transition-colors shadow-md active:scale-95"
                     >
                       <RotateCcw className="w-4 h-4" /> {t('battle.reset')}
                     </button>
                   </div>
                 )}
               </div>
             )}

             <BattleLog log={battleState.battleLog} />
          </div>
        ) : (
          <div className="flex-1 flex flex-col items-center justify-center text-pokedex-text/40 gap-4">
             <div className="w-16 h-16 rounded-full bg-pokedex-text/5 flex items-center justify-center">
                <Swords className="w-8 h-8" />
             </div>
             <p className="text-sm">{t('battle.selectTwo')}</p>
          </div>
        )}
      </div>
    </div>
  );
};
