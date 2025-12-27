import React from 'react';
import { useTranslation } from "react-i18next";

export const MainSection = () => {
const { t } = useTranslation()
  return (
    <div className="mt-20 h-lvh grid justify-items-center">
    <div className="container grid grid-cols-2 gap-7">
        <div className="grid place-content-center ms-5 col-span-2 md:col-span-1">
          <h1 className=" main-font text-center font-bold p-3 text-3xl animate__animated  animate__fadeInLeft">
           { t("Welcome Message") }
          </h1>
        </div>

        <div className="grid col-span-2 md:col-span-1 animate__animated animate__fadeInRight">
          <img src='chicken.webp' alt="chicken" width={600}/>
        </div>
    </div>
  </div>
  )
}
