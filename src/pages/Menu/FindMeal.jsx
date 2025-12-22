import React from "react";
import { DataShareContext } from "../../Store/DataShareContext";
export const FindMeal = ({
  handleOnSearch,
  meal,
  handleMealsMenuHide,
  mealName ,
  setMeal ,
  mealsNames ,
  searchElement ,
  setSearchElement ,
}) => {
  const { handleDataShare } = DataShareContext();
  return (
    <>
      <div className="absolute top-14 left-1 h-lvh mt-1 ">
       <div className="w-72 xl:w-64 text-center top-15 xl:top-17 min-h-52 sm:min-h-48 left-1 bg-main-color fixed">
       <h2 className="text-second-color text-4xl main-font mb-8 mt-12">menu</h2>    
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
      
       <div className="overflow-y-scroll min-h-3/5 background-menu text-second-color left-1 fixed top-60 bottom-1 w-72 xl:w-64 z-20">
          <ul className="p-4 text-center relative text-2xl text-second-color second-font">
          
            {meal.length === 0 ? (
              <li className="mt-1 font-bold"> Meal not available </li>
            ) : (
              meal.map((menuMealName, index) => (
                <li
                  key={index}
                  onClick={() => {
                    handleDataShare(menuMealName); 
                    setMeal(mealsNames); 
                    setSearchElement('')            
                  }}
                  className={`m-3 cursor-pointer hover:bg-hover-color transition duration-700 ${menuMealName === mealName && 'bg-hover-color'}`}
                >
                  {menuMealName}
                </li>
              ))
            )}
          </ul>
        </div>
     
      </div>
    </>
  );
};
/*
   <div className="overflow-y-scroll  left-1 h-5/6 fixed z-20">
          <ul className="p-4 text-center relative text-2xl text-second-color second-font">
          

            {meal.length === 0 ? (
              <li className="mt-10 font-bold"> Meal not available </li>
            ) : (
              meal.map((mealName, index) => (
                <li
                  key={index}
                  onClick={() => {
                    handleDataShare(mealName);
                    setMeal(mealsNames);
                  }}
                  className="m-3 cursor-pointer hover:bg-hover-color transition duration-700"
                >
                  {mealName}
                </li>
              ))
            )}
          </ul>
        </div>

        */