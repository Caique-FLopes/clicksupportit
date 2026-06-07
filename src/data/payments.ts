export interface PaymentMethod {
  name: string;
  description: string;
  icon: string; // emoji or lucide name reference
  highlighted?: boolean;
}

export const PAYMENT_METHODS: PaymentMethod[] = [
  {
    name: "PayPal",
    description: "Pagamento internacional seguro",
    icon: "💳",
  },
  {
    name: "Wise",
    description: "Transferência com taxa baixa",
    icon: "🌍",
  },
  {
    name: "Cartão Internacional",
    description: "Visa, Mastercard, Amex",
    icon: "💳",
  },
  {
    name: "PIX",
    description: "Transferência instantânea Brasil",
    icon: "⚡",
  },
  {
    name: "Transferência Bancária",
    description: "TED / DOC / SWIFT",
    icon: "🏦",
  },
  {
    name: "Pague somente após aprovação",
    description: "O orçamento é gratuito. Você só paga se decidir contratar o serviço.",
    icon: "🛡️",
    highlighted: true,
  },
];

export const PAYMENT_HIGHLIGHTS = [
  "Sem taxa de câmbio oculta",
  "Recibo digital por e-mail",
  "Pagamento apenas após o orçamento aprovado",
];
