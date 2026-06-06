import type { Differential } from '@/types'

export const differentials: Differential[] = [
  {
    id: 'portuguese',
    number: '01',
    title: 'Atendimento em Português',
    description: 'Suporte completamente em português, eliminando a barreira do idioma no exterior.',
    icon: 'MessageCircle',
  },
  {
    id: 'specialists',
    number: '02',
    title: 'Especialistas em TI',
    description: 'Nossa equipe é formada por profissionais experientes e certificados.',
    icon: 'GraduationCap',
  },
  {
    id: 'international',
    number: '03',
    title: 'Atendimento Internacional',
    description: 'Atendemos brasileiros em qualquer país do mundo, sem restrições geográficas.',
    icon: 'Globe',
  },
  {
    id: 'no-travel',
    number: '04',
    title: 'Suporte Sem Deslocamento',
    description: 'Resolva seus problemas de TI de onde estiver, sem precisar sair de casa.',
    icon: 'Home',
  },
]
