import axios from "axios";

const apiURL = "http://localhost//btl_web_core/api/dashboard";

export const fetchTotalRevenue = async (start_date, end_date) => {
    try {
        const response = await axios.get(`${apiURL}/revenue`, {
            params: {
                start_date,
                end_date,
            },
        });
        if(response.status !== 200) {
            throw new Error("Failed to fetch total revenue");
        }
        console.log(response);
        return response.data.data.total_revenue;
    } catch (error) {
        console.error("Error fetching total revenue:", error);
        throw error; // Propagate the error for handling in the calling component
    }
};

export const fetchTotalOrders = async (start_date, end_date) => {
    try {
        const response = await axios.get(`${apiURL}/count`, {
            params: {
                start_date,
                end_date,
            },
        });
        if(response.status !== 200) {
            throw new Error("Failed to fetch total rders");
        }
        console.log(response);
        return response.data.data.total_order_count;
    } catch (error) {
        console.error("Error fetching total orders:", error);
        throw error; // Propagate the error for handling in the calling component
    }
};

export const fetchRevenueMonthly = async (year) => {
    try {
        const response = await axios.get(`${apiURL}/revenue/monthly`, {
            params: {
               year
            },
        });
        if(response.status !== 200) {
            throw new Error("Failed to fetch revenue monthly");
        }
        console.log(response);
        return response.data.data;
    } catch (error) {
        console.error("Error fetching total revenue:", error);
        throw error; // Propagate the error for handling in the calling component
    }
};



export const fetchTotalOrderDelivered = async (start_date, end_date) => {
    try {
        const response = await axios.get(`${apiURL}/orders/completed`, {
            params: {
                start_date,
                end_date,
            },
        });
        if(response.status !== 200) {
            throw new Error("Failed to fetch total orders delivered");
        }
        console.log(response);
        return response.data.data.total_order_completed;
    } catch (error) {
        console.error("Error fetching total orders delivered:", error);
        throw error; // Propagate the error for handling in the calling component
    }
};



// export const fetchTotalOrderShipping = async (start_date, end_date) => {
//     try {
//         const response = await axios.get(`${apiURL}/orders-shipping`, {
//             params: {
//                 start_date,
//                 end_date,
//             },
//         });
//         if(response.status !== 200) {
//             throw new Error("Failed to fetch total orders shipping");
//         }
//         console.log(response);
//         return response.data.data.total_orders_shipping;
//     } catch (error) {
//         console.error("Error fetching total orders shipping:", error);
//         throw error; // Propagate the error for handling in the calling component
//     }
// };

export const fetchRevenueByCategory = async (start_date, end_date) => {
    try {
        const response = await axios.get(`${apiURL}/category`, {
            params: {
                start_date,
                end_date,
            },
        });
        if(response.status !== 200) {
            throw new Error("Failed to fetch total revenue");
        }
        console.log(response);
        return response.data.data;
    } catch (error) {
        console.error("Error fetching total revenue:", error);
        throw error; // Propagate the error for handling in the calling component
    }
};

// export const fetchRevenueByBrand = async (start_date, end_date) => {
//     try {
//         const response = await axios.get(`${apiURL}/revenue/brand`, {
//             params: {
//                 start_date,
//                 end_date,
//             },
//         });
//         if(response.status !== 200) {
//             throw new Error("Failed to fetch total revenue by brand");
//         }
//         console.log(response);
//         return response.data.data;
//     } catch (error) {
//         console.error("Error fetching total revenue by brand:", error);
//         throw error; // Propagate the error for handling in the calling component
//     }
// };

export const fetchTopProducts = async (start_date, end_date) => {
    try {
        const response = await axios.get(`${apiURL}/top-selling`, {
            params: {
                start_date,
                end_date,
            },
        });
        if(response.status !== 200) {
            throw new Error("Failed to fetch top products");
        }
        console.log(response);
        return response.data.data;
    } catch (error) {
        console.error("Error fetching top products:", error);
        throw error; // Propagate the error for handling in the calling component
    }
};