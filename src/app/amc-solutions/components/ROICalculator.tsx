'use client';

import { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface CalculatorInputs {
  employees: number;
  downtimeHours: number;
  hourlyRate: number;
  repairCosts: number;
}

interface CalculatorResults {
  annualDowntimeCost: number;
  annualRepairCost: number;
  totalAnnualCost: number;
  amcCost: number;
  annualSavings: number;
  roi: number;
}

const ROICalculator = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [inputs, setInputs] = useState<CalculatorInputs>({
    employees: 25,
    downtimeHours: 40,
    hourlyRate: 500,
    repairCosts: 150000
  });

  const [results, setResults] = useState<CalculatorResults>({
    annualDowntimeCost: 0,
    annualRepairCost: 0,
    totalAnnualCost: 0,
    amcCost: 0,
    annualSavings: 0,
    roi: 0
  });

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (!isHydrated) return;

    const annualDowntimeCost = inputs.employees * inputs.downtimeHours * inputs.hourlyRate;
    const annualRepairCost = inputs.repairCosts;
    const totalAnnualCost = annualDowntimeCost + annualRepairCost;
    
    const amcCost = 24999 * 12;
    const annualSavings = totalAnnualCost - amcCost;
    const roi = totalAnnualCost > 0 ? ((annualSavings / amcCost) * 100) : 0;

    setResults({
      annualDowntimeCost,
      annualRepairCost,
      totalAnnualCost,
      amcCost,
      annualSavings,
      roi
    });
  }, [inputs, isHydrated]);

  const handleInputChange = (field: keyof CalculatorInputs, value: string) => {
    const numValue = parseInt(value) || 0;
    setInputs(prev => ({ ...prev, [field]: numValue }));
  };

  const formatCurrency = (amount: number): string => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  if (!isHydrated) {
    return (
      <section id="calculator" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <div className="inline-block w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="calculator" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-text-primary mb-4">
            Calculate Your AMC ROI
          </h2>
          <p className="text-lg text-text-secondary">
            See how much you can save with proactive maintenance versus reactive repairs and downtime costs.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-card border border-border rounded-2xl p-8 space-y-6">
            <div className="flex items-center space-x-3 pb-6 border-b border-border">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <Icon name="CalculatorIcon" size={20} className="text-primary" />
              </div>
              <h3 className="text-xl font-heading font-bold text-text-primary">
                Your Current Situation
              </h3>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-text-primary mb-2">
                  Number of Employees
                </label>
                <input
                  type="number"
                  value={inputs.employees}
                  onChange={(e) => handleInputChange('employees', e.target.value)}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg text-text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                  min="1"
                />
                <p className="text-xs text-text-secondary mt-1">Affected by IT downtime</p>
              </div>

              <div>
                <label className="block text-sm font-semibold text-text-primary mb-2">
                  Annual Downtime Hours
                </label>
                <input
                  type="number"
                  value={inputs.downtimeHours}
                  onChange={(e) => handleInputChange('downtimeHours', e.target.value)}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg text-text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                  min="0"
                />
                <p className="text-xs text-text-secondary mt-1">Total hours of system unavailability per year</p>
              </div>

              <div>
                <label className="block text-sm font-semibold text-text-primary mb-2">
                  Average Hourly Rate (₹)
                </label>
                <input
                  type="number"
                  value={inputs.hourlyRate}
                  onChange={(e) => handleInputChange('hourlyRate', e.target.value)}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg text-text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                  min="0"
                />
                <p className="text-xs text-text-secondary mt-1">Cost per employee per hour</p>
              </div>

              <div>
                <label className="block text-sm font-semibold text-text-primary mb-2">
                  Annual Repair Costs (₹)
                </label>
                <input
                  type="number"
                  value={inputs.repairCosts}
                  onChange={(e) => handleInputChange('repairCosts', e.target.value)}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg text-text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                  min="0"
                />
                <p className="text-xs text-text-secondary mt-1">Emergency repairs and hardware replacements</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-primary to-secondary rounded-2xl p-8 text-white">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                  <Icon name="ChartBarIcon" size={20} className="text-white" />
                </div>
                <h3 className="text-xl font-heading font-bold">
                  Your Potential Savings
                </h3>
              </div>

              <div className="space-y-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <p className="text-sm text-white/80 mb-1">Current Annual Costs</p>
                  <p className="text-3xl font-heading font-bold">{formatCurrency(results.totalAnnualCost)}</p>
                  <div className="mt-3 pt-3 border-t border-white/20 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-white/80">Downtime Cost:</span>
                      <span className="font-semibold">{formatCurrency(results.annualDowntimeCost)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-white/80">Repair Cost:</span>
                      <span className="font-semibold">{formatCurrency(results.annualRepairCost)}</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <p className="text-sm text-white/80 mb-1">Professional AMC Cost</p>
                  <p className="text-3xl font-heading font-bold">{formatCurrency(results.amcCost)}</p>
                  <p className="text-xs text-white/70 mt-1">₹24,999/month × 12 months</p>
                </div>

                <div className="bg-brand-trust/20 backdrop-blur-sm rounded-lg p-4 border-2 border-brand-trust">
                  <p className="text-sm text-white/80 mb-1">Annual Savings</p>
                  <p className="text-4xl font-heading font-bold text-brand-trust">
                    {formatCurrency(Math.max(0, results.annualSavings))}
                  </p>
                  <div className="flex items-center space-x-2 mt-2">
                    <Icon name="TrendingUpIcon" size={16} className="text-brand-trust" />
                    <span className="text-sm font-semibold text-brand-trust">
                      {results.roi > 0 ? `${results.roi.toFixed(0)}% ROI` : 'Break-even analysis'}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-2xl p-6">
              <h4 className="text-lg font-heading font-bold text-text-primary mb-4">
                What You Get with AMC
              </h4>
              <ul className="space-y-3">
                {[
                  'Proactive monitoring prevents 95% of issues',
                  'Guaranteed 2-hour response time',
                  'No surprise repair bills',
                  'Regular performance optimization',
                  'Priority support access',
                  'Detailed monthly reports'
                ].map((benefit, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <Icon name="CheckCircleIcon" size={20} className="text-brand-trust flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-text-secondary">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ROICalculator;