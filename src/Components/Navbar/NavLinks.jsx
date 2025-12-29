import React from 'react'
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const NavLinks = ({className}) => {
   const { t } = useTranslation()

  return (
    <>
    <NavLink to="./" className={`mt-7 ms-3 md:mt-0 md:ms-0 ${className}`}>
       <img src="nav logo.png" alt="nav icon" className={className}/>
    </NavLink>
    <NavLink className={({isActive})=> { return isActive ?`text-second-color ${className}` :className }} to='./' end>
     {t('Home')}
    </NavLink>
    <NavLink className={({isActive})=> { return isActive ?`text-second-color ${className}` :className }} to={'./menu'}>
     {t('Menu')}
    </NavLink>
    <NavLink className={({isActive})=> { return isActive ?`text-second-color ${className}` : className }}  to={'./about'}>
     {t('About')}
    </NavLink>
    <NavLink className={({isActive})=> { return isActive ?`text-second-color ${className}` : className}}   to={'./LocationsMap'}>
     {t('Locations')}
    </NavLink>
    </>
  )
}
