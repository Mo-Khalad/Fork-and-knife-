import React, { useState } from "react";
import { MenuSearchMeals } from "./MenuSearchMeals";
import { mealsNames } from "./mealsNames";
import { DisplayMeals } from "./DisplayMeals";

export const Menu = () => {
  const [meal, setMeal] = useState(mealsNames);

  const handleSearch = (event) => {
    setMeal(event.target.value);
    const mealSearch = mealsNames.filter((meal) =>
      meal.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setMeal(mealSearch);
  };

  return (
    <div className="p-1 mb-3">
      <div className=" grid grid-cols-10 ">
        <div className="grid col-span-4 sm:col-span-3 lg:col-span-2 mt-1">
          <ul className="p-4 text-center text-2xl text-second-color second-font bg-main-color">
            <li className="text-second-color text-4xl mb-10 main-font">menu</li>
            <li>
              <input
                onChange={handleSearch}
                placeholder="search"
                type="text"
                name="search"
                className="bg-hover-color w-full text-second-color mb-5 p-3 focus:outline-0 border-0 rounded-4xl text-center"
              />
            </li>

            {meal.length === 0 ? (
              <li className="mt-10 font-bold"> Meal not available </li>
            ) : (
              meal.map((mealName, index) => (
                <MenuSearchMeals mealName={mealName} key={index} />
              ))
            )}
          </ul>
        </div>

        <div className="grid col-span-6 sm:col-span-7 md:col-span-7 lg:col-span-8 mt-5">
          <h2 className="text-center text-5xl text-main-color main-font mb-20">
            Pizza
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:gap-6  p-2 background-details">
            <DisplayMeals />
          </div>
        </div>
      </div>
    </div>
  );
};
