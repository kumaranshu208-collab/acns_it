'use client';

import { useState } from 'react';
import ServiceCard from './ServiceCard';
import ServiceComparison from './ServiceComparison';
import ROICalculator from './ROICalculator';
import TestimonialCard from './TestimonialCard';
import DownloadBrochure from './DownloadBrochure';
import ServiceFilter from './ServiceFilter';

interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  image: string;
  alt: string;
  icon: string;
  link: string;
  category: string;
}

interface Testimonial {
  name: string;
  role: string;
  company: string;
  image: string;
  alt: string;
  testimonial: string;
  service: string;
  rating: number;
}

interface ComparisonFeature {
  name: string;
  networking: boolean | string;
  hardware: boolean | string;
  software: boolean | string;
  amc: boolean | string;
}

interface ServicesInteractiveProps {
  services: Service[];
  testimonials: Testimonial[];
  comparisonFeatures: ComparisonFeature[];
}

export default function ServicesInteractive({
  services,
  testimonials,
  comparisonFeatures
}: ServicesInteractiveProps) {
  const [activeFilter, setActiveFilter] = useState('all');
  const [showComparison, setShowComparison] = useState(false);

  const filteredServices = activeFilter === 'all' 
    ? services 
    : services.filter(service => service.category === activeFilter);

  return (
    <div className="space-y-12">
      <ServiceFilter onFilterChange={setActiveFilter} activeFilter={activeFilter} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredServices.map((service) => (
          <ServiceCard key={service.id} {...service} />
        ))}
      </div>

      <div className="flex justify-center">
        <button
          onClick={() => setShowComparison(!showComparison)}
          className="px-6 py-3 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/90 transition-all duration-300 font-heading font-semibold shadow-subtle"
        >
          {showComparison ? 'Hide' : 'Show'} Service Comparison
        </button>
      </div>

      {showComparison && (
        <ServiceComparison features={comparisonFeatures} />
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <ROICalculator serviceType="Comprehensive" />
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-heading font-bold text-text-primary">Client Success Stories</h3>
            <DownloadBrochure serviceType="Services" />
          </div>
          <div className="space-y-4">
            {testimonials.slice(0, 2).map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}