
// import ExampleCarouselImage from 'components/ExampleCarouselImage';

// function ImageSlider() {
//   return (
//     <div id="carouselExampleIndicators" class="carousel slide">
//   <div class="carousel-indicators">
//     <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
//     <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
//     <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
//   </div>
//   <div class="carousel-inner">
//     <div class="carousel-item active">
//       <img src={productImage} class="d-block w-100" alt="..." />
//     </div>
//     <div class="carousel-item">
//       <img src={productImage} class="d-block w-100" alt="..." />
//     </div>
//     <div class="carousel-item">
//       <img src={productImage} class="d-block w-100" alt="..." />
//     </div>
//   </div>
//   <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
//     <span class="carousel-control-prev-icon" aria-hidden="true"></span>
//     <span class="visually-hidden">Previous</span>
//   </button>
//   <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
//     <span class="carousel-control-next-icon" aria-hidden="true"></span>
//     <span class="visually-hidden">Next</span>
//   </button>
// </div>

//   );
// }
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

