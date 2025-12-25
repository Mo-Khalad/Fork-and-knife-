import React, { useEffect } from "react";
import { informationLocation } from "./information";
import 'aos/dist/aos.css';
import Aos from "aos";

export const Locations = () => {
  useEffect(() => {
    Aos.init({
      duration: 2000,
      easing: "ease-in-out",
      once: false,  
      mirror: true,
    });
  }, []);

  return (
    <>
      <div className={`w-full gird place-content-center`}>
        <h2 className="text-center text-5xl font-bold main-font m-5">
          Locations
        </h2>
        <div className="container grid grid-cols-1 sm:grid-cols-2 gap-8 m-auto p-7">
          {informationLocation.map(({ name, image, paragraph }, index) => {
            return (
              <div
                className="bg-second-color rounded-main-radius main-shadow" data-aos={`${ (index === 0 || index === 2 ) ? 'fade-right':'fade-left'}`}
                key={index}
              >
                <img src={image} alt="location" className="w-full" />

                <h3 className="font-extrabold text-1xl p-3">names : {name}</h3>
                <p className="font-sans p-1 line-clamp-3">{paragraph}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
