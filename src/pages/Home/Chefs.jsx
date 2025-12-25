import React, { useEffect } from "react";
import { informationChefs } from "./information";
import Aos from "aos";

export const Chefs = () => {
  useEffect(() => {
    Aos.init({
      duration: 600,
      easing: "ease-in-out",
      once: false,  
      mirror: true,
    });
  }, []);
  return (
    <>
      <div className={`w-full gird place-content-center`}>
        <h2 className="text-center text-5xl font-bold main-font m-5">Chefs</h2>
        <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ls:grid-col-4 gap-4 m-auto p-7">
          {informationChefs.map(({ name, image, paragraph }, index) => {
            return (
              <div
                className="rounded-main-radius main-shadow p-3 bg-second-color"
                data-aos="zoom-in-up"
                key={index}
              >
                <img src={image} alt="chef" className="min-h-65" />

                <h3 className="font-extrabold text-1xl p-2">names : {name}</h3>
                <p className="font-sans">{paragraph}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
