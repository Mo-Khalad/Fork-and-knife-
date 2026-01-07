import React from "react";
import { NavLinks } from "./NavLinks";

export const SideNavbar = ({ className, quantity }) => {
  return (
    <>
      <nav className="md:hidden block text-center relative md:items-center cursor-pointer text-gray-200 gap-6 ">
        <NavLinks className={className} />
      </nav>
      {quantity !== 0 ? (
        <span className="md:hidden block second-font text-gray-100 rounded-b-full absolute text-xs bg-main-color p-2 right-15">
          {quantity < 100 ? quantity : "99"}
        </span>
      ) : (
        ""
      )}
    </>
  );
};
