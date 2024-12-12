
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


const ProductCarousel = ({ productImages }) => {
  return (
    <div className='w-3/4'>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        className=""
      >
        {productImages.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image}
              alt={`Product Slide ${index + 1}`}
              className=" object-contain rounded-lg"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductCarousel;

