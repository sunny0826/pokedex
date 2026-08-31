import { Suspense, lazy, useState, useMemo, useEffect, useRef, useCallback } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  usePokemonList,
  usePokemonRangeList,
  usePokemonIdList,
  PokemonListItem,
} from '@/hooks/usePokemon';
import { useFavorites } from '@/hooks/useFavorites';
import { PokemonGrid } from './PokemonGrid';
import { PokemonDetail } from './PokemonDetail';
import { getGenerationRange } from './GenerationFilter';
import { useTeamBuilder } from '@/hooks/useTeamBuilder';
import { useBattleLogic } from '@/hooks/useBattleLogic';
import { useBattleStats } from '@/hooks/useBattleStats';
import { PokedexClosed } from './PokedexClosed';
import { LanguageToggle } from './LanguageToggle';
import { PokemonType } from '@/data/pokemon';
import { pokemonSpecialFormIds, type PokemonSpecialFormKind } from '@/lib/pokemonSpecialForms';
import {
  POKEDEX_COMPACT_VIEWPORT_HEIGHT_CLASS,
  POKEDEX_EXPANDED_VIEWPORT_HEIGHT_CLASS,
  POKEDEX_FOLDABLE_VIEWPORT_HEIGHT_CLASS,
} from '@/lib/pokedexLayout';
import { cn } from '@/lib/utils';
import { X, Shuffle, HelpCircle, Swords, Users, BarChart3 } from 'lucide-react';
import { useI18n } from '@/hooks/useI18n';
import { useIsMobile } from '@/hooks/use-mobile';
import { useIsFoldableOpen } from '@/hooks/useFoldableOpen';
import { useAndroidShell } from '@/hooks/useAndroidShell';
import { impactAndroid, ImpactStyle, isNativeAndroid, notifyAndroid, NotificationType } from '@/lib/native/androidApp';

type MobilePanel = 'left' | 'right';
type PokedexPhase = 'closed' | 'opening' | 'open' | 'closing';

const BattleSelector = lazy(() => import('./BattleView').then((module) => ({ default: module.BattleSelector })));
const BattleArena = lazy(() => import('./BattleView').then((module) => ({ default: module.BattleArena })));
const TeamBuilderSelector = lazy(() => import('./TeamBuilderView').then((module) => ({ default: module.TeamBuilderSelector })));
const TeamBuilderAnalysis = lazy(() => import('./TeamBuilderView').then((module) => ({ default: module.TeamBuilderAnalysis })));
const BattleStatsPanel = lazy(() => import('./BattleStatsPanel').then((module) => ({ default: module.BattleStatsPanel })));
const TypeEffectivenessChart = lazy(() => import('./TypeEffectivenessChart').then((module) => ({ default: module.TypeEffectivenessChart })));

const PanelFallback = () => (
  <div className="flex h-full items-center justify-center bg-pokedex-screen text-pokedex-text">
    <div className="size-6 animate-spin rounded-full border-2 border-pokedex-text/30 border-t-pokedex-text motion-reduce:animate-none" />
  </div>
);

