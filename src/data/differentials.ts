import { Globe, Users, MapPin, Wifi, type LucideIcon } from "lucide-react";

export interface Differential {
  icon: LucideIcon;
  title: string;
  description: string;
  highlight: string;
}

export const DIFFERENTIALS: Differential[] = [
  {
    icon: Globe,
    title: "Atendimento em Português",
    description:
      "Suporte completamente em português, eliminando a barreira do idioma e facilitando a comunicação.",
    highlight: "bg-blue-500",
  },
  {
    icon: Users,
    title: "Especialistas em TI",
    description:
      "Nossa equipe é formada por profissionais experientes e certificados em múltiplas plataformas.",
    highlight: "bg-indigo-500",
  },
  {
    icon: MapPin,
    title: "Atendimento Internacional",
    description:
      "Atendemos brasileiros em qualquer país do mundo, sem barreiras geográficas.",
    highlight: "bg-cyan-500",
  },
  {
    icon: Wifi,
    title: "Suporte Sem Deslocamento",
    description:
      "Resolva seus problemas de TI de onde estiver, sem precisar sair de casa ou do escritório.",
    highlight: "bg-sky-500",
  },
];
