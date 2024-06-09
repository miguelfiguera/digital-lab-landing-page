import React from 'react'

function PieChartIcon(props:any) {
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
        <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
        <path d="M22 12A10 10 0 0 0 12 2v10z" />
      </svg>
    )
  }
  
  
  function RocketIcon(props:any) {
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
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
        <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
        <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
      </svg>
    )
  }

  function LightbulbIcon(props:any) {
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
        <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
        <path d="M9 18h6" />
        <path d="M10 22h4" />
      </svg>
    )
  }
  
export default function Highlights() {
  return (
    <section className="w-full py-12 md:py-24 ">
    <div className="container grid items-center justify-center gap-4 px-4 md:px-6">
      <div className="space-y-3">
        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Our Approach</h2>
        <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
          We take a strategic and data-driven approach to digital marketing, tailored to your business needs.
        </p>
      </div>
      <div className="mx-auto w-full max-w-5xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div className="flex flex-col items-start gap-2">
          <LightbulbIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
          <h3 className="text-lg font-bold">Creative Ideation</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            We collaborate with you to develop innovative and eye-catching digital campaigns.
          </p>
        </div>
        <div className="flex flex-col items-start gap-2">
          <RocketIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
          <h3 className="text-lg font-bold">Agile Execution</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Our team works quickly and efficiently to bring your campaigns to life.
          </p>
        </div>
        <div className="flex flex-col items-start gap-2">
          <PieChartIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
          <h3 className="text-lg font-bold">Data-Driven Optimization</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            We continuously analyze and optimize your campaigns to maximize their impact.
          </p>
        </div>
      </div>
    </div>
  </section>
  )
}
