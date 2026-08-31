import { useEffect } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { usePokedexDataUpdates } from '@/hooks/usePokedexDataUpdates';

export const PokedexDataUpdater = () => {
  const queryClient = useQueryClient();
  const { status, isUpdating, lastError, activeDatabaseChanged } = usePokedexDataUpdates();

  useEffect(() => {
    if (isUpdating) {
      toast.loading('正在更新图鉴资料库...', { id: 'pokedex-data-update' });
      return;
    }

    toast.dismiss('pokedex-data-update');
  }, [isUpdating]);

  useEffect(() => {
    if (lastError) {
      console.warn('Pokedex data update failed', lastError);
    }
  }, [lastError]);

  useEffect(() => {
    if (!activeDatabaseChanged) return;

    void queryClient.invalidateQueries({ queryKey: ['pokemonDataPackageStatus'] });
    void queryClient.invalidateQueries({ queryKey: ['pokemonList'] });
    void queryClient.invalidateQueries({ queryKey: ['pokemonRangeList'] });
    void queryClient.invalidateQueries({ queryKey: ['pokemonIdList'] });
    void queryClient.invalidateQueries({ queryKey: ['pokemonDetailV2'] });
    void queryClient.invalidateQueries({ queryKey: ['evolutionChain'] });
  }, [activeDatabaseChanged, queryClient]);

  useEffect(() => {
    if (status?.activeMeta) {
      console.info(
        `Pokedex data package active: ${status.activeMeta.datasetVersion} (${status.activeDatabase})`
      );
    }
  }, [status?.activeDatabase, status?.activeMeta]);

  return null;
};
