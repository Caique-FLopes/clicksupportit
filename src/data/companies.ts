export interface Company {
  name: string;
  initials: string;
}

export const COMPANIES: Company[] = [
  { name: "Empresa Alpha", initials: "EA" },
  { name: "Empresa Beta", initials: "EB" },
  { name: "Empresa Delta", initials: "ED" },
  { name: "Global Tech", initials: "GT" },
  { name: "Connect Corp", initials: "CC" },
  { name: "Empresa Prime", initials: "EP" },
  { name: "Nexus Group", initials: "NG" },
  { name: "TechBridge", initials: "TB" },
];

export const COMPANY_COLORS: string[] = [
  "from-blue-600/20 to-blue-600/10 border-blue-600/20 text-blue-600",
  "from-indigo-600/20 to-indigo-600/10 border-indigo-600/20 text-indigo-600",
  "from-cyan-600/20 to-cyan-600/10 border-cyan-600/20 text-cyan-600",
  "from-sky-600/20 to-sky-600/10 border-sky-600/20 text-sky-600",
  "from-violet-600/20 to-violet-600/10 border-violet-600/20 text-violet-600",
  "from-blue-600/20 to-blue-600/10 border-blue-600/20 text-blue-600",
  "from-teal-600/20 to-teal-600/10 border-teal-600/20 text-teal-600",
  "from-slate-600/20 to-slate-600/10 border-slate-600/20 text-slate-600",
];
