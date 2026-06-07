import { CheckCircle2, MessageCircle } from "lucide-react";
import type { ProblemCard } from "../../../data/social-proof";
import { FOOTER_CONTACT } from "../../../data/footer";

interface ProblemCardProps {
  card: ProblemCard;
}

export function ProblemCard({ card }: ProblemCardProps) {
  const Icon = card.icon;

  const openWhatsApp = () => {
    const text = encodeURIComponent(card.whatsappMessage);
    window.open(`${FOOTER_CONTACT.whatsappHref}?text=${text}`, "_blank", "noopener,noreferrer");
  };

  return (
    <button
      onClick={openWhatsApp}
      className={`text-left bg-[#0d1c35] border border-white/10 rounded-2xl p-6 ${card.hoverBorderColor} hover:bg-[#112040] transition-all duration-200 hover:-translate-y-1 group w-full`}
    >
      {/* Icon */}
      <div className={`w-12 h-12 rounded-xl ${card.iconBg} flex items-center justify-center mb-4`}>
        <Icon className={`w-6 h-6 ${card.iconColor}`} />
      </div>

      {/* Title */}
      <h3 className={`text-xl font-semibold mb-2 ${card.titleColor}`}>{card.title}</h3>

      {/* Description */}
      <p className="text-slate-400 text-sm leading-relaxed mb-4">{card.description}</p>

      {/* Items list */}
      <ul className="space-y-1.5 mb-5">
        {card.items.map((item) => (
          <li key={item.text} className="flex items-center gap-2">
            <CheckCircle2 className={`w-3.5 h-3.5 shrink-0 ${card.checkColor}`} />
            <span className="text-slate-300 text-sm">{item.text}</span>
          </li>
        ))}
      </ul>

      {/* Hover CTA */}
      <div className={`flex items-center gap-1.5 text-sm font-medium ${card.checkColor} opacity-0 group-hover:opacity-100 transition-opacity duration-200`}>
        <MessageCircle className="w-4 h-4" />
        Resolver via WhatsApp
      </div>
    </button>
  );
}
