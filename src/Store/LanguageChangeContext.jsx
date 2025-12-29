import { create } from "zustand";
import { persist } from "zustand/middleware";

export const LanguageChangeContext = create(
  
  persist(
    (set) => ({
      language: "en",
      handleLanguageChange: (lng , i18n) =>
      set(() => {
         if( lng === "en"){
            i18n.changeLanguage('ar') ;
            return { language : "ar" } 
         } else if(lng === 'ar') {
            i18n.changeLanguage('en') ;
            return { language : "en" } 
         }  
      }),
    }),
    {
      name: "language",
    }
  )
);
