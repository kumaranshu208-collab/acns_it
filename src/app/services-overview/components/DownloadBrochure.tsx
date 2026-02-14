'use client';

import { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface DownloadBrochureProps {
  serviceType: string;
}

export default function DownloadBrochure({ serviceType }: DownloadBrochureProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsOpen(false);
      setIsSubmitted(false);
      setFormData({ name: '', email: '', company: '', phone: '' });
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center space-x-2 px-6 py-3 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-all duration-300 shadow-subtle hover:shadow-brand"
      >
        <Icon name="DocumentArrowDownIcon" size={20} />
        <span className="font-heading font-semibold">Download Brochure</span>
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-card border border-border rounded-lg max-w-md w-full p-6 shadow-elevated">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-heading font-bold text-text-primary">Download {serviceType} Brochure</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-muted rounded-lg transition-colors duration-200"
              >
                <Icon name="XMarkIcon" size={24} className="text-text-secondary" />
              </button>
            </div>

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring text-text-primary"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">Business Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring text-text-primary"
                    placeholder="you@company.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">Company Name *</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring text-text-primary"
                    placeholder="Your company"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring text-text-primary"
                    placeholder="+91 98765 43210"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-cta text-cta-foreground rounded-lg hover:bg-cta/90 transition-all duration-300 font-heading font-semibold"
                >
                  Download Now
                </button>

                <p className="text-xs text-text-secondary text-center">
                  By downloading, you agree to receive communications from Ansu Tech Solutions
                </p>
              </form>
            ) : (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="CheckCircleIcon" size={32} className="text-success" variant="solid" />
                </div>
                <h4 className="text-lg font-heading font-bold text-text-primary mb-2">Download Starting...</h4>
                <p className="text-sm text-text-secondary">Your brochure will download shortly</p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}