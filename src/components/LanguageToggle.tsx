import { useI18n } from '@/hooks/useI18n';
import { AppLanguage } from '@/lib/i18n';
import { cn } from '@/lib/utils';

const languageOptions: { value: AppLanguage; labelKey: 'language.zh' | 'language.en' }[] = [
  { value: 'zh', labelKey: 'language.zh' },
  { value: 'en', labelKey: 'language.en' },
];

interface LanguageToggleProps {
  className?: string;
  compact?: boolean;
  variant?: 'default' | 'device';
}

export const LanguageToggle = ({
  className,
  compact = false,
  variant = 'default',
}: LanguageToggleProps) => {
  const { language, setLanguage, t } = useI18n();
  const isDevice = variant === 'device';

  return (
    <div
      className={cn(
        'inline-flex rounded-md p-0.5',
        isDevice
          ? 'border border-white/10 bg-pokedex-dark/45 shadow-inner'
          : 'border border-border bg-background',
        className
      )}
      role="group"
      aria-label={t('language.label')}
    >
      {languageOptions.map((option) => {
        const isActive = language === option.value;

        return (
          <button
            key={option.value}
            type="button"
            aria-pressed={isActive}
            onClick={() => setLanguage(option.value)}
            className={cn(
              'min-h-11 rounded-sm px-2.5 py-1 text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
              compact ? 'min-w-11' : 'w-16',
              isDevice && 'font-pixel text-[9px] active:translate-y-0.5',
              isDevice
                ? isActive
                  ? 'bg-pokedex-yellow text-pokedex-dark shadow-inner focus-visible:ring-white/60 focus-visible:ring-offset-pokedex-frame-dark'
                  : 'bg-pokedex-frame-dark/70 text-white/80 hover:bg-pokedex-frame-dark focus-visible:ring-white/60 focus-visible:ring-offset-pokedex-frame-dark'
                : isActive
                  ? 'bg-primary text-primary-foreground'
                  : 'text-muted-foreground hover:bg-muted hover:text-foreground'
            )}
            title={t('language.switchTo')}
          >
            {compact ? (option.value === 'zh' ? '中' : 'EN') : t(option.labelKey)}
          </button>
        );
      })}
    </div>
  );
};
