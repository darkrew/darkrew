import React from "react";

function ServicesCards({ svg, title, description }) {
  return (
    <div>
      <div className=" p-4 flex items-center flex-col justify-center rounded-lg">
        <div className="items-center md:mb-12 lg:mb-6 justify-center  rounded-full lg:h-[140px] lg:w-[140px]">
          {svg}
        </div>
      </div>
      <h3 className="mb-2 text-md font-bold text-[var(--main-color)] uppercase headings  text-justify md:text-start lg:text-lg xl:text-xl">
        {title}
      </h3>
      <p className="text-[var(--text-color)] subHeadings xl:text-lg text-center lg:text-start">
        {description}
      </p>
    </div>
  );
}

export default ServicesCards;
