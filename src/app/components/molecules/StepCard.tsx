import type { LucideIcon } from "lucide-react";
import { IconBox } from "../atoms/IconBox";

interface StepCardProps {
  number: string;
  icon: LucideIcon;
  title: string;
  description: string;
  showConnector?: boolean;
}

export function StepCard({
  number,
  icon,
  title,
  description,
  showConnector = false,
}: StepCardProps) {
  return (
    <div className="relative">
      {showConnector && (
        <div className="hidden lg:block absolute top-10 left-full w-full h-px bg-gradient-to-r from-blue-500/50 to-transparent z-0 -translate-x-6" />
      )}
      <div className="relative bg-[#0a1628] border border-white/10 rounded-2xl p-6 hover:border-blue-500/40 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 group h-full">
        <div className="absolute -top-3 left-6 bg-blue-600 text-white text-xs font-bold px-2.5 py-1 rounded-full">
          {number}
        </div>
        <IconBox
          icon={icon}
          className="mb-5 group-hover:bg-blue-500/25 transition-colors"
        />
        <h3 className="text-white font-semibold mb-2">{title}</h3>
        <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
