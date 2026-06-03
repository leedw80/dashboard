import { render, screen } from '@testing-library/react'
import App from './App'

vi.mock('./components/LineChartWidget', () => ({ default: () => <div>LineChart</div> }))
vi.mock('./components/PieChartWidget', () => ({ default: () => <div>PieChart</div> }))

test('대시보드 헤더가 표시된다', () => {
  render(<App />)
  expect(screen.getByText('My Dashboard')).toBeInTheDocument()
})

test('4개의 지표 카드 제목이 모두 표시된다', () => {
  render(<App />)
  expect(screen.getByText('총 방문자')).toBeInTheDocument()
  expect(screen.getByText('신규 유저')).toBeInTheDocument()
  expect(screen.getByText('매출')).toBeInTheDocument()
  expect(screen.getByText('전환율')).toBeInTheDocument()
})
