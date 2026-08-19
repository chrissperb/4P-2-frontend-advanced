import React from 'react';
import { Check, Plus } from 'lucide-react';

export default function DependencyCard({
  dep,
  isSelected,
  onToggle,
  isRecommended = false,
  lang = 'en-US',
  t
}) {
  const categoryColors = {
    web: 'text-sky-400 border-sky-500/20 bg-sky-500/10',
    database: 'text-emerald-400 border-emerald-500/20 bg-emerald-500/10',
    security: 'text-amber-400 border-amber-500/20 bg-amber-500/10',
    messaging: 'text-purple-400 border-purple-500/20 bg-purple-500/10',
    ops: 'text-rose-400 border-rose-500/20 bg-rose-500/10',
    tools: 'text-teal-400 border-teal-500/20 bg-teal-500/10',
    ai: 'text-fuchsia-400 border-fuchsia-500/20 bg-fuchsia-500/10',
    core: 'text-indigo-400 border-indigo-500/20 bg-indigo-500/10'
  };

  const badgeStyle = categoryColors[dep.category] || 'text-slate-400 border-slate-700 bg-slate-800';
  const description = typeof dep.description === 'object' ? dep.description[lang] || dep.description['en-US'] : dep.description;
  const rationale = typeof dep.rationale === 'object' ? dep.rationale[lang] || dep.rationale['en-US'] : dep.rationale;

  return (
    <div
      onClick={onToggle}
      className={`group relative flex flex-col justify-between rounded-lg border p-3 transition-all cursor-pointer ${
        isSelected
          ? 'border-emerald-500/80 bg-emerald-950/20 shadow-sm'
          : 'border-slate-800/80 bg-slate-900/30 hover:border-slate-700 hover:bg-slate-800/40'
      }`}
    >
      <div>
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-1.5 min-w-0">
            <span className={`h-2 w-2 rounded-full shrink-0 ${isSelected ? 'bg-emerald-400' : 'bg-slate-600'}`} />
            <h3 className="font-semibold text-xs text-slate-100 truncate group-hover:text-emerald-300">
              {dep.name}
            </h3>
          </div>
          <div className="flex items-center gap-1 shrink-0">
            <span className={`rounded border px-1.5 py-0.2 text-[9px] uppercase font-medium ${badgeStyle}`}>
              {dep.category}
            </span>
            <button
              type="button"
              aria-label={isSelected ? `Remove ${dep.name}` : `Add ${dep.name}`}
              className={`flex h-5 w-5 items-center justify-center rounded border text-xs transition ${
                isSelected
                  ? 'border-emerald-500 bg-emerald-500 text-slate-950 font-bold'
                  : 'border-slate-700 bg-slate-800 text-slate-400 group-hover:border-slate-600'
              }`}
            >
              {isSelected ? <Check className="h-3 w-3 stroke-[3]" /> : <Plus className="h-3 w-3" />}
            </button>
          </div>
        </div>

        <p className="mt-1.5 text-[11px] leading-snug text-slate-300 line-clamp-2">
          {description}
        </p>

        {rationale && (
          <p className="mt-1.5 rounded bg-slate-950/40 px-2 py-1 text-[10px] text-slate-400 border border-slate-800/60 line-clamp-2">
            <span className="text-emerald-400 font-medium">{t.whyNeeded} </span>
            {rationale}
          </p>
        )}
      </div>

      <div className="mt-2 flex items-center justify-between border-t border-slate-800/50 pt-1.5 text-[10px] font-mono text-slate-500">
        <span className="truncate">{dep.artifact}</span>
        {isRecommended && (
          <span className="text-emerald-400 font-sans font-semibold text-[9px]">
            ✓ {t.matchedTag}
          </span>
        )}
      </div>
    </div>
  );
}
