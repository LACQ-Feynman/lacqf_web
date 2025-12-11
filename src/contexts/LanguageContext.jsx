'use client';

import React, { createContext, useContext, useEffect, useState, useCallback, useMemo } from 'react';
import { loadTranslations } from '@/lib/i18n';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  // We lazily initialize from localStorage so SSR doesn't break
  // and the first client render matches the user's preference.
  const [currentLanguage, setCurrentLanguage] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('language') || 'pt-BR';
    }
    return 'pt-BR';
  });
  const [translations, setTranslations] = useState({});

  useEffect(() => {
    // Load translations for the current language whenever it changes.
    const loadAndSetTranslations = async () => {
      const translationModule = await loadTranslations(currentLanguage);
      setTranslations(translationModule.default || {});
    };

    loadAndSetTranslations();
  }, [currentLanguage]);

  // Initial state comes from localStorage via the lazy initializer above

  const changeLanguage = useCallback(async (language) => {
    // Persist, then load translation bundle and update state.
    setCurrentLanguage(language);
    localStorage.setItem('language', language);
    
    // Load translations for the new language
    const translationModule = await loadTranslations(language);
    setTranslations(translationModule.default || {});
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