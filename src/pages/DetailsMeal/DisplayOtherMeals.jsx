import React from "react";
import { fetchMeals } from "../../util/Http";
import { useQuery } from "@tanstack/react-query";
import { DataShareContext } from "../../Store/DataShareContext";
import { Link } from "react-router-dom";
import { ButtonMain } from "../../Components/Ui/ButtonMain";
export const DisplayOtherMeals = () => {
  const { dataShare } = DataShareContext();

  const { data } = useQuery({
    queryKey: ["meal", dataShare],
    queryFn: () => fetchMeals({ mealName: dataShare, method: "get_meals" }),
    staleTime: Infinity,
  });
  const dataOtherMeals = data?.data?.recipes;

  return (
    <>
      <h2 className="grid col-span-8 text-2xl md:text-4xl font-bold main-font text-main-color my-20 text-center">
        Other meals of the same type
      </h2>

      <div className="grid grid-cols-8 p-5 gap-20">
        {dataOtherMeals !== undefined &&
          dataOtherMeals.map(
            ({ image_url, title, social_rank, recipe_id }, index) => {
              if (index < 4) {
                return (
                  <div
                    key={index}
                    className="bg-second-color col-span-5 sm:col-span-4 md:col-span-2 main-shadow rounded-main-radius min-90"
                  >
                    <div>
                      <img
                        src={image_url}
                        alt={title}
                        className="min-h-50 h-50 w-full"
                      />
                    </div>

                    <div className="p-3">
                      <h2 className="font-medium m-1 line-clamp-1">{title}</h2>
                      <p className="line-clamp-2 p-1">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Tenetur, sed.
                      </p>

                      <Link to={`../../DetailsMeal/${recipe_id}`}>
                        <ButtonMain className={'w-40'}>
                          add to cart
                        </ButtonMain>
                      </Link>

                      <span className="ms-1 text-2xl"> {social_rank} </span>
                    </div>
                  </div>
                );
              }
            }
          )}
      </div>
    
    </>
  );
};
