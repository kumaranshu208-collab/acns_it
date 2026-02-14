import Icon from '@/components/ui/AppIcon';

interface Category {
  id: string;
  name: string;
  count: number;
  icon: string;
}

interface CategoryFilterProps {
  categories: Category[];
  selectedCategory: string;
  onSelectCategory: (categoryId: string) => void;
}

export default function CategoryFilter({ categories, selectedCategory, onSelectCategory }: CategoryFilterProps) {
  return (
    <div className="bg-card border border-border rounded-lg p-4">
      <h3 className="text-sm font-semibold text-text-primary mb-4 flex items-center">
        <Icon name="FunnelIcon" size={18} className="mr-2" />
        Product Categories
      </h3>
      <div className="space-y-1">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onSelectCategory(category.id)}
            className={`w-full flex items-center justify-between px-3 py-2 text-sm rounded-md transition-all ${
              selectedCategory === category.id
                ? 'bg-primary text-primary-foreground font-semibold'
                : 'text-text-secondary hover:bg-muted hover:text-primary'
            }`}
          >
            <span className="flex items-center">
              <Icon name={category.icon as any} size={18} className="mr-2" />
              {category.name}
            </span>
            <span className={`text-xs ${selectedCategory === category.id ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}>
              {category.count}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}