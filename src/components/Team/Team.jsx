import React, { useEffect } from "react";
import TeamCards from "./TeamCards";
import Footer from "../Footer";
import ContactUs from "../Contact/ContactUs";
import ContactModal from "../Modals/ContactModal";

function Team() {
  return (
    <>
      <section className="bg-[var(--background-color)] h-[100%] px-0" id="team">
        <div className="text-center">
          <h1 className="text-[var(--heading-color)] headings font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
            Our <span className="text-[var(--main-color)]">Creative</span> Team
          </h1>
          <p className="text-[var(--text-color)] subHeadings text-center sm:mx-32 sm:px-1 px-8 text-xl sm:text-xl xl:text-2xl">
            Where Innovation Meets Imagination. Our creative software
            development team transforms ideas into{" "}
            <br className="hidden md:block" /> stunning digital realities,
            crafting captivating user experiences that leave a lasting
            impression.
          </p>
        </div>

        <div
          id="default-carousel"
          className="h-[100%] flex justify-center items-center mb-16 w-full"
          data-carousel="slide"
        >
          <div
            className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:space-y-0 mt-10"
            data-carousel-item
          >
            <TeamCards
              name="Usman Muaz"
              profession="Flutter Dev"
              occupation="Founder & CEO"
              link="https://www.google.com"
            />
            <TeamCards
              name="Muhammad Tayyab"
              profession="Full Stack Dev"
              occupation="Co-Founder"
              link="https://www.youtube.com"
            />
            <TeamCards
              name="Muhammad Tayyab"
              profession="Full Stack Dev"
              occupation="Co-Founder"
              link="https://www.youtube.com"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Team;
