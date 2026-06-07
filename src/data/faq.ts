export interface FaqItem {
  category: string;
  categoryColor: string;
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    category: "Preço",
    categoryColor: "bg-blue-500/20 text-blue-300 border-blue-500/30",
    question: "O orçamento é gratuito?",
    answer:
      "Sim, 100% gratuito e sem compromisso. Você descreve o problema, nossa equipe analisa e envia um orçamento detalhado. Só há cobrança se você aprovar o orçamento e contratar o serviço.",
  },
  {
    category: "Pagamento",
    categoryColor: "bg-green-500/20 text-green-300 border-green-500/30",
    question: "Como funciona o pagamento?",
    answer:
      "Aceitamos PayPal, Wise, cartão de crédito internacional (Visa, Mastercard, Amex), PIX e transferência bancária (TED/DOC/SWIFT). O pagamento só é realizado após você aprovar o orçamento e antes do início do atendimento.",
  },
  {
    category: "Internacional",
    categoryColor: "bg-purple-500/20 text-purple-300 border-purple-500/30",
    question: "Vocês atendem qualquer país?",
    answer:
      "Sim! Atendemos brasileiros em qualquer país do mundo. EUA, Canadá, Europa, Austrália, Oriente Médio e outros. O atendimento é 100% remoto e em português, sem barreiras geográficas.",
  },
  {
    category: "Técnico",
    categoryColor: "bg-yellow-500/20 text-yellow-300 border-yellow-500/30",
    question: "Preciso instalar algum programa?",
    answer:
      "Geralmente usamos ferramentas de acesso remoto seguras como AnyDesk ou TeamViewer, que você pode baixar gratuitamente. Instalamos juntos durante o atendimento, então não se preocupe — você não precisa saber fazer nada sozinho.",
  },
  {
    category: "Preço",
    categoryColor: "bg-blue-500/20 text-blue-300 border-blue-500/30",
    question: "Quanto custa o suporte?",
    answer:
      "O valor varia conforme o tipo e complexidade do problema. Após analisar sua solicitação, enviamos um orçamento fixo sem surpresas. Não cobramos por hora e não há taxas ocultas.",
  },
  {
    category: "Atendimento",
    categoryColor: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
    question: "O atendimento é realmente em português?",
    answer:
      "Sim, 100%! Nossa equipe é formada por brasileiros que atendem exclusivamente em português. Sem tradução automática, sem atendimento em inglês — você fala com um especialista na sua língua.",
  },
  {
    category: "Segurança",
    categoryColor: "bg-red-500/20 text-red-300 border-red-500/30",
    question: "Meus dados ficam seguros durante o acesso remoto?",
    answer:
      "Absolutamente. Utilizamos conexões criptografadas e você mantém controle total — pode ver tudo que fazemos na tela e encerrar o acesso a qualquer momento. Seguimos rigorosos padrões de segurança e privacidade.",
  },
];
