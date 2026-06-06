import { useRef } from 'react'
import { Container, SectionLabel } from '@/components/atoms'
import { CompanyLogo } from '@/components/molecules'
import { companies } from '@/data'

const CompaniesSection = () => {
  const trackRef = useRef<HTMLDivElement>(null)

  // Duplicate list for seamless loop
  const doubled = [...companies, ...companies]

  return (
    <section
      id="companies"
      className="py-24 bg-[#060e1e]"
      aria-labelledby="companies-heading"
    >
      <Container>
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <SectionLabel>Clientes &amp; Parceiros</SectionLabel>
          </div>
          <h2
            id="companies-heading"
            className="text-white font-bold text-[32px] sm:text-[40px] leading-tight"
          >
            Empresas que Confiam em Nosso Trabalho
          </h2>
          <p className="text-[#90a1b9] text-[16px] sm:text-[18px] leading-7 mt-4 max-w-[576px] mx-auto">
            Atendemos empresas de diferentes segmentos com excelência e comprometimento.
          </p>
        </div>
      </Container>

      {/* Marquee */}
      <div
        className="relative overflow-hidden mt-4"
        aria-label="Carrossel de logos de empresas clientes"
      >
        {/* Fade edges */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#060e1e] to-transparent z-10 pointer-events-none" aria-hidden="true" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#060e1e] to-transparent z-10 pointer-events-none" aria-hidden="true" />

        <div
          ref={trackRef}
          className="flex gap-4 animate-marquee hover:[animation-play-state:paused] w-max"
          aria-hidden="true"
        >
          {doubled.map((company, index) => (
            <CompanyLogo key={`${company.id}-${index}`} company={company} />
          ))}
        </div>
      </div>
    </section>
  )
}

export { CompaniesSection }
