import { render, screen } from '@testing-library/react'
import StatCard from './StatCard'

test('title과 value가 렌더링된다', () => {
  render(<StatCard title="총 방문자" value="24,521" icon="Users" color="blue" />)
  expect(screen.getByText('총 방문자')).toBeInTheDocument()
  expect(screen.getByText('24,521')).toBeInTheDocument()
})
