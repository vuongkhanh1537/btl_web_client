import axios from "axios";

const apiURL = "http://localhost/btl_web_core/api/revenue";


export const get_total_revenue = async (start_date, end_date) => {
    let response = await axios.get(apiURL, {params: {start_date: start_date, end_date: end_date}});
    return response.data;

}