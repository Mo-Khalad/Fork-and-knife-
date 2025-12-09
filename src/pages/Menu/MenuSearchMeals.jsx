import React from "react";
export const MenuSearchMeals = ({mealName}) => {
  return (
        <li className="m-3 cursor-pointer hover:bg-hover-color transition duration-700">
          { mealName }
        </li>
  );
};