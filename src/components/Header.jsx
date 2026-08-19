import React from 'react';
import { Layers } from 'lucide-react';
import LanguageSelector from './LanguageSelector';

export default function Header({
  totalModulesCount = 0,
  currentLang,
  onLanguageChange,
  t
}) {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500 text-slate-950 font-bold shadow-sm shadow-emerald-500/20">
            <Layers className="h-5 w-5" />
          </div>
          <div className="flex items-center gap-2">
            <h1 className="text-base sm:text-lg font-bold tracking-tight text-white">
              {t.appName} <span className="text-emerald-400">Advisor</span>
            </h1>
            <span className="rounded border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 text-[11px] font-semibold text-emerald-400">
              {t.appBadge}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <span className="hidden text-sm text-slate-400 sm:inline font-medium">
            {totalModulesCount} {t.catalogModules}
          </span>
          <LanguageSelector
            currentLang={currentLang}
            onLanguageChange={onLanguageChange}
          />
        </div>
      </div>
    </header>
  );
}
