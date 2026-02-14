import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  image: string;
  alt: string;
  quote: string;
  rating: number;
}

const TestimonialsSection = () => {
  const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Rajesh Kumar',
    role: 'IT Manager',
    company: 'TechCorp Solutions',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_12c863552-1763294002377.png",
    alt: 'Professional Indian man in blue shirt smiling at camera in modern office',
    quote: 'Ansu Tech transformed our IT infrastructure completely. Their proactive approach reduced our downtime by 95% and their 24/7 support gives us peace of mind.',
    rating: 5
  },
  {
    id: '2',
    name: 'Priya Sharma',
    role: 'Operations Director',
    company: 'Global Logistics Ltd',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1f0883a0c-1763299171534.png",
    alt: 'Professional Indian woman in formal blazer with confident smile in corporate setting',
    quote: 'The AMC program has been a game-changer for us. No more surprise IT costs, and their team responds to issues before we even notice them. Truly exceptional service.',
    rating: 5
  },
  {
    id: '3',
    name: 'Amit Patel',
    role: 'CEO',
    company: 'InnovateTech Pvt Ltd',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_105b96742-1763300606680.png",
    alt: 'Indian business executive in navy suit with glasses in professional office environment',
    quote: 'From network setup to ongoing maintenance, Ansu Tech has been our trusted partner for 3 years. Their expertise and reliability are unmatched in the industry.',
    rating: 5
  }];


  return (
    <section className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-text-primary mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our clients say about their experience with Ansu Tech Solutions.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) =>
          <div
            key={testimonial.id}
            className="bg-card border border-border rounded-xl p-8 hover:shadow-elevated transition-all duration-300">

              <div className="flex items-center space-x-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) =>
              <Icon key={i} name="StarIcon" size={20} className="text-warning" variant="solid" />
              )}
              </div>
              
              <blockquote className="text-text-secondary mb-6 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
              
              <div className="flex items-center space-x-4">
                <div className="relative w-14 h-14 rounded-full overflow-hidden flex-shrink-0">
                  <AppImage
                  src={testimonial.image}
                  alt={testimonial.alt}
                  className="w-full h-full object-cover" />

                </div>
                
                <div>
                  <div className="font-heading font-semibold text-text-primary">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-text-secondary">
                    {testimonial.role}
                  </div>
                  <div className="text-sm text-primary font-medium">
                    {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

};

export default TestimonialsSection;