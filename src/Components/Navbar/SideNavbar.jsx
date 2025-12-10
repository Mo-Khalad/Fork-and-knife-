import React from "react";
import { NavLink } from "react-router-dom";

export const SideNavbar = () => {
  return (
    <>
      <nav className="md:hidden block text-center md:items-center cursor-pointer text-gray-200 gap-6 ">
        <NavLink
          to={"./"}
          className="hover:text-gray-50 transition block duration-700 p-3"
        >
          Home
        </NavLink>
        <NavLink
          to={"./menu"}
          className="hover:text-gray-50 block transition duration-700 p-3"
        >
          Menu
        </NavLink>
        <NavLink
          to={"./about"}
          className="hover:text-gray-50 block transition duration-700 p-3"
        >
          About
        </NavLink>
        <NavLink
          to={"contact"}
          className="hover:text-gray-50 block transition duration-700 p-3"
        >
          Contact
        </NavLink>

      </nav>
         <span className="md:hidden block text-gray-100 rounded-b-full absolute top-60 text-xs bg-main-color p-2 right-15">
           77
         </span>
    </>
  );
};
