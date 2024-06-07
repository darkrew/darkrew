import { GrFacebookOption } from "react-icons/gr";
import { BsInstagram } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import { RiTwitterXFill } from "react-icons/ri";
import { BsBehance } from "react-icons/bs";

import React from "react";

function Footer() {
  const getCopyRightDate = new Date().getFullYear();

  return (
    <>
      <section className="h-[100%] pt-16">
        <footer className="bg-[var(--background-color)]">
          <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
            <div className="md:flex md:justify-between">
              <div className="mb-6 md:mb-0 hidden lg:block">
                <a className="">
                  <img
                    src="/Images/Logo/DK-01.jpg"
                    className=" w-32"
                    alt="FlowBite Logo"
                  />
                </a>
              </div>
              <div className="grid grid-cols-2 gap-5 sm:gap-7 sm:grid-cols-4">
                <div>
                  <h2 className="mb-6 text-lg font-bold text-[var(--main-color)] uppercase">
                    Company
                  </h2>
                  <ul className="text-[var(--text-color)] leading-4 font-medium">
                    <li className="mb-4">
                      <a href="" className="hover:underline">
                        Courses
                      </a>
                    </li>
                    <li className="mb-4">
                      <a href="" className="hover:underline">
                        Why Us
                      </a>
                    </li>
                    <li className="mb-4">
                      <a href="" className="hover:underline">
                        Contact Us
                      </a>
                    </li>
                    <li className="mb-4">
                      <a href="" className="hover:underline">
                        Careers
                      </a>
                    </li>
                    {/* <li>
                      <a href="" className="hover:underline">
                        Hire Form Us
                      </a>
                    </li> */}
                  </ul>
                </div>
                <div>
                  <h2 className="mb-6 text-lg font-bold text-[var(--main-color)] w-[10rem] uppercase">
                    More About Us
                  </h2>
                  <ul className="text-[var(--text-color)] leading-5 font-medium">
                    <li className="mb-2">
                      <a href="" className="hover:underline">
                        Privacy Policy
                      </a>
                    </li>
                    <li className="mb-2">
                      <a href="" className="hover:underline">
                        Terms & Conditions
                      </a>
                    </li>
                    <li className="mb-2">
                      <a href="" className="hover:underline">
                        Pricing & Refund Policy
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 className="mb-4 uppercase text-lg font-bold text-[var(--main-color)]">
                    Contact us
                  </h2>
                  <ul className="text-[var(--text-color)] font-medium">
                    <li className="">
                      <a href="" className="hover:underline ">
                        +92 346 5890493
                      </a>
                    </li>
                    <li>
                      <a
                        href="mailto: darkrew.pk@gmail.com"
                        className="hover:underline"
                      >
                        info@darkrew.com
                      </a>
                    </li>
                    <li>
                      <a href="" className="hover:underline">
                        Rawalpindi, Pakistan
                      </a>
                    </li>
                  </ul>
                </div>
                {/* <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                      <li className="mb-4">
                          <a href="#" className="hover:underline">Privacy Policy</a>
                      </li>
                      <li>
                          <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                      </li>
                  </ul>
              </div> */}
              </div>
            </div>
            <hr className="my-6 border-[#ccc] sm:mx-full dark:border-gray-700 lg:my-8" />
            <div className="sm:flex sm:items-center sm:justify-between">
              <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                © {getCopyRightDate}{" "}
                <a href="#" className="hover:underline">
                  Darkrew™
                </a>
                . All Rights Reserved.
              </span>
              <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
                <a
                  href="#"
                  className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                >
                  <p>
                    <GrFacebookOption />
                  </p>
                  <span className="sr-only">Facebook page</span>
                </a>
                <a
                  href="https://instagram.com/darkrewpk"
                  target="__blank"
                  className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                >
                  <p>
                    <BsInstagram />
                  </p>
                  <span className="sr-only">Instagram Page</span>
                </a>
                <a
                  href="https://www.linkedin.com/company/darkrew/"
                  target="__blank"
                  className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                >
                  <p>
                    <AiFillLinkedin />
                  </p>
                  <span className="sr-only">Linked In page</span>
                </a>
                <a
                  href="#"
                  className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                >
                  <p>
                    <RiTwitterXFill />
                  </p>
                  <span className="sr-only">Twitter page</span>
                </a>
                <a
                  href="#"
                  className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                >
                  <p>
                    <BsBehance />
                  </p>
                  <span className="sr-only">Behance account</span>
                </a>
              </div>
            </div>
          </div>
        </footer>
      </section>
    </>
  );
}

export default Footer;
