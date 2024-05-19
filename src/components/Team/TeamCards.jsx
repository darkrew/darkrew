import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { FaSquareXTwitter } from "react-icons/fa6";

function TeamCards({ name, profession, occupation, link }) {
  return (
    <div className="relative px-10">
      <div className="max-w-md h-[32rem] bg-white rounded-lg shadow-lg">
        <a href="#">
          <img
            className="rounded-t-lg overflow-hidden w-[21rem]"
            src="./Images/Avatar.png"
            alt=""
          />
        </a>
        <div className="p-5 flex justify-between relative">
          <div className="bg-[var(--main-color)] custom-team-occupation-border px-8 text-white absolute left-0 top-24 md:top-12">
            <p className="headings">{occupation}</p>
          </div>
          <div className="bg-[var(--main-color)] border border-white text-white custom-team-profession-border drop-shadow-lg px-8 absolute right-0 top-12">
            <p className="headings font-extralight">{profession}</p>
          </div>
        </div>
        <div className="absolute bottom-0 left-[30%] flex gap-3 p-5">
          <AiFillInstagram size={37} />
          <AiFillLinkedin size={37} />
          <FaSquareXTwitter size={35} />
        </div>
      </div>
    </div>
  );
}

export default TeamCards;
