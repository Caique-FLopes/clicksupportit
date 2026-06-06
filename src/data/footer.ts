import { Linkedin, Instagram, Twitter, type LucideIcon } from "lucide-react";
import type { NavLink } from "./navigation";

export interface SocialLink {
  icon: LucideIcon;
  label: string;
}

export const FOOTER_QUICK_LINKS: NavLink[] = [
  { label: "Início", href: "#inicio" },
  { label: "Como Funciona", href: "#como-funciona" },
  { label: "Serviços", href: "#servicos" },
  { label: "Empresas Atendidas", href: "#empresas" },
  { label: "Contato", href: "#contato" },
];

export const FOOTER_SERVICES: string[] = [
  "Suporte Help Desk",
  "Computadores e Notebooks",
  "Redes e Internet",
  "Servidores",
  "Microsoft 365",
  "Backup e Segurança",
];

export const FOOTER_CONTACT = {
  whatsapp: "+55 (11) 99999-9999",
  whatsappHref: "https://wa.me/5511999999999",
  email: "contato@remotedesk.com.br",
};

export const FOOTER_SOCIAL_LINKS: SocialLink[] = [
  { icon: Linkedin, label: "LinkedIn" },
  { icon: Instagram, label: "Instagram" },
  { icon: Twitter, label: "Twitter" },
];

export const COMPANY_INFO = {
  name: "RemoteDesk",
  tagline: "Suporte TI",
  description: "Suporte remoto especializado para brasileiros no exterior.",
  copyright: "© 2026 RemoteDesk. Todos os direitos reservados.",
};
