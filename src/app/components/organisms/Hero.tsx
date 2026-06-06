import { CheckCircle2, ArrowRight, Play } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { AnimatedBadge } from "../atoms/AnimatedBadge";
import { StatCard } from "../molecules/StatCard";
import { HERO_BADGE, HERO_BENEFITS, HERO_STATS, HERO_IMAGE } from "../../../data/hero";

export function Hero() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="inicio"
      className="relative flex items-center bg-[#0a1628] overflow-hidden pt-20"
    >
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-400/8 rounded-full blur-3xl" />
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
          <div className="space-y-8">
            <AnimatedBadge>{HERO_BADGE}</AnimatedBadge>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Resolva seus{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                problemas de TI
              </span>{" "}
              sem sair de casa
            </h1>

            {/* Subtitle */}
            <p className="text-slate-400 text-lg leading-relaxed max-w-xl">
              Receba suporte especializado para computadores, redes, sistemas e
              infraestrutura através de atendimento remoto em português.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => handleScroll("#contato")}
                className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 shadow-xl shadow-blue-600/30 hover:shadow-blue-500/40 hover:-translate-y-0.5"
              >
                Solicitar Suporte
                <ArrowRight className="w-5 h-5" />
              </button>
              <button
                onClick={() => handleScroll("#servicos")}
                className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 border border-white/20 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 backdrop-blur-sm"
              >
                <Play className="w-4 h-4" />
                Conhecer Serviços
              </button>
            </div>

            {/* Benefits list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {HERO_BENEFITS.map((benefit) => (
                <div key={benefit} className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-green-400 shrink-0" />
                  <span className="text-slate-300 text-sm">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right column — image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/50 border border-white/10">
              <ImageWithFallback
                src={HERO_IMAGE.src}
                alt={HERO_IMAGE.alt}
                className="w-full h-[420px] object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/60 via-transparent to-transparent" />
            </div>

            {/* Floating stat cards */}
            {HERO_STATS.map((stat) => (
              <StatCard
                key={stat.value}
                value={stat.value}
                label={stat.label}
                valueColor={stat.valueColor}
                className={stat.position}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
