import Practice from "./Practice"
import Image from "next/image"
import contact from "../images/Contact-min.jpg"
export default function Example() {
    return (
      <div className="relative bg-white">
        <div className="lg:absolute lg:inset-0 lg:h-screen">
          <div className="sm:h-72 md:h-96 lg:h-screen lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 overflow-hidden">
            <Image
              className="h-56 w-full object-cover lg:absolute lg:h-full"
              src={contact}
              alt=""
            />
          </div>
        </div>
        <div className="relative py-16 px-4 sm:py-24 sm:px-6 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:px-8 lg:py-32">
          <div className="lg:pr-8">
            <div className="mx-auto max-w-md sm:max-w-lg lg:mx-0">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Let's work together</h2>
              <p className="mt-4 text-lg text-gray-500 sm:mt-3">
                We’d love to hear from you! Send us a message using the form opposite, or email us. We’d love to hear from
                you! Send us a message using the form opposite, or email us.
              </p>
              <Practice />
            </div>
          </div>
        </div>
      </div>
    )
  }
  