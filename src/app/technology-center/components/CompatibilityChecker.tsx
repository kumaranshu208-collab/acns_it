'use client';

import { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface CompatibilityResult {
  compatible: boolean;
  message: string;
  recommendations: string[];
}

export default function CompatibilityChecker() {
  const [selectedProduct, setSelectedProduct] = useState('');
  const [existingSystem, setExistingSystem] = useState('');
  const [result, setResult] = useState<CompatibilityResult | null>(null);

  const products = [
    'Dell PowerEdge R750 Server',
    'Cisco Catalyst 9300 Switch',
    'HP ProLiant DL380 Gen10',
    'Fortinet FortiGate 100F Firewall',
    'Synology DS920+ NAS'
  ];

  const systems = [
    'Windows Server 2019',
    'Windows Server 2022',
    'Ubuntu Server 20.04',
    'VMware ESXi 7.0',
    'Existing Network Infrastructure'
  ];

  const checkCompatibility = () => {
    if (!selectedProduct || !existingSystem) return;

    const mockResult: CompatibilityResult = {
      compatible: true,
      message: 'This product is fully compatible with your existing system.',
      recommendations: [
        'Ensure firmware is updated to latest version',
        'Configure network settings according to best practices',
        'Consider redundant power supply for critical applications'
      ]
    };

    setResult(mockResult);
  };

  return (
    <div className="bg-card border border-border rounded-lg p-6">
      <div className="flex items-center mb-6">
        <div className="p-3 bg-secondary/10 rounded-lg mr-4">
          <Icon name="WrenchScrewdriverIcon" size={24} className="text-secondary" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-text-primary">Compatibility Checker</h3>
          <p className="text-sm text-text-secondary">Verify product compatibility with your existing infrastructure</p>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-text-primary mb-2">
            Select Product
          </label>
          <select
            value={selectedProduct}
            onChange={(e) => setSelectedProduct(e.target.value)}
            className="w-full px-4 py-2 border border-input rounded-lg bg-background text-text-primary focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="">Choose a product...</option>
            {products.map((product) => (
              <option key={product} value={product}>{product}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-text-primary mb-2">
            Existing System
          </label>
          <select
            value={existingSystem}
            onChange={(e) => setExistingSystem(e.target.value)}
            className="w-full px-4 py-2 border border-input rounded-lg bg-background text-text-primary focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="">Choose your system...</option>
            {systems.map((system) => (
              <option key={system} value={system}>{system}</option>
            ))}
          </select>
        </div>

        <button
          onClick={checkCompatibility}
          disabled={!selectedProduct || !existingSystem}
          className="w-full px-6 py-3 text-sm font-semibold text-cta-foreground bg-cta hover:bg-cta/90 disabled:bg-muted disabled:text-muted-foreground rounded-lg transition-colors"
        >
          Check Compatibility
        </button>

        {result && (
          <div className={`p-4 rounded-lg border ${result.compatible ? 'bg-success/10 border-success' : 'bg-error/10 border-error'}`}>
            <div className="flex items-start mb-3">
              <Icon 
                name={result.compatible ? 'CheckCircleIcon' : 'XCircleIcon'} 
                size={20} 
                className={`mr-2 mt-0.5 ${result.compatible ? 'text-success' : 'text-error'}`}
              />
              <p className="text-sm font-medium text-text-primary">{result.message}</p>
            </div>
            {result.recommendations.length > 0 && (
              <div className="mt-3 pt-3 border-t border-border">
                <p className="text-xs font-semibold text-text-primary mb-2">Recommendations:</p>
                <ul className="space-y-1">
                  {result.recommendations.map((rec, index) => (
                    <li key={index} className="flex items-start text-xs text-text-secondary">
                      <Icon name="LightBulbIcon" size={14} className="mr-1 mt-0.5 text-warning flex-shrink-0" />
                      <span>{rec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}