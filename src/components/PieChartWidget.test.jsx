import { render, screen } from '@testing-library/react'
import PieChartWidget from './PieChartWidget'

vi.mock('recharts', () => ({
  PieChart: ({ children }) => <div data-testid="pie-chart">{children}</div>,
  Pie: () => null,
  Cell: () => null,
  Tooltip: () => null,
  Legend: () => null,
  ResponsiveContainer: ({ children }) => <div>{children}</div>,
}))

test('차트 제목 "트래픽 소스"가 표시된다', () => {
  render(<PieChartWidget />)
  expect(screen.getByText('트래픽 소스')).toBeInTheDocument()
})

test('PieChart가 렌더링된다', () => {
  render(<PieChartWidget />)
  expect(screen.getByTestId('pie-chart')).toBeInTheDocument()
})
