import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { FaSquareXTwitter } from "react-icons/fa6";

function TeamCards({ name, profession, occupation, link }) {
  return (
    <div className="relative px-10">
      <div className="max-w-md h-[28rem] bg-white rounded-lg shadow-lg">
        <a href="#">
          <img
            className="rounded-t-lg overflow-hidden w-[12rem] md:w-[18rem]"
            src="./Images/Avatar.png"
            alt=""
          />
        </a>
        <div className="p-5 flex justify-between relative">
          <div className="bg-[var(--main-color)] text-sm custom-team-occupation-border px-6 py-1 text-white absolute left-0 top-24 md:top-12">
            <p className="headings mr-4">{occupation}</p>
          </div>
          <div className="bg-gray-100 text-sm border border-white text-black custom-team-profession-border px-6 py-1 absolute right-0 top-12">
            <p className="headings font-extralight">{profession}</p>
          </div>
        </div>
        <div className="absolute bottom-0 md:left-[25%] left-[18%] flex gap-3 p-5">
          <AiFillInstagram size={37} />
          <AiFillLinkedin size={37} />
          <FaSquareXTwitter size={35} />
        </div>
      </div>
    </div>
  );
}

export default TeamCards;
