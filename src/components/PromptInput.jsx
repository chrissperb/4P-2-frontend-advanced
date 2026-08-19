import React from 'react';
import { Sparkles, Trash2, Terminal } from 'lucide-react';

export default function PromptInput({
  prompt,
  onPromptChange,
  onPresetSelect,
  onClear,
  presets = [],
  matchedCount = 0,
  lang = 'en-US',
  t
}) {
  return (
    <div className="space-y-3">
      <div className="relative">
        <Terminal className="pointer-events-none absolute left-3 top-3.5 h-4.5 w-4.5 text-emerald-400/80" />
        <textarea
          rows={2}
          value={prompt}
          onChange={(e) => onPromptChange(e.target.value)}
          placeholder={t.promptPlaceholder}
          className="w-full resize-none rounded-lg border border-slate-700/80 bg-slate-950/70 p-3 pl-10 pr-10 text-sm sm:text-base leading-relaxed text-slate-100 placeholder-slate-500 shadow-inner outline-none transition focus:border-emerald-500/80 focus:ring-1 focus:ring-emerald-500/20"
        />
        {prompt && (
          <button
            onClick={onClear}
            type="button"
            title="Clear"
            className="absolute right-2.5 top-3 rounded p-1 text-slate-400 hover:bg-slate-800 hover:text-rose-400"
          >
            <Trash2 className="h-4 w-4" />
          </button>
        )}
      </div>

      {/* Preset Chips + Match Indicator in one compact row */}
      <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm">
        <div className="mr-1 flex items-center gap-1.5 text-emerald-400 font-semibold shrink-0">
          <Sparkles className="h-3.5 w-3.5" />
          <span>{matchedCount} {t.modulesSuggested}</span>
        </div>
        <span className="text-slate-600">|</span>
        {presets.map((preset) => {
          const title = typeof preset.title === 'object' ? preset.title[lang] || preset.title['en-US'] : preset.title;
          const promptText = typeof preset.prompt === 'object' ? preset.prompt[lang] || preset.prompt['en-US'] : preset.prompt;

          return (
            <button
              key={preset.id}
              onClick={() => onPresetSelect(promptText)}
              className="rounded-md border border-slate-800 bg-slate-950/60 px-2.5 py-1 text-xs text-slate-300 font-medium transition hover:border-emerald-500/50 hover:bg-slate-800 hover:text-emerald-300"
            >
              {title}
            </button>
          );
        })}
      </div>
    </div>
  );
}
