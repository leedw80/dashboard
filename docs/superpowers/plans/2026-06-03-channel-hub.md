# 채널 허브 구현 계획

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 기존 통계 대시보드를 카테고리별 채널 카드 + 문의하기 버튼으로 구성된 링크 허브 페이지로 완전 교체한다.

**Architecture:** 모든 데이터는 `channelData.js` 한 파일에서 관리하며, `ChannelSection`이 카테고리별로 재사용되고 `App.jsx`가 전체를 조립한다. 기존 대시보드 컴포넌트(Header, StatCard, LineChartWidget, PieChartWidget, mockData.js)는 마지막 태스크에서 제거한다.

**Tech Stack:** React 19, Vite, Tailwind CSS v4, lucide-react, Vitest, @testing-library/react

---

### Task 1: channelData.js 생성

**Files:**
- Create: `dashboard/src/data/channelData.js`
- Create: `dashboard/src/data/channelData.test.js`

- [ ] **Step 1: 실패하는 테스트 작성**

`dashboard/src/data/channelData.test.js` 생성:

```js
import { profile, categories, contact } from './channelData'

test('profile에 name, bio, photo가 있다', () => {
  expect(profile).toHaveProperty('name')
  expect(profile).toHaveProperty('bio')
  expect(profile).toHaveProperty('photo')
})

test('categories에 4개 카테고리가 있다', () => {
  expect(categories).toHaveLength(4)
})

test('각 카테고리는 title, icon, channels를 가진다', () => {
  categories.forEach(cat => {
    expect(cat).toHaveProperty('title')
    expect(cat).toHaveProperty('icon')
    expect(cat).toHaveProperty('channels')
    expect(Array.isArray(cat.channels)).toBe(true)
  })
})

test('각 채널은 name, url, color를 가진다', () => {
  categories.forEach(cat => {
    cat.channels.forEach(ch => {
      expect(ch).toHaveProperty('name')
      expect(ch).toHaveProperty('url')
      expect(ch).toHaveProperty('color')
    })
  })
})

test('contact에 kakao와 email이 있다', () => {
  expect(contact).toHaveProperty('kakao')
  expect(contact).toHaveProperty('email')
})
```

- [ ] **Step 2: 테스트 실패 확인**

```bash
npx vitest run src/data/channelData.test.js
```

Expected: FAIL — `Cannot find module './channelData'`

- [ ] **Step 3: channelData.js 구현**

`dashboard/src/data/channelData.js` 생성:

```js
export const profile = {
  name: "이름",
  bio: "한 줄 소개",
  photo: "/profile.jpg",
}

export const categories = [
  {
    title: "SNS",
    icon: "📱",
    channels: [
      { name: "TikTok",    url: "https://tiktok.com/@...",   color: "#000000" },
      { name: "YouTube",   url: "https://youtube.com/@...",  color: "#FF0000" },
      { name: "Instagram", url: "https://instagram.com/...", color: "#E1306C" },
      { name: "Facebook",  url: "https://facebook.com/...",  color: "#1877F2" },
      { name: "Threads",   url: "https://threads.net/@...",  color: "#000000" },
    ],
  },
  {
    title: "블로그·커뮤니티",
    icon: "📝",
    channels: [
      { name: "네이버 블로그", url: "https://blog.naver.com/...", color: "#03C75A" },
      { name: "네이버 카페",   url: "https://cafe.naver.com/...", color: "#03C75A" },
      { name: "네이버 클립",   url: "https://clip.naver.com/...", color: "#03C75A" },
      { name: "티스토리",      url: "https://example.tistory.com", color: "#FF6600" },
    ],
  },
  {
    title: "지역·생활",
    icon: "📍",
    channels: [
      { name: "당근마켓", url: "https://www.daangn.com/...", color: "#FF6F0F" },
      { name: "카카오맵", url: "https://map.kakao.com/...", color: "#FAE100" },
    ],
  },
  {
    title: "개발",
    icon: "💻",
    channels: [
      { name: "GitHub", url: "https://github.com/leedw80", color: "#181717" },
    ],
  },
]

export const contact = {
  kakao: "https://open.kakao.com/...",
  email: "이메일주소@example.com",
}
```

- [ ] **Step 4: 테스트 통과 확인**

```bash
npx vitest run src/data/channelData.test.js
```

Expected: PASS — 5 tests passed

- [ ] **Step 5: Commit**

```bash
git add src/data/channelData.js src/data/channelData.test.js
git commit -m "feat: channelData 추가"
```

---

### Task 2: ChannelCard 컴포넌트

**Files:**
- Create: `dashboard/src/components/ChannelCard.jsx`
- Create: `dashboard/src/components/ChannelCard.test.jsx`

- [ ] **Step 1: 실패하는 테스트 작성**

`dashboard/src/components/ChannelCard.test.jsx` 생성:

