import { motion } from 'framer-motion';
import { Trophy, Swords, Clock, TrendingUp, Trash2, Medal, Star } from 'lucide-react';
import { BattleStats, PokemonStats, BattleRecord } from '@/hooks/useBattleStats';
import { getPokemonImageUrl } from '@/data/pokemon';
import { useI18n } from '@/hooks/useI18n';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from './ui/alert-dialog';

interface BattleStatsPanelProps {
  stats: BattleStats;
  topPokemon: PokemonStats[];
  mostUsedPokemon: PokemonStats[];
  recentBattles: BattleRecord[];
  onClear: () => void;
}

const StatCard = ({ icon: Icon, label, value, color }: {
  icon: React.ElementType;
  label: string;
  value: string | number;
  color: string;
}) => (
  <div className="bg-pokedex-screen-dark/50 rounded-lg p-2 flex items-center gap-2">
    <div className={`w-8 h-8 rounded-full ${color} flex items-center justify-center`}>
      <Icon className="w-4 h-4 text-white" />
    </div>
    <div>
      <div className="text-[10px] text-pokedex-text/50">{label}</div>
      <div className="text-sm font-bold text-pokedex-text">{value}</div>
    </div>
  </div>
);

const PokemonRankItem = ({ pokemon, rank, type }: {
  pokemon: PokemonStats;
  rank: number;
  type: 'wins' | 'usage';
}) => {
  const { t } = useI18n();
  const medalColors = ['text-yellow-400', 'text-gray-400', 'text-amber-600'];

  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: rank * 0.05 }}
      className="flex items-center gap-2 p-1.5 bg-pokedex-screen-dark/30 rounded-lg"
    >
      <div className="w-5 text-center">
        {rank < 3 ? (
          <Medal className={`w-4 h-4 ${medalColors[rank]}`} />
        ) : (
          <span className="text-[10px] text-pokedex-text/50">#{rank + 1}</span>
        )}
      </div>
      <img
        src={getPokemonImageUrl(pokemon.id)}
        alt={pokemon.name}
        className="w-8 h-8 object-contain"
        loading="lazy"
        decoding="async"
      />
      <div className="flex-1 min-w-0">
        <div className="text-[11px] font-bold text-pokedex-text truncate">{pokemon.name}</div>
        <div className="text-[9px] text-pokedex-text/50">
          {type === 'wins'
            ? t('battle.stats.winLoss', {
              wins: pokemon.wins,
              losses: pokemon.losses,
              rate: pokemon.winRate.toFixed(0),
            })
            : t('battle.stats.battleCount', { count: pokemon.totalBattles })
          }
        </div>
      </div>
    </motion.div>
  );
};

const BattleRecordItem = ({ record }: { record: BattleRecord }) => {
  const { t } = useI18n();
  const date = new Date(record.timestamp);
  const timeStr = `${date.getMonth() + 1}/${date.getDate()} ${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 5 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex items-center gap-2 p-1.5 bg-pokedex-screen-dark/30 rounded text-[10px]"
    >
      <img
        src={getPokemonImageUrl(record.winnerId)}
        alt={record.winnerName}
        className="w-6 h-6 object-contain"
        loading="lazy"
        decoding="async"
      />
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-1">
          <Trophy className="w-3 h-3 text-yellow-400" />
          <span className="font-bold text-pokedex-text truncate">{record.winnerName}</span>
          <span className="text-pokedex-text/40">{t('battle.stats.vs')}</span>
          <span className="text-pokedex-text/60 truncate">{record.loserName}</span>
        </div>
      </div>
      <div className="text-pokedex-text/40 text-[9px] whitespace-nowrap">
        {t('battle.stats.turnCount', { turns: record.turns })} · {timeStr}
      </div>
    </motion.div>
  );
};

export const BattleStatsPanel = ({
  stats,
  topPokemon,
  mostUsedPokemon,
  recentBattles,
  onClear,
}: BattleStatsPanelProps) => {
  const { t } = useI18n();

  if (stats.totalBattles === 0) {
    return (
      <div className="h-full flex flex-col items-center justify-center text-pokedex-text/40 gap-3 p-4">
        <div className="w-16 h-16 rounded-full bg-pokedex-text/5 flex items-center justify-center">
          <Trophy className="w-8 h-8" />
        </div>
        <p className="text-sm text-center whitespace-pre-line">{t('battle.stats.empty')}</p>
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col gap-3 p-2 overflow-y-auto scrollbar-pokedex">
      {/* Overview Stats */}
      <div className="grid grid-cols-3 gap-2">
        <StatCard icon={Swords} label={t('battle.stats.total')} value={stats.totalBattles} color="bg-blue-500" />
        <StatCard icon={Star} label={t('battle.stats.manual')} value={stats.manualBattles} color="bg-green-500" />
        <StatCard icon={Clock} label={t('battle.stats.auto')} value={stats.autoBattles} color="bg-purple-500" />
      </div>

      {/* Top Pokemon */}
      {topPokemon.length > 0 && (
        <div>
          <div className="flex items-center gap-1 mb-2">
            <Trophy className="w-3.5 h-3.5 text-yellow-400" />
            <span className="text-[11px] font-bold text-pokedex-text">{t('battle.stats.topWins')}</span>
          </div>
          <div className="space-y-1.5">
            {topPokemon.map((pokemon, i) => (
              <PokemonRankItem key={pokemon.id} pokemon={pokemon} rank={i} type="wins" />
            ))}
          </div>
        </div>
      )}

      {/* Most Used Pokemon */}
      {mostUsedPokemon.length > 0 && (
        <div>
          <div className="flex items-center gap-1 mb-2">
            <TrendingUp className="w-3.5 h-3.5 text-pokedex-blue" />
            <span className="text-[11px] font-bold text-pokedex-text">{t('battle.stats.mostUsed')}</span>
          </div>
          <div className="space-y-1.5">
            {mostUsedPokemon.map((pokemon, i) => (
              <PokemonRankItem key={pokemon.id} pokemon={pokemon} rank={i} type="usage" />
            ))}
          </div>
        </div>
      )}

      {/* Recent Battles */}
      {recentBattles.length > 0 && (
        <div>
          <div className="flex items-center gap-1 mb-2">
            <Clock className="w-3.5 h-3.5 text-pokedex-text/60" />
            <span className="text-[11px] font-bold text-pokedex-text">{t('battle.stats.recent')}</span>
          </div>
          <div className="space-y-1">
            {recentBattles.slice(0, 5).map((record) => (
              <BattleRecordItem key={record.id} record={record} />
            ))}
          </div>
        </div>
      )}

      {/* Clear Button */}
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <button
            className="mt-auto flex min-h-11 items-center justify-center gap-1.5 py-2 px-3 bg-destructive/10 hover:bg-destructive/20 text-destructive rounded-lg text-[11px] transition-colors"
            aria-label={t('battle.stats.clear')}
          >
            <Trash2 className="w-3.5 h-3.5" />
            {t('battle.stats.clear')}
          </button>
        </AlertDialogTrigger>
        <AlertDialogContent className="w-[calc(100vw-2rem)] max-w-sm rounded-lg">
          <AlertDialogHeader>
            <AlertDialogTitle>{t('battle.stats.clearTitle')}</AlertDialogTitle>
            <AlertDialogDescription>{t('battle.stats.clearDescription')}</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter className="gap-2">
            <AlertDialogCancel className="min-h-11">{t('common.cancel')}</AlertDialogCancel>
            <AlertDialogAction
              onClick={onClear}
              className="min-h-11 bg-destructive text-destructive-foreground hover:bg-destructive/90"
            >
              {t('battle.stats.clear')}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};
