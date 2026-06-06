export const HERO_BADGE = "Suporte Técnico Remoto para Brasileiros no Exterior";

export const HERO_BENEFITS: string[] = [
  "Atendimento em português",
  "Suporte remoto rápido",
  "Especialistas em TI",
  "Atendimento internacional",
];

export interface HeroStat {
  value: string;
  label: string;
  valueColor: string;
  position: string;
}

export const HERO_STATS: HeroStat[] = [
  {
    value: "100%",
    label: "Suporte em Português",
    valueColor: "text-white",
    position: "absolute -bottom-5 -left-5",
  },
  {
    value: "24h",
    label: "Resposta Rápida",
    valueColor: "text-green-400",
    position: "absolute -top-5 -right-5",
  },
];

export const HERO_IMAGE = {
  src: "https://images.unsplash.com/photo-1497493292307-31c376b6e479?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJVCUyMHN1cHBvcnQlMjB0ZWNobmljaWFuJTIwcmVtb3RlJTIwd29yayUyMGNvbXB1dGVyfGVufDF8fHx8MTc4MDYyMDgwOXww&ixlib=rb-4.1.0&q=80&w=1080",
  alt: "Profissional de TI prestando suporte remoto",
};
