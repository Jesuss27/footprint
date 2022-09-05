/* This example requires Tailwind CSS v2.0+ */
const navigation = [
    { name: 'Solutions', href: '#' },
    { name: 'Pricing', href: '#' },
    { name: 'Company', href: '#' },
  ]
  
  export default function Example() {
    return (
      <header className="bg-white">
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
          <div className="flex w-full items-center justify-between border-b  py-6 lg:border-none">
            <div className="flex items-center">
              <a href="#">
                <span className="sr-only">Your Company</span>
                <img className="h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=black" alt="" />
              </a>
              <div className="ml-10 hidden space-x-8 lg:block">
                {navigation.map((link) => (
                  <a key={link.name} href={link.href} className="text-base font-medium text-black hover:text-gray-500">
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
            <div className="ml-10 space-x-4">
              <a
                href="#"
                className="inline-block rounded-md border border-transparent bg-black py-2 px-4 text-base font-medium text-white hover:bg-opacity-75"
              >
                Sign in
              </a>
              <a
                href="#"
                className="inline-block rounded-md border border-transparent bg-white py-2 px-4 text-base font-medium text-indigo-600 hover:bg-indigo-50"
              >
                Sign up
              </a>
            </div>
          </div>
          <div className="flex flex-wrap justify-center space-x-6 py-4 lg:hidden">
            {navigation.map((link) => (
              <a key={link.name} href={link.href} className="text-base font-medium text-black hover:text-gray-500">
                {link.name}
              </a>
            ))}
          </div>
        </nav>
      </header>
    )
  }