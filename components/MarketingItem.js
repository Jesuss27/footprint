import React from 'react'
import Image from 'next/image'

function MarketingItem({title, description, imageUrl,}) {
  return (
    <div  className='flex flex-col text-center lg:flex-row lg:text-left items-center'>
        <div className='flex w-20 h-20 shrink-0'><Image src={imageUrl} className='w-full h-full mx-auto  rounded-full object-cover' /></div>
        <div className='flex-col p-5'>
            <h2 className='text-4xl text-gray-900 text-left md:text-center lg:text-left '>{title}</h2>
            <p className="text-lg mt-2 font-light text-gray-300 text-left md:text-center lg:text-left ">{description}.</p>
        </div>
    </div>
  )
}

export default MarketingItem