import { render, screen } from '@testing-library/react'
import ProfileHeader from './ProfileHeader'

test('이름과 소개가 표시된다', () => {
  render(<ProfileHeader name="홍길동" bio="안녕하세요" photo="/photo.jpg" />)
  expect(screen.getByText('홍길동')).toBeInTheDocument()
  expect(screen.getByText('안녕하세요')).toBeInTheDocument()
})

test('프로필 사진이 렌더링된다', () => {
  render(<ProfileHeader name="홍길동" bio="안녕하세요" photo="/photo.jpg" />)
  expect(screen.getByRole('img')).toHaveAttribute('src', '/photo.jpg')
})
