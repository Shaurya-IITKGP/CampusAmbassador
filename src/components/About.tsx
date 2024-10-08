"use client"
import React, { useContext } from 'react'
import { MyContext } from './Context.jsx';

const About = () => {
  const {aboutView } = useContext(MyContext);
  return (
    <>
     <div className=' '>
    <div className='grid justify-center '>
  
    <div className='text-5xl pl-8 sm:pl-28 font-extrabold flex flex-col items-center font-sans bg-gradient-to-r from-lightOrange via-orange-400 to-darkOrange bg-clip-text text-transparent'>
  <div className='sm:w-full text underline text-lightOrange underline-offset-8 mb-4'>ABOUT US</div> 
         
  <div className="sm:h-3/4 sm:w-3/4 my-32 sm:mr-32 relative z-10 flex cursor-pointer items-center overflow-hidden rounded-xl border border-slate-900 p-[1.5px]">
    <div className="animate-rotate absolute inset-0 h-full rounded-full bg-[conic-gradient(#FBBF24_20deg,transparent_120deg)]"></div>
    <div className="sm:h-full z-20 flex rounded-[0.60rem] bg-slate-950 p-2">
      <span className="z-50 px-8 py-3 flex items-center text-white transition duration-200 font-bold text-sm md:text-lg font-sans text-center" style={{ lineHeight: '2.0' }}>
      Shaurya, IIT Kharagpur`&apos;`s Premiere sport`&apos;`s festival, is an opportunity to bring your dreams, aspirations and desires to life. We believe sports prepare you for life, because each game is life in miniature. We invite you to join hands with us and embark on this journey of a lifetime, with lush green grounds for a battlefield and raw passion as your weapon of choice. The home contingent stands strong in anticipation of an invasion, but you must breach our fortress first.
           
      </span>
    </div>
  </div>

        

        
      </div>
    </div>

  
    </div>
    </>
    
  )
}

export default About