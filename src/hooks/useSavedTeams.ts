import { useState, useEffect } from 'react';
import {
  loadSavedTeams,
  saveSavedTeams,
  type StoredSavedTeam,
} from '@/lib/storage/userDataRepository';

export interface SavedTeam {
  id: string;
  name: string;
  pokemonIds: (number | null)[];
  createdAt: string;
  updatedAt: string;
}

export const useSavedTeams = () => {
  const [isReady, setIsReady] = useState(false);
  const [savedTeams, setSavedTeams] = useState<SavedTeam[]>([]);

  useEffect(() => {
    let isMounted = true;

    loadSavedTeams()
      .then((teams) => {
        if (isMounted) setSavedTeams(teams);
      })
      .catch((error) => {
        console.error('Failed to load saved teams', error);
      })
      .finally(() => {
        if (isMounted) setIsReady(true);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  // Persist to SQLite.
  useEffect(() => {
    if (!isReady) return;

    saveSavedTeams(savedTeams as StoredSavedTeam[]).catch((error) => {
      console.error('Failed to save teams', error);
    });
  }, [savedTeams, isReady]);

  const saveTeam = (name: string, pokemonIds: (number | null)[]): SavedTeam => {
    const newTeam: SavedTeam = {
      id: crypto.randomUUID(),
      name,
      pokemonIds,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    setSavedTeams(prev => [...prev, newTeam]);
    return newTeam;
  };

  const updateTeam = (id: string, updates: Partial<Pick<SavedTeam, 'name' | 'pokemonIds'>>) => {
    setSavedTeams(prev => prev.map(team => {
      if (team.id !== id) return team;
      return {
        ...team,
        ...updates,
        updatedAt: new Date().toISOString()
      };
    }));
  };

  const deleteTeam = (id: string) => {
    setSavedTeams(prev => prev.filter(team => team.id !== id));
  };

  const getTeam = (id: string): SavedTeam | undefined => {
    return savedTeams.find(team => team.id === id);
  };

  return {
    savedTeams,
    isReady,
    saveTeam,
    updateTeam,
    deleteTeam,
    getTeam
  };
};
