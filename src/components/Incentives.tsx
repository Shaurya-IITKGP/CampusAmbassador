"use client"
import React from 'react'
import Certificate from '../assets/cert.png'
import Goodies from '../assets/good.png'
import Invitation from '../assets/invite.png' 
import Networking from '../assets/network4.png'

const Incentives = () => {
  return (
    <div>
      <style jsx>{`
        @keyframes gradient-move {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 100% 50%;
          }
        }

        @keyframes slideInRight {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(0);
          }
        }

        @keyframes slideInLeft {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(0);
          }
        }

        @keyframes zoomIn {
          0% {
            transform: scale(0.5);
          }
          100% {
            transform: scale(1);
          }
        }

        .animate-gradient-move {
          animation: gradient-move 5s ease infinite;
        }

        .animate-slide-in-right {
          animation: slideInRight 1s ease-out forwards;
        }

        .animate-slide-in-left {
          animation: slideInLeft 1s ease-out forwards;
        }

        .animate-zoom-in {
          animation: zoomIn 1s ease-out;
        }
      `}</style>

      <div className='grid grid-flow-row mt-16 justify-center x5:scale-80 x4:scale-90 x4:mt-8 x7:scale-75'>
        <div className='text-5xl font-semibold font-mono grid justify-center bg-gradient-to-r from-lightOrange via-orange-400 to-darkOrange bg-clip-text text-transparent animate-gradient-move bg-size-200'>
          INCENTIVES
        </div>

        <div className='text-white grid grid-flow-row grid-cols-2 mt-8 justify-center gap-3 x3:grid-cols-1 x3:gap-0 x6:gap-8 x7:gap-9'>
          {/* Certificate Section */}
          <div className='grid justify-start grid-flow-col mb-4 x3:scale-80 x2:scale-75 x1:scale-90 xl:scale-100 xm:grid-flow-row'>
            <div className='mr-1 grid justify-center xn:hover:scale-105 duration-300'>
              <img src={Certificate.src} alt="none" className='h-[120px] mr-3 grid items-center duration-500 xn:hover:drop-shadow-[0_0_15px_rgba(256,0,0,0.85)] animate-zoom-in'/>
            </div>
            <div className='ml-1 font-mono text-nf grid items-center h-[120px] opacity-85 animate-slide-in-right'>
              Certificate of Acknowledgment, duly signed by the Chairman of Shaurya IIT Kharagpur and the President of Gymkhana IIT Kharagpur, upon the triumphant completion of the service period.
            </div>
          </div>

          {/* Invitation Section */}
          <div className='grid justify-start grid-flow-col mb-4 x3:scale-80 x2:scale-75 x1:scale-90 xl:scale-100 xm:grid-flow-row'>
            <div className='mr-1 grid justify-center xn:hover:scale-105 duration-300'>
              <img src={Invitation.src} alt="none" className='h-[120px] mr-3 grid items-center duration-500 xn:hover:drop-shadow-[0_0_15px_rgba(256,0,0,0.85)] animate-zoom-in'/>
            </div>
            <div className='ml-1 font-mono text-nf grid items-center h-[120px] opacity-85 animate-slide-in-left'>
              Privilege to attend all formal events and programs organized by Shaurya IIT Kharagpur.
            </div>
          </div>

          {/* Goodies Section */}
          <div className='grid justify-start grid-flow-col mb-4 x3:scale-80 x2:scale-75 x1:scale-90 xl:scale-100 xm:grid-flow-row'>
            <div className='mr-1 grid justify-center xn:hover:scale-105 duration-300'>
              <img src={Goodies.src} alt="none" className='h-[120px] mr-3 grid items-center duration-500 xn:hover:drop-shadow-[0_0_15px_rgba(256,0,0,0.85)] animate-zoom-in'/>
            </div>
            <div className='ml-1 font-mono text-nf grid items-center h-[120px] opacity-85 animate-slide-in-right'>
              Premium gift assortments and curated hampers presented upon the fest's conclusion.
            </div>
          </div>

          {/* Networking Section */}
          <div className='grid justify-start grid-flow-col mb-4 x3:scale-80 x2:scale-75 x1:scale-90 xl:scale-100 xm:grid-flow-row'>
            <div className='mr-1 grid justify-center xn:hover:scale-105 duration-300'>
              <img src={Networking.src} alt="none" className='h-[120px] mr-3 grid items-center duration-500 xn:hover:drop-shadow-[0_0_15px_rgba(256,0,0,0.85)] animate-zoom-in'/>
            </div>
            <div className='ml-1 font-mono text-nf grid items-center h-[120px] opacity-85 animate-slide-in-left'>
              Comprehensive networking with IIT Kharagpur students and representatives from a variety of other academic institutions.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Incentives
