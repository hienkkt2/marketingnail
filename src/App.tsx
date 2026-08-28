import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ProblemSection } from './components/ProblemSection';
import { ServicesSection } from './components/ServicesSection';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { WhyChooseUs } from './components/WhyChooseUs';
import { HowItWorks } from './components/HowItWorks';
import { PricingSection } from './components/PricingSection';
import { ComboSection } from './components/ComboSection';
import { PortfolioSection } from './components/PortfolioSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FAQSection } from './components/FAQSection';
import { FinalCTA } from './components/FinalCTA';
import { ContactFormSection } from './components/ContactFormSection';
import { Footer } from './components/Footer';
import { StickyMobileBar } from './components/StickyMobileBar';
import { QuickAuditModal } from './components/QuickAuditModal';
import { ServiceItem } from './types';
import { SERVICES_DATA } from './data/marketingData';

export default function App() {
  const [activeServiceModal, setActiveServiceModal] = useState<ServiceItem | null>(null);
  const [isAuditModalOpen, setIsAuditModalOpen] = useState<boolean>(false);
  const [preselectedService, setPreselectedService] = useState<string>('Facebook & Instagram');
  const [customNote, setCustomNote] = useState<string>('');

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenConsultation = (serviceName?: string, note?: string) => {
    if (serviceName) {
      setPreselectedService(serviceName);
    }
    if (note) {
      setCustomNote(note);
    }
    scrollToSection('contact');
  };

  const handleSelectService = (serviceName: string) => {
    setPreselectedService(serviceName);
    scrollToSection('contact');
  };

  const handleSelectAuditResult = (summary: string) => {
    setCustomNote(summary);
    setPreselectedService('Chưa biết, cần tư vấn');
    scrollToSection('contact');
  };

  return (
    <div className="min-h-screen bg-[#FAFAF8] text-slate-900 font-sans flex flex-col selection:bg-slate-900 selection:text-white">
      
      {/* Navigation Header */}
      <Header
        onOpenConsultation={() => handleOpenConsultation()}
        onOpenAudit={() => setIsAuditModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-grow">
        
        {/* Section 5: Hero */}
        <HeroSection
          onOpenConsultation={() => handleOpenConsultation()}
          onScrollToPricing={() => scrollToSection('pricing')}
          onScrollToServices={() => scrollToSection('services')}
          onOpenAudit={() => setIsAuditModalOpen(true)}
        />

        {/* Section 6: Problem Statement */}
        <ProblemSection
          onOpenConsultation={() => handleOpenConsultation()}
        />

        {/* Section 7: Services (5 Cards with deep modals) */}
        <ServicesSection
          onOpenDetailModal={(service) => setActiveServiceModal(service)}
          onSelectService={handleSelectService}
        />

        {/* Section 8: Why Choose Us */}
        <WhyChooseUs />

        {/* Section 9: How It Works */}
        <HowItWorks
          onOpenConsultation={() => handleOpenConsultation()}
        />

        {/* Section 10: Pricing Section */}
        <PricingSection
          onSelectService={handleSelectService}
          onOpenConsultation={() => handleOpenConsultation()}
        />

        {/* Section 11: Combo Section & Interactive Bundle Estimator */}
        <ComboSection
          onSelectCombo={(comboName) => handleOpenConsultation(comboName)}
          onOpenConsultation={(customNoteText) => handleOpenConsultation('Nhiều dịch vụ', customNoteText)}
        />

        {/* Section 12: Case Studies / Portfolio */}
        <PortfolioSection
          onOpenConsultation={(note) => handleOpenConsultation('Nhiều dịch vụ', note)}
        />

        {/* Section 13: Testimonials */}
        <TestimonialsSection />

        {/* Section 14: FAQ */}
        <FAQSection
          onOpenConsultation={() => handleOpenConsultation()}
        />

        {/* Section 15: Final CTA Banner */}
        <FinalCTA
          onOpenConsultation={() => handleOpenConsultation()}
          onScrollToPricing={() => scrollToSection('pricing')}
        />

        {/* Section 16: Contact Form */}
        <ContactFormSection
          preselectedService={preselectedService}
          customNote={customNote}
        />

      </main>

      {/* Section 17: Footer */}
      <Footer
        onSelectService={handleSelectService}
        onOpenConsultation={() => handleOpenConsultation()}
      />

      {/* Section 18: Sticky Mobile Bottom Bar */}
      <StickyMobileBar
        onOpenConsultation={() => handleOpenConsultation()}
        onOpenAudit={() => setIsAuditModalOpen(true)}
      />

      {/* Service Detail Modal */}
      <ServiceDetailModal
        service={activeServiceModal}
        onClose={() => setActiveServiceModal(null)}
        onSelectService={handleSelectService}
      />

      {/* Quick 30s Salon Audit Modal */}
      <QuickAuditModal
        isOpen={isAuditModalOpen}
        onClose={() => setIsAuditModalOpen(false)}
        onSelectAuditResult={handleSelectAuditResult}
      />

    </div>
  );
}
