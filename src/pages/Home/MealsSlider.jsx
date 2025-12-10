import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";
import { sliderImages } from "./information";

export const MealsSlider = () => {
  return (
    <div className="bg-second-color main-shadow shadow-main-color">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={false}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {sliderImages.map(({ image }, index) => {
          return (
            <SwiperSlide key={index}>
              <img src={image} alt="pizza" className="h-full" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
