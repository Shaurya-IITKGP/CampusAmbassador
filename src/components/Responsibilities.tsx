"use client"
import React, { useState } from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

const Responsibilities = () => {
    const [select, isSelect] = useState(true);

    const responsiblity = ["BRIDGE", "PUBLICITY", "COLLEGE"];

    return (
        <div className='h-screen w-full max-w-full'>
            <div>
                <div className='text-4xl md:text-5xl underline text-lightOrange underline-offset-8 ml-4 font-extrabold font-sans'>
                    RESPONSIBILITIES
                </div>
            </div>

            <div className='flex justify-center text-white mt-16 md:mt-32 space-x-6 md:space-x-12'>
                <div className='bg-slate-900 rounded-full p-2 md:p-4 cursor-pointer'>
                    <FaArrowLeft size={32} />
                </div>
                <div className='flex flex-wrap justify-center space-x-6'>
                    {responsiblity.map((item: string, index: number) => (
                        <div
                            key={index}
                            className={select
                                ? 'text-2xl md:text-4xl underline underline-offset-8 hover:cursor-pointer text-lightOrange font-bold mt-2'
                                : 'text-2xl md:text-4xl font-bold mt-2'}
                        >
                            {item}
                        </div>
                    ))}
                </div>
                <div className='bg-slate-900 rounded-full p-2 md:p-4 cursor-pointer'>
                    <FaArrowRight size={32} />
                </div>
            </div>
        </div>
    )
}

export default Responsibilities;
