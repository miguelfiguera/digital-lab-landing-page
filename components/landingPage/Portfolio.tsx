import React from 'react'
import Link from 'next/link'

export default function Portfolio() {

    let PlaceHolder='https://placehold.co/300x200'

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Our Clients</h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                We&apos;ve had the privilege of working with a diverse range of clients across various industries.
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
              <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
                <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                  <span className="sr-only">View</span>
                </Link>
                <img
                  src={PlaceHolder}
                  width="140"
                  height="70"
                  alt="Logo"
                  className="aspect-[2/1] object-contain p-4 w-full"
                />
              </div>
              <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
                <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                  <span className="sr-only">View</span>
                </Link>
                <img
                  src={PlaceHolder}
                  width="140"
                  height="70"
                  alt="Logo"
                  className="aspect-[2/1] object-contain p-4 w-full"
                />
              </div>
              <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
                <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                  <span className="sr-only">View</span>
                </Link>
                <img
                  src={PlaceHolder}
                  width="140"
                  height="70"
                  alt="Logo"
                  className="aspect-[2/1] object-contain p-4 w-full"
                />
              </div>
              <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
                <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                  <span className="sr-only">View</span>
                </Link>
                <img
                  src={PlaceHolder}
                  width="140"
                  height="70"
                  alt="Logo"
                  className="aspect-[2/1] object-contain p-4 w-full"
                />
              </div>
              <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
                <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                  <span className="sr-only">View</span>
                </Link>
                <img
                  src={PlaceHolder}
                  width="140"
                  height="70"
                  alt="Logo"
                  className="aspect-[2/1] object-contain p-4 w-full"
                />
              </div>
              <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
                <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                  <span className="sr-only">View</span>
                </Link>
                <img
                  src={PlaceHolder}
                  width="140"
                  height="70"
                  alt="Logo"
                  className="aspect-[2/1] object-contain p-4 w-full"
                />
              </div>
            </div>
            <div className="flex justify-center space-x-4">{/* 
              <Link
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                prefetch={false}
              >
                Contact Us
              </Link> */}
            </div>
          </div>
        </section>
  )
}
