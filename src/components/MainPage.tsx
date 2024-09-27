import React from 'react'
import { FaArrowRight } from 'react-icons/fa';
import ResponsibilitiesSection from './Responsibility';
import SponsorsSection from './Sponsors';
import Responsibility from './Responsibility';
const MainPage = () => {

  const sponsorsData = [
    { id: 1, name: "Sponsor A", logoUrl: "https://images.unsplash.com/photo-1705096953495-8ea06879b986?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 2, name: "Sponsor B", logoUrl: "https://images.unsplash.com/photo-1644338912375-f46319e7bf5e?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 3, name: "Sponsor C", logoUrl: "https://images.unsplash.com/photo-1688220019316-3e22587dd158?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  ];
 
  return (
    <div className=" z-20 bg-opacity-55 h-screen w-screen " >
      <div className=" text-white font-bold flex font-mono justify-center select-none items-center text-8xl">
        <div className=" mt-24 animate-slide-down">
          <div className="text-center ">
            <span className="bg-gradient-to-r    from-yellow-500 via-orange-600 bg-clip-text text-transparent animate-gradient-move bg-size-200">
              CA
            </span>
            <span className="bg-gradient-to-r    from-yellow-500  via-orange-600  bg-clip-text text-transparent animate-gradient-move bg-size-200">M</span>
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

      <div className='text-white text-2xl flex justify-center mt-3'>
        <div className='text-center font-mono font-semibold animate-slide-in-right '>
          <p >
            Shaurya , IIT Kharagpur presents the Campus
          </p>
          <p>
            Ambassador Programme with the goal of fostering
          </p>
          <p>
            in the essential leadership qualities
          </p>


        </div>

      </div>
      <div className='mt-20 mb-20 flex flex-col items-center text-4xl font-bold '>
      <h1 className='text-white'>RESPONSIBILITIES</h1>
        <Responsibility></Responsibility></div>

      <SponsorsSection sponsors={sponsorsData}></SponsorsSection>

      <div id='Become a Campus Ambassador' className=' text-white mt-10 flex justify-center animate-slide-up '>

        <p >
          <button className='  border-none bg-white bg-opacity-15 p-4 rounded-md font-semibold flex space-x-2 w-96 justify-around hover:bg-opacity-75 hover:text-black'>
            <div className=''>Apply to become Shaurya CA</div>
            <div className='mt-1 '><FaArrowRight /></div>
          </button>

        </p>
      </div>



    </div>
  )
}

export default MainPage