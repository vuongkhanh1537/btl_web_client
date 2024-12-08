import { cartService } from "@/services/CartService";
import { fetchProductData } from "@/services/ProductService";
import { products } from "@/services/sampleData";
import { groupProductsByCollection, splitImageUrls } from "@/utils/ProductUtils";
import React, { createContext, useContext, useEffect, useState } from "react";

const HomeContext = createContext();

export const HomeProvider = ({ children }) => {
  // Setting dark mode
  const [darkMode, setDarkMode] = useState(localStorage.getItem("mode") === "dark");
  const toggleMode = () => {
    setDarkMode((prev) => {
      localStorage.setItem("mode", prev ? "light" : "dark");
      return !prev;
    });
    localStorage.setItem("mode", darkMode ? "light" : "dark");
  };

  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await fetchProductData();
      const prdList = response.data.map((prd) => {
        return {
          ...prd,
          productId: prd.id,
          images: splitImageUrls(prd.image),
        };
      });
      setProducts(groupProductsByCollection(prdList).map((prd) => prd[0]));
      
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const fetchCartItems = async () => {
    try {
      const response = await cartService.getCart();
      const prdList = response.data.data.map((prd) => {
        return {
          ...prd,
          productId: prd.id,
          images: splitImageUrls(prd.image),
        };
      });
      setCartItems(prdList);
    } catch (error) {
      console.error('Error fetching cart items:', error);
    }
  }

  useEffect(() => {
    fetchProducts();
    fetchCartItems();
  }, []);

  // Setting cart items
  const addToCart = (product) => {
    if (cartItems.find((item) => item.id === product.id)) {
      updateQuantity(product.id, 1);
      return;
    }
    setCartItems((prev) => [...prev, { ...product, quantity: 1 }]);
  };

  const updateQuantity = (productId, change) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === productId
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };

  const removeFromCart = (productId) => {
    setCartItems((prev) => prev.filter((item) => item.id !== productId));
  };

  return (
    <HomeContext.Provider value={{ darkMode, toggleMode, cartItems, addToCart, removeFromCart, setCartItems, products, updateQuantity }}>
      {children}
    </HomeContext.Provider>
  );
};

// Create a custom hook to use the HomeContext
export const useHome = () => {
  return useContext(HomeContext);
};
