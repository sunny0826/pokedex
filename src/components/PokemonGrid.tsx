import { useMemo, useEffect, useRef, useCallback } from 'react';
import { PokemonListItem } from '@/hooks/usePokemon';
import { PokemonCard } from './PokemonCard';
import { FavoriteGroupManager } from './FavoriteGroupManager';
import { getGenerationRange } from './GenerationFilter';
import { PokemonFilterMenu } from './PokemonFilterMenu';
import { Search, Loader2, Heart } from 'lucide-react';
import { Input } from './ui/input';
import { PokemonType } from '@/data/pokemon';
import { FavoriteGroup } from '@/hooks/useFavorites';
import { useI18n } from '@/hooks/useI18n';
import { PokemonSpecialFormKind } from '@/lib/pokemonSpecialForms';

export interface PokemonGridProps {
  pokemons: PokemonListItem[];
  selectedId: number | null;
  onSelect: (id: number) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedType: PokemonType | null;
  onSelectType: (type: PokemonType | null) => void;
  selectedGeneration: number | null;
  onSelectGeneration: (gen: number | null) => void;
  selectedSpecialForm: PokemonSpecialFormKind | null;
  onSelectSpecialForm: (kind: PokemonSpecialFormKind | null) => void;
  isLoading?: boolean;
  isFetchingMore?: boolean;
  hasMore?: boolean;
  onLoadMore?: () => void;
  favorites?: number[];
  showFavoritesOnly?: boolean;
  onToggleShowFavorites?: () => void;
  // Groups
  groups?: FavoriteGroup[];
  selectedGroupId?: string | null;
  onSelectGroup?: (groupId: string | null) => void;
  onAddGroup?: (name: string) => void;
  onRemoveGroup?: (groupId: string) => void;
  getPokemonsByGroup?: (groupId: string) => number[];
  groupColors?: string[];
  onExport?: () => void;
  onImport?: (file: File) => Promise<{ success: boolean; message: string }>;
  scrollTrigger?: number;
}

