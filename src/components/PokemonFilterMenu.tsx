import { useId, useState } from 'react';
import { ChevronDown, Filter, X } from 'lucide-react';
import { PokemonType, getTypeName, typeColorClasses } from '@/data/pokemon';
import { useI18n } from '@/hooks/useI18n';
import { generations } from './GenerationFilter';
import { cn } from '@/lib/utils';
import { PokemonSpecialFormKind } from '@/lib/pokemonSpecialForms';

interface PokemonFilterMenuProps {
  selectedType: PokemonType | null;
  onSelectType: (type: PokemonType | null) => void;
  selectedGeneration: number | null;
  onSelectGeneration: (gen: number | null) => void;
  selectedSpecialForm: PokemonSpecialFormKind | null;
  onSelectSpecialForm: (kind: PokemonSpecialFormKind | null) => void;
}

const allTypes: PokemonType[] = [
  'normal', 'fire', 'water', 'electric', 'grass', 'ice',
  'fighting', 'poison', 'ground', 'flying', 'psychic', 'bug',
  'rock', 'ghost', 'dragon', 'dark', 'steel', 'fairy',
];

const specialFormOptions: PokemonSpecialFormKind[] = [
  'mega',
  'gmax',
  'primal',
  'legendary',
  'mythical',
  'ultraBeast',
];

