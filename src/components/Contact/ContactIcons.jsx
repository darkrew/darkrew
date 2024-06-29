import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FiInstagram } from "react-icons/fi";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaSquareBehance } from "react-icons/fa6";

function ContactIcons() {
  return (
    <>
      <section className="px-8 ">
        <div className="">
          <div className="text-center w-full contactForm">
            <h1 className="headings text-[var(--main-color)] mb-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
              #letsconnect
            </h1>
            <p className="text-[var(--text-color)] subHeadings text-xl sm:text-xl xl:text-2xl">
              Stay in the Loop! Join the conversation on our social media
              channels for the latest updates,
              <br className="hidden md:block" /> trends, and exclusive content.
              Let's connect and explore the digital world together.
            </p>
          </div>
          <div className="text-center w-full contactForm">
            <h1 className="text-2xl lg:text-3xl xl:text-4xl text-[var(--heading-color)] mt-16">
              We Are Social
            </h1>
          </div>
          <div className="flex flex-wrap sm:gap-5 gap-8 text-center justify-center items-center w-full text-[var(--main-color)]">
            <a href="#" target="__blank" className="mt-12">
              <BsLinkedin size={50} />
            </a>
            <a
              href="https://instagram.com/darkrewpk"
              target="__blank"
              className="mt-12"
            >
              <FiInstagram size={50} />
            </a>
            <a
              href="https://www.linkedin.com/company/darkrew/"
              target="__blank"
              className="mt-12"
            >
              <FaSquareFacebook size={50} />
            </a>
            <a href="#" target="__blank" className="mt-12">
              <FaSquareBehance size={50} />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactIcons;
