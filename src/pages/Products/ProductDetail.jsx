import { useParams } from "react-router-dom";
import productImage from "../../assets/img/giayAdidas.avif";
import ImageSlider from "../../components/ImageSlider.jsx";
import { Rating } from "@mui/material";
import ReviewList from "../../components/ReviewList.jsx";
import PageLayout from "../../Layouts/PageLayout.jsx";

const reviews = [
  {
    id: 1,
    name: "John Doe",
    rating: 4.5,
    comment: "Great product! Really loved the quality and fit.",
    date: "2024-10-01T10:00:00Z",
  },
  {
    id: 2,
    name: "Jane Smith",
    rating: 5,
    comment: "Absolutely fantastic! Exceeded my expectations.",
    date: "2024-10-03T14:30:00Z",
  },
  {
    id: 3,
    name: "Alice Johnson",
    rating: 3,
    comment: "It's good, but the size runs a bit small for me.",
    date: "2024-10-04T09:15:00Z",
  },
];

function ProductDetail({ productData }) {
  const { id } = useParams();
  const selectedProductId = id;

  const selectedProduct = productData.find(
    (product) => product.product_id === selectedProductId
  );

  const specifications = [
    { label: "Size", value: selectedProduct.size_ },
    { label: "Color", value: selectedProduct.color },
    { label: "Category", value: selectedProduct.category },
    { label: "Brand", value: selectedProduct.brand },
  ];
  return (
    <PageLayout pageTitle="Product Details">
      <div className="card">
        <div className="card-body">
          <div className="row">
            <div className="col-xl-4 col-md-8 mx-auto">
              {/* <img src={productImage} alt="Product" className="img-fluid"></img> */}
              <ImageSlider />
            </div>

            <div className="col-xl-8">
              <div className="card-body">
                <h4>{selectedProduct.name} </h4>
                <div className="d-flex flex-wrap gap-2 align-items-center mt-3">
                  <Rating
                    name="read-only"
                    precision={0.5}
                    value={selectedProduct.rating}
                    readOnly
                  />
                  {selectedProduct.rating}{" "}
                  <div className="text-muted">(55 reviews)</div>
                </div>

                <div className="row mt-4">
                  <div className="col-lg-6">
                    <h5 className="text-muted">
                      Price: {selectedProduct.price} VND
                    </h5>
                  </div>
                  <div className="col-lg-6">
                    <h5 className="text-muted fs-14">
                      Avaible Stocks: {selectedProduct.quantity}
                    </h5>
                  </div>
                </div>
                <div className="mt-4 text-muted">
                  <h5 className="fs-16">Description:</h5>
                  <p>{selectedProduct.description} </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <h5 className="mb-3 fs-14 text-muted">Product Specification: </h5>
            <div className="table-responsive">
              <table className="table border">
                <tbody>
                  {specifications.map((spec) => (
                    <tr key={spec.label}>
                      <th scope="row" style={{ width: "300px" }}>
                        {spec.label}
                      </th>
                      <td>{spec.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-4">
            <h5 className="mb-3 fs-14 text-muted">Reviews: </h5>
            <ReviewList reviews={reviews} />
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

export default ProductDetail;
