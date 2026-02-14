import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface ProductCardProps {
  product: {
    id: number;
    name: string;
    category: string;
    brand: string;
    image: string;
    alt: string;
    price: number;
    specifications: string[];
    inStock: boolean;
  };
  onViewDetails: (id: number) => void;
  onCompare: (id: number) => void;
}

export default function ProductCard({ product, onViewDetails, onCompare }: ProductCardProps) {
  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-elevated transition-all duration-300">
      <div className="relative h-48 overflow-hidden bg-muted">
        <AppImage
          src={product.image}
          alt={product.alt}
          className="w-full h-full object-cover"
        />
        {!product.inStock && (
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
            <span className="text-white font-semibold text-sm">Out of Stock</span>
          </div>
        )}
      </div>
      
      <div className="p-4">
        <div className="flex items-start justify-between mb-2">
          <div className="flex-1">
            <p className="text-xs text-muted-foreground mb-1">{product.brand}</p>
            <h3 className="text-base font-semibold text-text-primary line-clamp-2">{product.name}</h3>
          </div>
          <button
            onClick={() => onCompare(product.id)}
            className="ml-2 p-2 text-text-secondary hover:text-primary hover:bg-muted rounded-md transition-colors"
            aria-label="Add to comparison"
          >
            <Icon name="ScaleIcon" size={20} />
          </button>
        </div>
        
        <span className="inline-block px-2 py-1 text-xs font-medium text-secondary bg-secondary/10 rounded mb-3">
          {product.category}
        </span>
        
        <ul className="space-y-1 mb-4">
          {product.specifications.slice(0, 3).map((spec, index) => (
            <li key={index} className="flex items-start text-xs text-text-secondary">
              <Icon name="CheckCircleIcon" size={14} className="mr-1 mt-0.5 text-success flex-shrink-0" />
              <span className="line-clamp-1">{spec}</span>
            </li>
          ))}
        </ul>
        
        <div className="flex items-center justify-between pt-3 border-t border-border">
          <div>
            <p className="text-xs text-muted-foreground">Starting at</p>
            <p className="text-lg font-bold text-primary">₹{product.price.toLocaleString('en-IN')}</p>
          </div>
          <button
            onClick={() => onViewDetails(product.id)}
            className="px-4 py-2 text-sm font-semibold text-cta-foreground bg-cta hover:bg-cta/90 rounded-lg transition-colors"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}