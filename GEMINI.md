# LACQ Feynman - Project Context

This document provides essential information for Gemini CLI to understand the project structure, technology stack, and development conventions of the LACQ Feynman official website.

## Project Overview
The **LACQ Feynman** website is the official platform for the National Quantum Computing League (Liga Nacional de Computação Quântica). It is a high-performance, immersive landing page designed to promote quantum computing in Brazil.

### Tech Stack
- **Framework:** Next.js 16 (App Router)
- **UI Library:** React 19
- **Styling:** Tailwind CSS v4 (configured primarily via CSS variables in `globals.css`)
- **Animations:** GSAP, Framer Motion, and Lottie
- **Icons:** Lucide React and Tabler Icons
- **Database/ORM:** Prisma (PostgreSQL)
- **Internationalization:** Custom Context-based i18n system
- **Theming:** Custom Context-based Dark/Light mode
- **Deployment:** Vercel

## Key Architecture & Patterns

### 1. Internationalization (i18n)
- **Context:** `src/contexts/LanguageContext.jsx` manages the current locale (`pt-BR`, `en`, `es`).
- **Translations:** JSON files in `src/locales/` are loaded dynamically via `src/lib/i18n.js`.
- **Usage:** Use the `t(key)` function from the `useLanguage()` hook.

### 2. Theming
- **Context:** `src/contexts/ThemeContext.jsx` manages the `isDark` state.
- **Implementation:** Persisted in `localStorage`. Applies a `.dark` class to the `<html>` element.
- **Styling:** Driven by CSS variables in `src/app/globals.css`. Tailwind v4 utilities are mapped to these variables.

### 3. Navigation & Sections
- **Single Page Application (Landing Page):** The main content is managed in `src/app/page.js`.
- **Section Management:** Sections are defined in a `sections` array in `page.js` and passed to the `Navigation` component for scroll synchronization.
- **Components:** Section-specific components are located in `src/ui/components/`.

### 4. Styling Conventions (Tailwind v4)
- **CSS Variables:** Favor using the predefined CSS variables (e.g., `var(--primary)`, `var(--background)`) for consistency.
- **Utility Classes:** Tailwind v4 imports are in `globals.css`. Custom utilities like `bg-gradient-quantum-primary` are defined in the `@layer utilities` block.
- **Transitions:** A custom circular view transition is implemented for theme switching in `globals.css`.

## Development Workflows

### Building and Running
- **Development:** `npm run dev` (Starts Next.js dev server)
- **Production Build:** `npm run build`
- **Start Production:** `npm run start`
- **Linting:** `npm run lint`

### Folder Structure
- `src/app/`: Next.js App Router (layouts, global CSS, root page).
- `src/ui/components/`: React components and landing page sections.
- `src/contexts/`: Shared state (Theme, Language).
- `src/locales/`: Translation dictionaries.
- `src/lib/`: Utility libraries (i18n loader, etc.).
- `public/`: Static assets (Images, Videos, Lottie).
- `prisma/`: Database schema and client configuration.

## Coding Standards
- **Client Components:** Use `'use client'` at the top of files that utilize hooks (Context, State, Effect).
- **Accessibility:** Ensure images have `alt` tags and interactive elements are keyboard-accessible.
- **Performance:** Use `transform`-based animations (via GSAP/Framer Motion) to avoid layout shifts. Use `next/image` for optimized assets.
- **Hydration:** Be mindful of `localStorage` access in `useLayoutEffect` or initial state to avoid hydration mismatches (refer to existing Context implementations for patterns).
