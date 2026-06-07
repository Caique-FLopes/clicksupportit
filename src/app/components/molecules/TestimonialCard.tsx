import { Star } from "lucide-react";
import type { Testimonial } from "../../../data/social-proof";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="bg-[#0d1c35] border border-white/10 rounded-2xl p-6 hover:border-yellow-400/40 hover:-translate-y-0.5 transition-all duration-300">
      {/* Stars */}
      <div className="flex gap-0.5 mb-4">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
        ))}
      </div>

      {/* Quote */}
      <p className="text-slate-300 text-sm leading-relaxed mb-5">{testimonial.text}</p>

      {/* Author */}
      <div className="flex items-center gap-3">
        <div
          className={`w-9 h-9 rounded-full ${testimonial.avatarBg} flex items-center justify-center text-white text-xs font-bold shrink-0`}
        >
          {testimonial.initials}
        </div>
        <div>
          <p className="text-white text-sm font-semibold">{testimonial.name}</p>
          <p className="text-slate-500 text-xs">{testimonial.location}</p>
        </div>
      </div>
    </div>
  );
}
