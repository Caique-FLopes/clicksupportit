import type { ReactNode } from "react";

interface SectionBadgeProps {
  children: ReactNode;
  color?: "blue" | "green";
  icon?: ReactNode;
}

export function SectionBadge({ children, color = "blue", icon }: SectionBadgeProps) {
  const colorClass =
    color === "green"
      ? "bg-green-500/15 border-green-400/30 text-green-300"
      : "bg-blue-500/15 border-blue-400/30 text-blue-300";

  return (
    <div className={`inline-flex items-center gap-2 ${colorClass} border rounded-full px-4 py-1.5`}>
      {icon}
      <span className="text-sm font-medium">{children}</span>
    </div>
  );
}
