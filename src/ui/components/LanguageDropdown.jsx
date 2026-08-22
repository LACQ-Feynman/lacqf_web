'use client';

import React, { useCallback, useEffect, useId, useRef, useState } from 'react';
import CountryFlag from 'react-country-flag';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Check, ChevronDown } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const languages = [
  { code: 'pt-BR', label: 'Português', country: 'BR' },
  { code: 'en', label: 'English', country: 'US' },
  { code: 'es', label: 'Español', country: 'ES' },
];

const flagStyle = {
  width: '1.35rem',
  height: '1.35rem',
  borderRadius: '9999px',
  objectFit: 'cover',
};

const menuVariants = {
  hidden: { opacity: 0, y: -8, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.2,
      ease: [0.16, 1, 0.3, 1],
      staggerChildren: 0.04,
    },
  },
  exit: {
    opacity: 0,
    y: -6,
    scale: 0.98,
    transition: { duration: 0.14, ease: 'easeIn' },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: -4 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.16, ease: 'easeOut' },
  },
};

const LanguageDropdown = () => {
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const { currentLanguage, changeLanguage, t } = useLanguage();
  const reducedMotion = useReducedMotion();
  const selectedIndex = Math.max(
    0,
    languages.findIndex((language) => language.code === currentLanguage)
  );
  const selected = languages[selectedIndex] || languages[0];
  const dropdownId = useId();
  const menuId = `${dropdownId}-menu`;
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);
  const menuItemRefs = useRef([]);

  const focusMenuItem = useCallback((index) => {
    setActiveIndex(index);
    window.requestAnimationFrame(() => menuItemRefs.current[index]?.focus());
  }, []);

  const openMenu = useCallback((index = selectedIndex) => {
    setActiveIndex(index);
    setOpen(true);
    window.requestAnimationFrame(() => menuItemRefs.current[index]?.focus());
  }, [selectedIndex]);

  const closeMenu = useCallback((restoreFocus = true) => {
    setOpen(false);
    if (restoreFocus) buttonRef.current?.focus();
  }, []);

  const toggleOpen = useCallback(() => {
    if (open) {
      closeMenu();
    } else {
      openMenu(selectedIndex);
    }
  }, [closeMenu, open, openMenu, selectedIndex]);

  const handleLanguageChange = useCallback((languageCode) => {
    const nextIndex = languages.findIndex((language) => language.code === languageCode);
    changeLanguage(languageCode);
    setActiveIndex(nextIndex >= 0 ? nextIndex : selectedIndex);
    closeMenu();
  }, [changeLanguage, closeMenu, selectedIndex]);

  const handleButtonKeyDown = (event) => {
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      openMenu(selectedIndex);
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      openMenu(languages.length - 1);
    } else if (event.key === 'Escape' && open) {
      event.preventDefault();
      closeMenu();
    }
  };

  const handleMenuKeyDown = (event) => {
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      focusMenuItem((activeIndex + 1) % languages.length);
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      focusMenuItem((activeIndex - 1 + languages.length) % languages.length);
    } else if (event.key === 'Home') {
      event.preventDefault();
      focusMenuItem(0);
    } else if (event.key === 'End') {
      event.preventDefault();
      focusMenuItem(languages.length - 1);
    } else if (event.key === 'Escape') {
      event.preventDefault();
      closeMenu();
    } else if (event.key === 'Tab') {
      closeMenu(false);
    }
  };

  useEffect(() => {
    if (!open) return undefined;

    const closeOnOutsideClick = (event) => {
      if (!dropdownRef.current?.contains(event.target)) {
        closeMenu(false);
      }
    };

    const closeOnEscape = (event) => {
      if (event.key === 'Escape' && dropdownRef.current?.contains(event.target)) {
        closeMenu();
      }
    };

    document.addEventListener('pointerdown', closeOnOutsideClick);
    document.addEventListener('keydown', closeOnEscape);

    return () => {
      document.removeEventListener('pointerdown', closeOnOutsideClick);
      document.removeEventListener('keydown', closeOnEscape);
    };
  }, [closeMenu, open]);

  return (
    <div ref={dropdownRef} className="relative ml-2">
      <button
        ref={buttonRef}
        id={`${dropdownId}-trigger`}
        type="button"
        className="group relative flex items-center gap-2 rounded-xl border px-3 py-2 text-sm font-semibold shadow-sm backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary/60"
        style={{
          backgroundColor: 'color-mix(in srgb, var(--surface) 88%, var(--primary) 12%)',
          borderColor: open ? 'var(--primary)' : 'var(--border-light)',
          color: 'var(--text)',
        }}
        onClick={toggleOpen}
        onKeyDown={handleButtonKeyDown}
        aria-label={t('selectLanguage')}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls={menuId}
      >
        <span
          className="absolute inset-x-3 -top-px h-px rounded-full opacity-0 transition-opacity duration-200 group-hover:opacity-100"
          style={{ background: 'linear-gradient(90deg, transparent, var(--primary), transparent)' }}
          aria-hidden="true"
        />
        <CountryFlag countryCode={selected.country} svg style={flagStyle} aria-hidden="true" />
        <span className="tracking-wide">{selected.code.toUpperCase()}</span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: reducedMotion ? 0 : 0.2 }}
          className="flex"
          aria-hidden="true"
        >
          <ChevronDown className="h-4 w-4 opacity-70" />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={menuId}
            role="menu"
            aria-labelledby={`${dropdownId}-trigger`}
            initial={reducedMotion ? false : 'hidden'}
            animate={reducedMotion ? undefined : 'visible'}
            exit={reducedMotion ? { opacity: 0 } : 'exit'}
            variants={menuVariants}
            transition={reducedMotion ? { duration: 0 } : undefined}
            onKeyDown={handleMenuKeyDown}
            className="absolute right-0 z-50 mt-3 w-52 overflow-hidden rounded-2xl border p-2 shadow-2xl backdrop-blur-xl"
            style={{
              backgroundColor: 'color-mix(in srgb, var(--surface) 94%, var(--background) 6%)',
              borderColor: 'var(--border-light)',
              boxShadow: '0 18px 45px color-mix(in srgb, var(--background) 45%, transparent)',
            }}
          >
            <div
              className="absolute inset-x-6 top-0 h-px"
              style={{ background: 'linear-gradient(90deg, transparent, var(--primary), transparent)' }}
              aria-hidden="true"
            />
            <div className="mb-1 px-3 pb-1 pt-2 text-[10px] font-bold uppercase tracking-[0.2em]" style={{ color: 'var(--text-muted)' }}>
              {t('selectLanguage')}
            </div>
            <div className="space-y-1">
              {languages.map((language, index) => {
                const isSelected = language.code === currentLanguage;

                return (
                  <motion.button
                    key={language.code}
                    ref={(element) => { menuItemRefs.current[index] = element; }}
                    type="button"
                    role="menuitemradio"
                    aria-checked={isSelected}
                    className="group/item flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left transition-colors duration-200 hover:bg-primary/10 focus:outline-none focus:ring-2 focus:ring-primary/50"
                    style={{
                      backgroundColor: isSelected ? 'color-mix(in srgb, var(--primary) 12%, transparent)' : 'transparent',
                      color: isSelected ? 'var(--text)' : 'var(--text-secondary)',
                    }}
                    initial={reducedMotion ? false : 'hidden'}
                    animate={reducedMotion ? undefined : 'visible'}
                    variants={itemVariants}
                    onClick={() => handleLanguageChange(language.code)}
                  >
                    <CountryFlag countryCode={language.country} svg style={flagStyle} aria-hidden="true" />
                    <span className="flex-1 text-sm font-medium">{language.label}</span>
                    <Check
                      className={`h-4 w-4 transition-opacity duration-200 ${isSelected ? 'opacity-100' : 'opacity-0'}`}
                      style={{ color: 'var(--primary)' }}
                      aria-hidden="true"
                    />
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default React.memo(LanguageDropdown);
