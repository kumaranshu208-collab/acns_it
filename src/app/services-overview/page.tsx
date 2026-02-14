import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import Icon from '@/components/ui/AppIcon';
import Link from 'next/link';
import ServicesInteractive from './components/ServicesInteractive';

export const metadata: Metadata = {
  title: 'Services Overview - Ansu Tech Solutions',
  description: 'Comprehensive technology services including networking solutions, hardware services, software solutions, and AMC programs. Expert IT infrastructure management and support for businesses.'
};

export default function ServicesOverviewPage() {
  const services = [
  {
    id: 'networking-1',
    title: 'Network Infrastructure Design',
    description: 'Enterprise-grade network architecture planning and implementation for scalable, secure business operations.',
    features: [
    'LAN/WAN design and deployment',
    'Network security implementation',
    'Bandwidth optimization',
    'Redundancy and failover systems',
    'Performance monitoring and analytics',
    'Documentation and topology mapping'],

    image: "https://images.unsplash.com/photo-1588966389701-23451b418c9a",
    alt: 'Modern server room with organized network cables and blue LED lighting showing professional infrastructure',
    icon: 'ServerIcon',
    link: '/services-overview',
    category: 'networking'
  },
  {
    id: 'networking-2',
    title: 'Wireless Solutions',
    description: 'Comprehensive wireless networking solutions for seamless connectivity across your business premises.',
    features: [
    'Enterprise WiFi deployment',
    'Coverage analysis and optimization',
    'Guest network configuration',
    'Mobile device management',
    'Wireless security protocols'],

    image: "https://images.unsplash.com/photo-1726033589589-c4628bbba368",
    alt: 'Close-up of wireless router with glowing blue lights and antenna in modern office setting',
    icon: 'WifiIcon',
    link: '/services-overview',
    category: 'networking'
  },
  {
    id: 'hardware-1',
    title: 'Hardware Procurement & Setup',
    description: 'End-to-end hardware solutions from vendor selection to installation and configuration.',
    features: [
    'Vendor-neutral hardware recommendations',
    'Competitive pricing and procurement',
    'Professional installation services',
    'System configuration and optimization',
    'Integration with existing infrastructure',
    'Warranty management'],

    image: "https://images.unsplash.com/photo-1542344577-6f66ac053064",
    alt: 'Technician assembling computer hardware components on workbench with tools and equipment',
    icon: 'ComputerDesktopIcon',
    link: '/services-overview',
    category: 'hardware'
  },
  {
    id: 'hardware-2',
    title: 'Server Solutions',
    description: 'Robust server infrastructure for reliable business operations and data management.',
    features: [
    'Server sizing and selection',
    'Virtualization implementation',
    'Storage solutions (SAN/NAS)',
    'Backup and disaster recovery',
    'Server monitoring and maintenance'],

    image: "https://images.unsplash.com/photo-1714132765788-e13ce8e873d6",
    alt: 'Row of enterprise servers with blinking status lights in climate-controlled data center',
    icon: 'CircleStackIcon',
    link: '/services-overview',
    category: 'hardware'
  },
  {
    id: 'software-1',
    title: 'Business Software Solutions',
    description: 'Strategic software implementation and licensing management for operational efficiency.',
    features: [
    'Software needs assessment',
    'License procurement and management',
    'Installation and configuration',
    'User training and documentation',
    'Integration with existing systems',
    'Compliance management'],

    image: "https://images.unsplash.com/photo-1664223308156-3d374ea8d7eb",
    alt: 'Business professional using enterprise software on laptop with data analytics dashboard displayed',
    icon: 'CodeBracketIcon',
    link: '/services-overview',
    category: 'software'
  },
  {
    id: 'software-2',
    title: 'Cloud Migration Services',
    description: 'Seamless transition to cloud platforms with minimal disruption to business operations.',
    features: [
    'Cloud readiness assessment',
    'Migration strategy development',
    'Data migration and validation',
    'Application modernization',
    'Post-migration optimization'],

    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1dec8cca6-1764492660568.png",
    alt: 'Digital cloud computing concept with interconnected network nodes and data streams',
    icon: 'CloudIcon',
    link: '/services-overview',
    category: 'software'
  },
  {
    id: 'amc-1',
    title: 'Comprehensive AMC',
    description: 'All-inclusive annual maintenance contracts ensuring 24/7 system reliability and support.',
    features: [
    'Preventive maintenance schedules',
    '24/7 emergency support',
    'Priority response times',
    'Regular health checks',
    'Spare parts management',
    'Performance reporting',
    'Upgrade recommendations'],

    image: "https://img.rocket.new/generatedImages/rocket_gen_img_18783b455-1764492662619.png",
    alt: 'IT technician performing maintenance check on server equipment with diagnostic tools',
    icon: 'ShieldCheckIcon',
    link: '/amc-solutions',
    category: 'amc'
  },
  {
    id: 'amc-2',
    title: 'Network AMC',
    description: 'Specialized maintenance contracts focused on network infrastructure and connectivity.',
    features: [
    'Network monitoring 24/7',
    'Proactive issue resolution',
    'Bandwidth optimization',
    'Security updates',
    'Configuration management'],

    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1f6a4b3b7-1764492662786.png",
    alt: 'Network engineer monitoring multiple screens showing network topology and performance metrics',
    icon: 'SignalIcon',
    link: '/amc-solutions',
    category: 'amc'
  },
  {
    id: 'amc-3',
    title: 'Hardware AMC',
    description: 'Dedicated hardware maintenance ensuring optimal performance and extended equipment life.',
    features: [
    'Regular hardware inspections',
    'Component replacement',
    'Performance tuning',
    'Thermal management',
    'Firmware updates'],

    image: "https://images.unsplash.com/photo-1721332154191-ba5f1534266e",
    alt: 'Close-up of technician hands repairing computer motherboard with precision tools',
    icon: 'WrenchScrewdriverIcon',
    link: '/amc-solutions',
    category: 'amc'
  }];


  const testimonials = [
  {
    name: 'Rajesh Kumar',
    role: 'IT Director',
    company: 'TechCorp Industries',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_12c863552-1763294002377.png",
    alt: 'Professional Indian man in navy blue suit with confident smile in modern office',
    testimonial: 'Ansu Tech Solutions transformed our network infrastructure. Their proactive approach reduced our downtime by 85% and significantly improved our operational efficiency.',
    service: 'Networking Solutions',
    rating: 5
  },
  {
    name: 'Priya Sharma',
    role: 'Operations Manager',
    company: 'Global Logistics Ltd',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_15f4e23f6-1763300607163.png",
    alt: 'Professional Indian woman in white blazer with warm smile in corporate setting',
    testimonial: 'The AMC program has been a game-changer. We no longer worry about system failures, and their 24/7 support gives us complete peace of mind.',
    service: 'AMC Solutions',
    rating: 5
  }];


  const comparisonFeatures = [
  { name: '24/7 Support', networking: true, hardware: true, software: true, amc: true },
  { name: 'On-site Service', networking: true, hardware: true, software: false, amc: true },
  { name: 'Remote Monitoring', networking: true, hardware: false, software: true, amc: true },
  { name: 'Preventive Maintenance', networking: 'Quarterly', hardware: 'Monthly', software: 'As needed', amc: 'Weekly' },
  { name: 'Emergency Response', networking: '4 hours', hardware: '6 hours', software: '8 hours', amc: '2 hours' },
  { name: 'Spare Parts Included', networking: false, hardware: true, software: false, amc: true },
  { name: 'Performance Reports', networking: 'Monthly', hardware: 'Quarterly', software: 'Monthly', amc: 'Weekly' },
  { name: 'Upgrade Consultation', networking: true, hardware: true, software: true, amc: true },
  { name: 'Training Included', networking: false, hardware: false, software: true, amc: true },
  { name: 'SLA Guarantee', networking: '99.5%', hardware: '99%', software: '98%', amc: '99.9%' }];


  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="relative bg-gradient-to-br from-primary via-primary/95 to-secondary py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-12 h-1 bg-accent rounded-full"></div>
              <span className="text-sm font-heading font-semibold text-primary-foreground/80 uppercase tracking-wider">
                Comprehensive Solutions
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground mb-6 leading-tight">
              Technology Services That Power Your Business
            </h1>
            
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              From network infrastructure to comprehensive maintenance programs, we deliver end-to-end technology solutions that ensure reliability, security, and scalability for your business operations.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/support-portal"
                className="px-8 py-4 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-all duration-300 font-heading font-semibold shadow-brand flex items-center space-x-2">

                <Icon name="PhoneIcon" size={20} />
                <span>Get Emergency Support</span>
              </Link>
              <Link
                href="/client-portal"
                className="px-8 py-4 bg-card text-text-primary rounded-lg hover:bg-card/90 transition-all duration-300 font-heading font-semibold shadow-subtle flex items-center space-x-2">

                <Icon name="DocumentTextIcon" size={20} />
                <span>Request Assessment</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
            { icon: 'ServerIcon', title: 'Networking', count: '500+', subtitle: 'Networks Deployed' },
            { icon: 'ComputerDesktopIcon', title: 'Hardware', count: '2000+', subtitle: 'Systems Installed' },
            { icon: 'CodeBracketIcon', title: 'Software', count: '300+', subtitle: 'Solutions Implemented' },
            { icon: 'ShieldCheckIcon', title: 'AMC', count: '150+', subtitle: 'Active Contracts' }].
            map((stat, index) =>
            <div key={index} className="bg-card border border-border rounded-lg p-6 text-center hover:shadow-elevated transition-all duration-300">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={stat.icon as any} size={32} className="text-primary" />
                </div>
                <h3 className="text-3xl font-heading font-bold text-text-primary mb-2">{stat.count}</h3>
                <p className="text-sm font-medium text-text-secondary mb-1">{stat.title}</p>
                <p className="text-xs text-muted-foreground">{stat.subtitle}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-text-primary mb-4">
              Our Service Portfolio
            </h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              Comprehensive technology solutions designed to meet your business needs, from infrastructure to ongoing support
            </p>
          </div>

          <ServicesInteractive
            services={services}
            testimonials={testimonials}
            comparisonFeatures={comparisonFeatures} />

        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-card border border-border rounded-lg p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-text-primary mb-6">
                  Why Choose Ansu Tech Solutions?
                </h2>
                <div className="space-y-4">
                  {[
                  { title: 'Proven Expertise', desc: '15+ years of experience in enterprise technology solutions' },
                  { title: 'Certified Professionals', desc: 'Team of certified engineers and technology specialists' },
                  { title: 'Vendor Partnerships', desc: 'Authorized partners with leading technology vendors' },
                  { title: 'Proactive Support', desc: '24/7 monitoring and preventive maintenance approach' },
                  { title: 'Scalable Solutions', desc: 'Technology infrastructure that grows with your business' },
                  { title: 'Transparent Pricing', desc: 'Clear service agreements with no hidden costs' }].
                  map((item, index) =>
                  <div key={index} className="flex items-start space-x-3">
                      <Icon name="CheckCircleIcon" size={24} className="text-success flex-shrink-0 mt-1" variant="solid" />
                      <div>
                        <h4 className="font-heading font-semibold text-text-primary mb-1">{item.title}</h4>
                        <p className="text-sm text-text-secondary">{item.desc}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className="bg-gradient-to-br from-secondary/10 to-primary/10 rounded-lg p-8">
                <div className="text-center mb-6">
                  <Icon name="ChatBubbleLeftRightIcon" size={48} className="text-secondary mx-auto mb-4" />
                  <h3 className="text-2xl font-heading font-bold text-text-primary mb-2">
                    Ready to Transform Your IT Infrastructure?
                  </h3>
                  <p className="text-text-secondary">
                    Schedule a free consultation with our technology experts
                  </p>
                </div>
                <Link
                  href="/client-portal"
                  className="block w-full px-6 py-4 bg-cta text-cta-foreground rounded-lg hover:bg-cta/90 transition-all duration-300 font-heading font-semibold text-center shadow-subtle">

                  Schedule Consultation
                </Link>
                <div className="mt-6 flex items-center justify-center space-x-6 text-sm text-text-secondary">
                  <div className="flex items-center space-x-2">
                    <Icon name="ClockIcon" size={16} />
                    <span>30-min call</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="CurrencyRupeeIcon" size={16} />
                    <span>Free assessment</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-heading font-bold mb-4">Ansu Tech Solutions</h3>
              <p className="text-sm text-primary-foreground/80">
                Your trusted technology partner for reliable IT infrastructure and comprehensive support services.
              </p>
            </div>
            <div>
              <h4 className="text-sm font-heading font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li><Link href="/services-overview" className="hover:text-primary-foreground transition-colors">Networking Solutions</Link></li>
                <li><Link href="/services-overview" className="hover:text-primary-foreground transition-colors">Hardware Services</Link></li>
                <li><Link href="/services-overview" className="hover:text-primary-foreground transition-colors">Software Solutions</Link></li>
                <li><Link href="/amc-solutions" className="hover:text-primary-foreground transition-colors">AMC Programs</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-heading font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li><Link href="/support-portal" className="hover:text-primary-foreground transition-colors">24/7 Support</Link></li>
                <li><Link href="/client-portal" className="hover:text-primary-foreground transition-colors">Client Portal</Link></li>
                <li><Link href="/technology-center" className="hover:text-primary-foreground transition-colors">Knowledge Base</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-heading font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li className="flex items-center space-x-2">
                  <Icon name="PhoneIcon" size={16} />
                  <span>+91 98765 43210</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Icon name="EnvelopeIcon" size={16} />
                  <span>support@ansutech.com</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/80">
            <p>&copy; {new Date().getFullYear()} Ansu Tech Solutions. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>);

}