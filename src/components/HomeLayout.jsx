import React from "react";
import Header from "./Header";
import { useHome } from "../providers/HomeProvider";
import Footer from "./Footer";

const HomeLayout = ({ children }) => {
  const { darkMode } = useHome();
  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <div className="dark:bg-gray-900 transition-colors duration-200">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default HomeLayout;
