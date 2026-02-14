import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

interface HeroSectionProps {
  className?: string;
}

const HeroSection = ({ className = '' }: HeroSectionProps) => {
  return (
    <section className={`relative bg-gradient-to-br from-primary via-primary/95 to-secondary overflow-hidden ${className}`}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
      
      <div className="relative max-w-7xl mx-auto px-6 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <Icon name="ShieldCheckIcon" size={20} className="text-brand-trust" />
              <span className="text-sm font-semibold text-white">Trusted by 500+ Businesses</span>
            </div>
            
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-heading font-bold text-white leading-tight">
              Annual Maintenance Contracts
              <span className="block text-brand-secondary mt-2">That Keep You Running</span>
            </h1>
            
            <p className="text-lg lg:text-xl text-white/90 leading-relaxed max-w-xl">
              Proactive technology care with guaranteed response times, predictable costs, and 24/7 support. Focus on your business while we handle your IT infrastructure.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#packages"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-heading font-semibold text-primary bg-white hover:bg-gray-50 rounded-lg shadow-elevated transition-all duration-300"
              >
                Compare Packages
                <Icon name="ChevronRightIcon" size={20} className="ml-2" />
              </Link>
              <Link
                href="#calculator"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-heading font-semibold text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg transition-all duration-300"
              >
                Calculate ROI
                <Icon name="CalculatorIcon" size={20} className="ml-2" />
              </Link>
            </div>
            
            <div className="flex items-center space-x-8 pt-4">
              <div className="flex items-center space-x-2">
                <Icon name="ClockIcon" size={24} className="text-brand-trust" />
                <div>
                  <p className="text-sm font-semibold text-white">99.9% Uptime</p>
                  <p className="text-xs text-white/70">Guaranteed SLA</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="BoltIcon" size={24} className="text-accent" />
                <div>
                  <p className="text-sm font-semibold text-white">&lt;2 Hour Response</p>
                  <p className="text-xs text-white/70">Critical Issues</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative lg:block hidden">
            <div className="relative bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-8 shadow-elevated">
              <div className="space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-white/20">
                  <h3 className="text-lg font-heading font-bold text-white">System Health Dashboard</h3>
                  <span className="px-3 py-1 text-xs font-semibold text-brand-trust bg-brand-trust/20 rounded-full">All Systems Operational</span>
                </div>
                
                <div className="space-y-4">
                  {[
                    { name: 'Network Infrastructure', status: 100, color: 'bg-brand-trust' },
                    { name: 'Server Performance', status: 98, color: 'bg-brand-trust' },
                    { name: 'Security Systems', status: 100, color: 'bg-brand-trust' },
                    { name: 'Backup Systems', status: 95, color: 'bg-brand-secondary' }
                  ].map((system) => (
                    <div key={system.name} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-white">{system.name}</span>
                        <span className="text-sm font-bold text-white">{system.status}%</span>
                      </div>
                      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                        <div 
                          className={`h-full ${system.color} rounded-full transition-all duration-500`}
                          style={{ width: `${system.status}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="pt-4 border-t border-white/20">
                  <p className="text-xs text-white/70 text-center">Last maintenance check: 2 hours ago</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;