"use client"
import React, { useContext } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { MyContext } from './Context.jsx';

const NewHome = () => {

  const {homeView } = useContext(MyContext);
  return (
    <div ref={homeView} className='lg:h-screen'>
      <div className=' flex w-full'>
    
        {/* Main Heading */}
        <div className=' w-full lg:w-1/2' >
          <div className="text-white font-extrabold flex font-sans justify-center lg:justify-end select-none items-center lg:text-7xl sm:text-5xl text-5xl">
            <div className="mt-24 animate-slide-down ">
              <div className=" text-center mt-20">
                <span className="bg-gradient-to-r from-lightOrange via-orange-400 to-darkOrange bg-clip-text text-transparent animate-gradient-move bg-size-200">
                  CA
                </span>
                <span className="bg-gradient-to-r from-lightOrange via-orange-500 to-darkOrange bg-clip-text text-transparent animate-gradient-move bg-size-200">
                  M
                </span>
                <span className="bg-gradient-to-r from-lightOrange via-orange-500 to-darkOrange bg-clip-text text-transparent animate-gradient-move bg-size-200">
                  PUS
                </span>
              </div>

              <div>
                <span className="bg-gradient-to-r from-lightOrange via-orange-400 to-darkOrange bg-clip-text text-transparent animate-gradient-move bg-size-200">
                  AMBASSADOR
                </span>
              </div>
            </div>
          </div>

          {/* Subheading */}
          <div className="text-white text-xl lg:text-2xl flex justify-end md:justify-center lg:justify-end -ml-8 sm:-ml-0 mt-3 w-full">
            <div className=" font-sans flex font-semibold animate-slide-in-right">
              <p className="text-sm font-normal bg-gradient-to-b from-zinc-400 via-zinc-500 to-zinc-600 bg-clip-text text-transparent animate-gradient   ">UNLEASH THE SHAURYA</p>
            </div>
          </div>

          <div className="lg:hidden text-white p-2 mt-6 flex justify-center text-center">
  <div className="font-sans font-bold w-11/12 sm:w-4/5 text-center " 
    style={{ lineHeight: '1.5', textAlign: 'justify', maxWidth: '800px' }}>
    Shaurya IIT Kharagpur presents you the chance to become a 
    <span className="font-extrabold text-lightOrange"> CAMPUS </span>
    <span className="font-extrabold text-lightOrange"> AMBASSADOR </span> 
    and take your skills to the next level.
  </div>
</div>



          {/* CTA Button */}
          <div id="Become a Campus Ambassador" className="text-white mt-10 flex lg:justify-end justify-center mr-0 md:mr-0 lg:mr-20   animate-slideUp">

            <button className="border border-slate-700 rounded-full text-center bg-slate-700 hover:text-white bg-opacity-15 p-4 font-semibold flex space-x-2 lg:w-96  justify-around hover:bg-opacity-75 shadow-darkOrange shadow-2xl">
              <div>Apply to become Shaurya CA</div>
              <div className="mt-1">
                <FaArrowRight />
              </div>
            </button>
          </div>
         
        </div>
        <div 
        className="z-20 md:w-full lg:w-1/2 bg-opacity-55 h-screen hidden lg:block bg-cover bg-center  "
        style={{ backgroundImage: 'url("Shaurya_Football.png")' }} // Replace with your image path
      >
      </div>
      </div>

      <style jsx global>{`
  @keyframes gradient-move {
    0%, 100% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
  }

  @keyframes slideUp {
    0% {
      transform: translateY(100%);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes slideDown {
    0% {
      transform: translateY(-100%);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes slideInRight {
    0% {
      transform: translateX(100%);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }
`}</style>


    </div>
  );
};

export default NewHome;
