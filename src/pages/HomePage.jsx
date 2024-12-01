import React, { useState } from 'react'
import Banner from '../components/landingPage/Banner';
import { products } from '../service/sampleData';
import RecommendProduct from '../components/landingPage/RecommendProduct';
import ParallaxImg from '../components/landingPage/ParallaxImg';
import CategoryDisplay from '../components/landingPage/CategoryDisplay';

const HomePage = () => {
    return (
        <div>
            <Banner />
            <CategoryDisplay />
            <ParallaxImg />
            <RecommendProduct />
        </div>
    )
}

export default HomePage;