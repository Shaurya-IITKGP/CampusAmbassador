import React from 'react'

const About = () => {
  return (
    <div className='grid justify-center '>
  
     <div className=' text-5xl font-extrabold flex justify-center font-sans  bg-gradient-to-r from-lightOrange via-orange-400 to-darkOrange bg-clip-text text-transparent bg'>
        <div className='  w-full text underline text-lightOrange underline-offset-8 ml-4'>  ABOUT US</div> 
         
        <div className="sm:min-h-[80px] my-32 mr-32 relative z-10  flex  cursor-pointer items-center overflow-hidden rounded-xl border border-slate-900 p-[1.5px]">
          <div className="animate-rotate absolute inset-0 h-full  rounded-full bg-[conic-gradient(#FBBF24_20deg,transparent_120deg)]"></div>
          <div className="sm:min-h-[50px]   z-20 flex  rounded-[0.60rem] bg-slate-900 p-2 ">
            <span className=" z-50  px-8 py-3 text-white  transition duration-200 ont-bold text-lg font-sans text-center" style={{ lineHeight: '2.0' }}>
            Shaurya, IIT Kharagpur's Premiere sport's festival, is an opportunity to bring your dreams, aspirations and desires to life. We believe sports prepare you for life, because each game is life in miniature. We invite you to join hands with us and embark on this journey of a lifetime, with lush green grounds for a battlefield and raw passion as your weapon of choice. The home contingent stands strong in anticipation of an invasion, but you must breach our fortress first.
           
            </span>
          </div>
      
      
      </div>
        

        
      </div>
    </div>
  )
}

export default About