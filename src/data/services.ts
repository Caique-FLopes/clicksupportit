import {
  Headphones,
  Laptop,
  Wifi,
  Server,
  Grid3x3,
  Shield,
  Printer,
  Lightbulb,
  type LucideIcon,
} from "lucide-react";

export interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
  bg: string;
  border: string;
  iconColor: string;
  tags: string[];
}

export const SERVICES: Service[] = [
  {
    icon: Headphones,
    title: "Suporte Help Desk",
    description: "Atendimento para dúvidas e problemas do dia a dia.",
    color: "from-blue-500 to-blue-600",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
    iconColor: "text-blue-400",
    tags: ["Software", "Windows", "E-mail", "Antivírus"],
  },
  {
    icon: Laptop,
    title: "Suporte em Computadores",
    description: "Diagnóstico e correção de falhas em computadores e notebooks.",
    color: "from-indigo-500 to-indigo-600",
    bg: "bg-indigo-500/10",
    border: "border-indigo-500/20",
    iconColor: "text-indigo-400",
    tags: ["PC lento", "Vírus", "Formatação", "HD/SSD"],
  },
  {
    icon: Wifi,
    title: "Redes e Internet",
    description: "Configuração e resolução de problemas de conectividade.",
    color: "from-cyan-500 to-cyan-600",
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/20",
    iconColor: "text-cyan-400",
    tags: ["Wi-Fi", "VPN", "Internet lenta", "Rede corporativa"],
  },
  {
    icon: Server,
    title: "Servidores",
    description: "Suporte remoto para ambientes corporativos.",
    color: "from-sky-500 to-sky-600",
    bg: "bg-sky-500/10",
    border: "border-sky-500/20",
    iconColor: "text-sky-400",
    tags: ["Windows Server", "Linux", "Active Directory", "Remote Desktop"],
  },
  {
    icon: Grid3x3,
    title: "Microsoft 365",
    description: "Configuração e suporte para ferramentas Microsoft.",
    color: "from-blue-400 to-blue-500",
    bg: "bg-blue-400/10",
    border: "border-blue-400/20",
    iconColor: "text-blue-300",
    tags: ["Teams", "Outlook", "OneDrive", "SharePoint"],
  },
  {
    icon: Shield,
    title: "Backup e Segurança",
    description: "Proteção de dados e boas práticas de segurança.",
    color: "from-green-500 to-green-600",
    bg: "bg-green-500/10",
    border: "border-green-500/20",
    iconColor: "text-green-400",
    tags: ["Cloud Backup", "Ransomware", "LGPD", "Senhas"],
  },
  {
    icon: Printer,
    title: "Impressoras e Periféricos",
    description: "Configuração e suporte remoto para periféricos.",
    color: "from-violet-500 to-violet-600",
    bg: "bg-violet-500/10",
    border: "border-violet-500/20",
    iconColor: "text-violet-400",
    tags: ["Impressora", "Scanner", "Webcam", "Áudio"],
  },
  {
    icon: Lightbulb,
    title: "Consultoria de TI",
    description: "Orientação técnica para usuários e empresas.",
    color: "from-amber-500 to-amber-600",
    bg: "bg-amber-500/10",
    border: "border-amber-500/20",
    iconColor: "text-amber-400",
    tags: ["Infraestrutura", "Cloud", "Projetos", "Compliance"],
  },
];
