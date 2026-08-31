import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, Search, Plus, X, Shield, Zap, AlertTriangle, CheckCircle, Target, Sparkles, ChevronDown, ChevronUp, Save, FolderOpen, Trash2, Edit2 } from 'lucide-react';
import { PokemonType, getPokemonImageUrl } from '@/data/pokemon';
import { PokemonListItem } from '@/hooks/usePokemon';
import { TypeBadge } from './TypeBadge';
import { SavedTeam } from '@/hooks/useSavedTeams';
import { toast } from '@/hooks/use-toast';
import { Input } from './ui/input';
import { ScrollArea } from './ui/scroll-area';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { Drawer, DrawerClose, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger } from './ui/drawer';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from './ui/alert-dialog';
import { typeChart, allTypes, getTypeEffectiveness } from '@/hooks/useBattleLogic';
import { useI18n } from '@/hooks/useI18n';
import { getTypeName } from '@/data/pokemon';
import { useIsMobile } from '@/hooks/use-mobile';

// Re-export or use from hook
const getDefenseEffectiveness = (defenderTypes: PokemonType[], attackType: PokemonType): number => {
  return getTypeEffectiveness(attackType, defenderTypes);
};

// --- Components ---

interface TeamPokemonSelectorProps {
  pokemons: PokemonListItem[];
  selectedId: number | null;
  onSelect: (id: number | null) => void;
  slot: number;
  disabled?: boolean;
}

