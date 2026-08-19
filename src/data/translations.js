export const TRANSLATIONS = {
  'en-US': {
    appName: 'SpringStack',
    appBadge: 'Spring Boot 3.4',
    appTagline: 'AI & Intent-based Spring Boot dependency generator for Java developers',
    catalogModules: 'catalog modules',
    heroTitle: 'Describe your Java project. Get instant Spring dependencies.',
    heroSubtitle: 'Static developer workspace that analyzes your natural language architecture goals, maps required Spring Boot 3.x modules with clear rationale, and exports ready-to-use build configs.',
    
    // Section 1
    sec1Title: 'Architecture & Requirements',
    sec1Badge: 'NLP Matcher',
    sec1Subtitle: 'Write your requirements in plain English or select a template',
    promptPlaceholder: "Describe your Java backend (e.g. 'I want a secure REST API with PostgreSQL, JWT authentication, and Kafka event streaming')...",
    modulesSuggested: 'Spring modules suggested',
    promptTip: 'Tip: Mention DBs (Postgres, Mongo), protocols (REST, WebSockets), or auth (JWT).',
    quickStarters: 'Quick Starters:',

    // Section 2
    sec2Title: 'Recommended Spring Dependencies',
    sec2Subtitle: 'Click to add or remove dependencies from your build setup',
    selectedBadge: 'selected',
    resetMatches: 'Reset to AI Matches',
    selectCategory: 'Select Category',
    clearAll: 'Clear All',
    filterLabel: 'Filter:',
    whyNeeded: 'Why needed:',
    matchedTag: 'Matched',

    // Section 3
    sec3Title: 'Generated Build Configuration',
    sec3Subtitle: 'Instant copy-paste dependency block and Spring Initializr bootstrap link',
    buildToolLabel: 'Build Tool:',
    mavenBtn: 'Maven (pom.xml)',
    gradleBtn: 'Gradle (build.gradle)',
    javaLabel: 'Java:',
    copyBtn: 'Copy Code',
    copiedBtn: 'Copied!',
    readyBootstrap: 'Ready to bootstrap project instantly?',
    launchInitializr: 'Launch on Spring Initializr',

    // Footer
    footerText: 'SpringStack Advisor • Static React UX Architecture • Client-side Rule Engine • Spring Boot 3.4.3'
  },
  'pt-BR': {
    appName: 'SpringStack',
    appBadge: 'Spring Boot 3.4',
    appTagline: 'Gerador de dependências Spring Boot baseado em intenção e IA para desenvolvedores Java',
    catalogModules: 'módulos no catálogo',
    heroTitle: 'Descreva seu projeto Java. Receba dependências Spring instantaneamente.',
    heroSubtitle: 'Espaço de trabalho estático que analisa seus objetivos de arquitetura em linguagem natural, mapeia módulos Spring Boot 3.x com justificativa clara e exporta configurações prontas.',
    
    // Section 1
    sec1Title: 'Arquitetura e Requisitos',
    sec1Badge: 'Motor NLP',
    sec1Subtitle: 'Escreva seus requisitos ou selecione um modelo pronto',
    promptPlaceholder: "Descreva seu backend Java (ex: 'Quero uma API REST segura com PostgreSQL, autenticação JWT e mensageria Kafka')...",
    modulesSuggested: 'módulos Spring sugeridos',
    promptTip: 'Dica: Mencione bancos (Postgres, Mongo), protocolos (REST, WebSockets) ou autenticação (JWT).',
    quickStarters: 'Modelos Rápidos:',

    // Section 2
    sec2Title: 'Dependências Spring Recomendadas',
    sec2Subtitle: 'Clique para adicionar ou remover dependências do seu build',
    selectedBadge: 'selecionados',
    resetMatches: 'Restaurar Sugestões IA',
    selectCategory: 'Selecionar Categoria',
    clearAll: 'Limpar Tudo',
    filterLabel: 'Filtrar:',
    whyNeeded: 'Por que usar:',
    matchedTag: 'Sugerido',

    // Section 3
    sec3Title: 'Configuração de Build Gerada',
    sec3Subtitle: 'Bloco de dependências pronto para copiar e link para o Spring Initializr',
    buildToolLabel: 'Ferramenta de Build:',
    mavenBtn: 'Maven (pom.xml)',
    gradleBtn: 'Gradle (build.gradle)',
    javaLabel: 'Java:',
    copyBtn: 'Copiar Código',
    copiedBtn: 'Copiado!',
    readyBootstrap: 'Pronto para iniciar o projeto?',
    launchInitializr: 'Abrir no Spring Initializr',

    // Footer
    footerText: 'SpringStack Advisor • Arquitetura React Estática de Alta UX • Motor de Regras no Cliente • Spring Boot 3.4.3'
  }
};

export const LANGUAGES = [
  { code: 'en-US', label: 'EN-US', flag: '🇺🇸', name: 'English' },
  { code: 'pt-BR', label: 'PT-BR', flag: '🇧🇷', name: 'Português' }
];
