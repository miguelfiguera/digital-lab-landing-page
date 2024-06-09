import React from 'react'
import Link from 'next/link'

function MountainIcon(props:any) {
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
        <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
      </svg>
    )
  }

export default function Navbar() {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-950 shadow">
    <Link href="#" className="flex items-center justify-center" prefetch={false}>
      <MountainIcon className="h-6 w-6" />
      <span className="sr-only">Digital Lab</span>
    </Link>
    <nav className="ml-auto flex gap-4 sm:gap-6">
      <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
        Services
      </Link>
      <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
        Approach
      </Link>
      <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
        Clients
      </Link>
      <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
        Contact
      </Link>
    </nav>
  </header>
  )
}
