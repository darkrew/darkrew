import React, { useEffect } from 'react'
import TeamCards from './TeamCards';
import Footer from '../Footer';
import ContactUs from '../Contact/ContactUs';
import ContactModal from '../Modals/ContactModal';

function Team() {
  return (
    <>
    <section className='bg-[var(--background-color)] h-[100%] px-0' id='team'>
    <div className="md:grid md:grid-cols-2 sm:px-10 px-10 gap-9 ">
    <div className="h-[100%]">
                <img src="/Images/svgImages/Team.svg" className='glow-on-hover' alt="" />
            </div>
                <div className="h-[100%] flex justify-center flex-col">
                <h1 className='mb-10 text-[var(--heading-color)] headings mt-10 font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl'>Our Team of <span className='text-[var(--main-color)]'>Visionaries</span> and <span className='text-[var(--main-color)]'>Innovators</span></h1>
                <h1 className='text-[var(--text-color)] mb-10 text-xl sm:text-xl xl:text-2xl'>Our team at Darkrew is a collective of visionaries and innovators, each contributing their unique expertise to turn ideas into reality. From our creative thinkers and tech wizards to our problem solvers and customer-centric experts, we are united by a passion for innovation. With unwavering dedication to excellence, we collaborate, inspire, and push boundaries to create a hub where ideas take flight in the fast-paced world of technology.</h1>
                <div className="mt-4 sm:mt-32 sm:mb-0 mb-20">
                <ContactModal/>
                </div>
            </div>
            
            </div>
    <div className="text-center">
      <h1 className='text-[var(--heading-color)] headings font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl'>Our <span className='text-[var(--main-color)]'>Creative</span> Team</h1>
      <p className='text-[var(--text-color)] subHeadings text-center sm:mx-32 sm:px-1 px-8 text-xl sm:text-xl xl:text-2xl'>Where Innovation Meets Imagination. Our creative software development team transforms ideas into stunning digital realities, crafting captivating user experiences that leave a lasting impression.</p>
    </div>
       
<div id="default-carousel" className="relative h-[100%] flex justify-center items-center mb-16 w-full" data-carousel="slide">
        <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0 mt-10" data-carousel-item>
            <TeamCards name="Usman Muaz" profession = "Flutter Developer" occupation = "Founder & CEO" link = "https://www.google.com"/>
            <TeamCards name="Muhammad Tayyab" profession = "Full Stack Developer" occupation = "Co-Founder" link = "https://www.youtube.com"/>
            <TeamCards name="Muhammad Tayyab" profession = "Full Stack Developer" occupation = "Co-Founder" link = "https://www.youtube.com"/>
        </div>
</div>
<ContactUs/>
  <Footer/>
    </section>
    </>
  )
}

export default Team