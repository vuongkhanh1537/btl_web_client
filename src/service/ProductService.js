import axiosInstance from "./axiosInstance";


class ProductService {
    BASE_ROUTE = '/products';

    async getProducts() {
        const response = await axiosInstance.get(this.BASE_ROUTE);
        return response.json();
    }

    async getProductById(id) {
        const response = await axiosInstance.get(`${this.BASE_ROUTE}/${id}`, { params: { id } });
        return response.json();
    }
}

export const productService = new ProductService();