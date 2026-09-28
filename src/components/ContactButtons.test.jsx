import { render, screen } from '@testing-library/react'
import { PhoneEmailButtons } from './ContactButtons'

const renderButtons = () => render(<PhoneEmailButtons phone="01012345678" email="test@test.com" />)

test('전화 문의 버튼이 표시된다', () => {
  renderButtons()
  expect(screen.getByText('전화 문의')).toBeInTheDocument()
})

test('이메일 문의 버튼이 표시된다', () => {
  renderButtons()
  expect(screen.getByText('이메일 문의')).toBeInTheDocument()
})

test('전화 링크가 tel: 형식이다', () => {
  renderButtons()
  expect(screen.getByText('전화 문의').closest('a')).toHaveAttribute('href', 'tel:01012345678')
})

test('이메일 링크가 mailto: 형식이다', () => {
  renderButtons()
  expect(screen.getByText('이메일 문의').closest('a')).toHaveAttribute('href', 'mailto:test@test.com')
})
