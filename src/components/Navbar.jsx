import React, { useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
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
  const [scrollToServices, setScrollToServices] = useState(false);

  const GoHome = () => {
    window.location.href = "/";
  };

  const GoAuth = () => {
    window.location.href = "/login";
  };

  const GoHomeServices = () => {
    if (location.pathname === "/") {
      scrollToServicesSection();
    } else {
      setScrollToServices(true);
      window.location.href = "/#services";
    }
    closeMenu();
  };

  useEffect(() => {
    if (scrollToServices && location.pathname === "/") {
      scrollToServicesSection();
      setScrollToServices(false);
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

  const [isOpen, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!isOpen);
  };

  const closeMenu = () => {
    setOpen(false);
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
            to="/"
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
            <NavLink to="/login">
              <button
                type="button"
                className="text-white bg-[var(--main-color)] hover:bg-black duration-100 font-bold rounded-lg text-sm px-8 py-2 text-center"
                onClick={GoAuth}
              >
                Join Us
              </button>
            </NavLink>
            <button
              onClick={toggleMenu}
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex z-50 pl-3 items-center w-10 h-10 justify-center text-[var(--text-color)] rounded-lg lg:hidden ml-10"
              aria-controls="navbar-sticky"
              aria-expanded={isOpen}
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
                  to="/"
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
                  className="block py-2 px-3 text-black rounded md:bg-transparent md:p-0"
                >
                  Services
                </a>
              </li>
              <li>
                <NavLink
                  to="/courses"
                  className="block py-2 px-3 text-black rounded md:bg-transparent md:p-0"
                >
                  Courses
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/why-choose-us"
                  className="block py-2 px-3 text-black rounded md:bg-transparent md:p-0"
                >
                  Why Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact-us"
                  className="block py-2 px-3 text-black rounded md:bg-transparent md:p-0"
                >
                  Contact Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/aboutus"
                  className="block py-2 px-3 text-black rounded md:bg-transparent md:p-0"
                >
                  About Us
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div
        className={`menu-overlay ${isOpen ? "open" : ""}`}
        onClick={closeMenu}
      ></div>
      <div className={`menu-container ${isOpen ? "open" : ""}`}>
        <ul className="space-y-4">
          <li className="flex justify-between items-center">
            <NavLink
              to="/"
              onClick={GoHome}
              className="block -mb-5 px-3 text-black rounded"
            >
              <span className="flex items-center gap-4">
                <IoHome size={20} color={"#40c5a6"} /> Home
              </span>
            </NavLink>
            <span>
              <button
                onClick={toggleMenu}
                data-collapse-toggle="navbar-sticky"
                type="button"
                className="inline-flex z-50 pl-3 items-center w-10 h-10 justify-center text-[var(--text-color)] rounded-lg lg:hidden ml-10"
                aria-controls="navbar-sticky"
                aria-expanded={isOpen}
              >
                <span className="sr-only">Open main menu</span>
                <Hamburger toggled={isOpen} toggle={setOpen} />
              </button>
            </span>
          </li>
          <li>
            <a
              href="#services"
              onClick={GoHomeServices}
              className="block  gap-4 py-2 px-3 text-black rounded"
            >
              <span className="flex items-center gap-4">
                <RiCustomerService2Fill size={20} color={"#40c5a6"} /> Services
              </span>
            </a>
          </li>
          <li>
            <NavLink
              to="/courses"
              className="block  gap-4 py-2 px-3 text-black rounded"
            >
              <span className="flex items-center gap-4">
                <SiCoursera size={20} color={"#40c5a6"} />
                Courses
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/why-choose-us"
              className="block  gap-4 py-2 px-3 text-black rounded"
            >
              <span className="flex items-center gap-4">
                <FaPersonCircleQuestion size={20} color={"#40c5a6"} />
                Why Us
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact-us"
              className="block  gap-4 py-2 px-3 text-black rounded"
            >
              <span className="flex items-center gap-4">
                <MdContacts size={20} color={"#40c5a6"} />
                Contact Us
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/aboutus"
              className="block  gap-4 py-2 px-3 text-black rounded"
            >
              <span className="flex items-center gap-4">
                <FaPersonCircleExclamation size={20} color={"#40c5a6"} />
                About Us
              </span>
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