const TeamPokemonSelector = ({ pokemons, selectedId, onSelect, slot, disabled }: TeamPokemonSelectorProps) => {
  const [search, setSearch] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useI18n();
  const isMobile = useIsMobile();

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

  const triggerContent = (
    <div className="cursor-pointer">
      {selectedId && selectedPokemon ? (
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="w-full min-h-[132px] aspect-[3/4] bg-pokedex-screen-light rounded-lg border border-pokedex-text/20 flex flex-col items-center justify-center p-1 relative overflow-hidden group-hover:border-pokedex-text/50 transition-colors"
        >
          <img 
            src={getPokemonImageUrl(selectedPokemon.id)} 
            alt={selectedPokemon.name}
            className="w-12 h-12 sm:w-16 sm:h-16 object-contain z-0"
            loading="lazy"
            decoding="async"
          />
          <span className="text-[10px] sm:text-xs text-pokedex-text truncate w-full text-center mt-1 font-bold">{selectedPokemon.name}</span>
          <div className="flex gap-0.5 mt-0.5 justify-center flex-wrap">
            {selectedPokemon.types.map(type => (
              <TypeBadge key={type} type={type} size="sm" />
            ))}
          </div>
        </motion.div>
      ) : (
        <div className={`w-full min-h-[132px] aspect-[3/4] bg-pokedex-screen-dark/50 rounded-lg border-2 border-dashed border-pokedex-text/30 flex flex-col items-center justify-center gap-1 transition-all ${
          disabled ? 'opacity-50 cursor-not-allowed' : 'hover:border-pokedex-text/50 hover:bg-pokedex-screen-dark/70'
        }`}>
          <Plus className="w-5 h-5 sm:w-6 sm:h-6 text-pokedex-text/40" />
          <span className="text-[10px] sm:text-xs text-pokedex-text/40">{t('team.slot', { slot })}</span>
        </div>
      )}
    </div>
  );

  const selectorContent = (
    <>
      <div className="p-3 border-b border-pokedex-text/20">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-pokedex-text/50" />
          <Input
            type="text"
            aria-label={t('team.search')}
            placeholder={t('team.search')}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="h-11 bg-pokedex-screen-light pl-9 text-[10px] sm:text-xs"
            autoFocus
          />
        </div>
      </div>
      <ScrollArea className={isMobile ? 'h-[58dvh]' : 'h-64'}>
        <div className="p-1.5">
          {filteredPokemons.map(pokemon => (
            <button
              key={pokemon.id}
              onClick={() => {
                onSelect(pokemon.id);
                setIsOpen(false);
                setSearch('');
              }}
              className="w-full min-h-11 p-2 flex items-center gap-2 rounded hover:bg-pokedex-screen-light transition-colors"
            >
              <span className="text-[10px] text-pokedex-text/50 w-8">#{pokemon.id}</span>
              <img 
                src={getPokemonImageUrl(pokemon.id)} 
                alt={pokemon.name}
                className="w-9 h-9 object-contain"
                loading="lazy"
                decoding="async"
              />
              <span className="text-sm text-pokedex-text flex-1 text-left font-bold truncate">{pokemon.name}</span>
              <div className="flex gap-0.5">
                {pokemon.types.map(type => (
                  <TypeBadge key={type} type={type} size="sm" />
                ))}
              </div>
            </button>
          ))}
        </div>
      </ScrollArea>
    </>
  );

  const clearButton = selectedId ? (
    <button
      type="button"
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        onSelect(null);
      }}
      className="absolute top-1 right-1 min-h-11 min-w-11 bg-red-500 rounded-full flex items-center justify-center opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity z-10"
      aria-label={t('team.clear')}
    >
      <X className="w-4 h-4 text-white" />
    </button>
  ) : null;

  if (isMobile) {
    return (
      <div className="relative group">
        <Drawer open={isOpen} onOpenChange={setIsOpen}>
          <DrawerTrigger asChild>
            <button type="button" disabled={disabled} className="w-full text-left disabled:cursor-not-allowed">
              {triggerContent}
            </button>
          </DrawerTrigger>
          <DrawerContent className="max-h-[86dvh] bg-pokedex-screen border-pokedex-text/30 pb-[env(safe-area-inset-bottom)]">
            <DrawerHeader className="relative px-4 pb-1 text-left">
              <DrawerTitle className="text-sm font-pixel text-pokedex-text">
                {t('team.choosePokemon')} · {t('team.slot', { slot })}
              </DrawerTitle>
              <DrawerClose className="absolute right-3 top-2 flex min-h-11 min-w-11 items-center justify-center rounded-full text-pokedex-text/70 hover:bg-pokedex-screen-light hover:text-pokedex-text">
                <X className="w-4 h-4" />
                <span className="sr-only">{t('pokedex.close')}</span>
              </DrawerClose>
            </DrawerHeader>
            {selectorContent}
          </DrawerContent>
        </Drawer>
        {clearButton}
      </div>
    );
  }

  return (
    <div className="relative group">
      <Popover open={isOpen} onOpenChange={setIsOpen}>
        <PopoverTrigger asChild>
          <button type="button" disabled={disabled} className="w-full text-left disabled:cursor-not-allowed">
            {triggerContent}
          </button>
        </PopoverTrigger>
        <PopoverContent className="w-[min(20rem,calc(100vw-2rem))] p-0 bg-pokedex-screen border-pokedex-text/30" side="bottom" align="center" sideOffset={8}>
          {selectorContent}
        </PopoverContent>
      </Popover>
      {clearButton}
    </div>
  );
};

// Saved Teams Manager
interface SavedTeamsManagerProps {
  savedTeams: SavedTeam[];
  currentTeam: (number | null)[];
  onLoadTeam: (pokemonIds: (number | null)[]) => void;
  onSaveTeam: (name: string) => void;
  onUpdateTeam: (id: string, pokemonIds: (number | null)[]) => void;
  onDeleteTeam: (id: string) => void;
  allPokemon: PokemonListItem[];
}

