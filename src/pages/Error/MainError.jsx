import React from 'react'
import { TransitionButton } from "../../Components/Ui/TransitionButton";
import mainError from '../../assets/images/main_error.webp'
export const MainError = () => {
 
    return (
      <>
        <div className="grid justify-items-center ">
        <img src={mainError} alt="mainError" className="mt-15 w-68"/>

          <p className="text-main-color text-center font-medium main-font p-1 m-2">
             Something went wrong. Please try again later.
          </p>
          <TransitionButton className={"mb-5"} path={"./"}>
            comeback to home
          </TransitionButton>
        </div>
      </>
    );
  };
  

