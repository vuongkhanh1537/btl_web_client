import { useEffect, useState } from "react";

import TextInput from "../FormInput/TextInput";
import InputGroup from "../FormInput/InputGroup";
import { addPromotion, updatePromotion } from "../../services/PromotionService";

const initialPromotionState = {
  name_: "",
  start_date: "",
  end_date: "",
  promo_value: 0.0,
  
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
      console.log(selectedPromotion);
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

  async function handleClickConfirm(e) {
    e.preventDefault();
    if (selectedPromotionID) {
      // Update the promotion
      const response = await updatePromotion(selectedPromotionID, promotion);
      console.log(response);
      const updatedPromotions = promotionData.map((item) =>
        item.code_id === selectedPromotionID ? promotion : item
      );
      setPromotionData(updatedPromotions);
      setShowToast(true); // Trigger the toast
      alert("Promotion updated successfully");
      handleToggleModal();
    } else {
      // Add new promotion
      
      const response = await addPromotion(promotion);
      
      const newPromotion = { ...promotion, code_id: Date.now() };
      setPromotionData([...promotionData, newPromotion]);
      setShowToast(true); // Trigger the toast
      // setPromotion(initialPromotionState);
      alert("Promotion added successfully");

    }
  }

  return (
    <>
      {/* <ToastContainer
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
      </ToastContainer> */}
      
      <form onSubmit={handleClickConfirm}>
  <div
    className={`fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center ${
      showModal ? "visible" : "invisible"
    }`}
  >
    <div className="bg-white rounded-lg shadow-lg w-full max-w-lg">
      <div className="px-4 py-4 border-b border-gray-200 flex justify-between items-center">
        <h5 className="text-lg font-semibold">{title}</h5>
        <button
          type="button"
          aria-label="Close"
          className="text-gray-500 hover:text-gray-700 focus:outline-none"
          onClick={handleToggleModal}
        >
          ✖
        </button>
      </div>
      <div className="p-4 mb-3">
        {/* Code Name Input */}
        <TextInput
          type="text"
          name="name_"
          value={promotion.name_}
          label="Code Name"
          placeholder="Code Name"
          handleChange={handleChange}
          required
        />
        {/* Date Inputs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <TextInput
            type="date"
            name="start_date"
            value={promotion.start_date}
            label="Start Date"
            placeholder="Start Date"
            handleChange={handleChange}
            required={true}
          />
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
        {/* Promo Value Input */}
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
      <div className="px-4 py-4 border-t border-gray-200 flex justify-end space-x-4">
        <button
          type="button"
          className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-300"
          onClick={handleToggleModal}
        >
          {close}
        </button>
        <button
          type="submit"
          className="px-5 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
        >
          {confirm}
        </button>
      </div>
    </div>
  </div>
</form>

    </>
  );
}

export default PromotionModal;
