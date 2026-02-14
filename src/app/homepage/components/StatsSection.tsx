import Icon from '@/components/ui/AppIcon';

const StatsSection = () => {
  const stats = [
    {
      icon: 'BuildingOfficeIcon',
      value: '500+',
      label: 'Active Clients',
      description: 'Businesses trust us'
    },
    {
      icon: 'ChartBarIcon',
      value: '99.9%',
      label: 'System Uptime',
      description: 'Guaranteed reliability'
    },
    {
      icon: 'ClockIcon',
      value: '< 2hrs',
      label: 'Response Time',
      description: 'Average resolution'
    },
    {
      icon: 'UserGroupIcon',
      value: '50+',
      label: 'Expert Team',
      description: 'Certified professionals'
    },
  ];
  
  return (
    <section className="py-16 bg-gradient-to-br from-primary to-secondary">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full mx-auto mb-4">
                <Icon name={stat.icon as any} size={32} className="text-white" variant="solid" />
              </div>
              
              <div className="text-4xl lg:text-5xl font-heading font-bold text-white mb-2">
                {stat.value}
              </div>
              
              <div className="text-lg font-semibold text-white mb-1">
                {stat.label}
              </div>
              
              <div className="text-sm text-white/80">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;