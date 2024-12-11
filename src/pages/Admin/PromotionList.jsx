import { useEffect, useState } from "react";
import PromotionTableList from "../../components/Tables/PromotionTableList";
import PageLayout from "../../Layouts/PageLayout";
import { fetchPromotionData } from "../../services/PromotionService";
import { samplePromotionData } from "../../datas/promotionData";

function PromotionList() {
  const [promotionData, setPromotionData] = useState(samplePromotionData);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    async function fetchPromotions(){
      try {
        setIsLoading(true);
        const data = await fetchPromotionData();
        setPromotionData(data);
      } catch (error) {
        console.log(error);
  
      }finally {
        setIsLoading(false);
      }
    }

    fetchPromotions();
  },[])

  if(isLoading){
    return <div className="flex justify-center items-center h-screen">
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-"></div>
    </div>
  }

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
