"use client"
import React, { useContext } from 'react'
import { MyContext } from './Context.jsx';

const About = () => {
  const {aboutView } = useContext(MyContext);
  return (
    <>
    <div  className=" border border-darkOrange border-b opacity-50  mt-28 sm:mt-4"  />

     <div ref={aboutView} className=' lg:h-screen'>
    <div className='grid justify-center  '>
  
    <div className='text-5xl pl-4 pr-4 sm:pl-28 font-extrabold flex flex-col items-center font-sans bg-gradient-to-r from-lightOrange via-orange-400 to-darkOrange bg-clip-text text-transparent'>
  <div className='sm:w-full text underline text-lightOrange underline-offset-8 mb-4 mt-8'>ABOUT US</div> 
         
  <div className="sm:h-full sm:w-3/4 mt-12 sm:my-32 sm:mr-32 relative z-10 flex cursor-pointer items-center overflow-hidden rounded-xl border border-slate-900 p-[1.5px]">
    <div className="animate-rotate absolute inset-0 h-full flex justify-center rounded-full bg-[conic-gradient(#FBBF24_20deg,transparent_120deg)]"></div>
    <div className="sm:h-full z-20 flex rounded-[0.60rem] bg-gradient-to-b from-zinc-700 via-zinc-800 to-black p-2">
    <span
  className="z-50 px-4 py-3 sm:px-12 sm:py-20 flex items-center font-nunito text-white transition duration-200 font-bold text-sm md:text-lg text-center"
  style={{ lineHeight: '2.0', textAlign: 'justify', maxWidth: '1200px' }} // Added justification and maxWidth
>
  <p className=' font-semibold'>
    <span className='text-lightOrange font-bold'>
      Shaurya, IIT Kharagpur&apos;s
    </span>{' '}
    Premiere sport&apos;s festival, is an opportunity to bring your dreams,
    aspirations, and desires to life. We believe sports prepare you for life,
    because each game is life in miniature. We invite you to join hands with us
    and embark on this journey of a lifetime, with lush green grounds for a
    battlefield and raw passion as your weapon of choice. The home contingent
    stands strong in anticipation of an invasion, but you must breach our
    fortress first.
  </p>
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