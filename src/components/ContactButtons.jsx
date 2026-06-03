import { Phone, Mail } from 'lucide-react'

export default function ContactButtons({ phone, kakao, email }) {
  return (
    <div className="flex flex-col gap-3 pt-4 pb-8">
      <div className="flex gap-3">
        <a
          href={`tel:${phone}`}
          className="flex-1 flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold py-4 rounded-lg transition-colors text-lg"
        >
          <Phone size={20} />
          전화 문의
        </a>
        <a
          href={`mailto:${email}`}
          className="flex-1 flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-900 text-white font-medium py-4 rounded-lg transition-colors"
        >
          <Mail size={18} />
          이메일 문의
        </a>
      </div>
      <a
        href={kakao}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col px-5 py-4 bg-orange-50 border-2 border-orange-300 rounded-lg hover:bg-orange-100 transition-colors"
      >
        <span className="font-semibold text-orange-700">🆕 프로필 링크 페이지 — 새로 만들었어요</span>
        <span className="text-sm text-gray-500 mt-1">지금 보고 계신 이 페이지예요 · AI로 10분 만에 만들었습니다</span>
        <span className="mt-3 text-sm font-medium text-orange-600">사장님 것도 만들어드려요 →</span>
      </a>
      <a
        href={kakao}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col px-5 py-4 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
      >
        <span className="font-semibold text-gray-800">🔧 CCTV·방송음향 시공 문의</span>
        <span className="text-sm text-gray-500 mt-1">현장 기준으로 진단하고 견적드립니다</span>
      </a>
    </div>
  )
}
