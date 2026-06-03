import ProfileHeader from './components/ProfileHeader'
import ChannelSection from './components/ChannelSection'
import ContactButtons from './components/ContactButtons'
import { profile, categories, contact, coupang } from './data/channelData'

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-2xl mx-auto px-6 space-y-8">
        <ProfileHeader {...profile} />
        <ContactButtons {...contact} />
        {categories.map((cat) => (
          <ChannelSection key={cat.title} {...cat} />
        ))}
        <a
          href={coupang.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-1 px-5 py-4 mb-8 bg-orange-50 border border-orange-200 rounded-lg hover:bg-orange-100 transition-colors text-center"
        >
          <span className="font-semibold text-orange-700">🛒 {coupang.label}</span>
          <span className="text-xs text-orange-400">{coupang.disclosure}</span>
        </a>
      </div>
    </div>
  )
}
