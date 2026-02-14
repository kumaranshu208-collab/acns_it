import Icon from '@/components/ui/AppIcon';

interface MaintenanceScheduleCardProps {
  schedule: {
    id: string;
    title: string;
    type: 'scheduled' | 'completed' | 'upcoming';
    date: string;
    time: string;
    technician: string;
    description: string;
    status: string;
  };
}

const MaintenanceScheduleCard = ({ schedule }: MaintenanceScheduleCardProps) => {
  const getTypeColor = (type: string) => {
    switch (type) {
      case 'scheduled':
        return 'text-secondary bg-secondary/10';
      case 'completed':
        return 'text-success bg-success/10';
      case 'upcoming':
        return 'text-warning bg-warning/10';
      default:
        return 'text-muted-foreground bg-muted';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'scheduled':
        return 'CalendarIcon';
      case 'completed':
        return 'CheckCircleIcon';
      case 'upcoming':
        return 'ClockIcon';
      default:
        return 'CalendarDaysIcon';
    }
  };

  return (
    <div className="bg-card border border-border rounded-lg p-5 hover:shadow-elevated transition-shadow duration-300">
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <h4 className="text-base font-heading font-semibold text-text-primary mb-1">
            {schedule.title}
          </h4>
          <p className="text-sm text-muted-foreground">{schedule.description}</p>
        </div>
        <div className={`flex items-center space-x-1.5 px-2.5 py-1 rounded-full ${getTypeColor(schedule.type)}`}>
          <Icon name={getTypeIcon(schedule.type) as any} size={14} variant="solid" />
          <span className="text-xs font-medium capitalize">{schedule.type}</span>
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex items-center space-x-2 text-sm">
          <Icon name="CalendarIcon" size={16} className="text-muted-foreground" />
          <span className="text-text-secondary">{schedule.date}</span>
          <span className="text-muted-foreground">•</span>
          <Icon name="ClockIcon" size={16} className="text-muted-foreground" />
          <span className="text-text-secondary">{schedule.time}</span>
        </div>

        <div className="flex items-center space-x-2 text-sm">
          <Icon name="UserIcon" size={16} className="text-muted-foreground" />
          <span className="text-text-secondary">Technician: {schedule.technician}</span>
        </div>

        <div className="flex items-center space-x-2 text-sm">
          <Icon name="InformationCircleIcon" size={16} className="text-muted-foreground" />
          <span className="text-text-secondary">Status: {schedule.status}</span>
        </div>
      </div>
    </div>
  );
};

export default MaintenanceScheduleCard;