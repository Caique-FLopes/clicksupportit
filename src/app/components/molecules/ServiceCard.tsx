import type { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  bg: string;
  border: string;
  iconColor: string;
}

export function ServiceCard({
  icon: Icon,
  title,
  description,
  bg,
  border,
  iconColor,
}: ServiceCardProps) {
  return (
    <div
      className={`relative bg-[#0d1c35] border ${border} rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group cursor-default`}
    >
      <div
        className={`w-12 h-12 rounded-xl ${bg} border ${border} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
      >
        <Icon className={`w-6 h-6 ${iconColor}`} />
      </div>
      <h3 className="text-white font-semibold mb-2 text-base">{title}</h3>
      <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
    </div>
  );
}
