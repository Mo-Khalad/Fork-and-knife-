import React from "react";
import { ButtonMain } from "../../Components/Ui/ButtonMain";
import { cartContext } from "../../Store/cartContext";
//import successfullyDone from "../../Logic/successfullyDone";
export const CartItems = () => {
  const {
    addItemToCartHandler,
    decrementItemToCartHandler,
    cartMeals,
    removeItemToCartHandler,
  } = cartContext();

  return (
    <>
      {cartMeals.map((cartMeal) => {
        return (
          <div
            key={cartMeal.recipe_id}
            className=" w-3xl rounded-main-radius grid grid-cols-8 p-1 m-2 bg-second-color"
          >
            <div className="grid grid-cols-5 col-span-6 m-3">
              <div>
                <img
                  src={cartMeal.image_url}
                  alt={cartMeal.title}
                  className="h-20 w-22 mt-2"
                />
              </div>

              <div className="grid col-span-4 mt-4">
                <h3>50$</h3>
                <h3>{cartMeal.title}</h3>
              </div>
            </div>

            <div className=" col-span-2 col-end-9 w-1xl grid place-content-center">
              <ul className="bg-pink-100 opacity-100 py-2 w-33 px-4 grid grid-cols-3 gap-2 mb-3">
                <li>
                  <i
                    onClick={() => addItemToCartHandler(cartMeal)}
                    className="fa-solid fa-plus text-main-color hover:p-1"
                  ></i>
                </li>
                <li className="text-center text-main-color">
                  {cartMeal.quantity}
                </li>
                <li>
                  <i
                    onClick={() => decrementItemToCartHandler(cartMeal)}
                    className="fa-solid fa-minus text-main-color hover:p-1"
                  ></i>
                </li>
              </ul>
              <ButtonMain onClick={() => removeItemToCartHandler(cartMeal)}>
                remove
              </ButtonMain>
            </div>
          </div>
        );
      })}
    </>
  );
};
