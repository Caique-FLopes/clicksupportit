import { ShieldCheck } from 'lucide-react'
import { Container, SectionLabel } from '@/components/atoms'
import { TrustCard } from '@/components/molecules'
import { trustItems } from '@/data'

const TrustSection = () => {
  return (
    <section
      id="trust"
      className="py-24 bg-[#0a1628]"
      aria-labelledby="trust-heading"
    >
      <Container>
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <SectionLabel icon={<ShieldCheck size={16} aria-hidden="true" />}>
              Segurança &amp; Confiança
            </SectionLabel>
          </div>
          <h2
            id="trust-heading"
            className="text-white font-bold text-[32px] sm:text-[40px] leading-tight"
          >
            Atendimento Seguro e Confiável
          </h2>
          <p className="text-[#90a1b9] text-[16px] sm:text-[18px] leading-7 mt-4 max-w-[576px] mx-auto">
            Cada atendimento segue padrões rigorosos de segurança e profissionalismo para garantir sua tranquilidade.
          </p>
        </div>

        {/* Trust grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trustItems.map((trust) => (
            <TrustCard key={trust.id} trust={trust} />
          ))}
        </div>
      </Container>
    </section>
  )
}

export { TrustSection }
