export default function ChannelCard({ name, url, color }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center px-4 py-3 rounded-lg text-white font-medium text-sm hover:opacity-80 transition-opacity"
      style={{ backgroundColor: color }}
    >
      {name}
    </a>
  )
}
