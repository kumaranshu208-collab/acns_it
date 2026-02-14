'use client';

import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

interface Product {
  id: number;
  name: string;
  brand: string;
  image: string;
  alt: string;
  price: number;
  specifications: string[];
}

interface ComparisonTableProps {
  products: Product[];
  onRemove: (id: number) => void;
  onClear: () => void;
}

export default function ComparisonTable({ products, onRemove, onClear }: ComparisonTableProps) {
  if (products.length === 0) return null;

  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden">
      <div className="flex items-center justify-between p-4 border-b border-border">
        <h3 className="text-lg font-semibold text-text-primary flex items-center">
          <Icon name="ScaleIcon" size={20} className="mr-2" />
          Product Comparison ({products.length})
        </h3>
        <button
          onClick={onClear}
          className="text-sm text-error hover:text-error/80 font-medium transition-colors"
        >
          Clear All
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-muted">
            <tr>
              <th className="px-4 py-3 text-left text-sm font-semibold text-text-primary">Product</th>
              {products.map((product) => (
                <th key={product.id} className="px-4 py-3 text-center min-w-[200px]">
                  <div className="relative">
                    <button
                      onClick={() => onRemove(product.id)}
                      className="absolute -top-1 -right-1 p-1 bg-error text-white rounded-full hover:bg-error/90 transition-colors"
                      aria-label="Remove from comparison"
                    >
                      <Icon name="XMarkIcon" size={14} />
                    </button>
                    <div className="h-32 mb-2 overflow-hidden rounded-lg bg-background">
                      <AppImage
                        src={product.image}
                        alt={product.alt}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="text-xs text-muted-foreground">{product.brand}</p>
                    <p className="text-sm font-semibold text-text-primary">{product.name}</p>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr className="border-t border-border">
              <td className="px-4 py-3 text-sm font-medium text-text-primary bg-muted">Price</td>
              {products.map((product) => (
                <td key={product.id} className="px-4 py-3 text-center">
                  <span className="text-lg font-bold text-primary">₹{product.price.toLocaleString('en-IN')}</span>
                </td>
              ))}
            </tr>
            {[0, 1, 2, 3, 4].map((index) => (
              <tr key={index} className="border-t border-border">
                <td className="px-4 py-3 text-sm font-medium text-text-primary bg-muted">
                  Specification {index + 1}
                </td>
                {products.map((product) => (
                  <td key={product.id} className="px-4 py-3 text-center">
                    <span className="text-sm text-text-secondary">
                      {product.specifications[index] || '-'}
                    </span>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}