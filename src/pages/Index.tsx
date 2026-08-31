import { Suspense, lazy } from 'react';
import { useI18n } from '@/hooks/useI18n';
import { Helmet } from 'react-helmet-async';
import { useIsMobile } from '@/hooks/use-mobile';
import { useIsFoldableOpen } from '@/hooks/useFoldableOpen';
import { isNativeAndroid } from '@/lib/native/androidApp';
import { cn } from '@/lib/utils';

const Pokedex = lazy(() => import('@/components/Pokedex').then((module) => ({ default: module.Pokedex })));

const PokedexFallback = ({
  compactLayout,
  foldableExpanded,
  webExpanded,
}: {
  compactLayout: boolean;
  foldableExpanded: boolean;
  webExpanded: boolean;
}) => (
  <div
    className={cn(
      'flex h-full min-h-0 w-full items-center justify-center px-4',
      !compactLayout && !foldableExpanded && !webExpanded && 'sm:h-auto'
    )}
  >
    <div
      className={cn(
        'pokedex-cover-home flex h-full min-h-[420px] w-full max-w-[560px] items-center justify-center rounded-2xl shadow-2xl',
        !compactLayout && !foldableExpanded && !webExpanded && 'sm:h-[640px] sm:rounded-3xl',
        foldableExpanded && 'min-h-0 max-w-none rounded-3xl',
        webExpanded && 'min-h-0 max-w-[480px] rounded-3xl'
      )}
    >
      <div className="size-8 animate-spin rounded-full border-2 border-white/30 border-t-white motion-reduce:animate-none" />
    </div>
  </div>
);

const Index = () => {
  const { t } = useI18n();
  const isMobile = useIsMobile();
  const isFoldableOpen = useIsFoldableOpen();
  const useCompactPokedex = isMobile && !isFoldableOpen;
  const isFoldableExpanded = isFoldableOpen;
  const isWebExpanded = !isNativeAndroid() && !useCompactPokedex;
  const showTitle = !isMobile && !isFoldableOpen && !isWebExpanded;

  return (
    <>
      <Helmet>
        <title>{t('app.title')}</title>
        <meta name="description" content={t('app.description')} />
      </Helmet>
      <main
        className={cn(
          'flex h-dvh flex-col bg-gradient-to-br from-background via-background to-muted py-0',
          (isFoldableOpen || isWebExpanded) && 'overflow-hidden',
          isWebExpanded && 'py-3 md:py-4',
          !useCompactPokedex && !isFoldableOpen && !isWebExpanded && 'sm:h-auto sm:min-h-dvh sm:py-6 md:py-10'
        )}
      >
        <header className={cn('sr-only', showTitle && 'sm:not-sr-only sm:mb-6 sm:px-4 sm:text-center md:mb-8')}>
          <h1 className={cn('mb-2 text-3xl font-bold text-foreground text-balance', !isMobile && 'md:text-4xl')}>
            {t('app.heading')}
          </h1>
          <p className="text-muted-foreground text-pretty">
            {t('app.subtitle')}
          </p>
        </header>
        <div className={cn('min-h-0 flex-1', (isFoldableOpen || isWebExpanded) && 'overflow-hidden', !useCompactPokedex && !isFoldableOpen && !isWebExpanded && 'sm:flex-none')}>
          <Suspense
            fallback={
              <PokedexFallback
                compactLayout={useCompactPokedex}
                foldableExpanded={isFoldableExpanded}
                webExpanded={isWebExpanded}
              />
            }
          >
            <Pokedex />
          </Suspense>
        </div>
      </main>
    </>
  );
};

export default Index;
