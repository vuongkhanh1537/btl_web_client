import { useParams } from "react-router-dom";
import FormInfo from "../../Forms/FormInfo";
import PageLayout from "../../Layouts/PageLayout";
import { useEffect, useState } from "react";
import { getProductById } from "../../services/ProductService";

function EditProduct({ productData, setProductData }) {
  const { id } = useParams();

  const [selectedProduct, setSelectedProduct] = useState({});
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await getProductById(id);

        setSelectedProduct({
          ...data,
          product_id: data.id,
          image_path: data.image,
        });
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };
    fetchProduct();
  }, []);
  // const selectedProductId = id;
  // console.log(id);
  // const selectedProduct = productData.find(
  //   (product) => product.product_id === selectedProductId
  // );

  return (
    // <div className="page-content">
    //   <div className="container-fluid">
    //     <div className="flex justify-between mb-10">
    //       <div className="page-title">
    //         <h4 className="mb-0">Edit Product</h4>
    //       </div>
    //     </div>
    //   </div>
    <PageLayout pageTitle="Edit Product">
      {selectedProduct ? (
        <FormInfo
          productData={productData}
          setProductData={setProductData}
          selectedProduct={selectedProduct}
        />
      ) : (
        <div className="flex justify-center items-center text-xl">
          Product not found
        </div>
      )}
    </PageLayout>
  );
}

export default EditProduct;
