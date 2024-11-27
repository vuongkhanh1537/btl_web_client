import { createBrowserRouter, Outlet } from "react-router-dom";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import HomeLayout from "../components/HomeLayout";
import ProductDetailPage from "../pages/ProductDetailPage";
import ProductListPage from "@/pages/ProductListPage";
import WishlistPage from "@/pages/WishlistPage";
import ShoppingCartPage from "@/pages/ShoppingCartPage";
import PaymentPage from "@/pages/PaymentPage";
import OrderSuccess from "@/pages/OrderSuccess";
import { AuthProvider } from "@/providers/AuthContext";
const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/",
    element: (
        <HomeLayout>
          <Outlet />
        </HomeLayout>
    ),
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "products",
        element: <Outlet />,
        children: [
          {
            index: true,
            element: <ProductListPage />,
          },
          {
            path: ":productId",
            element: <ProductDetailPage />,
          },
        ],
      },
      {
        path: "wishlist",
        element: <WishlistPage />,
      },
      {
        path: "cart",
        element: <ShoppingCartPage />,
      },
      {
        path: "checkout",
        element: <Outlet />,
        children: [
          {
            index: true,
            element: <PaymentPage />,
          },
          {
            path: "success",
            element: <OrderSuccess />,
          },
        ],
      },
    ],
  },
  {
    path: "/admin",
    element: <div>Admin Page</div>,
  },
]);

export default router;
