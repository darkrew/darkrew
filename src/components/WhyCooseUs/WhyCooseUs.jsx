import React from "react";
import Card from "./Card";
import Innovation from "./svg/Innovation";
import ClientApproach from "./svg/ClientApproach";
import Record from "./svg/Record";
import { NavLink } from "react-router-dom";

function WhyCooseUs() {
  return (
    <div>
      <section className="pb-16" id="whyUs">
        <div className="py-8 px-4 mx-auto max-w-screen-2xl sm:py-16 lg:px-6">
          <div className="text-center mb-8 lg:mb-16">
            <h2 className="mb-4 headings text-[var(--heading-color)] tracking-tight font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
              Why <span className="text-[var(--main-color)]">Choose</span> Us
            </h2>
            <p className="text-[var(--text-color)] subHeadings text-lg sm:text-lg text-start xl:text-2xl">
              Choose Excellence: Collaborate with us for unmatched expertise,
              innovation, and dedication. We're committed to delivering
              exceptional results and fostering a partnership that fuels your
              success. Discover the difference of working with us.
            </p>
          </div>
          <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0 ">
            <Card
              svg={<Innovation />}
              title="Expertise and Innovation"
              description="Our team of experts is driven by innovation. We bring a wealth of experience and cutting-edge ideas to the table, ensuring your project receives the best of both worlds: proven solutions and creative thinking"
            />
            <Card
              svg={<ClientApproach />}
              title="Client-Centric Approach"
              description="Your success is our priority. We tailor our services to meet your unique needs, providing personalized attention and solutions that align perfectly with your goals"
            />
            <Card
              svg={<Record />}
              title="Proven Track Record"
              description="We have a solid history of delivering results. Our portfolio showcases a range of successful projects that have made a real impact, attesting to our dedication and capabilities."
            />
          </div>
        </div>
        <div className="flex justify-center items-center">
          <NavLink to="/ourwork">
            <button className="border border-[var(--main-color)] text-[var(--main-color)] p-2 px-12 rounded-md text-2xl hover:bg-[var(--main-color)] hover:text-[var(--background-color)] duration-75">
              Our Work
            </button>
          </NavLink>
        </div>
      </section>
    </div>
  );
}

export default WhyCooseUs;
