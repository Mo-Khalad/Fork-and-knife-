import React from "react";
import { informationLocation } from "./information";

export const Locations = () => {
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
                className="bg-second-color rounded-main-radius main-shadow"
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
