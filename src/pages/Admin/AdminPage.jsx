// Admin.jsx

import { Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import ProductList from "./ProductList";
import EditProduct from "./EditProduct";
import CreateProduct from "./CreateProduct";
import PageNotFound from "../PageNotFound";
import ProductDetail from "./ProductDetail";
import OrderList from "./OrderList";
import OrderDetail from "./OrderDetail";
import CustomerList from "./CustomerList";
import PromotionList from "./PromotionList";
import initialProductData from "../../datas/ProductData";
import initialOrderData from "../../datas/OrderData";
import { initialCustomersData } from "../../datas/customerData";
import { samplePromotionData } from "../../datas/promotionData";
import { fetchProductData } from "../../services/ProductService";
import { fetchOrdersData } from "../../services/OrderService";
import { useEffect, useState } from "react";
import AdminLayout from "../../Layouts/AdminLayout";
import "../../styles/global.css";

const access_token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxIiwiZXhwIjoiZXhwIiwicm9sZSI6Im1hbmFnZXIifQ.QFveAqZbNLkKOkHBpOKgy9yp2ocUKd9jJgfonZSck50";

function AdminPage() {
  const [productData, setProductData] = useState(initialProductData);

  const [orderData, setOrderData] = useState(initialOrderData);
  const [customerData, setCustomerData] = useState(initialCustomersData);
  const [promotionData, setPromotionData] = useState(samplePromotionData);

  async function fetchProducts() {
    try {
      const data = await fetchProductData();
      const standardizedData = data.map((item) => ({
        product_id: item.id,
        name: item.name,
        brand: item.brand,
        quantity: item.quantity,
        price: item.price,
        rating: item.rating,
        category: item.category,
        size: item.size,
        weight: item.weight,
        color: item.color,
        description: item.description,
        image: item.image,
      }));
      setProductData(standardizedData);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }

  async function fetchOrders() {
    try {
      const data = await fetchOrdersData();
      const standardizedData = data.map((item) => ({
        order_id: item.order_id,
        order_time: item.order_time,
        ship_fee: item.ship_fee,
        payment_method: item.payment_method,
        payment_status: item.payment_status,
        payment_time: item.payment_time,
        status_: item.status_,
        address_: item.address_,
        user_id: item.user_id,
        promotion_code_id: item.promotion_code_id,
        total_payment: item.total_payment,
        discount: item.discount,
      }));

      setOrderData(standardizedData);
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  }

  useEffect(() => {
    fetchProducts();
    fetchOrders();

    localStorage.setItem("access_token", access_token);
  }, []);

  return (
    <AdminLayout>
      <Routes>
        <Route path="admin/dashboard" element={<Dashboard />} />
        <Route path="admin/products">
          <Route
            path="list"
            element={
              <ProductList
                productData={productData}
                setProductData={setProductData}
              />
            }
          />
          <Route
            path="edit/:id"
            element={
              <EditProduct
                productData={productData}
                setProductData={setProductData}
              />
            }
          />
          <Route
            path="create"
            element={
              <CreateProduct
                productData={productData}
                setProductData={setProductData}
              />
            }
          />
          <Route
            path="detail/:id"
            element={
              <ProductDetail
                productData={productData}
                setProductData={setProductData}
              />
            }
          />
        </Route>
        <Route path="admin/orders">
          <Route
            path="list"
            element={
              <OrderList orderData={orderData} setOrderData={setOrderData} />
            }
          />
          <Route
            path="detail/:id"
            element={
              <OrderDetail orderData={orderData} setOrderData={setOrderData} />
            }
          />{" "}
        </Route>
        <Route path="admin/customers">
          <Route
            path="list"
            element={
              <CustomerList
                customerData={customerData}
                setCustomerData={setCustomerData}
              />
            }
          />
          <Route path="detail/:id" />
        </Route>
        <Route path="admin/promotions">
          <Route
            path="list"
            element={
              <PromotionList
                promotionData={promotionData}
                setPromotionData={setPromotionData}
              />
            }
          />
          <Route path="detail/:id" />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </AdminLayout>
  );
}

export default AdminPage;
