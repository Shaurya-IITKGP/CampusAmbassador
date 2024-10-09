"use client"
import React, { useContext } from 'react'

import Image from 'next/image'
import {MyContext} from '../components/Context.jsx'

const Footer = () => {
  const {contactView} = useContext(MyContext);
  return (
    <>
    
<div ref={contactView} className=" border border-darkOrange border-b opacity-50 font-mono mt-20 lg:mt-0"/>
<div className="bg-gradient-to-b from-gray-700 via-gray-800 to-black">


<div className="lg:flex block px-4 lg:px-0 py-8 bg-gradient-to-b from-black via-slate-700 to-orange-900">

        {/* Left Section with Logo and Description */}
        <div className="lg:w-[45%] w-full flex flex-col items-center  lg:items-center">
          <Image width={200} height={200} className="w-[150px] lg:w-[200px] " src="Shaurya_Logo.png" alt="Shaurya Logo" />
          <p className="text-[15px] mt-4 lg:mt-0 text-white font-bold font-nunito text-center lg:text-left w-[90%]">
            <span className=" text-lightOrange">Shaurya </span>is the annual inter-collegiate sports fest of <span className=' text-lightOrange'>IIT Kharagpur</span>, which is held over a span of three days, typically in October. It was started in 2008 to promote sports culture and provide a national platform for athletes. <span className=" text-lightOrange">Shaurya </span> witnessed four editions, in 2008, 2009, 2010, and 2012.
          </p>

          {/* Follow Us - Shown only on large screens */}
          <div className="mt-10 hidden lg:block">
            <p className="text-center text-[25px] text-white font-nunito">Follow Us</p>
            <div className="flex justify-center gap-7 mt-4">
              <a href="https://www.facebook.com/share/HFLKcLA25psDVxjR/?mibextid=qi2Omg/">
                <Image width={30} height={30} className="w-[30px] h-[30px] hover:scale-110 transition" src="facebook.png" alt="Facebook" />
              </a>
              <a href="https://www.instagram.com/shaurya.iitkgp?igsh=MW1wcGRqNHoyNWgzcA==">
                <Image width={30} height={30} className="w-[30px] h-[30px] hover:scale-110 transition" src="instagram.png" alt="Instagram" />
              </a>
              <a href="https://youtube.com/@shauryaiitkharagpur?si=k3lk4kX4b3kLvZpG">
                <Image width={30} height={30} className="w-[30px] h-[30px] hover:scale-110 transition" src="youtube1.png" alt="YouTube" />
              </a>
              <a href="https://www.linkedin.com/company/shaurya-iit-kharagpur/">
                <Image width={30} height={30} className="w-[30px] h-[30px] hover:scale-110 transition" src="linkedin1.png" alt="LinkedIn" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider for larger screens */}
        <div className="hidden lg:block lg:h-[400px] lg:ml-10 lg:mt-10 w-[2px] bg-gradient-to-b from-orange-500"></div>

        {/* Right Section with Contact Information */}
        <div className="w-full lg:w-[55%] mt-10 lg:mt-0 lg:pl-10">
          <p className="text-lightOrange font-bold text-[25px] text-center font-nunito">Contact Us</p>
          <div className="min-h-[300px] lg:flex mt-6">
            {/* Contact 1 */}
            <div className="w-full lg:w-1/2 flex flex-col items-center">
              <div className="w-[234px] h-[234px] bg-gradient-to-r from-amber-500 via-orange-600 to-yellow-500 hover:animate-pulse rounded-[20px] mx-auto">
                <Image width={30} height={30} className="w-full h-full bg-black rounded-[20px] object-cover" src="Tuhsin.jpg" alt="Tuhsin Suhana Rahman" />
              </div>
              <p className="text-white pt-3 text-center font-nunito font-semibold">Tuhsin Suhana Rahman</p>
              <div className="flex justify-center gap-7 mt-3">
                <a href="https://www.facebook.com/profile.php?id=100086747262244">
                  <Image  width={30} height={30} className="w-[30px] h-[30px] hover:scale-110 transition" src="facebook.png" alt="Facebook1" />
                </a>
                <a href="https://www.instagram.com/tuhsin13?igsh=MWF0MXptbnBjaXQ2Nw==">
                  <Image width={30} height={30} className="w-[30px] h-[30px] hover:scale-110 transition" src="instagram.png" alt="Instagram1" />
                </a>
                <a href="mailto:tuhsinsrahman.shaurya.iitkgp@gmail.com">
                  <Image width={30} height={30} className="w-[30px] h-[30px] hover:scale-110 transition" src="mail.png" alt="Mail1" />
                </a>
                <a href="https://www.linkedin.com/in/tuhsin-suhana-rahman-5573a8251/">
                  <Image width={30} height={30} className="w-[30px] h-[30px] hover:scale-110 transition" src="linkedin1.png" alt="LinkedIn1" />
                </a>
              </div>
              <p className="text-white pt-3 text-center font-nunito font-semibold">Contact: 6002515029</p>
            </div>

            {/* Divider for smaller screens */}
            <div className="lg:hidden h-[2px] bg-gradient-to-r from-amber-600 my-7 w-[70%] mx-auto"></div>

            {/* Contact 2 */}
            <div className="w-full lg:w-1/2 flex flex-col items-center">
              <div className="w-[234px] h-[234px] bg-gradient-to-r from-amber-500 via-orange-600 to-yellow-500 hover:animate-pulse rounded-[20px] mx-auto">
                <Image width={30} height={30} className="w-full h-full bg-black rounded-[20px] object-cover object-[40%]" src="Hemant.jpg" alt="Hemant Kamble" />
              </div>
              <p className="text-white pt-3 text-center font-nunito font-semibold">Hemant Kamble</p>
              <div className="flex justify-center gap-7 mt-3">
                <a href="https://www.facebook.com/hemant.kamble.9803150?mibextid=kFxxJD">
                  <Image width={30} height={30} className="w-[30px] h-[30px] hover:scale-110 transition" src="facebook.png" alt="Facebook2" />
                </a>
                <a href="https://www.instagram.com/__h_e_m_a_n_t__k__/profilecard/?igsh=cWU4Z3Qzb25oNDZt">
                  <Image width={30} height={30} className="w-[30px] h-[30px] hover:scale-110 transition" src="instagram.png" alt="Instagram2" />
                </a>
                <a href="mailto:hemant.kamble@shauryaiitkgp.in">
                  <Image width={30} height={30} className="w-[30px] h-[30px] hover:scale-110 transition" src="mail.png" alt="Mail2" />
                </a>
                <a href="https://www.linkedin.com/in/hemant-kamble-7b5378229?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                  <Image width={30} height={30} className="w-[30px] h-[30px] hover:scale-110 transition" src="linkedin1.png" alt="LinkedIn2" />
                </a>
              </div>
              <p className="text-white pt-3 text-center font-nunito font-semibold">Contact: 9372838349</p>
            </div>
          </div>
        </div>

        {/* Follow Us - Shown only on smaller screens */}
        <div className="mt-10 lg:hidden">
          <p className="text-center text-[25px] text-white">Follow Us</p>
          <div className="flex justify-center gap-7 mt-4">
            <a href="https://www.facebook.com/share/HFLKcLA25psDVxjR/?mibextid=qi2Omg/">
              <Image width={30} height={30} className="w-[30px] h-[30px] hover:scale-110 transition" src="facebook.png" alt="Facebook4" />
            </a>
            <a href="https://www.instagram.com/shaurya.iitkgp?igsh=MW1wcGRqNHoyNWgzcA==">
              <Image width={30} height={30} className="w-[30px] h-[30px] hover:scale-110 transition" src="instagram.png" alt="Instagram4" />
            </a>
            <a href="https://youtube.com/@shauryaiitkharagpur?si=k3lk4kX4b3kLvZpG">
              <Image width={30} height={30} className="w-[30px] h-[30px] hover:scale-110 transition" src="youtube1.png" alt="YouTube4" />
            </a>
            <a href="https://www.linkedin.com/company/shaurya-iit-kharagpur/">
             
            <Image width={30} height={30} className="w-[30px] h-[30px] hover:scale-110 transition" src="linkedin1.png" alt="LinkedIn4" />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
<div className=" border border-darkOrange border-b opacity-50  font-mono"/>

      <div className="py-6  text-center">
        <p className="text-white text-[15px]">&copy; 2024 Shaurya, IIT Kharagpur. All rights reserved.</p>
      </div>
      </div>
    </>
  )
}

export default Footer;