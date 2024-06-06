import React from "react";
import ServicesCards from "./ServicesCards";
import ApplicationDevelopment from "./SVGS/ApplicationDevelopment";
import WebDevelopment from "./SVGS/WebDevelopment";
import UIUX from "./SVGS/UIUX";
import DigitalMarketing from "./SVGS/DigitalMarketing";
import SEO from "./SVGS/SEO";
import CustomServices from "./SVGS/CustomServices";
import { Link, NavLink } from "react-router-dom";

function OurServices() {
  return (
    <>
      <section className=" pb-16" id="services">
        <div className="py-8 px-4 mx-auto max-w-screen-2xl sm:py-16 lg:px-3">
          <div className="text-center mb-8 lg:mb-16">
            <h2 className="mb-4  headings text-[var(--heading-color)] tracking-tight font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
              Let's <span className="text-[var(--main-color)]">Build</span>{" "}
              Together
            </h2>
            <p className=" text-[var(--text-color)] subHeadings text-lg sm:text-lg xl:text-2xl text-center">
              Experience the best global tech talent and enjoy the tech world
              without getting exhausted <br className="hidden md:block" />{" "}
              through the hiring process. Hire an expert developer, designer and
              an engineer now.
            </p>
          </div>
          <div className=" md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-32 md:space-y-0 ">
            <ServicesCards
              svg={<ApplicationDevelopment />}
              title="Application Development"
              description="Unlocking Possibilities: Our Hybrid App Development seamlessly combines native performance and web versatility, delivering cost-effective, feature-rich apps. With a focus on faster time-to-market, we're your gateway to innovation."
            />
            <ServicesCards
              svg={<WebDevelopment />}
              title="Webistie Development"
              description="Tap into our web mastery to transform concepts into captivating online experiences. We infuse aesthetic finesse and the latest tech into every project, specializing in dynamic e-commerce solutions"
            />
            <ServicesCards
              svg={<UIUX />}
              title="Graphic Designing"
              description="Designing Delightful Experiences: Our UI/UX experts craft interfaces that engage, inspire, and convert. We blend aesthetics with usability to create intuitive, visually appealing solutions. Elevate user satisfaction and retention with our UI/UX design prowess. Embrace design excellence with us."
            />
            <ServicesCards
              svg={<DigitalMarketing />}
              title="Marketing"
              description="Unlock cross-platform potential with our Hybrid App Development. We seamlessly merge native performance and web versatility, delivering cost-effective, feature-rich apps that work across iOS, Android, and web browsers. Elevate your user experience and reduce time-to-market with our hybrid solutions."
            />

            <ServicesCards
              svg={<CustomServices />}
              title="Custom Services"
              description="Your Vision, Our Expertise: We deliver custom solutions that cater to your every need. Experience tailored excellence with us, where your satisfaction is our top priority. Elevate your business with custom services that redefine success."
            />
            {/* <div className="flex justify-end items-center md:order-2 space-x-3 md:space-x-12">
              <Link to={"/"}>
                <p className="custom-border-box headings bg-[var(--main-color)] text-white font-bold w-max mt-5 md:mt-0 px-12 py-3">
                  Explore Our Courses
                </p>
              </Link>
            </div> */}

            <div class="max-w-sm p-6 custom-gradient border border-gray-200 rounded-lg shadow flex justify-center items-start mt-10 md:mt0 flex-col">
              <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-white">
                  Explore Our Best Courses
                </h5>
              </a>
              <p class="mb-3 font-normal text-white text-lg">
                Discover a diverse range of top-tier courses designed to enhance
                your skills and knowledge. Whether you're looking to advance
                your career or explore new interests, our expert-led courses
                offer unparalleled learning experiences.
              </p>

              <a
                href="#"
                class=" mt-4 duration-75 inline-flex items-center px-10 py-2 text-sm font-medium text-center text-black bg-white rounded-lg hover:bg-[var(--heading-color)] hover:text-white ring-[var(--main-color)] focus:ring-4"
              >
                Explore Now
                <svg
                  class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default OurServices;
