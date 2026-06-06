import { ArrowRight } from "lucide-react";
import { SectionBadge } from "../atoms/SectionBadge";
import { StepCard } from "../molecules/StepCard";
import { PROCESS_STEPS } from "../../../data/process";

export function HowItWorks() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="como-funciona" className="py-24 bg-[#0d1c35]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <SectionBadge>Processo Simples</SectionBadge>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 mt-4">
            Como Funciona
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Processo simples para resolver seu problema rapidamente.
          </p>
        </div>

        {/* Steps grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {PROCESS_STEPS.map((step, index) => (
            <StepCard
              key={step.number}
              number={step.number}
              icon={step.icon}
              title={step.title}
              description={step.description}
              showConnector={index < PROCESS_STEPS.length - 1}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <button
            onClick={() => handleScroll("#contato")}
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 shadow-lg shadow-blue-600/30 hover:shadow-blue-500/40 hover:-translate-y-0.5"
          >
            Solicitar Atendimento
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
