import React, { useState } from "react";
import { SideNavbar } from "./SideNavbar";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
 const [displaySideNavbar , setDisplaySideNavbar] = useState(false)

const handleToggleSideNavbar =()=>{
  setDisplaySideNavbar(!displaySideNavbar)
}

  return (
    <nav className="bg-main-color p-3 relative">
      <div className="container">
        <div className="flex justify-between place-content-center">
          <div>
          <div className="hidden md:flex items-center cursor-pointer text-gray-200 gap-6 ">
              <img src={"logo"} alt="icon" />
              <NavLink className="hover:text-gray-50 transition duration-700" to='./'>
                Home
              </NavLink>
              <NavLink className="hover:text-gray-50 transition duration-700" to={'./menu'}>
                Menu
              </NavLink>
              <NavLink className="hover:text-gray-50 transition duration-700" to={'./about'}>
                About
              </NavLink>
              <NavLink className="hover:text-gray-50 transition duration-700" to={'./contact'}>
                Contact
              </NavLink>
            </div>

            <div className="block md:hidden "><i onClick={handleToggleSideNavbar} className="fa-solid fa-list text-2xl text-second-color"></i></div>            
             { displaySideNavbar && <SideNavbar/> }
          </div>

          <div>
           <NavLink to={'../../cart'}><i className="fa-solid fa-bag-shopping cursor-pointer text-gray-200 hover:text-gray-50 transition duration-700 text-3xl"></i></NavLink> 
            <span className="md:block hidden text-gray-100 rounded-b-full absolute top-13 text-xs bg-main-color p-2 right-15">
              77
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};
