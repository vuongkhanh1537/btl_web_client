import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/scrollbar';
import { FreeMode, Scrollbar } from "swiper/modules";
import { products } from "../../service/sampleData";
import ProductCard from "./ProductCard";

const RecommendProduct = () => {
return (
    <>
    <section className="py-4 lg:mx-24 lg:my-8">
    <div className="container mx-auto">
        <div className="text-3xl font-semibold mb-8">Recommend for you</div>
        <Swiper
            breakpoints={{
                640: {
                    slidesPerView: 2,
                    spaceBetween: 10
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 15
                },
                1024: {
                    slidesPerView: 4,
                    spaceBetween: 5
                },
                1280: {
                    slidesPerView: 5,
                    spaceBetween: 5
                },

            }}
            scrollbar={{
                hide: true,
            }}
            modules={[Scrollbar, FreeMode]}
            className="mySwiper h-[45vh] px-4"
        >
            {products.map((product) => (
                <SwiperSlide>
                    <ProductCard key={product.id} product={product} />
                </SwiperSlide>
            ))}
        </Swiper>
            </div>
            </section>
    </>
);
};

export default RecommendProduct;
