"use client"
import React, { useContext, useState } from 'react'

import {FaArrowLeft , FaArrowRight} from 'react-icons/fa'
import ResponsibilityCard from './ResponsibilityCard.tsx';
import { MyContext } from './Context.jsx';

const Responsibilities = () => {
    const [select , setSelect] = useState(1);
    const [left , setLeft] = useState(false);
    const handleClickRight = ()=>
      {
         setLeft(false);
         if(select===3){
            setSelect(1);
          }
          else{
            setSelect(select+1);
          }
       
    }

    const handleClickLeft = ()=>
      {
         setLeft(true);
         if(select===1){
            setSelect(3);
          }
          else{
            setSelect(select-1);
          }
       
    }


    console.log(select);

    const responsiblity = ["BRIDGE" , "PUBLICITY" , "COLLEGE"];

    const {responsibilityView} = useContext(MyContext);
    

    const description = ["To act as a bridge between Shaurya, IIT Kharagpur and your respective your college" , "Publicising Shaurya in your respective colleges by circulating posters, mails or messages in the official college groups","Ensuring participation from your respective colleges for various events conducted by Shaurya."]
  return (
    <div ref={responsibilityView} className=' h-screen w-full'>
       <div>
       <div className='  text-5xl underline text-lightOrange underline-offset-8 ml-4 font-extrabold font-sans'> RESPONSIBILITIES</div> 
       </div>

       <div  className='flex justify-center text-white mt-32 space-x-12'>
        <div onClick={handleClickLeft} className=' bg-slate-900 rounded-full p-4 cursor-pointer hover:bg-white hover:text-black'><FaArrowLeft size={32}/></div>
         {
            responsiblity.map((item:string,index:number)=>(
                <div key={index} className={(select===index+1)?'text-4xl underline underline-offset-8 hover:cursor-pointer text-lightOrange font-bold mt-2 ':'text-4xl font-bold mt-2 '}>
                   { item}
                </div>
            ))
         }
         <div onClick={handleClickRight} className=' bg-slate-900 rounded-full p-4 cursor-pointer hover:bg-white hover:text-black'><FaArrowRight size={32}/></div>
       </div>

       <div className='w-full h-4/5 flex justify-center '>
         <div className='w-full h-full'>
            {description.map((item,index)=>(
          select===(index+1) ? <ResponsibilityCard key={index} cardData={item} animate={!left?'animate-slide-in-right':"animate-slide-in-left"}/> :""
               
            ))}

         </div>
       </div>
       
    </div>
  )
}

export default Responsibilities