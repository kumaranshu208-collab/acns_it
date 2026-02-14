import { useState } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  href: string;
  category: string;
}

const ServiceFinderSection = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  
  const categories = [
    { id: 'all', label: 'All Services', icon: 'Squares2X2Icon' },
    { id: 'networking', label: 'Networking', icon: 'ServerIcon' },
    { id: 'hardware', label: 'Hardware', icon: 'CpuChipIcon' },
    { id: 'software', label: 'Software', icon: 'CodeBracketIcon' },
    { id: 'maintenance', label: 'Maintenance', icon: 'WrenchScrewdriverIcon' },
  ];
  
  const services: Service[] = [
    {
      id: '1',
      title: 'Network Infrastructure Setup',
      description: 'Design and implement robust network architectures for seamless connectivity and optimal performance.',
      icon: 'ServerIcon',
      href: '/services-overview',
      category: 'networking'
    },
    {
      id: '2',
      title: 'Hardware Procurement & Installation',
      description: 'Source, configure, and deploy enterprise-grade hardware solutions tailored to your business needs.',
      icon: 'CpuChipIcon',
      href: '/services-overview',
      category: 'hardware'
    },
    {
      id: '3',
      title: 'Custom Software Development',
      description: 'Build scalable business applications that streamline operations and drive digital transformation.',
      icon: 'CodeBracketIcon',
      href: '/services-overview',
      category: 'software'
    },
    {
      id: '4',
      title: 'Annual Maintenance Contracts',
      description: 'Comprehensive AMC programs ensuring 99.9% uptime with proactive monitoring and rapid response.',
      icon: 'ShieldCheckIcon',
      href: '/amc-solutions',
      category: 'maintenance'
    },
    {
      id: '5',
      title: 'Network Security Solutions',
      description: 'Protect your infrastructure with advanced firewall, VPN, and intrusion detection systems.',
      icon: 'LockClosedIcon',
      href: '/services-overview',
      category: 'networking'
    },
    {
      id: '6',
      title: 'Server Management',
      description: 'Expert server configuration, optimization, and 24/7 monitoring for maximum reliability.',
      icon: 'CircleStackIcon',
      href: '/services-overview',
      category: 'hardware'
    },
    {
      id: '7',
      title: 'Cloud Migration Services',
      description: 'Seamlessly transition your infrastructure to cloud platforms with minimal downtime.',
      icon: 'CloudIcon',
      href: '/services-overview',
      category: 'software'
    },
    {
      id: '8',
      title: 'Emergency IT Support',
      description: 'Rapid response team available 24/7 for critical system failures and urgent technical issues.',
      icon: 'BoltIcon',
      href: '/support-portal',
      category: 'maintenance'
    },
  ];
  
  const filteredServices = selectedCategory === 'all' 
    ? services 
    : services.filter(service => service.category === selectedCategory);
  
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-text-primary mb-4">
            Find the Right Solution for Your Business
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Explore our comprehensive range of IT services designed to keep your technology infrastructure running at peak performance.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`inline-flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-primary text-primary-foreground shadow-brand'
                  : 'bg-card text-text-secondary hover:bg-muted border border-border'
              }`}
            >
              <Icon name={category.icon as any} size={20} variant={selectedCategory === category.id ? 'solid' : 'outline'} />
              <span>{category.label}</span>
            </button>
          ))}
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredServices.map((service) => (
            <Link
              key={service.id}
              href={service.href}
              className="group bg-card border border-border rounded-xl p-6 hover:shadow-elevated hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex items-center justify-center w-14 h-14 bg-primary/10 rounded-lg mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                <Icon name={service.icon as any} size={28} className="text-primary" variant="solid" />
              </div>
              
              <h3 className="text-lg font-heading font-semibold text-text-primary mb-2 group-hover:text-primary transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-sm text-text-secondary mb-4 line-clamp-3">
                {service.description}
              </p>
              
              <div className="flex items-center text-sm font-semibold text-primary group-hover:translate-x-1 transition-transform duration-300">
                Learn More
                <Icon name="ArrowRightIcon" size={16} className="ml-1" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceFinderSection;