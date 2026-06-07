import { MessageCircle } from "lucide-react";
import { SectionBadge } from "../atoms/SectionBadge";
import { ProblemCard } from "../molecules/ProblemCard";
import { TestimonialCard } from "../molecules/TestimonialCard";
import { PROBLEM_CARDS, TESTIMONIALS } from "../../../data/social-proof";
import { FOOTER_CONTACT } from "../../../data/footer";

export function SocialProof() {
  const openWhatsApp = () => {
    const text = encodeURIComponent("Olá! Gostaria de solicitar um orçamento gratuito.");
    window.open(`${FOOTER_CONTACT.whatsappHref}?text=${text}`, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="problemas" className="py-24 bg-[#0a1628]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <SectionBadge>Prova Social</SectionBadge>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 mt-4">
            Problemas que resolvemos
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Clique no problema que mais se parece com o seu e inicie o atendimento direto pelo WhatsApp.
          </p>
        </div>

        {/* Problem cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {PROBLEM_CARDS.map((card) => (
            <ProblemCard key={card.title} card={card} />
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {TESTIMONIALS.map((testimonial) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <button
            onClick={openWhatsApp}
            className="inline-flex items-center gap-2 bg-[#155dfc] hover:bg-[#1a6aff] text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 shadow-[0px_8px_20px_rgba(21,93,252,0.3)] hover:-translate-y-0.5"
          >
            <MessageCircle className="w-5 h-5" />
            Solicitar Orçamento Gratuito
          </button>
        </div>
      </div>
    </section>
  );
}
