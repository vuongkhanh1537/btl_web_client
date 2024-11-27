import { useEffect, useState } from "react";
import { Toast, ToastContainer } from "react-bootstrap";
import TextInput from "../FormInput/TextInput";
import InputGroup from "../FormInput/InputGroup";

const initialPromotionState = {
  code_id: "",
  name_: "",
  start_date: "",
  end_date: "",
  min_order: 0.0,
  maximum_promo: 0.0,
  promo_value: 0.0,
  init_quantity: 0,
};
function PromotionModal({
  selectedPromotionID,
  showModal,
  handleToggleModal,
  promotionData,
  setPromotionData,
}) {
  let title = selectedPromotionID ? "Edit Promotion" : "Add Promotion";
  let close = "Close";
  let confirm = selectedPromotionID ? "Update" : "Add";

  const [showToast, setShowToast] = useState(false); // Manage toast state locally
  const [promotion, setPromotion] = useState(initialPromotionState);

  useEffect(() => {
    if (selectedPromotionID) {
      const selectedPromotion = promotionData.find(
        (promotion) => promotion.code_id === selectedPromotionID
      );
      setPromotion(selectedPromotion);
    } else {
      setPromotion(initialPromotionState);
    }
  }, [selectedPromotionID]);

  function handleChange(e) {
    const { name, value } = e.target;

    // selectedOrder = {...selectedOrder, [name]: value};
    setPromotion((prevPromotion) => ({
      ...prevPromotion,
      [name]: value,
    }));
  }

  function handleClickConfirm(e) {
    e.preventDefault();
    if (selectedPromotionID) {
      // Update the promotion

      const updatedPromotions = promotionData.map((item) =>
        item.code_id === selectedPromotionID ? promotion : item
      );
      setPromotionData(updatedPromotions);
      setShowToast(true); // Trigger the toast
      handleToggleModal();
    } else {
      // Add new promotion

      const newPromotion = { ...promotion, code_id: Date.now() };
      setPromotionData([...promotionData, newPromotion]);
      setShowToast(true); // Trigger the toast
      setPromotion(initialPromotionState);
    }
  }

  return (
    <>
      <ToastContainer
        position="top-end"
        style={{ position: "fixed", marginTop: "30px", marginRight: "30px" }}
      >
        <Toast
          className="bg-success text-white"
          show={showToast}
          onClose={() => setShowToast(false)}
          delay={3000}
          autohide
        >
          <Toast.Header>
            <strong className="me-auto">{title}</strong>
            <small>just now</small>
          </Toast.Header>
          <Toast.Body className="text-white">{title} successfully!</Toast.Body>
        </Toast>
      </ToastContainer>
      <form onSubmit={ handleClickConfirm}>
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
              
                <TextInput
                  type="text"
                  name="name_"
                  value={promotion.name_}
                  label="Code Name"
                  placeholder="Code Name"
                  handleChange={handleChange}
                  required
                />

                <div className="row">
                  <div className="col-sm-6">
                    
                    <TextInput
                      type="date"
                      name="start_date"
                      value={promotion.start_date}
                      label="Start Date"
                      placeholder="Start Date"
                      handleChange={handleChange}
                      required={true}
                    />
                  </div>
                  <div className="col-sm-6">
                    
                    <TextInput
                      type="date"
                      name="end_date"
                      value={promotion.end_date}
                      label="End Date"
                      placeholder="End Date"
                      handleChange={handleChange}
                      required={true}
                    />
                  </div>
                </div>

                {/* <TextInput type='number' name='promo_value' value={promotion.promo_value} label='Promo Value' placeholder='Promo Value' handleChange={handleChange} required/> */}
                <InputGroup
                  label="Value"
                  prependText="%"
                  type="number"
                  name="promo_value"
                  value={promotion.promo_value}
                  placeholder="Value"
                  handleChange={handleChange}
                  required={true}
                />
              
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
              <button type="submit" className="btn btn-primary">
                {confirm}
              </button>
            </div>
          </div>
        </div>
      </div>
      </form>
    </>
  );
}

export default PromotionModal;
