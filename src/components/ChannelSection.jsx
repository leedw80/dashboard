import ChannelCard from './ChannelCard'

export default function ChannelSection({ title, channels }) {
  return (
    <section>
      <h2 className="text-[11px] font-bold text-slate-400 tracking-wide uppercase mb-2 pl-1">{title}</h2>
      <div className="grid grid-cols-2 gap-2">
        {channels.map((channel) => (
          <ChannelCard key={channel.name} {...channel} />
        ))}
      </div>
    </section>
  )
}
