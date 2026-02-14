import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface SupportHeroProps {
  onEmergencyClick: () => void;
  onTicketClick: () => void;
}

const SupportHero: React.FC<SupportHeroProps> = ({ onEmergencyClick, onTicketClick }) => {
  return (
    <section className="bg-gradient-to-br from-primary via-primary/95 to-secondary py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-4">
            24/7 Technical Support Center
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Immediate assistance when you need it most. Our expert team is ready to resolve your technology challenges.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <button
            onClick={onEmergencyClick}
            className="bg-accent hover:bg-accent/90 text-accent-foreground p-8 rounded-xl shadow-elevated transition-all duration-300 hover:scale-105 group"
          >
            <div className="flex items-center justify-center mb-4">
              <div className="bg-accent-foreground/20 p-4 rounded-full group-hover:bg-accent-foreground/30 transition-colors duration-300">
                <Icon name="ExclamationTriangleIcon" size={40} className="text-accent-foreground" />
              </div>
            </div>
            <h3 className="text-2xl font-heading font-bold mb-2">Emergency Support</h3>
            <p className="text-accent-foreground/90">Critical issues requiring immediate attention</p>
          </button>

          <button
            onClick={onTicketClick}
            className="bg-card hover:bg-muted text-text-primary p-8 rounded-xl shadow-elevated transition-all duration-300 hover:scale-105 group border-2 border-border"
          >
            <div className="flex items-center justify-center mb-4">
              <div className="bg-primary/10 p-4 rounded-full group-hover:bg-primary/20 transition-colors duration-300">
                <Icon name="TicketIcon" size={40} className="text-primary" />
              </div>
            </div>
            <h3 className="text-2xl font-heading font-bold mb-2">Submit Ticket</h3>
            <p className="text-text-secondary">Non-urgent issues and service requests</p>
          </button>
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-heading font-bold text-primary-foreground mb-1">&lt;15min</div>
            <div className="text-sm text-primary-foreground/80">Avg Response Time</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-heading font-bold text-primary-foreground mb-1">99.8%</div>
            <div className="text-sm text-primary-foreground/80">Resolution Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-heading font-bold text-primary-foreground mb-1">24/7</div>
            <div className="text-sm text-primary-foreground/80">Availability</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-heading font-bold text-primary-foreground mb-1">500+</div>
            <div className="text-sm text-primary-foreground/80">Active Clients</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportHero;