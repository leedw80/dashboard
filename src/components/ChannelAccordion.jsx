import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import ChannelSection from './ChannelSection'

export default function ChannelAccordion({ categories }) {
  const [open, setOpen] = useState(false)

  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className="w-full min-h-[48px] bg-white border-[1.5px] border-slate-200 rounded-[14px] flex items-center justify-between px-[18px] text-sm font-bold text-gray-700"
      >
        채널 전체 보기
        <ChevronDown size={18} className={`transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div className="flex flex-col gap-5 pt-5">
          {categories.map((cat) => (
            <ChannelSection key={cat.title} {...cat} />
          ))}
        </div>
      )}
    </div>
  )
}
