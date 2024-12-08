import { Link, useNavigate } from "react-router-dom";
import { useHome } from "../providers/HomeProvider";
import {
  Moon,
  Sun,
  ShoppingCart,
  User,
  LogOut,
  Settings,
  ScrollText,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { useAuth } from "@/providers/AuthContext";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const Header = () => {
  const { darkMode, toggleMode, cartItems } = useHome();
  const { logout, isAuthenticated, user } = useAuth();
  const navigate = useNavigate();
  const cartItemCount = cartItems.length;

  const handleLogout = () => {
    // Xử lý logout
    const res = logout();
    if (res.success) {
      navigate("/login");
    }
  };

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

        <div className="flex items-center gap-4">
          {/* Dark mode toggle */}
          {/* <button
            onClick={() => toggleMode()}
            className="p-2 rounded-lg text-indigo-700 dark:text-indigo-500 hover:bg-gray-200 dark:hover:bg-gray-800 transition duration-400 ease-in-out"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button> */}

          {isAuthenticated ? (
            <>
              {/* Shopping Cart */}
              <Link
                to="/cart"
                className="relative p-2 rounded-lg text-gray-700 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-800 transition duration-400 ease-in-out"
              >
                <ShoppingCart size={20} />
                {cartItemCount > 0 && (
                  <Badge className="absolute -top-1 -right-1 bg-rose-500 text-white w-5 h-5 flex items-center justify-center rounded-full text-xs">
                    {cartItemCount}
                  </Badge>
                )}
              </Link>

              {/* User Profile Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-2 p-2 rounded-lg text-gray-700 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-800 transition duration-400 ease-in-out">
                  <span className="font-medium">{user.name}</span>
                  <Avatar>
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                    />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                  <DropdownMenuItem onClick={() => navigate("/profile")}>
                    <User className="mr-2 h-4 w-4" />
                    <span>Profile</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => navigate("/orders")}>
                    <ScrollText className="mr-2 h-4 w-4" />
                    <span>My Order</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleLogout}>
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Logout</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          ) : (
            <Link
              to="/login"
              className="ml-6 text-md font-medium text-gray-700 dark:text-gray-100 transition duration-400 ease-in-out bg-gray-900 hover:bg-gray-700 text-white px-4 py-2 rounded-3xl"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
