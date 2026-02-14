'use client';

import React, { useState, useEffect } from 'react';
import SupportHero from './SupportHero';
import QuickAccessCard from './QuickAccessCard';
import KnowledgeBase from './KnowledgeBase';
import SystemStatusDashboard from './SystemStatusDashboard';
import EmergencySupportModal from './EmergencySupportModal';
import TicketSubmissionModal from './TicketSubmissionModal';
import RemoteAssistanceCard from './RemoteAssistanceCard';
import SupportChannels from './SupportChannels';
import AIAssistantChat from './AIAssistantChat';

const SupportPortalInteractive: React.FC = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [isEmergencyModalOpen, setIsEmergencyModalOpen] = useState(false);
  const [isTicketModalOpen, setIsTicketModalOpen] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) {
    return (
      <div className="min-h-screen bg-background">
        <div className="animate-pulse space-y-8 p-6">
          <div className="h-64 bg-muted rounded-xl"></div>
          <div className="h-48 bg-muted rounded-xl"></div>
          <div className="h-96 bg-muted rounded-xl"></div>
        </div>
      </div>
    );
  }

  const quickAccessItems = [
    {
      id: '1',
      title: 'Check System Status',
      description: 'View real-time status of all services',
      icon: 'ServerIcon',
      action: () => {
        document.getElementById('system-status')?.scrollIntoView({ behavior: 'smooth' });
      },
    },
    {
      id: '2',
      title: 'Browse Knowledge Base',
      description: 'Find solutions to common issues',
      icon: 'BookOpenIcon',
      action: () => {
        document.getElementById('knowledge-base')?.scrollIntoView({ behavior: 'smooth' });
      },
    },
    {
      id: '3',
      title: 'Remote Assistance',
      description: 'Connect with technician remotely',
      icon: 'ComputerDesktopIcon',
      action: () => {
        document.getElementById('remote-assistance')?.scrollIntoView({ behavior: 'smooth' });
      },
    },
    {
      id: '4',
      title: 'Contact Support',
      description: 'Reach out through multiple channels',
      icon: 'PhoneIcon',
      action: () => {
        document.getElementById('support-channels')?.scrollIntoView({ behavior: 'smooth' });
      },
    },
  ];

  const knowledgeArticles = [
    {
      id: '1',
      title: 'How to Reset Your Network Router',
      category: 'Networking',
      views: 1247,
      helpful: 892,
    },
    {
      id: '2',
      title: 'Troubleshooting Windows Update Errors',
      category: 'Software',
      views: 2156,
      helpful: 1543,
    },
    {
      id: '3',
      title: 'Setting Up VPN for Remote Access',
      category: 'Security',
      views: 1834,
      helpful: 1289,
    },
    {
      id: '4',
      title: 'Printer Connection Issues - Quick Fix',
      category: 'Hardware',
      views: 987,
      helpful: 654,
    },
    {
      id: '5',
      title: 'Email Configuration for Outlook',
      category: 'Software',
      views: 1456,
      helpful: 1021,
    },
    {
      id: '6',
      title: 'Backup Best Practices for Business Data',
      category: 'Security',
      views: 2341,
      helpful: 1876,
    },
  ];

  const systemServices = [
    {
      id: '1',
      name: 'Network Infrastructure',
      status: 'operational' as const,
      uptime: '99.98%',
      lastChecked: '2 minutes ago',
    },
    {
      id: '2',
      name: 'Email Services',
      status: 'operational' as const,
      uptime: '99.95%',
      lastChecked: '5 minutes ago',
    },
    {
      id: '3',
      name: 'Cloud Storage',
      status: 'operational' as const,
      uptime: '99.99%',
      lastChecked: '1 minute ago',
    },
    {
      id: '4',
      name: 'Remote Access VPN',
      status: 'operational' as const,
      uptime: '99.97%',
      lastChecked: '3 minutes ago',
    },
    {
      id: '5',
      name: 'Backup Systems',
      status: 'operational' as const,
      uptime: '100%',
      lastChecked: '4 minutes ago',
    },
  ];

  const supportChannels = [
    {
      id: 'phone',
      name: 'Phone Support',
      icon: 'PhoneIcon',
      description: 'Speak directly with our support team',
      availability: '24/7 Available',
      responseTime: 'Immediate',
      action: 'Call Now',
    },
    {
      id: 'email',
      name: 'Email Support',
      icon: 'EnvelopeIcon',
      description: 'Send detailed inquiries via email',
      availability: 'Business Hours',
      responseTime: '2-4 hours',
      action: 'Send Email',
    },
    {
      id: 'chat',
      name: 'Live Chat',
      icon: 'ChatBubbleLeftRightIcon',
      description: 'Chat with support representatives',
      availability: '24/7 Available',
      responseTime: '&lt;5 minutes',
      action: 'Start Chat',
    },
    {
      id: 'portal',
      name: 'Client Portal',
      icon: 'GlobeAltIcon',
      description: 'Access your account and resources',
      availability: 'Always Available',
      responseTime: 'Self-Service',
      action: 'Login',
    },
  ];

  const handleArticleClick = (articleId: string) => {
    alert(`Opening article: ${articleId}\n\nThis would navigate to the full article page.`);
  };

  const handleSearchClick = () => {
    alert('Opening knowledge base search...\n\nSearch functionality would be implemented here.');
  };

  const handleChannelClick = (channelId: string) => {
    const channelActions: { [key: string]: string } = {
      phone: 'Phone: +91 98765 43210\n\nOur support team is ready to assist you.',
      email: 'Email: support@ansutech.com\n\nWe typically respond within 2-4 hours.',
      chat: 'Starting live chat session...\n\nConnecting you with an available agent.',
      portal: 'Redirecting to client portal...\n\nPlease login with your credentials.',
    };
    alert(channelActions[channelId] || 'Opening support channel...');
  };

  return (
    <>
      <SupportHero
        onEmergencyClick={() => setIsEmergencyModalOpen(true)}
        onTicketClick={() => setIsTicketModalOpen(true)}
      />

      <QuickAccessCard items={quickAccessItems} />

      <div id="system-status">
        <SystemStatusDashboard services={systemServices} />
      </div>

      <div id="knowledge-base">
        <KnowledgeBase
          articles={knowledgeArticles}
          onArticleClick={handleArticleClick}
          onSearchClick={handleSearchClick}
        />
      </div>

      <div id="remote-assistance">
        <RemoteAssistanceCard />
      </div>

      <div id="support-channels">
        <SupportChannels channels={supportChannels} onChannelClick={handleChannelClick} />
      </div>

      <EmergencySupportModal
        isOpen={isEmergencyModalOpen}
        onClose={() => setIsEmergencyModalOpen(false)}
      />

      <TicketSubmissionModal
        isOpen={isTicketModalOpen}
        onClose={() => setIsTicketModalOpen(false)}
      />

      <AIAssistantChat />
    </>
  );
};

export default SupportPortalInteractive;