import { ArrowRightIcon } from "@heroicons/react/solid";
import React, { useState } from "react";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import QRCode from "react-qr-code";
import "./Navbar.css";

export default function Navbar() {
  const [value] = useState(
    "https://drive.google.com/file/d/1KSw-cOCV71qhMdNVL_mhB8Somehxwfr5/view"
  );
  const [back] = useState("#FFFFFF");
  const [fore] = useState("#000000");
  const [size] = useState(72);

  return (
    <header className="bg-gray-800 sticky top-0 z-10">
      <div className="navbar-container container mx-auto flex flex-col md:flex-row items-center justify-between p-3">
        <a
          href="#about"
          className="text-xl focus:outline-none focus:ring-2 focus:ring-green-500 rounded"
          style={{ marginBlock: "auto" }}
        >
          IOANNIS PSYCHIAS | Athens, Greece
        </a>

        <Tippy content="Scan to view my CV" trigger="mouseenter focus">
          <div
            className="qr-wrapper"
            aria-label="QR code to CV"
            tabIndex={0}
            role="img"
          >
            <QRCode
              value={value}
              size={size}
              bgColor={back}
              fgColor={fore}
              level={"Q"}
              title="My CV QR code"
              style={{
                height: "auto",
                maxWidth: "100%",
                display: "block",
                shapeRendering: "crispEdges",
              }}
            />
          </div>
        </Tippy>

        <div className="flex flex-col md:flex-row items-center justify-center md:mt-0">
          <nav className="md:mr-5 flex flex-col md:flex-row items-center text-base">
            <a
              href="#projects"
              className="md:mr-5 hover:text-blue-400 hover:bg-gray-700 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors"
            >
              Projects
            </a>
            <a
              href="#skills"
              className="md:mr-5 hover:text-blue-400 hover:bg-gray-700 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors"
            >
              Skills
            </a>
            <a
              href="#certificates"
              className="md:mr-5 hover:text-blue-400 hover:bg-gray-700 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors"
            >
              Certificates
            </a>
          </nav>
          <a
            href="#contact"
            className="inline-flex items-center bg-gray-700 border-0 py-1 px-3 hover:bg-gray-600 rounded text-base md:mt-0 focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors"
            style={{ marginBlock: "auto" }}
          >
            Contact me
            <ArrowRightIcon className="w-4 h-4 ml-1" />
          </a>
        </div>
      </div>
    </header>
  );
}
