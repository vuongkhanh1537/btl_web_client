import { Grid } from "gridjs-react"; // For React
import "gridjs/dist/theme/mermaid.css";
import { _ } from "gridjs-react";
import { AiOutlineEdit } from "react-icons/ai";
import { MdOutlineDelete, MdOutlineRemoveRedEye } from "react-icons/md";
import Modal from "../Modal/DeleteModal";
import { useState } from "react";
import initialProductData from "../../datas/ProductData";
import { NavLink, useNavigate } from "react-router-dom";
import { Tooltip } from "@mui/material";
import { deleteProduct } from "../../services/ProductService";

// const initialProductData = [
//   {
//     id: 1,
//     name: "Wireless Mouse",
//     stock: 45,
//     price: 29.99,
//     rating: 4.5,
//     category: "Electronics",
//   },
//   {
//     id: 2,
//     name: "Bluetooth Headphones",
//     stock: 23,
//     price: 59.99,
//     rating: 4.8,
//     category: "Electronics",
//   },
//   {
//     id: 3,
//     name: "Coffee Maker",
//     stock: 15,
//     price: 89.99,
//     rating: 4.3,
//     category: "Home Appliances",
//   },
//   {
//     id: 4,
//     name: "Electric Kettle",
//     stock: 32,
//     price: 19.99,
//     rating: 4.0,
//     category: "Home Appliances",
//   },
//   {
//     id: 5,
//     name: "Smartphone Stand",
//     stock: 60,
//     price: 14.99,
//     rating: 4.7,
//     category: "Accessories",
//   },
// ];

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
    navigate(`/products/detail/${id}`);
  }
  function handleClickEdit(id) {
    setSelectedProductId(id);
    navigate(`/products/edit/${id}`); // Redirect to edit page with product ID
  }
  function handleClickDelete(id) {
    setSelectedProductId(id);
    handleToggleModal();
  }

  async function handleDeleteProduct() {
    const response = await deleteProduct(selectedProductId);

    if (!response.ok) {
      // const errorData = await response.json();
      const errorData = await response.json(); // Ensure to extract JSON message
      throw new Error(
        `Failed to delete product: ${errorData.message || response.statusText}`
      );
    }

    const updatedProducts = productData.filter(
      (product) => product.product_id !== selectedProductId
    );
    setProductData(updatedProducts);
  }

  return (
    <>
      <Modal
        showModal={showModal}
        handleToggleModal={handleToggleModal}
        handleConfirm={handleDeleteProduct}
        title="Confirm Delete"
        body="Are you sure you want to delete this product?"
        close="Cancel"
        confirm="Confirm"
      />
      <div className="table-body">
        <Grid
          data={productData.map((product) => [
            product.product_id,
            product.name_,
            product.quantity,
            `$ ${Number(product.price).toFixed(2)}`,
            `${Number(product.rating ? product.rating : 0)} ⭐`,
            product.category,
            _(
              <div className="btn-actions">
                <Tooltip title="View" placement="top">
                  <button
                    className="btn btn-light btn-sm"
                    onClick={() => handleClickView(product.product_id)}
                  >
                    <MdOutlineRemoveRedEye />{" "}
                  </button>
                </Tooltip>
                <Tooltip title="Edit" placement="top">
                  <button
                    className="btn btn-primary btn-sm"
                    onClick={() => handleClickEdit(product.product_id)}
                  >
                    <AiOutlineEdit />{" "}
                  </button>
                </Tooltip>
                <Tooltip title="Delete" placement="top">
                  <button
                    className="btn btn-danger btn-sm"
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
            "Product Name",
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
