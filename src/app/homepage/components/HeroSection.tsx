import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

interface HeroSectionProps {
  onEmergencySupport: () => void;
}

const HeroSection = ({ onEmergencySupport }: HeroSectionProps) => {
  return (
    <section className="relative bg-gradient-to-br from-primary via-primary/95 to-secondary overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4wNSIvPjwvZz48L3N2Zz4=')] opacity-20"></div>
      
      <div className="relative max-w-7xl mx-auto px-6 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <Icon name="ShieldCheckIcon" size={20} className="text-brand-trust" variant="solid" />
              <span className="text-sm font-semibold text-white">Trusted by 30+ Businesses</span>
            </div>
            
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-heading font-bold text-white leading-tight">
              Technology that works, so your business can too
            </h1>
            
            <p className="text-lg lg:text-xl text-white/90 leading-relaxed">
              Proactive IT solutions that keep your systems running smoothly. From networking to hardware services, we're your trusted technology partner for reliable infrastructure and 24/7 support.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              {/* <Link
                href="/client-portal"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-heading font-semibold text-primary bg-white hover:bg-gray-50 rounded-lg shadow-elevated hover:shadow-brand transition-all duration-300"
              >
                Get Free Assessment
                <Icon name="ArrowRightIcon" size={20} className="ml-2" />
              </Link> */}
              
              <button
                onClick={onEmergencySupport}
                className="inline-flex items-center justify-center px-8 py-4 text-base font-heading font-semibold text-white bg-accent hover:bg-accent/90 rounded-lg border-2 border-white/20 transition-all duration-300"
              >
                <Icon name="PhoneIcon" size={20} className="mr-2" />
                Emergency Support
              </button>
            </div>
            
            <div className="flex items-center space-x-8 pt-4">
              <div className="flex items-center space-x-2">
                <Icon name="ClockIcon" size={24} className="text-brand-trust" variant="solid" />
                <div>
                  <p className="text-sm font-semibold text-white">24/7 Support</p>
                  <p className="text-xs text-white/70">Always Available</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <Icon name="BoltIcon" size={24} className="text-brand-trust" variant="solid" />
                <div>
                  <p className="text-sm font-semibold text-white">99.9% Uptime</p>
                  <p className="text-xs text-white/70">Guaranteed</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative hidden lg:block">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <Icon name="ServerIcon" size={40} className="text-brand-secondary mb-4" variant="solid" />
                  <h3 className="text-lg font-heading font-semibold text-white mb-2">Networking Solutions</h3>
                  <p className="text-sm text-white/80">Enterprise-grade infrastructure</p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <Icon name="CpuChipIcon" size={40} className="text-brand-accent mb-4" variant="solid" />
                  <h3 className="text-lg font-heading font-semibold text-white mb-2">Hardware Services</h3>
                  <p className="text-sm text-white/80">Expert maintenance & repair</p>
                </div>
              </div>
              
              <div className="space-y-4 pt-8">
                <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <Icon name="CodeBracketIcon" size={40} className="text-brand-trust mb-4" variant="solid" />
                  <h3 className="text-lg font-heading font-semibold text-white mb-2">Software Solutions</h3>
                  <p className="text-sm text-white/80">Custom business applications</p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <Icon name="ShieldCheckIcon" size={40} className="text-white mb-4" variant="solid" />
                  <h3 className="text-lg font-heading font-semibold text-white mb-2">AMC Programs</h3>
                  <p className="text-sm text-white/80">Comprehensive maintenance</p>
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