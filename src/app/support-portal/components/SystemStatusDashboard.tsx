import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface SystemService {
  id: string;
  name: string;
  status: 'operational' | 'degraded' | 'outage';
  uptime: string;
  lastChecked: string;
}

interface SystemStatusDashboardProps {
  services: SystemService[];
}

const SystemStatusDashboard: React.FC<SystemStatusDashboardProps> = ({ services }) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'operational':
        return 'bg-success text-success-foreground';
      case 'degraded':
        return 'bg-warning text-warning-foreground';
      case 'outage':
        return 'bg-error text-error-foreground';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'operational':
        return 'CheckCircleIcon';
      case 'degraded':
        return 'ExclamationCircleIcon';
      case 'outage':
        return 'XCircleIcon';
      default:
        return 'QuestionMarkCircleIcon';
    }
  };

  return (
    <section className="py-12 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-heading font-bold text-text-primary">
            System Status
          </h2>
          <div className="flex items-center space-x-2 text-sm text-text-secondary">
            <Icon name="ClockIcon" size={16} />
            <span>Updated 2 minutes ago</span>
          </div>
        </div>

        <div className="bg-card rounded-xl border border-border shadow-subtle overflow-hidden">
          <div className="p-6 bg-success/10 border-b border-border">
            <div className="flex items-center space-x-3">
              <Icon name="CheckCircleIcon" size={32} className="text-success" />
              <div>
                <h3 className="text-xl font-heading font-bold text-text-primary">All Systems Operational</h3>
                <p className="text-sm text-text-secondary">No reported issues at this time</p>
              </div>
            </div>
          </div>

          <div className="divide-y divide-border">
            {services.map((service) => (
              <div key={service.id} className="p-6 hover:bg-muted transition-colors duration-300">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 flex-1">
                    <Icon name={getStatusIcon(service.status) as any} size={24} className={service.status === 'operational' ? 'text-success' : service.status === 'degraded' ? 'text-warning' : 'text-error'} />
                    <div className="flex-1">
                      <h4 className="text-lg font-heading font-semibold text-text-primary mb-1">
                        {service.name}
                      </h4>
                      <p className="text-sm text-text-secondary">
                        Last checked: {service.lastChecked}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="text-right">
                      <div className="text-sm font-semibold text-text-primary">{service.uptime}</div>
                      <div className="text-xs text-text-secondary">Uptime</div>
                    </div>
                    <span className={`px-3 py-1 text-xs font-semibold rounded-full ${getStatusColor(service.status)}`}>
                      {service.status.charAt(0).toUpperCase() + service.status.slice(1)}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SystemStatusDashboard;