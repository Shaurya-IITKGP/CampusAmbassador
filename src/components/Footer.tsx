import React from 'react'
import Image from 'next/image'


const Footer = () => {
  return (
    <>
    <div className=' lg:flex block'>
        <div className=' lg:w-[45%] w-[100%] '>
            <Image width={300} height={300} className='ml-[15%] w-[50%] h-[300px]' src='/Shaurya_Logo.png' alt='shauryalogo'/>
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
                    <a  href='https://www.facebook.com/share/HFLKcLA25psDVxjR/?mibextid=qi2Omg/' ><Image width={30} height={30} className='w-[30px] h-[30px] cursor-pointer hover:brightness-200 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110' src='/facebook.png' alt="facebook3"    /></a>
                    <a href='https://www.instagram.com/shaurya.iitkgp?igsh=MW1wcGRqNHoyNWgzcA=='><Image width={30} height={30} className='w-[30px] h-[30px] cursor-pointer hover:brightness-200 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110' src='/instagram.png' alt="instagram3" /></a>
                    <a href='https://youtube.com/@shauryaiitkharagpur?si=k3lk4kX4b3kLvZpG'><Image width={30} height={30} className='w-[30px] h-[30px] cursor-pointer hover:brightness-200 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110' src='/youtube1.png' alt="youtube3" /></a>
                    <a href='https://www.linkedin.com/company/shaurya-iit-kharagpur/'><Image width={30} height={30} className='w-[30px] h-[30px] cursor-pointer hover:brightness-200 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110' src='/linkedin1.png'  alt="linkediin3" /></a>
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
                            <Image width={150} height={200} className=' w-[150px] h-[200px] bg-black pt-[2px] rounded-[20px] mx-auto mt-[2px]  ' src='Tuhsin.jpg' alt=""   />
                        </div>
                        <div className='block min-h-10 w-[100%]   '>
                            <p className='text-white pt-3 text-center '>
                            Tuhsin Suhana Rahman
                            </p>
                            <div className='flex justify-center  gap-7'>
                    <a  href='https://www.facebook.com/share/HFLKcLA25psDVxjR/?mibextid=qi2Omg/' ><Image width={30} height={30} className='w-[30px] h-[30px] cursor-pointer hover:brightness-200 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110' src='facebook.png' alt="facebook2"    /></a>
                    <a href='https://www.instagram.com/shaurya.iitkgp?igsh=MW1wcGRqNHoyNWgzcA=='><Image width={30} height={30} className='w-[30px] h-[30px] cursor-pointer hover:brightness-200 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110' src='instagram.png' alt="instagram2" /></a>
                    <a href='mailto:tuhsinsrahman.shaurya.iitkgp@gmail.com'><Image width={30} height={30} className='w-[30px] h-[30px] cursor-pointer hover:brightness-200 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110' src='mail.png' alt="mail2" /></a>
                    <a href='https://www.linkedin.com/company/shaurya-iit-kharagpur/'><Image width={30} height={30} className='w-[30px] h-[30px] cursor-pointer hover:brightness-200 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110' alt=""  src='linkedin1.png' /></a>
                </div>
                          
                            <p className='text-white pt-3 text-center'>
                                Contact:6002515029
                            </p>
                        </div>
                    </div>
                </div>
                <div className='h-[2px] bg-gradient-to-r from-amber-600 my-7 w-[70%] mx-auto lg:hidden'>
                </div>
                <div className=' w-[100%] lg:w-[50%] '>
                    <div className=' w-[70%] lg:ml-[20%] '>
                        <div className=' mx-auto  w-[154px] h-[204px] bg-gradient-to-r from-amber-500 from-10% via-orange-600 via-30% to-yellow-500 to-90% hover:animate-pulse bg-size-200 rounded-[20px]'>
                            <Image width={150} height={200} className=' w-[150px] h-[200px] bg-black pt-[2px] rounded-[20px] mx-auto mt-[2px]  ' src='Hemant.jpg' alt="hemant"  />
                        </div>
                        <div className='block min-h-10 w-[100%]   '>
                            <p className='text-white pt-3 text-center '>
                                Hemant Kamble
                            </p>
                            <div className='flex justify-center  gap-7'>
                    <a  href='https://www.facebook.com/share/HFLKcLA25psDVxjR/?mibextid=qi2Omg/' ><Image width={30} height={30} className='w-[30px] h-[30px] cursor-pointer hover:brightness-200 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110' src='facebook.png' alt="facebook"   /></a>
                    <a href='https://www.instagram.com/shaurya.iitkgp?igsh=MW1wcGRqNHoyNWgzcA=='><Image width={30} height={30} className='w-[30px] h-[30px] cursor-pointer hover:brightness-200 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110' src='instagram.png' alt="instagram" /></a>
                    <a href='mailto:hemant.kamble@shauryaiitkgp.in'><Image width={30} height={30} className='w-[30px] h-[30px] cursor-pointer hover:brightness-200 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110' src='mail.png' alt="mail" /></a>
                    <a href='https://www.linkedin.com/company/shaurya-iit-kharagpur/'><Image width={30} height={30} className='w-[30px] h-[30px] cursor-pointer hover:brightness-200 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110' src='linkedin1.png' alt="linkedin" /></a>
                </div>
                            
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
                <div className='flex justify-center gap-7'>
    <Image alt="facebook logo" width={30} height={30} className='cursor-pointer hover:brightness-200 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110' src='facebook.png' />
    <Image alt="instagram logo" width={30} height={30} className='cursor-pointer hover:brightness-200 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110' src='instagram.png' />
    <Image alt="youtube logo" width={30} height={30} className='cursor-pointer hover:brightness-200 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110' src='youtube1.png' />
    <Image alt="facebook logo" width={30} height={30} className='cursor-pointer hover:brightness-200 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110' src='facebook.png' />
</div>

             </div>
    </div>
    </>
  )
}

export default Footer