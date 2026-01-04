import React, { useState } from "react";
import { mealsNames } from "./mealsNames";
import { DisplayMeals } from "./DisplayMeals";
import { useQuery } from "@tanstack/react-query";
import { fetchMeals } from "../../util/Http";
import { DataShareContext } from "../../Store/DataShareContext";
import { FindMeal } from "./FindMeal";
import menu from "../../assets/images/menu.webp";
import { Loading } from "../../Components/Loading";
import { Model } from "../../Components/Ui/Model";
import { SideCart } from "../Cart/SideCart";

export const Menu = () => {
  const [meal, setMeal] = useState(mealsNames);
  const [show, setShow] = useState(false);
  const [searchElement, setSearchElement] = useState("");
  const { mealName } = DataShareContext();
  const handleMealsMenuDisplay = () => {
    setShow(true);
  };
  const handleMealsMenuHide = () => {
    setShow(false);
  };
  const { data, isFetching } = useQuery({
    queryKey: ["meal", mealName],
    queryFn: () => fetchMeals({ mealName: mealName, method: "get_meals" }),
    staleTime: Infinity,
    gcTime: Infinity,
    enabled: !!mealName,
  });
  const handleOnSearch = (event) => {
    const mealSearch = mealsNames.filter((meal) =>
      meal.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setMeal(mealSearch);
    setSearchElement(event.target.value);
  };

  return (
    <>
      {isFetching ? (
        <Loading />
      ) : (
        <div className="p-5 mb-3 mt-15 min-h-lvh">
          <img
            className={`cursor-pointer fixed left-5 ${
              show ? "hidden" : "block"
            }`}
            width={50}
            src={menu}
            alt="menu"
            onClick={handleMealsMenuDisplay}
          />
          <div className="grid grid-cols-1 w-full">
            {
              <Model open={show}>
                <FindMeal
                  meal={meal}
                  handleOnSearch={handleOnSearch}
                  handleMealsMenuHide={handleMealsMenuHide}
                  mealName={mealName}
                  setMeal={setMeal}
                  mealsNames={mealsNames}
                  searchElement={searchElement}
                  setSearchElement={setSearchElement}
                />
              </Model>
            }

            <div className="grid col-span-2 justify-self-center sm:col-span-7 md:col-span-8 mt-5">
              <h2 className="text-center text-5xl text-main-color main-font mb-20">
                {mealName}
              </h2>
              <div className="grid grid-cols-1 p-10 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 background-details">
                {data !== undefined &&
                  data?.data?.recipes.map((mealData, index) => (
                    <DisplayMeals
                      mealData={mealData}
                      key={mealData.recipe_id}
                      index={index}
                    />
                  ))}
              </div>
             <SideCart/> 
            </div>
          </div>
        </div>
      )}
    </>
  );
};
