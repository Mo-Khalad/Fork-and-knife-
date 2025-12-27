import React from 'react'
import { useTranslation } from "react-i18next" ;
export const Li = ({contents}) => {  
  const { t } = useTranslation()

  return(
   <> { contents.map ((content , index)=>  <li key={index}
   className={`${index === 0 && 'text-gray-300 font-extrabold text-3xl'}`}>
    {t(content)}</li>)} 
  </>
  )
}
