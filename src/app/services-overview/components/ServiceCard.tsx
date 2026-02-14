'use client';

import { useState } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

interface ServiceCardProps {
  title: string;
  description: string;
  features: string[];
  image: string;
  alt: string;
  icon: string;
  link: string;
  category: string;
}

export default function ServiceCard({
  title,
  description,
  features,
  image,
  alt,
  icon,
  link,
  category
}: ServiceCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-elevated transition-all duration-300">
      <div className="relative h-48 overflow-hidden">
        <AppImage
          src={image}
          alt={alt}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4 bg-primary/90 backdrop-blur-sm px-3 py-1 rounded-full">
          <span className="text-xs font-semibold text-primary-foreground">{category}</span>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-start space-x-3 mb-4">
          <div className="flex-shrink-0 w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
            <Icon name={icon as any} size={24} className="text-secondary" />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-heading font-bold text-text-primary mb-2">{title}</h3>
            <p className="text-sm text-text-secondary line-clamp-2">{description}</p>
          </div>
        </div>

        <div className={`space-y-2 mb-4 ${isExpanded ? '' : 'max-h-24 overflow-hidden'}`}>
          {features.slice(0, isExpanded ? features.length : 3).map((feature, index) => (
            <div key={index} className="flex items-start space-x-2">
              <Icon name="CheckCircleIcon" size={16} className="text-success mt-0.5 flex-shrink-0" variant="solid" />
              <span className="text-sm text-text-secondary">{feature}</span>
            </div>
          ))}
        </div>

        {features.length > 3 && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-sm font-medium text-secondary hover:text-secondary/80 flex items-center space-x-1 mb-4 transition-colors duration-300"
          >
            <span>{isExpanded ? 'Show Less' : `Show ${features.length - 3} More Features`}</span>
            <Icon 
              name="ChevronDownIcon" 
              size={16} 
              className={`transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
            />
          </button>
        )}

        <Link
          href={link}
          className="block w-full px-4 py-3 text-center text-sm font-heading font-semibold text-cta-foreground bg-cta hover:bg-cta/90 rounded-lg transition-all duration-300"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
}