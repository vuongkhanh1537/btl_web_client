import React, { useState, useEffect } from 'react';
import { Star, Minus, Plus, ShoppingCart } from 'lucide-react';
import ProductInfo from '../components/productDetail/ProductInfo';
import ProductReviews from '../components/productDetail/ProductReview';

// Giả lập dữ liệu sản phẩm
const ProductDetailPage = () => {
  return (<>
    <ProductInfo />
    <ProductReviews />
  </>);
}


export default ProductDetailPage;