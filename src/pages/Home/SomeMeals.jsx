import React from "react";
import { Slider } from "./Slider";
import { Link } from "react-router-dom";
import { SwiperSlide } from "swiper/react";
import { fetchMeals } from "../../util/Http";
import { useQuery } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import { CartContext } from "../../Store/CartContext";
import { ButtonMain } from "../../Components/Ui/ButtonMain";
import { successfullyDone } from "../../Logic/Logic";
import { ShowModelSideCart } from "../../Store/ShowModelSideCart";

export const SomeMeals = () => {
  const { t } = useTranslation();
  const { addItemToCartHandler , cartMeals } = CartContext();
  const { handleSideCartDisplay } = ShowModelSideCart();

  const { data } = useQuery({
    queryKey: ["meal", "pizza"],
    queryFn: () => fetchMeals({ mealName: "pizza"}),
    staleTime: Infinity,
  });

  const handleAddToCart = (mealData) => {
    successfullyDone(t("successfully Added"));
    addItemToCartHandler(mealData);
    cartMeals.length === 0 && handleSideCartDisplay();
  };

  const dataSomeMeals = data?.data?.recipes;

  return (
    <div className="h-150">
      <Slider
        className={"h-150"}
        navigation={true}
        slidesPerView={4}
        spaceBetween={20}
      >
        {dataSomeMeals !== undefined &&
          dataSomeMeals.map((dataSomeMeal, index) => {
            if (index > 12) {
             return <SwiperSlide key={dataSomeMeal.recipe_id} dir='ltr'>
                <div className="bg-second-color second-font">
                  <Link to={`../DetailsMeal/${dataSomeMeal.recipe_id}`}>
                    <img
                      src={dataSomeMeal.image_url}
                      alt={dataSomeMeal.title}
                      className="min-h-50 h-60 w-full"
                    />
                  </Link>
                  <div className="p-4">
                    <h2 className="font-medium m-1 line-clamp-1">
                      {dataSomeMeal.title}
                    </h2>
                    <p className="p-3">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Tenetur, sed.
                    </p>

                    <ButtonMain
                      onClick={() => handleAddToCart(dataSomeMeal)}
                      className="w-42"
                    >
                      {t("add")}
                    </ButtonMain>

                    <span className="ms-1">
                      {" "}
                      {dataSomeMeal.social_rank.toFixed(2)}${" "}
                    </span>
                  </div>
                </div>
              </SwiperSlide>
            }
          })}
      </Slider>
    </div>
  );
};
