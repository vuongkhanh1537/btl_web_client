// export default function getStatusBadge(status) {
//     switch (status.toLowerCase()) {
//         case 'inprogress':
//             return <span className="badge bg-primary text-primary-subtle text-uppercase">InProgress</span>;
//           case 'pending':
//             return <span className="badge bg-secondary-subtle text-secondary text-uppercase">Pending</span>;
//           case 'delivered':
//             return <span className="badge bg-success-subtle text-success text-uppercase">Delivered</span>;
//           case 'returned':
//             return <span className="badge bg-warning-subtle text-warning text-uppercase">Returned</span>;
//           case 'cancelled':
//             return <span className="badge bg-danger-subtle text-danger text-uppercase">Cancelled</span>;
//           default:
//             return <span className="badge bg-secondary">Unknown</span>;
        
//     }
// }
export default function getStatusBadge(status) {
  switch (status.toLowerCase()) {
    case 'inprogress':
      return (
        <span className="inline-block px-2 py-1 text-xs font-medium text-blue-700 bg-blue-100 rounded-full uppercase">
          InProgress
        </span>
      );
    case 'pending':
      return (
        <span className="inline-block px-2 py-1 text-xs font-bold text-gray-700 bg-gray-100 rounded-full uppercase">
          Pending
        </span>
      );
    case 'delivered':
      return (
        <span className="inline-block px-2 py-1 text-xs font-bold text-green-700 bg-green-100 rounded-full uppercase">
          Delivered
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
