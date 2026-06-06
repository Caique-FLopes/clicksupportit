export interface NavLink {
  label: string;
  href: string;
}

export const NAV_LINKS: NavLink[] = [
  { label: "Início", href: "#inicio" },
  { label: "Como Funciona", href: "#como-funciona" },
  { label: "Serviços", href: "#servicos" },
  { label: "Empresas Atendidas", href: "#empresas" },
  { label: "Contato", href: "#contato" },
];

export const COMPANY_BRANDING = {
  name: "RemoteDesk",
  tagline: "Suporte TI",
};
