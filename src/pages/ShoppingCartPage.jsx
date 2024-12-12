import React, { useState } from 'react';
import ShoppingCart from '@/components/landingPage/ShoppingCart';
import { useHome } from '@/providers/HomeProvider';
import SwiperProducts from '@/components/landingPage/SwiperProducts';
import { getProductsByCategory } from '@/utils/ProductUtils';

const ShoppingCartPage = () => {
  const { products } = useHome();
  return (
    <div className="min-h-screen">
      <ShoppingCart />
      <SwiperProducts title='Recommend for you' products={getProductsByCategory(products, 'all', 10)}/>
    </div>
  );
};

export default ShoppingCartPage;