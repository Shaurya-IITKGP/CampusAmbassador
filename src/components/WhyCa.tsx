"use client"
import React, { useContext } from 'react'
import { MyContext } from './Context.jsx';

const WhyCa = () => {
  const {whyCaView} = useContext(MyContext);
  return (
    <div ref={whyCaView} className=' sm:h-screen'>
    <div  className=" border border-darkOrange border-b opacity-50 mt-24 sm:mt-0"  />

    <div className='grid justify-center '>
  
    <div className='text-5xl pl-4 pr-4 sm:pl-28 font-extrabold flex flex-col items-center font-sans bg-gradient-to-r from-lightOrange via-orange-400 to-darkOrange bg-clip-text text-transparent'>
  <div className='sm:w-full text underline text-lightOrange underline-offset-8 mb-4 mt-8'>WHY CA?</div> 
         
  <div className="sm:h-3/4 sm:w-3/4 mt-12 sm:my-32 sm:mr-32 relative z-10 flex cursor-pointer items-center overflow-hidden rounded-xl border border-slate-900 p-[1.5px]">
    <div className="animate-rotate absolute inset-0 h-full rounded-full bg-[conic-gradient(#FBBF24_20deg,transparent_120deg)]"></div>
    <div className="sm:h-full z-20 flex rounded-[0.60rem] bg-gradient-to-b from-zinc-700 via-zinc-800 to-black p-2">
    <span
  className="z-50 px-3 py-4 sm:px-12 sm:py-20 flex font-nunito items-center text-white transition duration-200 font-bold text-sm md:text-lg text-center"
  style={{ lineHeight: '2.0', textAlign: 'justify', maxWidth: '1200px' }} // Added justification and maxWidth
>
  <p>
    Be a part of <span className="text-lightOrange font-bold">Shaurya</span>, the renowned sports fest at{' '}
    <span className="font-bold text-lightOrange">IIT Kharagpur</span>, and elevate your love for sports. 
    As a <span className="text-lightOrange font-bold">Campus Ambassador</span>, you&apos;ll gain valuable experience in event promotion and management, 
    all while building your communication and leadership skills. You&apos;ll have the chance to organize exciting sports competitions, 
    connect with fellow athletes from across the country, and stay on top of the latest trends in the sports world. 
    Join us and play a key role in making Shaurya a memorable and impactful event.
  </p>
</span>

    </div>
  </div>

        

        
      </div>
    </div>
    </div>
  )
}

export default WhyCa