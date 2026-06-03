import ProfileHeader from './components/ProfileHeader'
import ChannelSection from './components/ChannelSection'
import { PhoneEmailButtons, ServiceCards } from './components/ContactButtons'
import { profile, categories, contact, coupang } from './data/channelData'

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-md mx-auto px-4 pb-12 space-y-6">
        <ProfileHeader {...profile} />
        <ServiceCards kakao={contact.kakao} />
        <PhoneEmailButtons phone={contact.phone} email={contact.email} />
        {categories.map((cat) => (
          <ChannelSection key={cat.title} {...cat} />
        ))}
        <a
          href={coupang.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between px-5 py-4 bg-orange-50 border-2 border-orange-200 rounded-xl hover:bg-orange-100 active:scale-95 transition-all shadow-sm"
        >
          <div className="flex flex-col">
            <span className="font-semibold text-orange-700 text-sm">🛒 {coupang.label}</span>
            <span className="text-xs text-orange-400 mt-0.5">{coupang.disclosure}</span>
          </div>
          <span className="text-orange-400 text-xl ml-3">›</span>
        </a>
      </div>
    </div>
  )
}
