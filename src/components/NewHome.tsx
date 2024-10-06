"use client"
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const NewHome = () => {
  return (
    <div>
        <div className="relative bg-custom-bg bg-cover bg-center bg-fixed h-screen flex flex-col justify-center items-center">
      <div className="z-20 bg-opacity-55  h-screen sm:flex sm:flex-col sm:justify-center items-center">
        {/* Main Heading */}
        <div className="text-white font-extrabold flex font-sans justify-center select-none items-center text-4xl sm:text-8xl">
          <div className="mt-24 animate-slide-down">
            <div className="text-center mt-20">
              <span className="bg-gradient-to-r from-lightOrange via-orange-400 to-darkOrange bg-clip-text text-transparent animate-gradient-move  bg-size-200">
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
        <div className="text-white text-2xl flex justify-center mt-3">
          <div className="text-center font-sans font-semibold animate-slide-in-right">
            <p className="font-bold">UNLEASH THE SHAURYA</p>
          </div>
        </div>

        {/* CTA Button */}
        <div id="Become a Campus Ambassador" className="text-white mt-10 flex justify-center animate-slide-up">
          <button className="border border-slate-700 rounded-full bg-slate-700 hover:text-white bg-opacity-15 p-4 font-semibold flex space-x-2 w-96 justify-around hover:bg-opacity-75 shadow-darkOrange shadow-2xl">
            <div>Apply to become Shaurya CA</div>
            <div className="mt-1">
              <FaArrowRight />
            </div>
          </button>
        </div>
      </div>
      </div>

      <style jsx>{`
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

        .animate-gradient-move {
          animation: gradient-move 5s ease infinite;
        }

        .animate-slide-up {
          animation: slideUp 1s ease-out;
        }

        .animate-slide-down {
          animation: slideDown 1s ease-out;
        }

        .animate-slide-in-right {
          animation: slideInRight 1s ease-out;
        }
          .bg-custom-bg {
          background-image: url('background.png'); 
          background-attachment: fixed;
          background-size: 100% 80%; 
         
          background-repeat: no-repeat;
        }
      `}</style>
    </div>
  );
};

export default NewHome;
