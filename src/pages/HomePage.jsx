import React, { useState } from 'react'
import Banner from '../components/landingPage/Banner';
import { products } from '../services/sampleData';
import ParallaxImg from '../components/landingPage/ParallaxImg';
import CategoryDisplay from '../components/landingPage/CategoryDisplay';
import { getProductsByCategory } from '@/utils/ProductUtils';
import { useHome } from '@/providers/HomeProvider';
import SwiperProducts from '../components/landingPage/SwiperProducts';

const HomePage = () => {
    const { products } = useHome();
    return (
        <div>
            <Banner />
            <CategoryDisplay />
            <SwiperProducts title='New arrivals' products={getProductsByCategory(products, 'all', 10, 10)}/>
            <ParallaxImg img={"https://authentic-shoes.com/wp-content/uploads/2023/09/image-54-2048x711-2.webp"}/>
            <SwiperProducts title='Boost your style' products={getProductsByCategory(products, 'Unisex', 10, 10)}/>
            <ParallaxImg img={'src/assets/parallax.avif'}/>
            <SwiperProducts title='Recommend for you' products={getProductsByCategory(products, 'all', 10)}/>
        </div>
    )
}

export default HomePage;