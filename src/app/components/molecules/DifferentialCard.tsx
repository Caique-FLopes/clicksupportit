import type { LucideIcon } from "lucide-react";

interface DifferentialCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  highlight: string;
  index: number;
}

export function DifferentialCard({
  icon: Icon,
  title,
  description,
  highlight,
  index,
}: DifferentialCardProps) {
  return (
    <div className="relative bg-[#0a1628] border border-white/10 rounded-2xl p-8 hover:border-blue-500/40 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 group overflow-hidden">
      <div className="absolute -right-4 -bottom-4 text-[120px] font-black text-white/3 leading-none select-none">
        {String(index + 1).padStart(2, "0")}
      </div>
      <div className="relative">
        <div className="flex items-start gap-5">
          <div
            className={`w-14 h-14 rounded-xl ${highlight} bg-opacity-20 border border-white/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300`}
          >
            <Icon className="w-7 h-7 text-white" />
          </div>
          <div>
            <h3 className="text-white font-semibold text-lg mb-2">{title}</h3>
            <p className="text-slate-400 leading-relaxed">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
