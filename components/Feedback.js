/* This example requires Tailwind CSS v2.0+ */
import female1 from "../images/female-pic-min.jpg"
import female2 from "../images/female-pic-2-min.jpg"
import male1 from "../images/female-pic-min.jpg"
import Image from "next/image"

const infos = [
    {
        title:"CEO",
        name:"Jennifer Townsley",
        testimony:"Testimonals are short quotes from people wo love your brand. It's a great way to convince customers to try your services.",
        imageUrl:female1,
    },
    {
        title:"CFO",
        name:"Bradley Chetsworth",
        testimony:"Testimonals are short quotes from people wo love your brand. It's a great way to convince customers to try your services.",
        imageUrl:female2,
    },
    {
        title:"Lead Engineeer",
        name:"Armando Higuera",
        testimony:"Testimonals are short quotes from people wo love your brand. It's a great way to convince customers to try your services.",
        imageUrl:male1,
    },
  ]
  
  export default function Example() {
    return (
      <div className="relative bg-primary px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28">
        
        
        <div className="relative mx-auto max-w-7xl">
        <h2 className="text-6xl font-bold text-center mb-40 text-gray-300">Testimonials</h2>
          <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
            {infos.map((info) => (
              <div key={info.title} className="flex relative flex-col bg-white rounded-lg shadow-lg p-6 mb-20 ">
                <div className="w-20 h-20 absolute -top-2 -left-2 rounded-full bg-black overflow-hidden">
                  <Image src={info.imageUrl} className="w-full h-full" />
                </div>
                <div className="flex flex-1 flex-col justify-between mt-14 ">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-indigo-600">
                        {info.title}
                    </p>
                      <p className="text-xl font-semibold text-gray-900">{info.name}</p>
                      <p className="mt-3 text-base text-gray-500">{info.testimony}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }