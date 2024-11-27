export default function getStatusBadge(status) {
    switch (status.toLowerCase()) {
        case 'inprogress':
            return <span className="badge bg-primary text-primary-subtle text-uppercase">InProgress</span>;
          case 'pending':
            return <span className="badge bg-secondary-subtle text-secondary text-uppercase">Pending</span>;
          case 'delivered':
            return <span className="badge bg-success-subtle text-success text-uppercase">Delivered</span>;
          case 'returned':
            return <span className="badge bg-warning-subtle text-warning text-uppercase">Returned</span>;
          case 'cancelled':
            return <span className="badge bg-danger-subtle text-danger text-uppercase">Cancelled</span>;
          default:
            return <span className="badge bg-secondary">Unknown</span>;
        
    }
}