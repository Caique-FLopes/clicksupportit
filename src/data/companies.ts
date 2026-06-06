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
  "from-blue-500/20 to-blue-600/10 border-blue-400/20 text-blue-300",
  "from-indigo-500/20 to-indigo-600/10 border-indigo-400/20 text-indigo-300",
  "from-cyan-500/20 to-cyan-600/10 border-cyan-400/20 text-cyan-300",
  "from-sky-500/20 to-sky-600/10 border-sky-400/20 text-sky-300",
  "from-violet-500/20 to-violet-600/10 border-violet-400/20 text-violet-300",
  "from-blue-400/20 to-blue-500/10 border-blue-300/20 text-blue-200",
  "from-teal-500/20 to-teal-600/10 border-teal-400/20 text-teal-300",
  "from-slate-500/20 to-slate-600/10 border-slate-400/20 text-slate-300",
];
