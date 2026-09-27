export type StatCardProps = {
  label: string
  value: number | string
  hint?: string
}

export function StatCard({ label, value, hint }: StatCardProps) {
  return (
    <div
      className="rounded-[10px] border border-[#2d3640] bg-[#1a1f26] px-5 py-[1.1rem]"
    >
      <p className="m-0 text-[0.78rem] font-normal uppercase tracking-[0.06em] text-[#8b97a8]">
        {label}
      </p>
      <p className="m-0 mt-1.5 text-[2rem] font-bold tabular-nums text-[#e8ecf1]">
        {value}
      </p>
      {hint ? (
        <p className="m-0 mt-1 text-xs text-[#8b97a8]">{hint}</p>
      ) : null}
    </div>
  )
}
