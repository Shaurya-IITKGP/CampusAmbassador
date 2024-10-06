"use client"
import React, { useContext } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { MyContext } from './Context.jsx';

const NewHome = () => {

  const {homeView , aboutView , whyCAView , responsibilityView , incentiveView , FAQView , contactView ,scrollToSection} = useContext(MyContext);
  return (
    <div ref={homeView} className='h-screen'>
      <div className=' flex w-full'>
    
        {/* Main Heading */}
        <div className=' w-1/2' >
          <div className="text-white font-extrabold flex font-sans justify-end select-none items-center md:text-8xl sm:text-5xl text-4xl">
            <div className="mt-24 animate-slide-down ">
              <div className="text-center mt-20">
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
          <div className="text-white text-2xl flex ml-24 justify-center mt-3">
            <div className=" font-sans font-semibold animate-slide-in-right">
              <p className="font-bold">UNLEASH THE SHAURYA</p>
            </div>
          </div>

          {/* CTA Button */}
          <div id="Become a Campus Ambassador" className="text-white mt-10 flex text-center  ml-12 justify-center w-full animate-slideUp">
            <button className="border border-slate-700 rounded-full text-center bg-slate-700 hover:text-white bg-opacity-15 p-4 font-semibold flex space-x-2 w-96 justify-around hover:bg-opacity-75 shadow-darkOrange shadow-2xl">
              <div>Apply to become Shaurya CA</div>
              <div className="mt-1">
                <FaArrowRight />
              </div>
            </button>
          </div>
        </div>
        <div 
        className="z-20 w-1/2 bg-opacity-55 h-screen hidden md:block bg-cover bg-center  "
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
