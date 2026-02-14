import Icon from '@/components/ui/AppIcon';

interface SystemStatusCardProps {
  system: {
    id: string;
    name: string;
    status: 'operational' | 'warning' | 'critical';
    uptime: string;
    lastCheck: string;
    metrics: {
      cpu: number;
      memory: number;
      disk: number;
    };
  };
}

const SystemStatusCard = ({ system }: SystemStatusCardProps) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'operational':
        return 'text-success bg-success/10';
      case 'warning':
        return 'text-warning bg-warning/10';
      case 'critical':
        return 'text-error bg-error/10';
      default:
        return 'text-muted-foreground bg-muted';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'operational':
        return 'CheckCircleIcon';
      case 'warning':
        return 'ExclamationTriangleIcon';
      case 'critical':
        return 'XCircleIcon';
      default:
        return 'QuestionMarkCircleIcon';
    }
  };

  const getMetricColor = (value: number) => {
    if (value >= 90) return 'text-error';
    if (value >= 75) return 'text-warning';
    return 'text-success';
  };

  return (
    <div className="bg-card border border-border rounded-lg p-6 hover:shadow-elevated transition-shadow duration-300">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-lg font-heading font-semibold text-text-primary mb-1">
            {system.name}
          </h3>
          <p className="text-sm text-muted-foreground">
            Last checked: {system.lastCheck}
          </p>
        </div>
        <div className={`flex items-center space-x-2 px-3 py-1.5 rounded-full ${getStatusColor(system.status)}`}>
          <Icon name={getStatusIcon(system.status) as any} size={16} variant="solid" />
          <span className="text-sm font-medium capitalize">{system.status}</span>
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-sm text-text-secondary">Uptime</span>
          <span className="text-sm font-semibold text-text-primary">{system.uptime}</span>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-text-secondary">CPU Usage</span>
            <span className={`font-semibold ${getMetricColor(system.metrics.cpu)}`}>
              {system.metrics.cpu}%
            </span>
          </div>
          <div className="w-full bg-muted rounded-full h-2">
            <div
              className={`h-2 rounded-full transition-all duration-300 ${
                system.metrics.cpu >= 90 ? 'bg-error' : system.metrics.cpu >= 75 ? 'bg-warning' : 'bg-success'
              }`}
              style={{ width: `${system.metrics.cpu}%` }}
            />
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-text-secondary">Memory Usage</span>
            <span className={`font-semibold ${getMetricColor(system.metrics.memory)}`}>
              {system.metrics.memory}%
            </span>
          </div>
          <div className="w-full bg-muted rounded-full h-2">
            <div
              className={`h-2 rounded-full transition-all duration-300 ${
                system.metrics.memory >= 90 ? 'bg-error' : system.metrics.memory >= 75 ? 'bg-warning' : 'bg-success'
              }`}
              style={{ width: `${system.metrics.memory}%` }}
            />
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-text-secondary">Disk Usage</span>
            <span className={`font-semibold ${getMetricColor(system.metrics.disk)}`}>
              {system.metrics.disk}%
            </span>
          </div>
          <div className="w-full bg-muted rounded-full h-2">
            <div
              className={`h-2 rounded-full transition-all duration-300 ${
                system.metrics.disk >= 90 ? 'bg-error' : system.metrics.disk >= 75 ? 'bg-warning' : 'bg-success'
              }`}
              style={{ width: `${system.metrics.disk}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SystemStatusCard;