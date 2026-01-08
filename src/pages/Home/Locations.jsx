import React, { useEffect } from "react";
import { informationLocation } from "./information";
import { useTranslation } from "react-i18next";
import "aos/dist/aos.css";
import Aos from "aos";

export const Locations = () => {
  const { t } = useTranslation();
  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <div className="w-full overflow-x-hidden">
      <h2 className="text-center text-5xl font-bold main-font m-5">
        {t("Locations")}
      </h2>
      <div className="container grid grid-cols-1 sm:grid-cols-2 m-auto gap-8 p-7">
        {informationLocation.map(({ name, image }, index) => {
          return (
            <div
              className="bg-second-color rounded-main-radius main-shadow"
              data-aos={`${
                index === 0 || index === 2 ? "fade-right" : "fade-left"
              }`}
              key={index}
            >
              <div className="h-96 hover:cursor-pointer ">
                <div className="absolute top-0 right-0 bottom-0 left-0 opacity-30 h-96 hover:bg-main-color transition duration-700"></div>
                <img src={image} alt="location" className="w-full h-full" />
              </div>
              <h3 className="font-extrabold text-1xl p-3">{t(name)}</h3>
              <p className="font-sans p-3 line-clamp-3">{t("Street")}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
