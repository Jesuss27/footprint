/* This example requires Tailwind CSS v2.0+ */
import Image from "next/image"
import handheld from "../images/handheld-min.jpg"


export default function Hero() {
    return (
      <div className="relative bg-gray-50">
        {/* Main front page UI */}
        <main className=" max-w-7xl mx-auto">
          <div className="flex pb-20 pt-16  lg:grid lg:grid-cols-2">
            <div className=" hidden lg:block relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:left-0 lg:w-1/2 lg:h-full overflow-hidden">
                <Image
                className="absolute inset-0 w-full h-full object-cover"
                src={handheld}
                alt=""
                />
            </div>
            {/* column-split */}
            <div className="flex flex-col px-4 text-left sm:px-8  lg:col-start-2 lg:py-48 xl:pr-16">
              <h1 className="text-4xl tracking-tight font-bold text-gray-900 sm:text-5xl text-center lg:text-left md:text-6xl lg:text-5xl lg:text-left xl:text-6xl">
                <span className="block xl:inline">Make every minute count. Seize the day!</span>{' '}
                
              </h1>
              <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-black bg-white  md:py-4 md:text-lg md:px-10"
                  >
                    DOWNLOAD NOW
                  </a>
                </div>
              </div>
            </div>
          </div>
          
        </main>
      </div>
    )
  }