import { motion } from 'framer-motion';
import { Tag, Check } from 'lucide-react';
import { FavoriteGroup } from '@/hooks/useFavorites';
import { useI18n } from '@/hooks/useI18n';

interface PokemonGroupTagsProps {
  groups: FavoriteGroup[];
  pokemonId: number;
  isPokemonInGroup: (pokemonId: number, groupId: string) => boolean;
  onToggleGroup: (pokemonId: number, groupId: string) => void;
  compact?: boolean;
}

export const PokemonGroupTags = ({
  groups,
  pokemonId,
  isPokemonInGroup,
  onToggleGroup,
  compact = false,
}: PokemonGroupTagsProps) => {
  const { t } = useI18n();

  if (compact) {
    // Just show assigned group badges
    const assignedGroups = groups.filter(g => isPokemonInGroup(pokemonId, g.id));
    if (assignedGroups.length === 0) return null;
    
    return (
      <div className="flex flex-wrap gap-1">
        {assignedGroups.map((group) => (
          <span
            key={group.id}
            className="px-1.5 py-0.5 rounded text-[8px] text-white"
            style={{ backgroundColor: group.color }}
          >
            {group.name}
          </span>
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-2">
      <div className="text-[10px] text-pokedex-text/60 flex items-center gap-1">
        <Tag className="w-3 h-3" />
        {t('favorites.groupTags')}
      </div>
      <div className="flex flex-wrap gap-1.5">
        {groups.map((group) => {
          const isInGroup = isPokemonInGroup(pokemonId, group.id);
          return (
            <motion.button
              key={group.id}
              onClick={() => onToggleGroup(pokemonId, group.id)}
              className={`min-h-11 px-3 py-1 rounded-full text-[10px] font-medium transition-all flex items-center gap-1 ${
                isInGroup ? 'text-white' : 'text-pokedex-text/70'
              }`}
              style={{
                backgroundColor: isInGroup ? group.color : `${group.color}25`,
                borderWidth: 1,
                borderColor: isInGroup ? 'transparent' : `${group.color}50`,
              }}
              whileTap={{ scale: 0.9 }}
            >
              {isInGroup && <Check className="w-2.5 h-2.5" />}
              {group.name}
            </motion.button>
          );
        })}
      </div>
      {groups.length === 0 && (
        <p className="text-[10px] text-pokedex-text/40">{t('favorites.noGroups')}</p>
      )}
    </div>
  );
};
