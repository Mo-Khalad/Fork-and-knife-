import React from "react";
import { ButtonMain } from "../../Components/Ui/ButtonMain";

export const CheckOut = () => {
  return (
    <diV className="w-full">
      <div className="container p-15">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-4xl main-font text-main-color text-center">
            Check Out
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label
                for="first-name"
                className="block text-sm/6 font-medium text-gray-900"
              >
                First name
              </label>
              <div className="mt-2">
                <input
                  id="first-name"
                  type="text"
                  name="first-name"
                  autocomplete="given-name"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-main-color sm:text-sm/6"
                />
              </div>
            </div>
            <div className="sm:col-span-3">
              <label
                for="last-name"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Last name
              </label>
              <div className="mt-2">
                <input
                  id="last-name"
                  type="text"
                  name="last-name"
                  autocomplete="family-name"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-main-color sm:text-sm/6"
                />
              </div>
            </div>
            <div className="sm:col-span-4">
              <label
                for="email"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  type="email"
                  name="email"
                  autocomplete="email"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-main-color sm:text-sm/6"
                />
              </div>
            </div>
            <div className="sm:col-span-3">
              <label
                for="country"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Country
              </label>
              <div className="mt-2 grid grid-cols-1">
                <select
                  id="country"
                  name="country"
                  autocomplete="country-name"
                  className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-main-color sm:text-sm/6"
                >
                  <option>United States</option>
                  <option>Canada</option>
                  <option>Mexico</option>
                </select>
                <svg
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  data-slot="icon"
                  aria-hidden="true"
                  className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                >
                  <path
                    d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z"
                    clip-rule="evenodd"
                    fill-rule="evenodd"
                  />
                </svg>
              </div>
            </div>
            <div className="col-span-full">
              <label
                for="street-address"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Street address
              </label>
              <div className="mt-2">
                <input
                  id="street-address"
                  type="text"
                  name="street-address"
                  autocomplete="street-address"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-main-color sm:text-sm/6"
                />
              </div>
            </div>
            <div className="sm:col-span-2 sm:col-start-1">
              <label
                for="city"
                className="block text-sm/6 font-medium text-gray-900"
              >
                City
              </label>
              <div className="mt-2">
                <input
                  id="city"
                  type="text"
                  name="city"
                  autocomplete="address-level2"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-main-color sm:text-sm/6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                for="region"
                className="block text-sm/6 font-medium text-gray-900"
              >
                first phone
              </label>
              <div className="mt-2">
                <input
                  id="region"
                  type="text"
                  name="region"
                  autocomplete="address-level1"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-main-color sm:text-sm/6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                for="postal-code"
                className="block text-sm/6 font-medium text-gray-900"
              >
                last phone
              </label>
              <div className="mt-2">
                <input
                  id="postal-code"
                  type="text"
                  name="postal-code"
                  autocomplete="postal-code"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-main-color sm:text-sm/6"
                />
              </div>
            </div>
            <ButtonMain className={"w-40"}>Check out</ButtonMain>
          </div>
        </div>
      </div>
    </diV>
  );
};
