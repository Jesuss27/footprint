/* This example requires Tailwind CSS v2.0+ */
import Link from 'next/link'
import hero from "../images/Hero-min.jpg"
import Image from 'next/image'

export default function Hero() {
  return (
    <div className="relative bg-gray-50">
      

      {/* Main front page UI */}


      <main className="lg:relative bg-white">
        <div className="mx-auto max-w-7xl w-full pt-16 pb-8  text-center lg:py-48 lg:text-left">
          <div className="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
            <h1 className="text-4xl text-left md:text-center tracking-tight font-bold text-gray-900 sm:text-5xl md:text-6xl lg:text-left lg:text-5xl xl:text-6xl">
              <span className="block xl:inline">WELCOME.</span>{' '}
              
            </h1>
            <p className="mt-3 mx-auto text-lg text-gray-900 text-left md:text-center lg:text-left sm:text-xl md:mt-5 md:max-w-3xl">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
              fugiat veniam occaecat fugiat aliqua.
            </p>
            <div className="mt-10 md:flex sm:justify-center lg:justify-start">
              <div className="rounded-md shadow">
                <Link href="/MarketingPage">
                <a
                  href="#"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-black bg-white  md:py-4 md:text-lg md:px-10"
                >
                  Marketing
                </a>
                </Link>
              </div>
              <div className="mt-3 rounded-md shadow sm:mt-0 md:ml-3">
                <a
                  href="#"
                  className="w-full flex items-center justify-center px-8 py-3 border border-black text-base font-medium rounded-md text-white bg-black  md:py-4 md:text-lg md:px-10"
                >
                  Development
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full overflow-hidden">
          <Image
            className="inset-0 w-full h-full object-cover"
            src={hero}
            alt=""
          />
        </div>
      </main>
    </div>
  )
}
