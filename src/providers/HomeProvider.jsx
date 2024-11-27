import React, { createContext, useContext, useState } from "react";

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

  // Setting cart items
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Nike Air Max 270",
      price: 3200000,
      size: 42,
      color: "Đen/Trắng",
      quantity: 1,
      image: "/api/placeholder/120/120"
    },
    {
      id: 2,
      name: "Adidas Ultraboost",
      price: 4100000,
      size: 41,
      color: "Xám",
      quantity: 2,
      image: "/api/placeholder/120/120"
    },{
      id: 3,
      name: "Nike Air Max 270",
      price: 3200000,
      size: 42,
      color: "Đen/Trắng",
      quantity: 1,
      image: "/api/placeholder/120/120"
    },
    {
      id: 4,
      name: "Adidas Ultraboost",
      price: 4100000,
      size: 41,
      color: "Xám",
      quantity: 2,
      image: "/api/placeholder/120/120"
    }
  ]);

  const addToCart = (product) => {
    setCartItems((prev) => [...prev, product]);
  };

  const removeFromCart = (productId) => {
    setCartItems((prev) => prev.filter((item) => item.id !== productId));
  };

  return (
    <HomeContext.Provider value={{ darkMode, toggleMode, cartItems, addToCart, removeFromCart, setCartItems }}>
      {children}
    </HomeContext.Provider>
  );
};

// Create a custom hook to use the HomeContext
export const useHome = () => {
  return useContext(HomeContext);
};
