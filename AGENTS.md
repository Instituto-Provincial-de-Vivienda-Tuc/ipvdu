# AGENTS.md - IPV Tucumán Webapp

## Project Overview
- **Type**: Next.js 14 web application (App Router)
- **Stack**: React 18, Tailwind CSS, TypeScript, Framer Motion
- **Package manager**: npm (based on package-lock.json)

## Commands
```bash
npm run dev      # Start dev server at http://localhost:3000
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint (Next.js + TypeScript config)
```

## Key Directories
- `app/` - Next.js App Router pages and layouts
- `app/(routes)/` - Route groups with nested pages (noticias, institucional, obras, tramites, mantenimiento)
- `api/` - API route handlers
- `public/` - Static assets (images, SVGs, manifest.json)
- `types/` - TypeScript type definitions

## Important Patterns
- Routes use `(routes)` grouping convention with parentheses
- Component styling uses Tailwind CSS with `tailwind-merge` + `clsx` pattern
- Uses Radix UI primitives (`@radix-ui/react-*`) for accessible components
- Path alias: `@/*` maps to `./`

## Technical Notes
- Next.js version: 14.2.16 (App Router, not Pages)
- Dark mode via `darkMode: ["class"]` in tailwind.config.ts
- Uses `@vercel/speed-insights` for performance monitoring
- Font: Geist (Vercel) via `next/font`

## Linting
- ESLint config extends `next/core-web-vitals` and `next/typescript`
- Strict TypeScript enabled in tsconfig.json

## TypeScript
- Strict mode enabled
- Module resolution: `bundler`
- JSX preserve mode for Next.js