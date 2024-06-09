import React from "react";

export default function Dev() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
              Our Services
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Tailored Digital Solutions
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Our team of experts delivers customized design, web development,
              and programming solutions to help your business thrive in the
              digital landscape.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
          <div className="grid gap-1">
            <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
              Design
            </div>
            <h3 className="text-xl font-bold">Exceptional Design</h3>
            <p className="text-gray-500 dark:text-gray-400">
              Our design experts create visually stunning and user-friendly
              interfaces that captivate your audience.
            </p>
          </div>
          <div className="grid gap-1">
            <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
              Web Development
            </div>
            <h3 className="text-xl font-bold">Cutting-Edge Web Development</h3>
            <p className="text-gray-500 dark:text-gray-400">
              Our web development team builds responsive, high-performing
              websites that drive results for your business.
            </p>
          </div>
          <div className="grid gap-1">
            <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
              Programming
            </div>
            <h3 className="text-xl font-bold">Innovative Programming</h3>
            <p className="text-gray-500 dark:text-gray-400">
              Our programming experts create custom software solutions that
              streamline your operations and boost productivity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
