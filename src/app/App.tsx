import { Header } from "./components/organisms/Header";
import { Hero } from "./components/organisms/Hero";
import { HowItWorks } from "./components/organisms/HowItWorks";
import { Services } from "./components/organisms/Services";
import { TrustBadges } from "./components/organisms/TrustBadges";
import { CompaniesMarquee } from "./components/organisms/CompaniesMarquee";
import { Differentials } from "./components/organisms/Differentials";
import { CTAFinal } from "./components/organisms/CTAFinal";
import { ContactSection } from "./components/organisms/ContactSection";
import { Footer } from "./components/organisms/Footer";

export default function App() {
  return (
    <div className="bg-[#0a1628]">
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <Services />
        <TrustBadges />
        <CompaniesMarquee />
        <Differentials />
        <CTAFinal />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
