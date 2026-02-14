import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import SupportPortalInteractive from './components/SupportPortalInteractive';

export const metadata: Metadata = {
  title: 'Support Portal - Ansu Tech Solutions',
  description: '24/7 technical support center with knowledge base, ticket system, and remote assistance tools. Get immediate help from our expert team for all your technology challenges.',
};

export default function SupportPortalPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <SupportPortalInteractive />
    </main>
  );
}