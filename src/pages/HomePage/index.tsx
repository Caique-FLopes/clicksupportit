import { MainLayout } from '@/layouts/MainLayout'
import {
  HeroSection,
  HowItWorksSection,
  ServicesSection,
  TrustSection,
  CompaniesSection,
  DifferentialsSection,
  CTASection,
  ContactSection,
} from '@/components/organisms'

const HomePage = () => {
  return (
    <MainLayout>
      <HeroSection />
      <HowItWorksSection />
      <ServicesSection />
      <TrustSection />
      <CompaniesSection />
      <DifferentialsSection />
      <CTASection />
      <ContactSection />
    </MainLayout>
  )
}

export { HomePage }
