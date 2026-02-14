import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface QuickAccessItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  action: () => void;
}

interface QuickAccessCardProps {
  items: QuickAccessItem[];
}

const QuickAccessCard: React.FC<QuickAccessCardProps> = ({ items }) => {
  return (
    <section className="py-12 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-heading font-bold text-text-primary mb-8 text-center">
          Quick Access Tools
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item) => (
            <button
              key={item.id}
              onClick={item.action}
              className="bg-card hover:bg-muted p-6 rounded-xl border border-border shadow-subtle hover:shadow-elevated transition-all duration-300 text-left group"
            >
              <div className="flex items-center mb-4">
                <div className="bg-secondary/10 p-3 rounded-lg group-hover:bg-secondary/20 transition-colors duration-300">
                  <Icon name={item.icon as any} size={28} className="text-secondary" />
                </div>
              </div>
              <h3 className="text-lg font-heading font-semibold text-text-primary mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-text-secondary">{item.description}</p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickAccessCard;