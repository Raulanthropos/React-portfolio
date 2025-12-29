import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hello, and welcome to my portfolio!
          </h1>
          <p className="mb-8 leading-relaxed text-justify">
            I build production-grade web applications that solve operational problems.

            My work focuses on internal tools, admin dashboards, and data-driven systems where correctness, performance, and maintainability matter. I’m comfortable owning features end-to-end — from frontend architecture and state management to backend APIs, data models, and deployment workflows.

            The projects here reflect how I work in real environments: role-based access control, non-trivial data flows, integrations, and interfaces designed for people who use them daily — not demos.

            When I’m not coding, I’m usually offline with a wagging tail nearby.
          </p>
          <div className="flex justify-center w-full">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
            >
              Contact Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
            >
              See My Past Work
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <div className="w-64 h-64 overflow-hidden mx-auto">
            <img
              className="object-cover object-center w-full h-full"
              alt="hero"
              src="https://res.cloudinary.com/dlhs6o8ga/image/upload/v1720848432/Raul_vil6oq.jpg"
              style={{ borderRadius: "50%" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
