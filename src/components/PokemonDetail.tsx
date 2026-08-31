import {
  getPokemonImageUrl,
  getTypeName,
  type PokemonDexNumber,
  type PokemonFlavorText,
  type PokemonImageVariant,
  type PokemonImageVariantKind,
  type PokemonType,
  type PokemonAbilityDetail,
  type PokemonEncounterSummary,
  type PokemonFormSummary,
  type PokemonMoveSummary,
  type PokemonSpeciesProfile,
} from '@/data/pokemon';
import { usePokemonDetail } from '@/hooks/usePokemon';
import { TypeBadge } from './TypeBadge';
import { EvolutionChain, SpecialFormPreview } from './EvolutionChain';
import { PokemonGroupTags } from './PokemonGroupTags';
import { useState, useEffect, useCallback, useRef, type ReactNode } from 'react';
import { Loader2, Volume2, VolumeX, Heart, Sparkles, X, Play, Share2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { FavoriteGroup } from '@/hooks/useFavorites';
import { useI18n } from '@/hooks/useI18n';
import { allTypes, getTypeEffectiveness } from '@/lib/typeEffectiveness';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';
import { shareAndroidBlobFile } from '@/lib/native/androidApp';

interface PokemonDetailProps {
  pokemonId: number | null;
  onSelectPokemon?: (id: number) => void;
  isFavorite?: boolean;
  onToggleFavorite?: (id: number) => void;
  groups?: FavoriteGroup[];
  isPokemonInGroup?: (pokemonId: number, groupId: string) => boolean;
  onTogglePokemonGroup?: (pokemonId: number, groupId: string) => void;
}

type DetailTab = 'info' | 'stats' | 'evolution';
type ImageTab = 'official' | 'forms' | 'sprites';
type ImageMode = PokemonImageVariantKind | 'fallbackOfficial';

interface NavigatorWithShareFiles extends Navigator {
  canShare?: (data: ShareData) => boolean;
  share?: (data?: ShareData) => Promise<void>;
}

const officialImageKinds: PokemonImageVariantKind[] = ['official', 'officialShiny'];
const spriteImageKinds: PokemonImageVariantKind[] = ['front', 'back', 'frontShiny', 'backShiny'];
const screenshotBackground = 'hsl(160 30% 20%)';

const waitForNextFrame = () => new Promise<void>((resolve) => requestAnimationFrame(() => resolve()));

const waitForNodeImages = async (node: HTMLElement) => {
  const images = Array.from(node.querySelectorAll('img'));

  await Promise.all(
    images.map((image) => {
      if (image.complete) return Promise.resolve();

      return new Promise<void>((resolve) => {
        const cleanup = () => {
          image.removeEventListener('load', cleanup);
          image.removeEventListener('error', cleanup);
          resolve();
        };

        image.addEventListener('load', cleanup, { once: true });
        image.addEventListener('error', cleanup, { once: true });
      });
    })
  );
};

const captureFullDetailScreenshot = async (node: HTMLElement): Promise<Blob | null> => {
  const width = Math.ceil(node.getBoundingClientRect().width || node.scrollWidth);
  const host = document.createElement('div');
  const clone = node.cloneNode(true) as HTMLElement;
  const scrollContent = clone.querySelector('[data-detail-screenshot-content="true"]') as HTMLElement | null;

  host.setAttribute('aria-hidden', 'true');
  Object.assign(host.style, {
    position: 'fixed',
    inset: '0 auto auto -10000px',
    width: `${width}px`,
    background: screenshotBackground,
    pointerEvents: 'none',
  });

  Object.assign(clone.style, {
    width: `${width}px`,
    height: 'auto',
    minHeight: '0',
    maxHeight: 'none',
    overflow: 'visible',
  });

  if (scrollContent) {
    Object.assign(scrollContent.style, {
      flex: 'none',
      height: 'auto',
      maxHeight: 'none',
      overflow: 'visible',
      scrollbarGutter: 'auto',
    });
  }

  host.appendChild(clone);
  document.body.appendChild(host);

  try {
    await document.fonts?.ready;
    await waitForNodeImages(clone);
    await waitForNextFrame();
    await waitForNextFrame();

    const height = Math.ceil(clone.scrollHeight);

    const { toBlob } = await import('html-to-image');

    return await toBlob(clone, {
      backgroundColor: screenshotBackground,
      cacheBust: true,
      pixelRatio: Math.min(window.devicePixelRatio || 1, 2),
      width,
      height,
      canvasWidth: width,
      canvasHeight: height,
      filter: (domNode) =>
        !(domNode instanceof HTMLElement && domNode.dataset.screenshotExclude === 'true'),
      style: {
        width: `${width}px`,
        height: `${height}px`,
        overflow: 'visible',
      },
    });
  } finally {
    host.remove();
  }
};

export const PokemonDetail = ({
  pokemonId,
  onSelectPokemon,
  isFavorite,
  onToggleFavorite,
  groups = [],
  isPokemonInGroup,
  onTogglePokemonGroup,
}: PokemonDetailProps) => {
  const [activeTab, setActiveTab] = useState<DetailTab>('info');
  const { data: pokemon, isLoading, error } = usePokemonDetail(pokemonId);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isPlayingCry, setIsPlayingCry] = useState(false);
  const [activeImageTab, setActiveImageTab] = useState<ImageTab>('official');
  const [imageMode, setImageMode] = useState<ImageMode>('fallbackOfficial');
  const [selectedFormId, setSelectedFormId] = useState<number | null>(null);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
  const cryAudioRef = useRef<HTMLAudioElement | null>(null);
  const screenshotRef = useRef<HTMLDivElement | null>(null);
  const { language, t } = useI18n();
  const [specialFormPreview, setSpecialFormPreview] = useState<SpecialFormPreview | null>(null);
  const [isSharingScreenshot, setIsSharingScreenshot] = useState(false);

  // Reset transient detail state when pokemon changes.
  useEffect(() => {
    setActiveTab('info');
    setActiveImageTab('official');
    setSpecialFormPreview(null);
    setImageMode('fallbackOfficial');
    setSelectedFormId(null);
  }, [pokemonId]);

  // Stop speech when pokemon changes or component unmounts
  useEffect(() => {
    return () => {
      if (window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
      cryAudioRef.current?.pause();
      cryAudioRef.current = null;
    };
  }, [pokemonId]);

  const handleSpeak = useCallback(() => {
    if (!pokemon) return;

    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      return;
    }

    const text = t('detail.speechSummary', {
      name: pokemon.name,
      description: pokemon.description || t('detail.noDescription'),
      height: pokemon.height,
      weight: pokemon.weight,
    });

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = language === 'zh' ? 'zh-CN' : 'en-US';
    utterance.rate = 0.9;
    utterance.pitch = 1;

    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);

    utteranceRef.current = utterance;
    setIsSpeaking(true);
    window.speechSynthesis.speak(utterance);
  }, [pokemon, isSpeaking, language, t]);

  const handlePlayCry = useCallback(() => {
    if (!pokemon?.cryUrl) return;

    const currentAudio = cryAudioRef.current;
    if (currentAudio && !currentAudio.paused) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
      setIsPlayingCry(false);
      return;
    }

    const audio = new Audio(pokemon.cryUrl);
    audio.onended = () => setIsPlayingCry(false);
    audio.onerror = () => setIsPlayingCry(false);
    cryAudioRef.current = audio;
    setIsPlayingCry(true);
    void audio.play().catch(() => setIsPlayingCry(false));
  }, [pokemon?.cryUrl]);

  const handlePreviewSpecialForm = useCallback((preview: SpecialFormPreview | null) => {
    setActiveImageTab('forms');
    setSpecialFormPreview(preview);
  }, []);

  const handleShareScreenshot = useCallback(async () => {
    if (!pokemon || !screenshotRef.current || isSharingScreenshot) return;

    setIsSharingScreenshot(true);

    try {
      const blob = await captureFullDetailScreenshot(screenshotRef.current);

      if (!blob) {
        throw new Error('Screenshot capture returned empty data');
      }

      const fileName = `pokemon-${String(pokemon.id).padStart(4, '0')}-${pokemon.nameEn.toLowerCase().replace(/[^a-z0-9]+/g, '-')}.png`;
      const title = t('detail.shareTitle', { name: pokemon.name });
      try {
        const sharedOnAndroid = await shareAndroidBlobFile(fileName, blob, title);

        if (sharedOnAndroid) {
          toast.success(t('detail.shareSuccess'));
          return;
        }
      } catch (androidShareError) {
        console.warn('Failed to share Pokemon screenshot on Android', androidShareError);
      }

      const file = new File([blob], fileName, { type: 'image/png' });
      const shareData: ShareData = {
        title,
        text: title,
        files: [file],
      };
      const navigatorWithShare = navigator as NavigatorWithShareFiles;

      if (navigatorWithShare.share && (!navigatorWithShare.canShare || navigatorWithShare.canShare(shareData))) {
        await navigatorWithShare.share(shareData);
        toast.success(t('detail.shareSuccess'));
        return;
      }

      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      link.remove();
      URL.revokeObjectURL(url);
      toast.success(t('detail.shareDownloaded'));
    } catch (shareError) {
      if (shareError instanceof DOMException && shareError.name === 'AbortError') {
        return;
      }

      console.error('Failed to share Pokemon screenshot', shareError);
      toast.error(t('detail.shareFailed'));
    } finally {
      setIsSharingScreenshot(false);
    }
  }, [isSharingScreenshot, pokemon, t]);

  if (!pokemonId) {
    return (
      <div className="h-full flex items-center justify-center bg-pokedex-screen overflow-y-auto [scrollbar-gutter:stable]">
        <div className="text-center text-pokedex-text/60">
          <div className="text-6xl mb-4">?</div>
          <p className="font-pixel text-[10px]">{t('detail.selectPokemon')}</p>
        </div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="h-full flex items-center justify-center bg-pokedex-screen overflow-y-auto [scrollbar-gutter:stable]">
        <Loader2 className="w-12 h-12 animate-spin text-pokedex-text" />
      </div>
    );
  }

  if (error || !pokemon) {
    return (
      <div className="h-full flex items-center justify-center bg-pokedex-screen overflow-y-auto [scrollbar-gutter:stable]">
        <div className="text-center text-pokedex-text/60">
          <div className="text-4xl mb-4">!</div>
          <p className="font-pixel text-[10px]">{t('detail.loadFailed')}</p>
        </div>
      </div>
    );
  }

  const paddedId = String(pokemon.id).padStart(4, '0');
  const maxStat = 160;
  const forms = pokemon.forms ?? [];
  const encounters = pokemon.encounters ?? [];
  const moves = pokemon.moves ?? [];
  const abilityDetails = pokemon.abilityDetails ?? [];
  const speciesProfile = pokemon.speciesProfile;
  const dexNumbers = pokemon.dexNumbers ?? [];
  const flavorTexts = pokemon.flavorTexts ?? [];
  const imageVariants: PokemonImageVariant[] =
    pokemon.imageVariants?.length
      ? pokemon.imageVariants
      : [{ kind: 'official', imageUrl: getPokemonImageUrl(pokemon.id) }];
  const fallbackOfficialVariant: PokemonImageVariant = { kind: 'official', imageUrl: getPokemonImageUrl(pokemon.id) };
  const officialImageVariants = imageVariants.filter((variant) => officialImageKinds.includes(variant.kind));
  const spriteImageVariants = imageVariants.filter((variant) => spriteImageKinds.includes(variant.kind));
  const displayedOfficialVariants = officialImageVariants.length ? officialImageVariants : [fallbackOfficialVariant];
  const activeImageVariants = activeImageTab === 'sprites' ? spriteImageVariants : displayedOfficialVariants;
  const selectedImageVariant = activeImageVariants.find((variant) => variant.kind === imageMode)
    ?? activeImageVariants[0]
    ?? displayedOfficialVariants[0];
  const selectedForm = forms.find((form) => form.pokemonId === selectedFormId) ?? forms[0] ?? null;
  const imageModeLabels: Record<PokemonImageVariantKind, string> = {
    official: t('detail.imageOfficial'),
    officialShiny: t('detail.imageOfficialShiny'),
    front: t('detail.imageFront'),
    back: t('detail.imageBack'),
    frontShiny: t('detail.imageFrontShiny'),
    backShiny: t('detail.imageBackShiny'),
  };
  const imageTabLabels: Record<ImageTab, string> = {
    official: t('detail.imageTabOfficial'),
    forms: t('detail.imageTabForms'),
    sprites: t('detail.imageTabSprites'),
  };
  const handleImageTabChange = (value: string) => {
    setActiveImageTab(value as ImageTab);
    setSpecialFormPreview(null);
  };

  return (
    <div ref={screenshotRef} className="h-full flex flex-col bg-pokedex-screen">
      {/* Header */}
      <div className="flex items-center justify-between px-2 sm:px-4 py-1.5 sm:py-2.5 bg-pokedex-screen-light border-b border-pokedex-text/20">
        <div className="flex min-w-0 items-center gap-2 sm:gap-3">
          <span className="font-pixel text-[8px] sm:text-[10px] text-pokedex-text/70">{paddedId}</span>
          <h2 className="truncate text-base font-bold text-pokedex-text sm:text-lg">{pokemon.name}</h2>
        </div>
        <div className="flex shrink-0 items-center gap-1 sm:gap-1.5">
          <div className="flex max-w-[7.5rem] flex-wrap justify-end gap-1 sm:max-w-none sm:gap-1.5">
            {pokemon.types.map((type) => (
              <TypeBadge key={type} type={type} size="sm" />
            ))}
          </div>
          <button
            type="button"
            onClick={handleShareScreenshot}
            disabled={isSharingScreenshot}
            data-screenshot-exclude="true"
            className={cn(
              'flex size-11 items-center justify-center rounded-sm bg-pokedex-screen text-pokedex-text/70 transition-colors hover:bg-pokedex-text/10 hover:text-pokedex-text',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pokedex-text/60 disabled:cursor-not-allowed disabled:opacity-60'
            )}
            aria-label={t('detail.shareScreenshot')}
            title={t('detail.shareScreenshot')}
            aria-busy={isSharingScreenshot}
          >
            {isSharingScreenshot ? (
              <Loader2 className="size-4 animate-spin motion-reduce:animate-none" aria-hidden="true" />
            ) : (
              <Share2 className="size-4" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Image */}
      <div className="relative flex-shrink-0 bg-gradient-to-b from-pokedex-screen-light to-pokedex-screen p-2 sm:p-4">
        {/* Favorite Button */}
        {onToggleFavorite && (
          <motion.button
            onClick={() => onToggleFavorite(pokemon.id)}
            className="absolute right-2 top-14 z-20 flex size-11 items-center justify-center rounded-full bg-pokedex-screen-light/80 transition-colors hover:bg-pokedex-screen-light sm:right-3 sm:top-16"
            whileTap={{ scale: 0.85 }}
            title={isFavorite ? t('detail.removeFavorite') : t('detail.addFavorite')}
            aria-label={isFavorite ? t('detail.removeFavorite') : t('detail.addFavorite')}
          >
            <motion.div
              className="flex size-5 items-center justify-center sm:size-6"
              animate={isFavorite ? { scale: [1, 1.3, 1] } : {}}
              transition={{ duration: 0.3 }}
            >
              <Heart
                className={`size-4 transition-colors sm:size-5 ${
                  isFavorite
                    ? 'fill-red-500 text-red-500'
                    : 'text-pokedex-text/50 hover:text-red-400'
                }`}
              />
            </motion.div>
          </motion.button>
        )}
        <PokemonImageTabs
          activeTab={activeImageTab}
          onTabChange={handleImageTabChange}
          labels={imageTabLabels}
          pokemonName={pokemon.name}
          imageModeLabels={imageModeLabels}
          officialVariants={displayedOfficialVariants}
          spriteVariants={spriteImageVariants}
          selectedImageVariant={selectedImageVariant}
          selectedImageMode={selectedImageVariant.kind}
          onSelectImageMode={(mode) => setImageMode(mode)}
          forms={forms}
          selectedForm={selectedForm}
          onSelectForm={(formId) => setSelectedFormId(formId)}
          specialFormPreview={specialFormPreview}
          onClearSpecialFormPreview={() => setSpecialFormPreview(null)}
          closeLabel={t('pokedex.close')}
          primalLabel={t('evolution.primalShort')}
          gmaxLabel={t('evolution.gigantamaxShort')}
          emptyFormsLabel={t('detail.noForms')}
          emptySpritesLabel={t('detail.noSprites')}
        />
      </div>

      {/* Tabs */}
      <div className="flex border-y border-pokedex-text/20 bg-pokedex-screen-light">
        <TabButton
          active={activeTab === 'info'}
          onClick={() => setActiveTab('info')}
          label={t('detail.overview')}
        />
        <TabButton
          active={activeTab === 'stats'}
          onClick={() => setActiveTab('stats')}
          label={t('detail.stats')}
        />
        <TabButton
          active={activeTab === 'evolution'}
          onClick={() => setActiveTab('evolution')}
          label={t('detail.evolution')}
        />
      </div>

      {/* Content */}
      <div
        data-detail-screenshot-content="true"
        className="flex-1 w-full overflow-y-scroll scrollbar-pokedex p-2 sm:p-4 bg-pokedex-screen [scrollbar-gutter:stable]"
      >
        {activeTab === 'info' && (
          <div className="space-y-3 sm:space-y-4">
            <div className="flex items-start gap-2">
              <p className="flex-1 text-xs sm:text-sm text-pokedex-text/90 leading-relaxed">
                {pokemon.description || t('detail.noDescription')}
              </p>
              <div className="flex flex-col gap-1.5">
                <motion.button
                  onClick={handleSpeak}
                  className={`flex size-10 flex-shrink-0 items-center justify-center rounded-full transition-colors sm:size-11 ${
                    isSpeaking
                      ? 'bg-pokedex-blue text-white'
                      : 'bg-pokedex-screen-light hover:bg-pokedex-text/20 text-pokedex-text/70 hover:text-pokedex-text'
                  }`}
                  whileTap={{ scale: 0.9 }}
                  title={isSpeaking ? t('detail.stopSpeech') : t('detail.speakOverview')}
                  aria-label={isSpeaking ? t('detail.stopSpeech') : t('detail.speakOverview')}
                >
                  {isSpeaking ? (
                    <motion.div
                      className="flex size-4 items-center justify-center"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 0.8, repeat: Infinity }}
                    >
                      <VolumeX className="size-3.5 sm:size-4" />
                    </motion.div>
                  ) : (
                    <Volume2 className="size-3.5 sm:size-4" />
                  )}
                </motion.button>
                {pokemon.cryUrl && (
                  <motion.button
                    onClick={handlePlayCry}
                    className={`flex size-10 flex-shrink-0 items-center justify-center rounded-full transition-colors sm:size-11 ${
                      isPlayingCry
                        ? 'bg-pokedex-yellow text-pokedex-dark'
                        : 'bg-pokedex-screen-light hover:bg-pokedex-text/20 text-pokedex-text/70 hover:text-pokedex-text'
                    }`}
                    whileTap={{ scale: 0.9 }}
                    title={isPlayingCry ? t('detail.stopCry') : t('detail.playCry')}
                    aria-label={isPlayingCry ? t('detail.stopCry') : t('detail.playCry')}
                  >
                    <Play className="size-3.5 translate-x-px sm:size-4" />
                  </motion.button>
                )}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2 sm:gap-3">
              <InfoCard label={t('detail.height')} value={`${pokemon.height}m`} />
              <InfoCard label={t('detail.weight')} value={`${pokemon.weight}kg`} />
              {pokemon.baseExperience !== undefined && (
                <InfoCard label={t('detail.baseExperience')} value={String(pokemon.baseExperience)} />
              )}
            </div>

            {speciesProfile && (
              <DetailSection title={t('detail.speciesProfile')}>
                <SpeciesProfileGrid
                  profile={speciesProfile}
                  labels={{
                    genus: t('detail.genus'),
                    habitat: t('detail.habitat'),
                    color: t('detail.color'),
                    growthRate: t('detail.growthRate'),
                    generation: t('detail.generation'),
                    shape: t('detail.shape'),
                    captureRate: t('detail.captureRate'),
                    baseHappiness: t('detail.baseHappiness'),
                    gender: t('detail.gender'),
                    male: t('detail.male'),
                    female: t('detail.female'),
                    genderless: t('detail.genderless'),
                    eggGroups: t('detail.eggGroups'),
                    hatchSteps: t('detail.hatchSteps'),
                    steps: t('detail.steps'),
                    baby: t('detail.baby'),
                    legendary: t('detail.legendary'),
                    mythical: t('detail.mythical'),
                  }}
                />
              </DetailSection>
            )}

            {dexNumbers.length > 0 && (
              <DetailSection title={t('detail.dexNumbers')}>
                <DexNumberList dexNumbers={dexNumbers} />
              </DetailSection>
            )}

            {flavorTexts.length > 0 && (
              <DetailSection title={t('detail.versionEntries')}>
                <FlavorTextList flavorTexts={flavorTexts} />
              </DetailSection>
            )}

            <DetailSection title={t('detail.encounters')}>
              <EncounterList
                encounters={encounters}
                emptyLabel={t('detail.noEncounters')}
                levelLabel={t('detail.levelShort')}
                chanceLabel={t('detail.chance')}
              />
            </DetailSection>

            {/* Group Tags - only show when favorited */}
            {isFavorite && isPokemonInGroup && onTogglePokemonGroup && groups.length > 0 && (
              <div className="pt-2 border-t border-pokedex-text/20">
                <PokemonGroupTags
                  groups={groups}
                  pokemonId={pokemon.id}
                  isPokemonInGroup={isPokemonInGroup}
                  onToggleGroup={onTogglePokemonGroup}
                />
              </div>
            )}
          </div>
        )}

        {activeTab === 'stats' && (
          <div className="space-y-2.5">
            <StatBar label="HP" value={pokemon.stats.hp} max={maxStat} color="bg-type-grass" />
            <StatBar label={t('stat.attack')} value={pokemon.stats.attack} max={maxStat} color="bg-type-fire" />
            <StatBar label={t('stat.defense')} value={pokemon.stats.defense} max={maxStat} color="bg-type-water" />
            <StatBar label={t('stat.spAttack')} value={pokemon.stats.spAttack} max={maxStat} color="bg-type-psychic" />
            <StatBar label={t('stat.spDefense')} value={pokemon.stats.spDefense} max={maxStat} color="bg-type-flying" />
            <StatBar label={t('stat.speed')} value={pokemon.stats.speed} max={maxStat} color="bg-type-electric" />

            <DetailSection title={t('detail.defenseProfile')}>
              <DefenseProfile
                types={pokemon.types}
                labels={{
                  weak: t('detail.weakTo'),
                  resist: t('detail.resists'),
                  immune: t('detail.immuneTo'),
                  none: t('detail.none'),
                }}
                language={language}
              />
            </DetailSection>

            {/* Abilities section */}
            <DetailSection title={t('detail.abilities')}>
              <AbilityDetailList
                abilities={pokemon.abilities}
                abilityDetails={abilityDetails}
                hiddenLabel={t('detail.hiddenAbility')}
                noEffectLabel={t('detail.noAbilityEffect')}
              />
            </DetailSection>

            <DetailSection title={t('detail.moves')}>
              <MoveList
                moves={moves}
                emptyLabel={t('detail.noMoves')}
                levelLabel={t('detail.levelShort')}
              />
            </DetailSection>
          </div>
        )}

        {activeTab === 'evolution' && (
          <EvolutionChain
            pokemonId={pokemon.id}
            onSelectPokemon={onSelectPokemon}
            onPreviewSpecialForm={handlePreviewSpecialForm}
          />
        )}
      </div>
    </div>
  );
};