const SavedTeamsManager = ({ 
  savedTeams, 
  currentTeam, 
  onLoadTeam, 
  onSaveTeam, 
  onUpdateTeam,
  onDeleteTeam,
  allPokemon 
}: SavedTeamsManagerProps) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [newTeamName, setNewTeamName] = useState('');
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editingName, setEditingName] = useState('');
  const { t } = useI18n();
  
  const currentTeamCount = currentTeam.filter(id => id !== null).length;

  const handleSave = () => {
    if (!newTeamName.trim()) {
      toast({ title: t('team.emptyName'), variant: 'destructive' });
      return;
    }
    if (currentTeamCount === 0) {
      toast({ title: t('team.emptyTeam'), variant: 'destructive' });
      return;
    }
    onSaveTeam(newTeamName.trim());
    setNewTeamName('');
    toast({ title: t('team.savedToast'), description: newTeamName.trim() });
  };

  const getPokemonPreview = (pokemonIds: (number | null)[]) => {
    return pokemonIds
      .filter((id): id is number => id !== null)
      .map(id => allPokemon.find(p => p.id === id))
      .filter((p): p is PokemonListItem => p !== null);
  };

  return (
    <div className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/30 rounded-lg overflow-hidden flex flex-col max-h-full">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full min-h-11 p-2 sm:p-3 flex items-center justify-between hover:bg-amber-500/5 transition-colors flex-shrink-0"
      >
        <div className="flex items-center gap-2">
          <FolderOpen className="w-4 h-4 text-amber-400" />
          <span className="text-sm font-pixel text-pokedex-text">{t('team.saved')}</span>
          <span className="text-xs text-pokedex-text/50">({savedTeams.length})</span>
        </div>
        {isExpanded ? (
          <ChevronUp className="w-4 h-4 text-pokedex-text/50" />
        ) : (
          <ChevronDown className="w-4 h-4 text-pokedex-text/50" />
        )}
      </button>
      
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="flex-1 min-h-0 flex flex-col"
          >
            <div className="p-3 pt-0 space-y-3 flex-1 flex flex-col min-h-0">
              {/* Save current team */}
              <div className="flex gap-2 flex-shrink-0">
                <Input
                  aria-label={t('team.namePlaceholder')}
                  placeholder={t('team.namePlaceholder')}
                  value={newTeamName}
                  onChange={(e) => setNewTeamName(e.target.value)}
                  className="h-11 text-base sm:text-sm bg-pokedex-screen-light border-pokedex-text/20 flex-1"
                  onKeyDown={(e) => e.key === 'Enter' && handleSave()}
                />
                <button
                  onClick={handleSave}
                  disabled={currentTeamCount === 0}
                  className="min-h-11 px-3 bg-amber-500 hover:bg-amber-400 disabled:opacity-50 disabled:cursor-not-allowed rounded text-white text-xs flex items-center gap-1 transition-colors"
                >
                  <Save className="w-3 h-3" />
                  {t('team.save')}
                </button>
              </div>
              
              {/* Saved teams list */}
              <div className="flex-1 overflow-y-auto min-h-0 space-y-2 pr-1 custom-scrollbar">
                {savedTeams.length === 0 ? (
                  <div className="text-center py-4 text-pokedex-text/50 text-xs">
                    {t('team.noSaved')}
                  </div>
                ) : (
                  savedTeams.map((team, index) => {
                    const preview = getPokemonPreview(team.pokemonIds);
                    const isEditing = editingId === team.id;
                    
                    return (
                      <motion.div
                        key={team.id}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.03 }}
                        className="bg-pokedex-screen-dark/50 rounded-lg p-2 group hover:bg-pokedex-screen-dark/70 transition-colors"
                      >
                        <div className="flex items-center gap-2">
                          {isEditing ? (
                            <Input
                              value={editingName}
                              onChange={(e) => setEditingName(e.target.value)}
                              className="h-11 text-xs bg-pokedex-screen-light border-pokedex-text/20 flex-1"
                              autoFocus
                              onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                  onUpdateTeam(team.id, team.pokemonIds);
                                  setEditingId(null);
                                }
                                if (e.key === 'Escape') setEditingId(null);
                              }}
                            />
                          ) : (
                            <span className="text-xs text-pokedex-text flex-1 truncate font-bold">{team.name}</span>
                          )}
                          <span className="text-[10px] text-pokedex-text/40">
                            {preview.length}/6
                          </span>
                        </div>
                        
                        {/* Pokemon preview */}
                        <div className="flex gap-0.5 mt-1.5">
                          {preview.slice(0, 6).map(pokemon => (
                            <img 
                              key={pokemon.id}
                              src={getPokemonImageUrl(pokemon.id)} 
                              alt={pokemon.name}
                              className="w-6 h-6 object-contain"
                              title={pokemon.name}
                              loading="lazy"
                              decoding="async"
                            />
                          ))}
                          {Array.from({ length: 6 - preview.length }).map((_, i) => (
                            <div key={`empty-${i}`} className="w-6 h-6 rounded bg-pokedex-screen-dark/50" />
                          ))}
                        </div>
                        
                        {/* Actions */}
                        <div className="flex gap-1 mt-2 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity">
                          <button
                            onClick={() => {
                              onLoadTeam(team.pokemonIds);
                              toast({ title: t('team.loaded'), description: team.name });
                            }}
                            className="min-h-11 flex-1 px-2 py-1 bg-cyan-500/20 hover:bg-cyan-500/30 rounded text-[10px] text-cyan-400 flex items-center justify-center gap-1 transition-colors"
                          >
                            <FolderOpen className="w-2.5 h-2.5" />
                            {t('team.load')}
                          </button>
                          <button
                            onClick={() => {
                              onUpdateTeam(team.id, currentTeam);
                              toast({ title: t('team.updated'), description: team.name });
                            }}
                            disabled={currentTeamCount === 0}
                            className="min-h-11 flex-1 px-2 py-1 bg-amber-500/20 hover:bg-amber-500/30 disabled:opacity-50 disabled:cursor-not-allowed rounded text-[10px] text-amber-400 flex items-center justify-center gap-1 transition-colors"
                          >
                            <Edit2 className="w-2.5 h-2.5" />
                            {t('team.overwrite')}
                          </button>
                          <AlertDialog>
                            <AlertDialogTrigger asChild>
                              <button
                                className="min-h-11 min-w-11 px-2 py-1 bg-red-500/20 hover:bg-red-500/30 rounded text-[10px] text-red-400 flex items-center justify-center transition-colors"
                                aria-label={`${t('common.delete')} ${team.name}`}
                              >
                                <Trash2 className="w-2.5 h-2.5" />
                              </button>
                            </AlertDialogTrigger>
                            <AlertDialogContent className="w-[calc(100vw-2rem)] max-w-sm rounded-lg">
                              <AlertDialogHeader>
                                <AlertDialogTitle>{t('team.deleteTitle')}</AlertDialogTitle>
                                <AlertDialogDescription>
                                  {t('team.deleteDescription', { name: team.name })}
                                </AlertDialogDescription>
                              </AlertDialogHeader>
                              <AlertDialogFooter className="gap-2">
                                <AlertDialogCancel className="min-h-11">{t('common.cancel')}</AlertDialogCancel>
                                <AlertDialogAction
                                  onClick={() => {
                                    onDeleteTeam(team.id);
                                    toast({ title: t('team.deleted'), description: team.name });
                                  }}
                                  className="min-h-11 bg-destructive text-destructive-foreground hover:bg-destructive/90"
                                >
                                  {t('common.delete')}
                                </AlertDialogAction>
                              </AlertDialogFooter>
                            </AlertDialogContent>
                          </AlertDialog>
                        </div>
                      </motion.div>
                    );
                  })
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Recommendation Component
interface RecommendationProps {
  team: (PokemonListItem | null)[];
  allPokemon: PokemonListItem[];
  onAddPokemon: (id: number) => void;
}

