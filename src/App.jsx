import React, { useState, useEffect, useMemo } from 'react';
import Header from './components/Header';
import SectionCard from './components/SectionCard';
import PromptInput from './components/PromptInput';
import DependencyCard from './components/DependencyCard';
import BuildSnippet from './components/BuildSnippet';
import {
  SPRING_DEPENDENCIES,
  PRESETS,
  CATEGORIES,
  matchDependencies
} from './data/springDependencies';
import { TRANSLATIONS } from './data/translations';
import {
  SlidersHorizontal,
  PackageCheck,
  CodeXml,
  RotateCcw
} from 'lucide-react';

export default function App() {
  // State variables managed with useState
  const [lang, setLang] = useState('en-US');
  const [prompt, setPrompt] = useState(
    'I want to build a secure REST API with PostgreSQL, Hibernate JPA, DTO validation, and Swagger UI documentation'
  );
  const [selectedDepIds, setSelectedDepIds] = useState([]);
  const [buildTool, setBuildTool] = useState('maven');
  const [activeCategory, setActiveCategory] = useState('all');
  const [javaVersion, setJavaVersion] = useState('21');
  const [copied, setCopied] = useState(false);
  const [autoMatchedIds, setAutoMatchedIds] = useState([]);

  // Active translation dictionary
  const t = TRANSLATIONS[lang] || TRANSLATIONS['en-US'];

  // Auto-match dependencies whenever prompt changes
  useEffect(() => {
    const matched = matchDependencies(prompt);
    setAutoMatchedIds(matched);
    setSelectedDepIds(matched);
  }, [prompt]);

  // Language switch handler
  const handleLanguageChange = (newLang) => {
    setLang(newLang);
    if (
      prompt ===
        'I want to build a secure REST API with PostgreSQL, Hibernate JPA, DTO validation, and Swagger UI documentation' ||
      prompt ===
        'Quero construir uma API REST segura com PostgreSQL, Hibernate JPA, validação de DTOs e documentação Swagger UI'
    ) {
      setPrompt(
        newLang === 'pt-BR'
          ? 'Quero construir uma API REST segura com PostgreSQL, Hibernate JPA, validação de DTOs e documentação Swagger UI'
          : 'I want to build a secure REST API with PostgreSQL, Hibernate JPA, DTO validation, and Swagger UI documentation'
      );
    }
  };

  // Toggle individual dependency
  const handleToggleDependency = (id) => {
    setSelectedDepIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handlePresetSelect = (presetPrompt) => setPrompt(presetPrompt);
  const handleClearPrompt = () => setPrompt('');

  const handleSelectAllCategory = () => {
    const categoryDepIds = filteredDependencies.map((d) => d.id);
    setSelectedDepIds((prev) => Array.from(new Set([...prev, ...categoryDepIds])));
  };

  const handleClearAll = () => setSelectedDepIds([]);
  const handleResetToMatches = () => setSelectedDepIds(autoMatchedIds);

  const handleCopy = (code) => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const filteredDependencies = useMemo(() => {
    if (activeCategory === 'all') return SPRING_DEPENDENCIES;
    return SPRING_DEPENDENCIES.filter((d) => d.category === activeCategory);
  }, [activeCategory]);

  const selectedDependencies = useMemo(() => {
    return SPRING_DEPENDENCIES.filter((d) => selectedDepIds.includes(d.id));
  }, [selectedDepIds]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 antialiased selection:bg-emerald-500 selection:text-slate-950">
      {/* 1. Header with props and Language selector */}
      <Header
        totalModulesCount={SPRING_DEPENDENCIES.length}
        currentLang={lang}
        onLanguageChange={handleLanguageChange}
        t={t}
      />

      <main className="mx-auto max-w-7xl px-3 py-4 sm:px-6">
        {/* Compact 2-column grid */}
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-12 items-start">
          
          {/* Left Column: Input + Catalog */}
          <div className="space-y-4 lg:col-span-7">
            {/* Input Card */}
            <SectionCard
              title={t.sec1Title}
              icon={SlidersHorizontal}
              badge={t.sec1Badge}
              badgeColor="emerald"
            >
              <PromptInput
                prompt={prompt}
                onPromptChange={setPrompt}
                onPresetSelect={handlePresetSelect}
                onClear={handleClearPrompt}
                presets={PRESETS}
                matchedCount={autoMatchedIds.length}
                lang={lang}
                t={t}
              />
            </SectionCard>

            {/* Dependencies Catalog Card */}
            <SectionCard
              title={t.sec2Title}
              icon={PackageCheck}
              badge={`${selectedDepIds.length} ${t.selectedBadge}`}
              badgeColor="indigo"
              action={
                <div className="flex items-center gap-1.5 text-xs">
                  <button
                    onClick={handleResetToMatches}
                    title={t.resetMatches}
                    className="flex items-center gap-1 rounded border border-slate-800 bg-slate-950/80 px-2 py-0.5 text-slate-300 hover:text-white"
                  >
                    <RotateCcw className="h-3 w-3 text-emerald-400" />
                    <span className="hidden sm:inline">{t.resetMatches}</span>
                  </button>
                  <button
                    onClick={handleSelectAllCategory}
                    className="rounded border border-slate-800 bg-slate-950/80 px-2 py-0.5 text-slate-300 hover:text-white"
                  >
                    {t.selectCategory}
                  </button>
                  <button
                    onClick={handleClearAll}
                    className="rounded border border-slate-800 bg-slate-950/80 px-2 py-0.5 text-rose-400 hover:bg-rose-950/30"
                  >
                    {t.clearAll}
                  </button>
                </div>
              }
            >
              {/* Filter Tabs */}
              <div className="mb-3 flex flex-wrap gap-1 border-b border-slate-800/80 pb-2.5">
                {CATEGORIES.map((cat) => {
                  const active = activeCategory === cat.id;
                  const label = cat.labels[lang] || cat.labels['en-US'];

                  return (
                    <button
                      key={cat.id}
                      onClick={() => setActiveCategory(cat.id)}
                      className={`rounded-md px-2 py-1 text-[11px] font-medium transition ${
                        active
                          ? 'bg-emerald-500 text-slate-950 font-bold'
                          : 'border border-slate-800/60 bg-slate-950/40 text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      {label}
                    </button>
                  );
                })}
              </div>

              {/* Grid of Dependencies */}
              <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                {filteredDependencies.map((dep) => {
                  const isSelected = selectedDepIds.includes(dep.id);
                  const isRecommended = autoMatchedIds.includes(dep.id);

                  return (
                    <DependencyCard
                      key={dep.id}
                      dep={dep}
                      isSelected={isSelected}
                      onToggle={() => handleToggleDependency(dep.id)}
                      isRecommended={isRecommended}
                      lang={lang}
                      t={t}
                    />
                  );
                })}
              </div>
            </SectionCard>
          </div>

          {/* Right Column: Sticky Build Config */}
          <div className="space-y-4 lg:col-span-5 lg:sticky lg:top-14">
            <SectionCard
              title={t.sec3Title}
              icon={CodeXml}
              badge={buildTool === 'maven' ? 'pom.xml' : 'build.gradle'}
              badgeColor="cyan"
            >
              <BuildSnippet
                selectedDeps={selectedDependencies}
                buildTool={buildTool}
                onBuildToolChange={setBuildTool}
                javaVersion={javaVersion}
                onJavaVersionChange={setJavaVersion}
                springBootVersion="3.4.3"
                copied={copied}
                onCopy={handleCopy}
                t={t}
              />
            </SectionCard>

            <p className="text-center text-[10px] text-slate-500">
              {t.footerText}
            </p>
          </div>

        </div>
      </main>
    </div>
  );
}
