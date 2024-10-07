"use client"
import React, { useContext, useState } from 'react'

import {FaArrowLeft , FaArrowRight} from 'react-icons/fa'
import ResponsibilityCard from './ResponsibilityCard.tsx';
import { MyContext } from './Context.jsx';

const Responsibilities = () => {
    const [select , setSelect] = useState(1);
    const [left , setLeft] = useState(false);

    const handleClickRight = () => {
        setLeft(false);
        if (select === 3) {
            setSelect(1);
        } else {
            setSelect(select + 1);
        }
    }

    const handleClickLeft = () => {
        setLeft(true);
        if (select === 1) {
            setSelect(3);
        } else {
            setSelect(select - 1);
        }
    }

    const responsiblity = ["BRIDGE", "PUBLICITY", "COLLEGE"];
    const { responsibilityView } = useContext(MyContext);

    const description = [
        "To act as a bridge between Shaurya, IIT Kharagpur and your respective college", 
        "Publicising Shaurya in your respective colleges by circulating posters, mails or messages in the official college groups", 
        "Ensuring participation from your respective colleges for various events conducted by Shaurya."
    ];

    return (
      <div ref={responsibilityView} className='h-screen w-full'>
          <div>
              <div className='text-2xl sm:text-3xl md:text-4xl underline text-lightOrange underline-offset-8 ml-4 font-extrabold font-sans'>
                  RESPONSIBILITIES
              </div>
          </div>
  
          <div className='flex justify-center text-white mt-16 md:mt-32 space-x-6 sm:space-x-8 md:space-x-12'>
              <div onClick={handleClickLeft} className='bg-slate-900 rounded-full p-3 sm:p-4 cursor-pointer hover:bg-white hover:text-black'>
                  <FaArrowLeft className='w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8' />
              </div>
              {
                  responsiblity.map((item, index) => (
                      <div 
                          key={index} 
                          className={(select === index + 1) 
                              ? 'text-xl sm:text-2xl md:text-3xl underline underline-offset-8 hover:cursor-pointer text-lightOrange font-bold mt-2' 
                              : 'text-xl sm:text-2xl md:text-3xl font-bold mt-2'}>
                          {item}
                      </div>
                  ))
              }
              <div onClick={handleClickRight} className='bg-slate-900 rounded-full p-3 sm:p-4 cursor-pointer hover:bg-white hover:text-black'>
                  <FaArrowRight className='w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8' />
              </div>
          </div>
  
          <div className='w-full h-4/5 flex justify-center'>
              <div className='w-full h-full'>
                  {description.map((item, index) => (
                      select === (index + 1) 
                          ? <ResponsibilityCard key={index} cardData={item} animate={!left ? 'animate-slide-in-right' : "animate-slide-in-left"} /> 
                          : null
                  ))}
              </div>
          </div>
      </div>
  )
  
}

export default Responsibilities;
