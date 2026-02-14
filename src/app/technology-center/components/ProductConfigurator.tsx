'use client';

import { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface ConfigOption {
  id: string;
  name: string;
  options: { value: string; label: string; price: number }[];
}

export default function ProductConfigurator() {
  const [configuration, setConfiguration] = useState<Record<string, string>>({
    processor: '',
    memory: '',
    storage: '',
    network: ''
  });

  const configOptions: ConfigOption[] = [
    {
      id: 'processor',
      name: 'Processor',
      options: [
        { value: 'intel-i5', label: 'Intel Core i5 12th Gen', price: 25000 },
        { value: 'intel-i7', label: 'Intel Core i7 12th Gen', price: 45000 },
        { value: 'intel-i9', label: 'Intel Core i9 12th Gen', price: 65000 }
      ]
    },
    {
      id: 'memory',
      name: 'Memory (RAM)',
      options: [
        { value: '16gb', label: '16GB DDR4', price: 8000 },
        { value: '32gb', label: '32GB DDR4', price: 16000 },
        { value: '64gb', label: '64GB DDR4', price: 32000 }
      ]
    },
    {
      id: 'storage',
      name: 'Storage',
      options: [
        { value: '512gb-ssd', label: '512GB NVMe SSD', price: 6000 },
        { value: '1tb-ssd', label: '1TB NVMe SSD', price: 10000 },
        { value: '2tb-ssd', label: '2TB NVMe SSD', price: 18000 }
      ]
    },
    {
      id: 'network',
      name: 'Network Card',
      options: [
        { value: 'standard', label: 'Standard Gigabit Ethernet', price: 0 },
        { value: '10gb', label: '10GB Ethernet', price: 15000 },
        { value: 'dual-10gb', label: 'Dual 10GB Ethernet', price: 28000 }
      ]
    }
  ];

  const calculateTotal = () => {
    let total = 85000; // Base price
    configOptions.forEach((option) => {
      const selected = configuration[option.id];
      if (selected) {
        const selectedOption = option.options.find(opt => opt.value === selected);
        if (selectedOption) total += selectedOption.price;
      }
    });
    return total;
  };

  const handleOptionChange = (optionId: string, value: string) => {
    setConfiguration(prev => ({ ...prev, [optionId]: value }));
  };

  const isConfigComplete = Object.values(configuration).every(val => val !== '');

  return (
    <div className="bg-card border border-border rounded-lg p-6">
      <div className="flex items-center mb-6">
        <div className="p-3 bg-primary/10 rounded-lg mr-4">
          <Icon name="CogIcon" size={24} className="text-primary" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-text-primary">Product Configurator</h3>
          <p className="text-sm text-text-secondary">Customize your server to meet your specific requirements</p>
        </div>
      </div>

      <div className="space-y-6">
        {configOptions.map((option) => (
          <div key={option.id}>
            <label className="block text-sm font-medium text-text-primary mb-3">
              {option.name}
            </label>
            <div className="space-y-2">
              {option.options.map((opt) => (
                <label
                  key={opt.value}
                  className={`flex items-center justify-between p-3 border rounded-lg cursor-pointer transition-all ${
                    configuration[option.id] === opt.value
                      ? 'border-primary bg-primary/5' :'border-border hover:border-primary/50'
                  }`}
                >
                  <div className="flex items-center">
                    <input
                      type="radio"
                      name={option.id}
                      value={opt.value}
                      checked={configuration[option.id] === opt.value}
                      onChange={(e) => handleOptionChange(option.id, e.target.value)}
                      className="w-4 h-4 text-primary focus:ring-primary"
                    />
                    <span className="ml-3 text-sm text-text-primary">{opt.label}</span>
                  </div>
                  <span className="text-sm font-semibold text-primary">
                    {opt.price > 0 ? `+₹${opt.price.toLocaleString('en-IN')}` : 'Included'}
                  </span>
                </label>
              ))}
            </div>
          </div>
        ))}

        <div className="pt-6 border-t border-border">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-medium text-text-secondary">Base Configuration</span>
            <span className="text-sm text-text-secondary">₹85,000</span>
          </div>
          <div className="flex items-center justify-between mb-4">
            <span className="text-base font-semibold text-text-primary">Total Price</span>
            <span className="text-2xl font-bold text-primary">₹{calculateTotal().toLocaleString('en-IN')}</span>
          </div>
          <button
            disabled={!isConfigComplete}
            className="w-full px-6 py-3 text-sm font-semibold text-cta-foreground bg-cta hover:bg-cta/90 disabled:bg-muted disabled:text-muted-foreground rounded-lg transition-colors"
          >
            Request Quote
          </button>
        </div>
      </div>
    </div>
  );
}