```jsx
import { render, screen } from '@testing-library/react'
import ChannelCard from './ChannelCard'

test('채널명이 표시된다', () => {
  render(<ChannelCard name="YouTube" url="https://youtube.com" color="#FF0000" />)
  expect(screen.getByText('YouTube')).toBeInTheDocument()
})

test('올바른 URL로 링크된다', () => {
  render(<ChannelCard name="YouTube" url="https://youtube.com" color="#FF0000" />)
  expect(screen.getByRole('link')).toHaveAttribute('href', 'https://youtube.com')
})

test('새 탭으로 열린다', () => {
  render(<ChannelCard name="YouTube" url="https://youtube.com" color="#FF0000" />)
  expect(screen.getByRole('link')).toHaveAttribute('target', '_blank')
})
```

- [ ] **Step 2: 테스트 실패 확인**

```bash
npx vitest run src/components/ChannelCard.test.jsx
```

Expected: FAIL — `Cannot find module './ChannelCard'`

- [ ] **Step 3: ChannelCard.jsx 구현**

`dashboard/src/components/ChannelCard.jsx` 생성:

```jsx
export default function ChannelCard({ name, url, color }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center px-4 py-3 rounded-lg text-white font-medium text-sm hover:opacity-80 transition-opacity"
      style={{ backgroundColor: color }}
    >
      {name}
    </a>
  )
}
```

- [ ] **Step 4: 테스트 통과 확인**

```bash
npx vitest run src/components/ChannelCard.test.jsx
```

Expected: PASS — 3 tests passed

- [ ] **Step 5: Commit**

```bash
git add src/components/ChannelCard.jsx src/components/ChannelCard.test.jsx
git commit -m "feat: ChannelCard 컴포넌트 추가"
```

---

### Task 3: ChannelSection 컴포넌트

**Files:**
- Create: `dashboard/src/components/ChannelSection.jsx`
- Create: `dashboard/src/components/ChannelSection.test.jsx`

- [ ] **Step 1: 실패하는 테스트 작성**

`dashboard/src/components/ChannelSection.test.jsx` 생성:

```jsx
import { render, screen } from '@testing-library/react'
import ChannelSection from './ChannelSection'

const channels = [
  { name: 'YouTube', url: 'https://youtube.com', color: '#FF0000' },
  { name: 'TikTok',  url: 'https://tiktok.com',  color: '#000000' },
]

test('카테고리 제목과 아이콘이 표시된다', () => {
  render(<ChannelSection title="SNS" icon="📱" channels={channels} />)
  expect(screen.getByText('📱 SNS')).toBeInTheDocument()
})

test('채널 카드가 모두 렌더링된다', () => {
  render(<ChannelSection title="SNS" icon="📱" channels={channels} />)
  expect(screen.getByText('YouTube')).toBeInTheDocument()
  expect(screen.getByText('TikTok')).toBeInTheDocument()
})
```

- [ ] **Step 2: 테스트 실패 확인**

```bash
npx vitest run src/components/ChannelSection.test.jsx
```

Expected: FAIL — `Cannot find module './ChannelSection'`

- [ ] **Step 3: ChannelSection.jsx 구현**

`dashboard/src/components/ChannelSection.jsx` 생성:

```jsx
import ChannelCard from './ChannelCard'

export default function ChannelSection({ title, icon, channels }) {
  return (
    <section className="space-y-3">
      <h2 className="text-lg font-semibold text-gray-700">{icon} {title}</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {channels.map((channel) => (
          <ChannelCard key={channel.name} {...channel} />
        ))}
      </div>
    </section>
  )
}
```

- [ ] **Step 4: 테스트 통과 확인**

```bash
npx vitest run src/components/ChannelSection.test.jsx
```

Expected: PASS — 2 tests passed

- [ ] **Step 5: Commit**

```bash
git add src/components/ChannelSection.jsx src/components/ChannelSection.test.jsx
git commit -m "feat: ChannelSection 컴포넌트 추가"
```

---

### Task 4: ProfileHeader 컴포넌트

**Files:**
- Create: `dashboard/src/components/ProfileHeader.jsx`
- Create: `dashboard/src/components/ProfileHeader.test.jsx`

- [ ] **Step 1: 실패하는 테스트 작성**

`dashboard/src/components/ProfileHeader.test.jsx` 생성:

```jsx
import { render, screen } from '@testing-library/react'
import ProfileHeader from './ProfileHeader'

test('이름과 소개가 표시된다', () => {
  render(<ProfileHeader name="홍길동" bio="안녕하세요" photo="/photo.jpg" />)
  expect(screen.getByText('홍길동')).toBeInTheDocument()
  expect(screen.getByText('안녕하세요')).toBeInTheDocument()
})

test('프로필 사진이 렌더링된다', () => {
  render(<ProfileHeader name="홍길동" bio="안녕하세요" photo="/photo.jpg" />)
  expect(screen.getByRole('img')).toHaveAttribute('src', '/photo.jpg')
})
```

