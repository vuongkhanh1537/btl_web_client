import React, { useState } from 'react';
import { Minus, Plus, Trash2 } from 'lucide-react';
import ShoppingCart from '@/components/ShoppingCart';
import RecommendProduct from '@/components/landingPage/RecommendProduct';

const ShoppingCartPage = () => {
  return (
    <div className="min-h-screen">
      <ShoppingCart />
      <RecommendProduct />
    </div>
  );
};

export default ShoppingCartPage;