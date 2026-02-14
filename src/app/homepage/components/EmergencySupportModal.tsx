import { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface EmergencySupportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const EmergencySupportModal = ({ isOpen, onClose }: EmergencySupportModalProps) => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    issue: '',
    severity: 'high'
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  if (!isOpen) return null;
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      onClose();
      setFormData({
        name: '',
        company: '',
        phone: '',
        email: '',
        issue: '',
        severity: 'high'
      });
    }, 3000);
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-card rounded-2xl shadow-elevated max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-card border-b border-border px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="flex items-center justify-center w-10 h-10 bg-accent/10 rounded-lg">
              <Icon name="PhoneIcon" size={24} className="text-accent" variant="solid" />
            </div>
            <div>
              <h2 className="text-xl font-heading font-bold text-text-primary">Emergency Support Request</h2>
              <p className="text-sm text-text-secondary">We'll respond within 15 minutes</p>
            </div>
          </div>
          
          <button
            onClick={onClose}
            className="p-2 hover:bg-muted rounded-lg transition-colors duration-300"
            aria-label="Close modal"
          >
            <Icon name="XMarkIcon" size={24} className="text-text-secondary" />
          </button>
        </div>
        
        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-text-primary mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                  placeholder="Enter your name"
                />
              </div>
              
              <div>
                <label htmlFor="company" className="block text-sm font-semibold text-text-primary mb-2">
                  Company Name *
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                  placeholder="Enter company name"
                />
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-text-primary mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                  placeholder="+91 98765 43210"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-text-primary mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                  placeholder="your@email.com"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="severity" className="block text-sm font-semibold text-text-primary mb-2">
                Issue Severity *
              </label>
              <select
                id="severity"
                name="severity"
                value={formData.severity}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
              >
                <option value="critical">Critical - Complete System Down</option>
                <option value="high">High - Major Functionality Impacted</option>
                <option value="medium">Medium - Partial Service Disruption</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="issue" className="block text-sm font-semibold text-text-primary mb-2">
                Describe the Issue *
              </label>
              <textarea
                id="issue"
                name="issue"
                value={formData.issue}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 resize-none"
                placeholder="Please provide details about the technical issue you're experiencing..."
              />
            </div>
            
            <div className="bg-warning/10 border border-warning/30 rounded-lg p-4">
              <div className="flex items-start space-x-3">
                <Icon name="ExclamationTriangleIcon" size={20} className="text-warning flex-shrink-0 mt-0.5" variant="solid" />
                <div className="text-sm text-text-secondary">
                  <p className="font-semibold text-text-primary mb-1">Emergency Response Protocol</p>
                  <p>Our technical team will contact you within 15 minutes. For immediate assistance, call our 24/7 hotline: <span className="font-semibold text-accent">1800-123-4567</span></p>
                </div>
              </div>
            </div>
            
            <div className="flex space-x-4">
              <button
                type="submit"
                className="flex-1 px-6 py-3 text-base font-heading font-semibold text-white bg-accent hover:bg-accent/90 rounded-lg shadow-subtle hover:shadow-brand transition-all duration-300"
              >
                Submit Emergency Request
              </button>
              
              <button
                type="button"
                onClick={onClose}
                className="px-6 py-3 text-base font-heading font-semibold text-text-secondary bg-muted hover:bg-muted/80 rounded-lg transition-all duration-300"
              >
                Cancel
              </button>
            </div>
          </form>
        ) : (
          <div className="p-12 text-center">
            <div className="flex items-center justify-center w-20 h-20 bg-success/10 rounded-full mx-auto mb-6">
              <Icon name="CheckCircleIcon" size={48} className="text-success" variant="solid" />
            </div>
            
            <h3 className="text-2xl font-heading font-bold text-text-primary mb-3">
              Request Submitted Successfully!
            </h3>
            
            <p className="text-lg text-text-secondary mb-6">
              Our emergency response team has been notified and will contact you within 15 minutes.
            </p>
            
            <div className="bg-muted rounded-lg p-4 inline-block">
              <p className="text-sm text-text-secondary">
                Reference ID: <span className="font-mono font-semibold text-primary">EMG-{Date.now().toString().slice(-8)}</span>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EmergencySupportModal;