- [ ] **Step 2: 테스트 실패 확인**

```bash
npx vitest run src/components/ProfileHeader.test.jsx
```

Expected: FAIL — `Cannot find module './ProfileHeader'`

- [ ] **Step 3: ProfileHeader.jsx 구현**

`dashboard/src/components/ProfileHeader.jsx` 생성:

```jsx
export default function ProfileHeader({ name, bio, photo }) {
  return (
    <div className="flex flex-col items-center gap-3 py-8">
      <img
        src={photo}
        alt={name}
        className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md"
      />
      <h1 className="text-2xl font-bold text-gray-800">{name}</h1>
      <p className="text-gray-500 text-center">{bio}</p>
    </div>
  )
}
```

- [ ] **Step 4: 테스트 통과 확인**

```bash
npx vitest run src/components/ProfileHeader.test.jsx
```

Expected: PASS — 2 tests passed

- [ ] **Step 5: Commit**

```bash
git add src/components/ProfileHeader.jsx src/components/ProfileHeader.test.jsx
git commit -m "feat: ProfileHeader 컴포넌트 추가"
```

---

### Task 5: ContactButtons 컴포넌트

**Files:**
- Create: `dashboard/src/components/ContactButtons.jsx`
- Create: `dashboard/src/components/ContactButtons.test.jsx`

- [ ] **Step 1: 실패하는 테스트 작성**

`dashboard/src/components/ContactButtons.test.jsx` 생성:

```jsx
import { render, screen } from '@testing-library/react'
import ContactButtons from './ContactButtons'

test('카카오톡 문의 버튼이 표시된다', () => {
  render(<ContactButtons kakao="https://open.kakao.com/test" email="test@test.com" />)
  expect(screen.getByText('카카오톡 문의')).toBeInTheDocument()
})

test('이메일 문의 버튼이 표시된다', () => {
  render(<ContactButtons kakao="https://open.kakao.com/test" email="test@test.com" />)
  expect(screen.getByText('이메일 문의')).toBeInTheDocument()
})

test('카카오톡 링크가 올바르다', () => {
  render(<ContactButtons kakao="https://open.kakao.com/test" email="test@test.com" />)
  const links = screen.getAllByRole('link')
  const kakaoLink = links.find(l => l.textContent.includes('카카오톡'))
  expect(kakaoLink).toHaveAttribute('href', 'https://open.kakao.com/test')
})

test('이메일 링크가 mailto: 형식이다', () => {
  render(<ContactButtons kakao="https://open.kakao.com/test" email="test@test.com" />)
  const links = screen.getAllByRole('link')
  const emailLink = links.find(l => l.textContent.includes('이메일'))
  expect(emailLink).toHaveAttribute('href', 'mailto:test@test.com')
})
```

- [ ] **Step 2: 테스트 실패 확인**

```bash
npx vitest run src/components/ContactButtons.test.jsx
```

Expected: FAIL — `Cannot find module './ContactButtons'`

- [ ] **Step 3: ContactButtons.jsx 구현**

`dashboard/src/components/ContactButtons.jsx` 생성:

```jsx
import { MessageCircle, Mail } from 'lucide-react'

export default function ContactButtons({ kakao, email }) {
  return (
    <div className="flex gap-3 pt-4 pb-8">
      <a
        href={kakao}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-medium py-3 rounded-lg transition-colors"
      >
        <MessageCircle size={18} />
        카카오톡 문의
      </a>
      <a
        href={`mailto:${email}`}
        className="flex-1 flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-900 text-white font-medium py-3 rounded-lg transition-colors"
      >
        <Mail size={18} />
        이메일 문의
      </a>
    </div>
  )
}
```

- [ ] **Step 4: 테스트 통과 확인**

```bash
npx vitest run src/components/ContactButtons.test.jsx
```

Expected: PASS — 4 tests passed

- [ ] **Step 5: Commit**

```bash
git add src/components/ContactButtons.jsx src/components/ContactButtons.test.jsx
git commit -m "feat: ContactButtons 컴포넌트 추가"
```

---

### Task 6: App.jsx 교체 + 기존 파일 제거

**Files:**
- Modify: `dashboard/src/App.jsx`
- Modify: `dashboard/src/App.test.jsx`
- Delete: `dashboard/src/components/Header.jsx`, `Header.test.jsx`
- Delete: `dashboard/src/components/StatCard.jsx`, `StatCard.test.jsx`
- Delete: `dashboard/src/components/LineChartWidget.jsx`, `LineChartWidget.test.jsx`
- Delete: `dashboard/src/components/PieChartWidget.jsx`, `PieChartWidget.test.jsx`
- Delete: `dashboard/src/data/mockData.js`, `mockData.test.js`

