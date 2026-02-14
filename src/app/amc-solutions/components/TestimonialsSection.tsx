'use client';

import { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

interface Testimonial {
  name: string;
  role: string;
  company: string;
  image: string;
  alt: string;
  quote: string;
  metrics: {
    label: string;
    value: string;
  }[];
}

const testimonials: Testimonial[] = [
{
  name: 'Rajesh Mehta',
  role: 'IT Director',
  company: 'GlobalTech Industries',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_12c863552-1763294002377.png",
  alt: 'Professional Indian man in navy blue suit with glasses smiling confidently in modern office',
  quote: 'Switching to Ansu\'s Professional AMC plan was the best decision for our IT infrastructure. Their proactive monitoring caught issues before they became problems, and we\'ve seen our system uptime improve from 96% to 99.8%. The predictable monthly costs have made budgeting so much easier.',
  metrics: [
  { label: 'Uptime Improvement', value: '96% → 99.8%' },
  { label: 'Cost Savings', value: '₹4.2L annually' }]

},
{
  name: 'Priya Sharma',
  role: 'Operations Manager',
  company: 'RetailHub Solutions',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1f0883a0c-1763299171534.png",
  alt: 'Professional Indian woman in burgundy blazer with confident smile in corporate setting',
  quote: 'The 2-hour response time guarantee has been a game-changer for our retail operations. When we had a critical POS system failure during peak hours, their team was on-site within 90 minutes and had us back online in under 3 hours. That level of reliability is priceless.',
  metrics: [
  { label: 'Response Time', value: 'Under 2 hours' },
  { label: 'Downtime Reduced', value: '85% decrease' }]

},
{
  name: 'Amit Patel',
  role: 'CEO',
  company: 'FinServe Technologies',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1b7526dea-1763293303028.png",
  alt: 'Indian business executive in charcoal suit with beard looking professional in office environment',
  quote: 'As a financial services company, we can\'t afford any downtime. Ansu\'s Enterprise AMC with 24/7 monitoring and dedicated account manager gives us complete peace of mind. Their monthly reports are incredibly detailed, and they\'ve helped us plan our technology roadmap for the next three years.',
  metrics: [
  { label: 'Zero Downtime', value: '18 months' },
  { label: 'ROI', value: '240%' }]

}];


const TestimonialsSection = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  if (!isHydrated) {
    return (
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <div className="inline-block w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
          </div>
        </div>
      </section>);

  }

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-text-primary mb-4">
            Trusted by Leading Businesses
          </h2>
          <p className="text-lg text-text-secondary">
            See how our AMC solutions have transformed IT operations for companies across industries.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-card border border-border rounded-2xl p-8 lg:p-12 shadow-elevated">
            <div className="grid lg:grid-cols-3 gap-8 items-center">
              <div className="lg:col-span-1 flex flex-col items-center text-center">
                <div className="relative w-32 h-32 mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-full opacity-20 blur-xl" />
                  <AppImage
                    src={currentTestimonial.image}
                    alt={currentTestimonial.alt}
                    className="relative w-full h-full rounded-full object-cover border-4 border-white shadow-elevated" />

                </div>
                <h3 className="text-xl font-heading font-bold text-text-primary mb-1">
                  {currentTestimonial.name}
                </h3>
                <p className="text-sm text-text-secondary mb-1">
                  {currentTestimonial.role}
                </p>
                <p className="text-sm font-semibold text-primary">
                  {currentTestimonial.company}
                </p>
              </div>

              <div className="lg:col-span-2 space-y-6">
                <div className="relative">
                  <Icon name="ChatBubbleLeftIcon" size={40} className="text-primary/20 absolute -top-4 -left-2" />
                  <p className="text-lg text-text-primary leading-relaxed relative z-10 pl-8">
                    "{currentTestimonial.quote}"
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-6 border-t border-border">
                  {currentTestimonial.metrics.map((metric, index) =>
                  <div key={index} className="bg-muted rounded-lg p-4">
                      <p className="text-xs text-text-secondary mb-1">{metric.label}</p>
                      <p className="text-xl font-heading font-bold text-primary">{metric.value}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between mt-8 pt-8 border-t border-border">
              <button
                onClick={prevTestimonial}
                className="p-3 text-text-secondary hover:text-primary hover:bg-muted rounded-lg transition-all duration-300"
                aria-label="Previous testimonial">

                <Icon name="ChevronLeftIcon" size={24} />
              </button>

              <div className="flex items-center space-x-2">
                {testimonials.map((_, index) =>
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ?
                  'w-8 bg-primary' : 'bg-border hover:bg-primary/50'}`
                  }
                  aria-label={`Go to testimonial ${index + 1}`} />

                )}
              </div>

              <button
                onClick={nextTestimonial}
                className="p-3 text-text-secondary hover:text-primary hover:bg-muted rounded-lg transition-all duration-300"
                aria-label="Next testimonial">

                <Icon name="ChevronRightIcon" size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default TestimonialsSection;