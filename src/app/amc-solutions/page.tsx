import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import HeroSection from './components/HeroSection';
import BenefitsSection from './components/BenefitsSection';
import PackageComparison from './components/PackageComparison';
import ROICalculator from './components/ROICalculator';
import SLASection from './components/SLASection';
import ClientPortalPreview from './components/ClientPortalPreview';
import TestimonialsSection from './components/TestimonialsSection';
import CTASection from './components/CTASection';
import FAQSection from './components/FAQSection';

export const metadata: Metadata = {
  title: 'AMC Solutions - Ansu Tech Solutions',
  description: 'Comprehensive Annual Maintenance Contracts with guaranteed uptime, predictable costs, and 24/7 support. Proactive technology care that keeps your business running smoothly.',
};

export default function AMCSolutionsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <BenefitsSection />
      <PackageComparison />
      <ROICalculator />
      <SLASection />
      <ClientPortalPreview />
      <TestimonialsSection />
      <CTASection />
      <FAQSection />
    </main>
  );
}  