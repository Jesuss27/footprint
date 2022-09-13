import React from 'react'

function InnerMarketing({header,description,CTA,image}) {
  return (
    <div className='w-full relative bg-white pt-20'>
            
        <main className="mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 lg:text-center">
                <div className="sm:text-center ">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                    {header}
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:text-center">
                    {description}
                </p>

                {CTA === true && 
                    <div className="mt-5 sm:mt-8 sm:flex sm:justify-center ">
                        <div className="rounded-md shadow">
                        <a
                            href="#"
                            className="flex w-full items-center justify-center rounded-md border border-transparent bg-primary px-8 py-3 text-base font-medium text-black hover:bg-indigo-700 md:py-4 md:px-10 md:text-lg"
                        >
                            Get started
                        </a>
                        </div>
                        <div className="mt-3 sm:mt-0 sm:ml-3">
                        <a
                            href="#"
                            className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-100 px-8 py-3 text-base font-medium text-indigo-700 hover:bg-indigo-200 md:py-4 md:px-10 md:text-lg"
                        >
                            Live demo
                        </a>
                        </div>
                    </div>
                }

                </div>
            </main>
            <div className="lg:h-96 lg:w-full mt-20">
                <img
                className="h-56 w-full object-cover sm:h-72 md:h-96 lg:h-full lg:w-full"
                src={image}
                alt=""
                />
            </div>
          </div>
  )
}

export default InnerMarketing