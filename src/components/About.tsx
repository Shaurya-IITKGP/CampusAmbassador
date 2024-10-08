"use client"
import React, { useContext } from 'react'
import { MyContext } from './Context.jsx';

const About = () => {
  const {aboutView } = useContext(MyContext);
  return (
    <>
<div className=" border border-lightOrange border-b opacity-50 mt-2"/>
    
    <div ref={aboutView} className='h-screen relative overflow-hidden mt-12'>
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden stars"></div>
    <div className='grid justify-center  '>
  
     <div className=' text-5xl font-extrabold flex justify-center font-sans  bg-gradient-to-r from-lightOrange via-orange-400 to-darkOrange bg-clip-text text-transparent bg'>
        <div className='  w-full text underline text-lightOrange underline-offset-8 ml-4 z-10 '>  ABOUT US</div> 
         
        <div className=" h-full sm:h-3/4 my-32 mr-32 relative z-10  flex  cursor-pointer items-center overflow-hidden rounded-xl  border border-slate-900 p-[1.5px]">
          <div className="animate-rotate absolute inset-0 h-full  rounded-full bg-[conic-gradient(#FBBF24_20deg,transparent_120deg)] "></div>
          
          <div className=" h-full  z-20 flex  rounded-[0.60rem] bg-gray-950  p-2 ">
            <span className=" z-50 px-8 py-3 text-white flex items-center  transition duration-200 ont-bold text-lg font-sans text-center" style={{ lineHeight: '2.0' }}>
            Shaurya, IIT Kharagpur`&apos;`s Premiere sport`&apos;`s festival, is an opportunity to bring your dreams, aspirations and desires to life. We believe sports prepare you for life, because each game is life in miniature. We invite you to join hands with us and embark on this journey of a lifetime, with lush green grounds for a battlefield and raw passion as your weapon of choice. The home contingent stands strong in anticipation of an invasion, but you must breach our fortress first.
           
            </span>
          </div>
      
      
      </div>
        

        
      </div>
    </div>
    <style jsx>{`
        .stars {
          background: #000;
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
          overflow: hidden;
        }
        .stars::before, .stars::after {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 200%;
          height: 200%;
          background-image: 
            radial-gradient(7px 7px at 40% 32%, orange, transparent),
            radial-gradient(7px 7px at 30% 30%, orange, transparent),
            radial-gradient(7px 7px at 35% 35%, orange, transparent),
            radial-gradient(7px 7px at 32% 32%, orange, transparent),
            radial-gradient(7px 7px at 37% 50%, orange, transparent),
            radial-gradient(7px 7px at 31% 42%, orange, transparent),
            radial-gradient(10px 10px at 30% 50%, orange, transparent),
            radial-gradient(10px 10px at 36% 54%, orange, transparent),
            radial-gradient(10px 10px at 31% 60%, orange, transparent),
            radial-gradient(10px 10px at 33% 52%, orange, transparent),
            radial-gradient(10px 10px at 31% 60%, orange, transparent),
            radial-gradient(10px 10px at 41% 60%, orange, transparent),
            radial-gradient(10px 10px at 42% 61%, orange, transparent),
            radial-gradient(7px 7px at 36% 58%, orange, transparent),
            radial-gradient(7px 7px at 50% 60%, white, transparent),
            radial-gradient(7px 7px at 40% 52%, white, transparent),

            radial-gradient(10px 10px at 45% 61%, white, transparent),
            radial-gradient(10px 10px at 47% 61%, red, transparent),
            radial-gradient(10px 10px at 42% 58%, red, transparent),
            radial-gradient(10px 10px at 38% 58%, red, transparent),




            radial-gradient(15px 15px at 53% 64%, orange, transparent),
            radial-gradient(10px 10px at 54% 58%, white, transparent);
            radial-gradient(10px 10px at 53% 60%, white, transparent);
            radial-gradient(10px 10px at 54% 58%, white, transparent);
            radial-gradient(10px 10px at 54% 62%, white, transparent);


          animation: twinkling 5s infinite;
        }

        @keyframes twinkling {
          0% { transform: translateX(-50%) translateY(-50%) scale(1); opacity: 1; }
          50% { transform: translateX(-50%) translateY(-50%) scale(1.05); opacity: 0.8; }
          100% { transform: translateX(-50%) translateY(-50%) scale(1); opacity: 1; }
        }
      `}</style>
    </div>
    </>
    
  )
}

export default About