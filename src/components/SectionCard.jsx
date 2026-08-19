import React from 'react';

export default function SectionCard({
  title,
  icon: Icon,
  badge,
  badgeColor = 'emerald',
  action,
  children,
  className = ''
}) {
  const badgeColors = {
    emerald: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    indigo: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20',
    cyan: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
  };

  return (
    <section className={`rounded-xl border border-slate-800 bg-slate-900/50 p-4 shadow-md backdrop-blur-sm ${className}`}>
      {(title || Icon || badge || action) && (
        <div className="mb-3 flex items-center justify-between gap-2 border-b border-slate-800/80 pb-2.5">
          <div className="flex items-center gap-2">
            {Icon && <Icon className="h-4 w-4 text-emerald-400 shrink-0" />}
            <h2 className="text-sm font-semibold text-slate-100">{title}</h2>
            {badge && (
              <span className={`rounded-full border px-2 py-0.2 text-[10px] font-medium ${badgeColors[badgeColor] || badgeColors.emerald}`}>
                {badge}
              </span>
            )}
          </div>
          {action && <div className="flex items-center gap-1.5">{action}</div>}
        </div>
      )}
      <div>{children}</div>
    </section>
  );
}
