import React, { useEffect } from "react";
import { TransitionButton } from "../../Components/Ui/TransitionButton";
import Aos from "aos";
import { useTranslation } from "react-i18next";
import { ButtonMain } from "../../Components/Ui/ButtonMain";
import { CartContext } from "../../Store/CartContext";
import { successfullyDone } from "../../Logic/Logic";
import { ShowModelSideCart } from "../../Store/ShowModelSideCart";
import { Link } from "react-router-dom";
export const DisplayMeals = ({ mealData, index }) => {
  const { handleSideCartDisplay } = ShowModelSideCart();
  const { t } = useTranslation();
  const { addItemToCartHandler, cartMeals } = CartContext();
  const { image_url, title, social_rank } = mealData;
  const id = mealData.recipe_id;

  useEffect(() => {
    Aos.init({
      duration: 600,
      easing: "ease-in-out",
      once: false,
      mirror: true,
    });
  }, []);

  const handleAddToCart = (mealData) => {
    successfullyDone(t("successfully Added"));
    addItemToCartHandler(mealData);
    cartMeals.length === 0 && handleSideCartDisplay();
  };

  return (
    <div
      className="second-font bg-second-color main-shadow rounded-main-radius min-90 mt-10 sm:mt-0 max-w-64"
      data-aos={`${index >= 10 ? "zoom-out" : "zoom-out-right"}`}
    >
      <div className="absolute top-0 right-0 bottom-0 left-0 opacity-30 h-50 hover:cursor-pointer hover:bg-main-color transition duration-700"></div>
      <Link to={`../DetailsMeal/${id}`}>
        <img src={image_url} alt={title} className="min-h-50 h-50 w-full" />
      </Link>
      <div className="p-3">
        <h2 className="font-medium m-1 line-clamp-1">{title}</h2>
        <p className="line-clamp-2 p-1 md:p-1">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia
          repellendus maiores perferendis eos, magnam expedita ratione
        </p>

        <ButtonMain onClick={() => handleAddToCart(mealData)} className="w-42">
          {t("add")}
        </ButtonMain>

        <span className="ms-1"> {social_rank.toFixed(2)}$ </span>
      </div>
    </div>
  );
};
