'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';
import SystemStatusCard from './SystemStatusCard';
import MaintenanceScheduleCard from './MaintenanceScheduleCard';
import QuickActionCard from './QuickActionCard';
import RecentTicketCard from './RecentTicketCard';
import BillingCard from './BillingCard';

interface SystemStatus {
  id: string;
  name: string;
  status: 'operational' | 'warning' | 'critical';
  uptime: string;
  lastCheck: string;
  metrics: {
    cpu: number;
    memory: number;
    disk: number;
  };
}

interface MaintenanceSchedule {
  id: string;
  title: string;
  type: 'scheduled' | 'completed' | 'upcoming';
  date: string;
  time: string;
  technician: string;
  description: string;
  status: string;
}

interface QuickAction {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
}

interface Ticket {
  id: string;
  title: string;
  status: 'open' | 'in-progress' | 'resolved' | 'closed';
  priority: 'low' | 'medium' | 'high' | 'critical';
  createdAt: string;
  lastUpdate: string;
  assignedTo: string;
}

interface Invoice {
  id: string;
  invoiceNumber: string;
  date: string;
  dueDate: string;
  amount: number;
  status: 'paid' | 'pending' | 'overdue';
  description: string;
}

const ClientPortalInteractive = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedSystem, setSelectedSystem] = useState('all');

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const mockSystems: SystemStatus[] = [
    {
      id: 'SYS001',
      name: 'Primary Server - Mumbai DC',
      status: 'operational',
      uptime: '99.98%',
      lastCheck: '2 minutes ago',
      metrics: { cpu: 45, memory: 62, disk: 58 }
    },
    {
      id: 'SYS002',
      name: 'Database Cluster - Bangalore',
      status: 'warning',
      uptime: '99.85%',
      lastCheck: '5 minutes ago',
      metrics: { cpu: 78, memory: 85, disk: 72 }
    },
    {
      id: 'SYS003',
      name: 'Network Infrastructure',
      status: 'operational',
      uptime: '99.99%',
      lastCheck: '1 minute ago',
      metrics: { cpu: 32, memory: 48, disk: 41 }
    },
    {
      id: 'SYS004',
      name: 'Backup Storage System',
      status: 'operational',
      uptime: '100%',
      lastCheck: '3 minutes ago',
      metrics: { cpu: 28, memory: 35, disk: 89 }
    }
  ];

  const mockSchedules: MaintenanceSchedule[] = [
    {
      id: 'MNT001',
      title: 'Quarterly System Health Check',
      type: 'scheduled',
      date: '15/12/2025',
      time: '10:00 AM - 12:00 PM',
      technician: 'Rajesh Kumar',
      description: 'Comprehensive system diagnostics and performance optimization',
      status: 'Confirmed'
    },
    {
      id: 'MNT002',
      title: 'Security Patch Update',
      type: 'upcoming',
      date: '20/12/2025',
      time: '02:00 AM - 04:00 AM',
      technician: 'Priya Sharma',
      description: 'Critical security updates and vulnerability patches',
      status: 'Scheduled'
    },
    {
      id: 'MNT003',
      title: 'Network Equipment Upgrade',
      type: 'completed',
      date: '25/11/2025',
      time: '11:00 PM - 02:00 AM',
      technician: 'Amit Patel',
      description: 'Router firmware update and network optimization',
      status: 'Successfully Completed'
    }
  ];

  const mockQuickActions: QuickAction[] = [
    {
      id: 'ACT001',
      title: 'Submit Support Ticket',
      description: 'Report issues or request assistance',
      icon: 'TicketIcon',
      color: 'bg-secondary'
    },
    {
      id: 'ACT002',
      title: 'Schedule Maintenance',
      description: 'Book preventive maintenance visit',
      icon: 'CalendarIcon',
      color: 'bg-primary'
    },
    {
      id: 'ACT003',
      title: 'Download Reports',
      description: 'Access system health and performance reports',
      icon: 'DocumentArrowDownIcon',
      color: 'bg-accent'
    },
    {
      id: 'ACT004',
      title: 'Contact Technician',
      description: 'Direct communication with assigned support team',
      icon: 'PhoneIcon',
      color: 'bg-success'
    }
  ];

  const mockTickets: Ticket[] = [
    {
      id: 'TKT2025001',
      title: 'Server Performance Degradation',
      status: 'in-progress',
      priority: 'high',
      createdAt: '28/11/2025',
      lastUpdate: '30/11/2025 - 10:30 AM',
      assignedTo: 'Vikram Singh'
    },
    {
      id: 'TKT2025002',
      title: 'Network Connectivity Issues',
      status: 'resolved',
      priority: 'medium',
      createdAt: '25/11/2025',
      lastUpdate: '29/11/2025 - 03:45 PM',
      assignedTo: 'Neha Gupta'
    },
    {
      id: 'TKT2025003',
      title: 'Backup System Configuration',
      status: 'open',
      priority: 'low',
      createdAt: '30/11/2025',
      lastUpdate: '30/11/2025 - 08:15 AM',
      assignedTo: 'Arjun Reddy'
    }
  ];

  const mockInvoices: Invoice[] = [
    {
      id: 'INV001',
      invoiceNumber: 'INV-2025-Q4-001',
      date: '01/11/2025',
      dueDate: '15/12/2025',
      amount: 125000,
      status: 'pending',
      description: 'Q4 2025 AMC Services'
    },
    {
      id: 'INV002',
      invoiceNumber: 'INV-2025-Q3-001',
      date: '01/08/2025',
      dueDate: '15/09/2025',
      amount: 125000,
      status: 'paid',
      description: 'Q3 2025 AMC Services'
    },
    {
      id: 'INV003',
      invoiceNumber: 'INV-2025-MAINT-045',
      date: '15/11/2025',
      dueDate: '30/11/2025',
      amount: 35000,
      status: 'paid',
      description: 'Emergency Maintenance - Network Upgrade'
    }
  ];

  const handleQuickAction = (actionId: string) => {
    if (!isHydrated) return;
    console.log(`Quick action triggered: ${actionId}`);
  };

  const tabs = [
    { id: 'overview', label: 'Overview', icon: 'HomeIcon' },
    { id: 'systems', label: 'System Status', icon: 'ServerIcon' },
    { id: 'maintenance', label: 'Maintenance', icon: 'WrenchScrewdriverIcon' },
    { id: 'tickets', label: 'Support Tickets', icon: 'TicketIcon' },
    { id: 'billing', label: 'Billing', icon: 'CreditCardIcon' }
  ];

  if (!isHydrated) {
    return (
      <div className="min-h-screen bg-background">
        <div className="w-full px-6 py-8">
          <div className="animate-pulse space-y-6">
            <div className="h-8 bg-muted rounded w-1/4"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-32 bg-muted rounded-lg"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="w-full px-6 py-8">
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
            <div>
              <h1 className="text-3xl font-heading font-bold text-text-primary mb-2">
                Welcome back, Rajesh Enterprises
              </h1>
              <p className="text-muted-foreground">
                Your comprehensive technology management dashboard
              </p>
            </div>
            <Link
              href="/support-portal"
              className="inline-flex items-center space-x-2 px-6 py-3 bg-accent hover:bg-accent/90 text-accent-foreground rounded-lg shadow-subtle transition-all duration-300"
            >
              <Icon name="ExclamationTriangleIcon" size={20} variant="solid" />
              <span className="font-heading font-semibold">Emergency Support</span>
            </Link>
          </div>

          <div className="flex items-center space-x-2 overflow-x-auto pb-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium text-sm whitespace-nowrap transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-primary text-primary-foreground shadow-subtle'
                    : 'bg-card text-text-secondary hover:bg-muted hover:text-text-primary'
                }`}
              >
                <Icon name={tab.icon as any} size={18} variant={activeTab === tab.id ? 'solid' : 'outline'} />
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {activeTab === 'overview' && (
          <div className="space-y-8 transition-opacity duration-300 ease-in-out">
            <div>
              <h2 className="text-xl font-heading font-bold text-text-primary mb-4">Quick Actions</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {mockQuickActions.map((action) => (
                  <QuickActionCard
                    key={action.id}
                    action={action}
                    onClick={() => handleQuickAction(action.id)}
                  />
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-xl font-heading font-bold text-text-primary mb-4">System Health Overview</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {mockSystems.slice(0, 2).map((system) => (
                  <SystemStatusCard key={system.id} system={system} />
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h2 className="text-xl font-heading font-bold text-text-primary mb-4">Upcoming Maintenance</h2>
                <div className="space-y-4">
                  {mockSchedules.slice(0, 2).map((schedule) => (
                    <MaintenanceScheduleCard key={schedule.id} schedule={schedule} />
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-xl font-heading font-bold text-text-primary mb-4">Recent Support Tickets</h2>
                <div className="space-y-4">
                  {mockTickets.slice(0, 2).map((ticket) => (
                    <RecentTicketCard key={ticket.id} ticket={ticket} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'systems' && (
          <div className="transition-opacity duration-300 ease-in-out">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-heading font-bold text-text-primary">All Systems</h2>
              <select
                value={selectedSystem}
                onChange={(e) => setSelectedSystem(e.target.value)}
                className="px-4 py-2 bg-card border border-border rounded-lg text-sm text-text-primary focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="all">All Systems</option>
                <option value="operational">Operational Only</option>
                <option value="warning">Warnings</option>
                <option value="critical">Critical</option>
              </select>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {mockSystems.map((system) => (
                <SystemStatusCard key={system.id} system={system} />
              ))}
            </div>
          </div>
        )}

        {activeTab === 'maintenance' && (
          <div className="transition-opacity duration-300 ease-in-out">
            <h2 className="text-xl font-heading font-bold text-text-primary mb-6">Maintenance Schedule</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {mockSchedules.map((schedule) => (
                <MaintenanceScheduleCard key={schedule.id} schedule={schedule} />
              ))}
            </div>
          </div>
        )}

        {activeTab === 'tickets' && (
          <div className="transition-opacity duration-300 ease-in-out">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-heading font-bold text-text-primary">Support Tickets</h2>
              <button className="flex items-center space-x-2 px-4 py-2 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg transition-colors duration-300">
                <Icon name="PlusIcon" size={18} variant="solid" />
                <span className="text-sm font-medium">New Ticket</span>
              </button>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {mockTickets.map((ticket) => (
                <RecentTicketCard key={ticket.id} ticket={ticket} />
              ))}
            </div>
          </div>
        )}

        {activeTab === 'billing' && (
          <div className="transition-opacity duration-300 ease-in-out">
            <h2 className="text-xl font-heading font-bold text-text-primary mb-6">Billing & Invoices</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {mockInvoices.map((invoice) => (
                <BillingCard key={invoice.id} invoice={invoice} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ClientPortalInteractive;
