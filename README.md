# LexAura P Drop

A premium single-page sneaker drop experience built with React + Vite.

The site showcases the **LexAura P** limited release with:
- a cinematic hero section and live countdown,
- a waitlist form interaction,
- feature highlight cards,
- desktop + mobile navigation,
- and light/dark mode switching.

## Live Demo

Add your deployed URL here after publishing on Vercel.

## Tech Stack

- **Framework:** React 19
- **Build Tool:** Vite 6
- **Language:** TypeScript
- **Styling:** Tailwind CSS (via CDN config in `index.html`)
- **Icons:** Google Material Symbols
- **Fonts:** Space Grotesk

## Project Structure

```text
.
├── App.tsx
├── index.tsx
├── index.html
├── components/
│   ├── Navbar.tsx
│   ├── MobileNav.tsx
│   ├── Hero.tsx
│   ├── Waitlist.tsx
│   ├── Features.tsx
│   ├── ComingSoon.tsx
│   └── Footer.tsx
├── vite.config.ts
├── package.json
└── tsconfig.json
```

## Getting Started

### Prerequisites

- Node.js 18+ (Node.js 20+ recommended)
- npm

### Install

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

By default, Vite is configured to run on:

- `http://localhost:3000`

### Production Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Available Scripts

- `npm run dev` — start Vite development server
- `npm run build` — create production build in `dist/`
- `npm run preview` — preview the production build locally

## Environment Variables

No environment variables are required for the current UI to run.

> Note: `vite.config.ts` currently maps `GEMINI_API_KEY` into `process.env`, but the app itself does not consume it.

## Deployment (Vercel)

This app is static-compatible and deploys cleanly on Vercel.

### Option A — Vercel Dashboard (Quickest)

1. Push this repository to GitHub.
2. In Vercel, click **Add New → Project**.
3. Import `alekistar/lexaura-sneaker-drop`.
4. Use these settings:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
5. Click **Deploy**.

### Option B — Vercel CLI

```bash
npm i -g vercel
vercel
vercel --prod
```

## Notes

- The waitlist form is currently demo-only (`alert` on submit) and has no backend persistence.
- Tailwind styles are defined inline in `index.html` through `tailwind.config` and custom CSS blocks.

## License

Private project. Add a license if you plan to open-source it.
