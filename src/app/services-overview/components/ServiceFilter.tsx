'use client';


import Icon from '@/components/ui/AppIcon';

interface ServiceFilterProps {
  onFilterChange: (category: string) => void;
  activeFilter: string;
}

export default function ServiceFilter({ onFilterChange, activeFilter }: ServiceFilterProps) {
  const categories = [
    { id: 'all', name: 'All Services', icon: 'Squares2X2Icon' },
    { id: 'networking', name: 'Networking', icon: 'ServerIcon' },
    { id: 'hardware', name: 'Hardware', icon: 'ComputerDesktopIcon' },
    { id: 'software', name: 'Software', icon: 'CodeBracketIcon' },
    { id: 'amc', name: 'AMC Programs', icon: 'ShieldCheckIcon' }
  ];

  return (
    <div className="bg-card border border-border rounded-lg p-4">
      <div className="flex items-center space-x-2 mb-4">
        <Icon name="FunnelIcon" size={20} className="text-text-secondary" />
        <h3 className="text-sm font-heading font-semibold text-text-primary">Filter Services</h3>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onFilterChange(category.id)}
            className={`flex flex-col items-center space-y-2 p-3 rounded-lg transition-all duration-300 ${
              activeFilter === category.id
                ? 'bg-primary text-primary-foreground shadow-subtle'
                : 'bg-muted text-text-secondary hover:bg-muted/80'
            }`}
          >
            <Icon name={category.icon as any} size={24} />
            <span className="text-xs font-medium text-center">{category.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}