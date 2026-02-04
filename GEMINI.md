# Project Context: LACQ Feynman Frontend

## Project Overview
This is the frontend repository for **LACQ Feynman** (Liga Nacional de Computação Quântica). It is a modern web application built to promote quantum computing in Brazil. The project utilizes **Next.js 16 (App Router)** and **React 19**, styled with **Tailwind CSS v4**.

## Technology Stack
- **Framework:** Next.js 16 (App Router)
- **Library:** React 19
- **Styling:** Tailwind CSS v4, PostCSS
- **Animation:** GSAP, Framer Motion, Lottie
- **Icons:** Lucide React, Tabler Icons, React Country Flag
- **Forms:** React Hook Form, Yup
- **Analytics:** Vercel Analytics, Vercel Speed Insights

## Building and Running

### Prerequisites
- Node.js (ensure compatibility with Next.js 16)
- npm

### Commands
- **Install Dependencies:** `npm ci`
- **Development Server:** `npm run dev` (starts on localhost:3000)
- **Build for Production:** `npm run build`
- **Start Production Server:** `next start`
- **Linting:** `npm run lint`

## Project Structure

- **`src/app/`**: Contains the App Router setup, including `layout.js` (global providers and metadata), `page.js` (home page), and global styles (`globals.css`).
- **`src/ui/components/`**: Reusable UI components and page sections (e.g., `Hero.jsx`, `Navigation.jsx`, `ThemeToggle.jsx`).
- **`src/contexts/`**: React contexts for global state management:
    - `LanguageContext.jsx`: Handles internalization state.
    - `ThemeContext.jsx`: Handles light/dark mode themes.
- **`src/locales/`**: JSON files for translation strings (`en.json`, `es.json`, `pt-BR.json`).
- **`src/lib/`**: Utility libraries (e.g., `i18n.js` for internalization logic).
- **`public/`**: Static assets like images and videos.
- **`.github/workflows/`**: CI/CD configuration for GitHub Pages deployment (`gh-pages.yml`).

## Design & Styling
- **Theme:** The application uses a variable-based theming system (defined in `globals.css` and `tailwind.config.js`) supporting light and dark modes.
- **Fonts:**
    - **Title:** Orbitron (variable)
    - **Body:** Geist Sans (variable)
- **Tailwind Config:** Custom extensions for colors (hsl based), border radius, and animations (`scroll-slow`, `quantum-pulse`).

## Key Components & Providers
- **`RootLayout` (`src/app/layout.js`):** Wraps the application with `LanguageProvider` and `ThemeProvider`. Includes analytics and global widgets like `FloatingWhatsapp` and `SocialStack`.
- **Database:** A `prisma` directory exists with a basic schema, though the project is primarily described as a frontend application.

## Deployment
The project is configured for automated deployment to **GitHub Pages** via GitHub Actions.
