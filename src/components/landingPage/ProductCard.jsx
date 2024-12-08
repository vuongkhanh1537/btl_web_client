import { Eye, Heart, ShoppingCart } from "lucide-react";
import { formatCurrency, formatRating } from "../../utils/CurrencyUtils";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useHome } from "@/providers/HomeProvider";

const ProductCard = ({product, onWishlistChange}) => {
    const { addToCart } = useHome();
  const [isHovered, setIsHovered] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  
  // Check localStorage on component mount
  useEffect(() => {
      const wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
      setIsLiked(wishlist.some(item => item.productId === product.productId));
  }, [product.productId]);

  const handleLikeClick = () => {
      const wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
      let newWishlist;
      
      if (isLiked) {
          // Remove from wishlist
          newWishlist = wishlist.filter(item => item.productId !== product.productId);
      } else {
          // Add to wishlist
          newWishlist = [...wishlist, product];
      }
      
      localStorage.setItem('wishlist', JSON.stringify(newWishlist));
      setIsLiked(!isLiked);
      
      // Notify parent component if callback exists
      if (onWishlistChange) {
          onWishlistChange(newWishlist);
      }
  };

  const reductName = (name) => {
    if (name.length > 20) {
      return name.substring(0, 20) + '...';
    }
    return name;
  }

  const handleAddToCart = () => {
    addToCart(product);
  }

  return (
      <div 
          className="relative group w-64 pb-2 bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
      >
          {/* Product Image Container */}
          <div className="relative h-64 overflow-hidden">
              <img
                  src={product.images && product.images[0] || 'https://via.placeholder.com/300'}
                  alt="Product"
                  className={`w-64 h-64 object-cover transition-transform duration-500 ${
                      isHovered ? 'scale-110' : 'scale-100'
                  }`}
              />
        
              {/* Quick Action Buttons */}
              <div className={`absolute top-0 right-0 p-2 flex flex-col gap-2 transition-opacity duration-300 ${
                  isHovered ? 'opacity-100' : 'opacity-0'
              }`}>
                  <button 
                      onClick={handleLikeClick}
                      className="p-2 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors"
                  >
                      <Heart
                          className={`w-5 h-5 ${isLiked ? 'fill-red-500 text-red-500' : 'text-gray-600'}`}
                      />
                  </button>
              </div>
              {/* Rest of the component remains the same */}
              {/* Add to Cart Button */}
              <div className={`absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-3 transform transition-transform duration-300 ${
                  isHovered ? 'translate-y-0' : 'translate-y-full'
              }`}>
                  <button 
                    className="w-full flex items-center justify-center gap-2 bg-white text-black py-2 rounded-md hover:bg-gray-100 transition-colors"
                    onClick={handleAddToCart}
                  >
                      <ShoppingCart className="w-4 h-4" />
                      <span className="font-medium">Add to Cart</span>
                  </button>
              </div>
          </div>

          {/* Product Info */}
          <div className="p-4">
              <div className="text-sm text-gray-500 capitalize">{product.category}</div>
              <div className="flex flex-col justify-between">
              <Link to={`/products/${product.productId}`}>
                  <h3 className="font-semibold text-lg transition-colors hover:text-blue-600">
                      {reductName(product.name)}
                  </h3>
              </Link>
              <div className="flex items-center justify-between">
                  <span className="text-lg font-bold">{formatCurrency(product.price)}</span>
                  <div className="flex items-center gap-1">
                      <span className="text-yellow-400">★★★★★</span>
                      {/* <span className="text-gray-400">★</span> */}
                      <span className="text-sm text-gray-500">{formatRating(product.rating)}</span>
                  </div>
              </div>
              </div>
          </div>
      </div>
  );
};
export default ProductCard;
