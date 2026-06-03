import { render, screen } from '@testing-library/react'
import ContactButtons from './ContactButtons'

test('카카오톡 문의 버튼이 표시된다', () => {
  render(<ContactButtons kakao="https://open.kakao.com/test" email="test@test.com" />)
  expect(screen.getByText('카카오톡 문의')).toBeInTheDocument()
})

test('이메일 문의 버튼이 표시된다', () => {
  render(<ContactButtons kakao="https://open.kakao.com/test" email="test@test.com" />)
  expect(screen.getByText('이메일 문의')).toBeInTheDocument()
})

test('카카오톡 링크가 올바르다', () => {
  render(<ContactButtons kakao="https://open.kakao.com/test" email="test@test.com" />)
  const links = screen.getAllByRole('link')
  const kakaoLink = links.find(l => l.textContent.includes('카카오톡'))
  expect(kakaoLink).toHaveAttribute('href', 'https://open.kakao.com/test')
})

test('이메일 링크가 mailto: 형식이다', () => {
  render(<ContactButtons kakao="https://open.kakao.com/test" email="test@test.com" />)
  const links = screen.getAllByRole('link')
  const emailLink = links.find(l => l.textContent.includes('이메일'))
  expect(emailLink).toHaveAttribute('href', 'mailto:test@test.com')
})
