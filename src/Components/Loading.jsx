import React from "react";
import { Puff } from "react-loader-spinner";

export const Loading = () => {
  return (
    <div className="flex justify-center items-center w-full h-lvh">
      <Puff
        visible={true}
        height="80"
        width="80"
        color="rgba( 109,  9 , 51 , 0.966)"
        ariaLabel="puff-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};
