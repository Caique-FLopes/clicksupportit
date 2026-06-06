import { ArrowRight, MessageCircle } from "lucide-react";
import { AnimatedBadge } from "../atoms/AnimatedBadge";
import { FINAL_CTA } from "../../../data/cta";

export function CTAFinal() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-24 bg-[#0a1628]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden">
          {/* Gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800" />

          {/* Pattern overlay */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
              backgroundSize: "32px 32px",
            }}
          />

          {/* Glow effects */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-400/30 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-indigo-400/20 rounded-full blur-3xl" />

          {/* Content */}
          <div className="relative px-8 py-16 sm:px-16 text-center">
            <AnimatedBadge
              dotColor="bg-green-400"
              textColor="text-white"
              bgClass="bg-white/15"
              borderClass="border-white/25"
            >
              {FINAL_CTA.badge}
            </AnimatedBadge>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight mt-6">
              {FINAL_CTA.title}
            </h2>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
              {FINAL_CTA.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {FINAL_CTA.buttons.map((btn) =>
                btn.variant === "primary" ? (
                  <button
                    key={btn.label}
                    onClick={() => handleScroll(btn.href)}
                    className="inline-flex items-center justify-center gap-2 bg-white text-blue-700 hover:bg-blue-50 px-8 py-4 rounded-xl font-semibold transition-all duration-200 shadow-xl hover:-translate-y-0.5"
                  >
                    {btn.label}
                    <ArrowRight className="w-5 h-5" />
                  </button>
                ) : (
                  <button
                    key={btn.label}
                    onClick={() => handleScroll(btn.href)}
                    className="inline-flex items-center justify-center gap-2 bg-white/15 hover:bg-white/25 border border-white/30 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 backdrop-blur-sm"
                  >
                    <MessageCircle className="w-5 h-5" />
                    {btn.label}
                  </button>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
