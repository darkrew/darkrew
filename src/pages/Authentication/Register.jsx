import React from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row h-screen">
      {/* Right Section */}
      <div className="relative overflow-y-scroll w-full lg:w-1/2 flex flex-col justify-center items-center bg-white">
        <div
          style={{
            backgroundImage: "url('./Images/3dRegisterImage.svg')",
            backgroundPosition: "right center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            opacity: 0.05,
            mixBlendMode: "luminosity",
          }}
          className="absolute top-0 left-0 w-full h-full"
        />
        <div className="relative z-10 w-full max-w-md p-6 md:p-8 custom-scrollbar overflow-y-scroll">
          <div className="flex flex-col items-center justify-center">
            <div className="w-full mb-4">
              <div className="flex justify-center items-center gap-2 cursor-pointer hover:shadow-lg duration-100 bg-white shadow-md px-4 py-2 rounded-lg text-lg leading-tight tracking-tight text-blue-600 md:text-xl">
                <FcGoogle size={35} />
                <h2>Sign in with Google</h2>
              </div>
            </div>
            <div className="flex items-center my-4 w-full">
              <div className="flex-grow h-px bg-gray-300"></div>
              <span className="px-4 text-gray-500">OR</span>
              <div className="flex-grow h-px bg-gray-300"></div>
            </div>
            <form className="w-full space-y-4 md:space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="bg-gray-50 border-none shadow-md text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="e.g. Darkrew's Member"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border-none shadow-md text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="name@company.com"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Phone#
                </label>
                <input
                  type="phone"
                  name="number"
                  id="phone"
                  className="bg-gray-50 border-none shadow-md text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="03xxxxxxxxx"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 shadow-md border-none text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  required
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 ring-[var(--main-color)] focus:ring-3 focus:[var(--main-color)]"
                      required
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="remember" className="text-gray-500">
                      Remember me
                    </label>
                  </div>
                </div>
                <a
                  href="#"
                  className="text-sm font-medium text-primary-600 hover:underline"
                >
                  Forgot password?
                </a>
              </div>
              <button
                type="submit"
                className="w-full text-white text-lg bg-[var(--main-color)] hover:shadow-xl duration-100 focus:ring-4 focus:outline-none focus:ring-[#40C5A640] font-medium rounded-lg px-5 py-2.5 text-center"
              >
                Sign up
              </button>
              <p className="text-lg font-light text-gray-500">
                Already have an account?{" "}
                <Link
                  to={"/login"}
                  className="font-medium text-primary-600 hover:underline"
                >
                  Sign in
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
      {/* Left Section */}
      <div className="left bg-[#40C5A640] h-[40vh] lg:h-full w-full lg:w-1/2 overflow-hidden p-6 flex flex-col">
        <Link to="/">
          <div className="">
            <img
              src="./Images/Logo/DK-01.png"
              className="-mt-8 -ml-4"
              width="125px"
              alt="Logo"
            />
          </div>
        </Link>
        <div className="flex flex-col items-center lg:items-start justify-center lg:justify-between h-full">
          <div className="text-center lg:text-left mb-6 lg:ml-12">
            <h1 className="text-2xl md:text-4xl mb-2 font-bold">
              Join Us Today!
            </h1>
            <h6 className="text-base md:text-lg text-gray-700">
              Create an account to start your journey with us.Explore new
              opportunities, connect with others,and unlock exclusive content
              just for you!
            </h6>
          </div>
          <div className="hidden lg:block">
            <img
              style={{
                mixBlendMode: "luminosity",
              }}
              src="./Images/3dRegisterImage.svg"
              className="lg:ml-32 xl:ml-20 w-full lg:w-auto lg:max-w-xs lg:-mt-5 xl:mt-5 xl:max-w-md"
              alt="Sample"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
