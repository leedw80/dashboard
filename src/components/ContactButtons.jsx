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

export function ServiceCards({ kakao }) {
  return (
    <div className="flex flex-col gap-3">
      <a
        href={kakao}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col rounded-[18px] px-[22px] pt-5 pb-[18px] no-underline active:scale-[0.98] transition-transform"
        style={{ background: 'linear-gradient(150deg, #1d4ed8 0%, #2563eb 60%, #3b82f6 100%)' }}
      >
        <span className="text-lg font-extrabold text-white leading-tight mb-2.5">
          🔧 CCTV·방송·통신 시공 문의
        </span>
        <span className="text-sm text-white/85 leading-relaxed">
          새로 설치하실 때는 방문해서 무료로 견적 내드려요. 고장은 방문 비용을 먼저 알려드리고,
          괜찮으시면 방문해서 원인을 봐요 — 고쳐서 되면 고치고, 안 되면 교체로 안내해드려요.
        </span>
        <div className="bg-black/20 rounded-xl px-4 py-3 mt-3.5">
          <span className="text-[15px] font-extrabold text-white leading-snug">
            상황만 말씀해주시면 어떻게 진행되는지 안내해드려요
          </span>
        </div>
      </a>
    </div>
  )
}
