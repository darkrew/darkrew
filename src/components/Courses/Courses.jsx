import React from "react";
import transition from "../../transition";
import Navbar from "../Navbar";

const Courses = () => {
  return (
    <>
      <Navbar />

      <section className="mt-32">
        <div className="flex justify-center items-center h-full">
          <h1 className="headings text-6xl">Stay Tuned We Are Working On It</h1>
        </div>
      </section>
    </>
  );
};

export default transition(Courses);
