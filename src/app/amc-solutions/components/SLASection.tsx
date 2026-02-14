import Icon from '@/components/ui/AppIcon';

interface SLALevel {
  severity: string;
  description: string;
  responseTime: string;
  resolutionTarget: string;
  icon: string;
  color: string;
}

const slaLevels: SLALevel[] = [
  {
    severity: 'Critical',
    description: 'Complete system failure affecting all users and business operations',
    responseTime: '1 hour',
    resolutionTarget: '4 hours',
    icon: 'ExclamationTriangleIcon',
    color: 'text-error'
  },
  {
    severity: 'High',
    description: 'Major functionality impaired affecting multiple users or departments',
    responseTime: '2 hours',
    resolutionTarget: '8 hours',
    icon: 'ExclamationCircleIcon',
    color: 'text-warning'
  },
  {
    severity: 'Medium',
    description: 'Partial functionality loss with workaround available',
    responseTime: '4 hours',
    resolutionTarget: '24 hours',
    icon: 'InformationCircleIcon',
    color: 'text-secondary'
  },
  {
    severity: 'Low',
    description: 'Minor issues or enhancement requests with minimal impact',
    responseTime: '8 hours',
    resolutionTarget: '72 hours',
    icon: 'ChatBubbleLeftIcon',
    color: 'text-brand-trust'
  }
];

const guarantees = [
  {
    icon: 'ClockIcon',
    title: '99.9% Uptime Guarantee',
    description: 'Maximum 8.76 hours of downtime per year with automatic credits for SLA breaches'
  },
  {
    icon: 'ShieldCheckIcon',
    title: 'Response Time Commitment',
    description: 'Guaranteed response within specified timeframes or receive service credits'
  },
  {
    icon: 'DocumentTextIcon',
    title: 'Transparent Reporting',
    description: 'Monthly SLA performance reports with detailed metrics and incident analysis'
  },
  {
    icon: 'CurrencyRupeeIcon',
    title: 'Service Credits',
    description: 'Automatic credits applied for any SLA violations, no questions asked'
  }
];

const SLASection = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-text-primary mb-4">
            Service Level Agreements
          </h2>
          <p className="text-lg text-text-secondary">
            Clear commitments with guaranteed response times and resolution targets for every issue severity level.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {slaLevels.map((level, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl p-6 hover:shadow-elevated hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className={`flex-shrink-0 w-12 h-12 bg-muted rounded-lg flex items-center justify-center`}>
                  <Icon name={level.icon} size={24} className={level.color} />
                </div>
                <div className="flex-1 space-y-3">
                  <div>
                    <h3 className="text-xl font-heading font-bold text-text-primary mb-1">
                      {level.severity} Priority
                    </h3>
                    <p className="text-sm text-text-secondary">
                      {level.description}
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-4 pt-3 border-t border-border">
                    <div>
                      <p className="text-xs text-text-secondary mb-1">Response Time</p>
                      <p className="text-lg font-heading font-bold text-primary">
                        {level.responseTime}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-text-secondary mb-1">Resolution Target</p>
                      <p className="text-lg font-heading font-bold text-brand-trust">
                        {level.resolutionTarget}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-primary to-secondary rounded-2xl p-8 lg:p-12 text-white mb-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-2xl lg:text-3xl font-heading font-bold mb-4">
                Our SLA Guarantees
              </h3>
              <p className="text-lg text-white/90">
                Backed by measurable commitments and automatic service credits
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {guarantees.map((guarantee, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                      <Icon name={guarantee.icon} size={20} className="text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-heading font-bold mb-2">
                        {guarantee.title}
                      </h4>
                      <p className="text-sm text-white/80">
                        {guarantee.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-card border border-border rounded-2xl p-8">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-heading font-bold text-text-primary mb-6 text-center">
              SLA Performance Tracking
            </h3>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center p-6 bg-muted rounded-xl">
                <p className="text-4xl font-heading font-bold text-brand-trust mb-2">99.95%</p>
                <p className="text-sm text-text-secondary">Average Uptime</p>
                <p className="text-xs text-muted-foreground mt-1">Last 12 months</p>
              </div>
              <div className="text-center p-6 bg-muted rounded-xl">
                <p className="text-4xl font-heading font-bold text-primary mb-2">1.2 hrs</p>
                <p className="text-sm text-text-secondary">Avg Response Time</p>
                <p className="text-xs text-muted-foreground mt-1">Critical issues</p>
              </div>
              <div className="text-center p-6 bg-muted rounded-xl">
                <p className="text-4xl font-heading font-bold text-accent mb-2">98.5%</p>
                <p className="text-sm text-text-secondary">First-Call Resolution</p>
                <p className="text-xs text-muted-foreground mt-1">All severity levels</p>
              </div>
            </div>

            <div className="bg-brand-trust/10 border border-brand-trust/30 rounded-xl p-6">
              <div className="flex items-start space-x-4">
                <Icon name="CheckBadgeIcon" size={24} className="text-brand-trust flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-lg font-heading font-bold text-text-primary mb-2">
                    Monthly SLA Reports
                  </h4>
                  <p className="text-sm text-text-secondary">
                    Every AMC client receives detailed monthly reports showing response times, resolution rates, system uptime, and SLA compliance metrics. All data is transparent and verifiable through your client portal dashboard.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SLASection;