"use client"
import React from 'react'
import Certificate from "../assets/cert.png"
import Goodies from '../assets/good.png'
import Invitation from '../assets/invite.png' 
import Networking from '../assets/network4.png'

const Incentives = () => {
  return (
    <>
    
    
    <div className='gird md:flex justify-center mb-20'>
  
     <div className='text-4xl md:text-5xl font-extrabold flex flex-col md:flex-row  md:justify-center font-sans  bg-gradient-to-r from-lightOrange via-orange-400 to-darkOrange bg-clip-text text-transparent bg'>
        <div className='sm:w-full text-center underline text-lightOrange underline-offset-8 md:mb-4'>INCENTIVES</div> 
        </div>

      <div className=' flex justify-center h-screen '>
        
       <div className=''>
       <div className='  mt-40 mr-3'>
        <div className='  '>
        <div className='text-white md:flex md:w-4/5  md:gap-3 '>
          {/* Certificate Section */}
          <div className=' flex md:mb-4  md:w-11/12 md:mr-8 '>
            <div className='  justify-center duration-300 hover:cursor-pointer hover:scale-105'>
              <Image src={Certificate.src} alt="none" className='md:h-[120px] p-2 mr-3 md:grid items-center duration-500 xn:hover:drop-shadow-[0_0_15px_rgba(256,0,0,0.85)] '/>
            </div>
            <div className='ml-1 font-bold bg-slate-800 bg-opacity-75 rounded-md shadow-2xl  hover:shadow-orange-500 shadow-white p-2 text-sm sm:text-md font-sans grid items-center h-[120px] text-center md:w-11/12 opacity-85 '>
              Certificate of Acknowledgment, duly signed by the Chairman of Shaurya IIT Kharagpur and the President of Gymkhana IIT Kharagpur.
            </div>
          </div>

          <div className='border border-lightOrange w-0 animate-growBorder'></div>


          {/* Invitation Section */}
          <div className='flex  mb-4 mt-10 md:mt-28 md:w-11/12 md:ml-8 gap-4'>
          <div className=' ml-4 justify-center w-[250px]  duration-300 hover:cursor-pointer hover:scale-105'>
          <Image src={Invitation.src} alt="none" className='md:h-[120px] h-[100px] pt-3 mr-3 md:grid items-center duration-500 xn:hover:drop-shadow-[0_0_15px_rgba(256,0,0,0.85)] '/>

            </div>
            <div className='ml-1 font-bold bg-slate-800 bg-opacity-75 rounded-md shadow-2xl  hover:shadow-orange-500 shadow-white p-2 text-sm sm:text-md font-sans grid items-center h-[120px] text-center md:w-11/12 opacity-85  '>
            Privilege to attend all formal events and programs organized by Shaurya IIT Kharagpur.

            </div>
          </div>
          </div>
          <div className='text-white  md:flex md:w-4/5 justify-center  gap-3 '>
          {/* goodies Section */}
          <div className=' flex mt-10 ml-2 md:ml-0 md:mb-4  md:w-11/12 md:mr-8 '>
            <div className='  justify-center w-[250px] duration-300 hover:cursor-pointer hover:scale-105'>
              <Image src={Goodies.src} alt="none" className='md:h-[120px] pb-4 h-[120px] p-2 mr-3 md:grid items-center duration-500 xn:hover:drop-shadow-[0_0_15px_rgba(256,0,0,0.85)] '/>
            </div>
            <div className='ml-1 font-bold bg-slate-800 bg-opacity-75 rounded-md shadow-2xl  hover:shadow-orange-500 shadow-white p-2 text-sm sm:text-md font-sans grid items-center h-[120px] text-center md:w-11/12 opacity-85 '>
            Premium gift assortments and curated hampers presented upon the fest&apos;s conclusion.
            </div>
          </div>

          <div className='border border-lightOrange w-0 animate-growBorder'></div>
          <div className='border border-lightOrange w-0 animate-growBorder'></div>


            {/* Invitation Section */}
            <div className='flex  mb-4 mt-10 md:mt-28 md:w-11/12 md:ml-8 gap-4'>
            <div className=' ml-4 justify-center w-[250px]  duration-300 hover:cursor-pointer hover:scale-105'>
            <Image src={Networking.src} alt="none" className='md:h-[120px] h-[100px] pt-3 mr-3 md:grid items-center duration-500 xn:hover:drop-shadow-[0_0_15px_rgba(256,0,0,0.85)] '/>

              </div>
              <div className='ml-1 font-bold bg-slate-800 bg-opacity-75 rounded-md shadow-2xl  hover:shadow-orange-500 shadow-white p-2 text-sm sm:text-md font-sans grid items-center h-[120px] text-center md:w-11/12 opacity-85  '>
              Build extensive connections with students from IIT Kharagpur as well as from various other colleges.

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
