import { ArrowRight } from 'lucide-react'
import { Button, Container, SectionLabel } from '@/components/atoms'
import { DifferentialCard } from '@/components/molecules'
import { differentials } from '@/data'

const DifferentialsSection = () => {
  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="differentials"
      className="py-24 bg-[#0a1628]"
      aria-labelledby="differentials-heading"
    >
      <Container>
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <SectionLabel>Nossos Diferenciais</SectionLabel>
          </div>
          <h2
            id="differentials-heading"
            className="text-white font-bold text-[32px] sm:text-[40px] leading-tight"
          >
            Por que escolher nosso suporte?
          </h2>
          <p className="text-[#90a1b9] text-[16px] sm:text-[18px] leading-7 mt-4 max-w-[576px] mx-auto">
            Combinamos tecnologia, experiência e atendimento humanizado para oferecer o melhor suporte remoto.
          </p>
        </div>

        {/* Differentials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {differentials.map((differential) => (
            <DifferentialCard key={differential.id} differential={differential} />
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-16">
          <Button
            variant="primary"
            size="lg"
            onClick={scrollToContact}
            aria-label="Solicitar Suporte Agora — ir para formulário de contato"
          >
            Solicitar Suporte Agora
            <ArrowRight size={20} aria-hidden="true" />
          </Button>
        </div>
      </Container>
    </section>
  )
}

export { DifferentialsSection }
