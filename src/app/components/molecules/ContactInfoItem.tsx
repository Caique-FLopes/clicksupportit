import { CheckCircle2 } from "lucide-react";

interface ContactInfoItemProps {
  label: string;
  detail: string;
}

export function ContactInfoItem({ label, detail }: ContactInfoItemProps) {
  return (
    <div className="flex items-start gap-3">
      <CheckCircle2 className="w-5 h-5 text-green-400 mt-0.5 shrink-0" />
      <div>
        <div className="text-white font-medium">{label}</div>
        <div className="text-slate-400 text-sm">{detail}</div>
      </div>
    </div>
  );
}
