import { _, Grid } from "gridjs-react";
import { formatDate } from "../../utils/formatDateTime";
import { Tooltip } from "@mui/material";
import { MdOutlineDelete, MdOutlineRemoveRedEye } from "react-icons/md";
import { AiOutlineEdit } from "react-icons/ai";
import { useState } from "react";
import PromotionModal from "../Modal/PromotionModal";
import DeleteModal from "../Modal/DeleteModal";
import { deletePromotion } from "../../services/PromotionService";

function PromotionTableList({ promotionData, setPromotionData }) {
  const [selectedPromotionID, setSelectedPromotionID] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  function handleToggleModal() {
    setShowModal((showModal) => !showModal);
  }
  function handleToggleDeleteModal() {
    setShowDeleteModal((showDeleteModal) => !showDeleteModal);
  }

  // const selectedPromotion = promotionData.find(
  //   (promotion) => promotion.code_id === selectedPromotionID
  // )
  function handleClickEdit(id) {
    setSelectedPromotionID(id);

    handleToggleModal();
  }

  function handleClickAdd() {
    
    setSelectedPromotionID("");
    handleToggleModal();
  }

  function handleClickDelete(id) {
    setSelectedPromotionID(id);
    handleToggleDeleteModal();
  }

  async function handleDeletePromotion(id) {

    const response = await deletePromotion(id);
    console.log(response);
    const updatedPromotions = promotionData.filter(
      (promotion) => promotion.code_id !== id
    );
    setPromotionData(updatedPromotions);
    alert("Promotion deleted successfully");
  }
  console.log(selectedPromotionID);

  return (
    <>
      
      <div className="flex justify-end p-3 w-full" style={{ width: "100%" }}>
        <button
          className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded hover:bg-blue-700 transition"
          onClick={() => handleClickAdd()}
        >
         + Add Promotion
        </button>
      </div>
      <Grid
        data={promotionData.map((promotion) => [
          promotion.code_id,
          promotion.name_,
          promotion.promo_value,
          formatDate(promotion.start_date),
          formatDate(promotion.end_date),
          _(
            <div className="flex gap-2">
              {/* <Tooltip title="View" placement="top">
                <button
                  className="btn btn-light btn-sm"
                //   onClick={() => handleClickView(promotion.code_id)}
                >
                  <MdOutlineRemoveRedEye />{" "}
                </button>
              </Tooltip> */}
              <Tooltip title="Edit" placement="top">
                <button
                  className="px-2 py-2 text-sm bg-orange-500 text-white rounded hover:bg-orange-700 transition"
                  onClick={() => handleClickEdit(promotion.code_id)}
                >
                  <AiOutlineEdit />{" "}
                </button>
              </Tooltip>
              <Tooltip title="Delete" placement="top">
                <button
                  className="px-2 py-2 text-sm bg-red-500 text-white rounded hover:bg-red-700 transition"
                  onClick={() => handleClickDelete(promotion.code_id)}
                >
                  <MdOutlineDelete />{" "}
                </button>
              </Tooltip>
            </div>
          ),
        ])}
        columns={[
          "ID",
          "Code Name",
          "Discount (%)",
          "Start Date",
          "End Date",
          "Action",
        ]}
        search={true}
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
      <PromotionModal
        showModal={showModal}
        selectedPromotionID={selectedPromotionID}
        handleToggleModal={handleToggleModal}
        promotionData={promotionData}
        setPromotionData={setPromotionData}
      />
      <DeleteModal
        showModal={showDeleteModal}
        handleToggleModal={handleToggleDeleteModal}
        title="Delete Promotion"
        body="Are you sure you want to delete this promotion?"
        close="Cancel"
        confirm="Delete"
        handleConfirm={() => handleDeletePromotion(selectedPromotionID)}
      />
    </>

  );
}

export default PromotionTableList;
