import { Phone, Mail, MessageCircle } from 'lucide-react'

export function PhoneEmailButtons({ phone, kakao, email }) {
  return (
    <div className="grid grid-cols-2 gap-2.5">
      <a
        href={`tel:${phone}`}
        className="flex items-center justify-center gap-2 min-h-14 bg-green-600 hover:brightness-95 text-white font-bold rounded-[14px] transition-all text-[15px]"
      >
        <Phone size={18} />
        전화 문의
      </a>
      {kakao && (
        <a
          href={kakao}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 min-h-14 bg-[#FEE500] hover:brightness-95 text-[#191919] font-bold rounded-[14px] transition-all text-[15px]"
        >
          <MessageCircle size={18} />
          카카오톡 문의
        </a>
      )}
      <a
        href={`mailto:${email}`}
        className={`flex items-center justify-center gap-2 min-h-14 bg-gray-800 hover:brightness-110 text-white font-bold rounded-[14px] transition-all text-[15px] ${kakao ? 'col-span-2' : ''}`}
      >
        <Mail size={16} />
        이메일 문의
      </a>
    </div>
  )
}
