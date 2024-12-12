import { Link } from "react-router-dom";
import TableProductData from "./TableProductData";
import { useState } from "react";
import RangeSlider from "../FormInput/RangeSlider";



function TableProductList({productData, setProductData} ) {
    const [searchTerm, setSearchTerm] = useState("");

  return (
    // <div className="table-list">
    //   <div className="table-header">
    //     {/* <div>
    //       <input
    //         className="form-control"
    //         type="text"
    //         placeholder="Search products"
    //         value={searchTerm}
    //         onChange={(e) => setSearchTerm(e.target.value)}
    //       />
    //     </div> */}
    //     {/* <RangeSlider /> */}

    //     <div className="d-flex justify-content-end p-3" style={{width:"100%"}}>
    //     <Link to="/admin/products/create" className="btn btn-sm btn-primary">
    //       Add Product
    //     </Link>
    //     </div>
    //   </div>

    //   <TableProductData  searchTerm={searchTerm} productData={productData} setProductData={setProductData} />
    // </div>
    <div className="table-list">
  <div className="table-header">
    {/* Add Product Button */}
    <div className="flex justify-end p-3 w-full">
      <Link
        to="/admin/products/create"
        className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded hover:bg-blue-700 transition"
      >
       <span className="mr-2 text-white"> +</span> 
        Add Product
      </Link>
    </div>
  </div>

  {/* Table Data */}
  <TableProductData
    searchTerm={searchTerm}
    productData={productData}
    setProductData={setProductData}
  />
</div>

  );
}

export default TableProductList;
