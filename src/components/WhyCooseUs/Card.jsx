import React from "react";

function Card({ svg, title, description }) {
  return (
    <>
      <div className="border border-[var(--heading-color)] rounded-lg p-10">
        <div className=" p-4 flex items-center flex-col justify-center rounded-lg">
          <div className=" items-center justify-center mb-8 w-16 rounded-full">
            {svg}
          </div>
        </div>
        <h3 className="mb-2 text-center text-lg font-bold text-[var(--main-color)] uppercase headings xl:text-xl">
          {title}
        </h3>
        <p className="text-[var(--text-color)] text-center subHeadings xl:text-xl">
          {description}
        </p>
      </div>
    </>
  );
}

export default Card;
