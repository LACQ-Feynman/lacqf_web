import React, { useState } from 'react';
import CountryFlag from 'react-country-flag';

const languages = [
  { code: 'pt-BR', label: 'Português', country: 'BR' },
  { code: 'en', label: 'English', country: 'US' },
  { code: 'es', label: 'Español', country: 'ES' },
];

export default function LanguageDropdown() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(languages[0]);

  return (
    <div className="relative ml-2">
      <button
        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/10 dark:bg-gray-800 hover:bg-white/20 dark:hover:bg-gray-700 transition border border-white/20 dark:border-gray-700"
        onClick={() => setOpen((v) => !v)}
        aria-label="Selecionar idioma"
      >
        <CountryFlag countryCode={selected.country} svg style={{ width: '1.5em', height: '1.5em', borderRadius: '50%' }} />
        <span className="font-medium text-sm text-white">{selected.code.toUpperCase()}</span>
        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
      </button>
      {open && (
        <div className="absolute right-0 mt-2 w-36 bg-white dark:bg-gray-900 rounded-lg shadow-lg border border-gray-200 dark:border-gray-800 z-50">
          {languages.map((lang) => (
            <button
              key={lang.code}
              className="flex items-center gap-2 w-full px-4 py-2 hover:bg-indigo-100 dark:hover:bg-indigo-900 transition text-left"
              onClick={() => { setSelected(lang); setOpen(false); }}
            >
              <CountryFlag countryCode={lang.country} svg style={{ width: '1.3em', height: '1.3em', borderRadius: '50%' }} />
              <span className="text-sm">{lang.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
} 