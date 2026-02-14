'use client';

import { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface Feature {
  name: string;
  basic: boolean | string;
  professional: boolean | string;
  enterprise: boolean | string;
}

interface Package {
  name: string;
  price: string;
  period: string;
  description: string;
  popular?: boolean;
  features: string[];
  responseTime: string;
  coverage: string;
}

const packages: Package[] = [
  {
    name: 'Basic Care',
    price: '₹12,999',
    period: '/month',
    description: 'Essential maintenance for small businesses with standard IT needs',
    features: [
      'Monthly system health checks',
      'Business hours support (9 AM - 6 PM)',
      'Remote assistance included',
      'Quarterly performance reports',
      'Email & phone support',
      'Basic security updates'
    ],
    responseTime: '4 hours',
    coverage: 'Business Hours'
  },
  {
    name: 'Professional',
    price: '₹24,999',
    period: '/month',
    popular: true,
    description: 'Comprehensive care for growing businesses requiring reliable uptime',
    features: [
      'Weekly system monitoring',
      'Extended support (7 AM - 10 PM)',
      'On-site visits (2 per month)',
      'Monthly detailed reports',
      'Priority support channels',
      'Advanced security management',
      'Backup system monitoring',
      'Performance optimization'
    ],
    responseTime: '2 hours',
    coverage: 'Extended Hours'
  },
  {
    name: 'Enterprise',
    price: '₹49,999',
    period: '/month',
    description: 'Mission-critical support with guaranteed uptime and dedicated resources',
    features: [
      '24/7 proactive monitoring',
      'Round-the-clock support',
      'Unlimited on-site visits',
      'Real-time reporting dashboard',
      'Dedicated account manager',
      'Enterprise security suite',
      'Disaster recovery planning',
      'Custom SLA agreements',
      'Technology roadmap planning'
    ],
    responseTime: '1 hour',
    coverage: '24/7/365'
  }
];

const comparisonFeatures: Feature[] = [
  { name: 'System Monitoring', basic: 'Monthly', professional: 'Weekly', enterprise: '24/7 Real-time' },
  { name: 'Response Time (Critical)', basic: '4 hours', professional: '2 hours', enterprise: '1 hour' },
  { name: 'Support Coverage', basic: 'Business Hours', professional: 'Extended Hours', enterprise: '24/7/365' },
  { name: 'On-site Visits', basic: false, professional: '2/month', enterprise: 'Unlimited' },
  { name: 'Remote Assistance', basic: true, professional: true, enterprise: true },
  { name: 'Performance Reports', basic: 'Quarterly', professional: 'Monthly', enterprise: 'Real-time Dashboard' },
  { name: 'Security Updates', basic: 'Basic', professional: 'Advanced', enterprise: 'Enterprise Suite' },
  { name: 'Backup Monitoring', basic: false, professional: true, enterprise: true },
  { name: 'Disaster Recovery', basic: false, professional: false, enterprise: true },
  { name: 'Dedicated Manager', basic: false, professional: false, enterprise: true },
  { name: 'Custom SLA', basic: false, professional: false, enterprise: true },
  { name: 'Technology Planning', basic: false, professional: false, enterprise: true }
];

const PackageComparison = () => {
  const [viewMode, setViewMode] = useState<'cards' | 'table'>('cards');

  return (
    <section id="packages" className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-text-primary mb-4">
            Choose Your Perfect AMC Package
          </h2>
          <p className="text-lg text-text-secondary mb-8">
            Flexible maintenance plans designed to match your business size, technology complexity, and support requirements.
          </p>
          
          <div className="inline-flex items-center space-x-2 p-1 bg-card border border-border rounded-lg">
            <button
              onClick={() => setViewMode('cards')}
              className={`px-6 py-2 text-sm font-semibold rounded-md transition-all duration-300 ${
                viewMode === 'cards' ?'bg-primary text-white shadow-subtle' :'text-text-secondary hover:text-primary'
              }`}
            >
              <Icon name="Squares2X2Icon" size={16} className="inline mr-2" />
              Card View
            </button>
            <button
              onClick={() => setViewMode('table')}
              className={`px-6 py-2 text-sm font-semibold rounded-md transition-all duration-300 ${
                viewMode === 'table' ?'bg-primary text-white shadow-subtle' :'text-text-secondary hover:text-primary'
              }`}
            >
              <Icon name="TableCellsIcon" size={16} className="inline mr-2" />
              Compare All
            </button>
          </div>
        </div>

        {viewMode === 'cards' ? (
          <div className="grid lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`relative bg-card border-2 rounded-2xl p-8 transition-all duration-300 ${
                  pkg.popular
                    ? 'border-primary shadow-brand scale-105'
                    : 'border-border hover:border-primary/50 hover:shadow-elevated'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center px-4 py-1 bg-primary text-white text-xs font-bold rounded-full shadow-subtle">
                      <Icon name="StarIcon" size={14} className="mr-1" />
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-heading font-bold text-text-primary mb-2">
                    {pkg.name}
                  </h3>
                  <p className="text-sm text-text-secondary mb-6">
                    {pkg.description}
                  </p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-heading font-bold text-primary">
                      {pkg.price}
                    </span>
                    <span className="text-lg text-text-secondary ml-2">
                      {pkg.period}
                    </span>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                    <span className="text-sm font-medium text-text-secondary">Response Time</span>
                    <span className="text-sm font-bold text-accent">{pkg.responseTime}</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                    <span className="text-sm font-medium text-text-secondary">Coverage</span>
                    <span className="text-sm font-bold text-brand-trust">{pkg.coverage}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <Icon name="CheckCircleIcon" size={20} className="text-brand-trust flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-text-secondary">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3 text-base font-heading font-semibold rounded-lg transition-all duration-300 ${
                    pkg.popular
                      ? 'bg-primary text-white hover:bg-primary/90 shadow-subtle'
                      : 'bg-muted text-primary hover:bg-primary hover:text-white border border-primary'
                  }`}
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-elevated">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-muted border-b border-border">
                    <th className="text-left p-6 text-sm font-heading font-bold text-text-primary min-w-[200px]">
                      Features
                    </th>
                    {packages.map((pkg, index) => (
                      <th key={index} className="text-center p-6 min-w-[180px]">
                        <div className="space-y-2">
                          <p className="text-lg font-heading font-bold text-text-primary">
                            {pkg.name}
                          </p>
                          <p className="text-2xl font-heading font-bold text-primary">
                            {pkg.price}
                          </p>
                          <p className="text-xs text-text-secondary">{pkg.period}</p>
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {comparisonFeatures.map((feature, index) => (
                    <tr key={index} className="border-b border-border hover:bg-muted/50 transition-colors duration-200">
                      <td className="p-6 text-sm font-medium text-text-primary">
                        {feature.name}
                      </td>
                      <td className="p-6 text-center">
                        {typeof feature.basic === 'boolean' ? (
                          feature.basic ? (
                            <Icon name="CheckIcon" size={20} className="text-brand-trust mx-auto" />
                          ) : (
                            <Icon name="XMarkIcon" size={20} className="text-muted-foreground mx-auto" />
                          )
                        ) : (
                          <span className="text-sm text-text-secondary">{feature.basic}</span>
                        )}
                      </td>
                      <td className="p-6 text-center">
                        {typeof feature.professional === 'boolean' ? (
                          feature.professional ? (
                            <Icon name="CheckIcon" size={20} className="text-brand-trust mx-auto" />
                          ) : (
                            <Icon name="XMarkIcon" size={20} className="text-muted-foreground mx-auto" />
                          )
                        ) : (
                          <span className="text-sm text-text-secondary">{feature.professional}</span>
                        )}
                      </td>
                      <td className="p-6 text-center">
                        {typeof feature.enterprise === 'boolean' ? (
                          feature.enterprise ? (
                            <Icon name="CheckIcon" size={20} className="text-brand-trust mx-auto" />
                          ) : (
                            <Icon name="XMarkIcon" size={20} className="text-muted-foreground mx-auto" />
                          )
                        ) : (
                          <span className="text-sm text-text-secondary">{feature.enterprise}</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PackageComparison;