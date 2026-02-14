'use client';

import { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';
import ProductCard from './ProductCard';
import CategoryFilter from './CategoryFilter';
import CompatibilityChecker from './CompatibilityChecker';
import ProductConfigurator from './ProductConfigurator';
import TechnicalSpecsModal from './TechnicalSpecsModal';
import ComparisonTable from './ComparisonTable';
import VendorPartners from './VendorPartners';

interface Product {
  id: number;
  name: string;
  category: string;
  brand: string;
  image: string;
  alt: string;
  price: number;
  specifications: string[];
  inStock: boolean;
  detailedSpecs: {
    general: {[key: string]: string;};
    performance: {[key: string]: string;};
    connectivity: {[key: string]: string;};
  };
  documentation: string[];
}

interface Category {
  id: string;
  name: string;
  count: number;
  icon: string;
}

export default function TechnologyCenterInteractive() {
  const [isHydrated, setIsHydrated] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [comparisonList, setComparisonList] = useState<number[]>([]);
  const [activeTab, setActiveTab] = useState<'products' | 'configurator' | 'compatibility'>('products');

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const categories: Category[] = [
  { id: 'all', name: 'All Products', count: 12, icon: 'Squares2X2Icon' },
  { id: 'servers', name: 'Servers', count: 4, icon: 'ServerIcon' },
  { id: 'networking', name: 'Networking', count: 3, icon: 'SignalIcon' },
  { id: 'storage', name: 'Storage', count: 2, icon: 'CircleStackIcon' },
  { id: 'security', name: 'Security', count: 3, icon: 'ShieldCheckIcon' }];


  const products: Product[] = [
  {
    id: 1,
    name: 'Dell PowerEdge R750 Rack Server',
    category: 'servers',
    brand: 'Dell Technologies',
    image: "https://images.unsplash.com/photo-1554220170-a389aff2a0c3",
    alt: 'Dell PowerEdge R750 rack server with blue LED indicators in data center environment',
    price: 285000,
    specifications: [
    'Intel Xeon Scalable Processors',
    'Up to 2TB DDR4 Memory',
    '16x 2.5" Drive Bays',
    'Dual Redundant Power Supply',
    'iDRAC9 Enterprise Management'],

    inStock: true,
    detailedSpecs: {
      general: {
        'Form Factor': '2U Rack Server',
        'Processor': 'Intel Xeon Gold 5320',
        'Cores/Threads': '26 Cores / 52 Threads',
        'Base Frequency': '2.2 GHz'
      },
      performance: {
        'Max Memory': '2TB DDR4 3200MHz',
        'Storage Capacity': 'Up to 153.6TB',
        'RAID Support': 'RAID 0, 1, 5, 6, 10, 50, 60',
        'PCIe Slots': '8x Gen4 Slots'
      },
      connectivity: {
        'Network Ports': '4x 1GbE RJ45',
        'Management': 'iDRAC9 Enterprise',
        'USB Ports': '2x USB 3.0',
        'Video': 'VGA Port'
      }
    },
    documentation: [
    'Technical Specification Sheet',
    'Installation Guide',
    'Configuration Manual',
    'Warranty Information']

  },
  {
    id: 2,
    name: 'Cisco Catalyst 9300 Series Switch',
    category: 'networking',
    brand: 'Cisco Systems',
    image: "https://images.unsplash.com/photo-1715242450925-4e838f9d1bc7",
    alt: 'Cisco Catalyst network switch with multiple ethernet ports and green status LEDs',
    price: 165000,
    specifications: [
    '48 Port Gigabit Ethernet',
    'StackWise-480 Technology',
    'UADP 2.0 ASIC Architecture',
    'Modular Uplink Options',
    'Cisco DNA Ready'],

    inStock: true,
    detailedSpecs: {
      general: {
        'Model': 'C9300-48P',
        'Port Count': '48 Ports',
        'Form Factor': '1RU',
        'Power': 'PoE+ Support'
      },
      performance: {
        'Switching Capacity': '176 Gbps',
        'Forwarding Rate': '130.95 Mpps',
        'Stacking Bandwidth': '480 Gbps',
        'MAC Addresses': '32,000'
      },
      connectivity: {
        'Uplink Modules': '4x 1G/10G SFP+',
        'Console Port': 'RJ-45',
        'USB Port': 'Type-A and Type-C',
        'Management': 'Cisco DNA Center'
      }
    },
    documentation: [
    'Data Sheet',
    'Quick Start Guide',
    'CLI Configuration Guide',
    'Licensing Information']

  },
  {
    id: 3,
    name: 'HP ProLiant DL380 Gen10 Plus',
    category: 'servers',
    brand: 'HP Enterprise',
    image: "https://images.unsplash.com/photo-1717386255950-f7fbe05eb6c0",
    alt: 'HP ProLiant server with silver chassis and blue accent lighting in server rack',
    price: 295000,
    specifications: [
    'Intel Xeon Scalable Gen3',
    'Up to 4TB DDR4 Memory',
    '24x SFF Drive Bays',
    'HPE iLO 5 Management',
    'Redundant Hot-Plug Fans'],

    inStock: true,
    detailedSpecs: {
      general: {
        'Form Factor': '2U Rack Server',
        'Processor': 'Intel Xeon Gold 6338',
        'Cores/Threads': '32 Cores / 64 Threads',
        'Base Frequency': '2.0 GHz'
      },
      performance: {
        'Max Memory': '4TB DDR4 3200MHz',
        'Storage Capacity': 'Up to 184TB',
        'RAID Support': 'HPE Smart Array',
        'PCIe Slots': '10x Gen4 Slots'
      },
      connectivity: {
        'Network Ports': '4x 1GbE',
        'Management': 'HPE iLO 5',
        'USB Ports': '4x USB 3.0',
        'Video': 'VGA Port'
      }
    },
    documentation: [
    'QuickSpecs',
    'Setup Guide',
    'User Guide',
    'Support Matrix']

  },
  {
    id: 4,
    name: 'Fortinet FortiGate 100F Firewall',
    category: 'security',
    brand: 'Fortinet',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1449c43b1-1764492662603.png",
    alt: 'Fortinet FortiGate firewall appliance with red LED indicators and multiple network ports',
    price: 125000,
    specifications: [
    'Next-Gen Firewall Protection',
    '10 Gbps Firewall Throughput',
    'SD-WAN Capabilities',
    'Advanced Threat Protection',
    'SSL Inspection'],

    inStock: true,
    detailedSpecs: {
      general: {
        'Model': 'FG-100F',
        'Form Factor': 'Desktop',
        'Interfaces': '16x GbE RJ45',
        'Power': 'Internal PSU'
      },
      performance: {
        'Firewall Throughput': '10 Gbps',
        'IPS Throughput': '1.8 Gbps',
        'VPN Throughput': '9 Gbps',
        'Concurrent Sessions': '2,000,000'
      },
      connectivity: {
        'WAN Ports': '2x GbE',
        'LAN Ports': '14x GbE',
        'Console': 'RJ-45',
        'USB': '1x USB 3.0'
      }
    },
    documentation: [
    'Product Brief',
    'Admin Guide',
    'CLI Reference',
    'Best Practices']

  },
  {
    id: 5,
    name: 'Synology DS920+ NAS Storage',
    category: 'storage',
    brand: 'Synology',
    image: "https://images.unsplash.com/photo-1627135190425-754d8d5ef117",
    alt: 'Synology NAS device with four drive bays and blue status indicators on black chassis',
    price: 55000,
    specifications: [
    '4-Bay NAS Solution',
    'Intel Celeron Quad-Core',
    '8GB DDR4 Memory',
    'Dual M.2 NVMe Cache',
    'Btrfs File System'],

    inStock: true,
    detailedSpecs: {
      general: {
        'Model': 'DS920+',
        'Drive Bays': '4x 3.5"/2.5"',
        'Processor': 'Intel Celeron J4125',
        'Memory': '8GB DDR4'
      },
      performance: {
        'Max Capacity': '72TB',
        'Read Speed': '226 MB/s',
        'Write Speed': '221 MB/s',
        'Cache': '2x M.2 NVMe'
      },
      connectivity: {
        'LAN Ports': '2x 1GbE',
        'USB Ports': '3x USB 3.0',
        'eSATA': '2x eSATA',
        'Expansion': 'DX517'
      }
    },
    documentation: [
    'Hardware Guide',
    'DSM User Guide',
    'Compatibility List',
    'Warranty Terms']

  },
  {
    id: 6,
    name: 'Aruba 6300M 48-Port Switch',
    category: 'networking',
    brand: 'HPE Aruba',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1afdd747b-1764492662175.png",
    alt: 'Aruba network switch with 48 ports and orange status LEDs in modern data center',
    price: 185000,
    specifications: [
    '48x 1GbE PoE+ Ports',
    'Modular Design',
    'VSF Stacking',
    'AOS-CX Operating System',
    'Cloud-Native Architecture'],

    inStock: false,
    detailedSpecs: {
      general: {
        'Model': '6300M-48G',
        'Port Count': '48 Ports',
        'Form Factor': '1RU',
        'Power': 'PoE+ 740W'
      },
      performance: {
        'Switching Capacity': '176 Gbps',
        'Forwarding Rate': '130.95 Mpps',
        'Stacking': 'VSF 480 Gbps',
        'Latency': '<3 microseconds'
      },
      connectivity: {
        'Uplink Slots': '2x Module Slots',
        'Console': 'USB-C',
        'Management': 'Aruba Central',
        'Out-of-Band': 'Dedicated Port'
      }
    },
    documentation: [
    'Product Overview',
    'Installation Guide',
    'AOS-CX Guide',
    'API Documentation']

  }];


  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.brand.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleViewDetails = (id: number) => {
    const product = products.find((p) => p.id === id);
    if (product) setSelectedProduct(product);
  };

  const handleCompare = (id: number) => {
    if (comparisonList.includes(id)) {
      setComparisonList(comparisonList.filter((pid) => pid !== id));
    } else if (comparisonList.length < 3) {
      setComparisonList([...comparisonList, id]);
    }
  };

  const comparisonProducts = products.filter((p) => comparisonList.includes(p.id));

  if (!isHydrated) {
    return (
      <div className="min-h-screen bg-background">
        <div className="w-full px-6 py-16">
          <div className="max-w-7xl mx-auto">
            <div className="h-12 bg-muted rounded-lg mb-8 animate-pulse"></div>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              <div className="h-96 bg-muted rounded-lg animate-pulse"></div>
              <div className="lg:col-span-3 space-y-6">
                {[1, 2, 3].map((i) =>
                <div key={i} className="h-64 bg-muted rounded-lg animate-pulse"></div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>);

  }

  return (
    <div className="w-full px-6 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
            <div>
              <h1 className="text-3xl font-bold text-text-primary mb-2">Technology Center</h1>
              <p className="text-text-secondary">Explore our comprehensive product catalog and technical resources</p>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setActiveTab('products')}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                activeTab === 'products' ? 'bg-primary text-primary-foreground' : 'bg-muted text-text-secondary hover:bg-muted/80'}`
                }>

                Products
              </button>
              <button
                onClick={() => setActiveTab('configurator')}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                activeTab === 'configurator' ? 'bg-primary text-primary-foreground' : 'bg-muted text-text-secondary hover:bg-muted/80'}`
                }>

                Configurator
              </button>
              <button
                onClick={() => setActiveTab('compatibility')}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                activeTab === 'compatibility' ? 'bg-primary text-primary-foreground' : 'bg-muted text-text-secondary hover:bg-muted/80'}`
                }>

                Compatibility
              </button>
            </div>
          </div>

          {activeTab === 'products' &&
          <div className="relative">
              <Icon name="MagnifyingGlassIcon" size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input
              type="text"
              placeholder="Search products by name or brand..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-input rounded-lg bg-background text-text-primary focus:outline-none focus:ring-2 focus:ring-primary" />

            </div>
          }
        </div>

        {activeTab === 'products' &&
        <div className="transition-opacity duration-300 ease-in-out">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
              <div className="lg:col-span-1">
                <CategoryFilter
                categories={categories}
                selectedCategory={selectedCategory}
                onSelectCategory={setSelectedCategory} />

              </div>

              <div className="lg:col-span-3">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filteredProducts.map((product) =>
                <ProductCard
                  key={product.id}
                  product={product}
                  onViewDetails={handleViewDetails}
                  onCompare={handleCompare} />

                )}
                </div>

                {filteredProducts.length === 0 &&
              <div className="text-center py-16">
                    <Icon name="MagnifyingGlassIcon" size={48} className="mx-auto text-muted-foreground mb-4" />
                    <p className="text-text-secondary">No products found matching your criteria</p>
                  </div>
              }
              </div>
            </div>

            {comparisonList.length > 0 &&
          <div className="mb-8">
                <ComparisonTable
              products={comparisonProducts}
              onRemove={handleCompare}
              onClear={() => setComparisonList([])} />

              </div>
          }

            <VendorPartners />
          </div>
        }

        {activeTab === 'configurator' &&
        <div className="transition-opacity duration-300 ease-in-out">
            <ProductConfigurator />
          </div>
        }

        {activeTab === 'compatibility' &&
        <div className="transition-opacity duration-300 ease-in-out">
            <CompatibilityChecker />
          </div>
        }

        {selectedProduct &&
        <TechnicalSpecsModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)} />

        }
      </div>
    </div>);

}