import { motion } from 'framer-motion';
import { useI18n } from '@/hooks/useI18n';
import {
  POKEDEX_COMPACT_VIEWPORT_HEIGHT_CLASS,
  POKEDEX_FOLDABLE_VIEWPORT_HEIGHT_CLASS,
  POKEDEX_VIEWPORT_HEIGHT_CLASS,
} from '@/lib/pokedexLayout';
import { cn } from '@/lib/utils';
import { LanguageToggle } from './LanguageToggle';

interface PokedexClosedProps {
  onOpen: () => void;
  compactLayout?: boolean;
  foldableExpanded?: boolean;
  webExpanded?: boolean;
}

export const PokedexClosed = ({
  onOpen,
  compactLayout = false,
  foldableExpanded = false,
  webExpanded = false,
}: PokedexClosedProps) => {
  const { t } = useI18n();
  const fillViewport = foldableExpanded || webExpanded;
  const viewportHeightClass = compactLayout
    ? POKEDEX_COMPACT_VIEWPORT_HEIGHT_CLASS
    : fillViewport
      ? POKEDEX_FOLDABLE_VIEWPORT_HEIGHT_CLASS
      : POKEDEX_VIEWPORT_HEIGHT_CLASS;

  return (
    <motion.div
      className={cn(
        'flex h-full min-h-0 w-full max-w-[560px] flex-col text-left',
        !compactLayout && !fillViewport && 'sm:h-auto lg:w-[calc(50%-0.5rem)]',
        foldableExpanded && 'max-w-none',
        webExpanded && 'max-w-[480px]'
      )}
    >
      {/* Main closed Pokedex body */}
      <div
        className={cn(
          'pokedex-frame relative flex min-h-0 flex-1 flex-col rounded-2xl p-3',
          !compactLayout && !fillViewport && 'sm:h-auto sm:rounded-3xl sm:p-4 md:p-5',
          fillViewport && 'h-full rounded-3xl p-4 md:p-5'
        )}
      >
        {/* Top decorative elements - only visible on closed state */}
        <div className={cn('mb-3 flex items-center justify-between gap-3', !compactLayout && 'sm:mb-4')}>
          <div className={cn('flex items-center gap-2', !compactLayout && 'sm:gap-3')}>
            {/* Main blue indicator light */}
            <motion.div
              className={cn(
                'flex size-10 items-center justify-center rounded-full border-4 border-white/30 bg-pokedex-blue indicator-light',
                !compactLayout && 'sm:size-14 md:size-16'
              )}
              animate={{
                boxShadow: [
                  '0 0 20px hsl(200 85% 55%), 0 0 40px hsl(200 85% 55%)',
                  '0 0 35px hsl(200 85% 55%), 0 0 70px hsl(200 85% 55%)',
                  '0 0 20px hsl(200 85% 55%), 0 0 40px hsl(200 85% 55%)'
                ]
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className={cn('size-4 rounded-full bg-white/40', !compactLayout && 'sm:size-6 md:size-8')} />
            </motion.div>
            {/* Small indicator lights */}
            <div className={cn('flex gap-1.5', !compactLayout && 'sm:gap-2')}>
              <motion.div
                className={cn('size-2.5 rounded-full bg-red-400', !compactLayout && 'sm:size-3 md:size-4')}
                animate={{ opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0 }}
              />
              <motion.div
                className={cn('size-2.5 rounded-full bg-yellow-400', !compactLayout && 'sm:size-3 md:size-4')}
                animate={{ opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
              />
              <motion.div
                className={cn('size-2.5 rounded-full bg-green-400', !compactLayout && 'sm:size-3 md:size-4')}
                animate={{ opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0.6 }}
              />
            </div>
          </div>
          <LanguageToggle compact variant="device" />
        </div>

        {/* Closed cover panel */}
        <motion.button
          type="button"
          aria-label={t('pokedex.open')}
          className="flex w-full flex-1 min-h-0 cursor-pointer flex-col text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-pokedex-frame"
          onClick={onOpen}
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.98 }}
        >
          <div
            className={cn(
              'pokedex-cover pokedex-cover-home relative flex h-full w-full flex-col items-center justify-end overflow-hidden rounded-lg p-6',
              viewportHeightClass,
              !compactLayout && !fillViewport && 'sm:p-12 md:p-16',
              fillViewport && 'p-8 sm:p-10 md:p-12'
            )}
          >
            <span
              className={cn(
                'pointer-events-none max-w-full truncate rounded-sm bg-pokedex-dark/45 px-3 py-2 font-pixel text-[10px] text-white/85 shadow-inner',
                (foldableExpanded || !compactLayout) && 'hidden',
                !foldableExpanded && compactLayout && 'block'
              )}
            >
              {t('pokedex.open')}
            </span>
          </div>
        </motion.button>
      </div>

      {/* Instruction text */}
      <motion.p
        className={cn(
          'mt-3 flex-none pb-[max(env(safe-area-inset-bottom),0px)] text-center font-pixel text-xs text-muted-foreground',
          webExpanded ? 'block text-sm' : 'hidden',
          !compactLayout && !fillViewport && 'sm:mt-8 sm:block sm:text-sm md:text-base lg:text-lg'
        )}
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        {t('pokedex.open')}
      </motion.p>
    </motion.div>
  );
};
