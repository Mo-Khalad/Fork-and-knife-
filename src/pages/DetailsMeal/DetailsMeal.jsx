import React from "react";
import { useParams } from "react-router-dom";
import { ButtonMain } from "../../Components/Ui/ButtonMain";
import { cartContext } from "../../Store/CartContext";
import { ToastContainer } from "react-toastify";
import { useQuery } from "@tanstack/react-query";
import { fetchDetailsMeal } from "../../util/Http";
import { DisplayOtherMeals } from "./DisplayOtherMeals";
import { DataShareContext } from "../../Store/DataShareContext";
import { successfullyDone } from "../../Logic/Logic";
import { useTranslation } from "react-i18next" ;

export const DetailsMeal = () => {
  const { addItemToCartHandler } = cartContext()
  const { dataShare } = DataShareContext()
  const { id } = useParams();
  const { t } = useTranslation()
  const { data } = useQuery({
    queryKey: [" detailMeal ", id],
    queryFn: () => fetchDetailsMeal(id),
    staleTime: Infinity,
    enabled: !!id,
  });

  const mealDetails = data?.data?.recipe;
  
  const handleAddToCart=(mealDetails)=>{
    addItemToCartHandler( mealDetails )
    successfullyDone(t('successfully Added'))
  }

  return (
    <>
      <div className="grid grid-cols-8 p-5 w-full">
        <div className="col-span-8 lg:col-span-4 mt-15">
          <img
            src={mealDetails?.image_url}
            alt={mealDetails?.title}
            className="place-self-center w-full"
          />
        </div>

        <div className="p-4 col-span-8 lg:col-span-4 ">
          <h1 className="text-4xl font-bold main-font text-main-color mt-5 text-center mb-15">
           {dataShare}
          </h1>

          <h2 className="text-4xl font-bold second-font">
            {mealDetails?.social_rank.toFixed(2)}$
          </h2>

          <p className="p-5 second-font text-2xl">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            repellendus maiores perferendis eos, magnam expedita ratione
            repellat excepturi necessitatibus quis eaque odio facere adipisci
            laboriosam in corrupti, id debitis hic quisquam eligendi aspernatur
            incidunt quae.
          </p>

          {mealDetails?.ingredients.map((ingredient , index) => (
            <h2 className="mt-2 line-clamp-1" key={index}>
              <span className="font-bold text m-3">{index + 1}</span>
              {ingredient}
            </h2>
          ))}

          <ButtonMain
            className={"w-48 my-8"}
            onClick={()=> handleAddToCart(mealDetails) }
          >
           { t('add') }
          </ButtonMain>
        </div>
      </div>
      <DisplayOtherMeals />
      <ToastContainer />
    </>
  );
};
