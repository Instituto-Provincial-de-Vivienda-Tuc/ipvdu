# AGENTS.md – IPV Tucumán Webapp

## Commands
```bash
npm run dev     # http://localhost:3000
npm run build   # Production build
npm run start   # Start prod server (port 3000 by default; Docker overrides via PORT=8080)
npm run lint    # ESLint (next/core-web-vitals + next/typescript)
```
No test framework is configured.

## Stack & Setup
- **Next.js 14.2.16** (App Router), React 18, TypeScript (strict), Tailwind CSS 3, Framer Motion, shadcn/ui (lucide icons)
- **shadcn/ui** — components in `@/components/ui/`; utility `cn()` at `@/lib/utils.ts`; components.json at root
- **Strapi backend** — env vars `NEXT_PUBLIC_BACKEND_URL` + `NEXT_PUBLIC_STRAPI_API_TOKEN` required; all data fetched client-side via React hooks in `api/`. **`NEXT_PUBLIC_STRAPI_API_TOKEN` is never sent in fetch headers** — hooks use plain `fetch(url)` with no auth. If Strapi enforces token auth, this is broken.
- **Font**: Urbanist (`next/font/google` in `app/layout.tsx`); stale README says Geist, ignore it
- **Path alias**: `@/*` maps to project root
- **Language**: `es-AR` (layout.tsx `<html lang="es-AR">`)
- Dark mode via `darkMode: ["class"]`; CSS variables in `globals.css`
- `<body suppressHydrationWarning={true}>` — hydration mismatches expected
- `next.config.mjs` allows all remote image hosts (both `http` and `https` wildcards)
- `@vercel/speed-insights` component rendered in `layout.tsx`
- `next-video` package in dependencies (usage unclear from repo scan)

## Key Directories
- `api/` — **React hooks** (`useEffect` + `useState`), not Next.js API routes. All use `populate=*`. Hooks: `useGetFeatured`, `useGetCategory`, `useGetNoticiaBySlug`, `useGetProductField`, `useGetCategoryName`
- `app/(routes)/` — route group: `noticias/`, `institucional/`, `obras/`, `tramites/`, `mantenimiento/`, `contacto/`, `galeria/`
- `components/` — shared components; `ui/` for shadcn primitives (accordion, button, card, carousel, navigation-menu, popover, skeleton)
- `types/` — `noticia.ts`, `response.ts`

## Docker
- Multi-stage build on `node:18-alpine`, serves on **port 8080** (`ENV PORT=8080`, `EXPOSE 8080`)
- `docker-compose.yml` includes Postgres 15, but **the app does not use it** (all data comes from remote Strapi); Postgres is unused infrastructure (the `DATABASE_URL` env var is never read by the app)
- Run: `docker compose up`

## Operational Notes
- **`.env` has live Strapi credentials committed** — do not expose or commit to public forks
- `public/` contains static assets (`images/`, `pdf/`), `manifest.json`, `logo-tucuman-nuevo.svg`
- No CI workflows, no `.github/`, no `opencode.json` — `AGENTS.md` is the sole instruction file
