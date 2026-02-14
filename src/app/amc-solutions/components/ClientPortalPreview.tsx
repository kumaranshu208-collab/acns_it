'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';


interface SystemStatus {
  name: string;
  status: 'operational' | 'warning' | 'critical';
  uptime: string;
  lastCheck: string;
}

const ClientPortalPreview = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [activeTab, setActiveTab] = useState<'dashboard' | 'schedule' | 'reports'>('dashboard');

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const systemStatuses: SystemStatus[] = [
    { name: 'Network Infrastructure', status: 'operational', uptime: '99.98%', lastCheck: '5 minutes ago' },
    { name: 'Server Performance', status: 'operational', uptime: '99.95%', lastCheck: '5 minutes ago' },
    { name: 'Security Systems', status: 'operational', uptime: '100%', lastCheck: '5 minutes ago' },
    { name: 'Backup Systems', status: 'warning', uptime: '98.5%', lastCheck: '10 minutes ago' }
  ];

  const upcomingMaintenance = [
    { date: '15 Dec 2025', time: '10:00 AM', type: 'Quarterly System Audit', technician: 'Rajesh Kumar' },
    { date: '22 Dec 2025', time: '2:00 PM', type: 'Network Optimization', technician: 'Priya Sharma' },
    { date: '05 Jan 2026', time: '11:00 AM', type: 'Security Update', technician: 'Amit Patel' }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'operational': return 'text-brand-trust bg-brand-trust/10';
      case 'warning': return 'text-warning bg-warning/10';
      case 'critical': return 'text-error bg-error/10';
      default: return 'text-text-secondary bg-muted';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'operational': return 'CheckCircleIcon';
      case 'warning': return 'ExclamationTriangleIcon';
      case 'critical': return 'XCircleIcon';
      default: return 'InformationCircleIcon';
    }
  };

  if (!isHydrated) {
    return (
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <div className="inline-block w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-text-primary mb-4">
            Your Dedicated Client Portal
          </h2>
          <p className="text-lg text-text-secondary">
            Real-time system monitoring, maintenance scheduling, and comprehensive reporting all in one secure dashboard.
          </p>
        </div>

        <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-elevated">
          <div className="bg-gradient-to-r from-primary to-secondary p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                  <Icon name="BuildingOfficeIcon" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-bold text-white">TechCorp Solutions Pvt Ltd</h3>
                  <p className="text-sm text-white/80">Professional AMC Plan • Active since Jan 2024</p>
                </div>
              </div>
              <Link
                href="/client-portal"
                className="hidden md:inline-flex items-center px-6 py-2 bg-white text-primary font-heading font-semibold rounded-lg hover:bg-gray-50 transition-all duration-300"
              >
                Access Full Portal
                <Icon name="ArrowRightIcon" size={16} className="ml-2" />
              </Link>
            </div>
          </div>

          <div className="border-b border-border">
            <div className="flex space-x-1 p-2">
              {[
                { id: 'dashboard', label: 'System Status', icon: 'ChartBarIcon' },
                { id: 'schedule', label: 'Maintenance', icon: 'CalendarIcon' },
                { id: 'reports', label: 'Reports', icon: 'DocumentTextIcon' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as typeof activeTab)}
                  className={`flex items-center space-x-2 px-6 py-3 text-sm font-semibold rounded-lg transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-primary text-white shadow-subtle'
                      : 'text-text-secondary hover:text-primary hover:bg-muted'
                  }`}
                >
                  <Icon name={tab.icon} size={16} />
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="p-8">
            {activeTab === 'dashboard' && (
              <div className="space-y-6">
                <div className="grid md:grid-cols-4 gap-4">
                  <div className="bg-brand-trust/10 rounded-xl p-4 border border-brand-trust/30">
                    <p className="text-sm text-text-secondary mb-1">Overall Health</p>
                    <p className="text-3xl font-heading font-bold text-brand-trust">98.5%</p>
                  </div>
                  <div className="bg-primary/10 rounded-xl p-4 border border-primary/30">
                    <p className="text-sm text-text-secondary mb-1">Active Systems</p>
                    <p className="text-3xl font-heading font-bold text-primary">24/25</p>
                  </div>
                  <div className="bg-accent/10 rounded-xl p-4 border border-accent/30">
                    <p className="text-sm text-text-secondary mb-1">Open Tickets</p>
                    <p className="text-3xl font-heading font-bold text-accent">2</p>
                  </div>
                  <div className="bg-secondary/10 rounded-xl p-4 border border-secondary/30">
                    <p className="text-sm text-text-secondary mb-1">Next Maintenance</p>
                    <p className="text-3xl font-heading font-bold text-secondary">5 days</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="text-lg font-heading font-bold text-text-primary">System Status</h4>
                  {systemStatuses.map((system, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 bg-muted rounded-lg hover:bg-muted/70 transition-colors duration-200"
                    >
                      <div className="flex items-center space-x-4">
                        <Icon 
                          name={getStatusIcon(system.status)} 
                          size={24} 
                          className={getStatusColor(system.status).split(' ')[0]} 
                        />
                        <div>
                          <p className="font-semibold text-text-primary">{system.name}</p>
                          <p className="text-xs text-text-secondary">Last checked: {system.lastCheck}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className={`inline-flex items-center px-3 py-1 text-xs font-semibold rounded-full ${getStatusColor(system.status)}`}>
                          {system.status.charAt(0).toUpperCase() + system.status.slice(1)}
                        </span>
                        <p className="text-sm text-text-secondary mt-1">Uptime: {system.uptime}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'schedule' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h4 className="text-lg font-heading font-bold text-text-primary">Upcoming Maintenance</h4>
                  <button className="inline-flex items-center px-4 py-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors duration-300">
                    <Icon name="PlusIcon" size={16} className="mr-2" />
                    Request Service
                  </button>
                </div>

                <div className="space-y-4">
                  {upcomingMaintenance.map((maintenance, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-4 p-6 bg-muted rounded-xl hover:shadow-subtle transition-all duration-300"
                    >
                      <div className="flex-shrink-0 w-16 h-16 bg-primary/10 rounded-lg flex flex-col items-center justify-center">
                        <p className="text-2xl font-heading font-bold text-primary">
                          {maintenance.date.split(' ')[0]}
                        </p>
                        <p className="text-xs text-text-secondary">
                          {maintenance.date.split(' ')[1]}
                        </p>
                      </div>
                      <div className="flex-1">
                        <h5 className="text-lg font-heading font-bold text-text-primary mb-1">
                          {maintenance.type}
                        </h5>
                        <div className="flex items-center space-x-4 text-sm text-text-secondary">
                          <div className="flex items-center space-x-1">
                            <Icon name="ClockIcon" size={16} />
                            <span>{maintenance.time}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Icon name="UserIcon" size={16} />
                            <span>{maintenance.technician}</span>
                          </div>
                        </div>
                      </div>
                      <button className="px-4 py-2 text-sm font-semibold text-primary hover:bg-primary hover:text-white border border-primary rounded-lg transition-all duration-300">
                        Reschedule
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'reports' && (
              <div className="space-y-6">
                <h4 className="text-lg font-heading font-bold text-text-primary">Performance Reports</h4>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    { title: 'November 2025 System Report', date: '01 Dec 2025', size: '2.4 MB', type: 'PDF' },
                    { title: 'Q4 2025 Performance Analysis', date: '28 Nov 2025', size: '3.1 MB', type: 'PDF' },
                    { title: 'October 2025 Maintenance Log', date: '01 Nov 2025', size: '1.8 MB', type: 'PDF' },
                    { title: 'Security Audit Report', date: '15 Oct 2025', size: '4.2 MB', type: 'PDF' }
                  ].map((report, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-6 bg-muted rounded-xl hover:shadow-subtle transition-all duration-300"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-error/10 rounded-lg flex items-center justify-center">
                          <Icon name="DocumentTextIcon" size={24} className="text-error" />
                        </div>
                        <div>
                          <h5 className="font-semibold text-text-primary mb-1">{report.title}</h5>
                          <p className="text-xs text-text-secondary">{report.date} • {report.size}</p>
                        </div>
                      </div>
                      <button className="p-2 text-primary hover:bg-primary hover:text-white rounded-lg transition-all duration-300">
                        <Icon name="ArrowDownTrayIcon" size={20} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/client-portal"
            className="inline-flex items-center px-8 py-4 text-base font-heading font-semibold text-white bg-primary hover:bg-primary/90 rounded-lg shadow-subtle transition-all duration-300"
          >
            Access Your Full Portal
            <Icon name="ArrowRightIcon" size={20} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ClientPortalPreview;