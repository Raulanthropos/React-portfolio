import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";
import "./Navbar.css"

export default function Navbar() {
  return (
    <header className="bg-gray-800 sticky top-0 z-10">
  <div className="container mx-auto flex flex-col md:flex-row items-center justify-between p-3">
    <a href="#about" className="text-xl" style={{marginBlock: "auto"}}>
      IOANNIS PSYCHIAS
    </a>
    <div className="flex flex-col md:flex-row items-center justify-center md:mt-0">
      <nav className="md:mr-5 flex flex-col md:flex-row items-center text-base">
        <a href="#projects" className="mr-3 md:mr-5 hover:text-blue hover:bg-gray-700">
          Projects
        </a>
        <a href="#skills" className="mr-3 md:mr-5 hover:text-blue hover:bg-gray-700">
          Skills
        </a>
        <a href="#certificates" className="mr-3 md:mr-5 hover:text-blue hover:bg-gray-700">
          Certificates
        </a>
      </nav>
      <a
        href="#contact"
        className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base md:mt-0"
        style={{marginBlock: "auto"}}>
        Contact me
        <ArrowRightIcon className="w-4 h-4 ml-1" />
      </a>
    </div>
  </div>
</header>
  );
}
