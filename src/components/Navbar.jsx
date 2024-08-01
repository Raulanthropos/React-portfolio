import { ArrowRightIcon } from "@heroicons/react/solid";
import React, { useState } from "react";
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional for styling
import QRCode from "react-qr-code";
import "./Navbar.css"

export default function Navbar() {
  const [value, setValue] = useState("https://drive.google.com/file/d/1OaEX6UGzAzhbsp4MNkgreU766w1gXFAb/view?usp=drive_link");
  const [back, setBack] = useState('#FFFFFF');
  const [fore, setFore] = useState('#000000');
  const [size, setSize] = useState(72);

  return (
    <header className="bg-gray-800 sticky top-0 z-10">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between p-3">
        <a href="#about" className="text-xl" style={{marginBlock: "auto"}}>
          IOANNIS PSYCHIAS
        </a>
        <Tippy content="Scan to view my CV">
          <div>
            <QRCode
              value={value}
              size={size}
              bgColor={back}
              fgColor={fore}
              level={"Q"}
            />
          </div>
        </Tippy>
        <div className="flex flex-col md:flex-row items-center justify-center md:mt-0">
          <nav className="md:mr-5 flex flex-col md:flex-row items-center text-base">
            <a href="#projects" className="md:mr-5 hover:text-blue hover:bg-gray-700">
              Projects
            </a>
            <a href="#skills" className="md:mr-5 hover:text-blue hover:bg-gray-700">
              Skills
            </a>
            <a href="#certificates" className="md:mr-5 hover:text-blue hover:bg-gray-700">
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
