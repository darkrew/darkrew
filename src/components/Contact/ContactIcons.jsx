import React from 'react'
import {GrFacebookOption} from 'react-icons/gr'
import {BsInstagram} from 'react-icons/bs'
import {AiFillLinkedin} from 'react-icons/ai'
import {RiTwitterXFill} from 'react-icons/ri'
import {BsBehance} from 'react-icons/bs'

function ContactIcons() {
  return (
    <>
        <section className='px-8 '>
            <div className="">
            <div className="text-center w-full contactForm">
            <h1 className="headings text-[var(--main-color)] mb-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl">#letsconnect</h1>
            <p className='text-[var(--text-color)] subHeadings text-xl sm:text-xl xl:text-2xl'>Stay in the Loop! Join the conversation on our social media channels for the latest updates, trends, and exclusive content. Let's connect and explore the digital world together.</p>
            </div>
             <div className="text-center w-full contactForm">
            <h1 className="text-3xl lg:text-4xl xl:text-5xl text-[var(--text-color)] mt-16">We Are Social</h1>
            </div>
            <div className="flex flex-wrap sm:gap-20 gap-8 text-center justify-center items-center w-full text-[var(--main-color)] text-lg">
                <a href='#' target='__blank' className='mt-12 text-3xl xl:text-5xl lg:text-4xl'><GrFacebookOption/></a>
                <a href='https://instagram.com/darkrewpk' target='__blank' className='mt-12 text-3xl xl:text-5xl lg:text-4xl'><BsInstagram/></a>
                <a href='https://www.linkedin.com/company/darkrew/' target='__blank' className='mt-12 text-3xl xl:text-5xl lg:text-4xl'><AiFillLinkedin/></a>
                <a href='#' target='__blank' className='mt-12 text-3xl xl:text-5xl lg:text-4xl'><RiTwitterXFill/></a>
                <a href='#' target='__blank' className='mt-12 text-3xl xl:text-5xl lg:text-4xl'><BsBehance/></a>
            </div>
        </div>
        </section>
    </>
  )
}

export default ContactIcons