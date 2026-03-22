'use client';

import React, { createContext, useContext, useEffect, useState, useCallback, useMemo } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  // `isDark` is the source of truth. Default to true (Dark Mode).
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Check if there's a stored preference on mount
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme === 'light') {
        setIsDark(false);
      } else {
        // If no theme or theme is dark, ensure dark class is applied
        document.documentElement.classList.add('dark');
      }
    }
  }, []);

  const toggleTheme = useCallback(() => {
    // Flip the boolean, update the DOM class, and persist.
    const newTheme = !isDark;
    setIsDark(newTheme);
    document.documentElement.classList.toggle('dark', newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
  }, [isDark]);

  useEffect(() => {
    // Keep the DOM class in sync whenever `isDark` changes.
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);

  const contextValue = useMemo(() => ({
    isDark,
    toggleTheme
  }), [isDark, toggleTheme]);

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};
