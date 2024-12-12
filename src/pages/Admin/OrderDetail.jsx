import { useParams } from "react-router-dom";
import PageLayout from "../../Layouts/PageLayout";
import {
  getStatusBadge,
  getPaymentStatusBadge,
} from "../../utils/getStatusBadge";
import OrderTable from "../../components/Tables/OrderTable";
import { RiMapPinLine } from "react-icons/ri";
import { useEffect, useState } from "react";
import { getOrderById } from "../../services/OrderService";
function OrderDetail() {
  const { id } = useParams();
  console.log("id: ", id);

  // const selectedOrder = orderData.find(
  //   (order) => order.order_id.toString() === selectedOrderId
  // );
  const [selectedOrder, setSelectedOrder] = useState(null);

  useEffect(() => {
    const getSelectedOrder = async () => {
      try {
        const data = await getOrderById(id);
        console.log("Fetched order data: ", data);
        setSelectedOrder(data);
      } catch (error) {
        console.error("Error fetching order data: ", error);
      }
    };
    getSelectedOrder();
  }, [id]);

  if (!selectedOrder) {
    return (
      <PageLayout pageTitle="Order Detail">
        <div className="text-center py-10">
          <p className="text-gray-600">Loading order details...</p>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout pageTitle="Order Detail">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Order Information */}
        <div className="lg:col-span-2">
          <div className="bg-white shadow rounded-lg mb-6">
            <div className=" bg-gray-200 px-6 py-4 border-b flex items-center justify-between">
              <h5 className="text-xl font-semibold">
                Order ID: {selectedOrder?.order_id}
              </h5>
              <div>{getStatusBadge(selectedOrder.status_)}</div>
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
              <p>
                <strong>Name:</strong> {selectedOrder.user.name}
              </p>
              <p>
                <strong>Address:</strong> {selectedOrder.address_}
              </p>
            </div>
          </div>
        </div>

        {/* Customer Details */}
        <div>
          <div className="bg-white shadow rounded-lg mb-6">
            <div className="px-6 py-4 border-b border-l-gray-900  bg-gray-200">
              <h5 className="text-lg font-semibold text-gray-600">
                Customer Details
              </h5>
            </div>
            <div className="p-6 space-y-3">
              <div className="flex items-center space-x-4">
                {/* <img
              src={selectedOrder.customer_image}
              alt="customer"
              className="w-16 h-16 rounded-full object-cover"
            /> */}
                <div className="flex flex-col gap-3">
                  <p>
                    <strong>Name:</strong> {selectedOrder.user.name}
                  </p>
                  <p>
                    <strong>ID:</strong> {selectedOrder.user.id}
                  </p>
                </div>
              </div>

              <p>
                <strong>Email:</strong> {selectedOrder.user.email}
              </p>
              {/* <p><strong>Phone:</strong> {selectedOrder.customer_phone}</p> */}
            </div>
          </div>

          <div className="bg-white shadow rounded-lg">
            <div className="px-6 py-4 border-b  bg-gray-200">
              <h5 className="text-lg font-semibold text-gray-600">
                Payment Information
              </h5>
            </div>
            <div className="p-6 space-y-3">
              <p>
                <strong>Payment Method:</strong> {selectedOrder.payment_method}
              </p>
              <p>
                <strong>Payment Status:</strong>{" "}
                {getPaymentStatusBadge(selectedOrder.payment_status)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

export default OrderDetail;
