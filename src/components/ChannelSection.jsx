import ChannelCard from './ChannelCard'

export default function ChannelSection({ title, icon, channels }) {
  return (
    <section className="space-y-3">
      <h2 className="text-base font-bold text-gray-600 tracking-wide uppercase">{icon} {title}</h2>
      <div className="grid grid-cols-2 gap-2.5">
        {channels.map((channel) => (
          <ChannelCard key={channel.name} {...channel} />
        ))}
      </div>
    </section>
  )
}
