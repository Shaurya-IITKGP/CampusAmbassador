import React from 'react'

const ResponsibilityCard = ({cardData , animate}:{cardData:string , animate:string}) => {
  return (
    <div className=' mt-20 flex justify-center '>
        <div className={'font-bold text-3xl font-sans text-white bg-gradient-to-b from-zinc-700 via-zinc-800 to-black bg-opacity-80 rounded-md w-1/2 h-4/5 p-12 hover:shadow-white  shadow-2xl shadow-lightOrange '+animate}>
        {cardData}

        </div>

    </div>
  )
}

export default ResponsibilityCard