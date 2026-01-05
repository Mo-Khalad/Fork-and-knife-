import React from "react";
import { useNavigate } from "react-router-dom";

export const TransitionButton = ({ children, path, className }) => {
  const navigate = useNavigate();
  const TransitionBetweenPage = (path) => {
    navigate(path);
  };
  return (
    <button
      className={`bg-main-color ounded-main-radius text-second-color px-7 py-2
        hover:text-main-color hover:bg-second-color transition duration-700 ${className}`}
      onClick={() => TransitionBetweenPage(path)}
    >
      {children}
    </button>
  );
};
