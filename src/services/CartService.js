import axiosInstance from "./axiosInstance";


class CartService {
  BASE_URL = "/cart";

  async addItem(item) {
    const response = await axiosInstance.post(this.BASE_URL, item);
    return response.data;
  }

  async updateItem(item) {
    const response = await axiosInstance.put(
      `${this.BASE_URL}/${item.id}`,
      item
    );
    return response.data;
  }

  async getCart() {
    const response = axiosInstance.get(this.BASE_URL);
    return response;
  }

  async removeItem(id) {
    const response = axiosInstance.delete(`${this.BASE_URL}/${id}`);
    return response.data;
  }
}

export const cartService = new CartService();
