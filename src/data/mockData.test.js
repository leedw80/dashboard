import { stats, visitData, trafficData } from './mockData'

test('stats에 4개 항목이 있다', () => {
  expect(stats).toHaveLength(4)
})

test('stats 각 항목은 title, value, icon, color를 가진다', () => {
  stats.forEach(item => {
    expect(item).toHaveProperty('title')
    expect(item).toHaveProperty('value')
    expect(item).toHaveProperty('icon')
    expect(item).toHaveProperty('color')
  })
})

test('visitData에 6개 월별 데이터가 있다', () => {
  expect(visitData).toHaveLength(6)
})

test('trafficData에 3개 소스가 있다', () => {
  expect(trafficData).toHaveLength(3)
})
