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
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2.5 sm:px-6">
        <div className="flex items-center gap-2.5">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-500 text-slate-950 font-bold shadow-sm shadow-emerald-500/20">
            <Layers className="h-4 w-4" />
          </div>
          <div className="flex items-center gap-2">
            <h1 className="text-sm font-bold tracking-tight text-white">
              {t.appName} <span className="text-emerald-400">Advisor</span>
            </h1>
            <span className="rounded border border-emerald-500/30 bg-emerald-500/10 px-1.5 py-0.2 text-[9px] font-semibold text-emerald-400">
              {t.appBadge}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <span className="hidden text-xs text-slate-500 sm:inline">
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
