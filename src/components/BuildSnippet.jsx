import React from 'react';
import { Copy, Check, ExternalLink, Code2, Download } from 'lucide-react';

export default function BuildSnippet({
  selectedDeps = [],
  buildTool = 'maven',
  onBuildToolChange,
  javaVersion = '21',
  onJavaVersionChange,
  springBootVersion = '3.4.3',
  copied = false,
  onCopy,
  t
}) {
  const generateMaven = () => {
    if (selectedDeps.length === 0) return '<!-- No dependencies selected -->';

    const depBlocks = selectedDeps
      .map((d) => {
        let block = `    <dependency>\n      <groupId>${d.group}</groupId>\n      <artifactId>${d.artifact}</artifactId>`;
        if (d.version) block += `\n      <version>${d.version}</version>`;
        if (d.scope) block += `\n      <scope>${d.scope}</scope>`;
        block += `\n    </dependency>`;
        return block;
      })
      .join('\n\n');

    return `<dependencies>\n${depBlocks}\n</dependencies>`;
  };

  const generateGradle = () => {
    if (selectedDeps.length === 0) return '// No dependencies selected';

    const lines = selectedDeps
      .map((d) => {
        let config = 'implementation';
        if (d.scope === 'runtime') config = 'runtimeOnly';
        if (d.scope === 'test') config = 'testImplementation';
        if (d.scope === 'optional' || d.id === 'lombok') {
          return `    compileOnly '${d.group}:${d.artifact}'\n    annotationProcessor '${d.group}:${d.artifact}'`;
        }
        const versionStr = d.version ? `:${d.version}` : '';
        return `    ${config} '${d.group}:${d.artifact}${versionStr}'`;
      })
      .join('\n');

    return `dependencies {\n${lines}\n}`;
  };

  const snippetCode = buildTool === 'maven' ? generateMaven() : generateGradle();

  const initializrDeps = selectedDeps
    .map((d) => d.initializrId)
    .filter(Boolean)
    .join(',');

  const initializrUrl = `https://start.spring.io/#!type=${
    buildTool === 'maven' ? 'maven-project' : 'gradle-project'
  }&language=java&platformVersion=${springBootVersion}&packaging=jar&jvmVersion=${javaVersion}&dependencies=${initializrDeps}`;

  return (
    <div className="space-y-3">
      {/* Controls row */}
      <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
        <div className="inline-flex rounded-lg bg-slate-950 p-0.5 border border-slate-800">
          <button
            onClick={() => onBuildToolChange('maven')}
            className={`rounded px-2.5 py-1 text-xs font-medium transition ${
              buildTool === 'maven'
                ? 'bg-emerald-500 text-slate-950 font-semibold'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Maven
          </button>
          <button
            onClick={() => onBuildToolChange('gradle')}
            className={`rounded px-2.5 py-1 text-xs font-medium transition ${
              buildTool === 'gradle'
                ? 'bg-emerald-500 text-slate-950 font-semibold'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Gradle
          </button>
        </div>

        <div className="flex items-center gap-2 text-[11px] text-slate-400">
          <span>Java</span>
          <select
            value={javaVersion}
            onChange={(e) => onJavaVersionChange(e.target.value)}
            aria-label="Java version"
            className="rounded border border-slate-800 bg-slate-950 px-1.5 py-0.5 text-slate-200 outline-none"
          >
            <option value="21">21</option>
            <option value="17">17</option>
          </select>
          <span className="font-mono text-emerald-400">Boot {springBootVersion}</span>
        </div>
      </div>

      {/* Code Snippet Box */}
      <div className="relative overflow-hidden rounded-lg border border-slate-800 bg-slate-950 font-mono text-[11px]">
        <div className="flex items-center justify-between border-b border-slate-800 bg-slate-900/90 px-3 py-1.5">
          <div className="flex items-center gap-1.5 text-slate-400 text-xs">
            <Code2 className="h-3.5 w-3.5 text-emerald-400" />
            <span>{buildTool === 'maven' ? 'pom.xml' : 'build.gradle'}</span>
            <span className="text-[10px] text-slate-500">({selectedDeps.length})</span>
          </div>

          <button
            onClick={() => onCopy(snippetCode)}
            className="flex items-center gap-1 rounded border border-slate-700 bg-slate-800 px-2 py-0.5 text-[11px] font-medium text-slate-200 transition hover:border-emerald-500 hover:text-white"
          >
            {copied ? (
              <>
                <Check className="h-3 w-3 text-emerald-400" />
                <span className="text-emerald-400">{t.copiedBtn}</span>
              </>
            ) : (
              <>
                <Copy className="h-3 w-3" />
                <span>{t.copyBtn}</span>
              </>
            )}
          </button>
        </div>

        <pre className="max-h-56 overflow-x-auto p-3 text-slate-300 leading-tight scrollbar-thin">
          <code>{snippetCode}</code>
        </pre>
      </div>

      {/* Direct link button */}
      <a
        href={initializrUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex w-full items-center justify-center gap-2 rounded-lg bg-emerald-500 py-2 text-xs font-bold text-slate-950 shadow transition hover:bg-emerald-400 active:scale-[0.99]"
      >
        <Download className="h-3.5 w-3.5" />
        <span>{t.launchInitializr}</span>
        <ExternalLink className="h-3 w-3 opacity-70" />
      </a>
    </div>
  );
}
