import { useState, useMemo } from 'react';
import { usePokemonList, PokemonListItem } from './usePokemon';
import { useSavedTeams } from './useSavedTeams';

interface UseTeamBuilderOptions {
  autoLoadAll?: boolean;
}

export const useTeamBuilder = ({ autoLoadAll = false }: UseTeamBuilderOptions = {}) => {
  const [team, setTeam] = useState<(number | null)[]>([null, null, null, null, null, null]);
  const { data } = usePokemonList({ autoLoadAll });
  const allPokemon = useMemo(() => data?.pages.flat() || [], [data]);
  const { savedTeams, saveTeam, updateTeam, deleteTeam } = useSavedTeams();

  const handleSelectPokemon = (slot: number, pokemonId: number | null) => {
    setTeam(prev => {
      const newTeam = [...prev];
      newTeam[slot] = pokemonId;
      return newTeam;
    });
  };

  const clearTeam = () => {
    setTeam([null, null, null, null, null, null]);
  };

  const handleLoadTeam = (pokemonIds: (number | null)[]) => {
    // Ensure we have exactly 6 slots
    const normalizedIds = [...pokemonIds];
    while (normalizedIds.length < 6) normalizedIds.push(null);
    setTeam(normalizedIds.slice(0, 6));
  };

  const handleSaveTeam = (name: string) => {
    saveTeam(name, team);
  };

  const handleUpdateTeam = (id: string, pokemonIds: (number | null)[]) => {
    updateTeam(id, { pokemonIds });
  };

  const teamPokemons = useMemo(() => {
    return team.map(id => 
      id ? allPokemon.find(p => p.id === id) || null : null
    );
  }, [team, allPokemon]);

  return {
    team,
    teamPokemons,
    setTeam,
    allPokemon,
    savedTeams,
    handleSelectPokemon,
    clearTeam,
    handleLoadTeam,
    handleSaveTeam,
    handleUpdateTeam,
    deleteTeam,
  };
};
