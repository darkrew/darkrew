import React, { useEffect } from "react";
import TeamCards from "./TeamCards";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Team() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <section className="bg-[var(--background-color)] h-[100%] px-0" id="team">
        <div className="text-center">
          <h1 className="text-[var(--heading-color)] headings font-bold text-2xl md:text-2xl lg:text-5xl">
            Our <span className="text-[var(--main-color)]">Creative</span> Team
          </h1>
          <p className="text-[var(--text-color)] subHeadings text-center sm:mx-52 sm:px-1 px-8 text-xl sm:text-xl xl:text-2xl">
            Where Innovation Meets Imagination. Our creative software
            development team transforms ideas into stunning digital realities,
            crafting captivating user experiences that leave a lasting
            impression.
          </p>
        </div>

        <div
          id="default-carousel"
          // className="h-[100%] flex justify-center items-center mb-16 w-full"
          // data-carousel="slide"
        >
          {/* <div
            className="flex justify-center flex-wrap mt-10"
            data-carousel-item
          > */}
          <Slider {...settings} className="mt-10 overflow-hidden">
            <div className="px-2">
              <TeamCards
                name="Usman Muaz"
                profession="Flutter Dev"
                occupation="Founder & CEO"
                link="https://www.google.com"
              />
            </div>
            <div className="px-2">
              <TeamCards
                name="Muhammad Tayyab"
                profession="Full Stack Dev"
                occupation="Co-Founder"
                link="https://www.youtube.com"
              />
            </div>
            <div className="px-2">
              <TeamCards
                name="Muhammad Tayyab"
                profession="Full Stack Dev"
                occupation="Co-Founder"
                link="https://www.youtube.com"
              />
            </div>
            <div className="px-2">
              <TeamCards
                name="Muhammad Tayyab"
                profession="Full Stack Dev"
                occupation="Co-Founder"
                link="https://www.youtube.com"
              />
            </div>
          </Slider>
          {/* </div> */}
        </div>
      </section>
    </>
  );
}

export default Team;
