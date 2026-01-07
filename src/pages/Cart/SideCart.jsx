import React from "react";
import { Model } from "../../Components/Ui/Model";
import { useTranslation } from "react-i18next";
import { ButtonMain } from "../../Components/Ui/ButtonMain";
import { CartContext } from "../../Store/CartContext";
import {
  totalPriceProduct,
  totalPriceProducts,
  totalCartMeals,
  successfullyDone,
} from "../../Logic/Logic";
import { ShowModelSideCart } from "../../Store/ShowModelSideCart";
import { TransitionButton } from "../../Components/Ui/TransitionButton";
import { LanguageChangeContext } from "../../Store/LanguageChangeContext";

export const SideCart = () => {
  const { t } = useTranslation();
  const { showSideCart, handleSideCartHide } = ShowModelSideCart();
  const { language } = LanguageChangeContext();
  const dir = language === "en" ? "ltr" : "rtl";
  const {
    addItemToCartHandler,
    decrementItemToCartHandler,
    cartMeals,
    removeItemToCartHandler,
  } = CartContext();

  const handleItemRemoveToCart = (id) => {
    successfullyDone(t("successfully Remove"));
    removeItemToCartHandler(id);
    cartMeals.length === 1 ? handleSideCartHide() : "";
  };

  return (
    <>
      {cartMeals.length ? (
        <Model open={showSideCart}>
          <div className="w-92 fixed top-24 right-3 h-84  z-999999">
            <div className="w-full text-center bg-main-color h-13 p-1  place-content-center">
              <h3 className="text-3xl text-second-color">{t("My Cart")}</h3>
            </div>
            <i
              className="fa-solid fa-xmark absolute text-2xl text-second-color top-5 right-4 hover:text-amber-50 transition duration-700"
              onClick={handleSideCartHide}
            ></i>
            <div className="w-full grid-cols-2 overflow-y-auto bg-amber-50 h-70 text-main-color left-2 ">
              {cartMeals.map((cartMeal) => {
                return (
                  <div
                    key={cartMeal.recipe_id}
                    className="w-84 h-14 m-auto h-30 grid grid-cols-2 rounded-main-radius px-2 my-2 p-3 bg-second-color"
                  >
                    <div className="grid grid-cols-2">
                      <img
                        src={cartMeal.image_url}
                        alt={cartMeal.title}
                        className="w-full h-16 mt-4"
                      />

                      <div className="ms-2 mt-3">
                        <h3>
                          {totalPriceProduct(
                            cartMeal.social_rank,
                            cartMeal.quantity
                          )}
                          $
                        </h3>
                        <h3 className="line-clamp-1">{cartMeal.title}</h3>
                        <h3>{cartMeal.social_rank.toFixed(2)}$</h3>
                      </div>
                    </div>

                    <div className="ms-5">
                      <div className="bg-pink-100 opacity-100 py-2 w-33 px-4 grid grid-cols-3 mb-3">
                        <i
                          className="fa-solid pt-1 fa-plus text-main-color hover:p-1"
                          onClick={() => addItemToCartHandler(cartMeal)}
                        ></i>
                        <span className="text-center text-main-color">
                          {cartMeal.quantity}
                        </span>
                        <i
                          className="fa-solid pt-1 fa-minus text-main-color hover:p-1"
                          onClick={() => decrementItemToCartHandler(cartMeal)}
                        ></i>
                      </div>
                      <ButtonMain
                        onClick={() => {
                          handleItemRemoveToCart(cartMeal);
                        }}
                        className={"w-33"}
                      >
                        {t("remove")}
                      </ButtonMain>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="w-full bg-main-color place-content-center">
              <div
                dir={dir}
                className="grid text-3xl grid-cols-9 text-center m-auto font-bold text-second-color second-font my-2"
              >
                <span className="grid col-span-4 text-center bg-second-colo ms-5">
                  {t("Total Price")}
                </span>
                <span className="mx-2 grid col-span-1"> : </span>
                <span className="grid col-span-2">
                  {" "}
                  {totalPriceProducts(cartMeals)}${" "}
                </span>
              </div>

              <p className="text-center font-extralight text-1xl text-second-color">
                {t("includes")}
              </p>
              <hr className="h-0.5 m-5 bg-second-color" />
              <div
                dir={dir}
                className="grid grid-cols-9 text-center font-bold text-second-color second-font my-2"
              >
                <span className="grid col-span-4 text-center">
                  {t("Total Meals Quantity")}
                </span>
                <span className="mx-2 grid col-span-1"> : </span>
                <span className="grid col-span-1">
                  {" "}
                  {totalCartMeals(cartMeals)}{" "}
                </span>
              </div>

              <TransitionButton
                path={"../cart"}
                className={"w-88 m-2 btn-showCart bg-second-color"}
              >
                {t("show Cart")}
              </TransitionButton>
            </div>
          </div>
        </Model>
      ) : (
        ""
      )}
    </>
  );
};
