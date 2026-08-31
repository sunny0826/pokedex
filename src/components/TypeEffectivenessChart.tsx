import { useState } from 'react';
import { PokemonType, getTypeName, typeColorClasses } from '@/data/pokemon';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Drawer, DrawerClose, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger } from './ui/drawer';
import { ScrollArea } from './ui/scroll-area';
import { HelpCircle, X } from 'lucide-react';
import { useI18n } from '@/hooks/useI18n';
import { useIsMobile } from '@/hooks/use-mobile';
import { allTypes, typeChart } from '@/lib/typeEffectiveness';
import { cn } from '@/lib/utils';

const getEffectiveness = (attacker: PokemonType, defender: PokemonType): number => {
  return typeChart[attacker]?.[defender] ?? 1;
};

const getEffectivenessColor = (value: number, screen = false): string => {
  if (value === 0) return 'bg-gray-800 text-gray-400';
  if (value === 0.5) return 'bg-red-900/50 text-red-300';
  if (value === 2) return 'bg-green-900/50 text-green-300';
  if (screen) return 'bg-pokedex-screen text-pokedex-text/70';
  return 'bg-secondary/30 text-muted-foreground';
};

const getEffectivenessText = (value: number, showNeutral = false): string => {
  if (value === 0) return '×';
  if (value === 0.5) return '½';
  if (value === 2) return '2';
  if (showNeutral) return '1';
  return '';
};

interface TypeEffectivenessChartProps {
  trigger?: React.ReactNode;
}

