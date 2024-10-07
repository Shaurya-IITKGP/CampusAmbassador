import React from 'react'

const Footer = () => {
  return (
    <>
      <div className="lg:flex block px-4 lg:px-0 py-8 bg-gray-900">
        {/* Left Section with Logo and Description */}
        <div className="lg:w-[45%] w-full flex flex-col items-center  lg:items-center">
          <img className="w-[150px] lg:w-[200px] " src="Shaurya_Logo.png" alt="Shaurya Logo" />
          <p className="text-[15px] mt-4 lg:mt-0 text-white text-center lg:text-left w-[90%]">
            Shaurya is the annual inter-collegiate sports fest of IIT Kharagpur, which is held over a span of three days, typically in October. It was started in 2008 to promote sports culture and provide a national platform for athletes. Shaurya witnessed four editions, in 2008, 2009, 2010, and 2012.
          </p>

          {/* Follow Us - Shown only on large screens */}
          <div className="mt-10 hidden lg:block">
            <p className="text-center text-[25px] text-white">Follow Us</p>
            <div className="flex justify-center gap-7 mt-4">
              <a href="https://www.facebook.com/share/HFLKcLA25psDVxjR/?mibextid=qi2Omg/">
                <img className="w-[30px] h-[30px] hover:scale-110 transition" src="facebook.png" alt="Facebook" />
              </a>
              <a href="https://www.instagram.com/shaurya.iitkgp?igsh=MW1wcGRqNHoyNWgzcA==">
                <img className="w-[30px] h-[30px] hover:scale-110 transition" src="instagram.png" alt="Instagram" />
              </a>
              <a href="https://youtube.com/@shauryaiitkharagpur?si=k3lk4kX4b3kLvZpG">
                <img className="w-[30px] h-[30px] hover:scale-110 transition" src="youtube1.png" alt="YouTube" />
              </a>
              <a href="https://www.linkedin.com/company/shaurya-iit-kharagpur/">
                <img className="w-[30px] h-[30px] hover:scale-110 transition" src="linkedin1.png" alt="LinkedIn" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider for larger screens */}
        <div className="hidden lg:block lg:h-[400px] lg:ml-10 lg:mt-10 w-[2px] bg-gradient-to-b from-orange-500"></div>

        {/* Right Section with Contact Information */}
        <div className="w-full lg:w-[55%] mt-10 lg:mt-0 lg:pl-10">
          <p className="text-white text-[25px] text-center">Contact Us</p>
          <div className="min-h-[300px] lg:flex mt-6">
            {/* Contact 1 */}
            <div className="w-full lg:w-1/2 flex flex-col items-center">
              <div className="w-[154px] h-[204px] bg-gradient-to-r from-amber-500 via-orange-600 to-yellow-500 hover:animate-pulse rounded-[20px] mx-auto">
                <img className="w-[150px] h-[200px] bg-black rounded-[20px]" src="Tuhsin.jpg" alt="Tuhsin Suhana Rahman" />
              </div>
              <p className="text-white pt-3 text-center">Tuhsin Suhana Rahman</p>
              <div className="flex justify-center gap-7 mt-3">
                <a href="https://www.facebook.com/share/HFLKcLA25psDVxjR/?mibextid=qi2Omg/">
                  <img className="w-[30px] h-[30px] hover:scale-110 transition" src="facebook.png" alt="Facebook" />
                </a>
                <a href="https://www.instagram.com/shaurya.iitkgp?igsh=MW1wcGRqNHoyNWgzcA==">
                  <img className="w-[30px] h-[30px] hover:scale-110 transition" src="instagram.png" alt="Instagram" />
                </a>
                <a href="mailto:tuhsinsrahman.shaurya.iitkgp@gmail.com">
                  <img className="w-[30px] h-[30px] hover:scale-110 transition" src="mail.png" alt="Mail" />
                </a>
                <a href="https://www.linkedin.com/company/shaurya-iit-kharagpur/">
                  <img className="w-[30px] h-[30px] hover:scale-110 transition" src="linkedin1.png" alt="LinkedIn" />
                </a>
              </div>
              <p className="text-white pt-3 text-center">Contact: 6002515029</p>
            </div>

            {/* Divider for smaller screens */}
            <div className="lg:hidden h-[2px] bg-gradient-to-r from-amber-600 my-7 w-[70%] mx-auto"></div>

            {/* Contact 2 */}
            <div className="w-full lg:w-1/2 flex flex-col items-center">
              <div className="w-[154px] h-[204px] bg-gradient-to-r from-amber-500 via-orange-600 to-yellow-500 hover:animate-pulse rounded-[20px] mx-auto">
                <img className="w-[150px] h-[200px] bg-black rounded-[20px]" src="Hemant.jpg" alt="Hemant Kamble" />
              </div>
              <p className="text-white pt-3 text-center">Hemant Kamble</p>
              <div className="flex justify-center gap-7 mt-3">
                <a href="https://www.facebook.com/share/HFLKcLA25psDVxjR/?mibextid=qi2Omg/">
                  <img className="w-[30px] h-[30px] hover:scale-110 transition" src="facebook.png" alt="Facebook" />
                </a>
                <a href="https://www.instagram.com/shaurya.iitkgp?igsh=MW1wcGRqNHoyNWgzcA==">
                  <img className="w-[30px] h-[30px] hover:scale-110 transition" src="instagram.png" alt="Instagram" />
                </a>
                <a href="mailto:hemant.kamble@shauryaiitkgp.in">
                  <img className="w-[30px] h-[30px] hover:scale-110 transition" src="mail.png" alt="Mail" />
                </a>
                <a href="https://www.linkedin.com/company/shaurya-iit-kharagpur/">
                  <img className="w-[30px] h-[30px] hover:scale-110 transition" src="linkedin1.png" alt="LinkedIn" />
                </a>
              </div>
              <p className="text-white pt-3 text-center">Contact: 9872456857</p>
            </div>
          </div>
        </div>

        {/* Follow Us - Shown only on smaller screens */}
        <div className="mt-10 lg:hidden">
          <p className="text-center text-[25px] text-white">Follow Us</p>
          <div className="flex justify-center gap-7 mt-4">
            <a href="https://www.facebook.com/share/HFLKcLA25psDVxjR/?mibextid=qi2Omg/">
              <img className="w-[30px] h-[30px] hover:scale-110 transition" src="facebook.png" alt="Facebook" />
            </a>
            <a href="https://www.instagram.com/shaurya.iitkgp?igsh=MW1wcGRqNHoyNWgzcA==">
              <img className="w-[30px] h-[30px] hover:scale-110 transition" src="instagram.png" alt="Instagram" />
            </a>
            <a href="https://youtube.com/@shauryaiitkharagpur?si=k3lk4kX4b3kLvZpG">
              <img className="w-[30px] h-[30px] hover:scale-110 transition" src="youtube1.png" alt="YouTube" />
            </a>
            <a href="https://www.linkedin.com/company/shaurya-iit-kharagpur/">
             
            <img className="w-[30px] h-[30px] hover:scale-110 transition" src="linkedin1.png" alt="LinkedIn" />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="py-6 bg-gray-900 text-center">
        <p className="text-white text-[15px]">&copy; 2024 Shaurya, IIT Kharagpur. All rights reserved.</p>
      </div>
    </>
  )
}

export default Footer;
