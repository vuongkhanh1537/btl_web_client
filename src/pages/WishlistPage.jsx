import ProductCard from "@/components/landingPage/ProductCard";
import React, { useState, useEffect } from "react";

const WishlistPage = () => {
  const [wishlistItems, setWishlistItems] = useState([]);

  useEffect(() => {
    // Load wishlist from localStorage
    const wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
    setWishlistItems(wishlist);
  }, []);

  const handleWishlistChange = (newWishlist) => {
    setWishlistItems(newWishlist);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Wishlist</h1>
        <p className="text-gray-600">Affirm your fashion style</p>
      </div>
      {wishlistItems.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-gray-500 text-lg">Your wishlist is empty</p>
        </div>
      ) : (
        <div className="w-full px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 justify-items-center">
            {wishlistItems.map((product) => (
              <div
                key={product.productId}
                className="w-full flex justify-center"
              >
                <ProductCard
                  product={product}
                  onWishlistChange={handleWishlistChange}
                  key={product.productId}
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default WishlistPage;
