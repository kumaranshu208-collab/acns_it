'use client';

import React, { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

const RemoteAssistanceCard: React.FC = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [sessionCode, setSessionCode] = useState('');

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) {
    return (
      <section className="py-12 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="bg-card rounded-xl border border-border shadow-subtle p-8">
            <div className="animate-pulse space-y-4">
              <div className="h-8 bg-muted rounded w-1/3"></div>
              <div className="h-4 bg-muted rounded w-2/3"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  const handleStartSession = () => {
    if (!sessionCode.trim()) {
      alert('Please enter a session code');
      return;
    }
    alert(`Connecting to remote session: ${sessionCode}\n\nOur technician will join shortly...`);
  };

  const handleGenerateCode = () => {
    const code = Math.random().toString(36).substring(2, 10).toUpperCase();
    setSessionCode(code);
    alert(`Session code generated: ${code}\n\nShare this code with our support team.`);
  };

  return (
    <section className="py-12 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="bg-gradient-to-br from-secondary/10 to-primary/10 rounded-xl border border-border shadow-subtle overflow-hidden">
          <div className="p-8">
            <div className="flex items-start justify-between mb-6">
              <div>
                <h2 className="text-3xl font-heading font-bold text-text-primary mb-2">
                  Remote Assistance
                </h2>
                <p className="text-text-secondary">
                  Allow our technicians to securely access your system for faster resolution
                </p>
              </div>
              <div className="bg-secondary/20 p-4 rounded-lg">
                <Icon name="ComputerDesktopIcon" size={40} className="text-secondary" />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-card rounded-lg p-6 border border-border">
                <h3 className="text-xl font-heading font-semibold text-text-primary mb-4">
                  Join Existing Session
                </h3>
                <p className="text-sm text-text-secondary mb-4">
                  Enter the session code provided by our support team
                </p>
                <div className="space-y-4">
                  <input
                    type="text"
                    value={sessionCode}
                    onChange={(e) => setSessionCode(e.target.value.toUpperCase())}
                    placeholder="Enter session code"
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary transition-all duration-300 font-mono text-lg tracking-wider"
                    maxLength={10}
                  />
                  <button
                    onClick={handleStartSession}
                    className="w-full px-6 py-3 text-sm font-heading font-semibold text-secondary-foreground bg-secondary hover:bg-secondary/90 rounded-lg shadow-subtle hover:shadow-elevated transition-all duration-300"
                  >
                    Start Session
                  </button>
                </div>
              </div>

              <div className="bg-card rounded-lg p-6 border border-border">
                <h3 className="text-xl font-heading font-semibold text-text-primary mb-4">
                  Generate New Session
                </h3>
                <p className="text-sm text-text-secondary mb-4">
                  Create a new session code to share with our support team
                </p>
                <div className="space-y-4">
                  <div className="bg-muted rounded-lg p-4 border border-border">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold text-text-secondary">Session Code:</span>
                      {sessionCode && (
                        <span className="font-mono text-lg font-bold text-primary tracking-wider">
                          {sessionCode}
                        </span>
                      )}
                    </div>
                  </div>
                  <button
                    onClick={handleGenerateCode}
                    className="w-full px-6 py-3 text-sm font-heading font-semibold text-primary border-2 border-primary hover:bg-primary hover:text-primary-foreground rounded-lg transition-all duration-300"
                  >
                    Generate Code
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-6 bg-warning/10 border border-warning/30 rounded-lg p-4">
              <div className="flex items-start space-x-3">
                <Icon name="ShieldCheckIcon" size={24} className="text-warning flex-shrink-0 mt-0.5" />
                <div className="text-sm text-text-primary">
                  <p className="font-semibold mb-1">Security Notice:</p>
                  <p className="text-text-secondary">
                    Remote sessions are encrypted and monitored. Only share session codes with verified Ansu Tech Solutions support staff. Sessions automatically expire after 2 hours of inactivity.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RemoteAssistanceCard;