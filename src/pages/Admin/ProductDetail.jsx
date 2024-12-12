import { useNavigate, useParams } from "react-router-dom";
import productImage from "../../assets/img/giayAdidas.avif";

import { Rating, Tooltip } from "@mui/material";
import ReviewList from "../../components/Product/ReviewList.jsx";
import PageLayout from "../../Layouts/PageLayout.jsx";
import ProductCarousel from "../../components/Product/ProductCarousel .jsx";
import { FaEdit } from "react-icons/fa";
import { RiPencilFill } from "react-icons/ri";
import { useEffect, useState } from "react";
import { getProductById } from "../../services/ProductService.js";

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



function ProductDetail() {
  const { id } = useParams();
  // const selectedProductId = id;

  // const selectedProduct = productData.find(
  //   (product) => product.product_id === selectedProductId
  // );

  const [selectedProduct, setSelectedProduct] = useState({});

  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setIsLoading(true);
         const data = await getProductById(id);
         setSelectedProduct(data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }finally{
        setIsLoading(false);
      }
    }
    fetchProduct();
  }, [])
  
  const navigate = useNavigate();
  const specifications = [
    { label: "Size", value: selectedProduct.size },
    { label: "Color", value: selectedProduct.color },
    { label: "Category", value: selectedProduct.category },
    { label: "Brand", value: selectedProduct.brand },
  ];
  let productImages = [
  productImage,
  productImage,
  productImage,
  // Add more product images
];
  
  if(selectedProduct.image){
    productImages = selectedProduct.image.split(';');
  }
  // const productImages = selectedProduct.image.split(';');

  console.log(selectedProduct);
  function handleClickEdit(){
    navigate(`../edit/${id}`);
  }
  
  if(isLoading){
    return <div className="flex justify-center items-center h-screen">
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-"></div>
    </div>
  }
  return (

    <PageLayout pageTitle="Product Details">
  <div className="bg-white shadow rounded-lg p-6">
    <div className="grid grid-cols-1 lg:grid-cols-2 mb-4 mt-4">
      {/* Image Slider Section */}
      <div className="col-span-1">
        {/* <img src={productImage} alt="Product" className="w-full h-auto rounded" /> */}
        <ProductCarousel productImages={productImages} />
      </div>

      {/* Product Details Section */}
      <div className="col-span-1">
        <div className="flex flex-col gap-3">
          <div className="flex justify-between">
          <h4 className="text-2xl font-bold text-gray-800">
            {selectedProduct.name}
          </h4>
          <Tooltip title="Edit" placement="top">
          <button onClick={handleClickEdit} className="bg-gray-300 hover:bg-gray-400 p-3 rounded">
            <RiPencilFill />
          </button>
          </Tooltip>
          </div>
          <div className="flex items-center space-x-4 mt-2">
            <Rating
              name="read-only"
              precision={0.5}
              value={selectedProduct.rating}
              readOnly
            />
            <span className="text-gray-600">{selectedProduct.rating}</span>
            <span className="text-gray-500">(55 reviews)</span>
          </div>

          <div className="">
            <div className="my-4">
              <h5 className="text-gray-700 text-2xl font-semibold">
                Price:{" "}
                <span className=" font-bold">
                  {selectedProduct.price} $
                </span>
              </h5>
            </div>
            <div>
              <h5 className="text-gray-700 text-lg font-semibold">
                Available Stocks:{" "}
                <span className="font-bold">
                  {selectedProduct.quantity}
                </span>
              </h5>
            </div>
          </div>

          <div className="mt-4">
            <h5 className="text-lg font-semibold text-gray-800">Description:</h5>
            <p className="text-gray-600">{selectedProduct.description}</p>
          </div>
        </div>
      </div>
    </div>

    {/* Product Specification Section */}
    <div className="mt-8">
      <h5 className="mb-4 text-lg font-semibold text-gray-800">
        Product Specification:
      </h5>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <tbody>
            {specifications.map((spec) => (
              <tr key={spec.label} className="border-b">
                <th
                  className="px-4 py-2 text-gray-600 text-left font-medium bg-gray-100 w-1/3"
                >
                  {spec.label}
                </th>
                <td className="px-4 py-2 text-gray-700">{spec.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>

    {/* Reviews Section */}
    <div className="mt-8">
      <h5 className="mb-4 text-lg font-semibold text-gray-800">Reviews:</h5>
      <ReviewList reviews={reviews} />
    </div>
  </div>
</PageLayout>

  
  );
}

export default ProductDetail;
