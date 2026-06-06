import type { ReactNode } from "react";

interface AnimatedBadgeProps {
  children: ReactNode;
  dotColor?: string;
  textColor?: string;
  bgClass?: string;
  borderClass?: string;
}

export function AnimatedBadge({
  children,
  dotColor = "bg-blue-400",
  textColor = "text-blue-300",
  bgClass = "bg-blue-500/15",
  borderClass = "border-blue-400/30",
}: AnimatedBadgeProps) {
  return (
    <div
      className={`inline-flex items-center gap-2 ${bgClass} border ${borderClass} rounded-full px-4 py-2`}
    >
      <div className={`w-2 h-2 rounded-full ${dotColor} animate-pulse`} />
      <span className={`${textColor} text-sm font-medium`}>{children}</span>
    </div>
  );
}
