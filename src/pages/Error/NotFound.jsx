import React, { useEffect } from "react";
import notFound from "../../assets/images/404-error.webp";
import { TransitionButton } from "../../Components/Ui/TransitionButton";
import { ShowModelSideCart } from "../../Store/ShowModelSideCart";

export const NotFound = () => {
  const { handleSideCartHide } = ShowModelSideCart()

  useEffect(()=>{
    handleSideCartHide()
  } , [handleSideCartHide])

  return (
    <>
      <div className="grid justify-items-center ">
        <img src={notFound} alt="error" className="mt-15" />
        <p className="text-main-color text-center text-2xl font-medium main-font p-1 m-2">
          File not found
        </p>
        <p className="text-main-color text-center font-medium main-font p-1 m-2">
          The site configured at this address does not contain the requested
          file.
        </p>
        <TransitionButton className={"mb-5"} path={"./"}>
          comeback to home
        </TransitionButton>
      </div>
    </>
  );
};
