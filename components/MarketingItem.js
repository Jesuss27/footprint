import React from 'react'

function MarketingItem({title, description, imageUrl,}) {
  return (
    <div  className='flex flex-col text-center lg:flex-row lg:text-left items-center'>
        <div className='flex shrink-0'><img src={imageUrl} className='w-20 h-20 mx-auto  rounded-full object-cover' /></div>
        <div className='flex-col p-5'>
            <h2 className='text-4xl text-gray-900 '>{title}</h2>
            <p className="text-lg mt-2 font-light text-gray-300">{description}.</p>
        </div>
    </div>
  )
}

export default MarketingItem