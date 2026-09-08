import { Cctv, Volume2, Wifi, Monitor, ShieldCheck } from 'lucide-react'

const AREA_ICONS = { cctv: Cctv, speaker: Volume2, network: Wifi, pc: Monitor }

export default function ServiceGuide({ intro, areas, principles, target }) {
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
