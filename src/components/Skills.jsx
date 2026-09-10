import React from "react";
import { coreTech } from "../data";

export default function Skills() {
  return (
    <section id="skills" className="py-20 lg:py-28">
      <div className="container px-6 mx-auto max-w-5xl">
        <div className="mb-12 text-center lg:text-left">
          <span className="section-label">Tech Stack</span>
          <h2 className="section-title mb-4">Technologies I Work With</h2>
          <p className="section-subtitle mx-auto lg:mx-0">
            The languages, frameworks, and platforms I use regularly in
            production and client work.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          {coreTech.map((tech) => (
            <span key={tech} className="skill-pill">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
