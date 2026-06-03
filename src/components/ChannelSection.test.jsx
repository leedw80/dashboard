import { render, screen } from '@testing-library/react'
import ChannelSection from './ChannelSection'

const channels = [
  { name: 'YouTube', url: 'https://youtube.com', color: '#FF0000' },
  { name: 'TikTok',  url: 'https://tiktok.com',  color: '#000000' },
]

test('카테고리 제목과 아이콘이 표시된다', () => {
  render(<ChannelSection title="SNS" icon="📱" channels={channels} />)
  expect(screen.getByText('📱 SNS')).toBeInTheDocument()
})

test('채널 카드가 모두 렌더링된다', () => {
  render(<ChannelSection title="SNS" icon="📱" channels={channels} />)
  expect(screen.getByText('YouTube')).toBeInTheDocument()
  expect(screen.getByText('TikTok')).toBeInTheDocument()
})
