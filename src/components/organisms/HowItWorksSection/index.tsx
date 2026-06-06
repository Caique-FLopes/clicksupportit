import { ArrowRight } from 'lucide-react'
import { Button, Container, SectionLabel } from '@/components/atoms'
import { StepCard } from '@/components/molecules'
import { steps } from '@/data'

const HowItWorksSection = () => {
  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="how-it-works"
      className="py-24 bg-[#0a1628]"
      aria-labelledby="how-it-works-heading"
    >
      <Container>
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <SectionLabel>Processo Simples</SectionLabel>
          </div>
          <h2
            id="how-it-works-heading"
            className="text-white font-bold text-[32px] sm:text-[40px] leading-tight"
          >
            Como Funciona
          </h2>
          <p className="text-[#90a1b9] text-[16px] sm:text-[18px] leading-7 mt-4 max-w-[576px] mx-auto">
            Processo simples para resolver seu problema rapidamente.
          </p>
        </div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, index) => (
            <StepCard key={step.id} step={step} isLast={index === steps.length - 1} />
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-16">
          <Button
            variant="primary"
            size="lg"
            onClick={scrollToContact}
            aria-label="Solicitar Atendimento — ir para formulário de contato"
          >
            Solicitar Atendimento
            <ArrowRight size={20} aria-hidden="true" />
          </Button>
        </div>
      </Container>
    </section>
  )
}

export { HowItWorksSection }
