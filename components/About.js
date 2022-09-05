import { CheckIcon } from '@heroicons/react/24/outline'
import Marketing from '../icons/Marketing'


const pricing = {
  tiers: [
    {
      title: 'Marketing',
      subTitle:"Marketing is a big word.",
      logo:<Marketing />,
      description: `We recognize that marketing isn't easy. Whether you need leads, ads, or a new logo we are here for it.`,
      cta: 'Marketing',
      
    },
    {
      title: 'Web Development',
      subTitle:"My website is not in a good way.",
      logo:"",
      description: `It's really ok. Most websites are not in good shape. Let's talk about how we can get you where you need to be`,
      cta: 'Website',
    
    },
    {
      title: 'App Development',
      subTitle:"I have this idea for an app.",
      logo:"",
      description: `We love to hear it! Apps are a great revenue generator when done right. Let's chat about your idea!`,
      cta: 'App Development',
      
    },
  ],
}

export default function Example() {
  return (
    <div className="mx-auto max-w-7xl bg-white py-24 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl text-center font-bold tracking-tight text-gray-900 sm:text-5xl sm:leading-none lg:text-6xl">
        Not sure where to start?<br/>
        No problem!
      </h2>
      {/* Tiers */}
      <div className="mt-24 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:space-y-0">
        {pricing.tiers.map((tier) => (
          <div
            key={tier.title}
            className="relative flex flex-col rounded-xl border border-gray-200 bg-white p-8 shadow-sm"
          >
            <div className="flex-1">
              <h3 className="text-l font-semibold text-left text-gray-300">{tier.title}</h3>
              <h2 className='text-3xl mt-2 font-bold text-left text-black'>{tier.subTitle}</h2>
              <p className="mt-6 text-xl font-light text-black">{tier.description}</p>

              
            </div>

            <a
              href="#"
              className='mt-8 block w-full py-3 px-6 border border-transparent rounded-md text-center font-medium'
            >
              {tier.cta}
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}