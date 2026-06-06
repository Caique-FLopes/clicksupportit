import { Container } from '@/components/atoms'

const footerLinks = {
  services: [
    'Suporte Help Desk',
    'Suporte em Computadores',
    'Redes e Internet',
    'Servidores',
    'Microsoft 365',
    'Backup e Segurança',
  ],
  contact: [
    { label: 'contato@clicksupportit.com', href: 'mailto:contato@clicksupportit.com' },
    { label: 'WhatsApp', href: '#contact' },
  ],
  social: [
    { label: 'LinkedIn', href: '#' },
    { label: 'Instagram', href: '#' },
    { label: 'Facebook', href: '#' },
  ],
}

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#060e1e] border-t border-white/10 pt-16 pb-8">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#hero" className="flex items-center gap-2 mb-4" aria-label="ClickSupport IT — Início">
              <div className="w-8 h-8 bg-brand-primary rounded-[8px] flex items-center justify-center">
                <span className="text-white font-bold text-[14px]">CS</span>
              </div>
              <span className="text-white font-bold text-[18px] leading-6">
                ClickSupport <span className="text-brand-accent">IT</span>
              </span>
            </a>
            <p className="text-[#90a1b9] text-[14px] leading-6 max-w-[220px]">
              Suporte técnico remoto especializado para brasileiros no exterior.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-[14px] leading-5 mb-4 uppercase tracking-wider">
              Serviços
            </h3>
            <ul className="flex flex-col gap-3">
              {footerLinks.services.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    onClick={(e) => {
                      e.preventDefault()
                      document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })
                    }}
                    className="text-[#90a1b9] text-[14px] leading-5 hover:text-white transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-[14px] leading-5 mb-4 uppercase tracking-wider">
              Contato
            </h3>
            <ul className="flex flex-col gap-3">
              {footerLinks.contact.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-[#90a1b9] text-[14px] leading-5 hover:text-white transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-white font-semibold text-[14px] leading-5 mb-4 uppercase tracking-wider">
              Redes Sociais
            </h3>
            <ul className="flex flex-col gap-3">
              {footerLinks.social.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-[#90a1b9] text-[14px] leading-5 hover:text-white transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#90a1b9] text-[13px]">
            &copy; {currentYear} ClickSupport IT. Todos os direitos reservados.
          </p>
          <p className="text-[#90a1b9] text-[13px]">
            Suporte técnico remoto para brasileiros no exterior.
          </p>
        </div>
      </Container>
    </footer>
  )
}

export { Footer }
