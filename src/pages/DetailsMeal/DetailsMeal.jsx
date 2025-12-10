import React from "react";
import img from "../../assets/images/October.webp";
import { Link } from "react-router-dom";
import pizza from "../../assets/images/pizza.avif";

export const DetailsMeal = () => {
  return (
    <>
      <div className="grid grid-cols-8 p-5 lg:h-120 w-full">
        <div className="col-span-7 lg:col-span-4 mt-15">
          <img src={img} alt="img" className="place-self-center" />
        </div>

        <div className="p-4 col-span-7 lg:col-span-4 ">
          <h1 className="text-4xl font-bold main-font text-main-color mt-5 text-center mb-15">
            Pizza
          </h1>
          <h2 className="text-4xl font-bold second-font">50$</h2>

          <p className="p-5 second-font text-2xl">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            repellendus maiores perferendis eos, magnam expedita ratione
            repellat excepturi necessitatibus quis eaque odio facere adipisci
            laboriosam in corrupti, id debitis hic quisquam eligendi aspernatur
            incidunt quae.
          </p>

          <Link
            to={"../../cart"}
            className="bg-main-color text-second-color px-10 py-2 rounded-main-radius cursor-pointer border-b-fuchsia-950 hover:text-main-color  hover:bg-neutral-400 transition duration-700"
          >
            add to cart
          </Link>
        </div>
      </div>

      <h2 className="grid col-span-8 text-2xl md:text-4xl font-bold main-font text-main-color my-20 text-center">
        Other meals of the same type
      </h2>

      <div className="grid grid-cols-8 p-5 gap-20 lg:h-100">
        <div className="bg-second-color col-span-5 sm:col-span-4 md:col-span-2 main-shadow rounded-main-radius min-90 ">
          <img src={pizza} alt="pizza" className="min-h-50" />

          <div className="p-3">
            <h2 className="font-medium m-1">pizza</h2>
            <p className="line-clamp-2 p-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
              sed.
            </p>
            <Link to={"../../DetailsMeal"}>
              <button className="bg-main-color text-second-color px-7 py-2 rounded-main-radius cursor-pointer hover:bg-second-color border-2 border-b-fuchsia-950 hover:text-main-color transition duration-700">
                add to cart
              </button>
            </Link>
            <span className="ms-1 text-2xl"> 28$ </span>
          </div>
        </div>

        <div className="bg-second-color col-span-5 sm:col-span-4 md:col-span-2 main-shadow rounded-main-radius min-90 ">
          <img src={pizza} alt="pizza" className="min-h-50" />

          <div className="p-3">
            <h2 className="font-medium m-1">pizza</h2>
            <p className="line-clamp-2 p-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
              sed.
            </p>
            <Link to={"../../DetailsMeal"}>
              <button className="bg-main-color text-second-color px-7 py-2 rounded-main-radius cursor-pointer hover:bg-second-color border-2 border-b-fuchsia-950 hover:text-main-color transition duration-700">
                add to cart
              </button>
            </Link>
            <span className="ms-1 text-2xl"> 28$ </span>
          </div>
        </div>

        <div className="bg-second-color col-span-5 sm:col-span-4 md:col-span-2 main-shadow rounded-main-radius min-90 ">
          <img src={pizza} alt="pizza" className="min-h-50" />

          <div className="p-3">
            <h2 className="font-medium m-1">pizza</h2>
            <p className="line-clamp-2 p-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
              sed.
            </p>
            <Link to={"../../DetailsMeal"}>
              <button className="bg-main-color text-second-color px-7 py-2 rounded-main-radius cursor-pointer hover:bg-second-color border-2 border-b-fuchsia-950 hover:text-main-color transition duration-700">
                add to cart
              </button>
            </Link>
            <span className="ms-1 text-2xl"> 28$ </span>
          </div>
        </div>

        <div className="bg-second-color col-span-5 sm:col-span-4 md:col-span-2 main-shadow rounded-main-radius min-90 ">
          <img src={pizza} alt="pizza" className="min-h-50" />

          <div className="p-3">
            <h2 className="font-medium m-1">pizza</h2>
            <p className="line-clamp-2 p-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
              sed.
            </p>
            <Link to={"../../DetailsMeal"}>
              <button className="bg-main-color text-second-color px-7 py-2 rounded-main-radius cursor-pointer hover:bg-second-color border-2 border-b-fuchsia-950 hover:text-main-color transition duration-700">
                add to cart
              </button>
            </Link>
            <span className="ms-1 text-2xl"> 28$ </span>
          </div>
        </div>
      </div>
    </>
  );
};
