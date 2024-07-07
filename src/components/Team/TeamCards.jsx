import React from "react";
import { FaBehanceSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

import "react-multi-carousel/lib/styles.css";

function TeamCards({
  name,
  profession,
  occupation,
  linkedin,
  github,
  instagram,
  behance,
  pic,
}) {
  return (
    <div className="px-4">
      {/* <div class="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4"> */}
      <div class="md:hover:shadow-xl hover:scale-105 duration-200 rounded-lg mb-10 pb-3 pt-4">
        <a href="#" class="mx-auto flex justify-center">
          <img
            class="rounded-2xl object-cover  overflow-hidden drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
            src={pic}
          />
        </a>

        <div class="text-center mt-6">
          <h1 class="text-gray-900 text-xl font-bold mb-1">{name}</h1>
          <h1 class="text-gray-900 text-md font-lightbold mb-1">
            {profession}
          </h1>

          <div class="text-gray-700 font-light mb-2">{occupation}</div>

          <div
            class="flex items-center justify-center opacity-50 hover:opacity-100
                                transition-opacity duration-300"
          >
            <a
              href={linkedin}
              target="_blank"
              class="flex rounded-full hover:bg-blue-50 h-10 w-10"
            >
              <i class="text-blue-700 mx-auto mt-2">
                <BsLinkedin size={25} />
              </i>
            </a>

            <a
              href={github}
              target="_blank"
              class="flex rounded-full hover:bg-gray-50 h-10 w-10"
            >
              <i class="text-gray-400 mx-auto mt-2">
                <FaGithub size={25} />
              </i>
            </a>

            <a
              href={behance}
              target="_blank"
              class="flex rounded-full hover:bg-pink-50 h-10 w-10"
            >
              <i class="text-pink-400 mx-auto mt-2">
                <FaBehanceSquare size={25} />
              </i>
            </a>
            <a
              href={instagram}
              target="_blank"
              class="flex rounded-full hover:bg-pink-50 h-10 w-10"
            >
              <i class="text-pink-600 mx-auto mt-2">
                <BsInstagram size={25} />
              </i>
            </a>
          </div>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
}

export default TeamCards;
