import React, { useEffect } from "react";
import { Chefs } from "../Home/Chefs";
import { Locations } from "./Locations";
import { MealsSlider } from "./MealsSlider";
import { SomeMeals } from "./SomeMeals";
import { MainSection } from "./MainSection";
import { useNetwork } from "../../hooks/useNetwork";
import { NetworkError } from "../Error/NetworkError";
export const Home = () => {
  const isOnline = useNetwork();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      {isOnline ? (
        <>
          <MainSection />
          <MealsSlider />
          <Chefs />
          <Locations />
          <SomeMeals />
        </>
      ) : (
        <NetworkError />
      )}
    </>
  );
};
