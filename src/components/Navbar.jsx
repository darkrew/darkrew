import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
// import Hamburger from "hamburger-react";
import { Sling as Hamburger } from "hamburger-react";

function Navbar() {
  const GoHome = () => {
    window.location.href = "/";
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [isOpen, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!isOpen);
  };

  const closeMenu = () => {
    setOpen(false);

    // Scroll to the services section
    const servicesSection = document.getElementById("services");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav className="bg-white fixed w-full z-20 top-0 start-0 border-b border-gray-200 h-[5rem]">
        <div className="px-3 flex flex-wrap items-center justify-between mx-auto h-full">
          <NavLink
            to={"/"}
            onClick={GoHome}
            className="flex items-center h-full"
          >
            <img
              src="/Images/Logo/DK-01.png"
              className="max-h-36"
              alt="Darkrew Logo"
            />
          </NavLink>
          <div className="flex md:order-2 space-x-3 md:space-x-0">
            <button
              type="button"
              className="text-white bg-[var(--main-color)] focus:ring-4 focus:outline-none focus:ring-[var(--main-color)] font-bold rounded-lg text-sm px-8 py-2 text-center"
            >
              Join Us
            </button>
            <button
              onClick={toggleMenu}
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center w-10 h-10 justify-center text-[var(--text-color)] rounded-lg md:hidden"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <Hamburger toggled={isOpen} toggle={setOpen} />
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1 h-full"
            id="navbar-sticky"
          >
            <ul className="navLinks flex flex-col p-4 md:p-0 mt-4 text-lg border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
              <li>
                <NavLink
                  to={"/"}
                  onClick={GoHome}
                  className="block py-2 px-3 text-black rounded md:bg-transparent md:p-0"
                  aria-current="page"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <a
                  href="#services"
                  className={({ isActive }) =>
                    isActive
                      ? "block py-2 px-3 text-black rounded md:bg-transparent md:p-0 active"
                      : "block py-2 px-3 text-black rounded md:bg-transparent md:p-0"
                  }
                >
                  Services
                </a>
              </li>
              <li>
                <NavLink
                  to={"/courses"}
                  className={({ isActive }) =>
                    isActive
                      ? "block py-2 px-3 text-black rounded md:bg-transparent md:p-0 active"
                      : "block py-2 px-3 text-black rounded md:bg-transparent md:p-0"
                  }
                >
                  Courses
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/why-choose-us"}
                  className={({ isActive }) =>
                    isActive
                      ? "block py-2 px-3 text-black rounded md:bg-transparent md:p-0 active"
                      : "block py-2 px-3 text-black rounded md:bg-transparent md:p-0"
                  }
                >
                  Why Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/contact-us"}
                  className={({ isActive }) =>
                    isActive
                      ? "block py-2 px-3 text-black rounded md:bg-transparent md:p-0 active"
                      : "block py-2 px-3 text-black rounded md:bg-transparent md:p-0"
                  }
                >
                  Contact Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/aboutus"}
                  className={({ isActive }) =>
                    isActive
                      ? "block py-2 px-3 text-black rounded md:bg-transparent md:p-0 active"
                      : "block py-2 px-3 text-black rounded md:bg-transparent md:p-0"
                  }
                >
                  About Us
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="duration-300">
        {isOpen && (
          <div
            className={`mobile-menu duration-300 opacity-100 bg-[var(--main-color)] p-4 h-screen w-screen z-50 fixed text-[var(--text-color)] focus:none`}
          >
            <NavLink
              to="/"
              className="block py-2 px-4 text-2xl text-white hover:bg-[var(--text-color)] hover:text-[var(--background-color)] duration-200"
              onClick={(closeMenu, GoHome)}
            >
              Home
            </NavLink>
            <NavLink
              to={"/"}
              className="block py-2 px-4 text-2xl text-white focus:text-[var(--background-color)]  duration-200"
              onClick={closeMenu}
            >
              Services
            </NavLink>
            <NavLink
              to="/ourwork"
              className="block py-2 px-4 text-2xl text-white focus:text-[var(--background-color)]  duration-200"
              onClick={closeMenu}
            >
              Courses
            </NavLink>
            <NavLink
              to={"/why-choose-us"}
              className="block py-2 px-4 text-2xl text-white focus:text-[var(--background-color)]  duration-200"
              onClick={closeMenu}
            >
              Why Us
            </NavLink>
            <NavLink
              className="block py-2 px-4 text-2xl text-white focus:text-[var(--background-color)]  duration-200"
              onClick={closeMenu}
              to={"/contact-us"}
            >
              Contact Us
            </NavLink>

            <NavLink
              to="/aboutus"
              className="block py-2 px-4 text-2xl text-white focus:text-[var(--background-color)]  duration-200"
              onClick={closeMenu}
            >
              About Us
            </NavLink>
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;