export const Pokedex = () => {
  const { language, t } = useI18n();
  const isMobile = useIsMobile();
  const isFoldableOpen = useIsFoldableOpen();
  const isSinglePanel = isMobile && !isFoldableOpen;
  const isFoldableExpanded = isFoldableOpen && !isSinglePanel;
  const isWebExpanded = !isNativeAndroid() && !isSinglePanel;
  const fillViewport = isFoldableExpanded || isWebExpanded;
  const shouldReduceMotion = useReducedMotion();
  const [pokedexPhase, setPokedexPhase] = useState<PokedexPhase>('closed');
  const isOpen = pokedexPhase !== 'closed';
  const isAnimatingCover = pokedexPhase === 'opening' || pokedexPhase === 'closing';
  const [selectedId, setSelectedId] = useState<number | null>(25);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState<PokemonType | null>(null);
  const [selectedGeneration, setSelectedGeneration] = useState<number | null>(null);
  const [selectedSpecialForm, setSelectedSpecialForm] = useState<PokemonSpecialFormKind | null>(null);
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);
  const [selectedGroupId, setSelectedGroupId] = useState<string | null>(null);
  const [scrollTrigger, setScrollTrigger] = useState<number>(0);

  // View Mode State
  const [viewMode, setViewMode] = useState<'pokedex' | 'battle' | 'team-builder' | 'battle-stats'>('pokedex');
  const [activeSlot, setActiveSlot] = useState<1 | 2>(1);
  const [mobilePanel, setMobilePanel] = useState<MobilePanel>('left');
  const selectedGenerationRange = useMemo(
    () => (selectedGeneration ? getGenerationRange(selectedGeneration) : null),
    [selectedGeneration]
  );
  const hasSearchQuery = searchQuery.trim().length > 0;
  const shouldUseGenerationRangeList =
    viewMode === 'pokedex' &&
    selectedGeneration !== null &&
    selectedGenerationRange !== null &&
    !hasSearchQuery &&
    selectedSpecialForm === null &&
    !showFavoritesOnly;
  const shouldUseSpecialFormIdList =
    viewMode === 'pokedex' &&
    selectedSpecialForm !== null;
  const shouldLoadCompletePokemonList =
    (hasSearchQuery && !shouldUseSpecialFormIdList) ||
    (selectedType !== null && !shouldUseGenerationRangeList && !shouldUseSpecialFormIdList) ||
    (selectedSpecialForm !== null && !shouldUseSpecialFormIdList) ||
    (showFavoritesOnly && !shouldUseSpecialFormIdList) ||
    viewMode === 'battle' ||
    viewMode === 'team-builder';

  // Hooks
  const battleLogic = useBattleLogic();
  const teamBuilder = useTeamBuilder({ autoLoadAll: viewMode === 'team-builder' });
  const battleStats = useBattleStats();
  const { getBattleResult, startBattle } = battleLogic;
  const { recordBattle } = battleStats;

  // Track recorded battles to avoid duplicate recordings
  const lastRecordedBattle = useRef<string | null>(null);
  const coverAnimationTimeout = useRef<number | null>(null);

  const clearCoverAnimationTimeout = useCallback(() => {
    if (coverAnimationTimeout.current === null) return;
    window.clearTimeout(coverAnimationTimeout.current);
    coverAnimationTimeout.current = null;
  }, []);

  useEffect(() => {
    return clearCoverAnimationTimeout;
  }, [clearCoverAnimationTimeout]);

  // Record battle result when battle finishes
  useEffect(() => {
    const result = getBattleResult();
    if (result) {
      const battleKey = `${result.winnerId}-${result.loserId}-${result.turns}`;
      if (lastRecordedBattle.current !== battleKey) {
        recordBattle(
          result.winnerId,
          result.winnerName,
          result.loserId,
          result.loserName,
          result.battleMode,
          result.turns
        );
        lastRecordedBattle.current = battleKey;
        void notifyAndroid(NotificationType.Success);
      }
    }
  }, [getBattleResult, recordBattle]);

  // Reset battle tracking when starting new battle
  const handleStartBattle = (mode: 'auto' | 'manual') => {
    lastRecordedBattle.current = null;
    startBattle(mode);
  };

  const openPokedex = useCallback(() => {
    clearCoverAnimationTimeout();
    setMobilePanel('left');
    setPokedexPhase(shouldReduceMotion ? 'open' : 'opening');
    if (!shouldReduceMotion) {
      coverAnimationTimeout.current = window.setTimeout(() => {
        setPokedexPhase('open');
        coverAnimationTimeout.current = null;
      }, 460);
    }
  }, [clearCoverAnimationTimeout, shouldReduceMotion]);

  const closePokedex = useCallback(() => {
    clearCoverAnimationTimeout();
    setPokedexPhase(shouldReduceMotion ? 'closed' : 'closing');
    if (!shouldReduceMotion) {
      coverAnimationTimeout.current = window.setTimeout(() => {
        setPokedexPhase('closed');
        coverAnimationTimeout.current = null;
      }, 420);
    }
  }, [clearCoverAnimationTimeout, shouldReduceMotion]);

  const {
    favorites,
    toggleFavorite,
    isFavorite,
    groups,
    addGroup,
    removeGroup,
    groupColors,
    togglePokemonGroup,
    isPokemonInGroup,
    getPokemonsByGroup,
    exportData,
    importData,
  } = useFavorites();
  const {
    data,
    isLoading,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
    maxPokemonId,
  } = usePokemonList({ autoLoadAll: shouldLoadCompletePokemonList });
  const allPokemon = useMemo<PokemonListItem[]>(() => {
    return data?.pages.flat() || [];
  }, [data]);
  const generationRangeQuery = usePokemonRangeList({
    startId: selectedGenerationRange?.[0] ?? null,
    endId: selectedGenerationRange?.[1] ?? null,
    cacheKey: selectedGeneration,
    enabled: shouldUseGenerationRangeList,
  });
  const specialFormIds = useMemo(() => {
    if (!selectedSpecialForm) return [];

    const ids = pokemonSpecialFormIds[selectedSpecialForm];
    if (!selectedGenerationRange) return ids;

    return ids.filter((id) => id >= selectedGenerationRange[0] && id <= selectedGenerationRange[1]);
  }, [selectedGenerationRange, selectedSpecialForm]);
  const specialFormListQuery = usePokemonIdList({
    ids: specialFormIds,
    cacheKey: `${selectedSpecialForm ?? 'none'}-${selectedGeneration ?? 'all'}`,
    enabled: shouldUseSpecialFormIdList,
  });
  const gridPokemon = shouldUseGenerationRangeList
    ? generationRangeQuery.data ?? []
    : shouldUseSpecialFormIdList
      ? specialFormListQuery.data ?? []
      : allPokemon;
  const gridIsLoading = shouldUseGenerationRangeList
    ? generationRangeQuery.isLoading
    : shouldUseSpecialFormIdList
      ? specialFormListQuery.isLoading
      : isLoading;
  const gridIsFetchingMore = shouldUseGenerationRangeList
    ? generationRangeQuery.isFetching
    : shouldUseSpecialFormIdList
      ? specialFormListQuery.isFetching
      : isFetchingNextPage;
  const gridHasMore = shouldUseGenerationRangeList || shouldUseSpecialFormIdList ? false : hasNextPage;
  const gridLoadMore = shouldUseGenerationRangeList || shouldUseSpecialFormIdList ? undefined : fetchNextPage;

  const handleRandom = () => {
    const randomId = Math.floor(Math.random() * maxPokemonId) + 1;
    setSelectedId(randomId);
    if (isSinglePanel) setMobilePanel('right');
    void impactAndroid(ImpactStyle.Light);
    // Trigger auto-scroll for random selection
    setScrollTrigger(Date.now());
    // Reset filters to ensure the user feels like they are exploring the whole pokedex
    setSearchQuery('');
    setSelectedType(null);
    setSelectedGeneration(null);
    setSelectedSpecialForm(null);
  };

  const handleSelectPokemon = (id: number) => {
    setSelectedId(id);
    if (isSinglePanel) setMobilePanel('right');
    void impactAndroid(ImpactStyle.Light);
  };

  const handleBattleSelectPokemon = (id: number) => {
    if (activeSlot === 1) {
      battleLogic.setPokemon1Id(id);
      if (battleLogic.pokemon2Id && isSinglePanel) {
        setMobilePanel('right');
      } else {
        setActiveSlot(2);
      }
      return;
    }

    battleLogic.setPokemon2Id(id);
    if (battleLogic.pokemon1Id && isSinglePanel) {
      setMobilePanel('right');
    } else {
      setActiveSlot(1);
    }
  };

  const openBattleMode = () => {
    setViewMode('battle');
    setMobilePanel('left');
    void impactAndroid(ImpactStyle.Medium);
  };

  const openTeamBuilder = () => {
    setViewMode('team-builder');
    setMobilePanel('left');
    void impactAndroid(ImpactStyle.Medium);
  };

  const exitToPokedex = () => {
    setViewMode('pokedex');
    setMobilePanel('right');
    void impactAndroid(ImpactStyle.Light);
  };

  const handleAndroidBackButton = useCallback(() => {
    if (!isOpen) return false;

    if (viewMode === 'battle-stats') {
      setViewMode('battle');
      setMobilePanel('right');
      return true;
    }

    if (viewMode !== 'pokedex') {
      setViewMode('pokedex');
      setMobilePanel(isSinglePanel ? 'right' : mobilePanel);
      return true;
    }

    if (isSinglePanel && mobilePanel === 'right') {
      setMobilePanel('left');
      return true;
    }

    closePokedex();
    return true;
  }, [closePokedex, isOpen, isSinglePanel, mobilePanel, viewMode]);

  useAndroidShell(handleAndroidBackButton);

  const commonPokemonGridProps = {
    pokemons: gridPokemon,
    searchQuery,
    onSearchChange: setSearchQuery,
    selectedType,
    onSelectType: setSelectedType,
    selectedGeneration,
    onSelectGeneration: setSelectedGeneration,
    selectedSpecialForm,
    onSelectSpecialForm: setSelectedSpecialForm,
    isLoading: gridIsLoading,
    isFetchingMore: gridIsFetchingMore,
    hasMore: gridHasMore,
    onLoadMore: gridLoadMore,
    favorites,
    showFavoritesOnly,
    onToggleShowFavorites: () => setShowFavoritesOnly(prev => !prev),
    groups,
    selectedGroupId,
    onSelectGroup: setSelectedGroupId,
    onAddGroup: addGroup,
    onRemoveGroup: removeGroup,
    getPokemonsByGroup,
    groupColors,
    onExport: exportData,
    onImport: importData,
    scrollTrigger,
  };

  const leftPanelLabel = viewMode === 'team-builder' ? t('mobile.team') : t('mobile.select');
  const rightPanelLabel = (() => {
    if (viewMode === 'battle') return t('mobile.battle');
    if (viewMode === 'battle-stats') return t('battle.stats');
    if (viewMode === 'team-builder') return t('mobile.analysis');
    return t('mobile.detail');
  })();
  const viewportHeightClass = isSinglePanel
    ? POKEDEX_COMPACT_VIEWPORT_HEIGHT_CLASS
    : fillViewport
      ? POKEDEX_FOLDABLE_VIEWPORT_HEIGHT_CLASS
      : POKEDEX_EXPANDED_VIEWPORT_HEIGHT_CLASS;

  const mobileHardwareControls = (
    <div className="flex min-w-0 flex-1 items-center gap-2">
      <LanguageToggle compact variant="device" />
      <div className="grid min-w-0 flex-1 grid-cols-2 gap-1 rounded-md bg-pokedex-dark/35 p-1 shadow-inner">
        <button
          type="button"
          aria-pressed={mobilePanel === 'left'}
          onClick={() => setMobilePanel('left')}
          className={`min-h-11 rounded-sm px-2 font-pixel text-[9px] transition-colors active:translate-y-0.5 ${
            mobilePanel === 'left'
              ? 'bg-pokedex-yellow text-pokedex-dark shadow-inner'
              : 'bg-pokedex-frame-dark/70 text-white/80'
          }`}
        >
          {leftPanelLabel}
        </button>
        <button
          type="button"
          aria-pressed={mobilePanel === 'right'}
          onClick={() => setMobilePanel('right')}
          className={`min-h-11 rounded-sm px-2 font-pixel text-[9px] transition-colors active:translate-y-0.5 ${
            mobilePanel === 'right'
              ? 'bg-pokedex-yellow text-pokedex-dark shadow-inner'
              : 'bg-pokedex-frame-dark/70 text-white/80'
          }`}
        >
          {rightPanelLabel}
        </button>
      </div>
    </div>
  );

  const shellClassName = cn(
    'w-full mx-auto px-0 pb-0 perspective-1000 flex items-stretch justify-center py-0',
    isSinglePanel
      ? 'h-full max-w-[560px]'
      : isFoldableExpanded
        ? 'h-full max-w-none overflow-hidden'
        : isWebExpanded
          ? 'h-full max-w-6xl overflow-hidden px-3 py-2 sm:px-4 md:px-6'
        : 'h-auto min-h-dvh max-w-6xl px-2 pb-[calc(env(safe-area-inset-bottom)+1rem)] sm:py-6 md:p-6'
  );
  const motionShellClassName = cn(
    'w-full flex justify-center',
    isSinglePanel || fillViewport ? 'h-full' : 'h-auto'
  );
  const pokedexBodyClassName = cn(
    'flex w-full items-stretch gap-0',
    isSinglePanel ? 'h-full flex-col' : fillViewport ? 'h-full flex-row' : 'h-auto flex-row'
  );
  const leftPanelGroupClassName = cn(
    'min-h-0 flex-1 z-10 min-w-0',
    isSinglePanel
      ? (mobilePanel === 'right' ? 'hidden' : 'flex h-full flex-col')
      : fillViewport
        ? 'flex h-full flex-row'
      : 'flex h-auto flex-row'
  );
  const panelFrameBaseClassName = 'pokedex-frame flex min-h-0 flex-col rounded-2xl p-3 flex-1 min-w-0';
  const leftPanelClassName = cn(
    panelFrameBaseClassName,
    'w-full',
    isSinglePanel
      ? 'h-full'
      : isFoldableExpanded
        ? 'h-full rounded-l-3xl rounded-r-none'
      : isWebExpanded
        ? 'h-full rounded-l-3xl rounded-r-none sm:p-4 md:p-5'
      : 'h-auto rounded-l-3xl rounded-r-none sm:p-4 md:p-5'
  );
  const rightPanelClassName = cn(
    panelFrameBaseClassName,
    'origin-left',
    isSinglePanel
      ? (mobilePanel === 'left' ? 'hidden' : 'flex h-full')
      : isFoldableExpanded
        ? 'flex h-full rounded-l-none rounded-r-3xl'
      : isWebExpanded
        ? 'flex h-full rounded-l-none rounded-r-3xl sm:p-4 md:p-5'
      : 'flex h-auto rounded-l-none rounded-r-3xl sm:p-4 md:p-5'
  );
  const panelTopBarClassName = cn('mb-2 flex min-h-11 items-center justify-between gap-2', !isSinglePanel && 'sm:mb-3');
  const closeButtonClassName = cn(
    'group relative flex items-center justify-center min-h-11 min-w-11 rounded-full',
    'bg-black/20 hover:bg-black/30 active:bg-black/40',
    'border border-white/10 hover:border-white/20',
    'transition-all duration-200 ease-out',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50',
    'active:scale-95'
  );
  const closeIconClassName = cn(
    'size-5 text-white/80 transition-all duration-200 group-hover:text-white',
    !isSinglePanel && 'sm:size-6'
  );
  const screenBezelClassName = cn(
    'screen-bezel rounded-lg p-2',
    viewportHeightClass,
    fillViewport ? 'flex-1 min-h-0 overflow-hidden' : !isSinglePanel && 'sm:p-3 md:p-4'
  );
  const bottomControlsClassName = cn('mt-3 flex flex-none items-center justify-between gap-3', !isSinglePanel && 'sm:mt-4');
  const randomButtonClassName = cn(
    'flex-1 max-w-[108px] min-h-11',
    'bg-pokedex-green hover:bg-pokedex-green/90 active:bg-pokedex-green/80',
    'rounded button-3d flex items-center justify-center gap-1',
    'transition-all active:translate-y-0.5 active:shadow-inner will-change-transform',
    'group cursor-pointer',
    !isSinglePanel && 'sm:h-11 sm:max-w-[120px] sm:gap-2'
  );
  const actionButtonsClassName = cn('flex gap-1.5', !isSinglePanel && 'sm:gap-2');
  const hingeClassName = cn(
    'pokedex-hinge hidden flex-shrink-0',
    !isSinglePanel && (isWebExpanded ? 'flex h-full w-3 sm:w-4' : 'flex h-auto min-h-[500px] w-3 sm:w-4')
  );
  const stageClassName = cn('relative w-full', isSinglePanel || fillViewport ? 'h-full' : 'h-auto');
  const coverLayerClassName = cn(
    'pointer-events-none absolute inset-0 z-20 flex justify-center',
    isSinglePanel || fillViewport ? 'h-full' : 'h-auto'
  );
  const openSurfaceClassName = cn(motionShellClassName, isAnimatingCover && 'pointer-events-none');
  const foldedCoverPose = shouldReduceMotion
    ? { opacity: 0 }
    : { opacity: 1, rotateY: -94, x: isSinglePanel ? -18 : -34, scale: 0.985 };
  const closedCoverPose = shouldReduceMotion
    ? { opacity: 1 }
    : { opacity: 1, rotateY: 0, x: 0, scale: 1 };
  const coverInitialPose = pokedexPhase === 'closing' ? foldedCoverPose : closedCoverPose;
  const coverAnimatePose = pokedexPhase === 'opening' ? foldedCoverPose : closedCoverPose;
  const foldTransition = {
    duration: shouldReduceMotion ? 0.12 : pokedexPhase === 'opening' ? 0.46 : 0.42,
    ease: shouldReduceMotion ? 'easeOut' : 'easeInOut',
  };
  const foldStageStyle = shouldReduceMotion
    ? undefined
    : {
        transformStyle: 'preserve-3d' as const,
        perspectiveOrigin: 'left center',
      };
  const foldCoverStyle = shouldReduceMotion
    ? undefined
    : {
        transformOrigin: 'left center',
        transformStyle: 'preserve-3d' as const,
        backfaceVisibility: 'hidden' as const,
      };

  return <div className={shellClassName}>
    <div className={stageClassName} style={foldStageStyle}>
      {isOpen && (
        <motion.div
          className={openSurfaceClassName}
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0.72, scale: 0.992, x: 8 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: shouldReduceMotion ? 0.12 : 0.2, ease: 'easeOut' }}
        >
          {/* Main Pokedex Container */}
          <div className={pokedexBodyClassName}>
            {/* Left Panel Group (Panel + Hinge) */}
            <div className={leftPanelGroupClassName}>
              {/* Left Panel */}
              <div className={leftPanelClassName}>
                <div className={panelTopBarClassName}>
                  {isSinglePanel ? (
                    <div className="min-w-0 flex-1">
                      {mobileHardwareControls}
                    </div>
                  ) : isFoldableExpanded ? (
                    <div className="min-w-0 flex-1">
                      <LanguageToggle variant="device" />
                    </div>
                  ) : (
                    <LanguageToggle variant="device" />
                  )}
                  <button
                    onClick={closePokedex}
                    className={cn(closeButtonClassName, !isSinglePanel && 'invisible')}
                    aria-label={t('pokedex.close')}
                    title={t('pokedex.close')}
                  >
                    <X className={closeIconClassName} />
                  </button>
                </div>

                {/* Main Screen - Left (Pokemon List) */}
                <div className={screenBezelClassName}>
                  <div className="screen-inner rounded overflow-hidden h-full">
                    <Suspense fallback={<PanelFallback />}>
                      {viewMode === 'battle' ? (
                        <BattleSelector
                          pokemonGridProps={{
                            ...commonPokemonGridProps,
                            selectedId: activeSlot === 1 ? battleLogic.pokemon1Id : battleLogic.pokemon2Id,
                            onSelect: handleBattleSelectPokemon
                          }}
                          pokemon1={battleLogic.pokemon1}
                          pokemon2={battleLogic.pokemon2}
                          activeSlot={activeSlot}
                          setActiveSlot={setActiveSlot}
                        />
                      ) : viewMode === 'team-builder' ? (
                        <TeamBuilderSelector
                          team={teamBuilder.team}
                          onSelectPokemon={teamBuilder.handleSelectPokemon}
                          onClearTeam={teamBuilder.clearTeam}
                          allPokemon={teamBuilder.allPokemon}
                          savedTeams={teamBuilder.savedTeams}
                          onSaveTeam={teamBuilder.handleSaveTeam}
                          onLoadTeam={teamBuilder.handleLoadTeam}
                          onUpdateTeam={teamBuilder.handleUpdateTeam}
                          onDeleteTeam={teamBuilder.deleteTeam}
                        />
                      ) : (
                        <PokemonGrid
                          {...commonPokemonGridProps}
                          selectedId={selectedId}
                          onSelect={handleSelectPokemon}
                        />
                      )}
                    </Suspense>
                  </div>
                </div>

                {/* Bottom controls */}
                <div className={bottomControlsClassName}>
                  {/* Green display bar - Random Button */}
                  <button
                    onClick={handleRandom}
                    className={randomButtonClassName}
                    title={t('pokedex.random')}
                    aria-label={t('pokedex.random')}
                  >
                    <Shuffle className="w-3.5 h-3.5 text-white/90 group-hover:rotate-180 transition-transform duration-200" />
                    <span className="font-pixel text-[8px] text-white/90">
                      {language === 'zh' ? '随机' : 'RANDOM'}
                    </span>
                  </button>
                  {/* Action buttons */}
                  <div className={actionButtonsClassName}>
                    <button
                      onClick={() => setShowFavoritesOnly(!showFavoritesOnly)}
                      className={`
                        size-11 rounded button-3d flex items-center justify-center
                        transition-colors duration-200
                        ${showFavoritesOnly ? 'bg-red-500 hover:bg-red-600' : 'bg-gray-200 hover:bg-gray-300'}
                      `}
                      title={showFavoritesOnly ? t('pokedex.showAll') : t('pokedex.favoritesOnly')}
                      aria-label={showFavoritesOnly ? t('pokedex.showAll') : t('pokedex.favoritesOnly')}
                    >
                      <div className={`size-3 rounded-full ${showFavoritesOnly ? 'bg-white' : 'bg-red-400'}`} />
                    </button>

                    <Suspense fallback={
                      <button
                        className="size-11 bg-gray-200 rounded button-3d flex items-center justify-center text-gray-500"
                        title={t('pokedex.typeChart')}
                        aria-label={t('pokedex.typeChart')}
                        disabled
                      >
                        <HelpCircle className="size-4" />
                      </button>
                    }>
                      <TypeEffectivenessChart trigger={
                        <button
                          className="size-11 bg-gray-200 hover:bg-gray-300 rounded button-3d flex items-center justify-center transition-colors duration-200"
                          title={t('pokedex.typeChart')}
                          aria-label={t('pokedex.typeChart')}
                        >
                          <HelpCircle className="size-4 text-purple-600" />
                        </button>
                      } />
                    </Suspense>

                    <button
                      onClick={openBattleMode}
                      className="size-11 bg-gray-200 hover:bg-gray-300 rounded button-3d flex items-center justify-center transition-colors duration-200"
                      title={t('pokedex.battle')}
                      aria-label={t('pokedex.battle')}
                    >
                      <Swords className="size-4 text-orange-600" />
                    </button>

                    <button
                      onClick={openTeamBuilder}
                      className="size-11 bg-gray-200 hover:bg-gray-300 rounded button-3d flex items-center justify-center transition-colors duration-200"
                      title={t('pokedex.teamBuilder')}
                      aria-label={t('pokedex.teamBuilder')}
                    >
                      <Users className="size-4 text-blue-600" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Hinge */}
              <div className={hingeClassName} />
            </div>

            {/* Right Panel */}
            <div className={rightPanelClassName}>
              {/* Top Close Button */}
              <div className={panelTopBarClassName}>
                {isSinglePanel ? (
                  <div className="min-w-0 flex-1">
                    {mobileHardwareControls}
                  </div>
                ) : (
                  <div className="min-w-0 flex-1" aria-hidden="true" />
                )}
                <button
                  onClick={closePokedex}
                  className={cn(closeButtonClassName, 'hover:shadow-lg')}
                  aria-label={t('pokedex.close')}
                  title={t('pokedex.close')}
                >
                  <X className={cn(closeIconClassName, 'group-hover:rotate-90')} />
                </button>
              </div>

              {/* Main Screen - Right (Pokemon Detail) */}
              <div className={screenBezelClassName}>
                <div className="screen-inner rounded overflow-hidden h-full">
                  <Suspense fallback={<PanelFallback />}>
                    {viewMode === 'battle' ? (
                      <BattleArena
                        battleState={battleLogic.battleState}
                        pokemon1={battleLogic.pokemon1}
                        pokemon2={battleLogic.pokemon2}
                        onStart={handleStartBattle}
                        onReset={battleLogic.resetBattle}
                        showDamage={battleLogic.showDamage}
                        attackEffect={battleLogic.attackEffect}
                        onExit={exitToPokedex}
                        onSelectMove={battleLogic.selectMove}
                        currentMoves={battleLogic.getCurrentMoves()}
                        statusInflicted={battleLogic.statusInflicted}
                        onShowStats={() => setViewMode('battle-stats')}
                        totalBattles={battleStats.stats.totalBattles}
                      />
                    ) : viewMode === 'battle-stats' ? (
                      <div className="h-full flex flex-col bg-pokedex-screen">
                        <div className="flex items-center justify-between px-3 py-2 bg-pokedex-screen-light border-b border-pokedex-text/20">
                          <div className="flex items-center gap-2">
                            <BarChart3 className="w-4 h-4 text-pokedex-text" />
                            <h2 className="text-sm font-bold text-pokedex-text">{t('battle.stats')}</h2>
                          </div>
                          <button
                            onClick={() => {
                              setViewMode('battle');
                              setMobilePanel('right');
                            }}
                            className="min-h-11 min-w-11 p-2 rounded-full hover:bg-pokedex-text/10 transition-colors text-pokedex-text/70 hover:text-pokedex-text"
                            title={t('battle.backToBattle')}
                            aria-label={t('battle.backToBattle')}
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                        <div className="flex-1 min-h-0">
                          <BattleStatsPanel
                            stats={battleStats.stats}
                            topPokemon={battleStats.getTopPokemon(5)}
                            mostUsedPokemon={battleStats.getMostUsedPokemon(5)}
                            recentBattles={battleStats.getRecentBattles(10)}
                            onClear={battleStats.clearStats}
                          />
                        </div>
                      </div>
                    ) : viewMode === 'team-builder' ? (
                      <TeamBuilderAnalysis
                        team={teamBuilder.teamPokemons}
                        allPokemon={teamBuilder.allPokemon}
                        onAddPokemon={(id) => {
                          const emptySlot = teamBuilder.team.findIndex(slot => slot === null);
                          if (emptySlot !== -1) {
                            teamBuilder.handleSelectPokemon(emptySlot, id);
                            if (isSinglePanel) setMobilePanel('left');
                          }
                        }}
                        onExit={exitToPokedex}
                      />
                    ) : (
                      <PokemonDetail
                        pokemonId={selectedId}
                        onSelectPokemon={handleSelectPokemon}
                        isFavorite={selectedId ? isFavorite(selectedId) : false}
                        onToggleFavorite={toggleFavorite}
                        groups={groups}
                        isPokemonInGroup={isPokemonInGroup}
                        onTogglePokemonGroup={togglePokemonGroup}
                      />
                    )}
                  </Suspense>
                </div>
              </div>

            </div>
          </div>
        </motion.div>
      )}

      {pokedexPhase === 'closed' && (
        <div className={motionShellClassName}>
          <PokedexClosed
            onOpen={openPokedex}
            compactLayout={isSinglePanel}
            foldableExpanded={isFoldableExpanded}
            webExpanded={isWebExpanded}
          />
        </div>
      )}

      {isAnimatingCover && (
        <motion.div
          className={coverLayerClassName}
          initial={coverInitialPose}
          animate={coverAnimatePose}
          transition={foldTransition}
          style={foldCoverStyle}
        >
          <PokedexClosed
            onOpen={openPokedex}
            compactLayout={isSinglePanel}
            foldableExpanded={isFoldableExpanded}
            webExpanded={isWebExpanded}
          />
        </motion.div>
      )}
    </div>
    </div>;
};
