import React from "react";
import { CartItems } from "./CartItems";
import { ButtonMain } from "../../Components/Ui/ButtonMain";
import { CartContext } from "../../Store/CartContext";
import { useTranslation } from "react-i18next";
import { useNetwork } from '../../hooks/useNetwork';
import { NetworkError } from '../Error/NetworkError';
import {
  successfullyDone,
  totalCartMeals,
  totalPriceProducts,
} from "../../Logic/Logic";
import { TransitionButton } from "../../Components/Ui/TransitionButton";
export const Cart = () => {
  const { removeAllItemsToCartHandler, cartMeals } = CartContext();
  const { t } = useTranslation();
  const isOnline = useNetwork()

  const handleAllItemsRemoveToCart = () => {
    successfullyDone(t('succussFully All Remove'))
    removeAllItemsToCartHandler();
  };

return (
    <>
      {isOnline ?
        <div className="lg:h-lvh m-auto grid place-items-center mt-20">
        <div className="container grid gap-15 grid-cols-6 w-full">
          <div className="grid col-span-6 m-2 lg:col-span-4 h-130 background-cart p-2">
            <h2 className="text-center text-4xl font-bold main-font text-main-color my-5">
              {t("My Cart")}
            </h2>

            {cartMeals.length ? (
            <>  <div className="grid place-items-center h-88 overflow-y-auto mt-2">
                <CartItems />
              </div>
                <ButtonMain
                onClick={ handleAllItemsRemoveToCart }
                className={"m-2 h-10 w-40"}
              >
                {t("All Delete")}
                </ButtonMain>
            </>) : (
              <h4 className="main-font text-2xl md:text-3xl text-main-color text-center">
                { t("empty")}
              </h4>
            )}
          </div>
          { cartMeals.length ? 
           <div className="grid w-full lg:max-w-88 col-span-5 sm:col-span-3 ms-4 lg:col-span-2 background-cart mb-15 mt-10 p-1 md:h-60">
           <div className="font-bold text-3xl text-main-color second-font my-2">
             <span className="p-2 max-w-28"> {t("Total Price")} : </span>
             <span>{totalPriceProducts(cartMeals)}</span>
           </div>

           <p className="text-center font-extralight text-1xl text-main-color">
             {t("includes")}
           </p>
           <hr className="h-0.5 m-5 bg-main-color" />
           <div className="grid grid-cols-9 text-center font-bold text-main-color second-font my-2">
              <span className='grid col-span-4 text-center'>
                  {t("Total Meals Quantity")}
                </span>
                <span className="mx-2 grid col-span-1"> : </span>
                <span className='grid col-span-1'> {totalCartMeals(cartMeals)} </span>
              </div>
        
           <TransitionButton
             className={"w-48 lg:w-80 m-auto"}
             path={"../../checkout"}
           >
             {t("Check Out")}
           </TransitionButton>
         </div>:''
        }
         
        </div>
      </div>
      : <NetworkError/>
      }

    </>
  );
};
