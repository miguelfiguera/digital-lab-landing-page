import React from "react";

export default function ContactForm() {
  return (
    <section className="w-full py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
              Contact Us
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Get in Touch
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Fill out the form below to schedule a consultation and learn how
              Acme Digital can help your business thrive.
            </p>
          </div>
        </div>
        <div className="mx-auto w-full max-w-md space-y-4 ">
          <form className="grid gap-4 border-solid border-gray-100">
            <input
              type="text"
              placeholder="Name"
              className="w-full rounded-md p-2"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full rounded-md p-2"
            />
            <textarea
              placeholder="Message"
              className="w-full rounded-md p-2"
              rows={5}
            />
            <button
              type="submit"
              className="w-full p-2 rounded-md dark:bg-gray-700 hover:dark:bg-gray-800 grow-0"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
