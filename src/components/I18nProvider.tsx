import { ReactNode, useEffect, useMemo, useState } from 'react';
import { I18nContext, I18nContextValue } from '@/hooks/useI18n';
import {
  AppLanguage,
  DEFAULT_LANGUAGE,
  LANGUAGE_STORAGE_KEY,
  appLanguageToHtmlLanguage,
  appLanguageToPokeApiLanguage,
  normalizeLanguage,
  translate,
} from '@/lib/i18n';

export const I18nProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<AppLanguage>(() => {
    if (typeof window === 'undefined') return DEFAULT_LANGUAGE;
    return normalizeLanguage(window.localStorage.getItem(LANGUAGE_STORAGE_KEY));
  });

  useEffect(() => {
    document.documentElement.lang = appLanguageToHtmlLanguage[language];
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
  }, [language]);

  const value = useMemo<I18nContextValue>(() => {
    return {
      language,
      pokeApiLanguage: appLanguageToPokeApiLanguage[language],
      setLanguage: setLanguageState,
      t: (key, params) => translate(language, key, params),
    };
  }, [language]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
};
