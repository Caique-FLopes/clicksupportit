import { ArrowRight } from "lucide-react";
import { SectionBadge } from "../atoms/SectionBadge";
import { ServiceCard } from "../molecules/ServiceCard";
import { SERVICES } from "../../../data/services";

export function Services() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="servicos" className="py-24 bg-[#0a1628]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <SectionBadge>O que resolvemos</SectionBadge>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 mt-4">
            Principais Serviços
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Soluções completas de suporte remoto. Clique no serviço que melhor descreve seu problema.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {SERVICES.map((service) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
              bg={service.bg}
              border={service.border}
              iconColor={service.iconColor}
              tags={service.tags}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <button
            onClick={() => handleScroll("#contato")}
            className="inline-flex items-center gap-2 bg-[#155dfc] hover:bg-[#1a6aff] text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 shadow-[0px_8px_20px_rgba(21,93,252,0.3)] hover:-translate-y-0.5"
          >
            Solicitar Orçamento Gratuito
            <ArrowRight className="w-5 h-5" />
          </button>
          <p className="text-slate-500 text-sm mt-3">Sem compromisso · Resposta em até 24h</p>
        </div>
      </div>
    </section>
  );
}
