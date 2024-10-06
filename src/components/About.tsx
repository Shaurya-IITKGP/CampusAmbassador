"use client";
import React from 'react';

const About = () => {
  return (
    <div className="h-screen relative overflow-hidden">
      {/* Stars Background */}
      <div className="absolute top-0 left-0 w-full h-full stars z-10"></div>

      {/* Main Content */}
      <div className="relative z-20 grid justify-center">
        {/* Heading */}
        <div className="text-5xl font-extrabold flex justify-center font-sans bg-gradient-to-r from-lightOrange via-orange-400 to-darkOrange bg-clip-text text-transparent">
          <div className="w-full text underline text-lightOrange underline-offset-8 ml-4 z-20">
            ABOUT US
          </div>
        </div>

        {/* About Us Text Box */}
        <div className="sm:h-3/4 my-32 mr-32 relative z-20 flex items-center overflow-hidden rounded-xl border border-slate-900 p-[1.5px] cursor-pointer">
          {/* Animated Border */}
          <div className="animate-rotate absolute inset-0 h-full rounded-full bg-[conic-gradient(#FBBF24_20deg,transparent_120deg)]"></div>
          
          {/* Text Box */}
          <div className="h-full z-30 flex rounded-[0.60rem] bg-gray-950 p-2">
            <span className="z-30 px-8 py-3 text-white flex items-center text-center font-bold text-lg font-sans transition duration-200" style={{ lineHeight: '2.0' }}>
              Shaurya, IIT Kharagpur's Premiere sport's festival, is an opportunity to bring your dreams, aspirations, and desires to life. We believe sports prepare you for life, because each game is life in miniature. We invite you to join hands with us and embark on this journey of a lifetime, with lush green grounds for a battlefield and raw passion as your weapon of choice. The home contingent stands strong in anticipation of an invasion, but you must breach our fortress first.
            </span>
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
          z-index: 10;
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
          
          animation: twinkling 5s infinite;
        }

        @keyframes twinkling {
          0% { transform: translateX(-50%) translateY(-50%) scale(1); opacity: 1; }
          50% { transform: translateX(-50%) translateY(-50%) scale(1.05); opacity: 0.8; }
          100% { transform: translateX(-50%) translateY(-50%) scale(1); opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default About;
