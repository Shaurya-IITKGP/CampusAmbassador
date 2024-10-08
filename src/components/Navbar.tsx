"use client";
import React, { useState , useContext } from 'react'
import { IoReorderThreeOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import Image from 'next/image'
import { MyContext } from './Context.jsx';
import NavbarModal from './NavbarModal.tsx'

const Navbar = () => {
  const [isClicked,setIsClicked] = useState<boolean>(false);
  const {homeView , aboutView , whyCAView , responsibilityView , isModalOpen , setIsModalOpen, incentiveView , FAQView , contactView } = useContext(MyContext);
  const scrollToSection = (ref:any) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
    <div className=' flex justify-between lg:justify-evenly mt-8 select-none '>
      <div id='logo' className='w-3/12 lg:w-1/12 flex justify-center'>
        <Image width={100} height={100} src="/Shaurya Logo with iit kgp 1.png" alt="" />

      </div>

      <div id='main-components' className=' bg-slate-700 h-[50px] border lg:flex hidden border-slate-700 bg-opacity-20 text-white  justify-evenly p-3 cursor-pointer  w-8/12 rounded-full'>
        <div onClick={()=>scrollToSection(homeView)} className='hover:text-lightOrange'>Home</div>
        <div onClick={()=>scrollToSection(aboutView)} className='hover:text-lightOrange'>About Us</div>
        <div onClick={()=>scrollToSection(whyCAView)} className='hover:text-lightOrange'>Why CA</div>
        <div onClick={()=>scrollToSection(responsibilityView)} className='hover:text-lightOrange'>Responsibilities</div>
        <div  onClick={()=>scrollToSection(incentiveView)} className='hover:text-lightOrange'>Incentives</div>
        <div onClick={()=>scrollToSection(FAQView)} className='hover:text-lightOrange'>FAQs</div>
        <div onClick={()=>scrollToSection(contactView)} className='hover:text-lightOrange'>Contact Us</div>

      </div>

      {/* <div id='login-signup' className='text-white flex justify-center w-2/12'>
      <div className='flex border rounded-full border-slate-700 cursor-pointer'>
      <div className='bg-darkOrange border border-lightOrange w-1/2 font-light rounded-full p-4 select-none'>
          Login
        </div>
        <div className=' p-4 w-1/2 font-light select-none '>
          Signup
          </div
       
      </div> */}

    {/*  <div className=' w-1/12 relative hidden lg:block'>
           <label className=" h-[50px] rounded-full col-span-2 border-2 border-slate-700 bg-slate-700 bg-opacity-20 w-full cursor-pointer absolute flex items-center">
        <input type="checkbox" id="check" className="sr-only peer"/>
        <span className="w-1/2 h-[80%] rounded-full bg-gradient-to-b from-[rgba(255,200,0,0.81)] to-[rgba(255,136,0,0.68)] border border-[rgb(219,197,116)] absolute left-1 top-1 transition-all peer-checked:left-[48%]"></span>
      </label>
      </div>*/}

     <div id='hamburger-for-mobile-responsive' className=' lg:hidden mr-2 sm:mr-4 md:mr-8 cursor-pointer'>

       <div onClick={(e)=>
        {
          setIsClicked(!isClicked)
          setIsModalOpen(true)}}>
       {isClicked?
         <RxCross2 color='white' size='40px'  />
         
       :
       <IoReorderThreeOutline color='white' size='40px' />}
       {isClicked?<NavbarModal/>:""}
       </div>
 
     
      </div>

     
       
     
    </div>
     <div className=" border border-lightOrange border-b mt-4 opacity-50 lg:hidden"/>
     </>
  )
}

export default Navbar 
