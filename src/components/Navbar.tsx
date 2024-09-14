
import React from 'react'

const Navbar = () => {
  return (
    <div className=' flex justify-evenly mt-8'>
      <div id='logo' className='w-2/12 flex justify-center'>
        <img src="Shaurya Logo with iit kgp 1.png" alt="" />

      </div>

      <div id='main-components' className=' bg-slate-700 border border-slate-700 bg-opacity-20 text-white  flex justify-evenly p-4 cursor-pointer  w-8/12 rounded-full'>
        <div className='hover:text-lightOrange'>Home</div>
        <div className='hover:text-lightOrange'>About Us</div>
        <div className='hover:text-lightOrange'>Why CA</div>
        <div className='hover:text-lightOrange'>Responsibilities</div>
        <div className='hover:text-lightOrange'>Incentives</div>
        <div className='hover:text-lightOrange'>FAQs</div>
        <div className='hover:text-lightOrange'>Contact Us</div>

      </div>

      <div id='login-signup' className='text-white flex justify-center w-2/12'>
      <div className='flex border rounded-full border-slate-700 cursor-pointer'>
      <div className='bg-darkOrange border border-lightOrange w-1/2 font-light rounded-full p-4'>
          Login
        </div>
        <div className=' p-4 w-1/2 font-light'>
          Signup
          </div>
      </div>
       

      </div>
    </div>
  )
}

export default Navbar