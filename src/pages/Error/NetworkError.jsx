import React from 'react'
import { useTranslation } from "react-i18next";
import offline from '../../assets/images/offline.webp'
export const NetworkError = () => {

const { t } = useTranslation()  

return (
    <div className="h-lvh text-center">
        <div className='mt-20 m-auto w-60 text-center'>
          <img src={offline} alt='offline' className='w-full'/>
        </div>

        <div>
          <h1 className ='main-font text-3xl text-main-color mt-30'>{t('No internet')}</h1>
          <ul className='text-2xl text-main-color text-center font-medium main-font p-1 m-2'>
            <li>{t('Looks like you re not connected to the internet')}</li>

          <li className="text-main-color text-center font-medium main-font p-1 m-2">
           {t('Checking the network cables, modem, and router')}
          </li>
          <li> {t('Reconnecting to Wi-Fi')} </li>
        
         </ul>
        </div>  
      </div>
       
        )
}
