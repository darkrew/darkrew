import React from "react";
import ContactModal from "./Modals/ContactModal";
import transition from "../transition";

function Home({ heading, paragraph }) {
  return (
    <>
      <section className=" md:px-7" id="home">
        <div className="md:grid md:grid-cols-2 gap-20">
          <div className="h-[100%] -mb-12 flex justify-center flex-col">
            <h1 className="mb-2 md:mb-10 text-[var(--heading-color)] headings mt-10 font-bold text-2xl sm:text-xl md:text-2xl lg:text-5xl">
              Where <span className="text-[var(--main-color)]">Ideas</span> Take
              Flight
            </h1>
            <h1 className="text-[var(--text-color)] text-lg mb-10 sm:mb-0 ">
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
          <div className="h-[100%] hidden md:block">
            <img
              src="./Images/herodarkrew.png"
              className="object-cover"
              width={"90%"}
              height={"90%"}
              alt=""
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default transition(Home);
