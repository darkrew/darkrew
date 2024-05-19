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
        <div className="py-8 px-4 mx-auto max-w-screen-2xl sm:py-16 lg:px-6">
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
            <div className="relative h-[100%] w-[100%] flex justify-end items-center">
              <Link to={"/"}>
                <p className="custom-border-box headings absolute bg-[var(--main-color)] text-white font-bold w-max left-1 mt-5 md:mt-0 md:left-[48%] px-12 py-3">
                  Explore Our Courses
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default OurServices;
