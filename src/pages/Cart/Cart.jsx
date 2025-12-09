import React from "react";
import { CartItems } from "./CartItems";
import { Link } from "react-router-dom";
export const Cart = () => {
  return (
    <div className="lg:h-lvh m-auto grid place-items-center mt-10">
      <div className="container grid grid-cols-9 gap-3">
        <div className="grid col-span-9 lg:col-span-6 h-130 background-cart p-2 ">
          <h2 className="text-center text-4xl font-bold main-font text-main-color my-8">
            My Cart
          </h2>
          <div className="grid place-items-center gap-3 overflow-y-scroll">
            <CartItems />
            <CartItems />
            <CartItems />
            <CartItems />
            <CartItems />
          </div>
          <button className="my-3 text-1xl bg-main-color text-second-color px-10 py-2 rounded-main-radius cursor-pointer border-b-fuchsia-950 hover:text-main-color  hover:bg-neutral-400 transition duration-700">
            clear
          </button>
        </div>

        <div className="grid col-end-9 col-span-6 lg:col-span-2 background-cart mb-15 mt-10 p-2 md:h-38 lg:col-end-10">
          <h2 className="text-center font-bold text-3xl text-main-color second-font my-2">
            Total Prise : 1200$
          </h2>
          <p className="text-center font-extralight text-1xl text-main-color">
            The price includes tax
          </p>
          <Link to={"../../checkout"}>
            <button className="h-10 bg-main-color w-full text-second-color px-7 py-2 rounded-main-radius cursor-pointer hover:bg-second-color border-2 border-b-fuchsia-950 hover:text-main-color transition duration-700">
              Check Out
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
