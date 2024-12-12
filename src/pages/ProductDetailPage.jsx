import React, { useState, useEffect } from 'react';
import ProductInfo from '../components/productDetail/ProductInfo';
import ProductReviews from '../components/productDetail/ProductReview';
import { useLoaderData, useParams } from 'react-router-dom';
import { transformProductData } from '@/utils/ProductUtils';

const ProductDetailPage = () => {
  const data = useLoaderData();
  // console.log(transformProductData(data));
  // console.log(data);
  
  
  return (<>
    <ProductInfo productVariants={transformProductData(data)}/>
    <ProductReviews />
  </>);
}


export default ProductDetailPage;