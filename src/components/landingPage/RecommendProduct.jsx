import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Scrollbar, A11y } from "swiper/modules";
import { products } from "../../service/sampleData";
import ProductCard from "./ProductCard";

// Import required Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/free-mode';

const RecommendProduct = () => {
  return (
    <section className="w-full py-6 md:py-8 lg:py-12">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-6 md:mb-8">
          Recommend for you
        </h2>
        
        <Swiper
          breakpoints={{
            // Mobile first approach
            320: {
              slidesPerView: 1.3,
              spaceBetween: 12
            },
            480: {
              slidesPerView: 1.8,
              spaceBetween: 15
            },
            640: {
              slidesPerView: 2.2,
              spaceBetween: 20
            },
            768: {
              slidesPerView: 2.5,
              spaceBetween: 24
            },
            1024: {
              slidesPerView: 3.5,
              spaceBetween: 24
            },
            1280: {
              slidesPerView: 4.5,
              spaceBetween: 26
            },
            1500: {
              slidesPerView: 5,
              spaceBetween: 28
            },
          }}
          freeMode={{
            enabled: true,
            sticky: false,
            momentumBounce: false
          }}
          scrollbar={{
            hide: false,
            dragSize: 100
          }}
          modules={[Scrollbar, FreeMode, A11y]}
          className="w-full h-auto"
          slideToClickedSlide={true}
          watchSlidesProgress={true}
          grabCursor={true}
        >
          {products.map((product, index) => (
            <SwiperSlide 
              key={index}
              className="h-full"
            >
              <div className="h-full pb-8"> {/* Padding bottom for scrollbar */}
                <ProductCard product={product} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default RecommendProduct;