import React from 'react'
//import chef from "../../assets/images/chicken.png";
export const MainSection = () => {
  return (
    <div className="mt-10 grid ">
    <div className="container grid grid-cols-2 gap-7">
        <div className="grid place-content-center ms-5 col-span-2 md:col-span-1">
          <h1 className=" main-font text-center font-bold p-3 text-3xl animate__animated  animate__fadeInLeft">
            Welcome! We’re delighted to have you with us today. Relax,
            enjoy, and let us take care of the rest.”
          </h1>
        </div>

        <div className="grid col-span-2 md:col-span-1 animate__animated animate__fadeInRight">
          <img src='/chicken.webp' alt="chef"/>
        </div>
    </div>
  </div>
  )
}
