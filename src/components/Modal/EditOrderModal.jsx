import { useEffect, useState } from "react";
import SelectInput from "../FormInput/SelectInput";
import { paymentOptions, paymentStatusOptions, statusOptions } from "../../utils/selectOptions";



function EditModal({
  selectedOrder,
  showModal,
  handleToggleModal,
  handleEditConfirm,
  title,
  body,
  close,
  confirm,
}) {
  
  const [orderStatus, setOrderStatus] = useState('');
  const [paymentStatus, setPaymentStatus] = useState('');

  const [showToast, setShowToast] = useState(false); // Manage toast state locally

  useEffect(() =>{
    if(selectedOrder) {
      setOrderStatus(selectedOrder.status);
      setPaymentStatus(selectedOrder.payment_status);
    }
  },[selectedOrder]);

  
  function handleChange(e){
    const {name, value} = e.target;
    if(name === 'status'){
      setOrderStatus(value);
    }
    if(name === 'payment_status'){
      setPaymentStatus(value);
    }

    // selectedOrder = {...selectedOrder, [name]: value};
  }
  
  
  function handleClickConfirm() {
    const updatedOrder = {...selectedOrder, status: orderStatus, payment_status: paymentStatus};
    handleEditConfirm(updatedOrder);
    setShowToast(true); // Trigger the toast
    handleToggleModal();
  }
  

  

  return (
    <>
     {/* <ToastContainer position="top-end" style={{position: 'fixed', marginTop: '30px', marginRight: '30px'}}>
        <Toast className="bg-success text-white" show={showToast} onClose={() => setShowToast(false)} delay={3000} autohide>
          <Toast.Header>
            <strong className="me-auto">Update</strong>
            <small>just now</small>
          </Toast.Header>
          <Toast.Body  className="text-white">Order updated successfully!</Toast.Body>
        </Toast>
      </ToastContainer> */}
    <div
  className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 transition-opacity ${
    showModal ? "visible" : "invisible"
  }`}
  tabIndex="-1"
>
  <div className="bg-white rounded-lg shadow-lg w-full max-w-lg">
    <div className="border-b px-5 py-3 flex justify-between items-center mb-3">
      <h5 className="text-xl font-medium">{title}</h5>
      <button
        type="button"
        className="text-gray-500 hover:text-gray-800 transition text-3xl"
        aria-label="Close"
        onClick={handleToggleModal}
      >
        &times;
      </button>
    </div>
    <div className="px-5 py-4 space-y-4 mb-5">
      {/* Order Status Select */}
      <SelectInput
        label="Order Status"
        options={statusOptions}
        name="status"
        value={orderStatus}
        handleChange={handleChange}
      />
      {/* Payment Status Select */}
      <SelectInput
        label="Payment Status"
        options={paymentStatusOptions}
        name="payment_status"
        value={paymentStatus}
        handleChange={handleChange}
      />
    </div>
    <div className="border-t px-5 py-3 flex justify-end space-x-3 mb-3">
      <button
        type="button"
        className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition"
        onClick={handleToggleModal}
      >
        {close}
      </button>
      <button
        type="button"
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        onClick={handleClickConfirm}
      >
        {confirm}
      </button>
    </div>
  </div>
</div>

    </>
  );
}

export default EditModal;
