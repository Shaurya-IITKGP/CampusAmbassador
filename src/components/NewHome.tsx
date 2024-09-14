import React from 'react'
import {FaArrowRight} from 'react-icons/fa'

const NewHome = () => {
  return (
    <div>
        <div className=" z-20 bg-opacity-55 h-screen " >
    <div className=" text-white font-extrabold flex font-sans justify-center select-none items-center text-8xl">
      <div className=" mt-24 animate-slide-down">
      <div className="text-center mt-20  ">
  <span className="bg-gradient-to-r from-lightOrange via-orange-400 to-darkOrange bg-clip-text text-transparent animate-gradient-move bg-size-200 ">
    CA
  </span>
  <span className="bg-gradient-to-r  from-lightOrange via-orange-500 to-darkOrange bg-clip-text text-transparent animate-gradient-move bg-size-200">M</span>
  <span className="bg-gradient-to-r  from-lightOrange  via-orange-500 to-darkOrange bg-clip-text text-transparent animate-gradient-move bg-size-200">
    PUS
  </span>
</div>


        <div>
  <span className="bg-gradient-to-r  from-lightOrange via-orange-400 to-darkOrange bg-clip-text text-transparent animate-gradient-move bg-size-200">
  AMBASSADOR 
          </span>
       
        </div>
        </div>
        
   
    </div>

     <div className='text-white text-2xl flex justify-center mt-3'>
      <div className='text-center font-sans font-semibold animate-slide-in-right '>
      <p className='font-bold' >
          UNLEASH THE SHAURYA
        </p>
  
      </div>
   
     </div>

     <div id='Become a Campus Ambassador' className=' text-white mt-10 flex justify-center animate-slide-up '>
        
        <p >
          <button className='  border border-slate-700 rounded-full bg-slate-700 hover:text-white bg-opacity-15 p-4 font-semibold flex space-x-2 w-96 justify-around hover:bg-opacity-75 shadow-darkOrange shadow-2xl'>
          <div className=''>Apply to become Shaurya CA</div>
          <div className='mt-1 '><FaArrowRight/></div>
          </button>
          
        </p>
     </div>
    
      
    
    </div>
    </div>
  )
}

export default NewHome