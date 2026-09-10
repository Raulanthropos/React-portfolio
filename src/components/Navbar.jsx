import { ArrowRightIcon } from "@heroicons/react/solid";
import React, { useState } from "react";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import QRCode from "react-qr-code";
import "./Navbar.css";

const NAV_LINKS = [
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
];

export default function Navbar() {
  const [value] = useState(
    "https://drive.google.com/file/d/1KSw-cOCV71qhMdNVL_mhB8Somehxwfr5/view"
  );

  return (
    <header className="glass-nav sticky top-0 z-50">
      <div className="navbar-container container mx-auto flex flex-col md:flex-row items-center justify-between px-6 py-3">
        <a
          href="#about"
          className="text-sm font-semibold tracking-wide text-white hover:text-blue-300 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
        >
          Ioannis Psychias
        </a>

        <Tippy content="Scan to view my CV" trigger="mouseenter focus">
          <div className="qr-wrapper" aria-label="QR code to CV" tabIndex={0} role="img">
            <QRCode
              value={value}
              size={72}
              bgColor="#FFFFFF"
              fgColor="#000000"
              level="Q"
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

        <div className="flex flex-col md:flex-row items-center gap-1 md:gap-0">
          <nav className="flex flex-col md:flex-row items-center text-sm">
            {NAV_LINKS.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="md:mx-4 py-1.5 text-slate-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 rounded"
              >
                {label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="inline-flex items-center mt-2 md:mt-0 px-4 py-1.5 rounded-full text-sm font-medium bg-white/10 text-white hover:bg-white/15 border border-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Contact
            <ArrowRightIcon className="w-3.5 h-3.5 ml-1.5" />
          </a>
        </div>
      </div>
    </header>
  );
}
