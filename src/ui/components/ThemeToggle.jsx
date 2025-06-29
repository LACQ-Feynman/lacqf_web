'use client';

import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative inline-flex h-8 w-16 items-center rounded-full bg-gray-200 dark:bg-gray-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      aria-label={isDark ? 'Mudar para tema claro' : 'Mudar para tema escuro'}
    >
      <span
        className={`absolute left-1 top-1 transition-transform duration-200 ${isDark ? 'translate-x-8' : 'translate-x-0'}`}
      >
        <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white shadow-lg">
          {isDark ? <Moon className="h-4 w-4 text-blue-500" /> : <Sun className="h-4 w-4 text-yellow-500" />}
        </span>
      </span>
      <span className="opacity-0">_</span>
    </button>
  );
};

export default ThemeToggle; 