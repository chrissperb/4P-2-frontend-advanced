import React from 'react';
import { LANGUAGES } from '../data/translations';

/**
 * LanguageSelector Component
 * Interactive toggle using flag icons and country codes
 */
export default function LanguageSelector({ currentLang, onLanguageChange }) {
  return (
    <div className="inline-flex items-center rounded-xl border border-slate-800 bg-slate-900/90 p-1 shadow-inner backdrop-blur-md">
      {LANGUAGES.map((lang) => {
        const active = currentLang === lang.code;
        return (
          <button
            key={lang.code}
            onClick={() => onLanguageChange(lang.code)}
            type="button"
            title={`Switch to ${lang.name}`}
            className={`flex items-center gap-1.5 rounded-lg px-2.5 py-1 text-xs sm:text-sm font-semibold transition-all duration-150 ${
              active
                ? 'bg-emerald-500 text-slate-950 shadow-sm shadow-emerald-500/20'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
            }`}
          >
            <span className="text-base leading-none" role="img" aria-label={lang.name}>
              {lang.flag}
            </span>
            <span className="tracking-wide">{lang.label}</span>
          </button>
        );
      })}
    </div>
  );
}
