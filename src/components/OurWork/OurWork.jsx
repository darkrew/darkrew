import React from "react";
import ContactUs from "../Contact/ContactUs";
import Footer from "../Footer";
import ContactModal from "../Modals/ContactModal";
import transition from "../../transition";

function OurWork() {
  return (
    <>
      <section
        className="bg-[var(--background-color)] h-[100%] mt-24 px-0"
        id="team"
      >
        <div className="md:grid md:grid-cols-2 px-10 sm:px-10 mb-20 gap-9 ">
          <div className="h-[100%]">
            <img
              src="/Images/svgImages/TeamWork.svg"
              className="glow-on-hover"
              alt=""
            />
          </div>
          <div className="h-[100%] flex justify-center flex-col">
            <h1 className="mb-10 text-[var(--heading-color)] headings font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
              Innovating{" "}
              <span className="text-[var(--main-color)]">Technology</span>,
              Fueling <span className="text-[var(--main-color)]">Creative</span>{" "}
              Vision
            </h1>
            <h1 className="text-[var(--text-color)] mb-10 text-xl sm:text-xl xl:text-2xl">
              At Darkrew, our team of visionaries and innovators is dedicated to
              transforming groundbreaking ideas into tangible results. We
              leverage our diverse range of expertise, from creative thinkers
              and tech wizards to skilled problem solvers and customer-centric
              experts, to drive innovation in the dynamic realm of technology.
              With an unwavering commitment to excellence, we come together to
              collaborate, inspire, and push the boundaries, ultimately creating
              a vibrant ecosystem where ideas take flight. Our work is a
              testament to our passion for pushing the boundaries of what's
              possible in the fast-paced world of technology.
            </h1>
            <div className="mt-4 sm:mt-32 sm:mb-0 mb-20">
              <ContactModal />
            </div>
          </div>
        </div>
        <ContactUs />
        <Footer />
      </section>
    </>
  );
}

export default transition(OurWork);
