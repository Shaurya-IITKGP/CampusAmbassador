"use client"
import React, { useContext } from 'react'
import Certificate from '../assets/cert.png'
import Goodies from '../assets/good.png'
import Invitation from '../assets/invite.png' 
import Networking from '../assets/network4.png'
import Image from 'next/image'
import { MyContext } from './Context.jsx';

const Incentives = () => {
  const {incentiveView} = useContext(MyContext);
  return (
    <>
    
    
    <div ref={incentiveView} className='flex justify-center'>
  
     <div className='text-5xl font-extrabold flex justify-center font-sans  bg-gradient-to-r from-lightOrange via-orange-400 to-darkOrange bg-clip-text text-transparent bg'>
        <div className='w-full text-center underline text-lightOrange underline-offset-8 ml-4'>INCENTIVES</div> 
        </div>

      <div className=' flex justify-center h-screen '>
        
       <div className=''>
       <div className='  mt-40'>
        <div className='  '>
        <div className='text-white flex w-4/5  gap-3 '>
          {/* Certificate Section */}
          <div className=' flex mb-4  w-11/12 mr-8 '>
            <div className='  justify-center duration-300 hover:cursor-pointer hover:scale-105'>
              <Image width={120} height={120} src={Certificate.src} alt="none" className='h-[120px] p-2 mr-3 grid items-center duration-500 xn:hover:drop-shadow-[0_0_15px_rgba(256,0,0,0.85)] '/>
            </div>
            <div className='ml-1 font-bold bg-slate-800 bg-opacity-75 rounded-md shadow-2xl  hover:shadow-orange-500 shadow-white p-2 text-md font-sans grid items-center h-[120px] text-center w-11/12 opacity-85 '>
              Certificate of Acknowledgment, duly signed by the Chairman of Shaurya IIT Kharagpur and the President of Gymkhana IIT Kharagpur, upon the triumphant completion of the service period.
            </div>
          </div>

          <div className='border border-lightOrange w-0 animate-growBorder'></div>


          {/* Invitation Section */}
          <div className='flex  mb-4 mt-28 w-11/12 ml-8 '>
          <div className='  justify-center duration-300 hover:cursor-pointer hover:scale-105'>
          <Image  width={120} height={120} src={Invitation.src} alt="none" className='h-[120px] mr-3 grid items-center duration-500 xn:hover:drop-shadow-[0_0_15px_rgba(256,0,0,0.85)] '/>

            </div>
            <div className='ml-1 font-bold bg-slate-800 bg-opacity-75 rounded-md shadow-xl  hover:shadow-orange-500 shadow-white p-2 text-md font-sans grid items-center h-[120px] w-11/12 opacity-85 '>
            Privilege to attend all formal events and programs organized by Shaurya IIT Kharagpur.

            </div>
          </div>
          </div>
          <div className='text-white flex w-4/5 justify-center  gap-3 '>
          {/* Certificate Section */}
          <div className=' flex  mb-4 w-11/12 mr-8 '>

            <div className='  justify-center duration-300 hover:cursor-pointer hover:scale-105'>
            <Image width={120} height={120} src={Goodies.src} alt="none" className='h-[120px] mr-3 grid items-center duration-500 xn:hover:drop-shadow-[0_0_15px_rgba(256,0,0,0.85)] '/>

            </div>
            <div className='ml-1 font-bold bg-slate-800 bg-opacity-75 rounded-md shadow-xl hover:shadow-orange-500 shadow-white p-2 text-md font-sans grid items-center h-[120px] w-11/12 opacity-85 '>
            Premium gift assortments and curated hampers presented upon the fest`&apos;`s conclusion.

            </div>
          </div>

          <div className=' border border-white w-0 animate-growBorder '/>

          {/* Invitation Section */}
          <div className='flex  mb-4 mt-28 w-11/12 ml-8'>
          <div className='  justify-center duration-300 hover:cursor-pointer hover:scale-105'>
          <Image width={120} height={120} src={Networking.src} alt="none" className='h-[120px] mr-3 grid items-center duration-500 xn:hover:drop-shadow-[0_0_15px_rgba(256,0,0,0.85)] '/>


            </div>
            <div className='ml-1 font-bold bg-slate-800 bg-opacity-75 rounded-md shadow-xl  hover:shadow-orange-500 shadow-white p-2 text-md font-sans grid items-center h-[120px] w-11/12 opacity-85 '>
            Comprehensive networking with IIT Kharagpur students and representatives from a variety of other academic institutions.


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
