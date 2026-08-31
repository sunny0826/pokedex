import { useEffect, useState } from 'react';
import {
  checkPokedexDataUpdate,
  installBundledPokedexDataPackage,
  installPokedexDataPackage,
  getPokedexDataPackageStatus,
} from '@/lib/pokedexData/packageManager';
import type { DataPackageStatus } from '@/lib/pokedexData/types';
import { shouldUseLocalPokedexDatabase } from '@/lib/runtime';

export interface PokedexDataUpdateState {
  status: DataPackageStatus | null;
  isChecking: boolean;
  isUpdating: boolean;
  lastError: string | null;
  lastCheckedAt: number | null;
  activeDatabaseChanged: boolean;
}

export const usePokedexDataUpdates = () => {
  const [state, setState] = useState<PokedexDataUpdateState>({
    status: null,
    isChecking: false,
    isUpdating: false,
    lastError: null,
    lastCheckedAt: null,
    activeDatabaseChanged: false,
  });

  useEffect(() => {
    if (!shouldUseLocalPokedexDatabase()) return;

    let cancelled = false;

    const run = async () => {
      setState((current) => ({ ...current, isChecking: true, lastError: null }));

      try {
        const previousStatus = await getPokedexDataPackageStatus().catch(() => null);
        await installBundledPokedexDataPackage().catch(() => null);

        const updateCheck = await checkPokedexDataUpdate();
        if (cancelled) return;

        if (updateCheck.updateAvailable && updateCheck.manifest) {
          setState((current) => ({ ...current, isUpdating: true }));
          await installPokedexDataPackage(updateCheck.manifest);
        }

        const status = await getPokedexDataPackageStatus();
        if (cancelled) return;
        const previousActiveDatabase = previousStatus?.activeDatabase ?? null;
        const activeDatabaseChanged =
          Boolean(status.activeDatabase) && previousActiveDatabase !== status.activeDatabase;

        setState({
          status,
          isChecking: false,
          isUpdating: false,
          lastError: null,
          lastCheckedAt: updateCheck.checkedAt,
          activeDatabaseChanged,
        });
      } catch (error) {
        if (cancelled) return;

        const status = await getPokedexDataPackageStatus().catch(() => null);
        setState({
          status,
          isChecking: false,
          isUpdating: false,
          lastError: error instanceof Error ? error.message : String(error),
          lastCheckedAt: Date.now(),
          activeDatabaseChanged: false,
        });
      }
    };

    void run();

    return () => {
      cancelled = true;
    };
  }, []);

  return state;
};
