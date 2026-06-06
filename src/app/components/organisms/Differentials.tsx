import { ArrowRight } from "lucide-react";
import { SectionBadge } from "../atoms/SectionBadge";
import { DifferentialCard } from "../molecules/DifferentialCard";
import { DIFFERENTIALS } from "../../../data/differentials";

export function Differentials() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-24 bg-[#0d1c35]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <SectionBadge>Nossos Diferenciais</SectionBadge>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 mt-4">
            Por que escolher nosso suporte?
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Combinamos tecnologia, experiência e atendimento humanizado para oferecer o melhor suporte.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 gap-6 mb-12">
          {DIFFERENTIALS.map((item, index) => (
            <DifferentialCard
              key={item.title}
              icon={item.icon}
              title={item.title}
              description={item.description}
              highlight={item.highlight}
              index={index}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <button
            onClick={() => handleScroll("#contato")}
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 shadow-xl shadow-blue-600/30 hover:shadow-blue-500/40 hover:-translate-y-0.5"
          >
            Solicitar Suporte Agora
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
