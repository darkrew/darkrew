import React, { useEffect } from "react";
import Footer from "../Footer";
import WhyCooseUs from "../WhyCooseUs/WhyCooseUs";
import ContactModal from "../Modals/ContactModal";
import Team from "../Team/Team";
import { NavLink } from "react-router-dom";
import transition from "../../transition";

function AboutUs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <section
        className="bg-[var(--background-color)] mt-20 h-[100%] px-0"
        id="team"
      >
        <div className="md:grid md:grid-cols-2 sm:px-10 mb-20 px-10 gap-9 ">
          <div className="h-[100%] flex justify-center flex-col">
            <h1 className="mb-10 text-[var(--heading-color)] headings mt-10 text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
              <span className="text-[var(--main-color)]">About</span>{" "}
              <span className="text-[var(--text-color)]">Us</span>
            </h1>
            <h1 className="text-[var(--text-color)] text-xl mb-10 sm:mb-0 sm:text-xl xl:text-2xl">
              At Darkrew, we are a gathering of visionary thinkers and
              innovative doers. Our team unites diverse expertise, from creative
              minds to technical wizards, problem solvers, and customer-centric
              experts. With a shared passion for innovation, we are dedicated to
              excellence, fostering collaboration, inspiring change, and pushing
              the boundaries in the ever-evolving technology landscape
            </h1>
            <div className="mt-4 sm:mt-32 sm:mb-0 mb-20">
              <ContactModal />
            </div>
          </div>
          <div className="h-[100%]">
            <img
              src="/Images/svgImages/AboutUs.svg"
              className="glow-on-hover"
              alt=""
            />
          </div>
        </div>
        <Team />
        <div className="flex justify-center items-center">
          <NavLink to="/ourwork">
            <button className="border border-[var(--main-color)] text-[var(--main-color)] p-2 px-12 rounded-md text-2xl hover:bg-[var(--main-color)] hover:text-[var(--background-color)] duration-75">
              Our Work
            </button>
          </NavLink>
        </div>
        <Footer />
      </section>
    </>
  );
}

export default transition(AboutUs);
