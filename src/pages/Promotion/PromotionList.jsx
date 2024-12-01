import PromotionTableList from "../../components/Promotion/PromotionTableList";
import PageLayout from "../../Layouts/PageLayout";

function PromotionList({ promotionData, setPromotionData }) {
  return (
    <PageLayout pageTitle="Promotion List">
      <div className="table-list">
        <div className="table-header">
          {/* <div className="d-flex flex-row-reverse p-3" style={{width:"100%"}}>
            <button className="btn btn-sm btn-primary me-5">Add Promotion</button>
            </div> */}
        </div>
        <div className="table-body">
          <PromotionTableList
            promotionData={promotionData}
            setPromotionData={setPromotionData}
          />
        </div>
      </div>
    </PageLayout>
  );
}

export default PromotionList;
