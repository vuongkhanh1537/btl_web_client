import { useEffect, useState } from "react";
import SelectInput from "../FormInput/SelectInput";
import { paymentOptions, statusOptions } from "../../utils/selectOptions";
import { Toast, ToastContainer } from "react-bootstrap";


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
     <ToastContainer position="top-end" style={{position: 'fixed', marginTop: '30px', marginRight: '30px'}}>
        <Toast className="bg-success text-white" show={showToast} onClose={() => setShowToast(false)} delay={3000} autohide>
          <Toast.Header>
            <strong className="me-auto">Update</strong>
            <small>just now</small>
          </Toast.Header>
          <Toast.Body  className="text-white">Order updated successfully!</Toast.Body>
        </Toast>
      </ToastContainer>
      <div className={`modal ${showModal ? "show" : ""}`} tabIndex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{title}</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={handleToggleModal}
              ></button>
            </div>
            <div className="modal-body">
              {/* <p>{body}</p> */}
              {/* <SelectInput label="Status" options={} name="status" value={body.status} handleChange={handleToggleModal} required /> */}
              
              <SelectInput label="Order Status" options={statusOptions} name="status" value={orderStatus} handleChange={handleChange}  />
              <SelectInput label="Payment Status" options={paymentOptions} name="payment_status" value={paymentStatus} handleChange={handleChange}  />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                onClick={handleToggleModal}
              >
                {close}
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={()=> handleClickConfirm()}
              >
                {confirm}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditModal;
