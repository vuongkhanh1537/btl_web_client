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

import { fetchProductData } from "../../services/ProductService";
import { useEffect, useState } from "react";
import AdminLayout from "../../Layouts/AdminLayout";
import "../../styles/global.css";



const access_token =
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxIiwiZXhwIjoiZXhwIiwicm9sZSI6Im1hbmFnZXIifQ.QFveAqZbNLkKOkHBpOKgy9yp2ocUKd9jJgfonZSck50";

function AdminPage() {
  const [productData, setProductData] = useState([]);

  

  const [isLoading, setIsLoading] = useState(null);

  useEffect(() => {
    localStorage.setItem("access_token", access_token);
  },[])


  useEffect(() => {
    async function fetchProducts() {
      try {
        setIsLoading(true);
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
      } finally {
        setIsLoading(false);
      }
    }
    fetchProducts();

    
  }, []);

  if(isLoading || !productData){
    return <div className="flex justify-center items-center h-screen">
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-"></div>
    </div>
  }

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
              <OrderList />
            }
          />
          <Route path="detail/:id" element={<OrderDetail />} />{" "}
        </Route>
        <Route path="admin/customers">
          <Route path="list" element={<CustomerList />} />
          <Route path="detail/:id" />
        </Route>
        <Route path="admin/promotions">
          <Route path="list" element={<PromotionList />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </AdminLayout>
  );
}

export default AdminPage;
