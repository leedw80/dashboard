import { MessageCircle, Mail } from 'lucide-react'

export default function ContactButtons({ kakao, email }) {
  return (
    <div className="flex gap-3 pt-4 pb-8">
      <a
        href={kakao}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-medium py-3 rounded-lg transition-colors"
      >
        <MessageCircle size={18} />
        카카오톡 문의
      </a>
      <a
        href={`mailto:${email}`}
        className="flex-1 flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-900 text-white font-medium py-3 rounded-lg transition-colors"
      >
        <Mail size={18} />
        이메일 문의
      </a>
    </div>
  )
}
