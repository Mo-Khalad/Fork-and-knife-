import React from "react";
import error from "../../assets/images/404-error.png";
import { TransitionButton } from "../../Components/Ui/TransitionButton";
export const Error = () => {
  return (
    <>
      <div className="grid justify-items-center ">
        <img src={error} alt="error" className="mt-15"/>
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
