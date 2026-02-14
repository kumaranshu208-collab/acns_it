'use client';

import { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface ComparisonFeature {
  name: string;
  networking: boolean | string;
  hardware: boolean | string;
  software: boolean | string;
  amc: boolean | string;
}

interface ServiceComparisonProps {
  features: ComparisonFeature[];
}

export default function ServiceComparison({ features }: ServiceComparisonProps) {
  const [activeService, setActiveService] = useState<string>('all');

  const services = [
    { id: 'all', name: 'All Services', color: 'text-primary' },
    { id: 'networking', name: 'Networking', color: 'text-secondary' },
    { id: 'hardware', name: 'Hardware', color: 'text-accent' },
    { id: 'software', name: 'Software', color: 'text-success' },
    { id: 'amc', name: 'AMC', color: 'text-warning' }
  ];

  const renderValue = (value: boolean | string) => {
    if (typeof value === 'boolean') {
      return value ? (
        <Icon name="CheckIcon" size={20} className="text-success" variant="solid" />
      ) : (
        <Icon name="XMarkIcon" size={20} className="text-muted-foreground" />
      );
    }
    return <span className="text-sm text-text-secondary">{value}</span>;
  };

  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden">
      <div className="p-6 border-b border-border">
        <h3 className="text-2xl font-heading font-bold text-text-primary mb-4">Service Comparison Matrix</h3>
        <div className="flex flex-wrap gap-2">
          {services.map((service) => (
            <button
              key={service.id}
              onClick={() => setActiveService(service.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                activeService === service.id
                  ? 'bg-primary text-primary-foreground shadow-subtle'
                  : 'bg-muted text-text-secondary hover:bg-muted/80'
              }`}
            >
              {service.name}
            </button>
          ))}
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-muted">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-heading font-semibold text-text-primary">Feature</th>
              {(activeService === 'all' || activeService === 'networking') && (
                <th className="px-6 py-4 text-center text-sm font-heading font-semibold text-text-primary">Networking</th>
              )}
              {(activeService === 'all' || activeService === 'hardware') && (
                <th className="px-6 py-4 text-center text-sm font-heading font-semibold text-text-primary">Hardware</th>
              )}
              {(activeService === 'all' || activeService === 'software') && (
                <th className="px-6 py-4 text-center text-sm font-heading font-semibold text-text-primary">Software</th>
              )}
              {(activeService === 'all' || activeService === 'amc') && (
                <th className="px-6 py-4 text-center text-sm font-heading font-semibold text-text-primary">AMC</th>
              )}
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {features.map((feature, index) => (
              <tr key={index} className="hover:bg-muted/50 transition-colors duration-200">
                <td className="px-6 py-4 text-sm font-medium text-text-primary">{feature.name}</td>
                {(activeService === 'all' || activeService === 'networking') && (
                  <td className="px-6 py-4 text-center">{renderValue(feature.networking)}</td>
                )}
                {(activeService === 'all' || activeService === 'hardware') && (
                  <td className="px-6 py-4 text-center">{renderValue(feature.hardware)}</td>
                )}
                {(activeService === 'all' || activeService === 'software') && (
                  <td className="px-6 py-4 text-center">{renderValue(feature.software)}</td>
                )}
                {(activeService === 'all' || activeService === 'amc') && (
                  <td className="px-6 py-4 text-center">{renderValue(feature.amc)}</td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}