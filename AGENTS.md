# AGENTS.md – IPV Tucumán Webapp

## Commands
```bash
npm run dev     # http://localhost:3000
npm run build   # Production build
npm run start   # Start prod server (port 8080 in Docker)
npm run lint    # ESLint (next/core-web-vitals + next/typescript)
```
No test framework is configured.

## Stack & Setup
- **Next.js 14.2.16** (App Router), React 18, TypeScript (strict), Tailwind CSS 3, Framer Motion
- **shadcn/ui** — components in `@/components/ui/`, utility `cn()` at `@/lib/utils.ts`
- **Strapi backend** — env vars `NEXT_PUBLIC_BACKEND_URL` + `NEXT_PUBLIC_STRAPI_API_TOKEN` required; all data fetched client-side via React hooks in `api/` (no Next.js API routes or server components)
- **Font**: Urbanist (`next/font/google`), applied at `app/layout.tsx:179`; stale README still says Geist, ignore it
- **Path alias**: `@/*` maps to project root
- **Language**: `es-AR` (`app/layout.tsx:177`)
- Dark mode via `darkMode: ["class"]`; CSS variables in `globals.css`
- `<body suppressHydrationWarning={true}>` at layout — hydration mismatches expected
- `next.config.mjs` allows all remote image hosts

## Key Directories
- `api/` — **React hooks** (client-side Strapi fetchers via `useEffect` + `useState`), not Next.js API routes. All use `populate=*`.
- `app/(routes)/` — route group: `noticias/`, `institucional/`, `obras/`, `tramites/`, `mantenimiento/`, `contacto/`, `galeria/`
- `components/` — shared components; `ui/` for shadcn primitives
- `types/` — `noticia.ts`, `response.ts`

## Docker
- Multi-stage build on `node:18-alpine`, serves on **port 8080**
- `docker-compose.yml` includes Postgres 15, but **the app does not use it** (all data comes from remote Strapi); Postgres is unused infrastructure
- Run: `docker compose up`

## Operational Notes
- **`.env` has live Strapi credentials committed** — do not expose or commit to public forks
- `public/` contains static assets, PDFs, `manifest.json`
- No CI workflows, no opencode.json — `AGENTS.md` is the sole instruction file
