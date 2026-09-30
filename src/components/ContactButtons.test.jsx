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

test('카카오톡 문의 버튼이 채널 채팅 링크로 열린다', () => {
  render(<PhoneEmailButtons phone="01012345678" kakao="https://pf.kakao.com/_test/chat" email="test@test.com" />)
  expect(screen.getByText('카카오톡 문의').closest('a')).toHaveAttribute('href', 'https://pf.kakao.com/_test/chat')
})

test('kakao가 없으면 카카오톡 버튼을 그리지 않는다', () => {
  renderButtons()
  expect(screen.queryByText('카카오톡 문의')).not.toBeInTheDocument()
})
