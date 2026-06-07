import { useState } from "react";
import { MessageCircle, Gift, ShieldCheck, Clock, Info, ArrowRight, CheckCircle2 } from "lucide-react";
import { SectionBadge } from "../atoms/SectionBadge";
import { SERVICE_OPTIONS } from "../../../data/contact";
import { FOOTER_CONTACT } from "../../../data/footer";

function buildWhatsAppUrl(form: {
  name: string;
  email: string;
  country: string;
  service: string;
  message: string;
}): string {
  const serviceLabel =
    SERVICE_OPTIONS.find((o) => o.value === form.service)?.label || form.service || "não informado";

  const text = [
    `Olá, me chamo ${form.name || "não informado"}.`,
    `Sou de ${form.country || "não informado"} e preciso de ajuda com ${serviceLabel}.`,
    form.message || "",
    `Contato: ${form.email || "não informado"}`,
  ]
    .filter(Boolean)
    .join("\n");

  const phone = FOOTER_CONTACT.whatsappHref.replace("https://wa.me/", "");
  return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
}

const FEATURE_BADGES = [
  { icon: Gift,        label: "Orçamento Gratuito",   color: "text-green-400", bg: "bg-green-500/10 border-green-500/20"  },
  { icon: ShieldCheck, label: "Sem compromisso",       color: "text-blue-400",  bg: "bg-blue-500/10 border-blue-500/20"   },
  { icon: Clock,       label: "Resposta em até 24h",   color: "text-cyan-400",  bg: "bg-cyan-500/10 border-cyan-500/20"   },
];

const SLA_ROW = [
  { label: "Primeira resposta",  value: "até 2h úteis",     color: "text-[#155dfc]" },
  { label: "Orçamento completo", value: "até 24h",           color: "text-[#00d3a0]" },
  { label: "Atendimento",        value: "por agendamento",   color: "text-[#c084fc]" },
];

export function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", country: "", service: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.open(buildWhatsAppUrl(form), "_blank", "noopener,noreferrer");
  };

  const isReady = form.name.trim() !== "" && form.message.trim() !== "";

  return (
    <section id="contato" className="py-24 bg-[#0d1c35]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* ── Left column ── */}
          <div>
            <SectionBadge>Fale Conosco</SectionBadge>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 mt-4 leading-tight">
              Solicite seu orçamento<br />gratuito
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              Preencha o formulário ao lado e clique em{" "}
              <span className="text-green-400 font-semibold">"Enviar pelo WhatsApp"</span>.
              Todos os dados são transferidos automaticamente para uma mensagem pronta — você não
              precisa digitar nada novamente.
            </p>

            {/* Feature badges */}
            <div className="space-y-3 mb-8">
              {FEATURE_BADGES.map((f) => {
                const Icon = f.icon;
                return (
                  <div key={f.label} className={`flex items-center gap-3 border rounded-xl px-4 py-3 ${f.bg}`}>
                    <Icon className={`w-5 h-5 shrink-0 ${f.color}`} />
                    <span className={`text-sm font-medium ${f.color}`}>{f.label}</span>
                  </div>
                );
              })}
            </div>

            {/* How it works */}
            <div className="bg-[#071a0e] border border-green-500/20 rounded-xl px-4 py-4 mb-8">
              <div className="flex items-center gap-2 mb-1.5">
                <Info className="w-4 h-4 text-green-400 shrink-0" />
                <p className="text-green-400 text-sm font-semibold">Como funciona o envio?</p>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                Seus dados serão transferidos automaticamente para uma mensagem pronta no WhatsApp.
                Não será necessário digitar novamente. Basta revisar e enviar.
              </p>
            </div>

            {/* SLA row */}
            <div className="space-y-3">
              {SLA_ROW.map((item) => (
                <div key={item.label} className="flex items-center justify-between border-b border-white/5 pb-3 last:border-0 last:pb-0">
                  <span className="text-slate-400 text-sm">{item.label}</span>
                  <span className={`text-sm font-semibold ${item.color}`}>{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right column — Form ── */}
          <div className="bg-[#0a1628] border border-white/10 rounded-2xl overflow-hidden">

            {/* Form header bar */}
            <div className="bg-[#071a0e] border-b border-green-500/20 px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center shrink-0">
                  <MessageCircle className="w-4 h-4 text-green-400" />
                </div>
                <div>
                  <p className="text-white text-sm font-semibold">Envio via WhatsApp</p>
                  <p className="text-slate-400 text-xs">Seus dados serão enviados como mensagem pronta</p>
                </div>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse shrink-0" />
                <span className="text-green-400 text-xs font-medium">Online</span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-slate-400 text-xs font-semibold uppercase tracking-wide mb-1.5">
                    Nome Completo <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Seu nome"
                    className="w-full bg-[#0d1c35] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500/50 transition-colors text-sm"
                  />
                </div>
                <div>
                  <label className="block text-slate-400 text-xs font-semibold uppercase tracking-wide mb-1.5">
                    E-mail
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="seu@email.com"
                    className="w-full bg-[#0d1c35] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500/50 transition-colors text-sm"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-slate-400 text-xs font-semibold uppercase tracking-wide mb-1.5">
                    País onde mora
                  </label>
                  <input
                    type="text"
                    name="country"
                    value={form.country}
                    onChange={handleChange}
                    placeholder="Ex: Estados Unidos"
                    className="w-full bg-[#0d1c35] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500/50 transition-colors text-sm"
                  />
                </div>
                <div>
                  <label className="block text-slate-400 text-xs font-semibold uppercase tracking-wide mb-1.5">
                    Tipo de Serviço
                  </label>
                  <select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className="w-full bg-[#0d1c35] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500/50 transition-colors text-sm appearance-none"
                  >
                    <option value="" className="bg-[#0d1c35]">Selecione o serviço...</option>
                    {SERVICE_OPTIONS.map((opt) => (
                      <option key={opt.value} value={opt.value} className="bg-[#0d1c35]">
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-slate-400 text-xs font-semibold uppercase tracking-wide mb-1.5">
                  Descreva o Problema <span className="text-red-400">*</span>
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder="Descreva o que está acontecendo. Ex: meu Wi-Fi cai toda hora, o Teams não funciona no meu Mac..."
                  className="w-full bg-[#0d1c35] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500/50 transition-colors text-sm resize-none"
                />
                <p className="text-slate-500 text-xs mt-1.5">
                  Quanto mais detalhes, mais rápido recebemos o orçamento.
                </p>
              </div>

              {/* Submit button — disabled until name + message filled */}
              <button
                type="submit"
                disabled={!isReady}
                className="w-full flex items-center justify-center gap-2 py-4 rounded-xl font-semibold text-sm transition-all duration-300
                  bg-[#1e2d4a] text-slate-400
                  disabled:opacity-60 disabled:cursor-not-allowed
                  enabled:bg-[#155dfc] enabled:text-white enabled:shadow-[0px_4px_16px_rgba(21,93,252,0.35)] enabled:hover:bg-[#1a6aff] enabled:hover:-translate-y-0.5"
              >
                <MessageCircle className="w-5 h-5" />
                Enviar pelo WhatsApp
                <ArrowRight className="w-4 h-4" />
              </button>

              {/* Trust row */}
              <div className="flex flex-wrap items-center justify-center gap-4 pt-1">
                {["Orçamento gratuito", "Sem compromisso", "Atendimento em português"].map((t) => (
                  <span key={t} className="flex items-center gap-1 text-green-400 text-xs">
                    <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                    {t}
                  </span>
                ))}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
