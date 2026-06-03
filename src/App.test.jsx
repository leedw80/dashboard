import { render, screen } from '@testing-library/react'
import App from './App'

vi.mock('./components/ProfileHeader', () => ({
  default: ({ name }) => <div>{name}</div>,
}))
vi.mock('./components/ChannelSection', () => ({
  default: ({ title }) => <div>{title}</div>,
}))
vi.mock('./components/ContactButtons', () => ({
  default: () => <div>문의하기</div>,
}))

test('ProfileHeader가 이름과 함께 렌더링된다', () => {
  render(<App />)
  expect(screen.getByText('이름')).toBeInTheDocument()
})

test('4개 카테고리 섹션이 모두 렌더링된다', () => {
  render(<App />)
  expect(screen.getByText('SNS')).toBeInTheDocument()
  expect(screen.getByText('블로그·커뮤니티')).toBeInTheDocument()
  expect(screen.getByText('지역·생활')).toBeInTheDocument()
  expect(screen.getByText('개발')).toBeInTheDocument()
})

test('ContactButtons가 렌더링된다', () => {
  render(<App />)
  expect(screen.getByText('문의하기')).toBeInTheDocument()
})