- [ ] **Step 1: App.test.jsx 교체 (실패하는 테스트 작성)**

`dashboard/src/App.test.jsx` 전체를 아래로 교체:

```jsx
import { render, screen } from '@testing-library/react'
import App from './App'

vi.mock('./components/ProfileHeader', () => ({
  default: ({ name }) => <div>{name}</div>,
}))
vi.mock('./components/ChannelSection', () => ({
  default: ({ title }) => <div>{title}</div>,
}))
vi.mock('./components/ContactButtons', () => ({
  default: () => <div>문의하기</div>,
}))

test('ProfileHeader가 이름과 함께 렌더링된다', () => {
  render(<App />)
  expect(screen.getByText('이름')).toBeInTheDocument()
})

test('4개 카테고리 섹션이 모두 렌더링된다', () => {
  render(<App />)
  expect(screen.getByText('SNS')).toBeInTheDocument()
  expect(screen.getByText('블로그·커뮤니티')).toBeInTheDocument()
  expect(screen.getByText('지역·생활')).toBeInTheDocument()
  expect(screen.getByText('개발')).toBeInTheDocument()
})

test('ContactButtons가 렌더링된다', () => {
  render(<App />)
  expect(screen.getByText('문의하기')).toBeInTheDocument()
})
```

- [ ] **Step 2: 테스트 실패 확인**

```bash
npx vitest run src/App.test.jsx
```

Expected: FAIL — App이 아직 기존 대시보드 상태

- [ ] **Step 3: App.jsx 교체**

`dashboard/src/App.jsx` 전체를 아래로 교체:

```jsx
import ProfileHeader from './components/ProfileHeader'
import ChannelSection from './components/ChannelSection'
import ContactButtons from './components/ContactButtons'
import { profile, categories, contact } from './data/channelData'

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-2xl mx-auto px-6 space-y-8">
        <ProfileHeader {...profile} />
        {categories.map((cat) => (
          <ChannelSection key={cat.title} {...cat} />
        ))}
        <ContactButtons {...contact} />
      </div>
    </div>
  )
}
```

- [ ] **Step 4: 테스트 통과 확인**

```bash
npx vitest run src/App.test.jsx
```

Expected: PASS — 3 tests passed

- [ ] **Step 5: 기존 파일 삭제**

```bash
Remove-Item src/components/Header.jsx, src/components/Header.test.jsx
Remove-Item src/components/StatCard.jsx, src/components/StatCard.test.jsx
Remove-Item src/components/LineChartWidget.jsx, src/components/LineChartWidget.test.jsx
Remove-Item src/components/PieChartWidget.jsx, src/components/PieChartWidget.test.jsx
Remove-Item src/data/mockData.js, src/data/mockData.test.js
```

- [ ] **Step 6: 전체 테스트 실행**

```bash
npx vitest run
```

Expected: PASS — 19 tests passed (channelData 5 + ChannelCard 3 + ChannelSection 2 + ProfileHeader 2 + ContactButtons 4 + App 3)

- [ ] **Step 7: Commit**

```bash
git add .
git commit -m "feat: 채널 허브로 대시보드 교체 완료"
```

---

### Task 7: 실제 데이터 입력 + 배포

**Files:**
- Modify: `dashboard/src/data/channelData.js`
- Add: `dashboard/public/profile.jpg` (프로필 사진 파일 직접 복사)

- [ ] **Step 1: channelData.js에 실제 URL 입력**

`dashboard/src/data/channelData.js`를 열어 플레이스홀더 URL과 이름을 실제 값으로 교체:

```js
export const profile = {
  name: "실제 이름",           // ← 수정
  bio: "실제 소개 문구",        // ← 수정
  photo: "/profile.jpg",
}

// 각 채널의 url: "https://..." 부분을 실제 주소로 교체
// 없는 플랫폼은 해당 객체를 삭제
```

- [ ] **Step 2: 프로필 사진 추가**

프로필 사진을 `dashboard/public/profile.jpg` 경로에 복사.

파일명이 다르면 `channelData.js`의 `photo` 값을 맞춰 수정:
```js
photo: "/내사진.png",  // 실제 파일명으로 변경
```

- [ ] **Step 3: 개발 서버로 확인**

```bash
npm run dev
```

`http://localhost:5173` 에서 확인:
- 프로필 사진, 이름, 소개 표시
- 채널 카드 클릭 시 올바른 URL로 이동
- 카카오톡/이메일 버튼 작동

- [ ] **Step 4: Commit 및 배포**

```bash
git add .
git commit -m "feat: 실제 프로필 및 채널 URL 입력"
npm run deploy
```

Expected: `https://leedw80.github.io/dashboard/` 에 반영 (1~2분 소요)
