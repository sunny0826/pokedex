import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, X, Check, Tag, Download, Upload } from 'lucide-react';
import { FavoriteGroup } from '@/hooks/useFavorites';
import { Input } from './ui/input';
import { toast } from 'sonner';
import { useI18n } from '@/hooks/useI18n';

interface FavoriteGroupManagerProps {
  groups: FavoriteGroup[];
  selectedGroupId: string | null;
  onSelectGroup: (groupId: string | null) => void;
  onAddGroup: (name: string) => void;
  onRemoveGroup: (groupId: string) => void;
  groupColors: string[];
  onExport?: () => void;
  onImport?: (file: File) => Promise<{ success: boolean; message: string }>;
}

export const FavoriteGroupManager = ({
  groups,
  selectedGroupId,
  onSelectGroup,
  onAddGroup,
  onRemoveGroup,
  groupColors,
  onExport,
  onImport,
}: FavoriteGroupManagerProps) => {
  const [isAdding, setIsAdding] = useState(false);
  const [newGroupName, setNewGroupName] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { t } = useI18n();

  const handleAddGroup = () => {
    if (newGroupName.trim()) {
      onAddGroup(newGroupName.trim());
      setNewGroupName('');
      setIsAdding(false);
    }
  };

  const handleImportClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && onImport) {
      const result = await onImport(file);
      if (result.success) {
        toast.success(result.message);
      } else {
        toast.error(result.message);
      }
    }
    // Reset input
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="space-y-2">
      {/* Hidden file input for import */}
      <input
        ref={fileInputRef}
        type="file"
        accept=".json"
        onChange={handleFileChange}
        className="hidden"
        aria-label={t('favorites.importTitle')}
      />

      {/* Group chips */}
      <div className="flex flex-wrap gap-1.5 items-center">
        {/* All favorites button */}
        <motion.button
          onClick={() => onSelectGroup(null)}
          className={`min-h-11 px-3 py-1 rounded-full text-[10px] sm:text-xs font-medium transition-all flex items-center gap-1 ${
            selectedGroupId === null
              ? 'bg-pokedex-text text-pokedex-screen'
              : 'bg-pokedex-screen-light text-pokedex-text/70 hover:bg-pokedex-text/20'
          }`}
          whileTap={{ scale: 0.95 }}
        >
          {t('favorites.all')}
        </motion.button>

        {groups.map((group) => (
          <motion.div
            key={group.id}
            className="relative group"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <button
              onClick={() => onSelectGroup(group.id === selectedGroupId ? null : group.id)}
              className={`min-h-11 px-3 py-1 rounded-full text-[10px] sm:text-xs font-medium transition-all flex items-center gap-1 ${
                selectedGroupId === group.id
                  ? 'text-white'
                  : 'text-pokedex-text/80 hover:text-pokedex-text'
              }`}
              style={{
                backgroundColor: selectedGroupId === group.id 
                  ? group.color 
                  : `${group.color}30`,
              }}
            >
              <Tag className="w-2.5 h-2.5" />
              {group.name}
            </button>
            {/* Remove button on hover */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                onRemoveGroup(group.id);
              }}
              aria-label={`${t('team.clear')} ${group.name}`}
              className="absolute -top-2 -right-2 min-h-11 min-w-11 bg-red-500 rounded-full text-white opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity flex items-center justify-center"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </motion.div>
        ))}

        {/* Add group button */}
        <AnimatePresence mode="wait">
          {isAdding ? (
            <motion.div
              key="input"
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: 'auto' }}
              exit={{ opacity: 0, width: 0 }}
              className="flex items-center gap-1"
            >
              <Input
                type="text"
                value={newGroupName}
                onChange={(e) => setNewGroupName(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') handleAddGroup();
                  if (e.key === 'Escape') setIsAdding(false);
                }}
                aria-label={t('favorites.groupName')}
                placeholder={t('favorites.groupName')}
                className="h-11 w-28 text-xs px-3 bg-pokedex-screen-light border-pokedex-text/30"
                autoFocus
              />
              <button
                onClick={handleAddGroup}
                aria-label={t('favorites.addGroup')}
                className="min-h-11 min-w-11 p-2 rounded-full bg-green-500 text-white hover:bg-green-600"
              >
                <Check className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => {
                  setIsAdding(false);
                  setNewGroupName('');
                }}
                aria-label={t('pokedex.close')}
                className="min-h-11 min-w-11 p-2 rounded-full bg-gray-500 text-white hover:bg-gray-600"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </motion.div>
          ) : (
            <motion.button
              key="add-btn"
              onClick={() => setIsAdding(true)}
              className="min-h-11 px-3 py-1 rounded-full text-[10px] sm:text-xs font-medium bg-pokedex-screen-light text-pokedex-text/50 hover:text-pokedex-text hover:bg-pokedex-text/20 transition-all flex items-center gap-1"
              whileTap={{ scale: 0.95 }}
            >
              <Plus className="w-2.5 h-2.5" />
              {t('favorites.addGroup')}
            </motion.button>
          )}
        </AnimatePresence>

        {/* Separator */}
        <div className="w-px h-4 bg-pokedex-text/20 mx-1" />

        {/* Export button */}
        {onExport && (
          <motion.button
            onClick={onExport}
            className="min-h-11 px-3 py-1 rounded-full text-[10px] sm:text-xs font-medium bg-pokedex-screen-light text-pokedex-text/50 hover:text-pokedex-text hover:bg-pokedex-text/20 transition-all flex items-center gap-1"
            whileTap={{ scale: 0.95 }}
            title={t('favorites.exportTitle')}
            aria-label={t('favorites.exportTitle')}
          >
            <Download className="w-2.5 h-2.5" />
            {t('favorites.export')}
          </motion.button>
        )}

        {/* Import button */}
        {onImport && (
          <motion.button
            onClick={handleImportClick}
            className="min-h-11 px-3 py-1 rounded-full text-[10px] sm:text-xs font-medium bg-pokedex-screen-light text-pokedex-text/50 hover:text-pokedex-text hover:bg-pokedex-text/20 transition-all flex items-center gap-1"
            whileTap={{ scale: 0.95 }}
            title={t('favorites.importTitle')}
            aria-label={t('favorites.importTitle')}
          >
            <Upload className="w-2.5 h-2.5" />
            {t('favorites.import')}
          </motion.button>
        )}
      </div>
    </div>
  );
};
