'use client';

import { useState } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

interface HeaderProps {
  className?: string;
}

const Header = ({ className = '' }: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMoreMenuOpen, setIsMoreMenuOpen] = useState(false);

  const primaryNavItems = [
    { label: 'Home', href: '/homepage' },
    { label: 'Services', href: '/services-overview' },
    { label: 'AMC Solutions', href: '/amc-solutions' },
    { label: 'Support', href: '/support-portal' },
  ];

  const secondaryNavItems = [
    { label: 'Client Portal', href: '/client-portal' },
    { label: 'Technology Center', href: '/technology-center' },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setIsMoreMenuOpen(false);
  };

  const toggleMoreMenu = () => {
    setIsMoreMenuOpen(!isMoreMenuOpen);
  };

  return (
    <header className={`bg-card border-b border-border sticky top-0 z-50 shadow-subtle ${className}`}>
      <div className="w-full">
        <div className="flex items-center justify-between h-16 px-6">
          <Link href="/homepage" className="flex items-center space-x-3 hover:opacity-80 transition-opacity duration-300">
            <div className="flex items-center justify-center w-10 h-10 bg-primary rounded-lg">
              <svg className="w-6 h-6 text-primary-foreground" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className="text-xl font-heading font-bold text-text-primary">ACNS</span>
          </Link>

          <nav className="hidden lg:flex items-center space-x-1">
            {primaryNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-4 py-2 text-sm font-medium text-text-secondary hover:text-primary hover:bg-muted rounded-md transition-all duration-300 ease-out"
              >
                {item.label}
              </Link>
            ))}
            
            <div className="relative">
              <button
                onClick={toggleMoreMenu}
                className="flex items-center space-x-1 px-4 py-2 text-sm font-medium text-text-secondary hover:text-primary hover:bg-muted rounded-md transition-all duration-300 ease-out"
              >
                <span>More</span>
                <Icon 
                  name="ChevronDownIcon" 
                  size={16} 
                  className={`transition-transform duration-300 ${isMoreMenuOpen ? 'rotate-180' : ''}`}
                />
              </button>
              
              {isMoreMenuOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-card border border-border rounded-lg shadow-elevated overflow-hidden">
                  {secondaryNavItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsMoreMenuOpen(false)}
                      className="block px-4 py-3 text-sm font-medium text-text-secondary hover:text-primary hover:bg-muted transition-all duration-300 ease-out"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <Link
              href="/support-portal"
              className="px-4 py-2 text-sm font-heading font-semibold text-accent hover:text-accent/90 transition-colors duration-300"
            >
              Emergency Support
            </Link>
            <Link
              href="/client-portal"
              className="px-6 py-2 text-sm font-heading font-semibold text-cta-foreground bg-cta hover:bg-cta/90 rounded-lg shadow-subtle hover:shadow-brand transition-all duration-300 ease-out"
            >
              Get Assessment
            </Link>
          </div>

          <button
            onClick={toggleMobileMenu}
            className="lg:hidden p-2 text-text-secondary hover:text-primary hover:bg-muted rounded-md transition-all duration-300"
            aria-label="Toggle mobile menu"
          >
            <Icon name={isMobileMenuOpen ? 'XMarkIcon' : 'Bars3Icon'} size={24} />
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-border bg-card">
            <nav className="px-4 py-4 space-y-1">
              {primaryNavItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-4 py-3 text-sm font-medium text-text-secondary hover:text-primary hover:bg-muted rounded-md transition-all duration-300"
                >
                  {item.label}
                </Link>
              ))}
              
              <div className="pt-2 border-t border-border">
                <p className="px-4 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">More</p>
                {secondaryNavItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-4 py-3 text-sm font-medium text-text-secondary hover:text-primary hover:bg-muted rounded-md transition-all duration-300"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              <div className="pt-4 space-y-2">
                <Link
                  href="/support-portal"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full px-4 py-3 text-sm font-heading font-semibold text-center text-accent hover:text-accent/90 border border-accent rounded-lg transition-colors duration-300"
                >
                  Emergency Support
                </Link>
                <Link
                  href="/client-portal"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full px-4 py-3 text-sm font-heading font-semibold text-center text-cta-foreground bg-cta hover:bg-cta/90 rounded-lg shadow-subtle transition-all duration-300"
                >
                  Get Assessment
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;