export const TypeEffectivenessChart = ({ trigger }: TypeEffectivenessChartProps) => {
  const [selectedType, setSelectedType] = useState<PokemonType>(allTypes[0]);
  const [mobileView, setMobileView] = useState<'quick' | 'matrix'>('quick');
  const { language, t } = useI18n();
  const isMobile = useIsMobile();

  const getEffectivenessLabel = (value: number): string => {
    if (value === 0) return t('typeChart.noEffect');
    if (value === 0.5) return t('typeChart.notVeryEffective');
    if (value === 2) return t('typeChart.superEffective');
    return t('typeChart.neutral');
  };

  const triggerNode = trigger || (
    <button
      type="button"
      className="flex min-h-11 items-center gap-1 rounded-lg bg-accent/20 px-3 py-2 text-sm text-foreground transition-colors hover:bg-accent/30"
    >
      <HelpCircle className="size-4" aria-hidden="true" />
      <span className="font-pixel text-xs">{t('typeChart.trigger')}</span>
    </button>
  );

  const renderLegend = (screen = false) => (
    <div className="grid grid-cols-2 gap-2 text-[10px] min-[420px]:grid-cols-4 sm:flex sm:flex-wrap sm:gap-4 sm:text-xs">
      {[
        { value: '2', label: t('typeChart.superEffective'), className: 'bg-green-900/50 text-green-300' },
        { value: '1', label: t('typeChart.neutral'), className: screen ? 'bg-pokedex-screen text-pokedex-text/70' : 'bg-secondary/30 text-muted-foreground' },
        { value: '½', label: t('typeChart.notVeryEffective'), className: 'bg-red-900/50 text-red-300' },
        { value: '×', label: t('typeChart.noEffect'), className: 'bg-gray-800 text-gray-400' },
      ].map((item) => (
        <div key={item.value} className="flex min-h-10 items-center gap-2 sm:min-h-11">
          <div className={cn('flex size-8 shrink-0 items-center justify-center rounded font-bold tabular-nums', item.className)}>
            {item.value}
          </div>
          <span className={cn('text-pretty', screen ? 'text-pokedex-text/75' : 'text-muted-foreground')}>{item.label}</span>
        </div>
      ))}
    </div>
  );

  const selectedMatchups = allTypes
    .map((defender) => ({
      defender,
      effectiveness: getEffectiveness(selectedType, defender),
    }))
    .filter(({ effectiveness }) => effectiveness !== 1);

  const mobileQuickView = (
    <section className="rounded-lg border border-pokedex-text/20 bg-pokedex-screen-light/80 p-3">
      <div className="mb-3 flex items-center justify-between gap-3">
        <h3 className="text-balance font-pixel text-sm text-pokedex-text">{t('typeChart.quickView')}</h3>
        <span className={cn('shrink-0 rounded px-2 py-1 text-[10px] text-white', typeColorClasses[selectedType])}>
          {getTypeName(selectedType, language)}
        </span>
      </div>
      <div>
        <p className="mb-2 text-xs text-pokedex-text/75">{t('typeChart.selectAttack')}</p>
        <div className="grid auto-cols-[5rem] grid-flow-col grid-rows-2 gap-2 overflow-x-auto pb-2 scrollbar-pokedex">
          {allTypes.map((type) => (
            <button
              type="button"
              key={type}
              onClick={() => setSelectedType(type)}
              aria-pressed={selectedType === type}
              aria-label={t('typeChart.selectAttackAria', { type: getTypeName(type, language) })}
              className={cn(
                'min-h-11 truncate rounded px-2 py-2 text-[10px] font-pixel transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pokedex-text focus-visible:ring-offset-2 focus-visible:ring-offset-pokedex-screen',
                selectedType === type
                  ? cn(typeColorClasses[type], 'text-white shadow-md')
                  : 'bg-pokedex-screen text-pokedex-text/75 hover:bg-pokedex-screen/80'
              )}
            >
              {getTypeName(type, language)}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-3 rounded-md bg-pokedex-screen/70 p-3">
        <h4 className="mb-3 flex items-center gap-2 font-pixel text-sm text-pokedex-text">
          <span className={cn('rounded px-2 py-1 text-xs text-white', typeColorClasses[selectedType])}>
            {getTypeName(selectedType, language)}
          </span>
          {t('typeChart.attackEffect')}
        </h4>
        <div className="grid grid-cols-2 gap-2 min-[420px]:grid-cols-3">
          {selectedMatchups.map(({ defender, effectiveness }) => (
            <div
              key={defender}
              className={cn('flex min-h-11 items-center gap-1 rounded px-2 py-2', getEffectivenessColor(effectiveness, true))}
            >
              <span className="sr-only">
                {t('typeChart.cellLabel', {
                  attacker: getTypeName(selectedType, language),
                  defender: getTypeName(defender, language),
                  effect: getEffectivenessLabel(effectiveness),
                })}
              </span>
              <span className="truncate text-xs" aria-hidden="true">{getTypeName(defender, language)}</span>
              <span className="ml-auto font-bold tabular-nums" aria-hidden="true">{getEffectivenessText(effectiveness)}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  const matrixTable = (showNeutral = false, screen = false) => (
    <div className="min-w-max">
      <table className="border-collapse text-xs">
        <caption className="sr-only">{t('typeChart.title')}</caption>
        <thead>
          <tr>
            <th
              scope="col"
              className={cn(
                'sticky left-0 top-0 z-20 p-1 text-[10px] font-pixel',
                screen ? 'bg-pokedex-screen text-pokedex-text/75' : 'bg-card text-muted-foreground'
              )}
            >
              {t('typeChart.axes')}
            </th>
            {allTypes.map((type) => (
              <th
                key={type}
                scope="col"
                className={cn('sticky top-0 z-10 p-1', screen ? 'bg-pokedex-screen' : 'bg-card')}
              >
                <div
                  className={cn(
                    'mx-auto flex size-7 items-center justify-center rounded text-[9px] font-pixel text-white',
                    typeColorClasses[type]
                  )}
                >
                  <span className="sr-only">{getTypeName(type, language)}</span>
                  <span aria-hidden="true">{getTypeName(type, language).slice(0, 1)}</span>
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {allTypes.map((attacker) => (
            <tr key={attacker}>
              <th scope="row" className={cn('sticky left-0 z-10 p-1', screen ? 'bg-pokedex-screen' : 'bg-card')}>
                <div
                  className={cn(
                    'flex h-7 w-16 items-center justify-center rounded px-1 text-[9px] font-pixel text-white sm:w-20',
                    typeColorClasses[attacker]
                  )}
                >
                  <span className="truncate">{getTypeName(attacker, language)}</span>
                </div>
              </th>
              {allTypes.map((defender) => {
                const effectiveness = getEffectiveness(attacker, defender);
                return (
                  <td
                    key={defender}
                    className="p-0.5"
                  >
                    <span className="sr-only">
                      {t('typeChart.cellLabel', {
                        attacker: getTypeName(attacker, language),
                        defender: getTypeName(defender, language),
                        effect: getEffectivenessLabel(effectiveness),
                      })}
                    </span>
                    <div
                      className={cn(
                        'mx-auto flex size-7 items-center justify-center rounded text-[10px] font-bold tabular-nums',
                        getEffectivenessColor(effectiveness, screen)
                      )}
                    >
                      <span aria-hidden="true">{getEffectivenessText(effectiveness, showNeutral)}</span>
                    </div>
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  const desktopContent = (
    <div className="space-y-4">
      {renderLegend()}
      <ScrollArea className="h-[400px]">
        <div className="overflow-x-auto scrollbar-pokedex">
          {matrixTable()}
        </div>
      </ScrollArea>
    </div>
  );

  const mobileContent = (
    <div className="flex min-h-0 flex-1 flex-col overflow-hidden px-3 pb-[calc(env(safe-area-inset-bottom)+0.75rem)]">
      <div className="mb-3 grid grid-cols-2 gap-2 rounded-lg bg-pokedex-screen-light/60 p-1">
        {[
          { value: 'quick' as const, label: t('typeChart.quickView') },
          { value: 'matrix' as const, label: t('typeChart.fullMatrix') },
        ].map((item) => (
          <button
            key={item.value}
            type="button"
            onClick={() => setMobileView(item.value)}
            aria-pressed={mobileView === item.value}
            className={cn(
              'min-h-11 rounded-md px-3 py-2 text-xs transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pokedex-text',
              mobileView === item.value
                ? 'bg-pokedex-text text-pokedex-screen'
                : 'text-pokedex-text/75 hover:bg-pokedex-screen-light'
            )}
          >
            {item.label}
          </button>
        ))}
      </div>

      {mobileView === 'quick' ? (
        <div className="min-h-0 flex-1 space-y-3 overflow-y-auto pr-1 scrollbar-pokedex">
          <div className="rounded-lg border border-pokedex-text/20 bg-pokedex-screen-light/60 p-3">
            {renderLegend(true)}
          </div>
          {mobileQuickView}
        </div>
      ) : (
        <section className="flex min-h-0 flex-1 flex-col overflow-hidden rounded-lg border border-pokedex-text/20 bg-pokedex-screen-light/60">
          <div className="flex items-center justify-between gap-3 border-b border-pokedex-text/20 px-3 py-2">
            <h3 className="text-balance font-pixel text-sm text-pokedex-text">{t('typeChart.fullMatrix')}</h3>
            <span className="shrink-0 text-[10px] text-pokedex-text/70">{t('typeChart.axes')}</span>
          </div>
          <div className="min-h-0 flex-1 overflow-auto p-2 scrollbar-pokedex">
            {matrixTable(true, true)}
          </div>
        </section>
      )}
    </div>
  );

  if (isMobile) {
    return (
      <Drawer shouldScaleBackground={false}>
        <DrawerTrigger asChild>{triggerNode}</DrawerTrigger>
        <DrawerContent className="inset-0 mt-0 h-dvh max-h-none overflow-hidden rounded-none border-0 bg-pokedex-screen pt-[env(safe-area-inset-top)] text-pokedex-text [&>div:first-child]:hidden">
          <DrawerHeader className="relative px-4 pb-3 pt-2 text-left">
            <DrawerTitle className="font-pixel text-base text-pokedex-text">{t('typeChart.title')}</DrawerTitle>
            <DrawerClose className="absolute right-3 top-1 flex min-h-11 min-w-11 items-center justify-center rounded-full text-pokedex-text/75 transition-colors hover:bg-pokedex-screen-light hover:text-pokedex-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pokedex-text">
              <X className="size-4" aria-hidden="true" />
              <span className="sr-only">{t('pokedex.close')}</span>
            </DrawerClose>
          </DrawerHeader>
          {mobileContent}
        </DrawerContent>
      </Drawer>
    );
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        {triggerNode}
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh] bg-card border-border">
        <DialogHeader>
          <DialogTitle className="font-pixel text-foreground">{t('typeChart.title')}</DialogTitle>
        </DialogHeader>
        {desktopContent}
      </DialogContent>
    </Dialog>
  );
};
