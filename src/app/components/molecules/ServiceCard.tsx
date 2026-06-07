import type { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  bg: string;
  border: string;
  iconColor: string;
  tags?: string[];
}

export function ServiceCard({
  icon: Icon,
  title,
  description,
  bg,
  border,
  iconColor,
  tags = [],
}: ServiceCardProps) {
  return (
    <div
      className={`relative bg-[#0d1c35] border ${border} rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group cursor-default`}
    >
      <div
        className={`w-11 h-11 rounded-xl ${bg} border ${border} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
      >
        <Icon className={`w-5 h-5 ${iconColor}`} />
      </div>
      <h3 className="text-white font-semibold mb-2 text-base">{title}</h3>
      <p className="text-slate-400 text-sm leading-relaxed mb-4">{description}</p>
      {tags.length > 0 && (
        <div className="flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <span
              key={tag}
              className={`text-xs px-2 py-0.5 rounded-full border ${bg} ${border} ${iconColor} font-medium`}
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
