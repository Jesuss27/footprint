/* This example requires Tailwind CSS v2.0+ */
import Image from "next/image"
import mobile from "../images/mobile-phone-edited.png"

export default function Hero() {
    return (
      <div className="relative bg-gray-50">
        
  
        {/* Main front page UI */}
  
  
        <main className="bg-white max-w-7xl mx-auto">
            

          <div className="flex pb-20 pt-16">
            <div className="hidden relative w-full h-64sm:h-72 md:h-96 lg:block  lg:w-1/2 lg:h-full">
                <Image
                src={mobile}
                alt=""
                />
            </div>

            {/* column-split */}

            
            <div className="flex flex-col justify-center  mx-auto  px-4 text-center sm:px-8 lg:w-1/2 lg:py-48 xl:pr-16">
              <h1 className="text-4xl tracking-tight font-bold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl lg:text-left xl:text-6xl">
                <span className="block xl:inline">An app a day.</span>{' '}
                
              </h1>
              <p className="mt-3 max-w-md mx-auto text-lg  text-gray-900 sm:text-xl md:mt-5 md:max-w-3xl lg:text-left lg:mx-0">
                Doesn't actually keep the doctor away, unless it's a health app. Anyways, we develop apps for nearly every type of business.
              </p>
              <p className="mt-3 max-w-md mx-auto text-lg  text-gray-900 sm:text-xl md:mt-5 md:max-w-3xl lg:text-left lg:mx-0">
                Fill out the form below and we can get started on your next big thing.
              </p>
              <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-black bg-white  md:py-4 md:text-lg md:px-10"
                  >
                    Sign-Up
                  </a>
                </div>
                
              </div>
            </div>
          </div>
          
        </main>
      </div>
    )
  }