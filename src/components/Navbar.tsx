import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      <div className=" flex justify-center ">
        <div
          className=" bg-gray-800 bg-opacity-60 w-full flex justify-between pl-4 pr-8"
          id="components-layer"
        >
          <div id="logo" className="text-xl">
            <img height={100} width={100} src="Shaurya_Logo.png" alt="Logo" />
          </div>

          <div
            id="other-buttons"
            className=" flex flex-row space-x-10 mt-8 text-white font-mono select-none   "
          >
            <div className="cursor-pointer  ">Home</div>
            <div className="cursor-pointer  ">About Us</div>
            <div className="cursor-pointer  ">Responsibilities</div>
            <div className="cursor-pointer  ">Incentives</div>
            <div className="cursor-pointer  ">Gifts</div>
            <div className="cursor-pointer  ">Contact Us</div>

            <div className="cursor-pointer   ">
              <button className=" border-none pb-1 rounded-md bg-red-500 pl-2 pr-2 hover:bg-white hover:text-red-500 ">
                Signup
              </button>
            </div>
            <div className="cursor-pointer flex space-x-1  ">
              <span>Signin</span>

              <span className="mt-1">
                <FaArrowRight />
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className=" border border-b-0 border-gray-200 border-opacity-25" />
    </>
  );
};

export default Navbar;
