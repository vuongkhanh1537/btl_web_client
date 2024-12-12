
export function getStatusBadge(status) {
  if(!status) return <span className="inline-block px-2 py-1 text-xs font-bold text-gray-700 bg-gray-200 rounded-full">Unknown</span>;
  switch (status.toLowerCase()) {
    case 'inprogress':
      return (
        <span className="inline-block px-2 py-1 text-xs font-medium text-gray-700 bg-blue-100 rounded-full uppercase">
          InProgress
        </span>
      );
    case 'shipping':
      return (
        <span className="inline-block px-2 py-1 text-xs font-bold text-blue-700 bg-gray-100 rounded-full uppercase">
          Shipping
        </span>
      );
    case 'completed':
      return (
        <span className="inline-block px-2 py-1 text-xs font-bold text-green-700 bg-green-100 rounded-full uppercase">
          Completed
        </span>
      );
    case 'returned':
      return (
        <span className="inline-block px-2 py-1 text-xs font-bold text-yellow-700 bg-yellow-100 rounded-full uppercase">
          Returned
        </span>
      );
    case 'cancelled':
      return (
        <span className="inline-block px-2 py-1 text-xs font-bold text-red-700 bg-red-100 rounded-full uppercase">
          Cancelled
        </span>
      );
    default:
      return (
        <span className="inline-block px-2 py-1 text-xs font-bold text-gray-700 bg-gray-200 rounded-full">
          Unknown
        </span>
      );
  }
}

export function getPaymentStatusBadge(payment_status){
  if(!payment_status) return <span className="inline-block px-2 py-1 text-xs font-bold text-gray-700 bg-gray-200 rounded-full">Unknown</span>;
  switch (payment_status.toLowerCase()) {
    case 'completed':
      return (
        <span className="inline-block px-2 py-1 text-xs font-bold text-green-700 bg-green-100 rounded-full uppercase">
          Completed
        </span>
      );
    case 'not completed':
      return (
        <span className="inline-block px-2 py-1 text-xs font-bold text-yellow-700 bg-yellow-100 rounded-full uppercase">
          Not Completed
        </span>
      );

    case 'cancelled':
      return (
        <span className="inline-block px-2 py-1 text-xs font-bold text-red-700 bg-red-100 rounded-full uppercase">
          Cancelled
        </span>
      );
    default:
      return (
        <span className="inline-block px-2 py-1 text-xs font-bold text-gray-700 bg-gray-200 rounded-full">
          Unknown
        </span> 
    )
  }
}