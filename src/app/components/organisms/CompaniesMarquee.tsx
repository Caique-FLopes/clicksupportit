import { SectionBadge } from "../atoms/SectionBadge";
import { CompanyCard } from "../molecules/CompanyCard";
import { COMPANIES, COMPANY_COLORS } from "../../../data/companies";

export function CompaniesMarquee() {
  const doubled = [...COMPANIES, ...COMPANIES];

  return (
    <section id="empresas" className="py-24 bg-[#0a1628] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-center">
          <SectionBadge>Clientes &amp; Parceiros</SectionBadge>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 mt-4">
            Empresas que Confiam em Nosso Trabalho
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Atendemos empresas de diferentes segmentos com excelência e profissionalismo.
          </p>
        </div>
      </div>

      {/* Marquee wrapper */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0a1628] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0a1628] to-transparent z-10 pointer-events-none" />

        {/* Track */}
        <div className="flex gap-4 w-max animate-[marquee_28s_linear_infinite]">
          {doubled.map((company, i) => (
            <CompanyCard
              key={`${company.name}-${i}`}
              name={company.name}
              initials={company.initials}
              colorClass={COMPANY_COLORS[i % COMPANY_COLORS.length]}
            />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
