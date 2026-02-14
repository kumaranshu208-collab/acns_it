import Icon from '@/components/ui/AppIcon';

interface RecentTicketCardProps {
  ticket: {
    id: string;
    title: string;
    status: 'open' | 'in-progress' | 'resolved' | 'closed';
    priority: 'low' | 'medium' | 'high' | 'critical';
    createdAt: string;
    lastUpdate: string;
    assignedTo: string;
  };
}

const RecentTicketCard = ({ ticket }: RecentTicketCardProps) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'open':
        return 'text-secondary bg-secondary/10';
      case 'in-progress':
        return 'text-warning bg-warning/10';
      case 'resolved':
        return 'text-success bg-success/10';
      case 'closed':
        return 'text-muted-foreground bg-muted';
      default:
        return 'text-muted-foreground bg-muted';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'critical':
        return 'text-error';
      case 'high':
        return 'text-warning';
      case 'medium':
        return 'text-secondary';
      case 'low':
        return 'text-success';
      default:
        return 'text-muted-foreground';
    }
  };

  return (
    <div className="bg-card border border-border rounded-lg p-5 hover:shadow-elevated transition-shadow duration-300">
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <div className="flex items-center space-x-2 mb-2">
            <span className="text-xs font-mono text-muted-foreground">#{ticket.id}</span>
            <span className={`text-xs font-semibold uppercase ${getPriorityColor(ticket.priority)}`}>
              {ticket.priority}
            </span>
          </div>
          <h4 className="text-base font-heading font-semibold text-text-primary mb-1">
            {ticket.title}
          </h4>
        </div>
        <div className={`flex items-center space-x-1.5 px-2.5 py-1 rounded-full ${getStatusColor(ticket.status)}`}>
          <span className="text-xs font-medium capitalize">{ticket.status.replace('-', ' ')}</span>
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex items-center space-x-2 text-sm">
          <Icon name="CalendarIcon" size={16} className="text-muted-foreground" />
          <span className="text-text-secondary">Created: {ticket.createdAt}</span>
        </div>

        <div className="flex items-center space-x-2 text-sm">
          <Icon name="ClockIcon" size={16} className="text-muted-foreground" />
          <span className="text-text-secondary">Last update: {ticket.lastUpdate}</span>
        </div>

        <div className="flex items-center space-x-2 text-sm">
          <Icon name="UserIcon" size={16} className="text-muted-foreground" />
          <span className="text-text-secondary">Assigned to: {ticket.assignedTo}</span>
        </div>
      </div>
    </div>
  );
};

export default RecentTicketCard;