export const PokemonFilterMenu = ({
  selectedType,
  onSelectType,
  selectedGeneration,
  onSelectGeneration,
  selectedSpecialForm,
  onSelectSpecialForm,
}: PokemonFilterMenuProps) => {
  const { language, t } = useI18n();
  const filterPanelId = useId();
  const [isOpen, setIsOpen] = useState(false);
  const [activePanel, setActivePanel] = useState<'generation' | 'type' | 'special'>('generation');
  const activeFilterCount =
    Number(selectedType !== null) + Number(selectedGeneration !== null) + Number(selectedSpecialForm !== null);
  const selectedGenerationLabel =
    selectedGeneration === null ? null : t('generation.short', { id: selectedGeneration });
  const selectedTypeLabel = selectedType === null ? null : getTypeName(selectedType, language);
  const selectedSpecialFormLabel =
    selectedSpecialForm === null ? null : t(`filter.special.${selectedSpecialForm}`);
  const activeSummary =
    [selectedGenerationLabel, selectedTypeLabel, selectedSpecialFormLabel].filter(Boolean).join(' / ') ||
    t('filter.title');

  const generationButtonClass = (isSelected: boolean) =>
    cn(
      'min-h-11 rounded-sm border-b-2 px-2 text-[8px] font-pixel transition-colors duration-200 active:translate-y-0.5 active:border-b-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pokedex-text/50',
      isSelected
        ? 'bg-pokedex-yellow text-pokedex-dark border-yellow-700 shadow-inner'
        : 'bg-pokedex-screen-light text-pokedex-text border-pokedex-text/30 hover:bg-pokedex-text/15 button-3d'
    );

  const typeButtonClass = (type: PokemonType | null) =>
    cn(
      'min-h-11 rounded px-2 py-1 text-[8px] font-pixel transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pokedex-text/50',
      type === null
        ? selectedType === null
          ? 'bg-pokedex-text text-pokedex-screen shadow-md'
          : 'bg-pokedex-screen-light text-pokedex-text/60 hover:text-pokedex-text/80'
        : selectedType === type
          ? `${typeColorClasses[type]} text-white shadow-md`
          : 'bg-pokedex-screen-light text-pokedex-text/60 hover:text-pokedex-text/80'
    );

  const clearFilters = () => {
    onSelectType(null);
    onSelectGeneration(null);
    onSelectSpecialForm(null);
  };

  const handleToggleOpen = () => {
    setIsOpen((open) => {
      const nextOpen = !open;

      if (nextOpen) {
        if (selectedGeneration === null && selectedType !== null) {
          setActivePanel('type');
        } else if (selectedSpecialForm !== null && selectedGeneration === null && selectedType === null) {
          setActivePanel('special');
        } else if (selectedGeneration !== null && selectedType === null) {
          setActivePanel('generation');
        }
      }

      return nextOpen;
    });
  };

  const panelButtonClass = (panel: 'generation' | 'type' | 'special') =>
    cn(
      'min-h-10 rounded-sm px-3 text-[8px] font-pixel transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pokedex-text/50',
      activePanel === panel
        ? 'bg-pokedex-text text-pokedex-screen shadow-inner'
        : 'bg-pokedex-screen-light text-pokedex-text/65 hover:text-pokedex-text'
    );

  const specialButtonClass = (kind: PokemonSpecialFormKind | null) =>
    cn(
      'min-h-11 rounded-sm border px-2 py-1 text-[8px] font-pixel transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pokedex-text/50',
      kind === selectedSpecialForm
        ? 'border-pokedex-yellow bg-pokedex-yellow/90 text-pokedex-dark shadow-inner'
        : 'border-pokedex-text/20 bg-pokedex-screen-light text-pokedex-text/70 hover:border-pokedex-text/40 hover:text-pokedex-text'
    );

  return (
    <div className="contents">
      <div className="flex shrink-0 items-center gap-1">
        {activeFilterCount > 0 && (
          <button
            type="button"
            onClick={clearFilters}
            className="hidden size-11 items-center justify-center rounded-sm bg-pokedex-screen-light text-pokedex-text/55 transition-colors hover:bg-pokedex-text/10 hover:text-pokedex-text min-[420px]:flex"
            aria-label={t('filter.clear')}
            title={t('filter.clear')}
          >
            <X className="size-3.5" aria-hidden="true" />
          </button>
        )}

        <button
          type="button"
          onClick={handleToggleOpen}
          className={cn(
            'relative flex h-11 min-w-11 max-w-[9rem] shrink-0 items-center justify-center gap-1.5 rounded-sm border-b-2 px-3 font-pixel transition-colors duration-200 active:translate-y-0.5 active:border-b-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pokedex-text/50',
            isOpen
              ? 'border-pokedex-text/40 bg-pokedex-text text-pokedex-screen shadow-inner'
              : activeFilterCount > 0
                ? 'border-yellow-700 bg-pokedex-yellow text-pokedex-dark shadow-inner'
                : 'border-pokedex-text/30 bg-pokedex-screen-light text-pokedex-text hover:bg-pokedex-text/15 button-3d'
          )}
          aria-controls={filterPanelId}
          aria-expanded={isOpen}
          aria-label={
            activeFilterCount > 0 ? `${t('filter.title')}: ${activeSummary}` : t('filter.title')
          }
          title={activeFilterCount > 0 ? activeSummary : t('filter.title')}
        >
          <Filter className="size-4" aria-hidden="true" />
          <span className="hidden max-w-[5.5rem] truncate text-[8px] min-[420px]:inline">
            {activeSummary}
          </span>
          <ChevronDown
            className={cn('hidden size-3.5 transition-transform min-[420px]:block', isOpen && 'rotate-180')}
            aria-hidden="true"
          />
          {activeFilterCount > 0 && (
            <span className="absolute -right-1 -top-1 flex size-4 items-center justify-center rounded-full bg-pokedex-blue text-[7px] leading-none text-white min-[420px]:hidden">
              {activeFilterCount}
            </span>
          )}
        </button>
      </div>

      {isOpen && (
        <div
          id={filterPanelId}
          className="col-span-2 rounded-sm border border-pokedex-text/10 bg-pokedex-dark/25 p-1.5"
        >
          <div className="flex max-h-[min(24rem,calc(100vh-11rem))] min-w-0 flex-col gap-2 overflow-hidden">
            <div className="grid shrink-0 grid-cols-[minmax(0,1fr)_auto] items-center gap-2 rounded-sm bg-pokedex-dark/30 p-1.5">
              <div className="min-w-0">
                <div className="font-pixel text-[8px] leading-none text-pokedex-text/60">{t('filter.title')}</div>
                <div className="mt-1 truncate font-pixel text-[9px] leading-none text-pokedex-text">
                  {activeSummary}
                </div>
              </div>
              {activeFilterCount > 0 && (
                <button
                  type="button"
                  onClick={clearFilters}
                  className="flex size-8 shrink-0 items-center justify-center rounded-sm bg-pokedex-screen-light text-pokedex-text/70 transition-colors hover:bg-pokedex-text/10 hover:text-pokedex-text"
                  aria-label={t('filter.clear')}
                >
                  <X className="size-3.5" aria-hidden="true" />
                </button>
              )}
            </div>

            <div className="grid shrink-0 grid-cols-3 gap-1 rounded-sm bg-pokedex-screen-light/30 p-1">
              <button
                type="button"
                onClick={() => setActivePanel('generation')}
                className={panelButtonClass('generation')}
                aria-pressed={activePanel === 'generation'}
              >
                {t('generation.label')}
              </button>
              <button
                type="button"
                onClick={() => setActivePanel('type')}
                className={panelButtonClass('type')}
                aria-pressed={activePanel === 'type'}
              >
                {t('filter.type')}
              </button>
              <button
                type="button"
                onClick={() => setActivePanel('special')}
                className={panelButtonClass('special')}
                aria-pressed={activePanel === 'special'}
              >
                {t('filter.special')}
              </button>
            </div>

            <div className="min-h-0 overflow-x-hidden overflow-y-auto rounded-sm border border-pokedex-text/10 bg-pokedex-screen-light/20 p-1.5 scrollbar-pokedex">
              {activePanel === 'generation' ? (
                <section className="space-y-1.5" aria-label={t('generation.label')}>
                  <div className="grid grid-cols-3 gap-1.5 min-[380px]:grid-cols-5">
                    <button
                      type="button"
                      onClick={() => onSelectGeneration(null)}
                      className={generationButtonClass(selectedGeneration === null)}
                      aria-pressed={selectedGeneration === null}
                    >
                      {t('generation.all')}
                    </button>
                    {generations.map((gen) => (
                      <button
                        type="button"
                        key={gen.id}
                        onClick={() => onSelectGeneration(gen.id)}
                        className={generationButtonClass(selectedGeneration === gen.id)}
                        aria-pressed={selectedGeneration === gen.id}
                      >
                        {t('generation.short', { id: gen.id })}
                      </button>
                    ))}
                  </div>
                </section>
              ) : activePanel === 'type' ? (
                <section className="space-y-1.5" aria-label={t('filter.type')}>
                  <div className="grid grid-cols-2 gap-1.5 min-[380px]:grid-cols-3">
                    <button
                      type="button"
                      onClick={() => onSelectType(null)}
                      className={typeButtonClass(null)}
                      aria-pressed={selectedType === null}
                    >
                      {t('filter.all')}
                    </button>
                    {allTypes.map((type) => (
                      <button
                        type="button"
                        key={type}
                        onClick={() => onSelectType(type)}
                        className={typeButtonClass(type)}
                        aria-pressed={selectedType === type}
                      >
                        {getTypeName(type, language)}
                      </button>
                    ))}
                  </div>
                </section>
              ) : (
                <section className="space-y-1.5" aria-label={t('filter.special')}>
                  <div className="grid grid-cols-2 gap-1.5 min-[380px]:grid-cols-4">
                    <button
                      type="button"
                      onClick={() => onSelectSpecialForm(null)}
                      className={specialButtonClass(null)}
                      aria-pressed={selectedSpecialForm === null}
                    >
                      {t('filter.all')}
                    </button>
                    {specialFormOptions.map((kind) => (
                      <button
                        type="button"
                        key={kind}
                        onClick={() => onSelectSpecialForm(kind)}
                        className={specialButtonClass(kind)}
                        aria-pressed={selectedSpecialForm === kind}
                      >
                        {t(`filter.special.${kind}`)}
                      </button>
                    ))}
                  </div>
                </section>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
