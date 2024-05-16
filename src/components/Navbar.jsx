import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);

    // Scroll to the services section
    const servicesSection = document.getElementById("services");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="sticky top-0 z-50 h-20 bg-[var(--background-color)] MainNav">
      <div className="max-w-6xl">
        <div className="flex justify-between">
          <div className="flex space-x-4">
            <div>
              <NavLink
                className="flex items-center -ml-2 md:px-12 py-5 text-gray-700 hover:text-gray-900"
                to="/"
              >
                <img
                  className="w-32 -translate-y-12 "
                  src="/Images/Logo/DK-01.png"
                  alt=""
                />
              </NavLink>
            </div>
            <div className="hidden -translate-y-9 text-[var(--text-color)] md:flex items-center space-x-1">
              <ul className="navLinks text-[14px] lg:text-[20px] md:-translate-x-16 font-bold flex flex-row gap-5 lg:gap-5">
                <li>
                  <NavLink
                    to=""
                    href="#home"
                    onClick={() => scrollToSection("home")}
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <a href="#services">Services</a>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      `${
                        isActive
                          ? "text-[var(--main-color)]"
                          : "text-[var(--text-color)]"
                      }`
                    }
                    to="/ourwork"
                  >
                    Courses
                  </NavLink>
                </li>
                <li>
                  <a href="#whyUs">Why Us</a>
                </li>
                {/* <li>
                  <NavLink
                    className={({ isActive }) =>
                      `${
                        isActive
                          ? "text-[var(--main-color)]"
                          : "text-[var(--text-color)]"
                      }`
                    }
                    to="/team"
                  >
                    Team
                  </NavLink>
                </li> */}
                <li>
                  <NavLink to={"/contact-us"}>Contact Us</NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      `${
                        isActive
                          ? "text-[var(--main-color)]"
                          : "text-[var(--text-color)]"
                      }`
                    }
                    to="/aboutus"
                  >
                    About Us
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>

          <div className="md:hidden -translate-y-10 -translate-x-5 lg:hidden xl:hidden text-[var(--text-color)] flex ">
            <button className="mobile-menu-button" onClick={toggleMenu}>
              {isMenuOpen ? (
                // Render the "X" icon when the menu is open
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                // Render the hamburger icon when the menu is closed
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      <div
        className={`mobile-menu duration-300 -translate-y-[5.6rem] bg-[var(--background-color)] text-[var(--text-color)] ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        <NavLink
          to="/"
          className="block py-2 px-4 text-xl hover:bg-[var(--text-color)] hover:text-[var(--background-color)]  duration-200"
          onClick={closeMenu}
        >
          Home
        </NavLink>
        <NavLink
          to={"/"}
          className="block py-2 px-4 text-xl hover:bg-[var(--text-color)] hover:text-[var(--background-color)]  duration-200"
          onClick={closeMenu}
        >
          Services
        </NavLink>
        <NavLink
          to="/ourwork"
          className="block py-2 px-4 text-xl hover-bg-[var(--text-color)] hover:text-[var(--background-color)]  duration-200"
          onClick={closeMenu}
        >
          Courses
        </NavLink>
        <a
          href="#whyus"
          className="block py-2 px-4 text-xl hover-bg-[var(--text-color)] hover:text-[var(--background-color)]  duration-200"
          onClick={closeMenu}
        >
          Why Us
        </a>
        {/* <NavLink
          to="/team"
          className="block py-2 px-4 text-xl hover-bg-[var(--text-color)] hover:text-[var(--background-color)]  duration-200"
          onClick={closeMenu}
        >
          Team
        </NavLink> */}
        <NavLink
          className="block py-2 px-4 text-xl hover-bg-[var(--text-color)] hover:text-[var(--background-color)]  duration-200"
          onClick={closeMenu}
          to={"/contact-us"}
        >
          Contact Us
        </NavLink>

        <NavLink
          to="/aboutus"
          className="block py-2 px-4 text-xl hover-bg-[var(--text-color)] hover:text-[var(--background-color)]  duration-200"
          onClick={closeMenu}
        >
          About Us
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
