import React from "react";
import { fetchMeals } from "../../util/Http";
import { useQuery } from "@tanstack/react-query";
import { DataShareContext } from "../../Store/DataShareContext";
import { useTranslation } from "react-i18next";
import { CartContext } from "../../Store/CartContext";
import { ButtonMain } from "../../Components/Ui/ButtonMain";
import { successfullyDone } from "../../Logic/Logic";
import { ShowModelSideCart } from "../../Store/ShowModelSideCart";
import { Link } from "react-router-dom";

export const DisplayOtherMeals = () => {
  const { mealName } = DataShareContext();
  const { t } = useTranslation();
  const { addItemToCartHandler, cartMeals } = CartContext();

  const { data } = useQuery({
    queryKey: ["meal", mealName],
    queryFn: () => fetchMeals({ mealName: mealName }),
    staleTime: Infinity,
  });

  const dataOtherMeals = data?.data?.recipes;
  const { handleSideCartDisplay } = ShowModelSideCart();

  const handleAddToCart = (mealData) => {
    successfullyDone(t("successfully Added"));
    addItemToCartHandler(mealData);
    cartMeals.length === 0 && handleSideCartDisplay();
  };

  return (
    <>
      <h2 className="grid col-span-8 text-2xl md:text-4xl font-bold main-font text-main-color my-20 text-center">
        Other meals of the same type
      </h2>

      <div className="grid grid-cols-8 p-5 gap-20">
        {dataOtherMeals !== undefined &&
          dataOtherMeals.map((dataOtherMeal, index) => {
            if (index < 4) {
              return (
                <div
                  key={dataOtherMeal.recipe_id}
                  className="bg-second-color second-font col-span-5 sm:col-span-4 md:col-span-2 main-shadow rounded-main-radius min-90"
                >
                  <div>
                    <Link to={`../DetailsMeal/${dataOtherMeal.recipe_id}`}>
                      <img
                        src={dataOtherMeal.image_url}
                        alt={dataOtherMeal.title}
                        className="min-h-50 h-50 w-full"
                      />
                    </Link>
                  </div>

                  <div className="p-3">
                    <h2 className="font-medium m-1 line-clamp-1">
                      {dataOtherMeal.title}
                    </h2>
                    <p className="line-clamp-2 p-1">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Tenetur, sed.
                    </p>

                    <ButtonMain
                      onClick={() => handleAddToCart(dataOtherMeal)}
                      className="w-42"
                    >
                      {t("add")}
                    </ButtonMain>

                    <span className="ms-1">
                      {" "}
                      {dataOtherMeal.social_rank.toFixed(2)}${" "}
                    </span>
                  </div>
                </div>
              );
            }
          })}
      </div>
    </>
  );
};
