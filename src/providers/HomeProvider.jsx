import React, { createContext, useContext, useState } from "react";

const HomeContext = createContext();

export const HomeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(localStorage.getItem("mode") === "dark");
  const toggleMode = () => {
    setDarkMode((prev) => {
      localStorage.setItem("mode", prev ? "light" : "dark");
      return !prev;
    });
    localStorage.setItem("mode", darkMode ? "light" : "dark");
  };

  return (
    <HomeContext.Provider value={{ darkMode, toggleMode }}>
      {children}
    </HomeContext.Provider>
  );
};

// Create a custom hook to use the HomeContext
export const useHome = () => {
  return useContext(HomeContext);
};