const TabButton = ({
  active,
  onClick,
  label,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
}) => (
  <button
    onClick={onClick}
    className={`min-h-11 flex-1 py-2 text-[10px] sm:text-xs font-medium transition-colors border-b-2 ${
      active
        ? 'bg-pokedex-screen text-pokedex-text border-pokedex-text'
        : 'text-pokedex-text/50 hover:text-pokedex-text/80 border-transparent'
    }`}
  >
    {label}
  </button>
);

const InfoCard = ({ label, value }: { label: string; value: string }) => (
  <div className="bg-pokedex-screen-light rounded p-2 sm:p-3 border border-pokedex-text/20">
    <div className="text-[8px] sm:text-[10px] text-pokedex-text/60 mb-0.5 sm:mb-1">{label}</div>
    <div className="text-base sm:text-lg font-bold text-pokedex-text">{value}</div>
  </div>
);

const DetailSection = ({ title, children }: { title: string; children: ReactNode }) => (
  <section className="pt-3 border-t border-pokedex-text/20">
    <h4 className="mb-2 text-[10px] text-pokedex-text/60">{title}</h4>
    {children}
  </section>
);

const PokemonImageTabs = ({
  activeTab,
  onTabChange,
  labels,
  pokemonName,
  imageModeLabels,
  officialVariants,
  spriteVariants,
  selectedImageVariant,
  selectedImageMode,
  onSelectImageMode,
  forms,
  selectedForm,
  onSelectForm,
  specialFormPreview,
  onClearSpecialFormPreview,
  closeLabel,
  primalLabel,
  gmaxLabel,
  emptyFormsLabel,
  emptySpritesLabel,
}: {
  activeTab: ImageTab;
  onTabChange: (value: string) => void;
  labels: Record<ImageTab, string>;
  pokemonName: string;
  imageModeLabels: Record<PokemonImageVariantKind, string>;
  officialVariants: PokemonImageVariant[];
  spriteVariants: PokemonImageVariant[];
  selectedImageVariant: PokemonImageVariant;
  selectedImageMode: PokemonImageVariantKind;
  onSelectImageMode: (mode: PokemonImageVariantKind) => void;
  forms: PokemonFormSummary[];
  selectedForm: PokemonFormSummary | null;
  onSelectForm: (formId: number) => void;
  specialFormPreview: SpecialFormPreview | null;
  onClearSpecialFormPreview: () => void;
  closeLabel: string;
  primalLabel: string;
  gmaxLabel: string;
  emptyFormsLabel: string;
  emptySpritesLabel: string;
}) => (
  <Tabs value={activeTab} onValueChange={onTabChange} className="space-y-2">
    <TabsList className="grid h-9 w-full grid-cols-3 rounded bg-pokedex-screen/80 p-1 text-pokedex-text/60">
      <TabsTrigger
        value="official"
        className="min-h-7 rounded px-1.5 text-[10px] data-[state=active]:bg-pokedex-text data-[state=active]:text-pokedex-screen data-[state=active]:shadow-none"
      >
        {labels.official}
      </TabsTrigger>
      <TabsTrigger
        value="forms"
        className="min-h-7 rounded px-1.5 text-[10px] data-[state=active]:bg-pokedex-text data-[state=active]:text-pokedex-screen data-[state=active]:shadow-none"
      >
        {labels.forms}
      </TabsTrigger>
      <TabsTrigger
        value="sprites"
        className="min-h-7 rounded px-1.5 text-[10px] data-[state=active]:bg-pokedex-text data-[state=active]:text-pokedex-screen data-[state=active]:shadow-none"
      >
        {labels.sprites}
      </TabsTrigger>
    </TabsList>

    <TabsContent value="official" className="mt-0 focus-visible:ring-pokedex-text">
      <div className="space-y-2">
        <PokemonImageStage
          imageUrl={selectedImageVariant.imageUrl}
          alt={`${pokemonName} ${imageModeLabels[selectedImageVariant.kind]}`}
          pixelated={false}
          imageKey={selectedImageVariant.kind}
        />
        {officialVariants.length > 1 && (
          <ImageChoiceStrip
            variants={officialVariants}
            activeMode={selectedImageMode}
            labels={imageModeLabels}
            pokemonName={pokemonName}
            onSelect={onSelectImageMode}
          />
        )}
      </div>
    </TabsContent>

    <TabsContent value="forms" className="mt-0 focus-visible:ring-pokedex-text">
      <div className="space-y-2">
        {specialFormPreview ? (
          <SpecialFormImageStage
            preview={specialFormPreview}
            onClose={onClearSpecialFormPreview}
            closeLabel={closeLabel}
            primalLabel={primalLabel}
            gmaxLabel={gmaxLabel}
          />
        ) : selectedForm ? (
          <PokemonImageStage
            imageUrl={selectedForm.imageUrl}
            alt={selectedForm.label}
            pixelated={false}
            imageKey={`form-${selectedForm.pokemonId}`}
            label={selectedForm.label}
            meta={`#${String(selectedForm.pokemonId).padStart(4, '0')}`}
          />
        ) : (
          <ImageEmptyState label={emptyFormsLabel} />
        )}
        {forms.length > 0 && (
          <FormChoiceStrip
            forms={forms}
            selectedFormId={selectedForm?.pokemonId ?? null}
            onSelect={onSelectForm}
          />
        )}
      </div>
    </TabsContent>

    <TabsContent value="sprites" className="mt-0 focus-visible:ring-pokedex-text">
      <div className="space-y-2">
        {spriteVariants.length > 0 ? (
          <>
            <PokemonImageStage
              imageUrl={selectedImageVariant.imageUrl}
              alt={`${pokemonName} ${imageModeLabels[selectedImageVariant.kind]}`}
              pixelated
              imageKey={selectedImageVariant.kind}
            />
            <ImageChoiceStrip
              variants={spriteVariants}
              activeMode={selectedImageMode}
              labels={imageModeLabels}
              pokemonName={pokemonName}
              onSelect={onSelectImageMode}
              pixelated
            />
          </>
        ) : (
          <ImageEmptyState label={emptySpritesLabel} />
        )}
      </div>
    </TabsContent>
  </Tabs>
);

