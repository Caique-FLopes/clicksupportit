import { MessageCircle } from "lucide-react";
import { SectionBadge } from "../atoms/SectionBadge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { FAQ_ITEMS } from "../../../data/faq";
import { FOOTER_CONTACT } from "../../../data/footer";

export function FAQ() {
  const openWhatsApp = () => {
    const text = encodeURIComponent("Olá! Tenho uma dúvida e gostaria de falar com um especialista.");
    window.open(`${FOOTER_CONTACT.whatsappHref}?text=${text}`, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="faq" className="py-24 bg-[#0a1628]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <SectionBadge>Dúvidas Frequentes</SectionBadge>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 mt-4">
            Perguntas Frequentes
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Respondemos as dúvidas mais comuns para que você contrate com total confiança.
          </p>
        </div>

        {/* Accordion */}
        <Accordion type="single" collapsible className="space-y-3">
          {FAQ_ITEMS.map((item, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="bg-[#0d1c35] border border-white/10 rounded-2xl px-6 overflow-hidden"
            >
              <AccordionTrigger className="hover:no-underline py-5 gap-4">
                <div className="flex flex-col items-start gap-1.5 text-left">
                  <span
                    className={`text-xs font-medium px-2 py-0.5 rounded-full border ${item.categoryColor}`}
                  >
                    {item.category}
                  </span>
                  <span className="text-white font-medium text-base">{item.question}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-slate-400 text-sm leading-relaxed pb-5">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Footer CTA */}
        <div className="mt-10 bg-gradient-to-r from-[#0d2a1a]/80 via-[#0d1c35] to-[#0d1c35] border border-green-500/20 rounded-2xl px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-white font-semibold">Sua dúvida não está aqui?</p>
            <p className="text-slate-400 text-sm mt-0.5">
              Fale diretamente com um de nossos especialistas. Respondemos em português, pelo WhatsApp.
            </p>
          </div>
          <button
            onClick={openWhatsApp}
            className="shrink-0 flex items-center gap-2 bg-[#00a63e] hover:bg-[#00b844] text-white px-5 py-3 rounded-xl text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 whitespace-nowrap"
          >
            <MessageCircle className="w-4 h-4" />
            Perguntar no WhatsApp
          </button>
        </div>
      </div>
    </section>
  );
}
