import ProfileHeader from './components/ProfileHeader'
import ChannelSection from './components/ChannelSection'
import ContactButtons from './components/ContactButtons'
import { profile, categories, contact } from './data/channelData'

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-2xl mx-auto px-6 space-y-8">
        <ProfileHeader {...profile} />
        {categories.map((cat) => (
          <ChannelSection key={cat.title} {...cat} />
        ))}
        <ContactButtons {...contact} />
      </div>
    </div>
  )
}
