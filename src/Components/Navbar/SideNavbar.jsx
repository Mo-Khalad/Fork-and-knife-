import React from "react";

export const SideNavbar = () => {
  return (
    <>
      <ul className="md:hidden block text-center md:items-center cursor-pointer text-gray-200 gap-6 ">
        <li className="hover:text-gray-50 transition duration-700 p-3">Home</li>
        <li className="hover:text-gray-50 transition duration-700 p-3">Menu</li>
        <li className="hover:text-gray-50 transition duration-700 p-3">
          About
        </li>
        <li className="hover:text-gray-50 transition duration-700 p-3">
          Contact
        </li>
      </ul>
      <span className="md:hidden block text-gray-100 rounded-b-full absolute top-60 text-xs bg-main-color p-2 right-15">
        77
      </span>
    </>
  );
};
