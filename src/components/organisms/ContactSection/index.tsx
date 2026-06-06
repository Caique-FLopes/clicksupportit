import { useState, useCallback } from 'react'
import { Clock, MessageCircle, Globe, ArrowRight } from 'lucide-react'
import { Button, Container, Input, Textarea, SectionLabel } from '@/components/atoms'
import type { ContactForm, ContactFormErrors } from '@/types'

const contactInfoItems = [
  {
    icon: Clock,
    title: 'Resposta em até 24h',
    subtitle: 'Garantimos retorno rápido',
  },
  {
    icon: MessageCircle,
    title: 'Suporte em português',
    subtitle: 'Sem barreiras de idioma',
  },
  {
    icon: Globe,
    title: 'Atendimento internacional',
    subtitle: 'Qualquer país do mundo',
  },
]

const initialForm: ContactForm = {
  name: '',
  email: '',
  country: '',
  phone: '',
  description: '',
}

const validateEmail = (email: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

const ContactSection = () => {
  const [form, setForm] = useState<ContactForm>(initialForm)
  const [errors, setErrors] = useState<ContactFormErrors>({})
  const [submitted, setSubmitted] = useState(false)

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target
      setForm((prev) => ({ ...prev, [name]: value }))
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    },
    []
  )

  const validate = (): ContactFormErrors => {
    const errs: ContactFormErrors = {}
    if (!form.name.trim()) errs.name = 'Nome é obrigatório.'
    if (!form.email.trim()) errs.email = 'E-mail é obrigatório.'
    else if (!validateEmail(form.email)) errs.email = 'E-mail inválido.'
    if (!form.country.trim()) errs.country = 'País é obrigatório.'
    if (!form.description.trim()) errs.description = 'Descrição é obrigatória.'
    return errs
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }
    // Mock submit — future integration point
    console.log('Form submitted:', form)
    setSubmitted(true)
  }

  return (
    <section
      id="contact"
      className="py-24 bg-[#0a1628]"
      aria-labelledby="contact-heading"
    >
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left info */}
          <div>
            <div className="mb-4">
              <SectionLabel>Fale Conosco</SectionLabel>
            </div>
            <h2
              id="contact-heading"
              className="text-white font-bold text-[32px] sm:text-[40px] leading-tight mt-4"
            >
              Abra sua Solicitação
            </h2>
            <p className="text-[#90a1b9] text-[16px] sm:text-[18px] leading-7 mt-4 max-w-[584px]">
              Preencha o formulário e nossa equipe entrará em contato em até 24 horas para resolver seu problema de TI.
            </p>

            <div className="mt-10 flex flex-col gap-6">
              {contactInfoItems.map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 bg-brand-primary/20 rounded-[10px] flex items-center justify-center shrink-0 mt-0.5"
                    aria-hidden="true"
                  >
                    <item.icon size={20} className="text-brand-accent" />
                  </div>
                  <div>
                    <p className="text-white text-[16px] font-semibold leading-6">{item.title}</p>
                    <p className="text-[#90a1b9] text-[14px] leading-5 mt-0.5">{item.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right form */}
          <div className="bg-[#0f2040] border border-white/10 rounded-[20px] p-8">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-12">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-4">
                  <ArrowRight size={32} className="text-green-400" aria-hidden="true" />
                </div>
                <h3 className="text-white text-[22px] font-bold mb-2">Solicitação enviada!</h3>
                <p className="text-[#90a1b9] text-[15px]">
                  Nossa equipe entrará em contato em até 24 horas.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate aria-label="Formulário de contato">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <Input
                    id="contact-name"
                    name="name"
                    label="Nome completo"
                    placeholder="Seu nome"
                    value={form.name}
                    onChange={handleChange}
                    error={errors.name}
                    required
                    autoComplete="name"
                  />
                  <Input
                    id="contact-email"
                    name="email"
                    label="E-mail"
                    type="email"
                    placeholder="seu@email.com"
                    value={form.email}
                    onChange={handleChange}
                    error={errors.email}
                    required
                    autoComplete="email"
                  />
                  <Input
                    id="contact-country"
                    name="country"
                    label="País"
                    placeholder="País onde você está"
                    value={form.country}
                    onChange={handleChange}
                    error={errors.country}
                    required
                    autoComplete="country-name"
                  />
                  <Input
                    id="contact-phone"
                    name="phone"
                    label="Telefone / WhatsApp"
                    type="tel"
                    placeholder="+1 (000) 000-0000"
                    value={form.phone}
                    onChange={handleChange}
                    error={errors.phone}
                    autoComplete="tel"
                  />
                </div>
                <div className="mt-5">
                  <Textarea
                    id="contact-description"
                    name="description"
                    label="Descreva seu problema"
                    placeholder="Descreva o problema de TI que precisa resolver..."
                    rows={4}
                    value={form.description}
                    onChange={handleChange}
                    error={errors.description}
                    required
                  />
                </div>
                <div className="mt-6">
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-full"
                    aria-label="Enviar solicitação de suporte"
                  >
                    Enviar Solicitação
                    <ArrowRight size={20} aria-hidden="true" />
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </Container>
    </section>
  )
}

export { ContactSection }
