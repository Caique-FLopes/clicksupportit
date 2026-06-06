import { ArrowRight, Play, Check } from 'lucide-react'
import { Button, Badge, Container } from '@/components/atoms'

const benefits = [
  'Atendimento em português',
  'Suporte remoto rápido',
  'Especialistas em TI',
  'Atendimento internacional',
]

const HeroSection = () => {
  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToServices = () => {
    document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-[72px] overflow-hidden bg-[#0a1628]"
      aria-label="Seção principal"
    >
      {/* Background blobs */}
      <div
        className="absolute w-[384px] h-[384px] rounded-full bg-brand-primary/10 blur-[64px] left-[391px] top-[226px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute w-[320px] h-[320px] rounded-full bg-brand-accent/8 blur-[64px] left-[853px] top-[358px] pointer-events-none"
        aria-hidden="true"
      />

      <Container className="relative z-10 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left content */}
          <div className="flex flex-col items-start gap-0">
            {/* Badge */}
            <Badge dot className="mb-[70px] hidden sm:inline-flex">
              Suporte Técnico Remoto para Brasileiros no Exterior
            </Badge>

            {/* Heading */}
            <div className="mb-0">
              <h1 className="text-white font-bold text-[40px] sm:text-[52px] lg:text-[60px] leading-tight lg:leading-[75px]">
                Resolva seus{' '}
                <span className="text-gradient">
                  problemas de TI
                </span>{' '}
                sem sair de casa
              </h1>
            </div>

            {/* Description */}
            <p className="text-[#90a1b9] text-[16px] sm:text-[18px] leading-[29px] mt-8 max-w-[576px]">
              Receba suporte especializado para computadores, redes, sistemas e infraestrutura através de atendimento remoto em português.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button
                variant="primary"
                size="lg"
                onClick={scrollToContact}
                aria-label="Solicitar Suporte — ir para formulário de contato"
              >
                Solicitar Suporte
                <ArrowRight size={20} aria-hidden="true" />
              </Button>
              <Button
                variant="secondary"
                size="lg"
                onClick={scrollToServices}
                aria-label="Conhecer Serviços — ir para seção de serviços"
              >
                <Play size={16} aria-hidden="true" />
                Conhecer Serviços
              </Button>
            </div>

            {/* Benefits grid */}
            <div className="grid grid-cols-2 gap-x-6 gap-y-3 mt-8">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-center gap-2">
                  <Check size={16} className="text-brand-accent shrink-0" aria-hidden="true" />
                  <span className="text-[#cad5e2] text-[14px] leading-5">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — image area */}
          <div className="relative hidden lg:block">
            <div className="relative bg-white/5 border border-white/10 rounded-[16px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.5)] overflow-hidden aspect-[4/3]">
              {/* Placeholder for hero image */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/20 to-brand-accent/10 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-brand-primary/30 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Play size={32} className="text-brand-accent" aria-hidden="true" />
                  </div>
                  <p className="text-[#90a1b9] text-[14px]">Imagem do Hero</p>
                  <p className="text-[#90a1b9] text-[12px] mt-1">Adicionar em assets/images/hero/</p>
                </div>
              </div>
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(10,22,40,0.6)] to-transparent" aria-hidden="true" />
            </div>

            {/* Floating card — 100% Portuguese */}
            <div
              className="absolute -left-5 bottom-[-10px] bg-[#0f2040] border border-white/10 rounded-[14px] px-5 py-4 shadow-xl"
              aria-label="Estatística: 100% Suporte em Português"
            >
              <p className="text-white font-bold text-[24px] leading-8">100%</p>
              <p className="text-[#90a1b9] text-[12px] leading-4 mt-1">Suporte em Português</p>
            </div>

            {/* Floating card — 24h */}
            <div
              className="absolute -right-5 -top-5 bg-[#0f2040] border border-white/10 rounded-[14px] px-5 py-4 shadow-xl"
              aria-label="Estatística: Resposta em 24 horas"
            >
              <p className="text-white font-bold text-[24px] leading-8">24h</p>
              <p className="text-[#90a1b9] text-[12px] leading-4 mt-1">Resposta Rápida</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export { HeroSection }
