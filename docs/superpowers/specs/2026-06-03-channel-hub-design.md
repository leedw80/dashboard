# 채널 허브 디자인 스펙

**날짜:** 2026-06-03  
**목적:** 대시보드를 플랫폼별 내 채널을 보여주는 링크 허브로 교체  
**상태:** 승인됨

---

## 개요

기존 통계 대시보드를 인포크링크 스타일의 채널 허브 페이지로 완전 교체한다. 프로필 정보, 카테고리별 채널 카드, 문의하기 버튼으로 구성되며 `channelData.js` 한 파일에서 모든 데이터를 관리한다.

---

## 화면 구성 (Layout)

```
┌─────────────────────────────────────┐
│  [프로필 사진]                       │
│  이름                                │
│  한 줄 소개                          │
├─────────────────────────────────────┤
│  📱 SNS                             │
│  [TikTok] [YouTube] [Instagram]     │
│  [Facebook] [Threads]               │
├─────────────────────────────────────┤
│  📝 블로그·커뮤니티                  │
│  [네이버블로그] [네이버카페]          │
│  [네이버클립] [티스토리]             │
├─────────────────────────────────────┤
│  📍 지역·생활                        │
│  [당근마켓] [카카오맵]               │
├─────────────────────────────────────┤
│  💻 개발                             │
│  [GitHub]                            │
├─────────────────────────────────────┤
│  📬 문의하기                         │
│  [카카오톡 오픈채팅]  [이메일]       │
└─────────────────────────────────────┘
```

- 상단: 프로필 사진 + 이름 + 한 줄 소개
- 중간: 카테고리별 채널 카드 그리드 (4개 카테고리)
- 하단: 카카오톡 오픈채팅 + 이메일 문의 버튼

---

## 컴포넌트 구조

```
src/
├── App.jsx                      # 채널 허브 메인 (기존 대시보드 교체)
├── components/
│   ├── ProfileHeader.jsx        # 프로필 사진 + 이름 + 소개
│   ├── ChannelSection.jsx       # 카테고리 제목 + 카드 그리드 (재사용)
│   ├── ChannelCard.jsx          # 개별 채널 카드 (색상 + 이름 + 링크)
│   └── ContactButtons.jsx       # 카카오톡 + 이메일 버튼
└── data/
    └── channelData.js           # 프로필 + 채널 목록 + 연락처
```

### 컴포넌트 인터페이스

**ProfileHeader props:**
- `name` (string): 이름
- `bio` (string): 한 줄 소개
- `photo` (string): 이미지 경로

**ChannelSection props:**
- `title` (string): 카테고리 제목
- `icon` (string): 이모지 아이콘
- `channels` (array): ChannelCard 데이터 배열

**ChannelCard props:**
- `name` (string): 채널명
- `url` (string): 외부 링크
- `color` (string): 브랜드 색상 hex

**ContactButtons props:**
- `kakao` (string): 카카오톡 오픈채팅 URL
- `email` (string): 이메일 주소

---

## 데이터 구조 (`channelData.js`)

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
      { name: "TikTok",     url: "https://tiktok.com/@...",      color: "#000000" },
      { name: "YouTube",    url: "https://youtube.com/@...",     color: "#FF0000" },
      { name: "Instagram",  url: "https://instagram.com/...",    color: "#E1306C" },
      { name: "Facebook",   url: "https://facebook.com/...",     color: "#1877F2" },
      { name: "Threads",    url: "https://threads.net/@...",     color: "#000000" },
    ],
  },
  {
    title: "블로그·커뮤니티",
    icon: "📝",
    channels: [
      { name: "네이버 블로그", url: "https://blog.naver.com/...", color: "#03C75A" },
      { name: "네이버 카페",   url: "https://cafe.naver.com/...", color: "#03C75A" },
      { name: "네이버 클립",   url: "https://...",                color: "#03C75A" },
      { name: "티스토리",      url: "https://....tistory.com",   color: "#FF6600" },
    ],
  },
  {
    title: "지역·생활",
    icon: "📍",
    channels: [
      { name: "당근마켓", url: "https://...", color: "#FF6F0F" },
      { name: "카카오맵", url: "https://...", color: "#FAE100" },
    ],
  },
  {
    title: "개발",
    icon: "💻",
    channels: [
      { name: "GitHub", url: "https://github.com/...", color: "#181717" },
    ],
  },
]

export const contact = {
  kakao: "https://open.kakao.com/...",
  email: "이메일주소@...",
}
```

---

## 기술 스택

기존 스택 그대로 사용 (Vite + React 19 + Tailwind CSS v4)  
lucide-react — 문의 버튼 아이콘에만 사용 (MessageCircle, Mail)

---

## 제거 대상 (기존 대시보드 컴포넌트)

- `src/components/Header.jsx` 및 테스트
- `src/components/StatCard.jsx` 및 테스트
- `src/components/LineChartWidget.jsx` 및 테스트
- `src/components/PieChartWidget.jsx` 및 테스트
- `src/data/mockData.js` 및 테스트

---

## 범위 외 (이번 버전에서 제외)

- 채널 클릭 수 통계
- 관리자 편집 UI (데이터는 코드로 직접 수정)
- 다국어 지원
- 다크모드
