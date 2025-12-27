import React from "react";
import { CartItems } from "./CartItems";
import { ButtonMain } from "../../Components/Ui/ButtonMain";
import { cartContext } from "../../Store/CartContext";
import { ToastContainer } from "react-toastify";
import { useTranslation } from "react-i18next"
import {
  successfullyDone,
  totalCartMeals,
  totalPriceProducts,
} from "../../Logic/Logic";
import { TransitionButton } from "../../Components/Ui/TransitionButton";
export const Cart = () => {
  const { removeAllItemsToCartHandler, cartMeals } = cartContext();
  const { t } = useTranslation()
  const handleAllItemsRemoveToCart = () => {
    successfullyDone(t("successfully remove"));
    removeAllItemsToCartHandler();
  };
  return (
    <>
      <div className="lg:h-lvh m-auto grid place-items-center mt-10">
        <div className="container grid gap-15 grid-cols-6 w-full">
          <div className="grid col-span-6 m-2 lg:col-span-4 h-130 background-cart p-2">
            <h2 className="text-center text-4xl font-bold main-font text-main-color my-5">
             {t("My Cart")}
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
                className={"m-2 h-10 w-40"}
              >
               {t("All Delete")}
              </ButtonMain>
            )}
          </div>

          <div className="grid w-full lg:max-w-88 col-span-4 sm:col-span-3 ms-4 lg:col-span-2 background-cart mb-15 mt-10 p-1 md:h-60">
           <div className="font-bold text-3xl text-main-color second-font my-2">
           <span className="p-2 max-w-28 8"> {t("Total Price")} : </span> 
           <span>{totalPriceProducts(cartMeals)}</span> 
           </div>
               
            <p className="text-center font-extralight text-1xl text-main-color">
             { t("includes") }
            </p>
            <hr className="h-0.5 m-5 bg-main-color" />
            <h2 className="text-center font-bold text-main-color second-font my-2">
             {t("Total Meals Quantity")} : {totalCartMeals(cartMeals)}
            </h2>
            <TransitionButton className={"w-48 lg:w-80 m-auto"} path={"../../checkout"}>
            { t("Check Out") }
            </TransitionButton>
          </div>
        </div>
        <ToastContainer />
      </div>
    </>
  );
};
