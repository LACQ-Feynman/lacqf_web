"use client";

import React, { useRef, useState, useEffect } from 'react';
import { useTheme } from '@/contexts/ThemeContext';

export const AnimatedThemeToggler = ({
  className = '',
  duration = 1500  // 1.5 seconds duration for even more apparent "consumption" effect at higher frame rates
}) => {
  // Theme toggle with View Transitions when available.
  // We animate a clip-path ripple centered on the button.
  // During the transition, we set a global flag to let heavy components (Hero)
  // throttle work and keep the experience smooth.
  const { isDark, toggleTheme } = useTheme();
  const buttonRef = useRef(null);

  // State to prevent hydration mismatch - this is safe to use in useEffect with empty dependency array
  const [hasHydrated, setHasHydrated] = useState(false);

  useEffect(() => {
    // Set hydrated state after component mounts to prevent hydration mismatch
    // eslint-disable-next-line react-hooks/set-state-in-effect -- This is a standard pattern to prevent hydration mismatch
    setHasHydrated(true);
  }, []); // Empty dependency array ensures this runs only once after mount

  const handleToggle = async () => {
    // Mark the site as transitioning to help heavy animations back off briefly.
    if (typeof window !== 'undefined') {
      window.__themeTransitioning = true;
    }
    if (!buttonRef.current) {
      toggleTheme();
      return;
    }

    // Check if the browser supports View Transitions
    if (!('startViewTransition' in document)) {
      // Fallback: just toggle the theme without the ripple.
      toggleTheme();
      return;
    }

    try {
      const transition = document.startViewTransition(() => {
        toggleTheme();
      });

      await transition.ready;

      const { top, left, width, height } = buttonRef.current.getBoundingClientRect();
      const x = left + width / 2;
      const y = top + height / 2;
      const right = window.innerWidth - left;
      const bottom = window.innerHeight - top;
      const maxRadius = Math.hypot(Math.max(left, right), Math.max(top, bottom));

      // Set CSS custom properties for the animation
      document.documentElement.style.setProperty('--animation-x', `${x}px`);
      document.documentElement.style.setProperty('--animation-y', `${y}px`);

      // Optimized animation with GPU-friendly properties
      const animation = document.documentElement.animate(
        {
          clipPath: [
            `circle(0px at ${x}px ${y}px)`,
            `circle(${maxRadius}px at ${x}px ${y}px)`,
          ],
        },
        {
          duration,
          // Using an easing function optimized for smooth 90fps animation that starts slower and accelerates for "consuming" effect
          easing: "cubic-bezier(0.16, 1.0, 0.3, 1.0)",
          pseudoElement: "::view-transition-new(root)",
          // Optimize for performance with smooth animation
          composite: "replace"
        }
      );

      // Hint that we'll animate clip-path on the root for better performance.
      document.documentElement.style.willChange = 'clip-path';

      animation.onfinish = () => {
        // Clean up CSS properties and will-change after animation
        document.documentElement.style.removeProperty('--animation-x');
        document.documentElement.style.removeProperty('--animation-y');
        document.documentElement.style.removeProperty('will-change');
        if (typeof window !== 'undefined') {
          window.__themeTransitioning = false;
        }
      };
      animation.oncancel = () => {
        document.documentElement.style.removeProperty('--animation-x');
        document.documentElement.style.removeProperty('--animation-y');
        document.documentElement.style.removeProperty('will-change');
        if (typeof window !== 'undefined') {
          window.__themeTransitioning = false;
        }
      };

    } catch (error) {
      // If anything fails, switch instantly and clear the flag.
      toggleTheme();
      if (typeof window !== 'undefined') {
        window.__themeTransitioning = false;
      }
    }
  };

  // Use consistent text during server-side rendering and early hydration
  // Then switch to dynamic text after hydration is complete
  const themeText = hasHydrated ? (isDark ? 'Alternar para modo claro' : 'Alternar para modo escuro') : 'Alternar tema';
  const ariaLabel = hasHydrated ? (isDark ? 'Ativar modo claro' : 'Ativar modo escuro') : 'Alternar tema';
  const title = hasHydrated ? (isDark ? 'Alternar para modo claro (Ctrl+T)' : 'Alternar para modo escuro (Ctrl+T)') : 'Alternar tema (Ctrl+T)';
  const currentTheme = hasHydrated ? (isDark ? 'dark' : 'light') : 'theme';

  return (
    <div className="relative">
      <button
        ref={buttonRef}
        onClick={handleToggle}
        className={`
          relative overflow-hidden rounded-full p-2
          transition-all duration-200 ease-out
          hover:scale-110 active:scale-95
          focus:outline-none focus:ring-2 focus:ring-blue-500
          focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-900
          shadow-md hover:shadow-lg
          ${isDark ? 'theme-toggle-dark' : 'theme-toggle-light'}
          ${className}
          will-change-transform
        `}
        title={title}
        aria-label={ariaLabel}
      >
        <div className="relative w-6 h-6 flex items-center justify-center">
          {/* Sun icon (visible in light mode) */}
          <svg
            className={`absolute w-5 h-5 transition-all duration-200 ease-out transform-gpu ${
              !isDark
                ? 'translate-x-0 scale-100 opacity-100'
                : '-translate-x-2 scale-75 opacity-0'
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>

          {/* Moon icon (visible in dark mode) */}
          <svg
            className={`absolute w-5 h-5 transition-all duration-200 ease-out transform-gpu ${
              isDark
                ? 'translate-x-0 scale-100 opacity-100'
                : 'translate-x-2 scale-75 opacity-0'
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
          </svg>
        </div>

        <span className="sr-only">
          {themeText}
        </span>
      </button>

      {/* Visual indicator dot */}
      <div
        className={`absolute -top-1 -right-1 w-3 h-3 rounded-full border-2 border-white dark:border-gray-800 shadow-sm animate-pulse ${
          isDark ? 'theme-indicator-dark' : 'theme-indicator-light'
        }`}
        title={`Current theme: ${currentTheme}`}
      />
    </div>
  );
};