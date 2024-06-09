import React from "react";

function BoltIcon(props: any) {
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
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <circle cx="12" cy="12" r="4" />
    </svg>
  );
}

function InfoIcon(props: any) {
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
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4" />
      <path d="M12 8h.01" />
    </svg>
  );
}

function MailIcon(props: any) {
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
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function MegaphoneIcon(props: any) {
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
      <path d="m3 11 18-5v12L3 14v-3z" />
      <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
    </svg>
  );
}

function PieChartIcon(props: any) {
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
  );
}

function SearchIcon(props: any) {
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
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

export default function Services() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
              Our Services
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Comprehensive Digital Solutions
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              From strategy to execution, we offer a wide range of digital
              marketing services to help your business thrive.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:grid-cols-3 md:gap-12 lg:gap-16">
          <div className="grid gap-1">
            <SearchIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
            <h3 className="text-lg font-bold">Search Engine Optimization</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Optimize your website to rank higher in search engine results and
              drive more organic traffic.
            </p>
          </div>
          <div className="grid gap-1">
            <PieChartIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
            <h3 className="text-lg font-bold">Social Media Marketing</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Leverage the power of social media to engage your audience and
              build brand awareness.
            </p>
          </div>
          <div className="grid gap-1">
            <MailIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
            <h3 className="text-lg font-bold">Email Marketing</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Craft compelling email campaigns to nurture leads and convert
              customers.
            </p>
          </div>
          <div className="grid gap-1">
            <MegaphoneIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
            <h3 className="text-lg font-bold">Content Marketing</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Create and distribute valuable, relevant content to attract and
              retain your target audience.
            </p>
          </div>
          <div className="grid gap-1">
            <BoltIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
            <h3 className="text-lg font-bold">Pay-Per-Click Advertising</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Leverage targeted paid advertising to drive immediate results and
              boost your online visibility.
            </p>
          </div>
          <div className="grid gap-1">
            <InfoIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
            <h3 className="text-lg font-bold">Analytics and Reporting</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Gain valuable insights into your digital marketing performance and
              make data-driven decisions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
