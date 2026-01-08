import React, { useEffect } from "react";
import { informationChefs } from "./information";
import { useTranslation } from "react-i18next";

import Aos from "aos";

export const Chefs = () => {
  const { t } = useTranslation();
  useEffect(() => {
    Aos.init({
      duration: 900,
      easing: "ease-in-out",
      once: false,
      mirror: true,
    });
  }, []);
  return (
    <>
      <div className={`gird place-content-center`}>
        <h2 className="text-center text-5xl font-bold main-font m-5">
          {t("chefs")}
        </h2>
        <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ls:grid-col-4 gap-4 m-auto p-7">
          {informationChefs.map(({ name, image, information_chef }, index) => {
            return (
              <div
                className="rounded-main-radius main-shadow p-3 bg-second-color"
                data-aos="zoom-in-up"
                key={index}
              >
                <img src={image} alt="chef" className="min-h-65 w-full h-65" />
                <h3 className="font-extrabold text-1xl p-2">
                  {t(name)}
                </h3>
                <p className="font-sans">{t(information_chef)}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
