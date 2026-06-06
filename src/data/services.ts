import type { Service } from '@/types'

export const services: Service[] = [
  {
    id: 'help-desk',
    title: 'Suporte Help Desk',
    description: 'Atendimento para dúvidas e problemas do dia a dia.',
    icon: 'HeadphonesIcon',
  },
  {
    id: 'computers',
    title: 'Suporte em Computadores',
    description: 'Diagnóstico e correção de falhas em computadores e notebooks.',
    icon: 'Monitor',
  },
  {
    id: 'networks',
    title: 'Redes e Internet',
    description: 'Configuração e resolução de problemas de conectividade.',
    icon: 'Wifi',
  },
  {
    id: 'servers',
    title: 'Servidores',
    description: 'Suporte remoto para ambientes corporativos.',
    icon: 'Server',
  },
  {
    id: 'microsoft365',
    title: 'Microsoft 365',
    description: 'Configuração e suporte para ferramentas Microsoft.',
    icon: 'Grid2X2',
  },
  {
    id: 'backup',
    title: 'Backup e Segurança',
    description: 'Proteção de dados e boas práticas de segurança.',
    icon: 'ShieldCheck',
  },
  {
    id: 'printers',
    title: 'Impressoras e Periféricos',
    description: 'Configuração e suporte remoto para periféricos.',
    icon: 'Printer',
  },
  {
    id: 'consulting',
    title: 'Consultoria de TI',
    description: 'Orientação técnica para usuários e empresas.',
    icon: 'Lightbulb',
  },
]
