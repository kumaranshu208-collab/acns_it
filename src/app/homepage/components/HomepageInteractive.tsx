'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/common/Header';
import HeroSection from './HeroSection';
import ServiceFinderSection from './ServiceFinderSection';
import StatsSection from './StatsSection';
import TestimonialsSection from './TestimonialsSection';
import CTASection from './CTASection';
import QuickAccessToolbar from './QuickAccessToolbar';
import EmergencySupportModal from './EmergencySupportModal';
import FooterSection from './FooterSection';

const HomepageInteractive = () => {
  const [isEmergencyModalOpen, setIsEmergencyModalOpen] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const handleEmergencySupport = () => {
    if (isHydrated) {
      setIsEmergencyModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    if (isHydrated) {
      setIsEmergencyModalOpen(false);
    }
  };

  if (!isHydrated) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <div className="h-screen flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-text-secondary">Loading...</p>
            </div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        <HeroSection onEmergencySupport={handleEmergencySupport} />
        <ServiceFinderSection />
        <StatsSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      
      <FooterSection />
      
      <QuickAccessToolbar onEmergencySupport={handleEmergencySupport} />
      
      <EmergencySupportModal 
        isOpen={isEmergencyModalOpen} 
        onClose={handleCloseModal} 
      />
    </div>
  );
};

export default HomepageInteractive;