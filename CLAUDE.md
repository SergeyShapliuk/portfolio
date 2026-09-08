# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

A personal portfolio single-page site built with Create React App (react-scripts 5) and TypeScript, deployed to GitHub Pages at `https://SergeyShapliuk.github.io/portfolio/`.

## Commands

Package manager is Yarn (`.yarnrc.yml` sets `nodeLinker: node-modules`); `yarn.lock` is present, so prefer `yarn` over `npm`.

- `yarn start` — run the dev server (CRA, localhost:3000)
- `yarn build` — production build into `build/`
- `yarn test` — run tests via `react-scripts test` (Jest + React Testing Library) in watch mode; pass `--watchAll=false` for a single non-interactive run, or a file path/pattern to target one test (e.g. `yarn test src/App.test.tsx --watchAll=false`)
- `yarn deploy` — runs `predeploy` (build) then publishes `build/` to GitHub Pages via `gh-pages`

There is no separate lint script; ESLint runs through CRA's build/test pipeline using the `react-app` / `react-app/jest` config in `package.json`.

## Architecture

**Single-page layout composed in `App.tsx`.** The app is not really route-driven for its main scroll experience: `App.tsx` renders one long page by stacking top-level section components directly — `Header`, `Main`, `Skills`, `HeaderSkills`, `MyWorksList`, `Contacts`, `Footer` — wrapped in `react-awesome-reveal`'s `Fade cascade`. `react-router-dom` (`nav/Routers.tsx`, `nav/RoutersSkills.tsx`) exists alongside this for anchor-style nav (`/home`, `/about`, `/my_works`, `/contacts`) but the routed elements are the same section components; treat routing as secondary navigation sugar over the always-rendered sections, not as separate pages with separate data.

**Feature-folder-per-section, not layer-per-type.** Each top-level section lives in its own folder at `src/` root (`header/`, `main/`, `skills/`, `myWorks/`, `contacts/`, `footer/`, `nav/`), and each folder colocates its component(s), its own `*.module.scss`, and section-specific subcomponents (e.g. `myWorks/myWork/card/` holds the work-card's `Image`, `CardTitle`, `ContentPlaceholder`, and `animations.ts`). When adding to a section, put new files inside that section's folder rather than in a shared layer.

**Shared/reusable pieces live under `src/common/`:**
- `common/feature/` — reusable UI widgets used across sections (`navBar`, `popup`, `button`, `roller text`, `type writer`) — note some subfolder names contain spaces.
- `common/utils/hooks/` — shared hooks (`useDimesions`, `useInvertedBorderRadius`, `useScrollConstraints`, `useWheelScroll`), mostly supporting the Framer Motion sidebar/scroll interactions.
- `common/styles/sass/` — global Sass variables (`variables.scss`) and mixins (`mixins.scss`) imported by module stylesheets; `common/styles/Container.module.scss` is a shared layout wrapper.

**Styling** is CSS Modules with Sass (`ComponentName.module.scss` imported as `s` and referenced via `s.className`), plus `App.scss`/`index.css` for globals. Colors/fonts are centralized in `common/styles/sass/variables.scss` ($primaryColor, $bgColor, font families) — reuse these variables instead of hardcoding values in new component styles.

**Animation stack:** `framer-motion` drives most interactive motion (the sidebar nav `Header.tsx`/`Nav.tsx`, scroll-linked effects via `useScroll`), `react-awesome-reveal` drives scroll-in reveal of whole sections, and `react-spring`/`popmotion`/`@popmotion/popcorn` back specific custom hooks (e.g. drag/scroll constraints). When adding motion to a new component, check whether an existing hook in `common/utils/hooks/` already does what you need before writing a new one.

**Assets** are centralized: all images live in `src/assets/image/` and are required and re-exported as a single `Images` object from `src/assets/Images.ts` (CommonJS `require`, not ES `import`). Import images from `Images` rather than requiring image files directly in components. The CV PDF lives in `src/assets/cv/`.

**`myWorks/` is the project-showcase section** — `MyWorks.tsx` (and the parallel `MyWorksVersion.tsx`/`MyWork.moduleVersion.scss`, an alternate/experimental layout kept side-by-side with the main one) lists work entries rendered by `myWork/MyWork.tsx`, which composes the `myWork/card/` subcomponents. Each showcased project's banner/icon assets come from `Images`.

## Git commits

Do not add any AI/Claude attribution to commit messages or PR descriptions — no `Co-Authored-By: Claude...` trailer, no `Claude-Session:` link, no "Generated with Claude Code" line. Commits should read as authored solely by the repository owner.
