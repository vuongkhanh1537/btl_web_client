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
    <PageLayout pageTitle="Order Detail">
      <div className="row">
        <div className="col-lg-8">
          <div className="card mb-4">
            <div className="card-header">
              <div className="d-flex align-items-center">
                <h5 className="card-title flex-grow-1 mb-0">
                  Order ID{selectedOrder.order_id}
                </h5>
                <div className="flex-shrink-0">
                  {getStatusBadge(selectedOrder.status)}{" "}
                </div>
              </div>
            </div>

            <div className="card-body">
              <OrderTable selectedOrder={selectedOrder} />
            </div>
          </div>
          <div className="card">
            <div className="card-header">
              <h5 className="card-title mb-0 text-muted">
                <span>
                  <RiMapPinLine />{" "}
                </span>{" "}
                Shipping Address
              </h5>
            </div>
            <div className="card-body">
              <p> Name{selectedOrder.customer_name}</p>
              <p> Address: {selectedOrder.shipping_address}</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="card">
            <div className="card-header">
              <h5 className="card-title mb-0 text-muted">Customer Details</h5>
            </div>
            <div className="card-body">
              <div className="d-flex align-items-center">
                <img
                  src={selectedOrder.customer_image}
                  alt="customer"
                  className="img-fluid"
                ></img>
                <div className="d-flex flex-column ms-3">
                  <p>Name: {selectedOrder.customer_name}</p>
                  <p>ID: {selectedOrder.customer_id}</p>
                </div>
              </div>

              <p>Email: {selectedOrder.customer_email}</p>
              <p>Phone: {selectedOrder.customer_phone}</p>
            </div>
          </div>
          <div className="card mt-4">
            <div className="card-header">
              <h5 className="card-title mb-0 text-muted">Payment Infomation</h5>
            </div>
            <div className="card-body">
              <p> Payment Method: {selectedOrder.payment_method}</p>
              <p>Payment Status: {selectedOrder.payment_status}</p>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

export default OrderDetail;
