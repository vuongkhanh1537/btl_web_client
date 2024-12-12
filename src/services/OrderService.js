import axiosInstance from "./axiosInstance";
import axios from "axios";

const apiURL = "http://localhost/btl_web_core/api/orders";
const token = localStorage.getItem("access_token");
export const fetchOrdersData = async () => {
  try {
    const response = await axios.get(apiURL, {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    });
console.log(response);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // Propagate the error for handling in the calling component
  }
};

export const getOrderById = async (id) => {
  try {
    const response = await axios.get(`${apiURL}/${id}/details`, {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    });
    console.log(response);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // Propagate the error for handling in the calling component
  }
};


export const updateOrder = async (id, status_, payment_status) => {
  try {
    const response = await axios.put(`http://localhost/btl_web_core/api/dashboard/orders/${id}`, {status_, payment_status});
    console.log(response);
    return response.data;
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
