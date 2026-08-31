import { useState, useEffect } from 'react';
import { useI18n } from './useI18n';
import {
  loadFavoriteData,
  saveFavoriteData,
  type StoredFavoriteGroup,
} from '@/lib/storage/userDataRepository';
import { shareAndroidJsonFile } from '@/lib/native/androidApp';

export interface FavoriteGroup {
  id: string;
  name: string;
  color: string;
  pokemonIds: number[];
}

export const groupColors = [
  '#ef4444', // red
  '#f97316', // orange
  '#eab308', // yellow
  '#22c55e', // green
  '#06b6d4', // cyan
  '#3b82f6', // blue
  '#a855f7', // purple
  '#ec4899', // pink
];

export const useFavorites = () => {
  const { t } = useI18n();
  const [isReady, setIsReady] = useState(false);
  // Favorites state
  const [favorites, setFavorites] = useState<number[]>([]);

  // Groups state
  const [groups, setGroups] = useState<FavoriteGroup[]>([]);

  useEffect(() => {
    let isMounted = true;

    loadFavoriteData()
      .then((data) => {
        if (!isMounted) return;
        setFavorites(data.favorites);
        setGroups(data.groups);
      })
      .catch((error) => {
        console.error('Failed to load favorite data', error);
      })
      .finally(() => {
        if (isMounted) setIsReady(true);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  // Persist favorites
  useEffect(() => {
    if (!isReady) return;

    saveFavoriteData(favorites, groups as StoredFavoriteGroup[]).catch((error) => {
      console.error('Failed to save favorite data', error);
    });
  }, [favorites, groups, isReady]);

  const toggleFavorite = (id: number) => {
    setFavorites(prev => {
      const isRemoving = prev.includes(id);
      if (isRemoving) {
        // Also remove from all groups
        setGroups(currentGroups => 
          currentGroups.map(g => ({
            ...g,
            pokemonIds: g.pokemonIds.filter(pid => pid !== id)
          }))
        );
        return prev.filter(favId => favId !== id);
      } else {
        return [...prev, id];
      }
    });
  };

  const isFavorite = (id: number) => favorites.includes(id);

  // Group operations
  const addGroup = (name: string) => {
    const newGroup: FavoriteGroup = {
      id: crypto.randomUUID(),
      name,
      color: groupColors[groups.length % groupColors.length],
      pokemonIds: []
    };
    setGroups(prev => [...prev, newGroup]);
  };

  const removeGroup = (groupId: string) => {
    setGroups(prev => prev.filter(g => g.id !== groupId));
  };

  const togglePokemonGroup = (pokemonId: number, groupId: string) => {
    setGroups(prev => prev.map(group => {
      if (group.id !== groupId) return group;
      
      const isInGroup = group.pokemonIds.includes(pokemonId);
      return {
        ...group,
        pokemonIds: isInGroup
          ? group.pokemonIds.filter(id => id !== pokemonId)
          : [...group.pokemonIds, pokemonId]
      };
    }));
  };

  const isPokemonInGroup = (pokemonId: number, groupId: string) => {
    const group = groups.find(g => g.id === groupId);
    return group ? group.pokemonIds.includes(pokemonId) : false;
  };

  const getPokemonsByGroup = (groupId: string) => {
    const group = groups.find(g => g.id === groupId);
    return group ? group.pokemonIds : [];
  };

  // Export data as JSON
  const exportData = async () => {
    const data = {
      favorites,
      groups,
      exportDate: new Date().toISOString(),
      version: 1
    };
    const json = JSON.stringify(data, null, 2);
    const fileName = `pokedex-favorites-${new Date().toISOString().split('T')[0]}.json`;

    try {
      const shared = await shareAndroidJsonFile(fileName, json, t('favorites.exportTitle'));
      if (shared) return;
    } catch (error) {
      console.error('Failed to share favorites export on Android', error);
    }

    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  // Import data from JSON
  const importData = (file: File): Promise<{ success: boolean; message: string }> => {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const content = e.target?.result as string;
          const data = JSON.parse(content);
          
          if (!data.favorites || !Array.isArray(data.favorites)) {
            resolve({ success: false, message: t('favorites.importMissingFavorites') });
            return;
          }
          
          if (!data.groups || !Array.isArray(data.groups)) {
            resolve({ success: false, message: t('favorites.importMissingGroups') });
            return;
          }
          
          setFavorites(data.favorites);
          setGroups(data.groups);
          resolve({
            success: true,
            message: t('favorites.importSuccess', {
              favorites: data.favorites.length,
              groups: data.groups.length,
            }),
          });
        } catch (error) {
          resolve({ success: false, message: t('favorites.importParseFailed') });
        }
      };
      reader.onerror = () => {
        resolve({ success: false, message: t('favorites.importReadFailed') });
      };
      reader.readAsText(file);
    });
  };

  return {
    favorites,
    isReady,
    toggleFavorite,
    isFavorite,
    groups,
    addGroup,
    removeGroup,
    groupColors,
    togglePokemonGroup,
    isPokemonInGroup,
    getPokemonsByGroup,
    exportData,
    importData
  };
};
