import React from "react";
import pizza from "../../assets/images/pizza.avif";
import { Slider } from "./Slider";
import { Link } from "react-router-dom";
import { SwiperSlide } from "swiper/react";
// Import Swiper React components
/*

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

export const SomeMeals = () => {
  return (
    <div className="h-150">
      <Swiper
        spaceBetween={20}
        slidesPerView={4}
        centeredSlides={false}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper h-150"
      >
      */
export const SomeMeals = () => {
  return (
    <div className="h-150">
      <Slider
        className={"h-150"}
        navigation={true}
        slidesPerView={4}
        spaceBetween={20}
      >
        <SwiperSlide>
          <div className="bg-second-color">
            <img src={pizza} alt="pizza" className="h-full" />

            <div className="p-4">
              <h2 className="font-medium">pizza</h2>
              <p className="p-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Tenetur, sed.
              </p>
              <Link to={"../../detailsMeal"}>
                <button className="bg-main-color text-second-color px-7 py-2 rounded-main-radius cursor-pointer hover:bg-second-color border-2 border-b-fuchsia-950 hover:text-main-color transition duration-700">
                  add to cart
                </button>
              </Link>
              <span className="ms-5 text-2xl"> 28$ </span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-second-color">
            <img src={pizza} alt="pizza" className="h-full" />

            <div className="p-4">
              <h2 className="font-medium">pizza</h2>
              <p className="p-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Tenetur, sed.
              </p>
              <Link to={"../../detailsMeal"}>
                <button className="bg-main-color text-second-color px-7 py-2 rounded-main-radius cursor-pointer hover:bg-second-color border-2 border-b-fuchsia-950 hover:text-main-color transition duration-700">
                  add to cart
                </button>
              </Link>
              <span className="ms-5 text-2xl"> 28$ </span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-second-color">
            <img src={pizza} alt="pizza" className="h-full" />

            <div className="p-4">
              <h2 className="font-medium">pizza</h2>
              <p className="p-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Tenetur, sed.
              </p>
              <Link to={"../../detailsMeal"}>
                <button className="bg-main-color text-second-color px-7 py-2 rounded-main-radius cursor-pointer hover:bg-second-color border-2 border-b-fuchsia-950 hover:text-main-color transition duration-700">
                  add to cart
                </button>
              </Link>
              <span className="ms-5 text-2xl"> 28$ </span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-second-color">
            <img src={pizza} alt="pizza" className="h-full" />

            <div className="p-4">
              <h2 className="font-medium">pizza</h2>
              <p className="p-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Tenetur, sed.
              </p>
              <Link to={"../../detailsMeal"}>
                <button className="bg-main-color text-second-color px-7 py-2 rounded-main-radius cursor-pointer hover:bg-second-color border-2 border-b-fuchsia-950 hover:text-main-color transition duration-700">
                  add to cart
                </button>
              </Link>
              <span className="ms-5 text-2xl"> 28$ </span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-second-color">
            <img src={pizza} alt="pizza" className="h-full" />

            <div className="p-4">
              <h2 className="font-medium">pizza</h2>
              <p className="p-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Tenetur, sed.
              </p>
              <Link to={"../../detailsMeal"}>
                <button className="bg-main-color text-second-color px-7 py-2 rounded-main-radius cursor-pointer hover:bg-second-color border-2 border-b-fuchsia-950 hover:text-main-color transition duration-700">
                  add to cart
                </button>
              </Link>
              <span className="ms-5 text-2xl"> 28$ </span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-second-color">
            <img src={pizza} alt="pizza" className="h-full" />

            <div className="p-4">
              <h2 className="font-medium">pizza</h2>
              <p className="p-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Tenetur, sed.
              </p>
              <Link to={"../../detailsMeal"}>
                <button className="bg-main-color text-second-color px-7 py-2 rounded-main-radius cursor-pointer hover:bg-second-color border-2 border-b-fuchsia-950 hover:text-main-color transition duration-700">
                  add to cart
                </button>
              </Link>
              <span className="ms-5 text-2xl"> 28$ </span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-second-color">
            <img src={pizza} alt="pizza" className="h-full" />

            <div className="p-4">
              <h2 className="font-medium">pizza</h2>
              <p className="p-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Tenetur, sed.
              </p>
              <Link to={"../../detailsMeal"}>
                <button className="bg-main-color text-second-color px-7 py-2 rounded-main-radius cursor-pointer hover:bg-second-color border-2 border-b-fuchsia-950 hover:text-main-color transition duration-700">
                  add to cart
                </button>
              </Link>
              <span className="ms-5 text-2xl"> 28$ </span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-second-color">
            <img src={pizza} alt="pizza" className="h-full" />

            <div className="p-4">
              <h2 className="font-medium">pizza</h2>
              <p className="p-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Tenetur, sed.
              </p>
              <Link to={"../../detailsMeal"}>
                <button className="bg-main-color text-second-color px-7 py-2 rounded-main-radius cursor-pointer hover:bg-second-color border-2 border-b-fuchsia-950 hover:text-main-color transition duration-700">
                  add to cart
                </button>
              </Link>
              <span className="ms-5 text-2xl"> 28$ </span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-second-color">
            <img src={pizza} alt="pizza" className="h-full" />

            <div className="p-4">
              <h2 className="font-medium">pizza</h2>
              <p className="p-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Tenetur, sed.
              </p>
              <Link to={"../../detailsMeal"}>
                <button className="bg-main-color text-second-color px-7 py-2 rounded-main-radius cursor-pointer hover:bg-second-color border-2 border-b-fuchsia-950 hover:text-main-color transition duration-700">
                  add to cart
                </button>
              </Link>
              <span className="ms-5 text-2xl"> 28$ </span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-second-color">
            <img src={pizza} alt="pizza" className="h-full" />

            <div className="p-4">
              <h2 className="font-medium">pizza</h2>
              <p className="p-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Tenetur, sed.
              </p>
              <Link to={"../../detailsMeal"}>
                <button className="bg-main-color text-second-color px-7 py-2 rounded-main-radius cursor-pointer hover:bg-second-color border-2 border-b-fuchsia-950 hover:text-main-color transition duration-700">
                  add to cart
                </button>
              </Link>
              <span className="ms-5 text-2xl"> 28$ </span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-second-color">
            <img src={pizza} alt="pizza" className="h-full" />

            <div className="p-4">
              <h2 className="font-medium">pizza</h2>
              <p className="p-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Tenetur, sed.
              </p>
              <Link to={"../../detailsMeal"}>
                <button className="bg-main-color text-second-color px-7 py-2 rounded-main-radius cursor-pointer hover:bg-second-color border-2 border-b-fuchsia-950 hover:text-main-color transition duration-700">
                  add to cart
                </button>
              </Link>
              <span className="ms-5 text-2xl"> 28$ </span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-second-color">
            <img src={pizza} alt="pizza" className="h-full" />

            <div className="p-4">
              <h2 className="font-medium">pizza</h2>
              <p className="p-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Tenetur, sed.
              </p>
              <Link to={"../../detailsMeal"}>
                <button className="bg-main-color text-second-color px-7 py-2 rounded-main-radius cursor-pointer hover:bg-second-color border-2 border-b-fuchsia-950 hover:text-main-color transition duration-700">
                  add to cart
                </button>
              </Link>
              <span className="ms-5 text-2xl"> 28$ </span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-second-color">
            <img src={pizza} alt="pizza" className="h-full" />

            <div className="p-4">
              <h2 className="font-medium">pizza</h2>
              <p className="p-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Tenetur, sed.
              </p>
              <Link to={"../../detailsMeal"}>
                <button className="bg-main-color text-second-color px-7 py-2 rounded-main-radius cursor-pointer hover:bg-second-color border-2 border-b-fuchsia-950 hover:text-main-color transition duration-700">
                  add to cart
                </button>
              </Link>
              <span className="ms-5 text-2xl"> 28$ </span>
            </div>
          </div>
        </SwiperSlide>
      </Slider>
    </div>
  );
};
