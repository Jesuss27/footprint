/* This example requires Tailwind CSS v2.0+ */
const infos = [
    {
        title:"CEO",
        name:"Jennifer Townsley",
        testimony:"Testimonals are short quotes from people wo love your brand. It's a great way to convince customers to try your services.",
        imageUrl:"https://source.unsplash.com/3TLl_97HNJo",
    },
    {
        title:"CFO",
        name:"Bradley Chetsworth",
        testimony:"Testimonals are short quotes from people wo love your brand. It's a great way to convince customers to try your services.",
        imageUrl:"https://source.unsplash.com/7YVZYZeITc8",
    },
    {
        title:"Lead Engineeer",
        name:"Armando Higuera",
        testimony:"Testimonals are short quotes from people wo love your brand. It's a great way to convince customers to try your services.",
        imageUrl:"https://source.unsplash.com/cdksyTqEXzo",
    },
  ]
  
  export default function Example() {
    return (
      <div className="relative bg-gray-50 px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28">
        <div className="absolute inset-0">
          <div className="h-1/3 bg-white sm:h-2/3" />
        </div>
        
        <div className="relative mx-auto max-w-7xl">
        <h2 className="text-6xl font-bold text-center mb-40 text-gray-300">Testimonials</h2>
          <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
            {infos.map((info) => (
              <div key={info.title} className="flex relative flex-col rounded-lg shadow-lg mb-20 ">
                <div className="absolute inset-x-0 top-0 translate-y-px transform ">
                  <img className=" h-24 w-24 lg:h-36 lg:w-36 -translate-y-1/2 transform justify-center mx-auto rounded-full object-cover" src={info.imageUrl} alt="" />
                </div>
                <div className="flex flex-1 flex-col justify-between bg-white p-6 pt-20 ">
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