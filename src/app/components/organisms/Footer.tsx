import { Headphones, Mail, MessageCircle } from "lucide-react";
import {
  FOOTER_QUICK_LINKS,
  FOOTER_SERVICES,
  FOOTER_CONTACT,
  FOOTER_SOCIAL_LINKS,
  COMPANY_INFO,
} from "../../../data/footer";
import { COMPANY_BRANDING } from "../../../data/navigation";

export function Footer() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-[#060e1f] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="py-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-lg bg-blue-500 flex items-center justify-center shrink-0">
                <Headphones className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="text-white font-semibold text-lg leading-none block">
                  {COMPANY_BRANDING.name}
                </span>
                <span className="text-blue-400 text-xs leading-none">{COMPANY_BRANDING.tagline}</span>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              {COMPANY_INFO.description}
            </p>
            {/* Social links */}
            <div className="flex gap-3">
              {FOOTER_SOCIAL_LINKS.map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center transition-colors"
                >
                  <Icon className="w-4 h-4 text-slate-400 hover:text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2.5">
              {FOOTER_QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleScroll(link.href)}
                    className="text-slate-400 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Serviços</h4>
            <ul className="space-y-2.5">
              {FOOTER_SERVICES.map((service) => (
                <li key={service}>
                  <button
                    onClick={() => handleScroll("#servicos")}
                    className="text-slate-400 hover:text-white text-sm transition-colors text-left"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contato</h4>
            <div className="space-y-4">
              <a
                href={FOOTER_CONTACT.whatsappHref}
                className="flex items-center gap-3 text-slate-400 hover:text-green-400 transition-colors group"
              >
                <div className="w-9 h-9 rounded-lg bg-green-500/10 border border-green-400/20 flex items-center justify-center group-hover:bg-green-500/20 transition-colors shrink-0">
                  <MessageCircle className="w-4 h-4 text-green-400" />
                </div>
                <div>
                  <div className="text-xs text-slate-500">WhatsApp</div>
                  <div className="text-sm">{FOOTER_CONTACT.whatsapp}</div>
                </div>
              </a>
              <a
                href={`mailto:${FOOTER_CONTACT.email}`}
                className="flex items-center gap-3 text-slate-400 hover:text-blue-400 transition-colors group"
              >
                <div className="w-9 h-9 rounded-lg bg-blue-500/10 border border-blue-400/20 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors shrink-0">
                  <Mail className="w-4 h-4 text-blue-400" />
                </div>
                <div>
                  <div className="text-xs text-slate-500">E-mail</div>
                  <div className="text-sm">{FOOTER_CONTACT.email}</div>
                </div>
              </a>
            </div>

            {/* CTA in footer */}
            <button
              onClick={() => handleScroll("#contato")}
              className="mt-6 w-full bg-blue-600 hover:bg-blue-500 text-white px-4 py-2.5 rounded-lg text-sm font-semibold transition-colors"
            >
              Solicitar Suporte
            </button>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-500 text-sm text-center sm:text-left">
            {COMPANY_INFO.copyright}
          </p>
          <p className="text-slate-500 text-sm text-center">
            {COMPANY_INFO.description}
          </p>
        </div>
      </div>
    </footer>
  );
}
