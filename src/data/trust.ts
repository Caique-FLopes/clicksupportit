import {
  ShieldCheck,
  UserCheck,
  ClipboardList,
  Lock,
  Cpu,
  Eye,
  type LucideIcon,
} from "lucide-react";

export interface TrustItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const TRUST_ITEMS: TrustItem[] = [
  {
    icon: ShieldCheck,
    title: "Boas Práticas de Segurança",
    description: "Seguimos rigorosos padrões de segurança em cada atendimento.",
  },
  {
    icon: UserCheck,
    title: "Atendimento Profissional",
    description: "Equipe certificada e experiente em suporte de TI.",
  },
  {
    icon: ClipboardList,
    title: "Processos Padronizados",
    description: "Metodologia clara e documentada para cada tipo de chamado.",
  },
  {
    icon: Lock,
    title: "Conexão Remota Segura",
    description: "Acesso remoto com criptografia e controle total pelo cliente.",
  },
  {
    icon: Cpu,
    title: "Suporte Especializado",
    description: "Profissionais com experiência em múltiplas plataformas e sistemas.",
  },
  {
    icon: Eye,
    title: "Privacidade dos Dados",
    description: "Seus dados são tratados com total confidencialidade e respeito.",
  },
];
