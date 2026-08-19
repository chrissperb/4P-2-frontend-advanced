# SpringStack Advisor 🍃⚡

> **Intelligent, intent-based Spring Boot dependency advisor and build generator for Java developers.**

SpringStack Advisor is a static React application designed to help Java developers discover, select, and configure the right Spring Boot dependencies for their applications. By entering natural language architecture requirements (or selecting common presets), the application analyzes requirements in real time, recommends matching Spring Boot 3.4 modules with clear architectural rationales, and generates ready-to-use Maven `pom.xml` or Gradle `build.gradle` dependency blocks.

🌐 **Live Demo:** [https://chrissperb.github.io/4P-2-frontend-advanced/](https://chrissperb.github.io/4P-2-frontend-advanced/)

---

## 🌟 Key Features

- **Natural Language Intent Matcher:** Client-side rule engine analyzes architecture prompts in real time and highlights relevant Spring Boot starters.
- **Curated Spring Boot 3.4 Catalog:** Categorized modules across Web, Database, Security, Messaging, Observability, AI, and Developer Tools.
- **Architectural Rationale:** Clear explanations detailing *why* each dependency is recommended for your specific scenario.
- **Dual Build Tool Generation:** Instant toggling and formatting for Maven (`pom.xml`) and Gradle (`build.gradle`).
- **Spring Initializr Integration:** Generates a pre-configured `start.spring.io` launch URL to bootstrap your project with one click.
- **Multilingual Support (i18n):** Full bilingual interface with flag selectors for **English (EN-US 🇺🇸)** and **Português (PT-BR 🇧🇷)**.
- **Compact Developer UX:** Ergonomic 2-column dashboard layout with dark mode aesthetic, high contrast, and zero layout shift.

---

## 🏗️ Architecture & React Concepts

This project demonstrates core React architectural patterns and best practices:

### 1. Component Hierarchy & Data Exchange (Props)

```
App.jsx (State Root)
│
├── Header.jsx (Props: totalModulesCount, currentLang, onLanguageChange, t)
│   └── LanguageSelector.jsx (Props: currentLang, onLanguageChange)
│
├── SectionCard.jsx [Architecture & Requirements] (Uses props.children)
│   └── PromptInput.jsx (Props: prompt, onPromptChange, onPresetSelect, onClear, presets, matchedCount, lang, t)
│
├── SectionCard.jsx [Dependencies Catalog] (Uses props.children)
│   └── DependencyCard.jsx (Props: dep, isSelected, onToggle, isRecommended, lang, t)
│
└── SectionCard.jsx [Build Configuration] (Uses props.children)
    └── BuildSnippet.jsx (Props: selectedDeps, buildTool, onBuildToolChange, javaVersion, onJavaVersionChange, springBootVersion, copied, onCopy, t)
```

### 2. Composition with `props.children`

The `SectionCard` component encapsulates layout, title bars, status badges, contextual action buttons, and glassmorphism styling, dynamically projecting nested child components via `props.children`:

```jsx
<SectionCard
  title={t.sec1Title}
  icon={SlidersHorizontal}
  badge={t.sec1Badge}
  badgeColor="emerald"
>
  <PromptInput ... />
</SectionCard>
```

### 3. State Management with `useState`

All interactive state is centralized and managed deterministically in `App.jsx`:

| State Variable | Type | Description |
| :--- | :--- | :--- |
| `lang` | `string` | Active language code (`'en-US'` or `'pt-BR'`) |
| `prompt` | `string` | User architecture requirements text input |
| `selectedDepIds` | `string[]` | Array of currently selected dependency identifiers |
| `buildTool` | `string` | Selected build tool format (`'maven'` or `'gradle'`) |
| `activeCategory` | `string` | Active catalog category filter tab |
| `javaVersion` | `string` | Target Java LTS version (`'21'` or `'17'`) |
| `copied` | `boolean` | Clipboard feedback state for the copy button |
| `autoMatchedIds` | `string[]` | Dependencies identified by the NLP matcher |

---

## 📁 Project Structure

```
├── .github/
│   └── workflows/
│       └── deploy.yml            # GitHub Actions CI/CD to GitHub Pages
├── .agents/
│   └── skills/
│       └── caveman/
│           └── SKILL.md
├── src/
│   ├── components/
│   │   ├── BuildSnippet.jsx      # Maven/Gradle generator & Initializr export
│   │   ├── DependencyCard.jsx    # Module card with rationale and toggle state
│   │   ├── Header.jsx            # Top navigation bar
│   │   ├── LanguageSelector.jsx  # Interactive language switch with flags
│   │   ├── PromptInput.jsx       # Search textarea & quick starter presets
│   │   └── SectionCard.jsx       # Container component using props.children
│   ├── data/
│   │   ├── springDependencies.js # Spring catalog & client-side NLP rule engine
│   │   └── translations.js       # English & Portuguese i18n dictionaries
│   ├── App.jsx                   # Main orchestrator component
│   ├── index.css                 # Global styling & Tailwind CSS directives
│   └── main.jsx                  # Application entry point
├── public/
│   └── favicon.svg               # SVG Browser Favicon
├── index.html                    # Root HTML template
├── package.json                  # Dependencies & npm scripts
├── vite.config.js                # Vite build configuration with GitHub base path
└── README.md                     # Documentation
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js**: v18.0.0 or later (v22+ recommended)
- **npm**: v9.0.0 or later

### Installation

1. Clone the repository or navigate to the project directory:
   ```bash
   cd 4P-2-frontend-advanced
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Running Locally

Start the Vite local development server:
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173`.

### Production Build & Deployment

Compile and bundle the optimized static application:
```bash
npm run build
```
The output assets will be generated in the `dist/` directory.

To deploy manually via `gh-pages`:
```bash
npm run deploy
```

Automated deployments are also configured via GitHub Actions in `.github/workflows/deploy.yml` upon push to repository branches.

---

## 🛠️ Tech Stack

- **Framework:** [React 18](https://react.dev/)
- **Build Tool:** [Vite 6](https://vite.dev/)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Deployment Target:** GitHub Pages (`gh-pages` / GitHub Actions).

---

## 📄 License

This project is licensed under the MIT License.
