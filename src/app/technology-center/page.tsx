import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import TechnologyCenterInteractive from './components/TechnologyCenterInteractive';

export const metadata: Metadata = {
  title: 'Technology Center - Ansu Tech Solutions',
  description: 'Explore our comprehensive product catalog, use compatibility tools, and configure custom solutions. Access technical specifications, vendor partnerships, and expert guidance for your technology needs.',
};

export default function TechnologyCenterPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <TechnologyCenterInteractive />
      
      <footer className="bg-card border-t border-border py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-text-secondary">
              © {new Date().getFullYear()} Ansu Tech Solutions. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="/support-portal" className="text-sm text-text-secondary hover:text-primary transition-colors">
                Support
              </a>
              <a href="/client-portal" className="text-sm text-text-secondary hover:text-primary transition-colors">
                Client Portal
              </a>
              <a href="/homepage" className="text-sm text-text-secondary hover:text-primary transition-colors">
                Home
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}