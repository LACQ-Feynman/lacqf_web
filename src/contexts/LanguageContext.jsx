'use client';

import { createContext, useContext, useEffect, useState, useCallback, useMemo } from 'react';
import ptBR from '@/locales/pt-BR.json';
import { loadTranslations } from '@/lib/i18n';

const DEFAULT_LANGUAGE = 'pt-BR';
const SUPPORTED_LANGUAGES = ['pt-BR', 'en', 'es'];
const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  // Keep the server render and the first client render deterministic.
  const [currentLanguage, setCurrentLanguage] = useState(DEFAULT_LANGUAGE);
  const [translations, setTranslations] = useState(ptBR);

  useEffect(() => {
    const storedLanguage = window.localStorage.getItem('language');

    if (SUPPORTED_LANGUAGES.includes(storedLanguage) && storedLanguage !== DEFAULT_LANGUAGE) {
      const frame = window.requestAnimationFrame(() => setCurrentLanguage(storedLanguage));
      return () => window.cancelAnimationFrame(frame);
    }

    return undefined;
  }, []);

  useEffect(() => {
    document.documentElement.lang = currentLanguage;

    let cancelled = false;

    if (currentLanguage === DEFAULT_LANGUAGE) {
      return undefined;
    }

    loadTranslations(currentLanguage).then((translationModule) => {
      if (!cancelled) {
        setTranslations(translationModule.default || translationModule);
      }
    });

    return () => {
      cancelled = true;
    };
  }, [currentLanguage]);

  const changeLanguage = useCallback((language) => {
    if (!SUPPORTED_LANGUAGES.includes(language)) return;

    setCurrentLanguage(language);
    if (language === DEFAULT_LANGUAGE) {
      setTranslations(ptBR);
    }
    window.localStorage.setItem('language', language);
  }, []);

  const t = useCallback((key) => {
    // Simple dict lookup; if a key is missing, fall back to the key itself.
    return translations[key] || key;
  }, [translations]);

  const contextValue = useMemo(() => ({
    currentLanguage,
    changeLanguage,
    t
  }), [currentLanguage, changeLanguage, t]);

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
};