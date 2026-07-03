import ProfileHeader from './components/ProfileHeader'
import ChannelAccordion from './components/ChannelAccordion'
import { PhoneEmailButtons, ServiceCards } from './components/ContactButtons'
import { profile, categories, contact, coupang } from './data/channelData'

export default function App() {
  return (
    <div className="min-h-screen bg-slate-100">
      <div className="max-w-md mx-auto px-4 pb-12 space-y-4">
        <ProfileHeader {...profile} />
        <ServiceCards kakao={contact.kakao} />
        <PhoneEmailButtons phone={contact.phone} email={contact.email} />
        <ChannelAccordion categories={categories} />
        <a
          href={coupang.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-1 rounded-[14px] px-5 py-4 no-underline active:scale-[0.98] transition-transform"
          style={{ background: 'linear-gradient(135deg, #c2410c, #ea580c)' }}
        >
          <span className="text-[15px] font-bold text-white">🛒 {coupang.label}</span>
          <span className="text-xs text-white/80">{coupang.disclosure}</span>
        </a>
      </div>
    </div>
  )
}
