import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { EffectCoverflow, Pagination } from "swiper/modules";
import { sliderImages } from "./information";

export const MealsSlider = () => {
  return (
    <div className="bg-meals-slider p-5 main-shadow shadow-main-color">
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
        dir='ltr'
        pagination={false}
        modules={[EffectCoverflow, Pagination]}
       
        className="mySwiper"
      >
        {sliderImages.map(({ image }, index) => {
          return (
            <SwiperSlide key={index}>
              <img src={image} alt="pizza" className="h-48"/>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
