import { CheckCircle2, ArrowRight, MessageCircle, Star } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { AnimatedBadge } from "../atoms/AnimatedBadge";
import {
  HERO_BADGE,
  HERO_BENEFITS,
  HERO_DESCRIPTION,
  HERO_DISCLAIMER,
  HERO_IMAGE,
  HERO_LIVE_CARD,
  HERO_SOCIAL_PROOF,
  HERO_TITLE,
  HERO_PRICE,
} from "../../../data/hero";
import { FOOTER_CONTACT } from "../../../data/footer";

export function Hero() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const openWhatsApp = () => {
    const text = encodeURIComponent("Olá! Gostaria de falar com um especialista.");
    window.open(`${FOOTER_CONTACT.whatsappHref}?text=${text}`, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      id="inicio"
      className="relative flex items-center bg-[#0a1628] overflow-hidden pt-20"
    >
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#155dfc]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#51a2ff]/8 rounded-full blur-3xl" />
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(99,179,237,0.4) 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left column */}
          <div className="space-y-7">

            {/* Social proof row */}
            <div className="flex items-center gap-3">
              {/* Stacked avatars */}
              <div className="flex items-center">
                {HERO_SOCIAL_PROOF.avatars.map((av, i) => (
                  <div
                    key={av.initial}
                    className="w-7 h-7 rounded-full border-2 border-[#0a1628] flex items-center justify-center text-white text-xs font-bold shrink-0"
                    style={{
                      backgroundColor: av.color,
                      marginLeft: i === 0 ? 0 : "-8px",
                      zIndex: HERO_SOCIAL_PROOF.avatars.length - i,
                      position: "relative",
                    }}
                  >
                    {av.initial}
                  </div>
                ))}
              </div>
              {/* Stars */}
              <div className="flex items-center gap-0.5">
                {Array.from({ length: HERO_SOCIAL_PROOF.rating }).map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-[#90a1b9] text-sm">{HERO_SOCIAL_PROOF.text}</span>
            </div>

            <AnimatedBadge>{HERO_BADGE}</AnimatedBadge>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-[52px] font-bold text-white leading-tight">
              {HERO_TITLE.before}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">{HERO_TITLE.highlight}</span>
              {HERO_TITLE.after}
            </h1>

            {/* Subtitle */}
            <p className="text-[#cad5e2] text-lg leading-relaxed max-w-xl">
              {HERO_DESCRIPTION.before}
              <strong className="text-white">{HERO_DESCRIPTION.bold}</strong>
              {HERO_DESCRIPTION.after}
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => handleScroll("#contato")}
                className="flex items-center justify-center gap-2 bg-[#155dfc] hover:bg-[#1a6aff] text-white px-7 py-4 rounded-[14px] font-semibold transition-all duration-200 shadow-[0px_8px_20px_rgba(21,93,252,0.3)] hover:shadow-[0px_8px_24px_rgba(21,93,252,0.45)] hover:-translate-y-0.5"
              >
                <ArrowRight className="w-5 h-5" />
                Solicitar Orçamento Gratuito
              </button>
              <button
                onClick={openWhatsApp}
                className="flex items-center justify-center gap-2 bg-[#00a63e] hover:bg-[#00b844] text-white px-7 py-4 rounded-[14px] font-semibold transition-all duration-200 shadow-[0px_4px_12px_rgba(0,166,62,0.3)] hover:shadow-[0px_4px_16px_rgba(0,166,62,0.45)] hover:-translate-y-0.5"
              >
                <MessageCircle className="w-5 h-5" />
                Falar com Especialista
              </button>
            </div>

            {/* Disclaimer */}
            <p className="text-slate-500 text-sm flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-green-400" />
              {HERO_DISCLAIMER}
            </p>

            {/* Benefits list — separated */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 border-t border-white/5">
              {HERO_BENEFITS.map((benefit) => (
                <div key={benefit} className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-green-400 shrink-0" />
                  <span className="text-slate-300 text-sm">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right column — image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.5)] border border-white/10">
              <ImageWithFallback
                src={HERO_IMAGE.src}
                alt={HERO_IMAGE.alt}
                className="w-full h-[440px] object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/60 via-transparent to-transparent" />
            </div>

            {/* Live support card */}
            <div className="absolute -bottom-4 -left-4 bg-[#0d1c35] border border-white/10 rounded-xl px-5 py-4 shadow-xl min-w-[220px]">
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2 h-2 rounded-full bg-[#05df72] animate-pulse shrink-0" />
                <span className="text-[#90a1b9] text-xs">{HERO_LIVE_CARD.statusLabel}</span>
              </div>
              <p className="text-white font-semibold text-base leading-snug">
                {HERO_LIVE_CARD.title}
              </p>
              <p className="text-[#90a1b9] text-xs mt-0.5">{HERO_LIVE_CARD.subtitle}</p>
            </div>
            <div className="absolute -top-5 -right-4 bg-[#0f2040] border border-white/10 rounded-xl px-5 py-3.5 shadow-xl">
              <div className="text-2xl font-bold text-blue-400">{HERO_PRICE.title}</div>
              <div className="text-slate-400 text-xs mt-0.5">{HERO_PRICE.subtitle}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
