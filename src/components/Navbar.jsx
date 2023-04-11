import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";
import "./Navbar.css"

export default function Navbar() {
  return (
    // <header className="bg-gray-800 md:sticky top-0 z-10">
    //   <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    //       <a href="#about" className="ml-3 text-xl" style={{marginBlock: "auto"}}>
    //         IOANNIS PSYCHIAS
    //       </a>
    //     <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
    //       <a href="#projects" className="mr-5 hover:text-blue hover:bg-gray-700">
    //         Projects
    //       </a>
    //       <a href="#skills" className="mr-5 hover:text-blue hover:bg-gray-700">
    //         Skills
    //       </a>
    //       <a href="#certificates" className="mr-5 hover:text-blue hover:bg-gray-700">
    //         Certificates
    //       </a>
    //     </nav>
    //     <a
    //       href="#contact"
    //       className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base md:mt-0" style={{marginBlock: "auto"}}>
    //       Contact me
    //       <ArrowRightIcon className="w-4 h-4 ml-1" />
    //     </a>
    //   </div>
    // </header>
    <header className="bg-gray-800 md:sticky top-0 z-10">
  <div className="container mx-auto flex flex-col md:flex-row items-center justify-between p-5">
    <a href="#about" className="ml-3 text-xl" style={{marginBlock: "auto"}}>
      IOANNIS PSYCHIAS
    </a>
    <div className="flex flex-col md:flex-row items-center justify-center mt-4 md:mt-0">
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
