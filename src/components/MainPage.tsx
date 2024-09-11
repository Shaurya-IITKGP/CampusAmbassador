import React from "react";
import { FaArrowRight } from "react-icons/fa";

const MainPage = () => {
  return (
    <div className=" z-20 bg-opacity-55 h-screen ">
      <div className=" text-white font-bold flex font-mono justify-center select-none items-center text-8xl">
        <div className=" mt-24 animate-slide-down">
          <div className="text-center ">
            <span className="bg-gradient-to-r    from-yellow-500 via-orange-600 bg-clip-text text-transparent animate-gradient-move bg-size-200">
              CA
            </span>
            <span className="bg-gradient-to-r    from-yellow-500  via-orange-600  bg-clip-text text-transparent animate-gradient-move bg-size-200">
              M
            </span>
            <span className="bg-gradient-to-r    from-yellow-500  via-orange-600  bg-clip-text text-transparent animate-gradient-move bg-size-200">
              PUS
            </span>
          </div>

          <div>
            <span className="bg-gradient-to-r  from-yellow-500  via-orange-600 bg-clip-text text-transparent animate-gradient-move bg-size-200">
              AMB
            </span>
            <span className="bg-gradient-to-r  from-yellow-500  via-orange-600 bg-clip-text text-transparent animate-gradient-move bg-size-200">
              ASS
            </span>
            <span className="bg-gradient-to-r  from-yellow-500  via-orange-600 bg-clip-text text-transparent animate-gradient-move bg-size-200">
              ADOR
            </span>
          </div>
        </div>
      </div>

      <div className="text-white text-2xl flex justify-center mt-3">
        <div className="text-center font-mono font-semibold animate-slide-in-right ">
          <p>Shaurya , IIT Kharagpur presents the Campus</p>
          <p>Ambassador Programme with the goal of fostering</p>
          <p>in the essential leadership qualities</p>
        </div>
      </div>

      <div
        id="Become a Campus Ambassador"
        className=" text-white mt-10 flex justify-center animate-slide-up "
      >
        <p>
          <button className="  border-none bg-white bg-opacity-15 p-4 rounded-md font-semibold flex space-x-2 w-96 justify-around hover:bg-opacity-75 hover:text-black">
            <div className="">Apply to become Shaurya CA</div>
            <div className="mt-1 ">
              <FaArrowRight />
            </div>
          </button>
        </p>
      </div>
    </div>
  );
};

export default MainPage;
