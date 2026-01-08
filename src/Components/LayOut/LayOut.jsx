import React from "react";
import { Navbar } from "../Navbar/Navbar";
import { Footer } from "../Footer/Footer";
import { Outlet } from "react-router-dom";
import { SideCart } from "../../pages/Cart/SideCart";

export const LayOut = () => {
 
  
  return (
    <>
      <Navbar/>
      <SideCart/>
      <Outlet></Outlet>
      <Footer />
    </>
  );
};
