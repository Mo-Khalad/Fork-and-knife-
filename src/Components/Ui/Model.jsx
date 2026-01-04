import React from "react";
import { createPortal } from "react-dom";

export const Model = ({ open, children, className }) => {
  return createPortal(
    <dialog open={open} className={className}>
      {children}
    </dialog>,
    document.getElementById("model")
  );
};
