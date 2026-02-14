import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

interface TestimonialCardProps {
  name: string;
  role: string;
  company: string;
  image: string;
  alt: string;
  testimonial: string;
  service: string;
  rating: number;
}

export default function TestimonialCard({
  name,
  role,
  company,
  image,
  alt,
  testimonial,
  service,
  rating
}: TestimonialCardProps) {
  return (
    <div className="bg-card border border-border rounded-lg p-6 hover:shadow-elevated transition-all duration-300">
      <div className="flex items-center space-x-1 mb-4">
        {[...Array(5)].map((_, index) => (
          <Icon
            key={index}
            name="StarIcon"
            size={16}
            variant={index < rating ? 'solid' : 'outline'}
            className={index < rating ? 'text-warning' : 'text-muted-foreground'}
          />
        ))}
      </div>

      <p className="text-text-secondary mb-6 italic">&ldquo;{testimonial}&rdquo;</p>

      <div className="flex items-center space-x-4">
        <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
          <AppImage
            src={image}
            alt={alt}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1">
          <h4 className="text-sm font-heading font-bold text-text-primary">{name}</h4>
          <p className="text-xs text-text-secondary">{role}, {company}</p>
          <div className="mt-1">
            <span className="inline-block px-2 py-0.5 bg-secondary/10 text-secondary text-xs font-medium rounded">
              {service}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}