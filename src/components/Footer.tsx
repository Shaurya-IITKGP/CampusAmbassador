import React from 'react'
import Shaurya_logo from '../assets/Shaurya_Logo.png'
import facebook_icon from '../assets/facebook_icon.png'

const Footer = () => {
  return (
    <>
    <div className=' lg:flex block'>
        <div className=' lg:w-[45%] w-[100%] '>
            <img className='ml-[15%] w-[50%] h-[300px] '
             src='Shaurya_Logo.png' alt='logo'/>
             <div className='w-[90%] mx-auto'>
                <p className='text-[15px] -mt-[50px] text-white'>
                    Shaurya is the annual inter-collegiate sports fest of IIT Kharagpur, which is held over a span of three days, typically in the month of October. It was started in the year 2008 with a vision of promoting sports culture, and providing a national platform for athletes and sportsmen. Shaurya witnessed four editions, in the years 2008, 2009, 2010 and 2012.
                </p>
             </div>
             <div className='mt-10 hidden lg:block'>
                <p className='text-center text-[25px] text-white'>
                    Follow Us
                </p>
                <div className='flex justify-center  gap-7'>
                    <a  href='https://www.facebook.com/share/HFLKcLA25psDVxjR/?mibextid=qi2Omg/' ><img className='w-[30px] h-[30px] cursor-pointer hover:brightness-200 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110' src='Facebook_icon.png'   /></a>
                    <a href='https://www.instagram.com/shaurya.iitkgp?igsh=MW1wcGRqNHoyNWgzcA=='><img className='w-[30px] h-[30px] cursor-pointer hover:brightness-200 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110' src='instagram_icon.jpg'/></a>
                    <a href='https://youtube.com/@shauryaiitkharagpur?si=k3lk4kX4b3kLvZpG'><img className='w-[30px] h-[30px] cursor-pointer hover:brightness-200 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110' src='youtube_icon.jpg'/></a>
                    <a href='https://www.linkedin.com/company/shaurya-iit-kharagpur/'><img className='w-[30px] h-[30px] cursor-pointer hover:brightness-200 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110' src='facebook_icon.png' /></a>
                </div>
             </div>
        </div>
        <div className='w-[2px]  h-[400px] ml-10 mt-[100px] bg-gradient-to-b from-orange-500 '>

        </div>
        <div className='  w-[100%] lg:w-[55%] pt-[80px] pl-4 lg:pl-0'>
            <div className='  w-[100%] h-10'>
                <p className='text-white text-[25px] text-center '>
                    Contact Us
                </p>
            </div>
            <br/>
            <div className='min-h-[300px] lg:flex'>
                <div className=' w-[100%] lg:w-[50%] '>
                    <div className=' w-[70%] lg:ml-[20%]'>
                        <div className=' mx-auto  w-[154px] h-[204px] bg-gradient-to-r from-amber-500 from-10% via-orange-600 via-30% to-yellow-500 to-90% hover:animate-pulse bg-size-200 rounded-[20px]'>
                            <img className=' w-[150px] h-[200px] bg-black pt-[2px] rounded-[20px] mx-auto mt-[2px]  ' src='virat-kohli.jpg'  />
                        </div>
                        <div className='block min-h-10 w-[100%]   '>
                            <p className='text-white pt-3 text-center '>
                                Mr. Sahil Sinha
                            </p>
                            <p className='text-white pt-3  text-ellipsis text-center'>
                                Email:sahilsinha@gmail.com
                            </p>
                            <p className='text-white pt-3 text-center'>
                                Contact:9872456857
                            </p>
                        </div>
                    </div>
                </div>
                <div className='h-[2px] bg-gradient-to-r from-amber-600 my-7 w-[70%] mx-auto lg:hidden'>
                </div>
                <div className=' w-[100%] lg:w-[50%] '>
                    <div className=' w-[70%] lg:mr-[20%]'>
                        <div className=' mx-auto lg:mr-[40%] w-[154px] h-[204px] bg-gradient-to-r from-amber-500 from-10% via-orange-600 via-30% to-yellow-500 to-90% hover:animate-pulse bg-size-200 rounded-[20px]'>
                            <img className='w-[150px] h-[200px] bg-black rounded-[20px] mx-auto mt-[2px] ' src='virat-kohli.jpg' />
                        </div>
                        <div className='block min-h-10 w-[100%]   '>
                            <p className='text-white pt-3 text-center'>
                                Mr. Sahil Sinha
                            </p>
                            <p className='text-white pt-3  text-ellipsis text-center'>
                                Email:sahilsinha@gmail.com
                            </p>
                            <p className='text-white pt-3 text-center'>
                                Contact:9872456857
                            </p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
        <div className='mt-10 lg:hidden'>
                <p className='text-center text-[25px] text-white'>
                    Follow Us
                </p>
                <div className='flex justify-center  gap-7'>
                    <img className='w-[30px] h-[30px]' src='facebook_icon.png' alt='logo' />
                    <img className='w-[30px] h-[30px]' src='instagram_icon.jpg'/>
                    <img className='w-[30px] h-[30px]' src='youtube_icon.jpg'/>
                    <img className='w-[30px] h-[30px] cursor-pointer hover:brightness-200 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110' src='facebook_icon.png' />
                </div>
             </div>
    </div>
    </>
  )
}

export default Footer