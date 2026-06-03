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

## Workflow (코드 수정 후)
```bash
git add . && git commit -m "feat: ..."  # 소스코드 저장
npm run deploy                           # GitHub Pages 반영
```

## Key Files
`src/data/mockData.js` - 카드/차트 데이터 수정은 여기
`src/components/StatCard.jsx` - 아이콘 추가 시 iconMap에 수동 등록 필요
`src/components/` - Header, StatCard, LineChartWidget, PieChartWidget

## Testing
Vitest + @testing-library/react. Test files colocated as `*.test.jsx`
Recharts must be mocked in tests: `vi.mock('recharts', () => ({ ... }))`

## GitHub Pages
Live at: https://leedw80.github.io/dashboard/
vite.config.js has `base: '/dashboard/'` — required for assets to load correctly
After changes: `npm run deploy` to publish
