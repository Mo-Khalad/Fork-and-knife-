import React from "react";
import { Li } from "../Ui/Li";
export const Footer = () => {
  return (
    <div className="bg-main-color text-second-color lg:h-80 grid grid-cols-1 p-5 
     sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-4">
         <ul className="grid col-span-1 gap-2 mt-2 h-56 ms-5">
            <Li contents={["chefs", "Ibrahim", "Ahmed", "mohmed", "Ibrahim"]} />
          </ul>

         <ul className="grid gap-2 mt-2 col-span-1 h-56 ms-5">
            <Li
              contents={["meals", "beef", "fishs", "pizza", "crab", "turkey"]}
            />
         </ul>  

         <ul className="grid gap-2 col-span-1 mt-2 h-56 ms-5">
            <Li
              contents={[
                "Locations",
                "Sheikh Zayed",
                "October",
                "Rehab",
                "Downtown",
              ]}
            />
          </ul>

         <ul className="grid col-span-2 xl:col-span-1 gap-2 mt-2 ms-5 sm:ms-15 xl:ms-2 second-font"> 
            <Li contents={["Contact"]} />
            <li className="m-2 mt-5">
              <i className="icon-phone fa-solid fa-phone me-2"></i>
              <span> 01141716932 </span>
            </li>
            <li className="m-2 mt-5">
              <i className="icon-message fa-regular fa-message me-2"></i>
              <span>mohmedkhalad390@gmail.com</span>
            </li>
            <li className="m-2 my-5">
              <i className="icon-linked_in fa-brands fa-linkedin me-2"></i>
              <span>mohmedkhalad390@gmail.com</span>
            </li>

            <input
              className="bg-second-color w-72 p-1 rounded-main-radius text-center h-8 
               focus:outline-none text-main-color"
              placeholder="contact message"
            />
          </ul>
    </div>
  );
};
