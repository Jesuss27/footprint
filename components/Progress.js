import React from 'react'

function Progress({current}) {
  return (
    <div className='flex justify-around mb-5'>
        <div className={`background-yellow font-bold bg-black text-black h-10 w-10 rounded-full  flex justify-center items-center`}>1</div>
        <div className={`${current >= 1 ? "background-yellow" : "transition"} font-bold bg-gray text-black h-10 w-10 rounded-full flex justify-center items-center`}>2</div>
        <div className={`${current >= 2 ? "background-yellow" : "transition"} font-bold bg-gray text-black h-10 w-10 rounded-full flex justify-center items-center`}>3</div>
    </div>
  )
}

export default Progress