import { useParams } from "react-router-dom";
import PageLayout from "../../Layouts/PageLayout";
import getStatusBadge from "../../utils/getStatusBadge";
import OrderTable from "../../components/Order/OrderTable";
import { RiMapPinLine } from "react-icons/ri";
import { useEffect } from "react";
function OrderDetail({ orderData, setOrderData }) {
  const { id } = useParams();
  const selectedOrderId = id;

  const selectedOrder = orderData.find(
    (order) => order.order_id.toString() === selectedOrderId
  );

  return (
    // <PageLayout pageTitle="Order Detail">
    //   <div className="row">
    //     <div className="col-lg-8">
    //       <div className="card mb-4">
    //         <div className="card-header">
    //           <div className="d-flex align-items-center">
    //             <h5 className="card-title flex-grow-1 mb-0">
    //               Order ID{selectedOrder.order_id}
    //             </h5>
    //             <div className="flex-shrink-0">
    //               {getStatusBadge(selectedOrder.status)}{" "}
    //             </div>
    //           </div>
    //         </div>

    //         <div className="card-body">
    //           <OrderTable selectedOrder={selectedOrder} />
    //         </div>
    //       </div>
    //       <div className="card">
    //         <div className="card-header">
    //           <h5 className="card-title mb-0 text-muted">
    //             <span>
    //               <RiMapPinLine />{" "}
    //             </span>{" "}
    //             Shipping Address
    //           </h5>
    //         </div>
    //         <div className="card-body">
    //           <p> Name{selectedOrder.customer_name}</p>
    //           <p> Address: {selectedOrder.shipping_address}</p>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="col-lg-4">
    //       <div className="card">
    //         <div className="card-header">
    //           <h5 className="card-title mb-0 text-muted">Customer Details</h5>
    //         </div>
    //         <div className="card-body">
    //           <div className="d-flex align-items-center">
    //             <img
    //               src={selectedOrder.customer_image}
    //               alt="customer"
    //               className="img-fluid"
    //             ></img>
    //             <div className="d-flex flex-column ms-3">
    //               <p>Name: {selectedOrder.customer_name}</p>
    //               <p>ID: {selectedOrder.customer_id}</p>
    //             </div>
    //           </div>

    //           <p>Email: {selectedOrder.customer_email}</p>
    //           <p>Phone: {selectedOrder.customer_phone}</p>
    //         </div>
    //       </div>
    //       <div className="card mt-4">
    //         <div className="card-header">
    //           <h5 className="card-title mb-0 text-muted">Payment Infomation</h5>
    //         </div>
    //         <div className="card-body">
    //           <p> Payment Method: {selectedOrder.payment_method}</p>
    //           <p>Payment Status: {selectedOrder.payment_status}</p>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </PageLayout>
    <PageLayout pageTitle="Order Detail">
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
    {/* Order Information */}
    <div className="lg:col-span-2">
      <div className="bg-white shadow rounded-lg mb-6">
        <div className=" bg-gray-200 px-6 py-4 border-b flex items-center justify-between">
          <h5 className="text-xl font-semibold">
            Order ID: {selectedOrder.order_id}
          </h5>
          <div>{getStatusBadge(selectedOrder.status)}</div>
        </div>

        <div className="p-6">
          <OrderTable selectedOrder={selectedOrder} />
        </div>
      </div>

      <div className="bg-white shadow rounded-lg">
        <div className="px-6 py-4 border-b bg-gray-200">
          <h5 className="flex items-center gap-2 text-lg font-semibold text-gray-600">
            <RiMapPinLine /> Shipping Address
          </h5>
        </div>
        <div className="p-6 space-y-3">
          <p><strong>Name:</strong> {selectedOrder.customer_name}</p>
          <p><strong>Address:</strong> {selectedOrder.shipping_address}</p>
        </div>
      </div>
    </div>

    {/* Customer Details */}
    <div>
      <div className="bg-white shadow rounded-lg mb-6">
        <div className="px-6 py-4 border-b border-l-gray-900  bg-gray-200">
          <h5 className="text-lg font-semibold text-gray-600">Customer Details</h5>
        </div>
        <div className="p-6 space-y-3">
          <div className="flex items-center space-x-4">
            <img
              src={selectedOrder.customer_image}
              alt="customer"
              className="w-16 h-16 rounded-full object-cover"
            />
            <div className="flex flex-col">
              <p><strong>Name:</strong> {selectedOrder.customer_name}</p>
              <p><strong>ID:</strong> {selectedOrder.customer_id}</p>
            </div>
          </div>

          <p><strong>Email:</strong> {selectedOrder.customer_email}</p>
          <p><strong>Phone:</strong> {selectedOrder.customer_phone}</p>
        </div>
      </div>

      <div className="bg-white shadow rounded-lg">
        <div className="px-6 py-4 border-b  bg-gray-200">
          <h5 className="text-lg font-semibold text-gray-600">Payment Information</h5>
        </div>
        <div className="p-6 space-y-3">
          <p><strong>Payment Method:</strong> {selectedOrder.payment_method}</p>
          <p><strong>Payment Status:</strong> {selectedOrder.payment_status}</p>
        </div>
      </div>
    </div>
  </div>
</PageLayout>

  );
}

export default OrderDetail;
