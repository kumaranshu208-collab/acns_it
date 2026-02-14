'use client';

import React, { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface EmergencySupportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const EmergencySupportModal: React.FC<EmergencySupportModalProps> = ({ isOpen, onClose }) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    issue: '',
    severity: 'critical',
  });

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated || !isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Emergency support request submitted! Our team will contact you within 5 minutes.');
    onClose();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="fixed inset-0 bg-text-primary/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-card rounded-xl shadow-elevated max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-accent p-6 flex items-center justify-between border-b border-border">
          <div className="flex items-center space-x-3">
            <Icon name="ExclamationTriangleIcon" size={28} className="text-accent-foreground" />
            <h2 className="text-2xl font-heading font-bold text-accent-foreground">
              Emergency Support Request
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-accent-foreground/20 rounded-lg transition-colors duration-300"
          >
            <Icon name="XMarkIcon" size={24} className="text-accent-foreground" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div className="bg-warning/10 border border-warning/30 rounded-lg p-4">
            <div className="flex items-start space-x-3">
              <Icon name="InformationCircleIcon" size={24} className="text-warning flex-shrink-0 mt-0.5" />
              <div className="text-sm text-text-primary">
                <p className="font-semibold mb-1">Emergency Support Guidelines:</p>
                <ul className="list-disc list-inside space-y-1 text-text-secondary">
                  <li>For critical system outages and security breaches</li>
                  <li>Expected response time: &lt;5 minutes</li>
                  <li>24/7 availability for AMC clients</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-text-primary mb-2">
                Full Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-300"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-text-primary mb-2">
                Company Name *
              </label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-300"
                placeholder="Enter company name"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-text-primary mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-300"
                placeholder="+91 98765 43210"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-text-primary mb-2">
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-300"
                placeholder="your.email@company.com"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-text-primary mb-2">
              Severity Level *
            </label>
            <select
              name="severity"
              value={formData.severity}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-300"
            >
              <option value="critical">Critical - Complete System Outage</option>
              <option value="high">High - Major Functionality Impaired</option>
              <option value="medium">Medium - Partial Service Disruption</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-text-primary mb-2">
              Issue Description *
            </label>
            <textarea
              name="issue"
              value={formData.issue}
              onChange={handleChange}
              required
              rows={4}
              className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-300 resize-none"
              placeholder="Describe the issue in detail including error messages, affected systems, and business impact..."
            />
          </div>

          <div className="flex items-center justify-end space-x-4 pt-4 border-t border-border">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-3 text-sm font-heading font-semibold text-text-secondary hover:text-text-primary hover:bg-muted rounded-lg transition-all duration-300"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-3 text-sm font-heading font-semibold text-accent-foreground bg-accent hover:bg-accent/90 rounded-lg shadow-subtle hover:shadow-elevated transition-all duration-300"
            >
              Submit Emergency Request
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EmergencySupportModal;   