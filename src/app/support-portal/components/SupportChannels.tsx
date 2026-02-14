import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface Channel {
  id: string;
  name: string;
  icon: string;
  description: string;
  availability: string;
  responseTime: string;
  action: string;
}

interface SupportChannelsProps {
  channels: Channel[];
  onChannelClick: (channelId: string) => void;
}

const SupportChannels: React.FC<SupportChannelsProps> = ({ channels, onChannelClick }) => {
  return (
    <section className="py-12 px-6 bg-muted">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-heading font-bold text-text-primary mb-4">
            Multiple Ways to Get Help
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Choose the support channel that works best for your situation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {channels.map((channel) => (
            <button
              key={channel.id}
              onClick={() => onChannelClick(channel.id)}
              className="bg-card hover:bg-background p-6 rounded-xl border border-border shadow-subtle hover:shadow-elevated transition-all duration-300 text-left group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="bg-primary/10 p-3 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                  <Icon name={channel.icon as any} size={28} className="text-primary" />
                </div>
                <Icon name="ArrowRightIcon" size={20} className="text-text-secondary group-hover:text-primary transition-colors duration-300" />
              </div>

              <h3 className="text-lg font-heading font-semibold text-text-primary mb-2 group-hover:text-primary transition-colors duration-300">
                {channel.name}
              </h3>
              <p className="text-sm text-text-secondary mb-4">{channel.description}</p>

              <div className="space-y-2 text-xs">
                <div className="flex items-center space-x-2 text-text-secondary">
                  <Icon name="ClockIcon" size={14} />
                  <span>{channel.availability}</span>
                </div>
                <div className="flex items-center space-x-2 text-text-secondary">
                  <Icon name="BoltIcon" size={14} />
                  <span>{channel.responseTime}</span>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-border">
                <span className="text-sm font-semibold text-primary">{channel.action}</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SupportChannels;