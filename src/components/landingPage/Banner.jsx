import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const SwiperCarousel = () => {
  const slides = [
    "https://authentic-shoes.com/wp-content/uploads/2024/12/20241125021852-0.webp",
    "https://authentic-shoes.com/wp-content/uploads/2024/10/20240926111113-0.webp",
    "https://authentic-shoes.com/wp-content/uploads/2024/09/20240904091932-1.webp",
    "https://authentic-shoes.com/wp-content/uploads/2024/01/AJ1_Yellow_Ochre_Release_DayPrim-2048x625.webp",
    "https://authentic-shoes.com/wp-content/uploads/2024/12/Giay-Nau.webp"
  ];
  return (
    <section className="bg-gray-100 lg:mx-24 lg:my-8 rounded-xl">
      <div className="">
        <Swiper
           spaceBetween={30}
           centeredSlides={true}
           autoplay={{
             delay: 2500,
             disableOnInteraction: false,
           }}
           pagination={{
             clickable: true,
           }}
           navigation={true}
           modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper w-full h-[50vh]"
        >
          {slides.map((imageUrl, index) => (
            <SwiperSlide
              key={index}
              className="flex items-center justify-center"
            >
              <div className="w-full h-full flex items-center justify-center">
                <img
                  src={imageUrl}
                  alt={`Slide ${index + 1}`}
                  className="w-full max-h-full object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default SwiperCarousel;
