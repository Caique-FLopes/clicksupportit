import { ShieldCheck } from "lucide-react";
import { SectionBadge } from "../atoms/SectionBadge";
import { TrustCard } from "../molecules/TrustCard";
import { TRUST_ITEMS } from "../../../data/trust";

export function TrustBadges() {
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
      </div>
    </section>
  );
}
