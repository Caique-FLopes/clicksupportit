import { ThemeProvider } from "./context/ThemeContext";
import { Header } from "./components/organisms/Header";
import { Hero } from "./components/organisms/Hero";
import { HowItWorks } from "./components/organisms/HowItWorks";
import { Services } from "./components/organisms/Services";
import { SocialProof } from "./components/organisms/SocialProof";
import { TrustBadges } from "./components/organisms/TrustBadges";
import { PaymentMethods } from "./components/organisms/PaymentMethods";
import { Differentials } from "./components/organisms/Differentials";
import { FAQ } from "./components/organisms/FAQ";
import { CTAFinal } from "./components/organisms/CTAFinal";
import { ContactSection } from "./components/organisms/ContactSection";
import { Footer } from "./components/organisms/Footer";

export default function App() {
  return (
    <ThemeProvider>
    <div className="bg-[#0a1628]">
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <Services />
        <SocialProof />
        <TrustBadges />
        <PaymentMethods />
        <Differentials />
        <FAQ />
        <CTAFinal />
        <ContactSection />
      </main>
      <Footer />
    </div>
    </ThemeProvider>
  );
}
