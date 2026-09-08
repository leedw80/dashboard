import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import ChannelSection from './ChannelSection'
import { PhoneEmailButtons } from './ContactButtons'

export default function ChannelAccordion({ categories, contact }) {
  const [open, setOpen] = useState(true)

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
          {contact && (
            <PhoneEmailButtons phone={contact.phone} email={contact.email} />
          )}
          {categories.map((cat) => (
            <ChannelSection key={cat.title} {...cat} />
          ))}
        </div>
      )}
    </div>
  )
}
