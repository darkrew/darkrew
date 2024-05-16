import React from 'react'
import {AiFillInstagram} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'
import {FaSquareXTwitter} from 'react-icons/fa6'

function TeamCards({
    name, profession, occupation, link
}) {
  return (
    <div>


       
<div class="TeamCards w-[20rem] h-[25rem] sm:w[20rem] p-4  bg-[#ccc] border border-gray-200 rounded-lg shadow">

    <div class="flex flex-col items-center">
        <img class="w-48 h-48 xl:w-56 xl:h-56 mb-3 rounded-full shadow-lg" src="/Images/Avatar.png" alt="Bonnie image"/>
    </div>
        <div className="text-start mt-4">
            <h5 class="text-xl text-[var(--background-color)] text-[25px] font-semibold">{name}</h5>
        </div>
    <div className="flex justify-start flex-col">
         <span class="text-sm text-gray-500">{occupation}</span>
        <span class="text-sm text-gray-500">{profession}</span>
       </div>
    <div class="flex justify-end mt-4 space-x-3 md:mt-6">
             <a href="" target='__blank' className='text-2xl'><AiFillInstagram/></a>
             <a href="" target='__blank' className='text-2xl'><AiFillLinkedin/></a>
             <a href="" target='__blank' className='text-2xl'><FaSquareXTwitter/></a>
        </div>
</div>



    </div>
  )
}

export default TeamCards