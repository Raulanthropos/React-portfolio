import React from "react";
import { skills } from "../data";

export default function Skills() {
  return (
    <section id="skills" className="py-20 lg:py-28">
      <div className="container px-6 mx-auto max-w-5xl">
        <div className="mb-12 text-center lg:text-left">
          <span className="section-label">Expertise</span>
          <h2 className="section-title">Skills &amp; Technologies</h2>
        </div>

        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span key={skill} className="skill-pill">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
