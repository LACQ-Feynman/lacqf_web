'use client';

import React, { useState, useCallback, useEffect, useId, useRef } from 'react';
import CountryFlag from 'react-country-flag';
import { useLanguage } from '@/contexts/LanguageContext';

const languages = [
  { code: 'pt-BR', label: 'Português', country: 'BR' },
  { code: 'en', label: 'English', country: 'US' },
  { code: 'es', label: 'Español', country: 'ES' },
];

const LanguageDropdown = () => {
  const [open, setOpen] = useState(false);
  const { currentLanguage, changeLanguage } = useLanguage();
  const selected = languages.find(lang => lang.code === currentLanguage) || languages[0];
  const menuId = useId();
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);

  const toggleOpen = useCallback(() => {
    setOpen((value) => !value);
  }, []);

  const handleLanguageChange = useCallback((langCode) => {
    changeLanguage(langCode);
    setOpen(false);
    buttonRef.current?.focus();
  }, [changeLanguage]);

  useEffect(() => {
    if (!open) return undefined;

    const closeOnOutsideClick = (event) => {
      if (!dropdownRef.current?.contains(event.target)) {
        setOpen(false);
      }
    };

    const closeOnEscape = (event) => {
      if (event.key === 'Escape') {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };

    document.addEventListener('pointerdown', closeOnOutsideClick);
    document.addEventListener('keydown', closeOnEscape);

    return () => {
      document.removeEventListener('pointerdown', closeOnOutsideClick);
      document.removeEventListener('keydown', closeOnEscape);
    };
  }, [open]);

  return (
    <div ref={dropdownRef} className="relative ml-2">
      <button
        ref={buttonRef}
        type="button"
        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-surface dark:bg-gray-800 border border-border-light dark:border-gray-700 text-black dark:text-white lang-dropdown-btn"
        onClick={toggleOpen}
        aria-label="Selecionar idioma"
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls={menuId}
      >
        <CountryFlag countryCode={selected.country} svg style={{ width: '1.5em', height: '1.5em', borderRadius: '50%' }} />
        <span className="font-medium text-sm text-black dark:text-white lang-dropdown-btn">{selected.code.toUpperCase()}</span>
        <svg className="w-4 h-4 text-black dark:text-white lang-dropdown-btn" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
      </button>
      {open && (
        <div
          id={menuId}
          role="menu"
          className="absolute right-0 mt-2 w-36 bg-surface dark:bg-gray-900 rounded-lg shadow-lg border border-border-light dark:border-gray-800 z-50"
        >
          {languages.map((lang) => (
            <button
              key={lang.code}
              type="button"
              role="menuitem"
              className="flex items-center gap-2 w-full px-4 py-2 transition text-left text-black dark:text-gray-200 lang-dropdown-item"
              onClick={() => handleLanguageChange(lang.code)}
              aria-current={lang.code === currentLanguage ? 'true' : undefined}
            >
              <CountryFlag countryCode={lang.country} svg style={{ width: '1.3em', height: '1.3em', borderRadius: '50%' }} />
              <span className="text-sm text-black dark:text-gray-200 lang-dropdown-item">{lang.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default React.memo(LanguageDropdown); 