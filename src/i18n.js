import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en/en.json";
import ar from "./locales/ar/ar.json";

const language = JSON.parse( localStorage.getItem('language') )?.state.language

i18n
  .use(initReactI18next) 
  .init({
    resources: {
      en: { translation: en },
      ar: { translation: ar },
    },
    lng: language === null ? "en" : language,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,  
    },
  });

export default i18n;
