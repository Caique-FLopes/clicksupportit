import type { LucideIcon } from "lucide-react";
import { IconBox } from "../atoms/IconBox";

interface TrustCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function TrustCard({ icon, title, description }: TrustCardProps) {
  return (
    <div className="relative bg-[#0a1628] border border-white/10 rounded-2xl p-6 flex gap-4 items-start hover:border-green-500/30 hover:shadow-lg hover:shadow-green-500/5 transition-all duration-300 group">
      <IconBox
        icon={icon}
        size="lg"
        bg="bg-gradient-to-br from-green-500/20 to-green-600/10"
        border="border-green-400/20"
        iconColor="text-green-400"
        className="shrink-0 group-hover:scale-105 transition-transform duration-300"
      />
      <div>
        <h3 className="text-white font-semibold mb-1.5">{title}</h3>
        <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
      </div>
      <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-green-400 opacity-60" />
    </div>
  );
}
