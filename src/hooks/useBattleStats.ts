import { useState, useCallback, useEffect } from 'react';
import {
  loadBattleStats,
  saveBattleStats,
  type StoredBattleStats,
} from '@/lib/storage/userDataRepository';

export interface BattleRecord {
  id: string;
  winnerId: number;
  winnerName: string;
  loserId: number;
  loserName: string;
  battleMode: 'auto' | 'manual';
  turns: number;
  timestamp: number;
}

export interface PokemonStats {
  id: number;
  name: string;
  wins: number;
  losses: number;
  totalBattles: number;
  winRate: number;
}

export interface BattleStats {
  totalBattles: number;
  manualBattles: number;
  autoBattles: number;
  records: BattleRecord[];
  pokemonStats: Record<number, PokemonStats>;
}

const getInitialStats = (): BattleStats => ({
  totalBattles: 0,
  manualBattles: 0,
  autoBattles: 0,
  records: [],
  pokemonStats: {},
});

export const useBattleStats = () => {
  const [stats, setStats] = useState<BattleStats>(getInitialStats);
  const [isReady, setIsReady] = useState(false);

  // Load from SQLite on mount
  useEffect(() => {
    let isMounted = true;

    loadBattleStats()
      .then((savedStats) => {
        if (isMounted) setStats(savedStats);
      })
      .catch((error) => {
        console.error('Failed to load battle stats:', error);
      })
      .finally(() => {
        if (isMounted) setIsReady(true);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  // Save to SQLite whenever stats change
  useEffect(() => {
    if (!isReady) return;

    saveBattleStats(stats as StoredBattleStats).catch((error) => {
      console.error('Failed to save battle stats:', error);
    });
  }, [stats, isReady]);

  // Record a battle result
  const recordBattle = useCallback((
    winnerId: number,
    winnerName: string,
    loserId: number,
    loserName: string,
    battleMode: 'auto' | 'manual',
    turns: number
  ) => {
    const record: BattleRecord = {
      id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      winnerId,
      winnerName,
      loserId,
      loserName,
      battleMode,
      turns,
      timestamp: Date.now(),
    };

    setStats(prev => {
      const newRecords = [record, ...prev.records].slice(0, 100); // Keep last 100 records
      
      // Update winner stats
      const winnerStats = prev.pokemonStats[winnerId] || {
        id: winnerId,
        name: winnerName,
        wins: 0,
        losses: 0,
        totalBattles: 0,
        winRate: 0,
      };
      winnerStats.wins += 1;
      winnerStats.totalBattles += 1;
      winnerStats.winRate = (winnerStats.wins / winnerStats.totalBattles) * 100;

      // Update loser stats
      const loserStats = prev.pokemonStats[loserId] || {
        id: loserId,
        name: loserName,
        wins: 0,
        losses: 0,
        totalBattles: 0,
        winRate: 0,
      };
      loserStats.losses += 1;
      loserStats.totalBattles += 1;
      loserStats.winRate = (loserStats.wins / loserStats.totalBattles) * 100;

      return {
        totalBattles: prev.totalBattles + 1,
        manualBattles: battleMode === 'manual' ? prev.manualBattles + 1 : prev.manualBattles,
        autoBattles: battleMode === 'auto' ? prev.autoBattles + 1 : prev.autoBattles,
        records: newRecords,
        pokemonStats: {
          ...prev.pokemonStats,
          [winnerId]: { ...winnerStats },
          [loserId]: { ...loserStats },
        },
      };
    });
  }, []);

  // Get top pokemon by wins
  const getTopPokemon = useCallback((limit: number = 5): PokemonStats[] => {
    return Object.values(stats.pokemonStats)
      .sort((a, b) => b.wins - a.wins)
      .slice(0, limit);
  }, [stats.pokemonStats]);

  // Get most used pokemon
  const getMostUsedPokemon = useCallback((limit: number = 5): PokemonStats[] => {
    return Object.values(stats.pokemonStats)
      .sort((a, b) => b.totalBattles - a.totalBattles)
      .slice(0, limit);
  }, [stats.pokemonStats]);

  // Get recent battles
  const getRecentBattles = useCallback((limit: number = 10): BattleRecord[] => {
    return stats.records.slice(0, limit);
  }, [stats.records]);

  // Clear all stats
  const clearStats = useCallback(() => {
    setStats(getInitialStats());
  }, []);

  return {
    stats,
    isReady,
    recordBattle,
    getTopPokemon,
    getMostUsedPokemon,
    getRecentBattles,
    clearStats,
  };
};
