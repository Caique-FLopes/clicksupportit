import {
  MessageSquare,
  Search,
  Monitor,
  CheckCircle,
  type LucideIcon,
} from "lucide-react";

export interface ProcessStep {
  number: string;
  icon: LucideIcon;
  title: string;
  description: string;
}

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Entre em Contato",
    description: "Abra uma solicitação informando seu problema de forma simples e rápida.",
  },
  {
    number: "02",
    icon: Search,
    title: "Análise Inicial",
    description: "Nossa equipe identifica o tipo de atendimento necessário para o seu caso.",
  },
  {
    number: "03",
    icon: Monitor,
    title: "Atendimento Remoto",
    description: "Realizamos suporte por chamada ou acesso remoto seguro ao seu dispositivo.",
  },
  {
    number: "04",
    icon: CheckCircle,
    title: "Problema Resolvido",
    description: "Seu ambiente volta a funcionar com segurança e acompanhamento contínuo.",
  },
];
