import { render, screen } from '@testing-library/react'
import Header from './Header'

test('헤더에 "My Dashboard" 텍스트가 표시된다', () => {
  render(<Header />)
  expect(screen.getByText('My Dashboard')).toBeInTheDocument()
})
