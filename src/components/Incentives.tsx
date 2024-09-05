import React from 'react'
import Certificate from '../assets/cert.png'
import Goodies from '../assets/good.png'
import Invitation from '../assets/invite.png' 
import Networking from '../assets/network4.png'
import 'animate.css'

const Incentives = () => {
  return (
    <div className='grid grid-flow-row mt-16 justify-center x5:scale-80 x4:scale-90 x4:mt-8 x7:scale-75'>

        <div className='text-5xl font-semibold font-mono grid justify-center bg-gradient-to-r  from-red-600  to-white bg-clip-text text-transparent animate-gradient-move bg-size-200'>INCENTIVES</div>

        <div className='text-white grid grid-flow-row grid-cols-2 mt-8 justify-center gap-3 x3:grid-cols-1 x3:gap-0 x6:gap-8 x7:gap-9'>

                    <div className='grid justify-start grid-flow-col mb-4 x3:scale-75 x2:scale-75 x1:scale-90 xl:scale-100 x7:grid-flow-row'>
                        <div className='mr-1 grid justify-center xn:hover:scale-105 duration-300'>
                            <img src={Certificate.src} alt="none" className='h-[120px] mr-3 grid items-center duration-500 xn:hover:drop-shadow-[0_0_15px_rgba(256,0,0,0.85)] animate__animated animate__zoomIn animate__delay-1s'/>
                        </div>
                        <div className='ml-1 font-mono text-nf grid items-center h-[120px] opacity-85 animate__animated animate__slideInRight animate__fast'>Certificate of Appreciation signed by the Chairman, Shaurya IIT Kharagpur and President, Gymkhana IIT Kharagpur after the successful completion of the tenure.</div>
                    </div>


                    <div className='grid justify-start grid-flow-col mb-4 x3:scale-75 x2:scale-75 x1:scale-90 xl:scale-100 x7:grid-flow-row'>
                        <div className='mr-1 grid justify-center  xn:hover:scale-105 duration-300'>
                            <img src={Invitation.src} alt="none" className='h-[120px] mr-3 grid items-center duration-500 xn:hover:drop-shadow-[0_0_15px_rgba(256,0,0,0.85)] animate__animated animate__zoomIn animate__delay-1s'/>
                        </div>
                        <div className='ml-1 font-mono text-nf grid items-center h-[120px] opacity-85 animate__animated animate__slideInLeft animate__fast'>Invitation to all the events conducted by Shaurya IIT Kharagpur.</div>
                    </div>


                    <div className='grid justify-start grid-flow-col mb-4 x3:scale-75 x2:scale-75 x1:scale-90 xl:scale-100 x7:grid-flow-row'>
                        <div className='mr-1 grid justify-center xn:hover:scale-105 duration-300'>
                            <img src={Goodies.src} alt="none" className='h-[120px] mr-3 grid items-center duration-500 xn:hover:drop-shadow-[0_0_15px_rgba(256,0,0,0.85)] animate__animated animate__zoomIn animate__delay-1s'/>
                        </div>
                        <div className='ml-1 font-mono text-nf grid items-center h-[120px] opacity-85 animate__animated animate__slideInRight animate__fast'>Goodies and Hampers after the fest.</div>
                    </div>
                    

                    <div className='grid justify-start grid-flow-col mb-4 x3:scale-75 x2:scale-75 x1:scale-90 xl:scale-100 x7:grid-flow-row'>
                        <div className='mr-1 grid justify-center xn:hover:scale-105 duration-300'>
                           <img src={Networking.src} alt="none" className='h-[120px] mr-3 grid items-center duration-500 xn:hover:drop-shadow-[0_0_15px_rgba(256,0,0,0.85)] animate__animated animate__zoomIn animate__delay-1s'/> 
                        </div>
                        <div className='ml-1 font-mono text-nf grid items-center h-[120px] opacity-85 animate__animated animate__slideInLeft animate__fast'>Extensive networking with students of IIT Kharagpur and students from various colleges.</div>
                    </div>

                    
        </div>

    </div>
  )
}

export default Incentives