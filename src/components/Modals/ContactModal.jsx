import React from "react";
import ContactUs from "../Contact/ContactUs";

export default function ContactModal() {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <button
        className="border border-[var(--main-color)] text-[var(--main-color)] focus:bg-[var(--main-color)] focus:text-[var(--backround-color)] hover:bg-[var(--main-color)] hover:text-[var(--backround-color)] font-semibold px-12 py-2 rounded-lg outline-none duration-75"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Contact Us
      </button>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl h-96 -translate-y-48">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-[#121212] outline-none focus:outline-none">
                {/*header*/}
                
                {/*body*/}
                <div className="relative flex-auto">
                  <div
  className=" mb-24 max-w-screen-xl mt-16 px-8 grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto bg-[#ccc] text-[var(--background-color)] rounded-lg shadow-lg">
  <div className="flex flex-col justify-between">
    <div>
      <h2 className="text-3xl lg:text-4xl font-bold leading-tight">Lets talk about everything!</h2>
      <div className="text-gray-700 mt-8">
        Hate forms? Send us an <a href="mailto:darkrew.pk@gmail.com"><span className="underline">email</span></a> instead.
      </div>
    </div>
  </div>
  <div className="">
    <div>
      <span className="uppercase text-sm text-gray-600 font-bold">Full Name *</span>
      <input className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
        type="text" placeholder="" />
    </div>
    <div className="mt-8">
      <span className="uppercase text-sm text-gray-600 font-bold">Email *</span>
      <input className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
        type="text" />
    </div>
    <div className="mt-8">
      <span className="uppercase text-sm text-gray-600 font-bold">Message *</span>
      <textarea
        className="w-full h-32 bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"></textarea>
    </div>
    <div className="mt-8">
      <button
        className="uppercase text-lg font-bold tracking-wide border border-[var(--main-color)] text-[var(--background-color)] bg-[var(--main-color)] hover:bg-[#ccc] text-[#121212] duration-75 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline">
        Send Message
      </button>
    </div>
  </div>
</div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-4 rounded-b">
                  <button
                    className="uppercase text-lg font-bold tracking-wide border border-[var(--main-color)] text-[var(--background-color)] bg-[var(--main-color)] hover:bg-[#121212] text-[#121212] hover:text-[var(--heading-color)] duration-75 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    I'll do it later!
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-70 blur-lg fixed inset-0 z-40 bg-[var(--background-color)]"></div>
        </>
      ) : null}
    </>
  );
}