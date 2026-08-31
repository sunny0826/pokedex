import { createContext, useContext } from 'react';
import {
  AppLanguage,
  PokeApiLanguage,
  TranslationKey,
  TranslationParams,
} from '@/lib/i18n';

export interface I18nContextValue {
  language: AppLanguage;
  pokeApiLanguage: PokeApiLanguage;
  setLanguage: (language: AppLanguage) => void;
  t: (key: TranslationKey, params?: TranslationParams) => string;
}

export const I18nContext = createContext<I18nContextValue | null>(null);

export const useI18n = () => {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useI18n must be used within I18nProvider');
  }
  return context;
};
