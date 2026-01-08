import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "leaflet/dist/leaflet.css";
import { Map } from "../../Components/Map";
import { PickLocation } from "../../Components/PickLocation";
import { LeafletGeocoder } from "./LeafletGeocoder";
import { useTranslation } from "react-i18next";
import { CartContext } from "../../Store/CartContext";
import { successfullyDone } from "../../Logic/Logic";
import { useNetwork } from "../../hooks/useNetwork";
import { NetworkError } from "../Error/NetworkError";

export const CheckOut = () => {
  const { t } = useTranslation();
  const isOnline = useNetwork();
  const { removeAllItemsToCartHandler } = CartContext();
  const navigate = useNavigate();
  const [pickLocation, setPickLocation] = useState({
    lat: 30.0444,
    lng: 31.2357,
  });
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          setPickLocation({
            lat: latitude,
            lng: longitude,
          });
        },
        (error) => {
          console.error(error);
        }
      );
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("../");
    removeAllItemsToCartHandler();
    successfullyDone(t("successfully"));
  };

  return (
    <>
      {isOnline ? (
        <div className="w-full mt-25 second-font">
          <div className="container p-15">
            <div className="border-b border-gray-900/10 pb-12">
              <h2 className="text-4xl main-font text-main-color text-center">
                {t("Check Out")}
              </h2>

              <div className="w-full gap-10">
                <Map
                  position={[pickLocation?.lat, pickLocation?.lng]}
                  zoom={16}
                  className={"locationMap"}
                >
                  <PickLocation
                    setPickLocation={setPickLocation}
                    pickLocation={pickLocation}
                  />
                  <LeafletGeocoder setPickLocation={setPickLocation} />
                </Map>
              </div>

              <form
                onSubmit={handleSubmit}
                className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6"
              >
                <div className="sm:col-span-3">
                  <label
                    htmlFor="first-name"
                    className="block text-sm/6 font-medium text-gray-900"
                  >
                    {t("name")}
                  </label>
                  <div className="mt-2">
                    <input
                      id="first-name"
                      type="text"
                      name="first-name"
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-main-color sm:text-sm/6"
                      required
                    />
                  </div>
                </div>
                <div className="sm:col-span-3">
                  <label
                    htmlFor="email"
                    className="block text-sm/6 font-medium text-gray-900"
                  >
                    {t("Email address")}
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      type="email"
                      name="email"
                      required
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-main-color sm:text-sm/6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-3">
                  <label
                    htmlFor="country"
                    className="block text-sm/6 font-medium text-gray-900"
                  >
                    {t("Country")}
                  </label>
                  <div className="mt-2 grid grid-cols-1">
                    <select
                      required
                      id="country"
                      name="country"
                      className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-main-color sm:text-sm/6"
                    >
                      <option>United States</option>
                      <option>Canada</option>
                      <option>Mexico</option>
                    </select>
                    <svg
                      viewBox="0 0 16 16"
                      fillRule="currentColor"
                      data-slot="icon"
                      aria-hidden="true"
                      className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                    >
                      <path d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z" />
                    </svg>
                  </div>
                </div>

                <div className="sm:col-span-3 sm:col-start-1">
                  <label
                    htmlFor="city"
                    className="block text-sm/6 font-medium text-gray-900"
                  >
                    {t("city")}
                  </label>
                  <div className="mt-2">
                    <input
                      id="city"
                      type="text"
                      name="city"
                      required
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-main-color sm:text-sm/6"
                    />
                  </div>
                </div>

                <div className="w-full  sm:col-span-3">
                  <label
                    htmlFor="phone"
                    className="block text-sm/6 font-medium text-gray-900"
                  >
                    {t("phone")}
                  </label>
                  <div className="mt-2">
                    <input
                      required
                      id="phone"
                      type="text"
                      name="phone"
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-main-color sm:text-sm/6"
                    />
                  </div>
                </div>

                <button
                  className={
                    "w-40 bg-main-color mt-5 h-10 text-second-color rounded-main-radius px-4 py-2 "
                  }
                >
                  {t("Check Out")}
                </button>

              </form>
            </div>
          </div>
        </div>
      ) : (
        <NetworkError />
      )}
    </>
  );
};
