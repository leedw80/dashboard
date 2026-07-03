import { Music2, Play, Camera, AtSign, Notebook, Carrot, MapPin, GitBranch } from 'lucide-react'

const ICONS = {
  music2: Music2,
  play: Play,
  camera: Camera,
  'at-sign': AtSign,
  notebook: Notebook,
  carrot: Carrot,
  'map-pin': MapPin,
  github: GitBranch,
}

function ChannelIcon({ icon }) {
  if (icon === 'n' || icon === 'f') {
    return <span className="text-[15px] font-extrabold leading-none">{icon.toUpperCase()}</span>
  }
  const Icon = ICONS[icon]
  return Icon ? <Icon size={18} strokeWidth={2.25} /> : null
}

export default function ChannelCard({ name, url, color, gradient, textColor, icon, full }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center gap-2.5 min-h-[54px] px-4 rounded-[13px] text-sm font-bold active:scale-95 transition-all ${full ? 'col-span-2 justify-center' : ''}`}
      style={{ background: gradient || color, color: textColor || 'white' }}
    >
      <ChannelIcon icon={icon} />
      {name}
    </a>
  )
}
