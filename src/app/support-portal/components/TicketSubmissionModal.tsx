'use client';

import React, { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface TicketSubmissionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const TicketSubmissionModal: React.FC<TicketSubmissionModalProps> = ({ isOpen, onClose }) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    category: 'technical',
    priority: 'medium',
    subject: '',
    description: '',
  });

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated || !isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Support ticket submitted successfully! Ticket ID: #ST-2025-1234\n\nExpected response time: 2-4 hours');
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
      <div className="bg-card rounded-xl shadow-elevated max-w-3xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-primary p-6 flex items-center justify-between border-b border-border">
          <div className="flex items-center space-x-3">
            <Icon name="TicketIcon" size={28} className="text-primary-foreground" />
            <h2 className="text-2xl font-heading font-bold text-primary-foreground">
              Submit Support Ticket
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-primary-foreground/20 rounded-lg transition-colors duration-300"
          >
            <Icon name="XMarkIcon" size={24} className="text-primary-foreground" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
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
                className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                placeholder="Enter your full name"
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
                className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                placeholder="your.email@company.com"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-text-primary mb-2">
                Company Name
              </label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                placeholder="Enter company name"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-text-primary mb-2">
                Category *
              </label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
              >
                <option value="technical">Technical Support</option>
                <option value="hardware">Hardware Issue</option>
                <option value="software">Software Issue</option>
                <option value="network">Network Problem</option>
                <option value="maintenance">Maintenance Request</option>
                <option value="billing">Billing Inquiry</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-text-primary mb-2">
                Priority Level *
              </label>
              <div className="grid grid-cols-3 gap-4">
                {['low', 'medium', 'high'].map((priority) => (
                  <label
                    key={priority}
                    className={`flex items-center justify-center p-4 border-2 rounded-lg cursor-pointer transition-all duration-300 ${
                      formData.priority === priority
                        ? 'border-primary bg-primary/10' :'border-border hover:border-primary/50'
                    }`}
                  >
                    <input
                      type="radio"
                      name="priority"
                      value={priority}
                      checked={formData.priority === priority}
                      onChange={handleChange}
                      className="sr-only"
                    />
                    <span className="text-sm font-semibold text-text-primary capitalize">
                      {priority}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-text-primary mb-2">
              Subject *
            </label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
              placeholder="Brief description of the issue"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-text-primary mb-2">
              Detailed Description *
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              rows={6}
              className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300 resize-none"
              placeholder="Provide detailed information about your issue including:\n• What happened?\n• When did it start?\n• What have you tried?\n• Any error messages?"
            />
          </div>

          <div className="bg-muted rounded-lg p-4">
            <div className="flex items-start space-x-3">
              <Icon name="InformationCircleIcon" size={20} className="text-secondary flex-shrink-0 mt-0.5" />
              <div className="text-sm text-text-secondary">
                <p className="font-semibold text-text-primary mb-1">Response Time Expectations:</p>
                <ul className="space-y-1">
                  <li>• Low Priority: 24-48 hours</li>
                  <li>• Medium Priority: 4-8 hours</li>
                  <li>• High Priority: 1-2 hours</li>
                </ul>
              </div>
            </div>
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
              className="px-6 py-3 text-sm font-heading font-semibold text-cta-foreground bg-cta hover:bg-cta/90 rounded-lg shadow-subtle hover:shadow-elevated transition-all duration-300"
            >
              Submit Ticket
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TicketSubmissionModal;