import { render, screen } from '@testing-library/react'
import LineChartWidget from './LineChartWidget'

vi.mock('recharts', () => ({
  LineChart: ({ children }) => <div data-testid="line-chart">{children}</div>,
  Line: () => null,
  XAxis: () => null,
  YAxis: () => null,
  CartesianGrid: () => null,
  Tooltip: () => null,
  ResponsiveContainer: ({ children }) => <div>{children}</div>,
}))

test('차트 제목 "월별 방문자"가 표시된다', () => {
  render(<LineChartWidget />)
  expect(screen.getByText('월별 방문자')).toBeInTheDocument()
})

test('LineChart가 렌더링된다', () => {
  render(<LineChartWidget />)
  expect(screen.getByTestId('line-chart')).toBeInTheDocument()
})
