import React from 'react'
import { FaArrowRight } from 'react-icons/fa';
import Sponsorship  from  './Sponsorship'

const MainPage = () => {
  return (
    <div className=" z-20 bg-opacity-55 h-screen " >
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

     <div id='Become a Campus Ambassador' className=' text-white mt-10 flex justify-center animate-slide-up '>
        
        <p >
          <button className='  border-none bg-white bg-opacity-15 p-4 rounded-md font-semibold flex space-x-2 w-96 justify-around hover:bg-opacity-75 hover:text-black'>
          <div className=''>Apply to become Shaurya CA</div>
          <div className='mt-1 '><FaArrowRight/></div>
          </button>
          
        </p>
     </div>

      
    <Sponsorship />
    </div>
  )
}

export default MainPage;

// import React from 'react';
// import Image from 'next/image';

// const Sponsorship = () => {
//   return (
//     <div className="min-h-screen bg-black text-white py-16 px-8" id="sponsorship">
//       <div className="max-w-6xl mx-auto">
//         <h2 className="text-4xl font-bold text-center mb-12">Our Sponsors</h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

//           {/* Sponsor 1 */}
//           <div className="relative group">
//             <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-violet-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
//             <div className="relative bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center">
//               <div className="w-40 h-40 mb-4">
//                 <Image
//                   src="/path/to/sponsor1-logo.png"
//                   alt="Sponsor 1 Logo"
//                   width={160}
//                   height={160}
//                   className="object-contain"
//                 />
//               </div>
//               <h3 className="text-xl font-semibold mb-2">Sponsor 1</h3>
//               <p className="text-gray-400 text-center mb-4">
//                 Sponsor 1 has been a key partner in our event, supporting us with their excellent services.
//               </p>
//               <a
//                 href="https://sponsor1.com"
//                 className="text-amber-500 hover:text-amber-600"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 Visit Sponsor 1
//               </a>
//             </div>
//           </div>

//           {/* Sponsor 2 */}
//           <div className="relative group">
//             <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-violet-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
//             <div className="relative bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center">
//               <div className="w-40 h-40 mb-4">
//                 <Image
//                   src="/path/to/sponsor2-logo.png"
//                   alt="Sponsor 2 Logo"
//                   width={160}
//                   height={160}
//                   className="object-contain"
//                 />
//               </div>
//               <h3 className="text-xl font-semibold mb-2">Sponsor 2</h3>
//               <p className="text-gray-400 text-center mb-4">
//                 With their unparalleled commitment, Sponsor 2 has helped make our event a success.
//               </p>
//               <a
//                 href="https://sponsor2.com"
//                 className="text-amber-500 hover:text-amber-600"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 Visit Sponsor 2
//               </a>
//             </div>
//           </div>

//           {/* Sponsor 3 */}
//           <div className="relative group">
//             <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-violet-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
//             <div className="relative bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center">
//               <div className="w-40 h-40 mb-4">
//                 <Image
//                   src="/path/to/sponsor3-logo.png"
//                   alt="Sponsor 3 Logo"
//                   width={160}
//                   height={160}
//                   className="object-contain"
//                 />
//               </div>
//               <h3 className="text-xl font-semibold mb-2">Sponsor 3</h3>
//               <p className="text-gray-400 text-center mb-4">
//                 Thanks to Sponsor 3, we were able to enhance our event and deliver a better experience.
//               </p>
//               <a
//                 href="https://sponsor3.com"
//                 className="text-amber-500 hover:text-amber-600"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 Visit Sponsor 3
//               </a>
//             </div>
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default Sponsorship;
