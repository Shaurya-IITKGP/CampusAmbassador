import React from 'react';
import Image from 'next/image';

const Sponsorship = () => {
  return (
    <div className="min-h-screen bg-black text-white py-16 px-8" id="sponsorship">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Our Sponsors</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Sponsor 1 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center transition-all duration-500 ease-in-out hover:border-1 hover:border-amber-600 hover:shadow-[0_0_10px_rgba(255,191,0,0.8),0_0_10px_rgba(251,191,36,0.9)]">
            <div className="w-40 h-40 mb-4 transform transition-transform duration-300 ease-in-out hover:scale-110">
              <img
                src="https://images5.fanpop.com/image/photos/30400000/KKR-logo-ipl-30499363-641-1000.jpg" 
                alt="Sponsor 1 Logo" 
                className="object-contain w-full h-full"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">Sponsor 1</h3>
            <p className="text-gray-400 text-center mb-4">
              Sponsor 1 has been a key partner in our event, supporting us with their excellent services.
            </p>
            <a 
              href="https://sponsor1.com" 
              className="text-amber-500 hover:text-yellow-600"
              target="_blank" 
              rel="noopener noreferrer"
            >
              Visit Sponsor 1
            </a>
          </div>

          {/* Sponsor 2 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center transition-all duration-500 ease-in-out hover:border-1 hover:border-amber-600 hover:shadow-[0_0_10px_rgba(255,191,0,0.8),0_0_10px_rgba(251,191,36,0.9)]">
            <div className="w-40 h-40 mb-4 transform transition-transform duration-300 ease-in-out hover:scale-110">
              <img
                src="https://institute.careerguide.com/wp-content/uploads/2022/07/coal-india-ltd.jpg" 
                alt="Sponsor 2 Logo" 
                width={160} 
                height={160} 
                className="object-contain w-full h-full"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">Sponsor 2</h3>
            <p className="text-gray-400 text-center mb-4">
              With their unparalleled commitment, Sponsor 2 has helped make our event a success.
            </p>
            <a 
              href="https://sponsor2.com" 
              className="text-amber-500 hover:text-yellow-600"
              target="_blank" 
              rel="noopener noreferrer"
            >
              Visit Sponsor 2
            </a>
          </div>

          {/* Sponsor 3 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center transition-all duration-500 ease-in-out hover:border-1 hover:border-amber-600 hover:shadow-[0_0_10px_rgba(255,191,0,0.8),0_0_10px_rgba(251,191,36,0.9)]">
            <div className="relative w-40 h-40 mb-4 transform transition-transform duration-300 ease-in-out hover:scale-110">
              <img 
                src="https://getdrawings.com/vectors/red-bull-logo-vector-25.jpg" 
                alt="Sponsor 3 Logo"
 
                className="relative w-full h-full"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">Sponsor 3</h3>
            <p className="text-gray-400 text-center mb-4">
              Thanks to Sponsor 3, we were able to enhance our event and deliver a better experience.
            </p>
            <a 
              href="https://sponsor3.com" 
              className="text-amber-500 hover:text-yellow-600"
              target="_blank" 
              rel="noopener noreferrer"
            >
              Visit Sponsor 3
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Sponsorship;

// import React from 'react';
// import Image from 'next/image';

// const Sponsorship = () => {
//   return (
//     <div className="min-h-screen bg-black text-white py-16 px-8" id="sponsorship">
//       <div className="max-w-6xl mx-auto">
//         <h2 className="text-4xl font-bold text-center mb-12">Our Sponsors</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
//           {/* Sponsor 1 */}
//           <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center transition-all duration-500 ease-in-out hover:border-1 hover:border-amber-600 hover:shadow-[0_0_10px_rgba(255,191,0,0.8),0_0_10px_rgba(251,191,36,0.9)] hover:scale-105">
//             <div className="w-full h-full max-w-xs max-h-xs mb-4 transform transition-transform duration-300 ease-in-out hover:scale-110">
//               <img
//                 src="https://images5.fanpop.com/image/photos/30400000/KKR-logo-ipl-30499363-641-1000.jpg" 
//                 alt="Sponsor 1 Logo" 
//                 className="object-contain w-full h-full"
//               />
//             </div>
//             <h3 className="text-xl font-semibold mb-2">Sponsor 1</h3>
//             <p className="text-gray-400 text-center mb-4">
//               Sponsor 1 has been a key partner in our event, supporting us with their excellent services.
//             </p>
//             <a 
//               href="https://sponsor1.com" 
//               className="text-amber-500 hover:text-yellow-600"
//               target="_blank" 
//               rel="noopener noreferrer"
//             >
//               Visit Sponsor 1
//             </a>
//           </div>

//           {/* Sponsor 2 */}
//           <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center transition-all duration-500 ease-in-out hover:border-1 hover:border-amber-600 hover:shadow-[0_0_10px_rgba(255,191,0,0.8),0_0_10px_rgba(251,191,36,0.9)] hover:scale-105">
//             <div className="w-full h-full max-w-xs max-h-xs mb-4 transform transition-transform duration-300 ease-in-out hover:scale-110">
//               <img
//                 src="https://institute.careerguide.com/wp-content/uploads/2022/07/coal-india-ltd.jpg" 
//                 alt="Sponsor 2 Logo" 
//                 className="object-contain w-full h-full"
//               />
//             </div>
//             <h3 className="text-xl font-semibold mb-2">Sponsor 2</h3>
//             <p className="text-gray-400 text-center mb-4">
//               With their unparalleled commitment, Sponsor 2 has helped make our event a success.
//             </p>
//             <a 
//               href="https://sponsor2.com" 
//               className="text-amber-500 hover:text-yellow-600"
//               target="_blank" 
//               rel="noopener noreferrer"
//             >
//               Visit Sponsor 2
//             </a>
//           </div>

//           {/* Sponsor 3 */}
//           <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center transition-all duration-500 ease-in-out hover:border-1 hover:border-amber-600 hover:shadow-[0_0_10px_rgba(255,191,0,0.8),0_0_10px_rgba(251,191,36,0.9)] hover:scale-105">
//             <div className="w-full h-full max-w-xs max-h-xs mb-4 transform transition-transform duration-300 ease-in-out hover:scale-110">
//               <img 
//                 src="https://getdrawings.com/vectors/red-bull-logo-vector-25.jpg" 
//                 alt="Sponsor 3 Logo" 
//                 className="object-contain w-full h-full"
//               />
//             </div>
//             <h3 className="text-xl font-semibold mb-2">Sponsor 3</h3>
//             <p className="text-gray-400 text-center mb-4">
//               Thanks to Sponsor 3, we were able to enhance our event and deliver a better experience.
//             </p>
//             <a 
//               href="https://sponsor3.com" 
//               className="text-amber-500 hover:text-yellow-600"
//               target="_blank" 
//               rel="noopener noreferrer"
//             >
//               Visit Sponsor 3
//             </a>
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default Sponsorship;
