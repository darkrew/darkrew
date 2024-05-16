import React from "react";
import ContactModal from "./Modals/ContactModal";

function Home({ heading, paragraph }) {
  return (
    <>
      <section className="px-8 md:px-20" id="home">
        <div className="md:grid md:grid-cols-2 ">
          <div className="h-[100%] flex justify-center flex-col">
            <h1 className="mb-2 md:mb-10 text-[var(--heading-color)] headings text-2xl mt-10 font-bold sm:text-3xl md:text-4xl lg:text-5xl">
              Where <span className="text-[var(--main-color)]">Ideas</span> Take
              Flight
            </h1>
            <h1 className="text-[var(--text-color)] text-xl mb-10 sm:mb-0  xl:text-2xl">
              In the fast-paced world of technology, where advancements and
              breakthroughs are constant, "
              <span className="text-[var(--main-color)]">Darkrew</span>"
              represents a platform or organization that encourages and supports
              imaginative thinking and inventive solutions. It suggests that
              this website or company is a hub for visionaries, developers, and
              innovators to come together and turn their ideas into reality
            </h1>
            <div className="mt-4 sm:mt-32 sm:mb-0 mb-20">
              <ContactModal />
            </div>
          </div>
          <div className="h-[100%]">
            <img
              src="/Images/svgImages/MainImage3.svg"
              className="glow-on-hover"
              alt=""
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
