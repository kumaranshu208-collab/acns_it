import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary via-primary/95 to-secondary">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full mb-6">
          <Icon name="RocketLaunchIcon" size={40} className="text-white" variant="solid" />
        </div>
        
        <h2 className="text-3xl lg:text-4xl font-heading font-bold text-white mb-6">
          Ready to Transform Your IT Infrastructure?
        </h2>
        
        <p className="text-lg lg:text-xl text-white/90 mb-10 max-w-3xl mx-auto">
          Get a free technology assessment and discover how our proactive solutions can reduce downtime, cut costs, and accelerate your business growth.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/client-portal"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-heading font-semibold text-primary bg-white hover:bg-gray-50 rounded-lg shadow-elevated hover:shadow-brand transition-all duration-300"
          >
            Schedule Free Assessment
            <Icon name="CalendarIcon" size={20} className="ml-2" />
          </Link>
          
          <Link
            href="/services-overview"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-heading font-semibold text-white bg-transparent hover:bg-white/10 rounded-lg border-2 border-white transition-all duration-300"
          >
            Explore Our Services
            <Icon name="ArrowRightIcon" size={20} className="ml-2" />
          </Link>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div className="flex items-start space-x-3">
              <Icon name="CheckCircleIcon" size={24} className="text-brand-trust flex-shrink-0" variant="solid" />
              <div>
                <h3 className="font-semibold text-white mb-1">No Commitment Required</h3>
                <p className="text-sm text-white/80">Free consultation with no obligations</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <Icon name="CheckCircleIcon" size={24} className="text-brand-trust flex-shrink-0" variant="solid" />
              <div>
                <h3 className="font-semibold text-white mb-1">Expert Analysis</h3>
                <p className="text-sm text-white/80">Comprehensive infrastructure review</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <Icon name="CheckCircleIcon" size={24} className="text-brand-trust flex-shrink-0" variant="solid" />
              <div>
                <h3 className="font-semibold text-white mb-1">Custom Solutions</h3>
                <p className="text-sm text-white/80">Tailored recommendations for your needs</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;