import axios from "axios";


const apiUrl = "http://localhost/btl_web_core/api/promotions";

const token = localStorage.getItem("access_token");
export const fetchPromotionData = async () => {
    try {
        const response = await axios.get(apiUrl, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        });
        console.log(response);
        return response.data.data;
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error; // Propagate the error for handling in the calling component
    }
};

export const addPromotion = async (promotion) => {
    console.log(promotion);
    try {
        const response = await axios.post(apiUrl, promotion);
        console.log(response);
        return response.data;
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error; // Propagate the error for handling in the calling component
    }
};

export const updatePromotion = async (id, promotion) => {
    try {
        const response = await axios.put(`${apiUrl}/${id}`, promotion);
        console.log(response);
        return response.data;
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error; // Propagate the error for handling in the calling component
    }
}

export const deletePromotion = async (id) => {
    try {
        const response = await axios.delete(`${apiUrl}/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        });
        return response.data.data
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error; // Propagate the error for handling in the calling component
    }
}