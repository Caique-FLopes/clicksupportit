import type { LucideIcon } from "lucide-react";
import { Wifi, Grid3x3, Printer, ShieldCheck } from "lucide-react";

export interface ProblemItem {
  text: string;
}

export interface ProblemCard {
  icon: LucideIcon;
  title: string;
  titleColor: string;
  iconBg: string;
  iconColor: string;
  checkColor: string;
  hoverBorderColor: string;
  description: string;
  items: ProblemItem[];
  whatsappMessage: string;
}

export const PROBLEM_CARDS: ProblemCard[] = [
  {
    icon: Wifi,
    title: "Wi-Fi e Redes",
    titleColor: "text-[#51a2ff]",
    iconBg: "bg-[#51a2ff]/15",
    iconColor: "text-[#51a2ff]",
    checkColor: "text-[#51a2ff]",
    hoverBorderColor: "hover:border-[#51a2ff]/40",
    description: "Sinal fraco, queda constante de conexão, configuração de roteador, VPN corporativa.",
    items: [
      { text: "Wi-Fi instável" },
      { text: "VPN sem conexão" },
      { text: "Rede lenta" },
      { text: "Roteador travado" },
    ],
    whatsappMessage: "Olá! Estou com problemas de Wi-Fi e redes e gostaria de suporte.",
  },
  {
    icon: Grid3x3,
    title: "Microsoft 365",
    titleColor: "text-white",
    iconBg: "bg-[#7c86ff]/15",
    iconColor: "text-[#7c86ff]",
    checkColor: "text-[#7c86ff]",
    hoverBorderColor: "hover:border-[#7c86ff]/40",
    description:
      "Teams sem áudio, Outlook não sincroniza, OneDrive com erro, licença expirada.",
    items: [
      { text: "Teams sem microfone" },
      { text: "E-mail travado" },
      { text: "OneDrive parado" },
      { text: "Licença bloqueada" },
    ],
    whatsappMessage: "Olá! Preciso de suporte com Microsoft 365.",
  },
  {
    icon: Printer,
    title: "Impressoras",
    titleColor: "text-[#c084fc]",
    iconBg: "bg-[#c084fc]/15",
    iconColor: "text-[#c084fc]",
    checkColor: "text-[#c084fc]",
    hoverBorderColor: "hover:border-[#c084fc]/40",
    description:
      "Impressora offline, driver desatualizado, impressão com erro, configuração em rede.",
    items: [
      { text: "Impressora offline" },
      { text: "Driver quebrado" },
      { text: "Impressão cortada" },
      { text: "Sem conexão" },
    ],
    whatsappMessage: "Olá! Estou com problema na minha impressora e preciso de suporte.",
  },
  {
    icon: ShieldCheck,
    title: "Backup e Segurança",
    titleColor: "text-[#00d3a0]",
    iconBg: "bg-[#00d3a0]/15",
    iconColor: "text-[#00d3a0]",
    checkColor: "text-[#00d3a0]",
    hoverBorderColor: "hover:border-[#00d3a0]/40",
    description:
      "Arquivos perdidos, vírus no computador, backup não funcionando, dados criptografados.",
    items: [
      { text: "Vírus / Ransomware" },
      { text: "Backup perdido" },
      { text: "Arquivos sumidos" },
      { text: "Conta hackeada" },
    ],
    whatsappMessage: "Olá! Preciso de ajuda com backup e segurança do meu computador.",
  },
];

export interface Testimonial {
  rating: number;
  text: string;
  name: string;
  location: string;
  initials: string;
  avatarBg: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    rating: 5,
    text: '"Meu computador estava travado há semanas. Em 40 minutos o suporte resolveu tudo remotamente. Melhor de tudo: em português!"',
    name: "Marcos R.",
    location: "Flórida, EUA",
    initials: "MR",
    avatarBg: "bg-[#51a2ff]",
  },
  {
    rating: 5,
    text: '"Precisei configurar o Microsoft Teams para minha equipe aqui em Portugal. Foram super atenciosos e resolveram na hora."',
    name: "Renata S.",
    location: "Lisboa, Portugal",
    initials: "RS",
    avatarBg: "bg-[#7c86ff]",
  },
  {
    rating: 5,
    text: '"Wi-Fi da empresa caía toda hora. Fizeram diagnóstico remoto e resolveram sem precisar de ninguém presencialmente."',
    name: "Alexandre M.",
    location: "Toronto, Canadá",
    initials: "AM",
    avatarBg: "bg-[#00d3f3]",
  },
];
