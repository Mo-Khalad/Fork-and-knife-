import React from 'react';
import chef1 from "../../assets/images/chef1.webp";
import chef2 from "../../assets/images/chef2.webp";
import chef3 from "../../assets/images/chef3.webp";
import chef4 from "../../assets/images/chef4.webp";
import chef5 from "../../assets/images/chef5.webp";
import chef6 from "../../assets/images/chef6.webp";

export const Chefs = () => {
  return (
    <>
      <div className={`w-full gird place-content-center`}>
         <h2 className='text-center text-5xl font-bold main-font m-5'>Chefs</h2>
         <div className='container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ls:grid-col-4 gap-4 m-auto p-7'>
         
            <ul className='rounded-main-radius main-shadow p-3 bg-second-color'>
                <li>
                   <img src={chef1} alt='chef' className='min-h-65'/>
                </li>
                <li className="font-extrabold text-1xl p-2">names : ahmed </li>
                <p className='font-sans'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sequi reiciendis consectetur accusamus, odio animi modi eaque, veritatis voluptatum, nemo nesciunt fuga similique magni recusandae quis officiis beatae nihil velit.</p>
            </ul>

            <ul className='rounded-main-radius p-3 bg-second-color'>
                <li>
                   <img src={chef2} alt='chef' className='min-h-65'/>
                </li>
                <li className="font-extrabold text-1xl p-2">names : ahmed </li>
                <p className='font-sans'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sequi reiciendis consectetur accusamus, odio animi modi eaque, veritatis voluptatum, nemo nesciunt fuga similique magni recusandae quis officiis beatae nihil velit.</p>
            </ul>

            <ul className=' p-3 bg-second-color'>
                <li>
                   <img src={chef3} alt='chef'className='min-h-65'/>
                </li>
                <li className="font-extrabold text-1xl p-2">names : ahmed </li>
                <p className='font-sans'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sequi reiciendis consectetur accusamus, odio animi modi eaque, veritatis voluptatum, nemo nesciunt fuga similique magni recusandae quis officiis beatae nihil velit.</p>
            </ul>

            <ul className='rounded-main-radius p-3 bg-second-color'>
                <li>
                   <img src={chef4} alt='chef' className='min-h-65'/>
                </li>
                <li className="font-extrabold text-1xl p-2">names : ahmed </li>
                <p className='font-sans'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sequi reiciendis consectetur accusamus, odio animi modi eaque, veritatis voluptatum, nemo nesciunt fuga similique magni recusandae quis officiis beatae nihil velit.</p>
            </ul>

        
            <ul className='rounded-main-radius p-3 bg-second-color'>
                <li>
                   <img src={chef5} alt='chef' className='min-h-65'/>
                </li>
                <li className="font-extrabold text-1xl p-2">names : ahmed </li>
                <p className='font-sans'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sequi reiciendis consectetur accusamus, odio animi modi eaque, veritatis voluptatum, nemo nesciunt fuga similique magni recusandae quis officiis beatae nihil velit.</p>
            </ul>

            <ul className='rounded-main-radius p-3 bg-second-color'>
                <li>
                   <img src={chef6} alt='chef' className='min-h-65'/>
                </li>
                <li className="font-extrabold text-1xl p-2">names : ahmed </li>
                <p className='font-sans'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sequi reiciendis consectetur accusamus, odio animi modi eaque, veritatis voluptatum, nemo nesciunt fuga similique magni recusandae quis officiis beatae nihil velit.</p>
            </ul>

         </div>
      </div>
    </>
  )
}
