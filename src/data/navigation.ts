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

export const COMPANY_BRANDING: { name: string; tagline?: string } = {
  name: "Click Support IT",
  // tagline: "Suporte TI",
};
