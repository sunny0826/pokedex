import { getPokemonSpriteUrl } from '@/data/pokemon';
import { PokemonListItem } from '@/hooks/usePokemon';
import { cn } from '@/lib/utils';
import { Heart } from 'lucide-react';

interface PokemonCardProps {
  pokemon: PokemonListItem;
  isSelected: boolean;
  onClick: () => void;
  id?: string;
  isFavorite?: boolean;
}

export const PokemonCard = ({ pokemon, isSelected, onClick, id, isFavorite }: PokemonCardProps) => {
  const paddedId = String(pokemon.id).padStart(4, '0');

  return (
    <button
      id={id}
      onClick={onClick}
      className={cn(
        'relative flex min-h-[88px] flex-col items-center justify-center p-1.5 rounded transition-all duration-200',
        'bg-pokedex-screen-light hover:bg-pokedex-text/10 border',
        isSelected 
          ? 'border-pokedex-text ring-2 ring-pokedex-text/30 scale-105' 
          : 'border-pokedex-text/20 hover:border-pokedex-text/40'
      )}
    >
      {/* Favorite indicator */}
      {isFavorite && (
        <Heart className="absolute top-0.5 right-0.5 w-2.5 h-2.5 fill-red-500 text-red-500" />
      )}
      <span className="text-[8px] font-pixel text-pokedex-text/50 mb-0.5">
        {paddedId}
      </span>
      <div className="size-11 flex items-center justify-center">
        <img
          src={getPokemonSpriteUrl(pokemon.id)}
          alt={pokemon.name}
          className="w-full h-full object-contain image-rendering-pixelated"
          loading="lazy"
          decoding="async"
        />
      </div>
    </button>
  );
};