const TeamRecommendation = ({ team, allPokemon, onAddPokemon }: RecommendationProps) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const { language, t } = useI18n();
  
  const validTeam = team.filter((p): p is PokemonListItem => p !== null);
  
  const recommendations = useMemo(() => {
    if (validTeam.length === 0 || validTeam.length >= 6) return [];
    
    const teamIds = new Set(validTeam.map(p => p.id));

    // Calculate team weaknesses
    const teamTypes = new Set<PokemonType>();
    validTeam.forEach(p => p.types.forEach(t => teamTypes.add(t)));
    
    // Find types that hit team super effectively (weaknesses)
    const teamWeaknesses: PokemonType[] = [];
    allTypes.forEach(attackType => {
      let weakCount = 0;
      validTeam.forEach(pokemon => {
        const eff = getDefenseEffectiveness(pokemon.types, attackType);
        if (eff > 1) weakCount++;
      });
      if (weakCount >= 2) teamWeaknesses.push(attackType);
    });
    
    // Find offensive gaps
    const offensiveCoverage = new Set<PokemonType>();
    Array.from(teamTypes).forEach(attackType => {
      allTypes.forEach(targetType => {
        if ((typeChart[attackType]?.[targetType] ?? 1) > 1) {
          offensiveCoverage.add(targetType);
        }
      });
    });
    const offensiveGaps = allTypes.filter(t => !offensiveCoverage.has(t));
    
    // Score each Pokemon
    const scoredPokemon = allPokemon
      .filter(p => !teamIds.has(p.id))
      .map(pokemon => {
        let score = 0;
        const reasons: string[] = [];
        
        // Resists weaknesses
        const weaknessProfile = allTypes.reduce((acc, type) => {
           acc[type] = getDefenseEffectiveness(pokemon.types, type);
           return acc;
        }, {} as Record<PokemonType, number>);

        const resistedWeaknesses: PokemonType[] = [];
        teamWeaknesses.forEach(weakness => {
          if (weaknessProfile[weakness] < 1) {
            score += weaknessProfile[weakness] === 0 ? 25 : 15;
            resistedWeaknesses.push(weakness);
          }
        });
        if (resistedWeaknesses.length > 0) reasons.push(t('team.reason.resist'));
        
        // Hits offensive gaps
        const coversGaps: PokemonType[] = [];
        pokemon.types.forEach(attackType => {
          offensiveGaps.forEach(targetType => {
            if ((typeChart[attackType]?.[targetType] ?? 1) > 1 && !coversGaps.includes(targetType)) {
              score += 10;
              coversGaps.push(targetType);
            }
          });
        });
        if (coversGaps.length > 0) reasons.push(t('team.reason.cover'));
        
        // Bonus for new types
        const newTypes = pokemon.types.filter(t => !teamTypes.has(t));
        if (newTypes.length > 0) {
          score += newTypes.length * 5;
          reasons.push(t('team.reason.diversity'));
        }
        
        // Penalty for shared types
        const sharedTypes = pokemon.types.filter(t => teamTypes.has(t));
        if (sharedTypes.length === pokemon.types.length && pokemon.types.length > 0) {
          score -= 10;
        }
        
        return { pokemon, score, reasons, resistedWeaknesses, coversGaps };
      })
      .filter(item => item.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 5);
    
    return scoredPokemon;
  }, [validTeam, allPokemon, t]);
  
  if (validTeam.length === 0) return null;
  if (validTeam.length >= 6) return null;
  
  if (recommendations.length === 0) {
    return (
      <div className="bg-pokedex-screen-dark/50 rounded-lg p-3">
        <div className="flex items-center gap-2 text-pokedex-text/60">
          <Sparkles className="w-4 h-4" />
          <span className="text-sm">{t('team.balanced')}</span>
        </div>
      </div>
    );
  }
  
  return (
    <div className="bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-purple-500/30 rounded-lg overflow-hidden mt-4">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full min-h-11 p-3 flex items-center justify-between hover:bg-purple-500/5 transition-colors"
      >
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-purple-400" />
          <span className="text-sm font-pixel text-pokedex-text">{t('team.recommendations')}</span>
          <span className="text-xs text-pokedex-text/50">({recommendations.length})</span>
        </div>
        {isExpanded ? (
          <ChevronUp className="w-4 h-4 text-pokedex-text/50" />
        ) : (
          <ChevronDown className="w-4 h-4 text-pokedex-text/50" />
        )}
      </button>
      
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="p-3 pt-0 space-y-2">
              {recommendations.map(({ pokemon, resistedWeaknesses, coversGaps }, index) => (
                <motion.div
                  key={pokemon.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-pokedex-screen-dark/50 rounded-lg p-2 flex items-center gap-2 group hover:bg-pokedex-screen-dark/70 transition-colors"
                >
                  <div className="relative">
                    <img 
                      src={getPokemonImageUrl(pokemon.id)} 
                      alt={pokemon.name}
                      className="w-10 h-10 object-contain"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-purple-500 rounded-full flex items-center justify-center text-[8px] text-white font-bold">
                      {index + 1}
                    </div>
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1">
                      <span className="text-xs text-pokedex-text truncate font-bold">{pokemon.name}</span>
                      <div className="flex gap-0.5">
                        {pokemon.types.map(type => (
                          <TypeBadge key={type} type={type} size="sm" />
                        ))}
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-1 mt-0.5">
                      {resistedWeaknesses.length > 0 && (
                        <span className="text-[9px] text-green-400 bg-green-400/10 px-1 rounded">
                          {t('team.resist', {
                            types: resistedWeaknesses.slice(0, 2).map((type) => getTypeName(type, language)).join(language === 'zh' ? '、' : ', '),
                          })}
                        </span>
                      )}
                      {coversGaps.length > 0 && (
                        <span className="text-[9px] text-cyan-400 bg-cyan-400/10 px-1 rounded">
                          {t('team.cover', {
                            types: coversGaps.slice(0, 2).map((type) => getTypeName(type, language)).join(language === 'zh' ? '、' : ', '),
                          })}
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <button
                    onClick={() => onAddPokemon(pokemon.id)}
                    className="min-h-11 min-w-11 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 p-2 bg-purple-500 hover:bg-purple-400 rounded-full transition-all"
                    aria-label={t('team.addToAnalyze')}
                  >
                    <Plus className="w-4 h-4 text-white" />
                  </button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// --- Exported Components ---

export interface TeamBuilderSelectorProps {
  team: (number | null)[];
  onSelectPokemon: (slot: number, pokemonId: number | null) => void;
  onClearTeam: () => void;
  allPokemon: PokemonListItem[];
  savedTeams: SavedTeam[];
  onSaveTeam: (name: string) => void;
  onLoadTeam: (pokemonIds: (number | null)[]) => void;
  onUpdateTeam: (id: string, pokemonIds: (number | null)[]) => void;
  onDeleteTeam: (id: string) => void;
}

export const TeamBuilderSelector = ({
  team,
  onSelectPokemon,
  onClearTeam,
  allPokemon,
  savedTeams,
  onSaveTeam,
  onLoadTeam,
  onUpdateTeam,
  onDeleteTeam
}: TeamBuilderSelectorProps) => {
  const teamCount = team.filter(id => id !== null).length;
  const { t } = useI18n();

  return (
    <div className="flex flex-col h-full bg-pokedex-screen">
      <div className="flex-shrink-0 min-h-11 p-3 bg-pokedex-screen-light border-b border-pokedex-text/20 flex items-center justify-between">
        <h2 className="text-sm font-bold text-pokedex-text flex items-center gap-2">
          <Users className="w-4 h-4" />
          {t('team.myTeam')}
          <span className="text-xs text-pokedex-text/60 font-normal">({teamCount}/6)</span>
        </h2>
        {teamCount > 0 && (
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <button
                className="min-h-11 px-2 text-xs text-red-400 hover:text-red-300 flex items-center gap-1 transition-colors"
                aria-label={t('team.clear')}
              >
                <Trash2 className="w-3 h-3" />
                {t('team.clear')}
              </button>
            </AlertDialogTrigger>
            <AlertDialogContent className="w-[calc(100vw-2rem)] max-w-sm rounded-lg">
              <AlertDialogHeader>
                <AlertDialogTitle>{t('team.clearTitle')}</AlertDialogTitle>
                <AlertDialogDescription>{t('team.clearDescription')}</AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter className="gap-2">
                <AlertDialogCancel className="min-h-11">{t('common.cancel')}</AlertDialogCancel>
                <AlertDialogAction
                  onClick={onClearTeam}
                  className="min-h-11 bg-destructive text-destructive-foreground hover:bg-destructive/90"
                >
                  {t('team.clear')}
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        )}
      </div>

      <div className="flex-1 overflow-y-auto p-3 custom-scrollbar flex flex-col gap-4">
        {/* Team Slots Grid */}
        <div className="grid grid-cols-2 gap-2 min-[380px]:grid-cols-3 sm:gap-3">
          {team.map((pokemonId, index) => (
            <TeamPokemonSelector
              key={index}
              pokemons={allPokemon}
              selectedId={pokemonId}
              onSelect={(id) => onSelectPokemon(index, id)}
              slot={index + 1}
            />
          ))}
        </div>

        {/* Saved Teams */}
        <div className="flex-1 min-h-0 flex flex-col">
          <SavedTeamsManager
            savedTeams={savedTeams}
            currentTeam={team}
            onLoadTeam={onLoadTeam}
            onSaveTeam={onSaveTeam}
            onUpdateTeam={onUpdateTeam}
            onDeleteTeam={onDeleteTeam}
            allPokemon={allPokemon}
          />
        </div>
      </div>
    </div>
  );
};

export interface TeamBuilderAnalysisProps {
  team: (PokemonListItem | null)[];
  allPokemon: PokemonListItem[];
  onAddPokemon: (id: number) => void;
  onExit: () => void;
}

export const TeamBuilderAnalysis = ({ team, allPokemon, onAddPokemon, onExit }: TeamBuilderAnalysisProps) => {
  const validTeam = team.filter((p): p is PokemonListItem => p !== null);
  const { language, t } = useI18n();
  
  // Logic from TeamAnalysis
  const teamTypes = new Set<PokemonType>();
  validTeam.forEach(p => p.types.forEach(t => teamTypes.add(t)));

  const offensiveCoverage: Record<PokemonType, boolean> = {} as Record<PokemonType, boolean>;
  allTypes.forEach(targetType => {
    offensiveCoverage[targetType] = Array.from(teamTypes).some(attackType => {
      return (typeChart[attackType]?.[targetType] ?? 1) > 1;
    });
  });

  const defenseAnalysis = {} as Record<PokemonType, { weak: number; resist: number; immune: number }>;
  allTypes.forEach(attackType => {
    let weak = 0, resist = 0, immune = 0;
    validTeam.forEach(pokemon => {
      const eff = getDefenseEffectiveness(pokemon.types, attackType);
      if (eff > 1) weak++;
      else if (eff === 0) immune++;
      else if (eff < 1) resist++;
    });
    defenseAnalysis[attackType] = { weak, resist, immune };
  });

  const majorWeaknesses = allTypes.filter(t => defenseAnalysis[t].weak >= 3);
  const minorWeaknesses = allTypes.filter(t => defenseAnalysis[t].weak === 2);
  const offensiveGaps = allTypes.filter(t => !offensiveCoverage[t]);

  const typesCovered = allTypes.filter(t => offensiveCoverage[t]).length;
  const coverageScore = Math.round((typesCovered / allTypes.length) * 100);
  const weaknessScore = Math.max(0, 100 - majorWeaknesses.length * 20 - minorWeaknesses.length * 10);
  const balanceScore = validTeam.length >= 4 ? Math.round((coverageScore + weaknessScore) / 2) : Math.round((coverageScore + weaknessScore) / 2 * 0.7);
  const totalScore = Math.min(100, Math.round(balanceScore + (validTeam.length * 5)));

  return (
    <div className="h-full flex flex-col bg-pokedex-screen">
      {/* Header */}
      <div className="flex min-h-11 items-center justify-between px-3 py-2 bg-pokedex-screen-light border-b border-pokedex-text/20">
        <div className="flex items-center gap-2">
           <Shield className="w-4 h-4 text-pokedex-text" />
           <h2 className="text-sm font-bold text-pokedex-text">{t('team.analysis')}</h2>
        </div>
        <button 
          onClick={onExit}
          className="min-h-11 min-w-11 p-2 rounded-full hover:bg-pokedex-text/10 transition-colors text-pokedex-text/70 hover:text-pokedex-text"
          title={t('team.exit')}
          aria-label={t('team.exit')}
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-3 sm:p-4 custom-scrollbar">
        {validTeam.length === 0 ? (
          <div className="h-full flex flex-col items-center justify-center text-pokedex-text/50">
            <Users className="w-12 h-12 mb-3 opacity-30" />
            <p className="text-sm">{t('team.addToAnalyze')}</p>
          </div>
        ) : (
          <div className="space-y-4">
             {/* Score */}
             <div className="bg-pokedex-screen-dark/50 rounded-lg p-3">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-pixel text-pokedex-text">{t('team.score')}</span>
                <span className={`text-2xl font-pixel ${
                  totalScore >= 80 ? 'text-green-400' :
                  totalScore >= 60 ? 'text-yellow-400' :
                  totalScore >= 40 ? 'text-orange-400' : 'text-red-400'
                }`}>
                  {totalScore}
                </span>
              </div>
              <div className="h-2 bg-pokedex-screen-dark rounded-full overflow-hidden">
                <motion.div
                  className={`h-full origin-left rounded-full ${
                    totalScore >= 80 ? 'bg-green-500' :
                    totalScore >= 60 ? 'bg-yellow-500' :
                    totalScore >= 40 ? 'bg-orange-500' : 'bg-red-500'
                  }`}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: totalScore / 100 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                />
              </div>
              <div className="mt-2 grid grid-cols-2 gap-2 text-[10px] text-pokedex-text/60">
                <div>{t('team.coverageScore', { score: coverageScore })}</div>
                <div>{t('team.defenseScore', { score: weaknessScore })}</div>
              </div>
            </div>

            {/* Coverage */}
            <div>
              <div className="flex items-center gap-1 mb-2">
                <Target className="w-3 h-3 text-pokedex-text/70" />
                <span className="text-xs font-pixel text-pokedex-text/70">{t('team.offensiveCoverage')}</span>
              </div>
              <div className="flex flex-wrap gap-1">
                {allTypes.map(type => (
                  <div
                    key={type}
                    className={`transition-opacity ${offensiveCoverage[type] ? 'opacity-100' : 'opacity-30'}`}
                  >
                    <TypeBadge type={type} size="sm" />
                  </div>
                ))}
              </div>
              {offensiveGaps.length > 0 && (
                <p className="text-[10px] text-orange-400/80 mt-1">
                  {t('team.notCovered', {
                    types: offensiveGaps.map((type) => getTypeName(type, language)).join(language === 'zh' ? '、' : ', '),
                  })}
                </p>
              )}
            </div>

            {/* Weaknesses */}
            <div>
              <div className="flex items-center gap-1 mb-2">
                <Shield className="w-3 h-3 text-pokedex-text/70" />
                <span className="text-xs font-pixel text-pokedex-text/70">{t('team.weaknesses')}</span>
              </div>
              {majorWeaknesses.length === 0 && minorWeaknesses.length === 0 ? (
                <div className="flex items-center gap-1 text-green-400 text-xs">
                  <CheckCircle className="w-3 h-3" />
                  <span>{t('team.defenseBalanced')}</span>
                </div>
              ) : (
                <div className="space-y-1">
                  {majorWeaknesses.length > 0 && (
                    <div className="flex items-start gap-1">
                      <AlertTriangle className="w-3 h-3 text-red-400 mt-0.5 flex-shrink-0" />
                      <div className="flex flex-wrap gap-1">
                        {majorWeaknesses.map(type => (
                          <TypeBadge key={type} type={type} size="sm" />
                        ))}
                        <span className="text-[10px] text-red-400/80 ml-1">{t('team.majorWeakness')}</span>
                      </div>
                    </div>
                  )}
                  {minorWeaknesses.length > 0 && (
                    <div className="flex items-start gap-1">
                      <AlertTriangle className="w-3 h-3 text-yellow-400 mt-0.5 flex-shrink-0" />
                      <div className="flex flex-wrap gap-1">
                        {minorWeaknesses.map(type => (
                          <TypeBadge key={type} type={type} size="sm" />
                        ))}
                        <span className="text-[10px] text-yellow-400/80 ml-1">{t('team.minorWeakness')}</span>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Type Distribution */}
            <div>
              <div className="flex items-center gap-1 mb-2">
                <Zap className="w-3 h-3 text-pokedex-text/70" />
                <span className="text-xs font-pixel text-pokedex-text/70">{t('team.typeDistribution')}</span>
              </div>
              <div className="flex flex-wrap gap-1">
                {Array.from(teamTypes).map(type => (
                  <TypeBadge key={type} type={type} size="sm" />
                ))}
              </div>
              {teamTypes.size < 4 && validTeam.length >= 3 && (
                <p className="text-[10px] text-yellow-400/80 mt-1">
                  {t('team.balanceTip')}
                </p>
              )}
            </div>

            {/* Recommendations */}
            <TeamRecommendation 
              team={team} 
              allPokemon={allPokemon} 
              onAddPokemon={onAddPokemon}
            />
          </div>
        )}
      </div>
    </div>
  );
};
