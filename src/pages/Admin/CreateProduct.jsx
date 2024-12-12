import FormInfo from "./FormInfo";
import PageLayout from "../../Layouts/PageLayout";

function CreateProduct({ productData, setProductData }) {
  return (
    // <div className="page-content">
    //   <div className="container-fluid">
    //     <div className="flex justify-between mb-10">
    //       <div className="page-title">
    //         <h4 className="mb-0">Create Product</h4>
    //       </div>
    //     </div>
    //   </div>
    <PageLayout pageTitle="Create Product">
      <FormInfo productData={productData} setProductData={setProductData} />
    </PageLayout>
  );
}

export default CreateProduct;
