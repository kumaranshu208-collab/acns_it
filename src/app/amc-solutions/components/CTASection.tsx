import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary via-primary/95 to-secondary relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.1),transparent_50%)]" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-heading font-bold text-white mb-6">
            Ready to Experience Worry-Free IT?
          </h2>
          <p className="text-xl text-white/90 mb-12 leading-relaxed">
            Join 500+ businesses that trust Ansu for their technology infrastructure. Get a free assessment and customized AMC proposal today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              href="/client-portal"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-heading font-semibold text-primary bg-white hover:bg-gray-50 rounded-lg shadow-elevated transition-all duration-300"
            >
              Get Free Assessment
              <Icon name="ArrowRightIcon" size={20} className="ml-2" />
            </Link>
            <Link
              href="/support-portal"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-heading font-semibold text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm border-2 border-white/30 rounded-lg transition-all duration-300"
            >
              Talk to Expert
              <Icon name="PhoneIcon" size={20} className="ml-2" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: 'ShieldCheckIcon', text: 'No Long-term Contracts' },
              { icon: 'CurrencyRupeeIcon', text: 'Transparent Pricing' },
              { icon: 'ClockIcon', text: '30-Day Money Back' }
            ]?.map((item, index) => (
              <div key={index} className="flex items-center justify-center space-x-3 text-white">
                <Icon name={item?.icon} size={24} className="text-brand-trust" />
                <span className="text-sm font-semibold">{item?.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;