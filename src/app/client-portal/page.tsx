import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import ClientPortalInteractive from './components/ClientPortalInteractive';

export const metadata: Metadata = {
  title: 'Client Portal - Ansu Tech Solutions',
  description: 'Secure dashboard for AMC clients with real-time system status monitoring, maintenance schedules, support ticket management, and comprehensive reporting tools.',
};

export default function ClientPortalPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <ClientPortalInteractive />
    </main>
  );
}  