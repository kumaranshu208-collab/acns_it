'use client';

import { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: 'What is included in the AMC package?',
    answer: 'Our AMC packages include proactive system monitoring, regular maintenance visits, priority support access, software updates, security patches, performance optimization, detailed reporting, and guaranteed response times based on your chosen plan. All packages also include remote assistance and email/phone support.'
  },
  {
    question: 'How quickly will you respond to critical issues?',
    answer: 'Response times vary by package: Basic Care offers 4-hour response, Professional provides 2-hour response, and Enterprise guarantees 1-hour response for critical issues. All response times are backed by our SLA with automatic service credits if we miss the commitment.'
  },
  {
    question: 'Can I upgrade or downgrade my AMC plan?',
    answer: 'Yes, you can change your AMC plan at any time. Upgrades take effect immediately, while downgrades apply from the next billing cycle. We\'ll work with you to ensure a smooth transition and adjust pricing accordingly with no penalties for changes.'
  },
  {
    question: 'What happens if you breach the SLA?',
    answer: 'If we fail to meet our SLA commitments, you automatically receive service credits applied to your next invoice. The credit amount is calculated based on the severity of the breach and is detailed in your service agreement. We track all SLA metrics transparently in your client portal.'
  },
  {
    question: 'Do you provide on-site support?',
    answer: 'Yes, on-site support is included in Professional (2 visits per month) and Enterprise (unlimited visits) plans. Basic Care focuses on remote support, but on-site visits can be arranged at an additional cost. All on-site visits are scheduled through your client portal.'
  },
  {
    question: 'How do I access the client portal?',
    answer: 'Once you enroll in any AMC plan, you\'ll receive login credentials for our secure client portal within 24 hours. The portal provides real-time system status, maintenance schedules, performance reports, ticket management, and direct communication with your support team.'
  },
  {
    question: 'What if I need support outside business hours?',
    answer: 'Professional plan offers extended support from 7 AM to 10 PM, while Enterprise provides true 24/7/365 support. Basic Care is limited to business hours (9 AM - 6 PM), but emergency support can be arranged at premium rates for urgent situations.'
  },
  {
    question: 'Is there a minimum contract period?',
    answer: 'We offer flexible terms with no long-term lock-in. While AMC plans are billed monthly, we recommend a minimum 3-month commitment to see the full benefits of proactive maintenance. You can cancel anytime with 30 days notice, and we offer a 30-day money-back guarantee if you\'re not satisfied.'
  }
];

const FAQSection = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  if (!isHydrated) {
    return (
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <div className="inline-block w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-text-primary mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-text-secondary">
            Everything you need to know about our AMC solutions
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-subtle transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-muted/50 transition-colors duration-200"
              >
                <span className="text-lg font-heading font-bold text-text-primary pr-8">
                  {faq.question}
                </span>
                <Icon
                  name="ChevronDownIcon"
                  size={24}
                  className={`text-primary flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-6 text-text-secondary leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-muted border border-border rounded-xl p-8 text-center">
          <h3 className="text-xl font-heading font-bold text-text-primary mb-4">
            Still Have Questions?
          </h3>
          <p className="text-text-secondary mb-6">
            Our team is here to help you choose the right AMC plan for your business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+911234567890"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-heading font-semibold text-white bg-primary hover:bg-primary/90 rounded-lg transition-all duration-300"
            >
              <Icon name="PhoneIcon" size={20} className="mr-2" />
              Call: +91 123 456 7890
            </a>
            <a
              href="mailto:amc@ansutech.com"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-heading font-semibold text-primary bg-white hover:bg-gray-50 border border-primary rounded-lg transition-all duration-300"
            >
              <Icon name="EnvelopeIcon" size={20} className="mr-2" />
              Email Support
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;