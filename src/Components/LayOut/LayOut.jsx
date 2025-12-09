import React from "react";
import { Navbar } from "../Navbar/Navbar";
import { SideNavbar } from "../Navbar/SideNavbar";
import { Footer } from "../Footer/Footer";
import { Outlet } from "react-router-dom";

export const LayOut = () => {
  return (
    <>
      <Navbar />
      <SideNavbar />
      <Outlet></Outlet>
      <Footer />
    </>
  );
};
