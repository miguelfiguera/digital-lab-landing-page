import React from 'react'
function CheckIcon(props:any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20 6 9 17l-5-5" />
      </svg>
    )
  }

export default function Packages() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">Pricing</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Pricing Plans</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Choose the plan that best fits your digital marketing needs.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="grid gap-6 bg-gray-100 p-6 rounded-lg dark:bg-gray-800">
                <div className="grid gap-2">
                  <h3 className="text-xl font-bold">Starter</h3>
                  <p className="text-gray-500 dark:text-gray-400">Perfect for small businesses and startups.</p>
                </div>
                <div className="grid gap-2">
                  <div className="text-4xl font-bold">$99</div>
                  <p className="text-gray-500 dark:text-gray-400">per month</p>
                </div>
                <ul className="grid gap-2 text-gray-500 dark:text-gray-400">
                  <li className="flex items-center gap-2">
                    <CheckIcon className="w-4 h-4 fill-primary" />
                    Search Engine Optimization
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon className="w-4 h-4 fill-primary" />
                    Social Media Management
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon className="w-4 h-4 fill-primary" />
                    Email Marketing
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon className="w-4 h-4 fill-primary" />
                    Monthly Reporting
                  </li>
                </ul>
                <button className="w-full dark:bg-gray-900 rounded-lg py-2">Get Started</button>
              </div>
              <div className="grid gap-6 bg-gray-100 p-6 rounded-lg dark:bg-gray-800">
                <div className="grid gap-2">
                  <h3 className="text-xl font-bold">Professional</h3>
                  <p className="text-gray-500 dark:text-gray-400">Ideal for growing businesses.</p>
                </div>
                <div className="grid gap-2">
                  <div className="text-4xl font-bold">$199</div>
                  <p className="text-gray-500 dark:text-gray-400">per month</p>
                </div>
                <ul className="grid gap-2 text-gray-500 dark:text-gray-400">
                  <li className="flex items-center gap-2">
                    <CheckIcon className="w-4 h-4 fill-primary" />
                    Everything in Starter, plus:
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon className="w-4 h-4 fill-primary" />
                    Pay-Per-Click Advertising
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon className="w-4 h-4 fill-primary" />
                    Conversion Rate Optimization
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon className="w-4 h-4 fill-primary" />
                    Quarterly Strategy Sessions
                  </li>
                </ul>
                <button className="w-full dark:bg-gray-900 rounded-lg py-2">Get Started</button>
              </div>
              <div className="grid gap-6 bg-gray-100 p-6 rounded-lg dark:bg-gray-800">
                <div className="grid gap-2">
                  <h3 className="text-xl font-bold">Enterprise</h3>
                  <p className="text-gray-500 dark:text-gray-400">Tailored for large businesses and corporations.</p>
                </div>
                <div className="grid gap-2">
                  <div className="text-4xl font-bold">$499</div>
                  <p className="text-gray-500 dark:text-gray-400">per month</p>
                </div>
                <ul className="grid gap-2 text-gray-500 dark:text-gray-400">
                  <li className="flex items-center gap-2">
                    <CheckIcon className="w-4 h-4 fill-primary" />
                    Everything in Professional, plus:
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon className="w-4 h-4 fill-primary" />
                    Dedicated Account Manager
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon className="w-4 h-4 fill-primary" />
                    Advanced Analytics and Reporting
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon className="w-4 h-4 fill-primary" />
                    Custom Content and Branding
                  </li>
                </ul>
                <button className="w-full dark:bg-gray-900 rounded-lg py-2">Get Started</button>
              </div>
            </div>
          </div>
        </section>
  )
}
