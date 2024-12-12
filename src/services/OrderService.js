import axiosInstance from "./axiosInstance";

const apiURL = "http://localhost/BTL/btl_web_core/temp_api/api.php/order_";
export const fetchOrdersData = async () => {
  try {
    const response = await fetch(apiURL);
    if (!response.ok) {
      throw new Error("Failed to fetch orders data");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // Propagate the error for handling in the calling component
  }
};

export const createOrder = async (orderData) => {
  try {
    const response = await axiosInstance.post("/orders", orderData);
    return response;
  } catch (error) {
    console.error("Error creating order:", error);
    throw error; // Propagate the error for handling in the calling component
  }
};

export const getOrders = async () => {
  try {
    const response = await axiosInstance.get("/orders");
    return response;
  } catch (error) {
    console.error("Error fetching orders:", error);
    throw error; // Propagate the error for handling in the calling component
  }
}
