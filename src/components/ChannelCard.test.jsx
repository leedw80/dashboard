import { render, screen } from '@testing-library/react'
import ChannelCard from './ChannelCard'

test('채널명이 표시된다', () => {
  render(<ChannelCard name="YouTube" url="https://youtube.com" color="#FF0000" />)
  expect(screen.getByText('YouTube')).toBeInTheDocument()
})

test('올바른 URL로 링크된다', () => {
  render(<ChannelCard name="YouTube" url="https://youtube.com" color="#FF0000" />)
  expect(screen.getByRole('link')).toHaveAttribute('href', 'https://youtube.com')
})

test('새 탭으로 열린다', () => {
  render(<ChannelCard name="YouTube" url="https://youtube.com" color="#FF0000" />)
  expect(screen.getByRole('link')).toHaveAttribute('target', '_blank')
})
