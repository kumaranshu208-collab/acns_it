'use client';

import { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface ROICalculatorProps {
  serviceType: string;
}

export default function ROICalculator({ serviceType }: ROICalculatorProps) {
  const [isHydrated, setIsHydrated] = useState(false);
  const [monthlyDowntime, setMonthlyDowntime] = useState(8);
  const [hourlyRevenue, setHourlyRevenue] = useState(5000);
  const [currentITCost, setCurrentITCost] = useState(25000);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) {
    return (
      <div className="bg-card border border-border rounded-lg p-6">
        <div className="animate-pulse space-y-4">
          <div className="h-8 bg-muted rounded w-3/4"></div>
          <div className="h-4 bg-muted rounded w-full"></div>
          <div className="h-32 bg-muted rounded"></div>
        </div>
      </div>
    );
  }

  const annualDowntimeCost = monthlyDowntime * hourlyRevenue * 12;
  const annualITCost = currentITCost * 12;
  const estimatedServiceCost = serviceType === 'AMC' ? 180000 : 240000;
  const downtimeReduction = 0.75;
  const efficiencyGain = 0.30;
  
  const savings = (annualDowntimeCost * downtimeReduction) + (annualITCost * efficiencyGain);
  const netBenefit = savings - estimatedServiceCost;
  const roi = ((netBenefit / estimatedServiceCost) * 100).toFixed(1);
  const paybackMonths = (estimatedServiceCost / (savings / 12)).toFixed(1);

  return (
    <div className="bg-gradient-to-br from-secondary/5 to-primary/5 border border-border rounded-lg p-6">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center">
          <Icon name="CalculatorIcon" size={24} className="text-secondary-foreground" />
        </div>
        <div>
          <h3 className="text-xl font-heading font-bold text-text-primary">ROI Calculator</h3>
          <p className="text-sm text-text-secondary">Estimate your potential savings</p>
        </div>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-text-primary mb-2">
            Monthly Downtime Hours: {monthlyDowntime}
          </label>
          <input
            type="range"
            min="1"
            max="40"
            value={monthlyDowntime}
            onChange={(e) => setMonthlyDowntime(Number(e.target.value))}
            className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-secondary"
          />
          <div className="flex justify-between text-xs text-muted-foreground mt-1">
            <span>1 hour</span>
            <span>40 hours</span>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-text-primary mb-2">
            Hourly Revenue Loss: ₹{hourlyRevenue.toLocaleString('en-IN')}
          </label>
          <input
            type="range"
            min="1000"
            max="50000"
            step="1000"
            value={hourlyRevenue}
            onChange={(e) => setHourlyRevenue(Number(e.target.value))}
            className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-secondary"
          />
          <div className="flex justify-between text-xs text-muted-foreground mt-1">
            <span>₹1,000</span>
            <span>₹50,000</span>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-text-primary mb-2">
            Current Monthly IT Cost: ₹{currentITCost.toLocaleString('en-IN')}
          </label>
          <input
            type="range"
            min="10000"
            max="100000"
            step="5000"
            value={currentITCost}
            onChange={(e) => setCurrentITCost(Number(e.target.value))}
            className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-secondary"
          />
          <div className="flex justify-between text-xs text-muted-foreground mt-1">
            <span>₹10,000</span>
            <span>₹1,00,000</span>
          </div>
        </div>

        <div className="bg-card border border-border rounded-lg p-4 space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-sm text-text-secondary">Annual Savings</span>
            <span className="text-lg font-heading font-bold text-success">₹{savings.toLocaleString('en-IN')}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-text-secondary">Service Investment</span>
            <span className="text-lg font-heading font-bold text-text-primary">₹{estimatedServiceCost.toLocaleString('en-IN')}</span>
          </div>
          <div className="border-t border-border pt-3">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-text-primary">Net Annual Benefit</span>
              <span className="text-xl font-heading font-bold text-primary">₹{netBenefit.toLocaleString('en-IN')}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-text-primary">ROI</span>
              <span className="text-xl font-heading font-bold text-accent">{roi}%</span>
            </div>
            <div className="flex justify-between items-center mt-2">
              <span className="text-sm font-medium text-text-primary">Payback Period</span>
              <span className="text-lg font-heading font-bold text-secondary">{paybackMonths} months</span>
            </div>
          </div>
        </div>

        <div className="bg-warning/10 border border-warning/20 rounded-lg p-4">
          <div className="flex items-start space-x-2">
            <Icon name="InformationCircleIcon" size={20} className="text-warning flex-shrink-0 mt-0.5" variant="solid" />
            <p className="text-xs text-text-secondary">
              Calculations based on industry averages: 75% downtime reduction and 30% efficiency improvement. Actual results may vary based on your specific environment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}