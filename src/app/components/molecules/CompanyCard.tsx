import { Building2 } from "lucide-react";

interface CompanyCardProps {
  name: string;
  initials: string;
  colorClass: string;
}

export function CompanyCard({ name, initials, colorClass }: CompanyCardProps) {
  return (
    <div
      className={`flex items-center gap-3 bg-gradient-to-br ${colorClass} border rounded-xl px-5 py-3.5 shrink-0`}
    >
      <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center">
        <span className="text-xs font-bold">{initials}</span>
      </div>
      <div>
        <Building2 className="w-3 h-3 opacity-50 mb-0.5" />
        <span className="text-sm font-semibold whitespace-nowrap">{name}</span>
      </div>
    </div>
  );
}
