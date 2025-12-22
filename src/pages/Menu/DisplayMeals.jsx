import React from "react";
import { Link } from "react-router-dom";

export const DisplayMeals = ({ mealData }) => {
  const { image_url, title, social_rank } = mealData;
  const id = mealData.recipe_id;

  return (
    <div className="bg-second-color main-shadow rounded-main-radius min-90 mt-10 sm:mt-0 max-w-64">
      <div>
        <img src={image_url} alt={title} className="min-h-50 h-50 w-full" />
      </div>
      <div className="p-3">
        <h2 className="font-medium m-1 line-clamp-1">{title}</h2>
        <p className="line-clamp-2 p-1 md:p-1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, sed.
        </p>
        <Link to={`../../DetailsMeal/${id}`}>
          <button className="bg-main-color text-second-color px-7 py-2 rounded-main-radius cursor-pointer hover:bg-second-color border-2 border-b-fuchsia-950 hover:text-main-color transition duration-700">
            add to cart
          </button>
        </Link>

        <span className="ms-1 text-2xl"> {social_rank.toFixed(2)}$ </span>
      </div>
    </div>
  );
};
