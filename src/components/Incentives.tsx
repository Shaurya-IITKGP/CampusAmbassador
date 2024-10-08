"use client"
import React, { useContext } from 'react'
import Certificate from "../assets/cert.png"
import Goodies from '../assets/good.png'
import Invitation from '../assets/invite.png' 
import Image from 'next/image'
import Networking from '../assets/network4.png'
import { MyContext } from './Context.jsx';

const Incentives = () => {

  const {incentiveView} = useContext(MyContext);
  return (
    <>
    
    <div  className=" border border-darkOrange border-b opacity-50"/>
    
    <div ref={incentiveView} className='grid lg:flex justify-center mt-8 mb-20 select-none'>
  
     <div className='text-4xl lg:text-5xl font-extrabold flex flex-col lg:flex-row  lg:justify-center font-sans  bg-gradient-to-r from-lightOrange via-orange-400 to-darkOrange bg-clip-text text-transparent bg'>
        <div className='sm:w-full text-center underline text-lightOrange underline-offset-8 lg:mb-4 md:-ml-44 lg:ml-28'>INCENTIVES</div> 
        </div>

      <div className=' flex justify-center lg:h-screen '>
        
       <div className=''>
       <div className=' mt-12 md:mt-20 lg:mt-40 mr-3'>
        <div className='  '>
        <div className='text-white lg:flex lg:w-4/5  lg:gap-3 '>
          {/* Certificate Section */}
          <div className=' flex lg:mb-4  lg:w-11/12 lg:mr-8 border border-lightOrange lg:border-none'>
            <div className='  justify-center duration-300 hover:cursor-pointer text-center hover:scale-105 border border-lightOrange sm:border-none w-3/5 lg:w-4/12'>
              <Image width={120} height={120}  src={Certificate.src} alt="none" className='p-1 lg:grid items-center duration-500 '/>
            </div>
            <div className='ml-1 font-bold bg-gradient-to-b from-zinc-700 via-zinc-800 to-black bg-opacity-75 rounded-md sm:shadow-2xl  hover:shadow-orange-500 sm:shadow-white p-4 text-sm sm:text-md font-sans grid items-center lg:h-[150px] lg:w-10/12 opacity-85 '>
             <p className=' tracking-normal'>
             Certificate of Acknowledgment, duly signed by the Chairman of <span className=" text-lightOrange">Shaurya</span>  and the President of Gymkhana <span className=" text-lightOrange">IIT Kharagpur</span>.
              </p> 
            </div>
          </div>

          <div className='border border-lightOrange w-0 '></div>


          {/* Invitation Section */}
          <div className='flex  mb-4 mt-10 lg:mt-28 lg:w-11/12 lg:ml-8 lg:gap-4 border border-lightOrange lg:border-none'>
          <div className='ml-1 font-bold bg-gradient-to-b from-zinc-700 via-zinc-800 to-black bg-opacity-75 rounded-md sm:shadow-2xl  hover:shadow-orange-500 sm:shadow-white p-4 text-sm sm:text-md font-sans grid items-center sm:h-[150px] text-left lg:w-10/12 opacity-85'>
            <p>
            Privilege to attend all formal events and programs organized by <span className=" text-lightOrange font-bold">Shaurya IIT Kharagpur</span>.
            </p>

            </div>
          <div className=' ml-1 justify-center  duration-300 hover:cursor-pointer hover:scale-105  border border-lightOrange sm:border-none w-3/5 lg:w-4/12'>
          <Image width={120} height={120} src={Invitation.src} alt="none" className='p-2 lg:grid items-center duration-500  '/>

            </div>
           
          </div>
          </div>
          <div className='text-white lg:flex lg:w-4/5 justify-center  gap-3 '>
          {/* goodies Section */}
          <div className=' flex lg:mb-4  lg:w-11/12 lg:mr-8 border border-lightOrange lg:border-none mt-12 sm:mt-0'>
            <div className='  justify-center duration-300 hover:cursor-pointer text-center hover:scale-105 border border-lightOrange sm:border-none w-3/5 lg:w-4/12'>
              <Image width={120} height={120}  src={Goodies.src} alt="none" className='p-1 lg:grid items-center duration-500 '/>
            </div>
            <div className='ml-1 font-bold bg-gradient-to-b from-zinc-700 via-zinc-800 to-black bg-opacity-75 rounded-md sm:shadow-2xl  hover:shadow-orange-500 sm:shadow-white p-4 text-sm sm:text-md font-sans grid items-center sm:h-[150px] text-left lg:w-10/12 opacity-85 '>
            Premium gift assortments and curated hampers presented upon the fest&apos;s conclusion.
            </div>
          </div>
         
          <div className='border border-white w-0'></div>
       


            {/* Invitation Section */}
            <div className='flex  mb-4 mt-10 lg:mt-28 lg:w-11/12 lg:ml-8 lg:gap-4 border border-lightOrange lg:border-none'>
          <div className='ml-1 font-bold bg-gradient-to-b from-zinc-700 via-zinc-800 to-black bg-opacity-75 rounded-md sm:shadow-2xl  hover:shadow-orange-500 sm:shadow-white p-4 text-sm sm:text-md font-sans grid items-center sm:h-[150px] text-left lg:w-10/12 opacity-85'>
         <p>
         Build extensive connections with students from  <span className=" text-lightOrange">IIT Kharagpur</span> as well as from various other colleges.
         </p>


            </div>
          <div className=' ml-1 justify-center  duration-300 hover:cursor-pointer hover:scale-105  border border-lightOrange sm:border-none w-3/5 lg:w-4/12'>
          <Image width={120} height={120} src={Networking.src} alt="none" className='p-2 lg:grid items-center duration-500  '/>

            </div>
           
          </div>
            </div>
          </div>

     
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Incentives