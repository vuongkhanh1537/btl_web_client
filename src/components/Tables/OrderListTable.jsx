import { Grid } from "gridjs-react"; // For React
import "gridjs/dist/theme/mermaid.css";
import { _ } from "gridjs-react";
import { AiOutlineEdit } from "react-icons/ai";
import { MdOutlineRemoveRedEye } from "react-icons/md";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Tooltip } from "@mui/material";
import {getStatusBadge }from "../../utils/getStatusBadge";
import EditModal from "../Modal/EditOrderModal";

import { formatDateTime } from "../../utils/formatDateTime";
import { formatCurrency } from "../../utils/formatCurrency";
import { updateOrder } from "../../services/OrderService";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.min.css';
// import 'react-toastify/dist/ReactToastify.css';
function OrderListTable({ orderData, filteredOrderData, setOrderData }) {
  const [selectedOrderId, setSelectedOrderId] = useState("");

  const [showEditModal, setShowEditModal] = useState(false);
  
  const navigate = useNavigate();

  function handleToggleEditModal() {
    setShowEditModal((showEditModal) => !showEditModal);
  }

  function handleClickView(id) {
    setSelectedOrderId(id);

    navigate(`../detail/${id}`);
  }

  const selectedOrder = orderData.find(
    (order) => order.order_id === selectedOrderId
  );
  function handleClickEdit(id) {
    setSelectedOrderId(id);
    // navigate(`/orders/edit/${id}`); // Redirect to edit page with product ID

    //

    handleToggleEditModal();
  }


  async function handleSaveEdit(updatedOrder) {
    const response = await updateOrder(updatedOrder.order_id, updatedOrder.status_, updatedOrder.payment_status);
    console.log(response);
    
    const updatedOrders = orderData.map((order) =>
      order.order_id === updatedOrder.order_id ? updatedOrder : order
    );
    setOrderData(updatedOrders);
    // toast.success("Order updated successfully!");
    alert("Order updated successfully!");
    
  }
  // console.log(orderData);
  
  return (
    <>
      {/* <Modal
        showModal={showModal}
        handleToggleModal={handleToggleModal}
        handleConfirm={handleDeleteOrder}
        title="Confirm Delete"
        body="Are you sure you want to delete this order?"
        close="Cancel"
        confirm="Confirm"
      /> */}
      
      {/* <ToastContainer position="top-right" autoClose={3000} /> */}
      <EditModal
        selectedOrder={selectedOrder}
        showModal={showEditModal}
        handleToggleModal={handleToggleEditModal}
        title={"Edit Order"}
        close="Cancel"
        handleEditConfirm={handleSaveEdit}
        confirm="Save Changes"
      />
      <div className="table-body">
        <Grid
          data={filteredOrderData.map((order) => [
            order.order_id,
            order.user_id,
            formatDateTime(order.order_time),
            // `$ ${Number(order.total_payment).toFixed(2)}`,
            formatCurrency(Number( order.total_payment)/1000),
            order.payment_method,
            
            _(getStatusBadge(order.status_)),
            _(
              <div className="flex gap-3">
                <Tooltip title="View" placement="top">
                  <button
                    className="px-2 py-2 text-sm bg-gray-200 text-gray-700 rounded hover:bg-gray-200 transition"
                    onClick={() => handleClickView(order.order_id)}
                  >
                    <MdOutlineRemoveRedEye />{" "}
                  </button>
                </Tooltip>
                <Tooltip title="Edit" placement="top">
                  <button
                    className="px-2 py-2 text-sm bg-orange-500 text-white rounded hover:bg-orange-700 transition"
                    onClick={() => handleClickEdit(order.order_id)}
                  >
                    <AiOutlineEdit />{" "}
                  </button>
                </Tooltip>
                {/* <Tooltip title='Delete' placement="top">
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleClickDelete(order.order_id)}
                >
                  <MdOutlineDelete />{" "}
                </button>
                </Tooltip> */}
              </div>
            ),
          ])}
          columns={[
            "ID",
            "Customer ID",
            "Order Time",
            "Total",
            "Payment Method",
            "Status",
            "Actions",
          ]}
          search={{
            enabled: false,
            placeholder: "Search for orders...", // Modify this text to your desired placeholder
          }}
          sort={true}
          fixedHeader={true}
          pagination={{
            enabled: true,
            limit: 5,
          }}
          style={{
            border: "none",
          }}
        />
      </div>
    </>
  );
}

export default OrderListTable;
