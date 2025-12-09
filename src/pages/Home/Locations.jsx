import React from 'react'
import October from "../../assets/images/October.webp"
import Sheikh_Zayed from "../../assets/images/Sheikh Zayed.webp"
import Rehab from '../../assets/images/Rehab.webp';
 import Downtown from '../../assets/images/Downtown.webp';


export const Locations = () => {
    return (
        <>
          <div className={`w-full gird place-content-center`}>
             <h2 className='text-center text-5xl font-bold main-font m-5'>Locations</h2>
             <div className='container grid grid-cols-1 sm:grid-cols-2 gap-8 m-auto p-7'>
                
             <ul className='bg-second-color rounded-main-radius main-shadow'>
                    <li>
                       <img src={October} alt='chef' className='w-full'/>
                    </li>
                    <li className="font-extrabold text-1xl p-3">names : ahmed </li>
                    <p className='font-sans p-3 line-clamp-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sequi reiciendis consectetur accusamus, odio animi modi eaque, veritatis voluptatum, nemo nesciunt fuga similique magni recusandae quis officiis beatae nihil velit.</p>
             </ul>

                <ul className='bg-second-color rounded-main-radius main-shadow'>
                    <li>
                       <img src={Sheikh_Zayed} alt='chef' className='w-full'/>
                    </li>
                    <li className="font-extrabold text-1xl p-3">Location : Sheikh_Zayed </li>
                    <p className='font-sans p-3 line-clamp-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sequi reiciendis consectetur accusamus, odio animi modi eaque, veritatis voluptatum, nemo nesciunt fuga similique magni recusandae quis officiis beatae nihil velit.</p>
                </ul>

                <ul className='bg-second-color rounded-main-radius main-shadow'>
                    <li>
                       <img src={Downtown} alt='Downtownf' className='w-full'/>
                    </li>
                    <li className="font-extrabold text-1xl p-3">Location : October </li>
                    <p className='font-sans p-3 line-clamp-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sequi reiciendis consectetur accusamus, odio animi modi eaque, veritatis voluptatum, nemo nesciunt fuga similique magni recusandae quis officiis beatae nihil velit.</p>
                </ul>

                <ul className='bg-second-color rounded-main-radius main-shadow'>
                    <li>
                       <img src={Rehab} alt='Rehab'className='w-full'/>
                    </li>
                    <li className="font-extrabold text-1xl p-3">names : ahmed </li>
                    <p className='font-sans p-3 line-clamp-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sequi reiciendis consectetur accusamus, odio animi modi eaque, veritatis voluptatum, nemo nesciunt fuga similique magni recusandae quis officiis beatae nihil velit.</p>
                </ul>
    
             </div>
          </div>
        </>
    )
}
