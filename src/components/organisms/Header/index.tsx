import { useState, useEffect, useCallback } from 'react'
import { Menu, X, ArrowRight } from 'lucide-react'
import { Button, Container } from '@/components/atoms'
import { NavItem } from '@/components/molecules'

const navLinks = [
  { label: 'Início', href: '#hero' },
  { label: 'Como Funciona', href: '#how-it-works' },
  { label: 'Serviços', href: '#services' },
  { label: 'Empresas Atendidas', href: '#companies' },
  { label: 'Contato', href: '#contact' },
]

const Header = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 20)
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  const closeMobile = () => setMobileOpen(false)

  const handleCtaClick = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
    closeMobile()
  }

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-50
        transition-all duration-300
        ${scrolled
          ? 'bg-[#0a1628]/90 backdrop-blur-xl shadow-[0_1px_0_rgba(255,255,255,0.08)]'
          : 'bg-transparent'
        }
      `}
    >
      <Container>
        <div className="flex items-center justify-between h-[72px]">
          {/* Logo */}
          <a href="#hero" aria-label="ClickSupport IT — Início" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-brand-primary rounded-[8px] flex items-center justify-center">
              <span className="text-white font-bold text-[14px]">CS</span>
            </div>
            <span className="text-white font-bold text-[18px] leading-6 hidden sm:block">
              ClickSupport <span className="text-brand-accent">IT</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav aria-label="Navegação principal" className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavItem key={link.href} label={link.label} href={link.href} />
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Button
              variant="primary"
              size="sm"
              onClick={handleCtaClick}
              aria-label="Solicitar Suporte — ir para formulário de contato"
            >
              Solicitar Suporte
              <ArrowRight size={16} aria-hidden="true" />
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden text-white p-2 rounded-[8px] hover:bg-white/10 transition-colors"
            onClick={() => setMobileOpen((v) => !v)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? 'Fechar menu' : 'Abrir menu'}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </Container>

      {/* Mobile drawer */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Menu de navegação"
        className={`
          lg:hidden fixed inset-0 top-[72px] z-40
          bg-[#0a1628]/95 backdrop-blur-xl
          flex flex-col gap-2 px-6 py-8
          transition-all duration-300
          ${mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
        `}
      >
        <nav className="flex flex-col gap-4">
          {navLinks.map((link) => (
            <NavItem key={link.href} label={link.label} href={link.href} onClick={closeMobile} />
          ))}
        </nav>
        <div className="mt-6">
          <Button
            variant="primary"
            size="md"
            className="w-full"
            onClick={handleCtaClick}
            aria-label="Solicitar Suporte"
          >
            Solicitar Suporte
            <ArrowRight size={16} aria-hidden="true" />
          </Button>
        </div>
      </div>
    </header>
  )
}

export { Header }
