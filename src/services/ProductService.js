// const apiURL = "http://localhost//btl_web_core/api/products";
// export const fetchProductData = async () => {
//   try {
//     const response = await fetch(apiURL);
//     if (!response.ok) {
//       throw new Error("Failed to fetch product data");
//     }
//     return await response.json();
//   } catch (error) {
//     console.error("Error fetching data:", error);
//     throw error; // Propagate the error for handling in the calling component
//   }
// };

// // Add a new product
// export const addProduct = async (product) => {
//   try {
//     const response = await fetch(apiURL, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(product),
//     });

//     //   if (!response.ok) {
//     //     throw new Error("Failed to add product");
//     //   }
//     if (!response.ok) {
//       const errorData = await response.json().catch(() => ({}));
//       throw new Error(
//         `Failed to add product: ${
//           errorData.error || response.statusText
//         } (Status: ${response.status})`
//       );
//     }

//     return await response.json();
//   } catch (error) {
//     console.error("Error adding product:", error);
//     throw error;
//   }
// };

// // Delete a product
// export const deleteProduct = async (productId) => {
//   try {
//     const response = await fetch(
//       `${apiURL}/${productId}`, 
//       {
//         method: "DELETE",
//       }
//     );

//     if (!response.ok) {
      
//       const errorData = await response.json();
//       const errorMessage = errorData.error || response.statusText || `Failed to delete product: ${response.status}`;
//       throw new Error(errorMessage);
//     }

//     // Return the response data on success
//     // return await response.json();
//     return response;
//   } catch (error) {
//     console.error("Error deleting product:", error);
//     throw error;
//   }
// };

// // Updating a product
// export const updateProduct = async (id, updatedProduct) => {
//   // console.log(updatedProduct);
//   try {
//     const response = await fetch(`${apiURL}/${id}`, {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(updatedProduct),
//     });

//     if (!response.ok) throw new Error("Failed to update product");

//     return response; // Return the updated product message
//   } catch (error) {
//     console.error("Error updating product:", error);
//     throw error; // Propagate the error
//   }
// };
import axios from "axios";

const apiURL = "http://localhost//btl_web_core/api/products";

// Fetch all products
export const fetchProductData = async () => {
  try {
    const response = await axios.get(apiURL);
    return response.data.data; // Axios automatically parses JSON responses
  } catch (error) {
    console.error("Error fetching data:", error.response?.data || error.message);
    throw error; // Propagate the error
  }
};

export const getProductById = async (id) => {
  try {
    const response = await axios.get(`${apiURL}/${id}`);
    return response.data.data; // Axios automatically parses JSON responses
  } catch (error) {
    console.error("Error fetching data:", error.response?.data || error.message);
    throw error; // Propagate the error
  }
}
// Add a new product
export const addProduct = async (product) => {
  try {
    console.log(product);
    const response = await axios.post(apiURL, product);
    return response.data; // Return the newly added product or response data
  } catch (error) {
    console.error(
      "Error adding product:",
      error.response?.data || error.message
    );
    throw new Error(
      `Failed to add product: ${error.response?.data?.error || error.message}`
    );
  }
};

// Delete a product
export const deleteProduct = async (productId) => {
  try {
    const response = await axios.delete(`${apiURL}/${productId}`);
    return response.data; // Return confirmation or response data
  } catch (error) {
    console.error(
      "Error deleting product:",
      error.response?.data || error.message
    );
    throw new Error(
      `Failed to delete product: ${error.response?.data?.error || error.message}`
    );
  }
};

// Update a product
export const updateProduct = async (id, updatedProduct) => {
  try {
    
    const response = await axios.put(`${apiURL}/${id}`, updatedProduct);
    console.log(response);
    return response; // Return the updated product or response data
  } catch (error) {
    console.error(
      "Error updating product:",
      error.response?.data || error.message
    );
    throw new Error(
      `Failed to update product: ${error.response?.data?.error || error.message}`
    );
  }
};
