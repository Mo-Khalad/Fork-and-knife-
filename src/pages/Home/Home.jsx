import React from "react";
import { Chefs } from "../Home/Chefs";
import { Locations } from "./Locations";
import { MealsSlider } from "./MealsSlider";
import { SomeMeals } from "./SomeMeals";
import { MainSection } from "./MainSection";
import { SideCart } from "../Cart/SideCart";
import { useNetwork } from '../../hooks/useNetwork';
import { NetworkError } from '../Error/NetworkError';
export const Home = () => {
  const isOnline = useNetwork()

  return (
    <>
    {
     isOnline ?
      <>
      <MainSection/>
      <MealsSlider/>
      <Chefs/>
      <Locations/>
      <SideCart/>      
     </> : <NetworkError/>
    }
    
    </>
  );
};