const PokemonImageStage = ({
  imageUrl,
  alt,
  pixelated,
  imageKey,
  label,
  meta,
}: {
  imageUrl: string;
  alt: string;
  pixelated: boolean;
  imageKey: string;
  label?: string;
  meta?: string;
}) => (
  <div className="relative mx-auto flex aspect-square w-full max-w-[136px] items-center justify-center sm:max-w-[168px]">
    <AnimatePresence mode="wait">
      <motion.div
        key={imageKey}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.16 }}
        className="absolute inset-0"
      >
        <div className="absolute inset-0 rounded-full bg-pokedex-text/10 blur-xl" />
        <img
          src={imageUrl}
          alt={alt}
          className={cn(
            'relative z-10 h-full w-full object-contain drop-shadow-lg',
            pixelated && 'image-rendering-pixelated'
          )}
          decoding="async"
        />
        {(label || meta) && (
          <div className="absolute bottom-0 left-1/2 z-20 flex max-w-full -translate-x-1/2 items-center gap-1 rounded bg-pokedex-screen/80 px-2 py-1">
            {label && <span className="max-w-24 truncate text-[10px] font-bold text-pokedex-text">{label}</span>}
            {meta && <span className="shrink-0 text-[8px] text-pokedex-text/60">{meta}</span>}
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  </div>
);

const SpecialFormImageStage = ({
  preview,
  onClose,
  closeLabel,
  primalLabel,
  gmaxLabel,
}: {
  preview: SpecialFormPreview;
  onClose: () => void;
  closeLabel: string;
  primalLabel: string;
  gmaxLabel: string;
}) => {
  const toneClass = preview.type === 'mega'
    ? 'bg-purple-500/80 text-white'
    : preview.type === 'primal'
      ? 'bg-amber-500/80 text-white'
      : 'bg-sky-500/80 text-white';
  const glowClass = preview.type === 'mega'
    ? 'bg-purple-500/30'
    : preview.type === 'primal'
      ? 'bg-amber-500/30'
      : 'bg-sky-500/30';

  return (
    <div className="relative mx-auto flex aspect-square w-full max-w-[136px] items-center justify-center sm:max-w-[168px]">
      <AnimatePresence mode="wait">
        <motion.div
          key={`special-${preview.name}`}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.16 }}
          className="absolute inset-0"
        >
          <div className={cn('absolute inset-0 rounded-full blur-xl', glowClass)} />
          <img
            src={preview.imageUrl}
            alt={preview.name}
            className="relative z-10 h-full w-full object-contain drop-shadow-lg"
            decoding="async"
          />
          <button
            type="button"
            onClick={onClose}
            className="group absolute -right-3 -top-3 z-20 flex size-11 items-center justify-center rounded-full"
            aria-label={closeLabel}
          >
            <span className="flex size-6 items-center justify-center rounded-full bg-black/45 transition-colors group-hover:bg-black/65">
              <X className="size-3 text-white" aria-hidden="true" />
            </span>
          </button>
          <div className={cn('absolute bottom-0 left-1/2 z-20 flex max-w-full -translate-x-1/2 items-center gap-1 rounded-full px-2 py-0.5 text-[8px] font-bold sm:text-[10px]', toneClass)}>
            <Sparkles className="size-3" aria-hidden="true" />
            <span className="truncate">
              {preview.type === 'mega' ? 'MEGA' : preview.type === 'primal' ? primalLabel : gmaxLabel}
            </span>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

const ImageChoiceStrip = ({
  variants,
  activeMode,
  labels,
  pokemonName,
  onSelect,
  pixelated = false,
}: {
  variants: PokemonImageVariant[];
  activeMode: PokemonImageVariantKind;
  labels: Record<PokemonImageVariantKind, string>;
  pokemonName: string;
  onSelect: (mode: PokemonImageVariantKind) => void;
  pixelated?: boolean;
}) => (
  <div className="w-full min-w-0 overflow-hidden">
    <div className="flex max-w-full gap-1.5 overflow-x-auto rounded border border-pokedex-text/15 bg-pokedex-screen/70 p-1.5 scrollbar-pokedex">
      {variants.map((variant) => (
        <button
          key={variant.kind}
          type="button"
          onClick={() => onSelect(variant.kind)}
          className={cn(
            'flex min-h-[56px] w-16 shrink-0 flex-col items-center justify-between rounded border px-1 py-1 text-[8px] font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pokedex-text/70',
            activeMode === variant.kind
              ? 'border-pokedex-yellow bg-pokedex-yellow/10 text-pokedex-yellow'
              : 'border-pokedex-text/20 bg-pokedex-screen-light text-pokedex-text/70 hover:border-pokedex-text/40 hover:text-pokedex-text'
          )}
          aria-pressed={activeMode === variant.kind}
          aria-label={`${pokemonName} ${labels[variant.kind]}`}
        >
          <span className="flex size-8 items-center justify-center">
            <img
              src={variant.imageUrl}
              alt=""
              className={cn('max-h-8 max-w-8 object-contain', pixelated && 'image-rendering-pixelated')}
              loading="lazy"
              decoding="async"
            />
          </span>
          <span className="block w-full truncate text-center leading-none">{labels[variant.kind]}</span>
        </button>
      ))}
    </div>
  </div>
);

const FormChoiceStrip = ({
  forms,
  selectedFormId,
  onSelect,
}: {
  forms: PokemonFormSummary[];
  selectedFormId: number | null;
  onSelect: (formId: number) => void;
}) => (
  <div className="w-full min-w-0 overflow-hidden">
    <div className="flex max-w-full gap-1.5 overflow-x-auto rounded border border-pokedex-text/15 bg-pokedex-screen/70 p-1.5 scrollbar-pokedex">
      {forms.map((form) => (
        <button
          key={`${form.name}-${form.pokemonId}`}
          type="button"
          onClick={() => onSelect(form.pokemonId)}
          className={cn(
            'flex min-h-[62px] w-[4.5rem] shrink-0 flex-col items-center justify-between rounded border px-1 py-1 text-[8px] font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pokedex-text/70',
            selectedFormId === form.pokemonId
              ? 'border-pokedex-yellow bg-pokedex-yellow/10 text-pokedex-yellow'
              : 'border-pokedex-text/20 bg-pokedex-screen-light text-pokedex-text/70 hover:border-pokedex-text/40 hover:text-pokedex-text'
          )}
          aria-pressed={selectedFormId === form.pokemonId}
          aria-label={form.label}
        >
          <span className="flex size-9 items-center justify-center">
            <img
              src={form.imageUrl}
              alt=""
              className="max-h-9 max-w-9 object-contain"
              loading="lazy"
              decoding="async"
            />
          </span>
          <span className="block w-full truncate text-center leading-none">{form.label}</span>
        </button>
      ))}
    </div>
  </div>
);

const ImageEmptyState = ({ label }: { label: string }) => (
  <div className="flex min-h-[188px] items-center justify-center rounded border border-pokedex-text/15 bg-pokedex-screen/60 px-3 text-center sm:min-h-[220px]">
    <span className="text-pretty text-[10px] text-pokedex-text/50">{label}</span>
  </div>
);

const SpeciesProfileGrid = ({
  profile,
  labels,
}: {
  profile: PokemonSpeciesProfile;
  labels: Record<
    | 'genus'
    | 'habitat'
    | 'color'
    | 'growthRate'
    | 'generation'
    | 'shape'
    | 'captureRate'
    | 'baseHappiness'
    | 'gender'
    | 'male'
    | 'female'
    | 'genderless'
    | 'eggGroups'
    | 'hatchSteps'
    | 'steps'
    | 'baby'
    | 'legendary'
    | 'mythical',
    string
  >;
}) => {
  const flagLabels: Record<PokemonSpeciesProfile['flags'][number], string> = {
    baby: labels.baby,
    legendary: labels.legendary,
    mythical: labels.mythical,
  };
  const genderValue = profile.gender.genderless
    ? labels.genderless
    : `${labels.male}${profile.gender.male}% / ${labels.female}${profile.gender.female}%`;
  const profileItems = [
    { label: labels.genus, value: profile.genus },
    { label: labels.generation, value: profile.generation },
    { label: labels.habitat, value: profile.habitat },
    { label: labels.shape, value: profile.shape },
    { label: labels.color, value: profile.color },
    { label: labels.growthRate, value: profile.growthRate },
    { label: labels.gender, value: genderValue },
    { label: labels.captureRate, value: String(profile.captureRate) },
    { label: labels.baseHappiness, value: String(profile.baseHappiness) },
    { label: labels.eggGroups, value: profile.eggGroups.join(' / ') },
    { label: labels.hatchSteps, value: `${profile.hatchSteps} ${labels.steps}` },
  ];

  return (
    <div className="space-y-1.5">
      {profile.flags.length > 0 && (
        <div className="flex flex-wrap gap-1.5">
          {profile.flags.map((flag) => (
            <span
              key={flag}
              className="rounded border border-pokedex-yellow/60 bg-pokedex-yellow/20 px-2 py-1 text-[9px] font-bold text-pokedex-yellow"
            >
              {flagLabels[flag]}
            </span>
          ))}
        </div>
      )}
      <div className="grid grid-cols-2 gap-1.5 sm:grid-cols-4">
        {profileItems.map((item) => (
          <div
            key={item.label}
            className="min-w-0 rounded border border-pokedex-text/20 bg-pokedex-screen-light px-2 py-1.5"
          >
            <div className="mb-0.5 truncate text-[8px] text-pokedex-text/50">{item.label}</div>
            <div className="truncate text-[10px] font-bold text-pokedex-text">{item.value || '--'}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

const DefenseProfile = ({
  types,
  labels,
  language,
}: {
  types: PokemonType[];
  labels: Record<'weak' | 'resist' | 'immune' | 'none', string>;
  language: 'zh' | 'en';
}) => {
  const groups = allTypes.reduce(
    (acc, attackType) => {
      const effectiveness = getTypeEffectiveness(attackType, types);
      if (effectiveness > 1) acc.weak.push(attackType);
      if (effectiveness > 0 && effectiveness < 1) acc.resist.push(attackType);
      if (effectiveness === 0) acc.immune.push(attackType);
      return acc;
    },
    { weak: [] as PokemonType[], resist: [] as PokemonType[], immune: [] as PokemonType[] }
  );

  return (
    <div className="space-y-1.5">
      <DefenseTypeRow label={labels.weak} types={groups.weak} emptyLabel={labels.none} language={language} tone="weak" />
      <DefenseTypeRow label={labels.resist} types={groups.resist} emptyLabel={labels.none} language={language} tone="resist" />
      <DefenseTypeRow label={labels.immune} types={groups.immune} emptyLabel={labels.none} language={language} tone="immune" />
    </div>
  );
};

const DefenseTypeRow = ({
  label,
  types,
  emptyLabel,
  language,
  tone,
}: {
  label: string;
  types: PokemonType[];
  emptyLabel: string;
  language: 'zh' | 'en';
  tone: 'weak' | 'resist' | 'immune';
}) => {
  const toneClass = {
    weak: 'border-red-400/30 bg-red-950/20 text-red-200',
    resist: 'border-emerald-400/30 bg-emerald-950/20 text-emerald-200',
    immune: 'border-slate-300/30 bg-slate-900/30 text-slate-200',
  }[tone];

  return (
    <div className="rounded border border-pokedex-text/20 bg-pokedex-screen-light px-2 py-1.5">
      <div className="mb-1 text-[8px] text-pokedex-text/50">{label}</div>
      <div className="flex flex-wrap gap-1">
        {types.length === 0 ? (
          <span className="text-[10px] text-pokedex-text/40">{emptyLabel}</span>
        ) : (
          types.map((type) => (
            <span key={type} className={`rounded border px-1.5 py-0.5 text-[9px] font-bold ${toneClass}`}>
              {getTypeName(type, language)}
            </span>
          ))
        )}
      </div>
    </div>
  );
};

const DexNumberList = ({ dexNumbers }: { dexNumbers: PokemonDexNumber[] }) => (
  <div className="grid grid-cols-2 gap-1.5 sm:grid-cols-4">
    {dexNumbers.map((entry) => (
      <div
        key={`${entry.pokedex}-${entry.entryNumber}`}
        className="min-w-0 rounded border border-pokedex-text/20 bg-pokedex-screen-light px-2 py-1.5"
      >
        <div className="mb-0.5 truncate text-[8px] text-pokedex-text/50">{entry.pokedex}</div>
        <div className="text-[10px] font-bold text-pokedex-text">#{String(entry.entryNumber).padStart(3, '0')}</div>
      </div>
    ))}
  </div>
);

const FlavorTextList = ({ flavorTexts }: { flavorTexts: PokemonFlavorText[] }) => (
  <div className="space-y-1.5">
    {flavorTexts.map((entry) => (
      <div
        key={`${entry.version}-${entry.text}`}
        className="rounded border border-pokedex-text/20 bg-pokedex-screen-light px-2 py-1.5"
      >
        <div className="mb-1 text-[8px] font-bold text-pokedex-text/60">{entry.version}</div>
        <p className="line-clamp-2 text-[10px] leading-relaxed text-pokedex-text/80">{entry.text}</p>
      </div>
    ))}
  </div>
);

const EncounterList = ({
  encounters,
  emptyLabel,
  levelLabel,
  chanceLabel,
}: {
  encounters: PokemonEncounterSummary[];
  emptyLabel: string;
  levelLabel: string;
  chanceLabel: string;
}) => {
  if (encounters.length === 0) {
    return <p className="text-[10px] text-pokedex-text/50">{emptyLabel}</p>;
  }

  return (
    <div className="space-y-1.5">
      {encounters.map((encounter) => (
        <div
          key={`${encounter.location}-${encounter.version}-${encounter.method}`}
          className="grid grid-cols-[1fr_auto] gap-2 rounded border border-pokedex-text/20 bg-pokedex-screen-light px-2 py-1.5"
        >
          <div className="min-w-0">
            <div className="truncate text-[11px] font-bold text-pokedex-text">{encounter.location}</div>
            <div className="truncate text-[8px] text-pokedex-text/50">{encounter.version}</div>
          </div>
          <div className="text-right text-[9px] text-pokedex-text/70">
            <div>{encounter.method}</div>
            <div>{levelLabel}{encounter.levelRange} · {chanceLabel} {encounter.chance}%</div>
          </div>
        </div>
      ))}
    </div>
  );
};

const AbilityDetailList = ({
  abilities,
  abilityDetails,
  hiddenLabel,
  noEffectLabel,
}: {
  abilities: string[];
  abilityDetails: PokemonAbilityDetail[];
  hiddenLabel: string;
  noEffectLabel: string;
}) => {
  if (abilityDetails.length === 0) {
    return (
      <div className="flex flex-wrap gap-1.5">
        {abilities.map((ability) => (
          <span
            key={ability}
            className="rounded border border-pokedex-text/20 bg-pokedex-screen-light px-2 py-1 text-xs text-pokedex-text"
          >
            {ability}
          </span>
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-1.5">
      {abilityDetails.map((ability) => (
        <div
          key={`${ability.name}-${ability.isHidden}`}
          className="rounded border border-pokedex-text/20 bg-pokedex-screen-light px-2 py-1.5"
        >
          <div className="mb-1 flex items-center gap-1.5">
            <span className="text-[11px] font-bold text-pokedex-text">{ability.name}</span>
            {ability.isHidden && (
              <span className="rounded bg-pokedex-yellow/80 px-1.5 py-0.5 text-[8px] text-pokedex-dark">
                {hiddenLabel}
              </span>
            )}
          </div>
          <p className="line-clamp-2 text-[10px] leading-relaxed text-pokedex-text/70">
            {ability.effect || noEffectLabel}
          </p>
        </div>
      ))}
    </div>
  );
};

const MoveList = ({
  moves,
  emptyLabel,
  levelLabel,
}: {
  moves: PokemonMoveSummary[];
  emptyLabel: string;
  levelLabel: string;
}) => {
  if (moves.length === 0) {
    return <p className="text-[10px] text-pokedex-text/50">{emptyLabel}</p>;
  }

  return (
    <div className="grid grid-cols-1 gap-1.5 sm:grid-cols-2">
      {moves.map((move) => (
        <div
          key={`${move.name}-${move.method}-${move.versionGroup}`}
          className="min-w-0 rounded border border-pokedex-text/20 bg-pokedex-screen-light px-2 py-1.5"
        >
          <div className="flex items-center justify-between gap-2">
            <span className="truncate text-[11px] font-bold text-pokedex-text">{move.name}</span>
            <span className="shrink-0 rounded bg-pokedex-screen px-1.5 py-0.5 text-[8px] text-pokedex-text/70">
              {move.method}
            </span>
          </div>
          <div className="mt-0.5 flex items-center justify-between gap-2 text-[8px] text-pokedex-text/50">
            <span className="truncate">{move.versionGroup}</span>
            <span>{move.level === null ? '--' : `${levelLabel}${move.level}`}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

const StatBar = ({
  label,
  value,
  max,
  color,
}: {
  label: string;
  value: number;
  max: number;
  color: string;
}) => {
  const percentage = (value / max) * 100;

  return (
    <div className="w-full flex items-center gap-2">
      <span className="w-10 text-[10px] text-pokedex-text/60 text-right">{label}</span>
      <span className="w-7 text-xs font-bold text-pokedex-text">{value}</span>
      <div className="flex-1 h-2.5 bg-pokedex-screen-light rounded-full overflow-hidden border border-pokedex-text/10">
        <div
          className={`h-full ${color} transition-all duration-500`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};
