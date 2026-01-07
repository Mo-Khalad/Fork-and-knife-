import React from "react";
import { ToastContainer } from "react-toastify";
import { LanguageChangeContext } from "../Store/LanguageChangeContext";
export const ToastContainerSetting = () => {
  const { language } = LanguageChangeContext();
  const rtl = language === "ar";

  return (
    <ToastContainer
      position="top-right"
      autoClose={1000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick={false}
      rtl={rtl}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
    />
  );
};
