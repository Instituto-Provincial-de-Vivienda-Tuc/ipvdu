# AGENTS.md – IPV Tucumán Webapp

## Commands
```bash
npm run dev     # http://localhost:3000
npm run build   # Production build
npm run start   # Start prod server
npm run lint    # ESLint (next/core-web-vitals + next/typescript)
```
No test framework is configured.

## Stack & Setup
- **Next.js 14.2.16** (App Router), React 18, TypeScript (strict), Tailwind CSS 3, Framer Motion
- **shadcn/ui** — components in `@/components/ui/`, utility `cn()` at `@/lib/utils.ts`
- **Strapi backend** — env vars `NEXT_PUBLIC_BACKEND_URL` + `NEXT_PUBLIC_STRAPI_API_TOKEN` required; all data fetched client-side via React hooks in `api/`
- **Font**: Urbanist (`next/font/google`), set in `app/layout.tsx:8`
- **Path alias**: `@/*` maps to project root
- Dark mode via `darkMode: ["class"]`; CSS variables in `globals.css`

## Notable Dependencies
- `@vercel/speed-insights` — `<SpeedInsights />` in root layout
- `embla-carousel-react` + `embla-carousel-autoplay` — carousels
- `next-video` — video content
- Radix UI (`@radix-ui/react-accordion`, `navigation-menu`, `popover`, `slot`)
- `tailwind-merge` + `clsx` via `cn()` utility
- `lucide-react` + `react-icons` — icon sets
- `class-variance-authority` — component variants

## Key Directories
- `api/` — **React hooks** (client-side Strapi fetchers), not Next.js API routes
- `app/(routes)/` — route group with pages: `noticias/`, `institucional/`, `obras/`, `tramites/`, `mantenimiento/`, `contacto/`, `galeria/`
- `components/` — shared components; subdir `ui/` for shadcn primitives
- `types/` — `noticia.ts`, `response.ts`
- `public/` — static assets, PDFs, manifest.json

## Data Fetching Pattern
All hooks in `api/` use `useEffect` + `useState` — they are **client-side only** (`"use client"` in consuming pages). They fetch from `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/noticias?...` (Strapi REST API with `populate=*`).

## Docker
- Multi-stage build on `node:18-alpine`, serves on **port 8080**
- `docker-compose.yml` includes Postgres 15 (used as sidecar; app itself connects to remote Strapi)
- Run: `docker compose up`

## Routes & Pages
- Home: `app/page.tsx` → `<MainPage />`
- Noticias: dynamic `[noticiasSlug]/` param, categories, paginated list
- Institucional: sub-routes `autoridades/`, `mision/`, `organigrama/`
- Tramites: sub-routes `requisitos/`, `transferencia/`
- Mantenimiento: placeholder/Maintenance page
- `next.config.mjs` allows all remote image hosts
