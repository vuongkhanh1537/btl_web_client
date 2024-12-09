import { Grid } from "gridjs-react"; // For React
import "gridjs/dist/theme/mermaid.css";
import { _ } from "gridjs-react";
import { AiOutlineEdit } from "react-icons/ai";
import { MdOutlineDelete, MdOutlineRemoveRedEye } from "react-icons/md";
import Modal from "../Modal/DeleteModal";
import { useState } from "react";

import { NavLink, useNavigate } from "react-router-dom";
import { Tooltip } from "@mui/material";
import { deleteProduct } from "../../services/ProductService";


function getFirstImage(imagesURL) {
  if(imagesURL){
    const images = imagesURL.split(";");
    return images[0];
  }
  return null;
}
function TableProductData({ searchTerm, productData, setProductData }) {
  // const filteredData = productData.filter((product) =>
  //   product.name.toLowerCase().includes(searchTerm.toLowerCase())
  // );


  
  const [showModal, setShowModal] = useState(false);

  const [selectedProductId, setSelectedProductId] = useState("");

  const navigate = useNavigate();

  function handleToggleModal() {
    setShowModal((showModal) => setShowModal(!showModal));
  }

  function handleClickView(id) {
    setSelectedProductId(id);
    navigate(`../detail/${id}`);
  }
  function handleClickEdit(id) {
    setSelectedProductId(id);
    navigate(`../edit/${id}`); // Redirect to edit page with product ID
  }
  function handleClickDelete(id) {
    setSelectedProductId(id);
    handleToggleModal();
  }

  async function handleDeleteProduct() {
    const response = await deleteProduct(selectedProductId);


    alert("Product delete successfully");
    const updatedProducts = productData.filter(
      (product) => product.product_id !== selectedProductId
    );
    setProductData(updatedProducts);
  }

  return (
    <>
  {/* Modal Component */}
  <Modal
    showModal={showModal}
    handleToggleModal={handleToggleModal}
    handleConfirm={handleDeleteProduct}
    title="Confirm Delete"
    body="Are you sure you want to delete this product?"
    close="Cancel"
    confirm="Confirm"
  />

  {/* Table Body */}
  <div className="table-body">
    <Grid
      data={productData.map((product) => [
        product.product_id,
        _(
          <div className="-ml-6 flex gap-2" >
            <img
              src={getFirstImage(product.image) }
              alt="Product"
              className=" rounded-lg w-20 h-20"
            ></img>
            <div className="flex items-center">{product.name} </div>
            
          </div>
        ),
        
        product.quantity,
        `$ ${Number(product.price).toFixed(2)}`,
        `${Number(product.rating ? product.rating : 0)} ⭐`,
        product.category,
        _(
          <div className="flex space-x-2">
            <Tooltip title="View" placement="top">
              <button
                className="px-2 py-2 text-sm bg-gray-200 text-gray-700 rounded hover:bg-gray-200 transition"
                onClick={() => handleClickView(product.product_id)}
              >
                <MdOutlineRemoveRedEye />{" "}
              </button>
            </Tooltip>
            <Tooltip title="Edit" placement="top">
              <button
                className="px-2 py-2 text-sm bg-orange-500 text-white rounded hover:bg-orange-700 transition"
                onClick={() => handleClickEdit(product.product_id)}
              >
                <AiOutlineEdit />{" "}
              </button>
            </Tooltip>
            <Tooltip title="Delete" placement="top">
              <button
                className="px-2 py-2 text-sm bg-red-500 text-white rounded hover:bg-red-700 transition"
                onClick={() => handleClickDelete(product.product_id)}
              >
                <MdOutlineDelete />{" "}
              </button>
            </Tooltip>
          </div>
        ),
      ])}
      columns={[
        "ID",
        // "Product Name",
        {
          name: "Product Name",
          width: "25%",
        },
        "Stock",
        "Price",
        "Rating",
        "Category",
        "Actions",
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
  </div>
</>

  );
}

export default TableProductData;
