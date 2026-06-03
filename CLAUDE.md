# Dashboard

> 모든 명령어는 `dashboard/` 디렉토리 안에서 실행

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
`src/data/channelData.js` - 프로필·채널·연락처·쿠팡 데이터 수정
`src/components/ContactButtons.jsx` - props: phone, kakao, email (3개 모두 필수)
`src/components/ProfileHeader.jsx` - public 이미지 BASE_URL 처리 포함
`src/App.jsx` - 쿠팡 배너 등 특수 요소는 여기서 직접 렌더링

## Gotchas
Public 폴더 이미지는 `import.meta.env.BASE_URL` 없이 `/파일명`으로 참조하면 GitHub Pages에서 깨짐 (ProfileHeader에서 처리 중)
이미지 압축: PowerShell System.Drawing으로 PNG→JPEG 변환 가능 (sharp 불필요)

## Testing
Vitest + @testing-library/react. Test files colocated as `*.test.jsx`
Recharts must be mocked in tests: `vi.mock('recharts', () => ({ ... }))`

## GitHub Pages
Live at: https://leedw80.github.io/dashboard/
vite.config.js has `base: '/dashboard/'` — required for assets to load correctly
After changes: `npm run deploy` to publish
