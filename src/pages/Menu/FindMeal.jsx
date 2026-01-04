import React from "react";
import { DataShareContext } from "../../Store/DataShareContext";
export const FindMeal = ({
  handleOnSearch,
  meal,
  handleMealsMenuHide,
  mealName,
  setMeal,
  searchElement,
  setSearchElement,
}) => {
  const { handleChooseMeal } = DataShareContext();
  
  return (
    <div className='w-60 fixed h-lvh left-2 top-16 z-9999999'>
    <div className='w-60 text-center bg-main-color h-48 place-content-center'>
    <h2 className="text-second-color text-4xl main-font mb-8">
         menu
       </h2>
       <input
         onChange={handleOnSearch}
         value={searchElement}
         placeholder="search"
         type="text"
         name="search"
         className="bg-hover-color w-4/5 text-second-color h-10 mb-5 focus:outline-0 border-0 rounded-4xl text-center"
       />
       <i
         className="fa-solid fa-xmark absolute text-2xl text-second-color top-5 right-4 hover:text-amber-50 transition duration-700"
         onClick={handleMealsMenuHide}
       ></i>

    </div>
    <div className="w-60 overflow-y-scroll background-menu h-8/12 xl:h-96 text-second-color left-2">
       <ul className="p-4 text-center text-2xl text-second-color second-font">
       {meal.length === 0 ? (
              <li className="mt-1 font-bold"> Meal not available </li>
            ) : (
              meal.map((menuMealName, index) => (
                <li
                  key={index}
                  onClick={() => {
                    handleChooseMeal(menuMealName);
                    setMeal('meal');
                    setSearchElement("");
                  }}
                  className={`m-3 cursor-pointer hover:bg-hover-color transition duration-700 ${
                    menuMealName === mealName && "bg-hover-color"
                  }`}
                >
                  {menuMealName}
                </li>
              ))
            )}
       </ul>
     </div>
  </div>
  
  );
};
