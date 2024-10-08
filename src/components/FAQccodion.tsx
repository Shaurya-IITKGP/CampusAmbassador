"use client"
import React, { useContext, useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";
import { MyContext } from './Context.jsx';

const FAQAccordion: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index); 
  }

  const {FAQView} = useContext(MyContext);
  return (
    <>
    <div  className=" border border-darkOrange border-b opacity-50"/>

    <div ref={FAQView} className='h-screen select:none mt-8'>


      
    <div className='grid justify-center '>
  
    <div className='text-5xl pl-8 sm:pl-28 font-extrabold flex flex-col items-center font-sans bg-gradient-to-r from-lightOrange via-orange-400 to-darkOrange bg-clip-text text-transparent'>
  <div className='sm:w-full text underline text-lightOrange underline-offset-8 mb-4'>FAQ</div> 
  </div>
  <div className="flex justify-center items-center flex-col md:mt-12">
 

  {faqData.map((data, index) => {
    
    const isOpen = openIndex === index;
    return (
      <div key={index} className=' bg-gradient-to-b from-zinc-700 via-black to-zinc-900 min-h-[50px] w-3/4 rounded-xl relative shadow-md hover:shadow-yellow-600 shadow-white m-6 p-2'>
      <label className='flex justify-between items-center text-white font-nunito font-bold hover:text-yellow-500 hover:cursor-pointer sm:text-lg mt-2 pt-2 px-4'>
          <input 
              type="checkbox" 
              className='peer hidden'
              onClick={() => toggleFAQ(index)} 
          />
          {data.question}
          <div className={`transition-transform ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
              <IoIosArrowDown />
          </div>
      </label>
  
      <div className={`overflow-hidden font-nunito pt-4 sm:text-lg text-white px-4 pb-1 flex flex-col transition-all duration-300 ${isOpen ? 'max-h-full' : 'max-h-0'}`}>
          {/* Horizontal Line */}
          <div className="border-t border-lightOrange my-2"></div>
          
          <p className='mt-2 font-light'>{data.answer}</p>
      </div>
  </div>
  
  
    );
  })}
</div>

      </div>
    </div>
    </>
  );
};

const faqData = [
  {
    question: 'What is the Campus Ambassador Program?',
    answer: 'The Campus Ambassador Program is a student-led initiative where chosen ambassadors champion our brand, coordinate events, and gather feedback from their campuses. The goal of this program is to build a robust community and increase brand visibility among students.',
  },
  {
    question: 'Who can apply for the Campus Ambassador Program?',
    answer: 'Current university or college students with strong communication skills and a genuine enthusiasm for Antaragni are encouraged to apply.',
  },
  {
    question: 'How do I apply for the program?',
    answer: 'You can apply by registering on our website. The application process requires just submitting your details.',
  },
  {
    question: 'How many campus ambassadors are chosen from each campus?',
    answer: 'The number of campus ambassadors selected will vary based on the volume of applications received.',
  },
];

export default FAQAccordion;
