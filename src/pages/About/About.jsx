import React from "react";
import October from "../../assets/images/October.webp";
import { useTranslation } from "react-i18next";

export const About = () => {
const { t } = useTranslation()

  return (
    <div className="grid grid-cols-7 grid-rows-2 p-5 gap-1 mt-25">
      <div className="grid col-span-7 h-72 md:col-span-7 lg:col-span-3 bg-main-color">
        <img src={October} alt="October" className='w-full h-full'/>
      </div>

      <div className="md:p-5 col-span-7 md:col-span-7 lg:col-span-4 ">
        <h1 className="text-4xl font-bold">{t('Establishment')}</h1>
        <p className="md:p-5 second-font text-2xl"> {t("Text About")}</p>
      </div>

      <div className="md:p-5 col-span-7 md:col-span-7 lg:col-span-4">
        <h1 className="text-4xl font-bold">{t('Establishment')}</h1>
        <p className="md:p-5 second-font text-2xl"> {t("Text About")}</p>
      </div>

      <div className="grid col-span-7 md:col-span-7 lg:col-span-3">
        <img src={October} alt="October" className='w-full h-full'/>
      </div>
    </div>
  );
};
