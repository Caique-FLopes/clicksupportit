import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { SectionBadge } from "../atoms/SectionBadge";
import { ContactInfoItem } from "../molecules/ContactInfoItem";
import { CONTACT_INFO_ITEMS, SERVICE_OPTIONS } from "../../../data/contact";

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    country: "",
    service: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contato" className="py-24 bg-[#0d1c35]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left info */}
          <div>
            <SectionBadge>Fale Conosco</SectionBadge>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 mt-4">
              Abra sua Solicitação
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              Preencha o formulário e nossa equipe entrará em contato para agendar seu atendimento remoto.
            </p>

            <div className="space-y-4">
              {CONTACT_INFO_ITEMS.map((item) => (
                <ContactInfoItem
                  key={item.label}
                  label={item.label}
                  detail={item.detail}
                />
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="bg-[#0a1628] border border-white/10 rounded-2xl p-8">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="w-16 h-16 rounded-full bg-green-500/20 border border-green-400/30 flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-white font-semibold text-xl mb-2">Solicitação enviada!</h3>
                <p className="text-slate-400">
                  Nossa equipe entrará em contato em breve. Obrigado!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-slate-300 text-sm mb-1.5">Nome completo</label>
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
                    <label className="block text-slate-300 text-sm mb-1.5">E-mail</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="seu@email.com"
                      className="w-full bg-[#0d1c35] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500/50 transition-colors text-sm"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-slate-300 text-sm mb-1.5">País de residência</label>
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
                    <label className="block text-slate-300 text-sm mb-1.5">Tipo de serviço</label>
                    <select
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className="w-full bg-[#0d1c35] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500/50 transition-colors text-sm appearance-none"
                    >
                      <option value="" className="bg-[#0d1c35]">Selecione...</option>
                      {SERVICE_OPTIONS.map((opt) => (
                        <option key={opt.value} value={opt.value} className="bg-[#0d1c35]">
                          {opt.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-slate-300 text-sm mb-1.5">Descreva seu problema</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    placeholder="Conte-nos sobre o problema que está enfrentando..."
                    className="w-full bg-[#0d1c35] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500/50 transition-colors text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white py-4 rounded-xl font-semibold transition-all duration-200 shadow-lg shadow-blue-600/30 hover:shadow-blue-500/40 hover:-translate-y-0.5"
                >
                  Enviar Solicitação
                  <Send className="w-5 h-5" />
                </button>

                <p className="text-slate-500 text-xs text-center">
                  Ao enviar, você concorda com nossa política de privacidade.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
