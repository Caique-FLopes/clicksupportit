interface StatCardProps {
  value: string;
  label: string;
  valueColor?: string;
  className?: string;
}

export function StatCard({
  value,
  label,
  valueColor = "text-white",
  className = "",
}: StatCardProps) {
  return (
    <div
      className={`bg-[#0f2040] border border-white/10 rounded-xl px-5 py-4 shadow-xl ${className}`}
    >
      <div className={`text-2xl font-bold ${valueColor}`}>{value}</div>
      <div className="text-slate-400 text-xs mt-0.5">{label}</div>
    </div>
  );
}
