import React from "react";
import { NavLink } from "react-router-dom";
import { NavLinks } from './NavLinks'

export const SideNavbar = ({className , quantity}) => {
  return (
    <>
      <nav className="md:hidden block text-center md:items-center cursor-pointer text-gray-200 gap-6 ">
       <NavLinks className={className}/>
      </nav>
         <span className="md:hidden block text-gray-100 rounded-b-full absolute top-81 text-xs bg-main-color p-2 right-15">
          {quantity}
         </span>
    </>
  );
};
