import React from "react";
import { CartItems } from "./CartItems";
import { ButtonMain } from "../../Components/Ui/ButtonMain";
import { cartContext } from "../../Store/CartContext";
import { ToastContainer } from "react-toastify";
import {
  successfullyDone,
  totalCartItems,
  totalPriceProducts,
} from "../../Logic/Logic";
import { TransitionButton } from "../../Components/Ui/TransitionButton";
export const Cart = () => {
  const { removeAllItemsToCartHandler, cartMeals } = cartContext();

  const handleAllItemsRemoveToCart = () => {
    successfullyDone("successfully remove to cart");
    removeAllItemsToCartHandler();
  };
  return (
    <>
      <div className="lg:h-lvh m-auto grid place-items-center mt-10">
        <div className="container grid gap-15 grid-cols-6 w-full">
          <div className="grid col-span-6 m-2 lg:col-span-4 h-130 background-cart p-2">
            <h2 className="text-center text-4xl font-bold main-font text-main-color my-5">
              My Cart
            </h2>

            {cartMeals.length === 0 ? (
              <h4 className="main-font text-2xl md:text-3xl text-main-color text-center">
                Your shopping basket is empty,
                <br /> please add some meals.
              </h4>
            ) : (
              <div className="grid place-items-center h-88 overflow-y-auto mt-2">
                <CartItems />
              </div>
            )}

            {cartMeals.length !== 0 && (
              <ButtonMain
                onClick={handleAllItemsRemoveToCart}
                className={"m-2 h-10"}
              >
                clear
              </ButtonMain>
            )}
          </div>

          <div className="grid w-full lg:max-w-88 col-span-4 sm:col-span-3 ms-4 lg:col-span-2 background-cart mb-15 mt-10 p-1 md:h-60">
            <h2 className="text-center w-60 font-bold text-3xl text-main-color second-font my-2">
              Total Prise : {totalPriceProducts(cartMeals)}
            </h2>
            <p className="text-center font-extralight text-1xl text-main-color">
              The price includes tax
            </p>
            <hr className="h-0.5 m-5 bg-main-color" />
            <h2 className="text-center font-bold text-main-color second-font my-2">
              Total Meals Quantity : {totalCartItems(cartMeals)}
            </h2>
            <TransitionButton className={"w-48 lg:w-80 m-auto"} path={"../../checkout"}>
              CheckOut
            </TransitionButton>
          </div>
        </div>
        <ToastContainer />
      </div>
    </>
  );
};
