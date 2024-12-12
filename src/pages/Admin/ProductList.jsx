import TableProductList from "../../components/Tables/TableProductList";
import TopBar from "../../components/TopBar/TopBar";
import PageLayout from "../../Layouts/PageLayout";

function ProductList({ productData, setProductData }) {
  return (
    <>
      {/* <TopBar />   */}
      <div className="product-list">
        <PageLayout pageTitle="Product List">
          <TableProductList
            productData={productData}
            setProductData={setProductData}
          />
        </PageLayout>
      </div>
    </>
  );
}

export default ProductList;
