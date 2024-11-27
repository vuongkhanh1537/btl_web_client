import { Link } from "react-router-dom";
import TableProductData from "./TableProductData";
import { useState } from "react";
import RangeSlider from "../FormInput/RangeSlider";



function TableProductList({productData, setProductData} ) {
    const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="table-list">
      <div className="table-header">
        {/* <div>
          <input
            className="form-control"
            type="text"
            placeholder="Search products"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div> */}
        {/* <RangeSlider /> */}

        <div className="d-flex justify-content-end p-3" style={{width:"100%"}}>
        <Link to="/products/create" className="btn btn-sm btn-primary">
          Add Product
        </Link>
        </div>
      </div>

      <TableProductData  searchTerm={searchTerm} productData={productData} setProductData={setProductData} />
    </div>
    
  );
}

export default TableProductList;
