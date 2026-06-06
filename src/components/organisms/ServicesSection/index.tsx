import { ArrowRight } from 'lucide-react'
import { Button, Container, SectionLabel } from '@/components/atoms'
import { ServiceCard } from '@/components/molecules'
import { services } from '@/data'

const ServicesSection = () => {
  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="services"
      className="py-24 bg-[#060e1e]"
      aria-labelledby="services-heading"
    >
      <Container>
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <SectionLabel>O que oferecemos</SectionLabel>
          </div>
          <h2
            id="services-heading"
            className="text-white font-bold text-[32px] sm:text-[40px] leading-tight"
          >
            Principais Serviços
          </h2>
          <p className="text-[#90a1b9] text-[16px] sm:text-[18px] leading-7 mt-4 max-w-[576px] mx-auto">
            Soluções completas de suporte remoto.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-16">
          <Button
            variant="primary"
            size="lg"
            onClick={scrollToContact}
            aria-label="Conhecer Todos os Serviços — ir para formulário de contato"
          >
            Conhecer Todos os Serviços
            <ArrowRight size={20} aria-hidden="true" />
          </Button>
        </div>
      </Container>
    </section>
  )
}

export { ServicesSection }
