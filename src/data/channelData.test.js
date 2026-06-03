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
