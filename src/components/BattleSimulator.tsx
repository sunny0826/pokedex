import { useState, useMemo, useCallback, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { ScrollArea } from './ui/scroll-area';
import { Input } from './ui/input';
import { Swords, Search, Zap, Shield, Heart, Sparkles, Play, RotateCcw, FastForward } from 'lucide-react';
import { PokemonType, getPokemonImageUrl } from '@/data/pokemon';
import { usePokemonList, usePokemonDetail, PokemonListItem } from '@/hooks/usePokemon';
import { TypeBadge } from './TypeBadge';
import { Pokemon } from '@/data/pokemon';

// Type effectiveness chart
const typeChart: Record<PokemonType, Partial<Record<PokemonType, number>>> = {
  normal: { rock: 0.5, ghost: 0, steel: 0.5 },
  fire: { fire: 0.5, water: 0.5, grass: 2, ice: 2, bug: 2, rock: 0.5, dragon: 0.5, steel: 2 },
  water: { fire: 2, water: 0.5, grass: 0.5, ground: 2, rock: 2, dragon: 0.5 },
  electric: { water: 2, electric: 0.5, grass: 0.5, ground: 0, flying: 2, dragon: 0.5 },
  grass: { fire: 0.5, water: 2, grass: 0.5, poison: 0.5, ground: 2, flying: 0.5, bug: 0.5, rock: 2, dragon: 0.5, steel: 0.5 },
  ice: { fire: 0.5, water: 0.5, grass: 2, ice: 0.5, ground: 2, flying: 2, dragon: 2, steel: 0.5 },
  fighting: { normal: 2, ice: 2, poison: 0.5, flying: 0.5, psychic: 0.5, bug: 0.5, rock: 2, ghost: 0, dark: 2, steel: 2, fairy: 0.5 },
  poison: { grass: 2, poison: 0.5, ground: 0.5, rock: 0.5, ghost: 0.5, steel: 0, fairy: 2 },
  ground: { fire: 2, electric: 2, grass: 0.5, poison: 2, flying: 0, bug: 0.5, rock: 2, steel: 2 },
  flying: { electric: 0.5, grass: 2, fighting: 2, bug: 2, rock: 0.5, steel: 0.5 },
  psychic: { fighting: 2, poison: 2, psychic: 0.5, dark: 0, steel: 0.5 },
  bug: { fire: 0.5, grass: 2, fighting: 0.5, poison: 0.5, flying: 0.5, psychic: 2, ghost: 0.5, dark: 2, steel: 0.5, fairy: 0.5 },
  rock: { fire: 2, ice: 2, fighting: 0.5, ground: 0.5, flying: 2, bug: 2, steel: 0.5 },
  ghost: { normal: 0, psychic: 2, ghost: 2, dark: 0.5 },
  dragon: { dragon: 2, steel: 0.5, fairy: 0 },
  dark: { fighting: 0.5, psychic: 2, ghost: 2, dark: 0.5, fairy: 0.5 },
  steel: { fire: 0.5, water: 0.5, electric: 0.5, ice: 2, rock: 2, steel: 0.5, fairy: 2 },
  fairy: { fire: 0.5, fighting: 2, poison: 0.5, dragon: 2, dark: 2, steel: 0.5 },
};

const getTypeEffectiveness = (attackType: PokemonType, defenderTypes: PokemonType[]): number => {
  let multiplier = 1;
  for (const defenseType of defenderTypes) {
    multiplier *= typeChart[attackType]?.[defenseType] ?? 1;
  }
  return multiplier;
};

// Battle state types
interface BattleState {
  hp1: number;
  hp2: number;
  maxHp1: number;
  maxHp2: number;
  turn: number;
  currentAttacker: 1 | 2;
  phase: 'idle' | 'battling' | 'attacking' | 'damaged' | 'finished';
  winner: 1 | 2 | null;
  battleLog: BattleLogEntry[];
  speed: number;
}

interface BattleLogEntry {
  turn: number;
  attacker: string;
  defender: string;
  damage: number;
  effectiveness: number;
  isCritical: boolean;
  message: string;
}

// Calculate damage using simplified Pokemon formula
const calculateDamage = (
  attacker: Pokemon,
  defender: Pokemon,
  attackType: PokemonType
): { damage: number; effectiveness: number; isCritical: boolean } => {
  const level = 50;
  const isPhysical = Math.random() > 0.5;
  const attack = isPhysical ? attacker.stats.attack : attacker.stats.spAttack;
  const defense = isPhysical ? defender.stats.defense : defender.stats.spDefense;
  
  // Base damage formula
  const baseDamage = ((2 * level / 5 + 2) * 50 * attack / defense / 50 + 2);
  
  // Type effectiveness
  const effectiveness = getTypeEffectiveness(attackType, defender.types);
  
  // Critical hit (6.25% chance)
  const isCritical = Math.random() < 0.0625;
  const critMultiplier = isCritical ? 1.5 : 1;
  
  // Random factor (0.85-1.0)
  const random = 0.85 + Math.random() * 0.15;
  
  // STAB bonus
  const stab = attacker.types.includes(attackType) ? 1.5 : 1;
  
  const finalDamage = Math.floor(baseDamage * effectiveness * critMultiplier * random * stab);
  
  return { damage: Math.max(1, finalDamage), effectiveness, isCritical };
};

// Pokemon Selector Component
interface PokemonSelectorProps {
  pokemons: PokemonListItem[];
  selectedId: number | null;
  onSelect: (id: number) => void;
  label: string;
  disabled?: boolean;
}

const PokemonSelector = ({ pokemons, selectedId, onSelect, label, disabled }: PokemonSelectorProps) => {
  const [search, setSearch] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const filteredPokemons = useMemo(() => {
    if (!search.trim()) return pokemons.slice(0, 50);
    const query = search.toLowerCase();
    return pokemons.filter(
      p => p.name.toLowerCase().includes(query) || 
           p.nameEn.toLowerCase().includes(query) ||
           String(p.id).includes(query)
    ).slice(0, 50);
  }, [pokemons, search]);

  const selectedPokemon = pokemons.find(p => p.id === selectedId);

  return (
    <div className="relative">
      <p className="text-xs text-pokedex-text/70 mb-1 font-pixel">{label}</p>
      <button
        onClick={() => !disabled && setIsOpen(!isOpen)}
        disabled={disabled}
        className={`w-full p-2 bg-pokedex-screen-light rounded-lg border border-pokedex-text/20 transition-colors flex items-center gap-2 ${
          disabled ? 'opacity-50 cursor-not-allowed' : 'hover:border-pokedex-text/40'
        }`}
      >
        {selectedPokemon ? (
          <>
            <img 
              src={getPokemonImageUrl(selectedPokemon.id)} 
              alt={selectedPokemon.name}
              className="w-8 h-8 object-contain"
              loading="lazy"
              decoding="async"
            />
            <span className="text-sm text-pokedex-text">{selectedPokemon.name}</span>
            <div className="flex gap-1 ml-auto">
              {selectedPokemon.types.map(type => (
                <TypeBadge key={type} type={type} size="sm" />
              ))}
            </div>
          </>
        ) : (
          <span className="text-sm text-pokedex-text/50">选择宝可梦...</span>
        )}
      </button>

      <AnimatePresence>
        {isOpen && !disabled && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute z-50 top-full left-0 right-0 mt-1 bg-pokedex-screen border border-pokedex-text/30 rounded-lg shadow-xl overflow-hidden"
          >
            <div className="p-2 border-b border-pokedex-text/20">
              <div className="relative">
                <Search className="absolute left-2 top-1/2 -translate-y-1/2 w-3 h-3 text-pokedex-text/50" />
                <Input
                  type="text"
                  placeholder="搜索..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="pl-7 h-7 text-xs bg-pokedex-screen-light border-pokedex-text/20"
                  autoFocus
                />
              </div>
            </div>
            <ScrollArea className="h-48">
              <div className="p-1">
                {filteredPokemons.map(pokemon => (
                  <button
                    key={pokemon.id}
                    onClick={() => {
                      onSelect(pokemon.id);
                      setIsOpen(false);
                      setSearch('');
                    }}
                    className={`w-full p-2 flex items-center gap-2 rounded hover:bg-pokedex-screen-light transition-colors ${
                      selectedId === pokemon.id ? 'bg-pokedex-blue/20' : ''
                    }`}
                  >
                    <span className="text-[10px] text-pokedex-text/50 w-8">#{pokemon.id}</span>
                    <img 
                      src={getPokemonImageUrl(pokemon.id)} 
                      alt={pokemon.name}
                      className="w-6 h-6 object-contain"
                      loading="lazy"
                      decoding="async"
                    />
                    <span className="text-xs text-pokedex-text flex-1 text-left">{pokemon.name}</span>
                    <div className="flex gap-0.5">
                      {pokemon.types.map(type => (
                        <TypeBadge key={type} type={type} size="sm" />
                      ))}
                    </div>
                  </button>
                ))}
              </div>
            </ScrollArea>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// HP Bar Component
const HPBar = ({ current, max, side }: { current: number; max: number; side: 1 | 2 }) => {
  const percent = Math.max(0, (current / max) * 100);
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
      className="absolute inset-0 flex items-center justify-center pointer-events-none"
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
  let color = 'text-white';
  if (effectiveness > 1) color = 'text-green-400';
  if (effectiveness < 1) color = 'text-red-400';
  if (effectiveness === 0) color = 'text-gray-400';

  return (
    <motion.div
      className={`absolute font-pixel text-lg ${color} drop-shadow-lg`}
      initial={{ y: 0, opacity: 1, scale: 1 }}
      animate={{ y: -40, opacity: 0, scale: 1.5 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      {isCritical && <span className="text-yellow-400 text-xs block">暴击!</span>}
      -{damage}
    </motion.div>
  );
};

// Battle Log Component
const BattleLog = ({ log }: { log: BattleLogEntry[] }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [log]);

  return (
    <div 
      ref={scrollRef}
      className="h-24 bg-pokedex-screen-dark rounded-lg p-2 overflow-y-auto scrollbar-pokedex"
    >
      {log.length === 0 ? (
        <p className="text-[10px] text-pokedex-text/30 text-center py-4">战斗日志将在这里显示...</p>
      ) : (
        <div className="space-y-1">
          {log.map((entry, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-[10px] text-pokedex-text/80"
            >
              <span className="text-pokedex-text/50">回合{entry.turn}: </span>
              {entry.message}
              {entry.isCritical && <span className="text-yellow-400 ml-1">暴击!</span>}
              {entry.effectiveness > 1 && <span className="text-green-400 ml-1">效果绝佳!</span>}
              {entry.effectiveness < 1 && entry.effectiveness > 0 && <span className="text-red-400 ml-1">效果不好...</span>}
              {entry.effectiveness === 0 && <span className="text-gray-400 ml-1">没有效果!</span>}
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

export const BattleSimulator = ({ trigger }: { trigger?: React.ReactNode }) => {
  const [pokemon1Id, setPokemon1Id] = useState<number | null>(null);
  const [pokemon2Id, setPokemon2Id] = useState<number | null>(null);
  const [showDamage, setShowDamage] = useState<{ side: 1 | 2; damage: number; isCritical: boolean; effectiveness: number } | null>(null);
  const [attackEffect, setAttackEffect] = useState<{ type: PokemonType; side: 1 | 2 } | null>(null);
  
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
  });

  const { data } = usePokemonList({ autoLoadAll: true });
  const allPokemon = useMemo(() => data?.pages.flat() || [], [data]);
  
  const { data: pokemon1 } = usePokemonDetail(pokemon1Id);
  const { data: pokemon2 } = usePokemonDetail(pokemon2Id);

  // Initialize battle
  const startBattle = useCallback(() => {
    if (!pokemon1 || !pokemon2) return;
    
    // Determine who goes first based on speed
    const first = pokemon1.stats.speed >= pokemon2.stats.speed ? 1 : 2;
    
    setBattleState({
      hp1: pokemon1.stats.hp * 3, // Scale HP for longer battles
      hp2: pokemon2.stats.hp * 3,
      maxHp1: pokemon1.stats.hp * 3,
      maxHp2: pokemon2.stats.hp * 3,
      turn: 1,
      currentAttacker: first as 1 | 2,
      phase: 'battling',
      winner: null,
      battleLog: [],
      speed: battleState.speed,
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
    });
    setShowDamage(null);
    setAttackEffect(null);
  }, [battleState.speed]);

  // Execute one turn
  const executeTurn = useCallback(() => {
    if (!pokemon1 || !pokemon2 || battleState.phase !== 'battling') return;

    const attacker = battleState.currentAttacker === 1 ? pokemon1 : pokemon2;
    const defender = battleState.currentAttacker === 1 ? pokemon2 : pokemon1;
    const attackType = attacker.types[Math.floor(Math.random() * attacker.types.length)];
    
    const { damage, effectiveness, isCritical } = calculateDamage(attacker, defender, attackType);

    // Show attack effect
    setAttackEffect({ type: attackType, side: battleState.currentAttacker });
    setBattleState(prev => ({ ...prev, phase: 'attacking' }));

    setTimeout(() => {
      setAttackEffect(null);
      
      // Show damage
      setShowDamage({ 
        side: battleState.currentAttacker === 1 ? 2 : 1, 
        damage, 
        isCritical, 
        effectiveness 
      });
      
      setBattleState(prev => {
        const newHp1 = prev.currentAttacker === 2 ? Math.max(0, prev.hp1 - damage) : prev.hp1;
        const newHp2 = prev.currentAttacker === 1 ? Math.max(0, prev.hp2 - damage) : prev.hp2;
        
        const newLog: BattleLogEntry = {
          turn: prev.turn,
          attacker: attacker.name,
          defender: defender.name,
          damage,
          effectiveness,
          isCritical,
          message: `${attacker.name} 对 ${defender.name} 造成了 ${damage} 点伤害！`
        };

        // Check for winner
        let winner: 1 | 2 | null = null;
        let phase: BattleState['phase'] = 'battling';
        
        if (newHp1 <= 0) {
          winner = 2;
          phase = 'finished';
        } else if (newHp2 <= 0) {
          winner = 1;
          phase = 'finished';
        }

        return {
          ...prev,
          hp1: newHp1,
          hp2: newHp2,
          phase: 'damaged',
          battleLog: [...prev.battleLog, newLog],
          winner,
        };
      });

      setTimeout(() => {
        setShowDamage(null);
        
        setBattleState(prev => {
          if (prev.winner) {
            return { ...prev, phase: 'finished' };
          }
          
          return {
            ...prev,
            phase: 'battling',
            currentAttacker: prev.currentAttacker === 1 ? 2 : 1,
            turn: prev.currentAttacker === 2 ? prev.turn + 1 : prev.turn,
          };
        });
      }, 500 / battleState.speed);
    }, 400 / battleState.speed);
  }, [pokemon1, pokemon2, battleState]);

  // Auto-battle loop
  useEffect(() => {
    if (battleState.phase === 'battling') {
      const timer = setTimeout(executeTurn, 800 / battleState.speed);
      return () => clearTimeout(timer);
    }
  }, [battleState.phase, battleState.currentAttacker, battleState.speed, executeTurn]);

  const isBattling = battleState.phase !== 'idle' && battleState.phase !== 'finished';

  return (
    <Dialog>
      <DialogTrigger asChild>
        {trigger || (
          <button className="flex items-center gap-1 px-3 py-1.5 bg-gradient-to-r from-pokedex-red/20 to-pokedex-blue/20 hover:from-pokedex-red/30 hover:to-pokedex-blue/30 rounded-lg transition-colors text-sm text-pokedex-text border border-pokedex-text/20">
            <Swords className="w-4 h-4" />
            <span className="font-pixel text-xs">对战模拟</span>
          </button>
        )}
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[90vh] bg-pokedex-frame border-pokedex-frame-dark overflow-hidden">
        <DialogHeader>
          <DialogTitle className="font-pixel text-pokedex-screen flex items-center gap-2">
            <Swords className="w-5 h-5" />
            对战模拟器
          </DialogTitle>
        </DialogHeader>
        
        <ScrollArea className="max-h-[calc(90vh-100px)]">
          <div className="space-y-4 p-1">
            {/* Pokemon Selectors */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-pokedex-screen rounded-lg p-3">
                <PokemonSelector
                  pokemons={allPokemon}
                  selectedId={pokemon1Id}
                  onSelect={setPokemon1Id}
                  label="宝可梦 1"
                  disabled={isBattling}
                />
              </div>
              <div className="bg-pokedex-screen rounded-lg p-3">
                <PokemonSelector
                  pokemons={allPokemon}
                  selectedId={pokemon2Id}
                  onSelect={setPokemon2Id}
                  label="宝可梦 2"
                  disabled={isBattling}
                />
              </div>
            </div>

            {/* Battle Arena */}
            {pokemon1 && pokemon2 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-gradient-to-b from-pokedex-screen to-pokedex-screen-dark rounded-lg p-4 space-y-4"
              >
                {/* Battle Controls */}
                <div className="flex items-center justify-center gap-2">
                  {battleState.phase === 'idle' && (
                    <motion.button
                      onClick={startBattle}
                      className="flex items-center gap-2 px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg font-pixel text-xs transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Play className="w-4 h-4" />
                      开始战斗
                    </motion.button>
                  )}
                  
                  {battleState.phase !== 'idle' && (
                    <motion.button
                      onClick={resetBattle}
                      className="flex items-center gap-2 px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded-lg font-pixel text-xs transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <RotateCcw className="w-4 h-4" />
                      重置
                    </motion.button>
                  )}

                  {/* Speed Control */}
                  <div className="flex items-center gap-1 ml-4">
                    <FastForward className="w-3 h-3 text-pokedex-text/50" />
                    <div className="flex gap-1">
                      {[1, 2, 3].map(speed => (
                        <button
                          key={speed}
                          onClick={() => setBattleState(prev => ({ ...prev, speed }))}
                          className={`px-2 py-1 rounded text-[10px] font-pixel transition-colors ${
                            battleState.speed === speed 
                              ? 'bg-pokedex-blue text-white' 
                              : 'bg-pokedex-screen-light text-pokedex-text/50 hover:text-pokedex-text'
                          }`}
                        >
                          {speed}x
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Turn Indicator */}
                {battleState.phase !== 'idle' && (
                  <div className="text-center">
                    <span className="font-pixel text-xs text-pokedex-text/70">
                      回合 {battleState.turn}
                      {battleState.phase === 'finished' && battleState.winner && (
                        <span className="text-green-400 ml-2">
                          {battleState.winner === 1 ? pokemon1.name : pokemon2.name} 获胜!
                        </span>
                      )}
                    </span>
                  </div>
                )}

                {/* Pokemon Battle View */}
                <div className="flex items-stretch justify-around gap-4">
                  {/* Pokemon 1 */}
                  <div className="flex-1 text-center space-y-2">
                    {battleState.phase !== 'idle' && (
                      <HPBar 
                        current={battleState.hp1} 
                        max={battleState.maxHp1} 
                        side={1}
                      />
                    )}
                    
                    <div className="relative">
                      <motion.img
                        src={getPokemonImageUrl(pokemon1.id)}
                        alt={pokemon1.name}
                        className="w-24 h-24 sm:w-28 sm:h-28 object-contain drop-shadow-lg mx-auto"
                        animate={
                          battleState.phase === 'attacking' && battleState.currentAttacker === 1
                            ? { x: [0, 30, 0], scale: [1, 1.1, 1] }
                            : battleState.phase === 'damaged' && battleState.currentAttacker === 2
                            ? { x: [-5, 5, -5, 5, 0], filter: ['brightness(1)', 'brightness(2)', 'brightness(1)'] }
                            : battleState.hp1 <= 0
                            ? { opacity: 0.3, y: 20, rotate: -15 }
                            : { y: [0, -3, 0] }
                        }
                        transition={
                          battleState.hp1 <= 0
                            ? { duration: 0.5 }
                            : { duration: battleState.phase === 'attacking' || battleState.phase === 'damaged' ? 0.3 : 2, repeat: battleState.phase === 'idle' || battleState.phase === 'battling' ? Infinity : 0 }
                        }
                      />
                      
                      {/* Attack Effect */}
                      <AnimatePresence>
                        {attackEffect && attackEffect.side === 1 && (
                          <AttackEffect type={attackEffect.type} side={1} />
                        )}
                      </AnimatePresence>
                      
                      {/* Damage Number */}
                      <AnimatePresence>
                        {showDamage && showDamage.side === 1 && (
                          <div className="absolute top-0 left-1/2 -translate-x-1/2">
                            <DamageNumber 
                              damage={showDamage.damage} 
                              isCritical={showDamage.isCritical} 
                              effectiveness={showDamage.effectiveness}
                            />
                          </div>
                        )}
                      </AnimatePresence>
                      
                      {/* Turn Indicator Arrow */}
                      {battleState.phase === 'battling' && battleState.currentAttacker === 1 && (
                        <motion.div
                          className="absolute -top-4 left-1/2 -translate-x-1/2"
                          animate={{ y: [0, -5, 0] }}
                          transition={{ duration: 0.5, repeat: Infinity }}
                        >
                          <div className="w-0 h-0 border-l-4 border-r-4 border-t-8 border-l-transparent border-r-transparent border-t-green-500" />
                        </motion.div>
                      )}
                    </div>
                    
                    <p className="font-pixel text-xs text-pokedex-text">{pokemon1.name}</p>
                    <div className="flex justify-center gap-1">
                      {pokemon1.types.map(type => (
                        <TypeBadge key={type} type={type} size="sm" />
                      ))}
                    </div>
                  </div>

                  {/* VS */}
                  <div className="flex items-center">
                    <motion.div
                      animate={isBattling ? { rotate: [0, 10, -10, 0], scale: [1, 1.1, 1] } : {}}
                      transition={{ duration: 0.5, repeat: isBattling ? Infinity : 0, repeatDelay: 0.5 }}
                    >
                      <Swords className="w-6 h-6 text-pokedex-text/30" />
                    </motion.div>
                  </div>

                  {/* Pokemon 2 */}
                  <div className="flex-1 text-center space-y-2">
                    {battleState.phase !== 'idle' && (
                      <HPBar 
                        current={battleState.hp2} 
                        max={battleState.maxHp2} 
                        side={2}
                      />
                    )}
                    
                    <div className="relative">
                      <motion.img
                        src={getPokemonImageUrl(pokemon2.id)}
                        alt={pokemon2.name}
                        className="w-24 h-24 sm:w-28 sm:h-28 object-contain drop-shadow-lg mx-auto scale-x-[-1]"
                        animate={
                          battleState.phase === 'attacking' && battleState.currentAttacker === 2
                            ? { x: [0, -30, 0], scale: [1, 1.1, 1] }
                            : battleState.phase === 'damaged' && battleState.currentAttacker === 1
                            ? { x: [-5, 5, -5, 5, 0], filter: ['brightness(1)', 'brightness(2)', 'brightness(1)'] }
                            : battleState.hp2 <= 0
                            ? { opacity: 0.3, y: 20, rotate: 15 }
                            : { y: [0, -3, 0] }
                        }
                        transition={
                          battleState.hp2 <= 0
                            ? { duration: 0.5 }
                            : { duration: battleState.phase === 'attacking' || battleState.phase === 'damaged' ? 0.3 : 2, repeat: battleState.phase === 'idle' || battleState.phase === 'battling' ? Infinity : 0, delay: 0.5 }
                        }
                      />
                      
                      {/* Attack Effect */}
                      <AnimatePresence>
                        {attackEffect && attackEffect.side === 2 && (
                          <AttackEffect type={attackEffect.type} side={2} />
                        )}
                      </AnimatePresence>
                      
                      {/* Damage Number */}
                      <AnimatePresence>
                        {showDamage && showDamage.side === 2 && (
                          <div className="absolute top-0 left-1/2 -translate-x-1/2">
                            <DamageNumber 
                              damage={showDamage.damage} 
                              isCritical={showDamage.isCritical} 
                              effectiveness={showDamage.effectiveness}
                            />
                          </div>
                        )}
                      </AnimatePresence>
                      
                      {/* Turn Indicator Arrow */}
                      {battleState.phase === 'battling' && battleState.currentAttacker === 2 && (
                        <motion.div
                          className="absolute -top-4 left-1/2 -translate-x-1/2"
                          animate={{ y: [0, -5, 0] }}
                          transition={{ duration: 0.5, repeat: Infinity }}
                        >
                          <div className="w-0 h-0 border-l-4 border-r-4 border-t-8 border-l-transparent border-r-transparent border-t-green-500" />
                        </motion.div>
                      )}
                    </div>
                    
                    <p className="font-pixel text-xs text-pokedex-text">{pokemon2.name}</p>
                    <div className="flex justify-center gap-1">
                      {pokemon2.types.map(type => (
                        <TypeBadge key={type} type={type} size="sm" />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Battle Log */}
                <BattleLog log={battleState.battleLog} />

                {/* Victory Screen */}
                <AnimatePresence>
                  {battleState.phase === 'finished' && battleState.winner && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 bg-black/50 backdrop-blur-sm rounded-lg flex items-center justify-center"
                    >
                      <motion.div
                        initial={{ y: 20 }}
                        animate={{ y: 0 }}
                        className="bg-gradient-to-b from-pokedex-screen to-pokedex-screen-dark p-6 rounded-xl text-center space-y-4 shadow-2xl"
                      >
                        <motion.div
                          animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
                          transition={{ duration: 1, repeat: Infinity }}
                        >
                          <img
                            src={getPokemonImageUrl(battleState.winner === 1 ? pokemon1.id : pokemon2.id)}
                            alt="Winner"
                            className="w-32 h-32 object-contain mx-auto drop-shadow-lg"
                            loading="lazy"
                            decoding="async"
                          />
                        </motion.div>
                        <div>
                          <p className="font-pixel text-lg text-yellow-400">胜利!</p>
                          <p className="font-pixel text-sm text-pokedex-text">
                            {battleState.winner === 1 ? pokemon1.name : pokemon2.name}
                          </p>
                          <p className="text-xs text-pokedex-text/50 mt-1">
                            经过 {battleState.turn} 回合
                          </p>
                        </div>
                        <motion.button
                          onClick={resetBattle}
                          className="px-4 py-2 bg-pokedex-blue hover:bg-pokedex-blue/80 text-white rounded-lg font-pixel text-xs transition-colors"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          再来一局
                        </motion.button>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )}

            {/* Empty State */}
            {(!pokemon1 || !pokemon2) && (
              <div className="bg-pokedex-screen rounded-lg p-8 text-center">
                <Swords className="w-12 h-12 text-pokedex-text/20 mx-auto mb-2" />
                <p className="font-pixel text-xs text-pokedex-text/50">
                  选择两只宝可梦开始对战模拟
                </p>
              </div>
            )}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};
