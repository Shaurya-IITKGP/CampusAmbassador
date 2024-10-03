import React from 'react'

const ResponsibilityCard = ({cardData}:{cardData:string}) => {
  return (
    <div className=' mt-20 flex justify-center p-4'>
        <div className=' border border-white font-bold text-2xl text-white bg-slate-900 bg-opacity-70 rounded-md w-1/2 h-4/5 p-4'>
        {cardData}

        </div>

    </div>
  )
}

export default ResponsibilityCard