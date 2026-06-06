export interface ContactInfoItem {
  label: string;
  detail: string;
}

export interface ServiceOption {
  value: string;
  label: string;
}

export const CONTACT_INFO_ITEMS: ContactInfoItem[] = [
  { label: "Resposta em até 24h", detail: "Garantimos retorno rápido" },
  { label: "Suporte em português", detail: "Sem barreiras de idioma" },
  { label: "Atendimento internacional", detail: "Qualquer país do mundo" },
];

export const SERVICE_OPTIONS: ServiceOption[] = [
  { value: "helpdesk", label: "Suporte Help Desk" },
  { value: "computadores", label: "Suporte em Computadores" },
  { value: "redes", label: "Redes e Internet" },
  { value: "servidores", label: "Servidores" },
  { value: "microsoft365", label: "Microsoft 365" },
  { value: "backup", label: "Backup e Segurança" },
  { value: "impressoras", label: "Impressoras e Periféricos" },
  { value: "consultoria", label: "Consultoria de TI" },
];
