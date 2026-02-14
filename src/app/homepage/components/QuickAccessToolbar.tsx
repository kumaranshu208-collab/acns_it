import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

interface QuickAccessToolbarProps {
  onEmergencySupport: () => void;
}

const QuickAccessToolbar = ({ onEmergencySupport }: QuickAccessToolbarProps) => {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col space-y-3">
      <button
        onClick={onEmergencySupport}
        className="group flex items-center justify-center w-14 h-14 bg-accent hover:bg-accent/90 text-white rounded-full shadow-elevated hover:shadow-brand transition-all duration-300 hover:scale-110"
        aria-label="Emergency Support"
      >
        <Icon name="PhoneIcon" size={24} variant="solid" />
        <span className="absolute right-16 bg-gray-900 text-white text-sm font-medium px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          Emergency Support
        </span>
      </button>
      
      <Link
        href="/client-portal"
        className="group flex items-center justify-center w-14 h-14 bg-primary hover:bg-primary/90 text-white rounded-full shadow-elevated hover:shadow-brand transition-all duration-300 hover:scale-110"
        aria-label="Client Portal"
      >
        <Icon name="UserCircleIcon" size={24} variant="solid" />
        <span className="absolute right-16 bg-gray-900 text-white text-sm font-medium px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          Client Portal
        </span>
      </Link>
      
      <Link
        href="/support-portal"
        className="group flex items-center justify-center w-14 h-14 bg-secondary hover:bg-secondary/90 text-white rounded-full shadow-elevated hover:shadow-brand transition-all duration-300 hover:scale-110"
        aria-label="Support Ticket"
      >
        <Icon name="TicketIcon" size={24} variant="solid" />
        <span className="absolute right-16 bg-gray-900 text-white text-sm font-medium px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          Create Ticket
        </span>
      </Link>
    </div>
  );
};

export default QuickAccessToolbar;