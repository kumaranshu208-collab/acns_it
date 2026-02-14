import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

const FooterSection = () => {
  const currentYear = new Date()?.getFullYear();
  
  const footerLinks = {
    services: [
      { label: 'Networking Solutions', href: '/services-overview' },
      { label: 'Hardware Services', href: '/services-overview' },
      { label: 'Software Solutions', href: '/services-overview' },
      { label: 'AMC Programs', href: '/amc-solutions' },
    ],
    company: [
      { label: 'About Us', href: '/homepage' },
      { label: 'Technology Center', href: '/technology-center' },
      { label: 'Client Portal', href: '/client-portal' },
      { label: 'Support Portal', href: '/support-portal' },
    ],
    support: [
      { label: 'Emergency Support', href: '/support-portal' },
      { label: 'Knowledge Base', href: '/support-portal' },
      { label: 'System Status', href: '/client-portal' },
      { label: 'Contact Us', href: '/support-portal' },
    ],
  };
  
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          <div className="lg:col-span-2">
            <Link href="/homepage" className="flex items-center space-x-3 mb-6">
              <div className="flex items-center justify-center w-10 h-10 bg-white/10 rounded-lg">
                <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="text-xl font-heading font-bold">Ansu Tech Solutions</span>
            </Link>
            
            <p className="text-white/80 mb-6 leading-relaxed">
              Your trusted technology partner for reliable IT infrastructure, proactive maintenance, and 24/7 support. Keeping your business running smoothly since 2015.
            </p>
            
            <div className="flex space-x-4">
              <a href="#" className="flex items-center justify-center w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg transition-colors duration-300">
                <Icon name="EnvelopeIcon" size={20} />
              </a>
              <a href="#" className="flex items-center justify-center w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg transition-colors duration-300">
                <Icon name="PhoneIcon" size={20} />
              </a>
              <a href="#" className="flex items-center justify-center w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg transition-colors duration-300">
                <Icon name="MapPinIcon" size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-heading font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              {footerLinks?.services?.map((link) => (
                <li key={link?.href}>
                  <Link
                    href={link?.href}
                    className="text-white/80 hover:text-white transition-colors duration-300"
                  >
                    {link?.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-heading font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks?.company?.map((link) => (
                <li key={link?.href}>
                  <Link
                    href={link?.href}
                    className="text-white/80 hover:text-white transition-colors duration-300"
                  >
                    {link?.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-heading font-semibold mb-4">Support</h3>
            <ul className="space-y-3">
              {footerLinks?.support?.map((link) => (
                <li key={link?.href}>
                  <Link
                    href={link?.href}
                    className="text-white/80 hover:text-white transition-colors duration-300"
                  >
                    {link?.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-white/70">
              &copy; {currentYear} Ansu Tech Solutions. All rights reserved.
            </p>
            
            <div className="flex items-center space-x-6">
              <Link href="#" className="text-sm text-white/70 hover:text-white transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link href="#" className="text-sm text-white/70 hover:text-white transition-colors duration-300">
                Terms of Service
              </Link>
              <Link href="#" className="text-sm text-white/70 hover:text-white transition-colors duration-300">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;