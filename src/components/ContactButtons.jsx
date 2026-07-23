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
          🔧 CCTV·방송음향 시공 문의
        </span>
        <span className="text-sm text-white/85 leading-relaxed">
          신규 설치: 무료 방문 견적
          <br />
          AS·점검: 비용 안내 후 방문
        </span>
        <div className="bg-black/20 rounded-xl px-4 py-3 mt-3.5">
          <span className="text-[15px] font-extrabold text-white leading-snug">
            상황 말씀해주시면 안내해드려요
          </span>
        </div>
      </a>

      <a
        href={kakao}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col rounded-[20px] px-[22px] pt-6 pb-5 no-underline animate-cta-pulse active:scale-[0.98] transition-transform"
        style={{ background: 'linear-gradient(150deg, #ea580c 0%, #f97316 60%, #fb923c 100%)' }}
      >
        <span className="text-xl font-extrabold text-white leading-tight mb-3">
          🆕 콘텐츠도 AI로 직접 만들어요
        </span>
        <span className="text-sm text-white/85 leading-relaxed">
          기술은 있는데 채널은 막막하신 사장님,
          <br />
          저도 그랬어요 — 지금은 AI로 직접 만듭니다
        </span>
        <div className="bg-black/20 rounded-xl px-4 py-3 mt-3.5">
          <span className="text-[15px] font-extrabold text-white leading-snug">
            사장님 것도 첫 영상 무료로 만들어드려요
          </span>
        </div>
      </a>
    </div>
  )
}
