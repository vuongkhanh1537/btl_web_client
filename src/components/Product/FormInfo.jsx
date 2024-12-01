import { useEffect, useState } from "react";
import ImgUpload from "../FormInput/ImgUpload";
import InputGroup from "../FormInput/InputGroup";
import SelectInput from "../FormInput/SelectInput";
import TextInput from "../FormInput/TextInput";
import { useNavigate } from "react-router-dom";
import { addProduct, updateProduct } from "../../services/ProductService";
import { colors, categories } from "../../utils/selectOptions";
// const categories = [
//   { value: "Casual Wear", label: "Casual Wear" },
//   { value: "Formal Wear", label: "Formal Wear" },
//   { value: "Sport Wear", label: "Sport Wear" },
// ];


// const sizes = [
//   { value: "S", label: "S" },
//   { value: "M", label: "M" },
//   { value: "L", label: "L" },
//   { value: "XL", label: "XL" },
//   { value: "2XL", label: "2XL" },
// ];



const initialProductState = {
  name_: "",
  brand: "",
  category: "",
  quantity: "",
  size_: "",
  weight_: "",
  color: "",
  description_: "",
  price: "",
};


// const apiURL = "http://localhost/BTL/btl_web_core/temp_api/api.php/product";
function FormInfo({ productData, setProductData, selectedProduct }) {
  const [product, setProduct] = useState(initialProductState);

  const navigate = useNavigate();
  useEffect(() => {
    if (selectedProduct) {
      setProduct(selectedProduct);
    }
  }, [selectedProduct]);

  function handleChange(e) {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  }
  function handleNavigate(path) {
    navigate(path);
    window.scrollTo(0, 0);
  }
  // function handleSubmit(e) {
  //   e.preventDefault();

  //   // Update the product if selectedProduct exists, otherwise add new product
  //   if (selectedProduct) {
  //     const updatedProducts = productData.map((item) =>
  //       item.id === selectedProduct.id
  //         ? { ...product, id: selectedProduct.id }
  //         : item
  //     );
  //     setProductData(updatedProducts);
  //     alert("Product updated successfully");
  //   } else {
  //     setProductData([...productData, { ...product, id: Date.now() }]);
  //     alert("Product added successfully");
  //   }

  //   setProduct(initialProductState);
  //   console.log(product);
  //   handleNavigate("/products/list");
  // }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      if (selectedProduct) {
      
        const response = await updateProduct(selectedProduct.product_id, product);
        
        if(!response.ok){
          const errorData = await response.json() // Ensure to extract JSON message
          throw new Error(
            `Failed to update product: ${errorData.message || response.statusText}`
          );
        }
        
        // console.log(product);
        const updatedProducts = productData.map((item) =>
          item.product_id === selectedProduct.product_id ? product : item
        );
        setProductData(updatedProducts);
        alert("Product updated successfully");
      } else {
   

        // Add new product to database

          const response = await addProduct(product);        
          console.log( response,response.id);
          const newProduct = { ...product, product_id: response.id }; 
          console.log(newProduct);
          // Add the new product to the start of productData
          setProductData((productData)=> [newProduct, ...productData]);
          alert("Product added successfully");
        
       
      }

      setProduct(initialProductState);
      handleNavigate("/products/list");
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred: " + error.message);
    }
  }
  function handleReset(e) {
    setProduct(initialProductState);
  }
  return (
    // <form onSubmit={handleSubmit}>
    //   <div className="row">
    //     <div className="col-lg-8">
    //       <div className="card">
    //         <div className="card-header">Details</div>
    //         <div className="card-body">
    //           <TextInput
    //             type="text"
    //             name="name_"
    //             value={product.name_}
    //             label="Product Name"
    //             placeholder="Enter product name"
    //             handleChange={handleChange}
    //             required={true}
    //           />
    //           <TextInput
    //             type="text"
    //             name="brand"
    //             value={product.brand}
    //             label="Brand"
    //             placeholder="Enter product brand"
    //             handleChange={handleChange}
    //             required={true}
    //           />
    //           <div className="row">
    //             <div className="col-lg-6">
    //               <SelectInput
    //                 label="Categories"
    //                 options={categories}
    //                 name="category"
    //                 value={product.category}
    //                 // onChange={handleCategoryChange}
    //                 handleChange={handleChange}
    //                 required={true}
    //               />
    //             </div>

    //             <div className="col-lg-6">
    //               <TextInput
    //                 type="number"
    //                 name="quantity"
    //                 value={product.quantity}
    //                 label="Quantity"
    //                 placeholder="Enter product quantity"
    //                 handleChange={handleChange}
    //                 required={true}
    //               />
    //             </div>
    //           </div>
    //           <div className="row">
    //             <div className="col-lg-6">
                  
    //               <TextInput
    //                 type="number"
    //                 label="Size"
    //                 value={product.size_}
    //                 name="size_"
    //                 handleChange={handleChange}
    //                 placeholder="Enter product size"
    //                 required={true}
    //               />
    //             </div>

    //             <div className="col-lg-6">
    //               <TextInput
    //                 type="number"
    //                 label="Weight"
    //                 value={product.weight_}
    //                 name="weight_"
    //                 handleChange={handleChange}
    //                 placeholder="Enter product weight"
    //                 required={true}
    //               />
    //             </div>
    //           </div>
    //           <SelectInput
    //             label="Color"
    //             options={colors}
    //             name="color"
    //             value={product.color}
    //             // onChange={handleCategoryChange}
    //             handleChange={handleChange}
    //             required={true}
    //           />
    //           <div className="mb-3">
    //             <label className="form-label">Product Description</label>
    //             <textarea
    //               className="form-control"
    //               rows="5"
    //               name="description_"
    //               value={product.description_}
    //               onChange={handleChange}
    //               required={false}
    //             ></textarea>
    //           </div>
    //         </div>
    //       </div>

    //       <div className="card mt-4">
    //         <div className="card-header">Product Gallery</div>
    //         <div className="card-body">
    //           <ImgUpload />
    //         </div>
    //       </div>
    //     </div>

    //     <div className="col-lg-4">
    //       <div className="card">
    //         <div className="card-header">Pricing</div>
    //         <div className="card-body">
    //           <InputGroup
    //             label="Price"
    //             prependText="VND"
    //             type="number"
    //             placeholder="Enter product price"
    //             name="price"
    //             value={product.price}
    //             handleChange={handleChange}
    //             required={true}
    //           />
    //           {/* <InputGroup
    //             label="Discount"
    //             prependText="%"
    //             type="number"
    //             placeholder="Enter discount percentage"
    //             name="discount"
    //             value={product.discount}
    //             handleChange={handleChange}
    //             required={false}
    //           /> */}
    //         </div>
    //       </div>
    //     </div>
    //   </div>

    //   <div className="create-actions">
    //     <button type="submit" className="btn btn-success mt-4">
    //       {selectedProduct ? "Update" : "Create"}
    //     </button>
    //     <button
    //       type="reset"
    //       className="btn btn-secondary mt-4"
    //       onClick={handleReset}
    //     >
    //       Reset
    //     </button>
    //   </div>
    // </form>

    <form onSubmit={handleSubmit}>
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
      {/* Left Column (Details) */}
      <div className="lg:col-span-2">
        <div className="bg-white shadow rounded-lg mb-4">
          <div className="bg-gray-200 text-gray-600 p-4 rounded-t-lg border-b">
            <strong>Details</strong>
          </div>
          <div className="p-4">
            <TextInput
              type="text"
              name="name_"
              value={product.name_}
              label="Product Name"
              placeholder="Enter product name"
              handleChange={handleChange}
              required={true}
            />
            <TextInput
              type="text"
              name="brand"
              value={product.brand}
              label="Brand"
              placeholder="Enter product brand"
              handleChange={handleChange}
              required={true}
            />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div>
                <SelectInput
                  label="Categories"
                  options={categories}
                  name="category"
                  value={product.category}
                  handleChange={handleChange}
                  required={true}
                />
              </div>
  
              <div>
                <TextInput
                  type="number"
                  name="quantity"
                  value={product.quantity}
                  label="Quantity"
                  placeholder="Enter product quantity"
                  handleChange={handleChange}
                  required={true}
                />
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div>
                <TextInput
                  type="number"
                  label="Size"
                  value={product.size_}
                  name="size_"
                  handleChange={handleChange}
                  placeholder="Enter product size"
                  required={true}
                />
              </div>
  
              <div>
                <TextInput
                  type="number"
                  label="Weight"
                  value={product.weight_}
                  name="weight_"
                  handleChange={handleChange}
                  placeholder="Enter product weight"
                  required={true}
                />
              </div>
            </div>
            <SelectInput
              label="Color"
              options={colors}
              name="color"
              value={product.color}
              handleChange={handleChange}
              required={true}
            />
            <div className="mb-4">
              <label className="block text-base font-semibold text-gray-700 mb-2">Product Description</label>
              <textarea
                className="w-full p-2 border border-gray-300 rounded-md"
                rows="5"
                name="description_"
                value={product.description_}
                onChange={handleChange}
                required={false}
                placeholder="Enter product description"
              ></textarea>
            </div>
          </div>
        </div>
  
        {/* Product Gallery */}
        <div className="bg-white shadow-md rounded-lg mt-4">
        <div className="bg-gray-200 text-gray-600 p-4 rounded-t-lg border-b">
            <strong>Product Gallery</strong>
          </div>
          <div className="p-4">
            <ImgUpload />
          </div>
        </div>
      </div>
  
      {/* Right Column (Pricing) */}
      <div className="lg:col-span-1">
        <div className="bg-white shadow-md rounded-lg mb-4">
        <div className="bg-gray-200 text-gray-600 p-4 rounded-t-lg border-b">
            <strong>Pricing</strong>
          </div>
          <div className="p-4">
            <InputGroup
              label="Price"
              prependText="VND"
              type="number"
              placeholder="Enter product price"
              name="price"
              value={product.price}
              handleChange={handleChange}
              required={true}
            />
            {/* <InputGroup
              label="Discount"
              prependText="%"
              type="number"
              placeholder="Enter discount percentage"
              name="discount"
              value={product.discount}
              handleChange={handleChange}
              required={false}
            /> */}
          </div>
        </div>
      </div>
    </div>
  
    {/* Action Buttons */}
    <div className="flex mt-4 space-x-4 justify-center">
      <button
        type="submit"
        className="bg-green-700 text-white py-2 px-4 rounded-lg hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-500"
      >
        {selectedProduct ? "Update" : "Create"}
      </button>
      <button
        type="reset"
        className="bg-gray-400 text-white py-2 px-4 rounded-lg hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-300"
        onClick={handleReset}
      >
        Reset
      </button>
    </div>
  </form>
      
  );
}

export default FormInfo;
