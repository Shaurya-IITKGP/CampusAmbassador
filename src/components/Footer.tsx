'use client';
import Shaurya_logo from "../assets/Shaurya_Logo.png"
import Facebook_logo from '../assets/facebook.png'
import Instagram_logo from '../assets/instagram.png'
import LinkedIn_logo from '../assets/linkedin1.png'
import Youtube_logo from '../assets/youtube1.png'


export default function Home() {
  const bubbles = Array.from({ length: 100 }, (_, i) => {
    const size = 1 + Math.random() * 1; // Size from 2rem to 6rem
    const distance = 6 + Math.random() * 4; // Distance from 6rem to 10rem
    const position = Math.random() * 100; // Position from 0% to 100%
    const time = 2 + Math.random() * 2; // Animation time from 2s to 4s
    const delay = -2 * (2 + Math.random() * 2); // Delay from -2s to -4s

    return (
      <div
        key={i}
        className="absolute bg-red-600 rounded-full"
        style={{
          left: `${position}%`,
          
          width: `${position}%`,
          height: `${size}px`,
          animation: `bubble-size ${time}s ease-in infinite ${delay}s, bubble-move ${time}s ease-in infinite ${delay}s`,
          transform: 'translate(-50%, 100%)',
        }}
      />
    );
  });

  return (
    <div className=" block bg-black font-sans  p-0 ">
      <main className="flex  text-black">
        {/* Main content goes here */}
      </main>
      <footer className="relative z-10 grid auto-rows-auto min-h-[250px] md:min-h-[200px] lg:min-h-[150px] xl:min-h-[150px] bg-red-600">
        <div className="absolute z-5 inset-x-0 top-10 blur-sm  w-[100%] block place-content-center">
          {bubbles}
        </div>
        <div className=" z-10 block md:flex   gap-16 p-8">
          <div className="flex flex-col ">
            {/* Content here */}
            <img className="w-[150px] lg:w-[200px] mx-auto " src={Shaurya_logo.src}>
            </img>
            <p className="font-bold font-nunito mt-4 text-center w-[90%] text-white md:mb-0">
            Shaurya is not just a sports fest; its a vibrant celebration of athleticism and camaraderie, where the spirit of competition ignites passion and unity among colleges nationwide. Join us to witness the thrill of sports as we elevate the game together!
            </p>
            <p className="font-bold text-[20px] text-center text-white -mb-2 mt-3">
              Follow for more...
            </p>
            <div className="flex mt-4 h-10 justify-center gap-3">
              <a href="https://www.facebook.com/share/HFLKcLA25psDVxjR/?mibextid=qi2Omg/">
                <img className="w-[35px] hover:scale-125 transition-all duration-200" src={Facebook_logo.src} alt="Facebook" />
              </a>
              <a href="https://www.instagram.com/shaurya.iitkgp?igsh=MW1wcGRqNHoyNWgzcA==">
                <img className="w-[35px] hover:scale-125 transition-all duration-200" src={Instagram_logo.src} alt="Instagram" />
              </a>
              <a href="https://www.linkedin.com/company/shaurya-iit-kharagpur/">
                <img className="w-[35px] hover:scale-125 transition-all duration-200" src={LinkedIn_logo.src} alt="LinkedIn" />
              </a>
              <a href="https://youtube.com/@shauryaiitkharagpur?si=k3lk4kX4b3kLvZpG">
                <img className="w-[35px] hover:scale-125 transition-all duration-200" src={Youtube_logo.src} alt="YouTube" />
              </a>
            </div>


          </div>
          
          
        </div>
      </footer>
     </div>
  );
}
