import React from "react";
export const MenuSearchMeals = ({ mealName , mutate , setSearchMealName}) => {
  
  return (
        <li onClick={()=>{
          mutate({mealName , method:"get_meals"})
          setSearchMealName(mealName)
      }
        } className="m-3 cursor-pointer hover:bg-hover-color transition duration-700">
          { mealName }
        </li>
  );
};