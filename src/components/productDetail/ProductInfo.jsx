import React, { useState, useEffect } from 'react';
import { Star, Minus, Plus, ShoppingCart } from 'lucide-react';
import { formatCurrency } from '@/utils/CurrencyUtils';

const ProductInfo = ({
  productVariants = productVariants1,
}) => {
  const [selectedVariant, setSelectedVariant] = useState(productVariants[0]);
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState(productVariants[0].size);
  const [selectedColor, setSelectedColor] = useState(productVariants[0].color);
  const [selectedImage, setSelectedImage] = useState(productVariants[0].images[0]);

  // Lấy các size và color có sẵn
  const availableSizes = [
    ...new Set(productVariants.map((variant) => variant.size)),
  ];
  const availableColors = [
    ...new Set(productVariants.map((variant) => variant.color)),
  ];

  // Cập nhật variant khi thay đổi size hoặc color
  useEffect(() => {
    const newVariant = productVariants.find(
      (variant) =>
        variant.size === selectedSize && variant.color === selectedColor
    );
    if (newVariant) {
      setSelectedVariant(newVariant);
      setSelectedQuantity(1);
      // Reset to first image of new variant
      setSelectedImage(newVariant.images[0]);
    }
  }, [selectedSize, selectedColor]);

  const handleQuantityChange = (action) => {
    if (action === "increase" && selectedQuantity < selectedVariant.quantity) {
      setSelectedQuantity((prev) => prev + 1);
    } else if (action === "decrease" && selectedQuantity > 1) {
      setSelectedQuantity((prev) => prev - 1);
    }
  };

  const renderStars = (rating) => {
    return Array(5)
      .fill(0)
      .map((_, index) => (
        <Star
          key={index}
          className={`w-5 h-5 ${
            index < Math.floor(rating)
              ? "text-yellow-400 fill-yellow-400"
              : "text-gray-300"
          }`}
        />
      ));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Ảnh sản phẩm */}
        <div>
          <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden mb-4">
            <img
              src={selectedImage}
              alt={selectedVariant.name}
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Thumbnail images */}
          <div className="grid grid-cols-5 gap-2">
            {selectedVariant.images.map((image, index) => (
              <button
                key={index}
                className={`aspect-square rounded-lg overflow-hidden border-2 ${
                  selectedImage === image 
                    ? 'border-gray-900' 
                    : 'border-transparent hover:border-gray-300'
                }`}
                onClick={() => setSelectedImage(image)}
              >
                <img
                  src={image}
                  alt={`${selectedVariant.name} thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Thông tin sản phẩm */}
        <div className="flex flex-col space-y-5">
          <h1 className="text-3xl font-bold text-gray-900">
            {selectedVariant.name}
          </h1>

          <div className="flex items-center space-x-2">
            <div className="flex">{renderStars(selectedVariant.rating)}</div>
            <span className="text-gray-600">
              ({selectedVariant.rating} stars)
            </span>
          </div>

          <div className="text-2xl font-bold text-gray-900">
            {formatCurrency(selectedVariant.price)}
          </div>

          {/* Chọn size */}
          <div>
            <h3 className="text-sm font-medium text-gray-900">Size</h3>
            <div className="grid grid-cols-4 gap-2 mt-2">
              {availableSizes.map((size) => (
                <button
                  key={size}
                  className={`px-4 py-2 text-sm font-medium rounded-md ${
                    selectedSize === size
                      ? "bg-gray-900 text-white"
                      : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                  }`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Chọn màu */}
          <div>
            <h3 className="text-sm font-medium text-gray-900">Color</h3>
            <div className="grid grid-cols-4 gap-2 mt-2">
              {availableColors.map((color) => (
                <button
                  key={color}
                  className={`px-4 py-2 text-sm font-medium rounded-md ${
                    selectedColor === color
                      ? "bg-gray-900 text-white"
                      : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                  }`}
                  onClick={() => setSelectedColor(color)}
                >
                  {color}
                </button>
              ))}
            </div>
          </div>

          {/* Số lượng */}
          <div>
            <h3 className="text-sm font-medium text-gray-900">Available</h3>
            <div className="flex items-center space-x-4 mt-2">
              <button
                className="p-2 rounded-md bg-gray-100 hover:bg-gray-200"
                onClick={() => handleQuantityChange("decrease")}
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="text-lg font-medium">{selectedQuantity}</span>
              <button
                className="p-2 rounded-md bg-gray-100 hover:bg-gray-200"
                onClick={() => handleQuantityChange("increase")}
              >
                <Plus className="w-4 h-4" />
              </button>
              <span className="text-sm text-gray-500">
                {selectedVariant.quantity} items available
              </span>
            </div>
          </div>

          {/* Thông tin chi tiết */}
          <div className="border-t pt-6">
            <h3 className="text-sm font-medium text-gray-900">
              Detail Information
            </h3>
            <dl className="mt-4 space-y-4">
              <div className="grid grid-cols-3 gap-4">
                <dt className="text-sm font-medium text-gray-500">Category</dt>
                <dd className="text-sm text-gray-900 col-span-2">
                  {selectedVariant.category}
                </dd>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <dt className="text-sm font-medium text-gray-500">
                  Weight
                </dt>
                <dd className="text-sm text-gray-900 col-span-2">
                  {selectedVariant.weight}
                </dd>
              </div>
            </dl>
          </div>

          {/* Nút thêm vào giỏ hàng */}
          <button className="mt-6 w-full bg-gray-900 text-white py-3 px-4 rounded-md hover:bg-gray-800 flex items-center justify-center space-x-2">
            <ShoppingCart className="w-5 h-5" />
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
      <div>
        <h3 className="text-2xl font-bold text-gray-900 mt-8">Description</h3>
        <p className="mt-4 text-gray-600">{selectedVariant.description}</p>
      </div>
    </div>
  );
};

export default ProductInfo;
