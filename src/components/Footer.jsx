import React from "react";

function Footer() {
  const getCopyRightDate = new Date().getFullYear();

  return (
    <>
      <section className="h-[100%] pt-16 pb-5">
        <footer className="bg-[var(--background-color)]">
          <div className="flex flex-col md:flex-row justify-center items-center md:justify-between items-start">
            <div className="left flex flex-wrap">
              <img
                className="-mt-12 hidden lg:block"
                src="./Images/Logo/DK-01.png"
                width={"150px"}
                height={"150px"}
                alt=""
              />
              <div
                style={{ textTransform: "uppercase" }}
                className="flex gap-6 justify-center px-0 md:px-10 text-[var(--text-color)]"
              >
                <div className="px-0 md:px-12">
                  <ul>
                    <li>What We Do</li>
                    <li>Portfolio</li>
                    <li>Contact Us</li>
                    <li>Careers</li>
                  </ul>
                </div>
                <div className="px-0 md:px-12">
                  <ul>
                    <li>Privacy Policy</li>
                    <li>Terms & Condition</li>
                    <li></li>
                    <li></li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              style={{ textTransform: "uppercase" }}
              className="right flex justify-center items-center mt-10 md:mt-0"
            >
              <div className="box w-[270px] h-[190px] bg-[#40C5A640] m-7 md:mb-12 flex justify-center items-center flex-col rounded shadow-lg">
                <h1 style={{ fontWeight: "600" }} className="text-[18px]">
                  Contact Us
                </h1>
                <h1 className="text-[var(--text-color)]">
                  <a href="tel:03355565699">0335 5565699</a>
                </h1>
                <h1 className="text-[var(--text-color)]">
                  <a href="mailto:info@darkrew.com">info@darkrew.com</a>
                </h1>
                <h1 className="text-[var(--text-color)]">Rawalpindi, PK</h1>
              </div>
            </div>
          </div>
          <hr className="border border-gray-500" />
          <div className="text-center mt-4">
            <h1 className=" text-[var(--text-color)]">
              © Copyright | All Rights Reserved 2024
            </h1>
          </div>
        </footer>
      </section>
    </>
  );
}

export default Footer;
