import React from 'react'
import { Li } from "../Ui/Li"
export const Footer = () => {
  return (
    <>
  <div className="w-full bg-main-color text-gray-50 p-8 text-sm">
    <div className='container grid justify-items-start sm:grid-cols-2 md:grid-cols-4 sm:justify-items-cente p-2'> 
        <ul className='grid gap-2'>
            <Li contents={[ "Locations" , "Sheikh Zayed" , "October" , "Rehab" , "Downtown"]}/>
        </ul>

        <ul  className='grid gap-2'>
          <Li contents={[ "chefs" ,"Ibrahim" , "Ahmed" , "mohmed" , "Ibrahim"]}/>
        </ul>
      
        <ul className='grid gap-2'>
           <Li contents={["meals" ,'beef' ,'fishs' ,'pizza' , 'crab' , 'turkey']}/>
        </ul>

        <ul className='grid col-span-3 lg:col-span-1 mt-15 lg:mt-0'>
            <Li contents={['Contact']}/>
            <li className="m-2 mt-5"><i className="icon-phone fa-solid fa-phone me-1"></i> <span> 01141716932 </span></li>
            <li className="m-2 mt-5"><i className="icon-message fa-regular fa-message me-1"></i><span>mohmedkhalad390@gmail.com</span></li>
            <li className="m-2 my-5"><i className="icon-linked_in fa-brands fa-linkedin me-1"></i><span>mohmedkhalad390@gmail.com</span></li>

            <input className='bg-second-color rounded-main-radius text-center h-8 
            focus:outline-none text-main-color' placeholder="contact message"/>
        </ul>

    </div>

  </div>
</>
  )
}
