import { ShieldCheck, ArrowRight, Clock, FileText, Monitor, Globe } from "lucide-react";
import { SectionBadge } from "../atoms/SectionBadge";
import { TrustCard } from "../molecules/TrustCard";
import { TRUST_ITEMS } from "../../../data/trust";

const SLA_ITEMS = [
  {
    badge: "Garantido",
    badgeColor: "bg-blue-500/20 text-blue-300 border-blue-500/30",
    icon: Clock,
    iconColor: "text-[#155dfc]",
    value: "até 2h úteis",
    valueColor: "text-[#155dfc]",
    label: "Primeira Resposta",
    description: "Respondemos sua solicitação em até 2 horas úteis após o recebimento.",
  },
  {
    badge: "Gratuito",
    badgeColor: "bg-green-500/20 text-green-300 border-green-500/30",
    icon: FileText,
    iconColor: "text-[#00d3a0]",
    value: "até 24h",
    valueColor: "text-[#00d3a0]",
    label: "Orçamento",
    description: "Enviamos o orçamento completo em até 24 horas após análise do problema.",
  },
  {
    badge: "Flexível",
    badgeColor: "bg-purple-500/20 text-purple-300 border-purple-500/30",
    icon: Monitor,
    iconColor: "text-[#c084fc]",
    value: "sob agendamento",
    valueColor: "text-[#c084fc]",
    label: "Atendimento Remoto",
    description: "Realizamos o atendimento em horário combinado, com acesso remoto seguro.",
  },
];

export function TrustBadges() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-24 bg-gradient-to-b from-[#0d1c35] to-[#0a1628]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <SectionBadge color="green" icon={<ShieldCheck className="w-4 h-4 text-green-400" />}>
            Segurança &amp; Confiança
          </SectionBadge>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 mt-4">
            Atendimento Seguro e Confiável
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Cada atendimento segue padrões rigorosos de segurança e profissionalismo.
          </p>
        </div>

        {/* Badge grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TRUST_ITEMS.map((item) => (
            <TrustCard
              key={item.title}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>

        {/* SLA sub-section */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <SectionBadge>
              <Clock className="w-3.5 h-3.5 inline-block mr-1 -mt-0.5" />
              Tempo de Resposta (SLA)
            </SectionBadge>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 mt-4">
              Nosso compromisso com você
            </h2>
            <p className="text-slate-400 text-lg max-w-xl mx-auto">
              Sabemos que problemas de TI impactam sua produtividade. Por isso, garantimos tempos de
              resposta claros e previsíveis.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-5 mb-8">
            {SLA_ITEMS.map((item, i) => {
              const Icon = item.icon;
              const iconBgClass = item.badgeColor.includes('blue')
                ? 'bg-blue-500/10 border-blue-500/20'
                : item.badgeColor.includes('green')
                ? 'bg-green-500/10 border-green-500/20'
                : 'bg-purple-500/10 border-purple-500/20';
              return (
                <div
                  key={item.label}
                  className="bg-[#0d1c35] border border-white/10 rounded-2xl pt-10 pb-7 px-6 relative flex flex-col items-center text-center"
                >
                  {/* Badge — top center */}
                  <span
                    className={`absolute -top-3.5 left-1/2 -translate-x-1/2 text-xs font-medium px-3 py-1 rounded-full border whitespace-nowrap ${item.badgeColor}`}
                  >
                    {item.badge}
                  </span>

                  {/* Icon with bg + border */}
                  <div className={`w-14 h-14 rounded-2xl ${iconBgClass} border flex items-center justify-center mb-5`}>
                    <Icon className={`w-7 h-7 ${item.iconColor}`} />
                  </div>

                  <p className={`text-2xl font-bold mb-1 ${item.valueColor}`}>{item.value}</p>
                  <p className="text-white font-semibold mb-3">{item.label}</p>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>

                  {/* Arrow connector (not last) */}
                  {i < SLA_ITEMS.length - 1 && (
                    <ArrowRight className="hidden sm:block absolute -right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-600 z-10" />
                  )}
                </div>
              );
            })}
          </div>

          {/* Bottom banner */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-[#0d1c35] border border-white/10 rounded-2xl px-6 py-5">
            <div className="flex items-center gap-3">
              <Globe className="w-5 h-5 text-slate-400 shrink-0" />
              <div>
                <p className="text-white font-medium text-sm">Atendemos qualquer fuso horário</p>
                <p className="text-slate-400 text-sm">
                  EUA, Europa, Canadá, Austrália, Oriente Médio e mais — sem surpresas de horário.
                </p>
              </div>
            </div>
            <button
              onClick={() => handleScroll("#contato")}
              className="shrink-0 bg-[#155dfc] hover:bg-[#1a6aff] text-white px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-200 shadow-[0px_4px_12px_rgba(21,93,252,0.3)] whitespace-nowrap"
            >
              Solicitar Atendimento Agora
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
