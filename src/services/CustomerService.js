import axios from "axios";

const apiUrl =  "http://localhost/btl_web_core/api/customers"
const token = localStorage.getItem("access_token");
export const fetchCustomersData = async () => {
    try {
        const response = await axios.get(apiUrl, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        });
        console.log(response);
        return response.data;
    } catch (error) {
        console.error("Error fetching customer data:", error);
        throw error; // Propagate the error for handling in the calling component
    }
};