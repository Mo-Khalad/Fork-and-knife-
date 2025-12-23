import React from "react";

export const ButtonMain = ({ children, onClick, className }) => {

  return (
    <button
      onClick={onClick}
      className={`w-33 bg-main-color text-second-color px-10 py-2 rounded-main-radius 
        border-b-fuchsia-950 hover:text-main-color hover:bg-neutral-400 
        transition duration-700" ${className}`}
    >
      {children}
    </button>
  );
};
