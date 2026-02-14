'use client';

import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

interface Product {
  id: number;
  name: string;
  category: string;
  brand: string;
  image: string;
  alt: string;
  price: number;
  specifications: string[];
  detailedSpecs: {
    general: { [key: string]: string };
    performance: { [key: string]: string };
    connectivity: { [key: string]: string };
  };
  documentation: string[];
}

interface TechnicalSpecsModalProps {
  product: Product | null;
  onClose: () => void;
}

export default function TechnicalSpecsModal({ product, onClose }: TechnicalSpecsModalProps) {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="bg-card rounded-lg shadow-elevated max-w-4xl w-full max-h-[90vh] overflow-hidden">
        <div className="flex items-center justify-between p-6 border-b border-border">
          <h2 className="text-xl font-semibold text-text-primary">Technical Specifications</h2>
          <button
            onClick={onClose}
            className="p-2 text-text-secondary hover:text-primary hover:bg-muted rounded-md transition-colors"
            aria-label="Close modal"
          >
            <Icon name="XMarkIcon" size={24} />
          </button>
        </div>

        <div className="overflow-y-auto max-h-[calc(90vh-80px)]">
          <div className="p-6">
            <div className="flex flex-col md:flex-row gap-6 mb-6">
              <div className="w-full md:w-1/3">
                <div className="relative h-64 overflow-hidden rounded-lg bg-muted">
                  <AppImage
                    src={product.image}
                    alt={product.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="flex-1">
                <p className="text-sm text-muted-foreground mb-1">{product.brand}</p>
                <h3 className="text-2xl font-bold text-text-primary mb-2">{product.name}</h3>
                <span className="inline-block px-3 py-1 text-sm font-medium text-secondary bg-secondary/10 rounded mb-4">
                  {product.category}
                </span>
                <p className="text-3xl font-bold text-primary mb-4">₹{product.price.toLocaleString('en-IN')}</p>
                <button className="px-6 py-3 text-sm font-semibold text-cta-foreground bg-cta hover:bg-cta/90 rounded-lg transition-colors">
                  Request Quote
                </button>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-text-primary mb-4 flex items-center">
                  <Icon name="InformationCircleIcon" size={20} className="mr-2 text-primary" />
                  General Specifications
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {Object.entries(product.detailedSpecs.general).map(([key, value]) => (
                    <div key={key} className="flex justify-between p-3 bg-muted rounded-lg">
                      <span className="text-sm font-medium text-text-secondary">{key}</span>
                      <span className="text-sm text-text-primary">{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-text-primary mb-4 flex items-center">
                  <Icon name="BoltIcon" size={20} className="mr-2 text-primary" />
                  Performance
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {Object.entries(product.detailedSpecs.performance).map(([key, value]) => (
                    <div key={key} className="flex justify-between p-3 bg-muted rounded-lg">
                      <span className="text-sm font-medium text-text-secondary">{key}</span>
                      <span className="text-sm text-text-primary">{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-text-primary mb-4 flex items-center">
                  <Icon name="SignalIcon" size={20} className="mr-2 text-primary" />
                  Connectivity
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {Object.entries(product.detailedSpecs.connectivity).map(([key, value]) => (
                    <div key={key} className="flex justify-between p-3 bg-muted rounded-lg">
                      <span className="text-sm font-medium text-text-secondary">{key}</span>
                      <span className="text-sm text-text-primary">{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-text-primary mb-4 flex items-center">
                  <Icon name="DocumentTextIcon" size={20} className="mr-2 text-primary" />
                  Documentation & Resources
                </h4>
                <div className="space-y-2">
                  {product.documentation.map((doc, index) => (
                    <button
                      key={index}
                      className="w-full flex items-center justify-between p-3 bg-muted hover:bg-muted/80 rounded-lg transition-colors text-left"
                    >
                      <span className="text-sm text-text-primary">{doc}</span>
                      <Icon name="ArrowDownTrayIcon" size={18} className="text-primary" />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}