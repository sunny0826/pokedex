import { PokemonType, getTypeName, typeColorClasses } from '@/data/pokemon';
import { useI18n } from '@/hooks/useI18n';
import { cn } from '@/lib/utils';

interface TypeBadgeProps {
  type: PokemonType;
  className?: string;
  size?: 'sm' | 'md';
}

export const TypeBadge = ({ type, className, size = 'md' }: TypeBadgeProps) => {
  const { language } = useI18n();
  const sizeClasses = size === 'sm' 
    ? 'px-1.5 py-0.5 text-[8px] sm:px-2 sm:py-0.5 sm:text-[10px]' 
    : 'px-2 py-0.5 text-[10px] sm:px-3 sm:py-1 sm:text-xs';
  
  return (
    <span
      className={cn(
        'inline-flex items-center justify-center rounded font-bold text-white shadow-md',
        'border border-black/20 sm:border-2',
        sizeClasses,
        typeColorClasses[type],
        className
      )}
    >
      {getTypeName(type, language)}
    </span>
  );
};
