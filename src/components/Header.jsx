import { Link } from "react-router-dom";
import { useHome } from "../providers/HomeProvider";
import { Moon, Sun } from "lucide-react";

const Header = () => {
  const { darkMode, toggleMode } = useHome();
  return (
    <header className="py-3 px-2 mb-0 border-b sticky top-0 bg-white dark:bg-gray-900 dark:border-none z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          to="/"
          className="text-3xl font-bold text-indigo-600 hover:text-indigo-700 transition duration-400 ease-in-out hover:scale-105 transform"
        >
          Strike <span className="text-rose-600">Zone</span>
        </Link>
        <nav className="hidden md:flex gap-x-4">
          <Link
            to="/"
            className="text-lg font-medium text-gray-700 dark:text-gray-100 hover:text-indigo-500 dark:hover:text-indigo-500 transition duration-400 ease-in-out"
          >
            Home
          </Link>
          <Link
            to="/products"
            className="ml-6 text-lg font-medium text-gray-700 dark:text-gray-100 hover:text-indigo-500 dark:hover:text-indigo-500 transition duration-400 ease-in-out"
          >
            Products
          </Link>
          <Link
            to="/wishlist"
            className="ml-6 text-lg font-medium text-gray-700 dark:text-gray-100 hover:text-indigo-500 dark:hover:text-indigo-500 transition duration-400 ease-in-out"
          >
            Wishlist
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          {/* <button
            onClick={() => toggleMode()}
            className="p-2 rounded-lg text-indigo-700 dark:text-indigo-500 hover:bg-gray-200 dark:hover:bg-gray-800 transition duration-400 ease-in-out"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button> */}
          <Link
            to="/login"
            className="ml-6 text-md font-medium text-gray-700 dark:text-gray-100 transition duration-400 ease-in-out bg-gray-900 hover:bg-gray-700 text-white px-4 py-2 rounded-3xl"
          >
            Login
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
