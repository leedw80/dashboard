import { Phone, Mail } from 'lucide-react'

export function PhoneEmailButtons({ phone, email }) {
  return (
    <div className="grid grid-cols-2 gap-2.5">
      <a
        href={`tel:${phone}`}
        className="flex items-center justify-center gap-2 min-h-14 bg-green-600 hover:brightness-95 text-white font-bold rounded-[14px] transition-all text-[15px]"
      >
        <Phone size={18} />
        전화 문의
      </a>
      <a
        href={`mailto:${email}`}
        className="flex items-center justify-center gap-2 min-h-14 bg-gray-800 hover:brightness-110 text-white font-bold rounded-[14px] transition-all text-[15px]"
      >
        <Mail size={16} />
        이메일 문의
      </a>
    </div>
  )
}
