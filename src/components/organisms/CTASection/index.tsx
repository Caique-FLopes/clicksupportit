import { ArrowRight, Phone } from 'lucide-react'
import { Button, Container } from '@/components/atoms'

const CTASection = () => {
  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="cta"
      className="py-24 bg-[#060e1e]"
      aria-labelledby="cta-heading"
    >
      <Container>
        <div className="relative bg-gradient-to-br from-brand-primary/20 via-[#0f2040] to-brand-accent/10 border border-white/10 rounded-[24px] overflow-hidden">
          {/* Decorative blobs */}
          <div
            className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"
            aria-hidden="true"
          />
          <div
            className="absolute bottom-0 left-0 w-64 h-64 bg-brand-accent/10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2"
            aria-hidden="true"
          />

          <div className="relative z-10 px-8 sm:px-16 py-16 text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 mb-8">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" aria-hidden="true" />
              <span className="text-white text-[14px] font-medium">Disponível agora</span>
            </div>

            <h2
              id="cta-heading"
              className="text-white font-bold text-[32px] sm:text-[40px] lg:text-[48px] leading-tight max-w-[700px] mx-auto"
            >
              Precisa de ajuda com tecnologia?
            </h2>

            <p className="text-[#90a1b9] text-[16px] sm:text-[18px] leading-7 mt-6 max-w-[650px] mx-auto">
              Entre em contato agora e receba suporte especializado em português, de onde você estiver no mundo.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
              <Button
                variant="primary"
                size="lg"
                onClick={scrollToContact}
                aria-label="Solicitar um Serviço — ir para formulário de contato"
              >
                Solicitar um Serviço
                <ArrowRight size={20} aria-hidden="true" />
              </Button>
              <Button
                variant="secondary"
                size="lg"
                onClick={scrollToContact}
                aria-label="Falar com um Especialista — ir para formulário de contato"
              >
                <Phone size={20} aria-hidden="true" />
                Falar com um Especialista
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export { CTASection }
