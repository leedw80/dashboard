import { Cctv, Volume2, Wifi, Monitor, ShieldCheck } from 'lucide-react'

const AREA_ICONS = { cctv: Cctv, speaker: Volume2, network: Wifi, pc: Monitor }

export default function ServiceGuide({ intro, areas, extraAreas, modes, principles, target }) {
  return (
    <section className="flex flex-col gap-5 rounded-[18px] bg-white px-[22px] py-6 shadow-sm">
      <div className="flex flex-col gap-2">
        <h2 className="text-base font-extrabold text-gray-900">서비스 안내</h2>
        <p className="text-[13px] leading-relaxed text-gray-500 break-keep">{intro}</p>
      </div>

      <div className="flex flex-col gap-3.5">
        {areas.map(({ icon, title, desc }) => {
          const Icon = AREA_ICONS[icon]
          return (
            <div key={title} className="flex gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-700">
                {Icon && <Icon size={18} strokeWidth={2.25} />}
              </div>
              <div className="flex flex-col gap-0.5 pt-0.5">
                <span className="text-sm font-bold text-gray-900">{title}</span>
                <span className="text-[13px] leading-relaxed text-gray-500 break-keep">{desc}</span>
              </div>
            </div>
          )
        })}
      </div>

      <div className="flex flex-col gap-2 border-t border-slate-100 pt-4">
        <span className="text-xs font-bold text-gray-400">함께 하는 일</span>
        {extraAreas.map(({ icon, title, desc }) => {
          const Icon = AREA_ICONS[icon]
          return (
            <div key={title} className="flex gap-2 text-[13px] leading-relaxed break-keep">
              {Icon && <Icon size={15} className="mt-0.5 shrink-0 text-slate-400" />}
              <span className="text-gray-500">
                <span className="font-bold text-gray-700">{title}</span> · {desc}
              </span>
            </div>
          )
        })}
      </div>

      <div className="flex flex-col gap-2.5">
        <span className="text-sm font-bold text-gray-900">이렇게 맡기실 수 있어요</span>
        <div className="grid grid-cols-2 gap-2">
          {modes.map(({ title, who, how }) => (
            <div key={title} className="flex flex-col gap-1 rounded-xl border border-slate-100 px-3 py-2.5">
              <span className="text-[13px] font-bold text-gray-900">{title}</span>
              <span className="text-xs leading-relaxed text-gray-500 break-keep">{who}</span>
              <span className="text-xs leading-relaxed text-blue-600 break-keep">{how}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-2 rounded-xl bg-slate-50 px-4 py-3.5">
        {principles.map((p) => (
          <div key={p} className="flex gap-2 text-[13px] leading-relaxed text-gray-600 break-keep">
            <ShieldCheck size={15} className="mt-0.5 shrink-0 text-blue-600" />
            <span>{p}</span>
          </div>
        ))}
      </div>

      <p className="text-[13px] leading-relaxed text-gray-500 break-keep">{target}</p>
    </section>
  )
}
