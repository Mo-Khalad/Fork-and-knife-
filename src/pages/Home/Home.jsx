import React from "react";
import { Chefs } from "../Home/Chefs";
import { Locations } from "./Locations";
import { MealsSlider } from "./MealsSlider";
import { SomeMeals } from "./SomeMeals";
import { MainSection } from "./MainSection";

export const Home = () => {
  return (
    <>
     <MainSection/>
     <MealsSlider/>
     <Chefs/>
     <Locations/>
    </>
  );
};
//      
//    

//      <SomeMeals />