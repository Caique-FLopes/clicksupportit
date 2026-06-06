import type { Step } from '@/types'

export const steps: Step[] = [
  {
    id: 'contact',
    number: '01',
    title: 'Entre em Contato',
    description: 'Abra uma solicitação informando seu problema de forma simples e rápida.',
    icon: 'MessageSquare',
  },
  {
    id: 'analysis',
    number: '02',
    title: 'Análise Inicial',
    description: 'Nossa equipe identifica o tipo de atendimento necessário e agenda o suporte.',
    icon: 'Search',
  },
  {
    id: 'remote',
    number: '03',
    title: 'Atendimento Remoto',
    description: 'Realizamos suporte por chamada ou acesso remoto seguro ao seu dispositivo.',
    icon: 'Laptop',
  },
  {
    id: 'resolved',
    number: '04',
    title: 'Problema Resolvido',
    description: 'Seu ambiente volta a funcionar com segurança e acompanhamento pós-atendimento.',
    icon: 'CheckCircle',
  },
]
