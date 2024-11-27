import { _, Grid } from "gridjs-react";
import { formatDate } from "../../utils/formatDateTime";
import { Tooltip } from "@mui/material";
import { MdOutlineDelete, MdOutlineRemoveRedEye } from "react-icons/md";
import { AiOutlineEdit } from "react-icons/ai";
import { useState } from "react";
import PromotionModal from "../Modal/PromotionModal";
import DeleteModal from "../Modal/DeleteModal";

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

  function handleDeletePromotion(id) {

    
    const updatedPromotions = promotionData.filter(
      (promotion) => promotion.code_id !== id
    );
    setPromotionData(updatedPromotions);
  }
  console.log(selectedPromotionID);

  return (
    <>
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
      <div className="d-flex flex-row-reverse p-3" style={{ width: "100%" }}>
        <button
          className="btn btn-sm btn-primary me-3"
          onClick={() => handleClickAdd()}
        >
          Add Promotion
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
            <div className="btn-actions">
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
                  className="btn btn-primary btn-sm"
                  onClick={() => handleClickEdit(promotion.code_id)}
                >
                  <AiOutlineEdit />{" "}
                </button>
              </Tooltip>
              <Tooltip title="Delete" placement="top">
                <button
                  className="btn btn-danger btn-sm"
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
    </>
  );
}

export default PromotionTableList;
