import ProfileHeader from './components/ProfileHeader'
import ChannelSection from './components/ChannelSection'
import { PhoneEmailButtons, ServiceCards } from './components/ContactButtons'
import { profile, categories, contact, coupang } from './data/channelData'

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-2xl mx-auto px-6 space-y-8">
        <ProfileHeader {...profile} />
        <PhoneEmailButtons phone={contact.phone} email={contact.email} />
        {categories.map((cat) => (
          <ChannelSection key={cat.title} {...cat} />
        ))}
        <ServiceCards kakao={contact.kakao} />
        <a
          href={coupang.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between px-5 py-4 mb-8 bg-orange-50 border-2 border-orange-200 rounded-lg hover:bg-orange-100 active:scale-95 transition-all shadow-sm"
        >
          <div className="flex flex-col">
            <span className="font-semibold text-orange-700">🛒 {coupang.label}</span>
            <span className="text-xs text-orange-400 mt-1">{coupang.disclosure}</span>
          </div>
          <span className="text-orange-400 text-lg ml-3">›</span>
        </a>
      </div>
    </div>
  )
}
