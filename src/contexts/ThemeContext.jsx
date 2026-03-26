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
  // Use a function to initialize state from localStorage to avoid cascading renders in useEffect
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      return savedTheme !== 'light'; // Default to true (dark) if not explicitly 'light'
    }
    return true;
  });

  const toggleTheme = useCallback(() => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    if (typeof window !== 'undefined') {
      document.documentElement.classList.toggle('dark', newTheme);
      localStorage.setItem('theme', newTheme ? 'dark' : 'light');
    }
  }, [isDark]);

  useEffect(() => {
    // Initial sync of the DOM class on mount or theme change
    if (typeof window !== 'undefined') {
      document.documentElement.classList.toggle('dark', isDark);
    }
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
