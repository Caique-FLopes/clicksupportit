import type { LucideIcon } from "lucide-react";

interface IconBoxProps {
  icon: LucideIcon;
  bg?: string;
  border?: string;
  iconColor?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function IconBox({
  icon: Icon,
  bg = "bg-blue-500/15",
  border = "border-blue-400/20",
  iconColor = "text-blue-400",
  size = "md",
  className = "",
}: IconBoxProps) {
  const sizeClass =
    size === "sm" ? "w-9 h-9" : size === "lg" ? "w-14 h-14" : "w-12 h-12";
  const iconSizeClass =
    size === "sm" ? "w-4 h-4" : size === "lg" ? "w-7 h-7" : "w-6 h-6";

  return (
    <div
      className={`${sizeClass} rounded-xl ${bg} border ${border} flex items-center justify-center ${className}`}
    >
      <Icon className={`${iconSizeClass} ${iconColor}`} />
    </div>
  );
}
