import { CameraIcon } from '@heroicons/react/20/solid'
import MarketingItem from './MarketingItem'
import lightBulb from "../images/light-bulb-min.jpg"
import branding from "../images/branding-min.jpg"
import handheld from "../images/handheld-min.jpg"
import computer from "../images/computer-min.jpg"
import Image from 'next/image'

const features = [
    {
        title:"Funnel Optimization",
        description: 
        `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Culpa at odit neque corporis reiciendis sapiente, reprehenderit dolor 
        harum accusantium amet temporibus est ut sit obcaecati.` ,
        imageUrl:lightBulb,
    },
    {
        title:"Beautiful Branding",
        description: 
        `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Culpa at odit neque corporis reiciendis sapiente, reprehenderit dolor 
        harum accusantium amet temporibus est ut sit obcaecati.` ,
        imageUrl:branding,
    },
    {
        title:"Communications Strategy",
        description: 
        `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Culpa at odit neque corporis reiciendis sapiente, reprehenderit dolor 
        harum accusantium amet temporibus est ut sit obcaecati.` ,
        imageUrl:handheld,
    },
]

export default function Example() {
  return (
    <div className="overflow-hidden bg-white">
      <div className="relative mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8">
        <div className="absolute top-0 bottom-0 left-3/4 hidden w-screen bg-gray-50 lg:block" />
        <div className="mx-auto max-w-prose text-base lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-8">
          <div>
            <h3 className="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 text-center lg:text-left sm:text-6xl">Marketing</h3>
          </div>
        </div>
        <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="hidden lg:block relative lg:col-start-2 lg:row-start-1">
            <svg
              className="absolute top-0 right-0 -mt-20 -mr-20 hidden lg:block"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="de316486-4a29-4312-bdfc-fbce2132a2c1"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                </pattern>
              </defs>
              <rect width={404} height={384} fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)" />
            </svg>
            <div className="relative mx-auto max-w-prose text-base lg:max-w-none">
              <figure>
                <div className="aspect-w-12 aspect-h-7 lg:aspect-none">
                  <Image
                    className="rounded-lg object-cover object-center shadow-lg object-position-right"
                    src={computer}
                    alt="Whitney leaning against a railing on a downtown street"
                    width={1184}
                    height={1376}
                  />
                </div>
              </figure>
            </div>
          </div>
          <div className="mt-8 lg:mt-0 flex flex-col justify-center">
            {
                features.map(feature => <MarketingItem title={feature.title} key={feature.title} description={feature.description} imageUrl={feature.imageUrl}  />)
            }
          </div>
        </div>
      </div>
    </div>
  )
}