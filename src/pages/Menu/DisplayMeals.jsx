import React, { useEffect } from "react";
import { TransitionButton } from "../../Components/Ui/TransitionButton";
import Aos from "aos";

export const DisplayMeals = ({ mealData , index}) => {
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
  return (
    <div className="bg-second-color main-shadow rounded-main-radius min-90 mt-10 sm:mt-0 max-w-64"
         data-aos={`${ index >= 10 ? 'zoom-out' : 'zoom-out-right'}`}
    >
      <div>
        <img src={image_url} alt={title} className="min-h-50 h-50 w-full" />
      </div>
      <div className="p-3">
        <h2 className="font-medium m-1 line-clamp-1">{title}</h2>
        <p className="line-clamp-2 p-1 md:p-1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, sed.
        </p>

        <TransitionButton
          className={"border-2 border-b-fuchsia-950"}
          path={`../../detailsMeal/${id}`}
        >
          add to cart
        </TransitionButton>

        <span className="ms-1 text-2xl"> {social_rank.toFixed(2)}$ </span>
      </div>
    </div>
  );
};
