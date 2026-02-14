'use client';

import Icon from '@/components/ui/AppIcon';

interface QuickActionCardProps {
  action: {
    id: string;
    title: string;
    description: string;
    icon: string;
    color: string;
  };
  onClick: () => void;
}

const QuickActionCard = ({ action, onClick }: QuickActionCardProps) => {
  return (
    <button
      onClick={onClick}
      className="w-full bg-card border border-border rounded-lg p-6 hover:shadow-elevated hover:border-primary/30 transition-all duration-300 text-left group"
    >
      <div className={`w-12 h-12 rounded-lg ${action.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
        <Icon name={action.icon as any} size={24} variant="solid" className="text-white" />
      </div>
      <h3 className="text-base font-heading font-semibold text-text-primary mb-2 group-hover:text-primary transition-colors duration-300">
        {action.title}
      </h3>
      <p className="text-sm text-muted-foreground">{action.description}</p>
    </button>
  );
};

export default QuickActionCard;