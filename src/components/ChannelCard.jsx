export default function ChannelCard({ name, url, color }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center px-3 py-3.5 rounded-xl text-white font-semibold text-sm text-center leading-tight active:scale-95 transition-all shadow-sm"
      style={{ backgroundColor: color }}
    >
      {name}
    </a>
  )
}
