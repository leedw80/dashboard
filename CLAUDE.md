# Dashboard

## Stack
Vite + React 19 + Tailwind CSS v4 + Recharts + lucide-react

## Tailwind v4 (NOT v3)
- No tailwind.config.js — configured via `@tailwindcss/vite` plugin in vite.config.js
- CSS entry: `@import "tailwindcss"` (not @tailwind directives)

## Commands
`npm run dev` - dev server (localhost:5173)
`npm test` equivalent: `npx vitest run`
`npm run deploy` - build + deploy to GitHub Pages

## Testing
Vitest + @testing-library/react. Test files colocated as `*.test.jsx`
Recharts must be mocked in tests: `vi.mock('recharts', () => ({ ... }))`

## GitHub Pages
Live at: https://leedw80.github.io/dashboard/
vite.config.js has `base: '/dashboard/'` — required for assets to load correctly
After changes: `npm run deploy` to publish
