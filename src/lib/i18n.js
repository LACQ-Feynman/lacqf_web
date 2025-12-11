// Load translation files dynamically; fall back to pt-BR on errors.
export const loadTranslations = async (language) => {
  try {
    switch (language) {
      case 'pt-BR':
        const ptBR = await import('@/locales/pt-BR.json');
        return ptBR;
      case 'en':
        const en = await import('@/locales/en.json');
        return en;
      case 'es':
        const es = await import('@/locales/es.json');
        return es;
      default:
        const defaultLang = await import('@/locales/pt-BR.json');
        return defaultLang;
    }
  } catch (error) {
    console.error(`Error loading translations for language ${language}:`, error);
    // Fallback to Portuguese if there's an error
    const fallback = await import('@/locales/pt-BR.json');
    return fallback;
  }
};