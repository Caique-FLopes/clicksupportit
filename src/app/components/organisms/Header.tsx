import { useState, useEffect } from "react";
import { Menu, X, Headphones, Lightbulb, LightbulbOff } from "lucide-react";
import { NAV_LINKS, COMPANY_BRANDING } from "../../../data/navigation";
import { useTheme } from "../../context/ThemeContext";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0a1628]/95 backdrop-blur-md shadow-lg shadow-black/20"
          : "bg-[#0a1628]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center gap-2.5 shrink-0">
            <div className="w-9 h-9 rounded-lg bg-blue-500 flex items-center justify-center">
              <Headphones className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="text-white font-semibold text-lg leading-none block">
                {COMPANY_BRANDING.name}
              </span>
              {COMPANY_BRANDING.tagline && (
                <span className="text-blue-400 text-xs leading-none">{COMPANY_BRANDING.tagline}</span>
              )}
            </div>
          </div>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-slate-300 hover:text-white px-4 py-2 rounded-lg hover:bg-white/10 transition-all text-sm"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* CTA Button + Theme Toggle (desktop) */}
          <div className="hidden lg:flex items-center gap-2">
            <button
              onClick={toggleTheme}
              aria-label={theme === "dark" ? "Mudar para modo claro" : "Mudar para modo escuro"}
              className="w-9 h-9 rounded-lg bg-white/10 hover:bg-white/15 border border-white/10 flex items-center justify-center transition-colors text-slate-300 hover:text-white"
            >
              {theme === "dark"
                ? <Lightbulb className="w-4 h-4" />
                : <LightbulbOff className="w-4 h-4" />}
            </button>
            <button
              onClick={() => handleNavClick("#contato")}
              className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 shadow-lg shadow-blue-600/30 hover:shadow-blue-500/40"
            >
              Solicitar Suporte
            </button>
          </div>

          {/* Mobile: Theme Toggle + Hamburger */}
          <div className="lg:hidden flex items-center gap-1">
            <button
              onClick={toggleTheme}
              aria-label={theme === "dark" ? "Mudar para modo claro" : "Mudar para modo escuro"}
              className="text-slate-300 p-2 rounded-lg hover:bg-white/10 transition-colors"
            >
              {theme === "dark"
                ? <Lightbulb className="w-5 h-5" />
                : <LightbulbOff className="w-5 h-5" />}
            </button>
            <button
              className="text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-white/10 bg-[#0a1628]">
          <div className="px-4 py-4 space-y-1">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="block w-full text-left text-slate-300 hover:text-white px-4 py-3 rounded-lg hover:bg-white/10 transition-all text-sm"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick("#contato")}
              className="block w-full bg-blue-600 hover:bg-blue-500 text-white px-4 py-3 rounded-lg text-sm font-semibold transition-all mt-2"
            >
              Solicitar Suporte
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
