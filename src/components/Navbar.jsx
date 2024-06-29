import React, { useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
// import Hamburger from "hamburger-react";
import { Sling as Hamburger } from "hamburger-react";
import { IoHome } from "react-icons/io5";
import { RiCustomerService2Fill } from "react-icons/ri";
import { SiCoursera } from "react-icons/si";
import { FaPersonCircleQuestion } from "react-icons/fa6";
import { MdContacts } from "react-icons/md";
import { FaPersonCircleExclamation } from "react-icons/fa6";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const GoHome = () => {
    window.location.href = "/";
  };
  const [scrollToServices, setScrollToServices] = useState(false);

  const GoHomeServices = () => {
    if (location.pathname === "/") {
      // If already on the home page, scroll directly
      scrollToServicesSection();
    } else {
      // Navigate to home and set the flag to scroll after navigation
      setScrollToServices(true);
      window.location.href = "/";
    }
    closeMenu();
  };

  useEffect(() => {
    if (scrollToServices && location.pathname === "/#services") {
      scrollToServicesSection();
      setScrollToServices(false); // Reset the flag
    }
  }, [location.pathname, scrollToServices]);

  const scrollToServicesSection = () => {
    const element = document.getElementById("services");
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: "smooth",
      });
    }
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
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isOpen]);

  return (
    <>
      <nav className="bg-white fixed w-full z-20 top-0 start-0 border-b border-gray-200 h-[5rem]">
        <div className="pr-6 flex flex-wrap items-center justify-between mx-auto h-full">
          <NavLink
            to={"/"}
            onClick={GoHome}
            className="flex items-center h-full -ml-4"
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
              className="inline-flex items-center w-10 h-10 justify-center text-[var(--text-color)] rounded-lg lg:hidden ml-10 "
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <Hamburger toggled={isOpen} toggle={setOpen} />
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full lg:flex md:w-auto md:order-1 h-full"
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
                  onClick={GoHomeServices}
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

      <div className="duration-300 mt-20">
        {isOpen && (
          <div
            className={`mobile-menu z-[50] duration-300 bg-white p-4 h-[40%] w-screen fixed text-[var(--heading-color)] focus:none`}
          >
            <NavLink
              to="/"
              className="block py-2 px-4 flex justify-start items-center gap-3 text-2xl hover:bg-[var(--text-color)] duration-200"
              onClick={(closeMenu, GoHome)}
            >
              <IoHome color={"#40c5a6"} />
              Home
            </NavLink>
            <a
              href="/#services"
              className="block py-2 px-4 flex justify-start items-center gap-3 text-2xl hover:bg-[var(--main-color)]  duration-200"
              onClick={(closeMenu, GoHomeServices)}
            >
              <RiCustomerService2Fill color={"#40c5a6"} />
              Services
            </a>
            <NavLink
              to="/ourwork"
              className="block py-2 px-4 flex justify-start items-center gap-3 text-2xl focus:text-[var(--background-color)]  duration-200"
              onClick={closeMenu}
            >
              <SiCoursera color={"#40c5a6"} />
              Courses
            </NavLink>
            <NavLink
              to={"/why-choose-us"}
              className="block py-2 px-4 flex justify-start items-center gap-3 text-2xl focus:text-[var(--background-color)]  duration-200"
              onClick={closeMenu}
            >
              <FaPersonCircleQuestion color={"#40c5a6"} />
              Why Us
            </NavLink>
            <NavLink
              className="block py-2 px-4 flex justify-start items-center gap-3 text-2xl focus:text-[var(--background-color)]  duration-200"
              onClick={closeMenu}
              to={"/contact-us"}
            >
              <MdContacts color={"#40c5a6"} />
              Contact Us
            </NavLink>

            <NavLink
              to="/aboutus"
              className="block py-2 px-4 flex justify-start items-center gap-3 text-2xl focus:bg-[var(--background-color)]  duration-200"
              onClick={closeMenu}
            >
              <FaPersonCircleExclamation color={"#40c5a6"} />
              About Us
            </NavLink>
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;
