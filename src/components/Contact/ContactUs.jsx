import React from "react";
import Footer from "../Footer";

function ContactUs() {
  return (
    <>
      <section
        className="px-8 pb-4 h-full w-screen bg-[var(--background-color)]"
        id="contactus"
      >
        <div className="text-center w-full contactForm">
          <h1 className="headings text-[#ccc] mb-4 font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
            Send <span className="text-[var(--main-color)] ">Your</span> Inquiry
          </h1>
          <p className="text-[var(--text-color)] subHeadings text-lg sm:text-lg text-start xl:text-2xl">
            Get in Touch: Reach out to us for fast and friendly assistance. Your
            questions and feedback are important to us. We're here to help!
          </p>
        </div>
        <div className=" mb-24 max-w-screen-xl mt-16 px-8 grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto bg-[#ccc] text-[var(--background-color)] rounded-lg shadow-lg">
          <div className="flex flex-col justify-between">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                Lets talk about everything!
              </h2>
              <div className="text-gray-700 mt-8">
                Hate forms? Send us an{" "}
                <a href="mailto:darkrew.pk@gmail.com">
                  <span className="underline">email</span>
                </a>{" "}
                instead.
              </div>
            </div>
          </div>
          <div className="">
            <div>
              <span className="uppercase text-sm text-gray-600 font-bold">
                Full Name *
              </span>
              <input
                className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                placeholder=""
              />
            </div>
            <div className="mt-8">
              <span className="uppercase text-sm text-gray-600 font-bold">
                Email *
              </span>
              <input
                className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
              />
            </div>
            <div className="mt-8">
              <span className="uppercase text-sm text-gray-600 font-bold">
                Message *
              </span>
              <textarea className="w-full h-32 bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"></textarea>
            </div>
            <div className="mt-8">
              <button className="uppercase text-lg font-bold tracking-wide border border-[var(--main-color)] text-[var(--background-color)] bg-[var(--main-color)] hover:bg-[#ccc] text-[#121212] duration-200 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactUs;
