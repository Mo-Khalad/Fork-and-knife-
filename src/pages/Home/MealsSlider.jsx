import React from 'react'
import pizza from '../../assets/images/pizza.avif'
// Import Swiper React components
 import { Swiper, SwiperSlide } from 'swiper/react';

 // Import Swiper styles
 import 'swiper/css';
 import 'swiper/css/effect-coverflow';
 import 'swiper/css/pagination';
 
 import './styles.css';
 
 // import required modules
 import { EffectCoverflow, Pagination } from 'swiper/modules';

export const MealsSlider = () => {
 
  return (
    <div className='bg-second-color main-shadow shadow-main-color'>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={false}
        slidesPerView={'auto'}
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
        <SwiperSlide>
          <img src={pizza} alt='pizza' className="h-full" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={pizza} alt='pizza' className="h-full" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={pizza} alt='pizza' className="h-full" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={pizza} alt='pizza' className="h-full" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={pizza} alt='pizza' className="h-full" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={pizza} alt='pizza' className="h-full" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={pizza} alt='pizza' className="h-full" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={pizza} alt='pizza' className="h-full" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={pizza} alt='pizza' className="h-full" />
        </SwiperSlide>
      </Swiper>
    </div>
  );

 }
   