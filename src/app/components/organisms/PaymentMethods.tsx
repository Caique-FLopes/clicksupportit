import { CheckCircle2, ArrowRight, CreditCard, Zap, Building2, Globe, ShieldCheck } from "lucide-react";
import { SectionBadge } from "../atoms/SectionBadge";
import { PAYMENT_HIGHLIGHTS, PAYMENT_METHODS } from "../../../data/payments";

const METHOD_ICONS: Record<string, React.ReactNode> = {
  PayPal: <CreditCard className="w-5 h-5 text-blue-400" />,
  Wise: <Globe className="w-5 h-5 text-green-400" />,
  "Cartão Internacional": <CreditCard className="w-5 h-5 text-slate-300" />,
  PIX: <Zap className="w-5 h-5 text-yellow-400" />,
  "Transferência Bancária": <Building2 className="w-5 h-5 text-purple-400" />,
  "Pague somente após aprovação": <ShieldCheck className="w-5 h-5 text-green-400" />,
};

export function PaymentMethods() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const regularMethods = PAYMENT_METHODS.filter((m) => !m.highlighted);
  const highlightedMethod = PAYMENT_METHODS.find((m) => m.highlighted);

  return (
    <section id="pagamentos" className="py-24 bg-[#0a1628]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — copy */}
          <div className="space-y-6">
            <SectionBadge color="green">
              <CreditCard className="w-3.5 h-3.5 inline-block mr-1 -mt-0.5" />
              Formas de Pagamento
            </SectionBadge>
            <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
              Pague do jeito que preferir
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              Aceitamos múltiplas formas de pagamento internacionais, para que brasileiros no exterior
              possam pagar sem complicações, independente do país onde moram.
            </p>

            <ul className="space-y-3">
              {PAYMENT_HIGHLIGHTS.map((h) => (
                <li key={h} className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-green-400 shrink-0" />
                  <span className="text-slate-300 text-sm">{h}</span>
                </li>
              ))}
            </ul>

            <button
              onClick={() => handleScroll("#contato")}
              className="inline-flex items-center gap-2 bg-[#155dfc] hover:bg-[#1a6aff] text-white px-6 py-3.5 rounded-xl font-semibold transition-all duration-200 shadow-[0px_4px_12px_rgba(21,93,252,0.3)] hover:-translate-y-0.5"
            >
              Ver Preços e Planos
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Right — payment methods grid */}
          <div className="space-y-3">
            <div className="grid sm:grid-cols-2 gap-3">
              {regularMethods.map((method) => (
                <div
                  key={method.name}
                  className="bg-[#0d1c35] border border-white/10 rounded-xl px-4 py-4 flex items-center gap-3"
                >
                  <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                    {METHOD_ICONS[method.name]}
                  </div>
                  <div>
                    <p className="text-white text-sm font-medium">{method.name}</p>
                    <p className="text-slate-500 text-xs">{method.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Highlighted method */}
            {highlightedMethod && (
              <div className="rounded-xl px-4 py-4 flex items-center gap-3 bg-gradient-to-r from-[#00a63e]/20 via-[#00d3a0]/10 to-[#005c22]/20 border border-green-500/30">
                <div className="w-9 h-9 rounded-lg bg-green-500/15 border border-green-500/30 flex items-center justify-center shrink-0">
                  {METHOD_ICONS[highlightedMethod.name]}
                </div>
                <div>
                  <p className="text-green-400 text-sm font-semibold">{highlightedMethod.name}</p>
                  <p className="text-slate-300 text-xs leading-relaxed">
                    {highlightedMethod.description}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
