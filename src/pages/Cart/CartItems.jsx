import React from "react";

export const CartItems = () => {
  return (
    <div className=" w-3xl rounded-main-radius grid grid-cols-8 p-1 mb-2 bg-second-color">
      <div className="grid grid-cols-2 col-span-2 m-2">
        <ul>
          <li>
            <img src="https://swiperjs.com/demos/images/nature-4.jpg" width={90}
            />
          </li>
        </ul>
        <ul>
          <li className="mt-4 ms-4 text-2xl font-black text-main-color second-font">
            pizza
          </li>
          <li className="mt-1 ms-4 text-2xl font-bold text-main-color second-font">
            50$
          </li>
        </ul>
      </div>
      <div className=" col-span-2 col-end-9 w-1xl grid place-content-center">
        <ul className="bg-pink-100 opacity-100 py-2 w-33 px-4 grid grid-cols-3 gap-2 mb-3">
          <li>
            <i className="fa-solid fa-plus text-main-color hover:p-1"></i>
          </li>
          <li className="ms-2 text-main-color">5</li>
          <li>
            <i className="fa-solid fa-minus text-main-color hover:p-1"></i>
          </li>
        </ul>

        <button className="bg-main-color text-second-color px-10 py-2 rounded-main-radius cursor-pointer border-b-fuchsia-950 hover:text-main-color  hover:bg-neutral-400 transition duration-700">
          remove
        </button>
      </div>
    </div>
  );
};
