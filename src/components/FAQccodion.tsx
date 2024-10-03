"use client"
import React, { useState } from 'react';
import { FaArrowCircleDown } from "react-icons/fa";

const FAQAccordion: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index); 
  }

  return (
    <div className='grid justify-center text-white h-screen'>
      <div className='text-5xl font-extrabold flex justify-center font-sans bg-gradient-to-r from-lightOrange via-orange-400 to-darkOrange bg-clip-text'>
        <div className='w-2/3 text underline text-lightOrange underline-offset-8 ml-4'> FAQ </div> 
        <div className=''>
          {faqData.map((data, index) => {
            const isOpen = openIndex === index; 
            return (
              <div key={index} className='bg-slate-900 min-h-[50px] w-3/4 rounded-xl relative shadow-md hover:shadow-yellow-600 shadow-white m-6 top-[15px] right-[30px]'>
                <label className='flex justify-center hover:text-yellow-500 hover:cursor-pointer text-lg mt-2 pt-2'>
                  <input 
                    type="checkbox" 
                    className='flex h-4 mx-20 justify-center absolute peer opacity-0'
                    onClick={() => toggleFAQ(index)} 
                  />
                  {data.question}
                  <div className={`absolute top-[15px] right-[30px] transition-transform ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
                    <FaArrowCircleDown/>
                  </div>
                </label>

                <div className={`overflow-hidden font-sans pt-4 text-lg px-4 pb-1 flex justify-center transition-all duration-300 ${isOpen ? 'max-h-full' : 'max-h-0'}`}>
                  <p>{data.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
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