export const PokemonGrid = ({
  pokemons,
  selectedId,
  onSelect,
  searchQuery,
  onSearchChange,
  selectedType,
  onSelectType,
  selectedGeneration,
  onSelectGeneration,
  selectedSpecialForm,
  onSelectSpecialForm,
  isLoading,
  isFetchingMore,
  hasMore,
  onLoadMore,
  favorites = [],
  showFavoritesOnly = false,
  onToggleShowFavorites,
  groups = [],
  selectedGroupId = null,
  onSelectGroup,
  onAddGroup,
  onRemoveGroup,
  getPokemonsByGroup,
  groupColors = [],
  onExport,
  onImport,
  scrollTrigger,
}: PokemonGridProps) => {
  const { language, t } = useI18n();
  const scrollRef = useRef<HTMLDivElement>(null);
  const loadMoreRef = useRef<HTMLDivElement>(null);
  const lastHandledTrigger = useRef<number>(0);
  const hasMountedRef = useRef(false);
  const selectedGenerationRange = useMemo(
    () => (selectedGeneration ? getGenerationRange(selectedGeneration) : null),
    [selectedGeneration]
  );
  const maxLoadedPokemonId = useMemo(
    () => pokemons.reduce((maxId, pokemon) => Math.max(maxId, pokemon.id), 0),
    [pokemons]
  );
  const isResolvingSelectedGeneration = Boolean(
    selectedGenerationRange &&
      (hasMore || isFetchingMore) &&
      maxLoadedPokemonId < selectedGenerationRange[1]
  );

  // Filter Pokemon based on search query, type, generation, favorites, and groups
  const filteredPokemons = useMemo(() => {
    let result = pokemons;
    
    // Filter by favorites only
    if (showFavoritesOnly) {
      result = result.filter((p) => favorites.includes(p.id));
      
      // Further filter by selected group
      if (selectedGroupId && getPokemonsByGroup) {
        const pokemonsInGroup = getPokemonsByGroup(selectedGroupId);
        result = result.filter((p) => pokemonsInGroup.includes(p.id));
      }
    }
    
    // Filter by generation
    if (selectedGenerationRange) {
      result = result.filter((p) => p.id >= selectedGenerationRange[0] && p.id <= selectedGenerationRange[1]);
    }

    if (selectedSpecialForm) {
      result = result.filter((p) => p.specialForms?.includes(selectedSpecialForm));
    }
    
    // Filter by type
    if (selectedType) {
      result = result.filter((p) => p.types.includes(selectedType));
    }
    
    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(query) ||
          p.nameEn.toLowerCase().includes(query) ||
          String(p.id).includes(query)
      );
    }
    
    return result;
  }, [
    pokemons,
    searchQuery,
    selectedType,
    selectedGenerationRange,
    selectedSpecialForm,
    showFavoritesOnly,
    favorites,
    selectedGroupId,
    getPokemonsByGroup,
  ]);
  const shouldShowInitialLoading = Boolean(
    isLoading || (filteredPokemons.length === 0 && isResolvingSelectedGeneration)
  );

  // Intersection Observer for infinite scroll
  const handleObserver = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const target = entries[0];
      if (
        target.isIntersecting &&
        hasMore &&
        !isFetchingMore &&
        !searchQuery &&
        !selectedType &&
        !selectedGeneration &&
        !selectedSpecialForm
      ) {
        onLoadMore?.();
      }
    },
    [hasMore, isFetchingMore, onLoadMore, searchQuery, selectedType, selectedGeneration, selectedSpecialForm]
  );

  useEffect(() => {
    const option = {
      root: scrollRef.current,
      rootMargin: '100px',
      threshold: 0,
    };
    const observer = new IntersectionObserver(handleObserver, option);
    if (loadMoreRef.current) observer.observe(loadMoreRef.current);
    return () => observer.disconnect();
  }, [handleObserver]);

  useEffect(() => {
    if (!hasMountedRef.current) {
      hasMountedRef.current = true;
      return;
    }

    scrollRef.current?.scrollTo({ top: 0, behavior: 'auto' });
  }, [searchQuery, selectedType, selectedGeneration, selectedSpecialForm, showFavoritesOnly, selectedGroupId]);

  // Scroll to selected pokemon
  useEffect(() => {
    if (selectedId && scrollTrigger && scrollTrigger > lastHandledTrigger.current) {
      const element = document.getElementById(`pokemon-card-${selectedId}`);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        lastHandledTrigger.current = scrollTrigger;
      }
    }
  }, [scrollTrigger, selectedId, filteredPokemons]);

  return (
    <div className="h-full flex flex-col bg-pokedex-screen">
      {/* Header */}
      <div className="flex min-h-11 items-center justify-between gap-2 border-b border-pokedex-text/20 bg-pokedex-screen-light px-2 py-1.5 sm:px-4 sm:py-2.5">
        <div className="flex min-w-0 items-center gap-2">
          <span className="font-pixel text-[8px] text-pokedex-text sm:text-[10px]">
            {showFavoritesOnly ? t('grid.favorites') : t('grid.nationalDex')}
          </span>
          {onToggleShowFavorites && (
            <button
              onClick={onToggleShowFavorites}
              className={`min-h-11 min-w-11 rounded p-2 transition-colors ${
                showFavoritesOnly
                  ? 'bg-red-500/20 text-red-500'
                  : 'text-pokedex-text/50 hover:bg-pokedex-text/10 hover:text-pokedex-text'
              }`}
              title={showFavoritesOnly ? t('pokedex.showAll') : t('pokedex.favoritesOnly')}
              aria-label={showFavoritesOnly ? t('pokedex.showAll') : t('pokedex.favoritesOnly')}
            >
              <Heart className={`h-3 w-3 sm:h-3.5 sm:w-3.5 ${showFavoritesOnly ? 'fill-current' : ''}`} />
            </button>
          )}
        </div>
        <div className="flex flex-col items-end gap-0.5 rounded-sm border-b border-pokedex-text/10 bg-pokedex-screen/55 px-2 py-1">
          <span className="font-pixel text-[6px] leading-none text-pokedex-text/50 sm:text-[7px]">
            {language === 'zh' ? '已加载' : 'Loaded'}
          </span>
          <span className="font-pixel text-[8px] leading-none text-pokedex-text sm:text-[10px]">
            {t('grid.count', { count: showFavoritesOnly ? favorites.length : pokemons.length })}
          </span>
        </div>
      </div>

      {/* Search */}
      <div className="px-2 sm:px-3 py-2 bg-pokedex-screen border-b border-pokedex-text/10">
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-2">
          <div className="relative min-w-0 flex-1">
            <Search className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 sm:w-4 sm:h-4 text-pokedex-text/50" />
            <Input
              type="text"
              aria-label={t('grid.search')}
              placeholder={t('grid.search')}
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="h-11 bg-pokedex-screen-light pl-7 text-[10px] text-pokedex-text placeholder:text-pokedex-text/40 focus:border-pokedex-text/40 sm:pl-9 sm:text-xs"
            />
          </div>
          <PokemonFilterMenu
            selectedType={selectedType}
            onSelectType={onSelectType}
            selectedGeneration={selectedGeneration}
            onSelectGeneration={onSelectGeneration}
            selectedSpecialForm={selectedSpecialForm}
            onSelectSpecialForm={onSelectSpecialForm}
          />
        </div>
      </div>

      {/* Group Filter - only show when viewing favorites */}
      {showFavoritesOnly && onSelectGroup && onAddGroup && onRemoveGroup && (
        <div className="px-2 sm:px-3 py-1.5 sm:py-2 bg-pokedex-screen border-b border-pokedex-text/10">
          <FavoriteGroupManager
            groups={groups}
            selectedGroupId={selectedGroupId}
            onSelectGroup={onSelectGroup}
            onAddGroup={onAddGroup}
            onRemoveGroup={onRemoveGroup}
            groupColors={groupColors}
            onExport={onExport}
            onImport={onImport}
          />
        </div>
      )}

      {/* Grid */}
      <div
        ref={scrollRef}
        className="flex-1 overflow-auto scrollbar-pokedex p-1.5 sm:p-3 [scrollbar-gutter:stable]"
      >
        {shouldShowInitialLoading ? (
          <div className="flex items-center justify-center h-32">
            <Loader2 className="w-6 h-6 sm:w-8 sm:h-8 animate-spin text-pokedex-text" />
          </div>
        ) : (
          <>
            <div className="grid grid-cols-[repeat(auto-fill,minmax(68px,1fr))] gap-2">
              {filteredPokemons.map((pokemon) => (
                <PokemonCard
                  key={pokemon.id}
                  id={`pokemon-card-${pokemon.id}`}
                  pokemon={pokemon}
                  isSelected={selectedId === pokemon.id}
                  onClick={() => onSelect(pokemon.id)}
                  isFavorite={favorites.includes(pokemon.id)}
                />
              ))}
            </div>

            {/* Load more trigger */}
            <div ref={loadMoreRef} className="h-4" />

            {(isFetchingMore || (isResolvingSelectedGeneration && filteredPokemons.length > 0)) && (
              <div className="flex items-center justify-center py-4">
                <Loader2 className="w-6 h-6 animate-spin text-pokedex-text" />
              </div>
            )}

            {filteredPokemons.length === 0 && !isLoading && !isResolvingSelectedGeneration && (
              <div className="flex items-center justify-center h-32 text-pokedex-text/60">
                <p className="font-pixel text-[10px]">{t('grid.noResults')}</p>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};
