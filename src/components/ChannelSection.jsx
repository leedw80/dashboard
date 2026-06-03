import ChannelCard from './ChannelCard'

export default function ChannelSection({ title, icon, channels }) {
  return (
    <section className="space-y-3">
      <h2 className="text-lg font-semibold text-gray-700">{icon} {title}</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {channels.map((channel) => (
          <ChannelCard key={channel.name} {...channel} />
        ))}
      </div>
    </section>
  )
}
