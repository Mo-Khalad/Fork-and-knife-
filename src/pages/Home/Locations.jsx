import React, { useEffect } from "react";
import { informationLocation } from "./information";
import { useTranslation } from "react-i18next";
import 'aos/dist/aos.css';
import Aos from "aos";

export const Locations = () => {
  const { t } = useTranslation()
  useEffect(() => {
    Aos.init({
      duration: 600,
      easing: "ease-in-out",
      once: false,  
      mirror: true,
    });
  }, []);

  return (
    <div className="w-full overflow-x-hidden"> 
        <h2 className="text-center text-5xl font-bold main-font m-5">
         {t('Locations')}
        </h2>
        <div className="container grid grid-cols-1 sm:grid-cols-2 m-auto gap-8 p-7">
          {informationLocation.map(({ name, image, Street }, index) => {
            return (
              <div
                className="bg-second-color rounded-main-radius main-shadow" data-aos={`${ (index === 0 || index === 2 ) ? 'fade-right':'fade-left'}`}
                key={index}
              >
                <img src={image} alt="location" className="w-full h-auto"/>
                <h3 className="font-extrabold text-1xl p-3">{t("city")} : {t(name)}</h3>
                <p className="font-sans p-3 line-clamp-3">{t(Street)}</p>
              </div>
            );
          })}
        </div>
      
    </div>
  );
};
