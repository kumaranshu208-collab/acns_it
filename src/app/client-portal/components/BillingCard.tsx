import Icon from '@/components/ui/AppIcon';

interface BillingCardProps {
  invoice: {
    id: string;
    invoiceNumber: string;
    date: string;
    dueDate: string;
    amount: number;
    status: 'paid' | 'pending' | 'overdue';
    description: string;
  };
}

const BillingCard = ({ invoice }: BillingCardProps) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'paid':
        return 'text-success bg-success/10';
      case 'pending':
        return 'text-warning bg-warning/10';
      case 'overdue':
        return 'text-error bg-error/10';
      default:
        return 'text-muted-foreground bg-muted';
    }
  };

  return (
    <div className="bg-card border border-border rounded-lg p-5 hover:shadow-elevated transition-shadow duration-300">
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <div className="flex items-center space-x-2 mb-1">
            <span className="text-xs font-mono text-muted-foreground">{invoice.invoiceNumber}</span>
          </div>
          <h4 className="text-base font-heading font-semibold text-text-primary mb-1">
            {invoice.description}
          </h4>
        </div>
        <div className={`flex items-center space-x-1.5 px-2.5 py-1 rounded-full ${getStatusColor(invoice.status)}`}>
          <span className="text-xs font-medium capitalize">{invoice.status}</span>
        </div>
      </div>

      <div className="space-y-2 mb-4">
        <div className="flex items-center justify-between text-sm">
          <span className="text-text-secondary">Invoice Date:</span>
          <span className="text-text-primary font-medium">{invoice.date}</span>
        </div>

        <div className="flex items-center justify-between text-sm">
          <span className="text-text-secondary">Due Date:</span>
          <span className="text-text-primary font-medium">{invoice.dueDate}</span>
        </div>

        <div className="flex items-center justify-between text-sm pt-2 border-t border-border">
          <span className="text-text-secondary font-semibold">Amount:</span>
          <span className="text-lg font-heading font-bold text-primary">₹{invoice.amount.toLocaleString('en-IN')}</span>
        </div>
      </div>

      <button className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-muted hover:bg-muted/80 text-text-primary rounded-lg transition-colors duration-300">
        <Icon name="ArrowDownTrayIcon" size={16} />
        <span className="text-sm font-medium">Download Invoice</span>
      </button>
    </div>
  );
};

export default BillingCard;