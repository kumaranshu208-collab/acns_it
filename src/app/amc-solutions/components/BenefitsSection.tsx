import Icon from '@/components/ui/AppIcon';

interface Benefit {
  icon: string;
  title: string;
  description: string;
  stats: string;
}

const benefits: Benefit[] = [
  {
    icon: 'ShieldCheckIcon',
    title: 'Proactive Monitoring',
    description: 'Continuous system surveillance with automated alerts prevents issues before they impact your business operations.',
    stats: '95% issues prevented'
  },
  {
    icon: 'CurrencyRupeeIcon',
    title: 'Predictable Costs',
    description: 'Fixed monthly fees eliminate surprise repair bills and help you budget technology expenses accurately.',
    stats: '40% cost savings'
  },
  {
    icon: 'ClockIcon',
    title: 'Priority Support',
    description: 'Guaranteed response times with dedicated support channels ensure your critical systems stay operational.',
    stats: '<2 hour response'
  },
  {
    icon: 'ChartBarIcon',
    title: 'Performance Optimization',
    description: 'Regular maintenance and tuning keep your systems running at peak efficiency with minimal downtime.',
    stats: '99.9% uptime'
  },
  {
    icon: 'DocumentTextIcon',
    title: 'Detailed Reporting',
    description: 'Comprehensive system health reports and maintenance logs provide complete visibility into your IT infrastructure.',
    stats: 'Monthly insights'
  },
  {
    icon: 'UserGroupIcon',
    title: 'Dedicated Account Manager',
    description: 'Single point of contact who understands your business and technology needs for personalized service.',
    stats: 'Personal attention'
  }
];

const BenefitsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-text-primary mb-4">
            Why Choose Our AMC Solutions?
          </h2>
          <p className="text-lg text-text-secondary">
            Comprehensive maintenance programs designed to keep your technology infrastructure reliable, secure, and performing at its best.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="group bg-card border border-border rounded-xl p-8 hover:shadow-elevated hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <Icon name={benefit.icon} size={24} className="text-primary group-hover:text-white transition-colors duration-300" />
                </div>
                <div className="flex-1 space-y-3">
                  <h3 className="text-xl font-heading font-bold text-text-primary group-hover:text-primary transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {benefit.description}
                  </p>
                  <div className="inline-flex items-center space-x-2 px-3 py-1 bg-brand-trust/10 rounded-full">
                    <Icon name="CheckCircleIcon" size={16} className="text-brand-trust" />
                    <span className="text-xs font-semibold text-brand-trust">{benefit.stats}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;