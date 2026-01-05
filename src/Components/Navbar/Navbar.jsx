import React, { useState } from "react";
import { SideNavbar } from "./SideNavbar";
import { LanguageChangeContext } from "../../Store/LanguageChangeContext";
import { NavLinks } from './NavLinks'
import { useTranslation } from "react-i18next";
import { successfullyDone , totalCartMeals } from "../../Logic/Logic";
import { CartContext } from "../../Store/CartContext"
import { ShowModelSideCart } from "../../Store/ShowModelSideCart";

export const Navbar = () => {
  const { language , handleLanguageChange } = LanguageChangeContext();
  const [ displaySideNavbar , setDisplaySideNavbar] = useState(false);
  const { i18n , t } = useTranslation();
  const { cartMeals } = CartContext()
  const { handleSideCartDisplay } = ShowModelSideCart()

  const handleToggleSideNavbar =()=>{
  setDisplaySideNavbar(!displaySideNavbar)
}
  return (
    <nav className="bg-main-color fixed p-3 w-full z-99999999 top-0">
      <div className="container">
        <div className="flex justify-between place-content-center">
          <div>
          <div className="hidden md:flex items-center cursor-pointer text-gray-200 gap-6 ">
             <NavLinks className="hover:text-gray-50 transition duration-700"/>
            </div>

          <div className="md:hidden"><i onClick={handleToggleSideNavbar} className="fa-solid fa-list text-2xl text-second-color"></i></div>            
             { displaySideNavbar && <SideNavbar
              className="hover:text-gray-50 transition duration-700 p-3 block"
              quantity={totalCartMeals(cartMeals) }
              /> }
          </div>

          <div>
           <i onClick={ () =>  cartMeals.length ? handleSideCartDisplay() : 
            successfullyDone(t('message Cart Is Empty')) 
            } className="fa-solid fa-bag-shopping cursor-pointer text-gray-200 hover:text-gray-50 transition duration-700 text-3xl"></i>
           { cartMeals.length  ? 
            <span className="md:block second-font hidden text-gray-100 rounded-b-full absolute top-13 text-center w-7 text-xs bg-main-color p-2 right-15">
             { totalCartMeals(cartMeals) < 100 ? totalCartMeals(cartMeals) : '99' }
            </span> :''
            }
            <button 
            onClick={()=>handleLanguageChange(language , i18n)} 
            className="border border-second-color second-font max-w-20 w-24 text-second-color p-1 ms-3">
              {language ==="en" ? "ar" :"en"}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
