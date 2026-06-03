# 채널 허브 템플릿

인포크링크·링크트리 스타일의 개인 채널 모음 페이지입니다.  
프로필, 플랫폼별 채널, 문의하기 버튼을 한 페이지에 모아 GitHub Pages로 무료 배포합니다.

**데모:** https://leedw80.github.io/dashboard/

---

## 포함된 기능

- 프로필 사진 + 이름 + 소개
- 카테고리별 채널 카드 (SNS / 블로그 / 지역·생활 / 개발 등)
- 전화·카카오톡·이메일 문의 버튼
- 서비스 소개 카드 (콘텐츠 제작, 시공 문의 등)
- 쿠팡 파트너스 배너
- GitHub Pages 무료 배포

---

## 사용 방법

### 1. 레포 복사

```bash
git clone https://github.com/leedw80/dashboard.git 내폴더명
cd 내폴더명
npm install
```

### 2. 정보 수정

**`src/data/channelData.js`** 에서 본인 정보로 교체:

```js
export const profile = {
  name: "이름",
  bio: "한 줄 소개",
  photo: "/profile.jpg",   // public/ 폴더에 사진 파일 넣기
}
```

각 채널의 `url`을 본인 주소로 교체하고, 없는 채널은 줄 삭제.

**`public/profile.jpg`** — 본인 프로필 사진으로 교체 (1MB 이하)

### 3. 배포 설정

**`vite.config.js`** 에서 레포 이름 변경:

```js
base: '/내레포이름/',
```

### 4. GitHub에 올리기

```bash
git remote set-url origin https://github.com/내계정/내레포이름.git
git push -u origin master
npm run deploy
```

GitHub 레포 → Settings → Pages → Branch: `gh-pages` 선택 후 Save.

잠시 후 `https://내계정.github.io/내레포이름/` 에서 확인.

---

## 채널 추가하는 법

`src/data/channelData.js`의 해당 카테고리 배열에 한 줄 추가:

```js
{ name: "플랫폼명", url: "https://...", color: "#색상코드" },
```

새 카테고리 추가:

```js
{
  title: "카테고리명",
  icon: "🎯",
  channels: [
    { name: "채널명", url: "https://...", color: "#색상코드" },
  ],
},
```

그 다음 `npm run deploy` 로 배포.

---

## 기술 스택

- React 19 + Vite
- Tailwind CSS v4
- lucide-react (아이콘)
- GitHub Pages (무료 호스팅)
