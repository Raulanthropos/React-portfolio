import React, { useState } from "react";
import { projects } from "../data";
import "./Projects.css";

export default function Projects() {
  const [expandedDescriptions, setExpandedDescriptions] = useState(
    new Array(projects.length).fill(false)
  );

  const toggleDescription = (index) => {
    setExpandedDescriptions((prev) =>
      prev.map((isExpanded, i) => (i === index ? !isExpanded : isExpanded))
    );
  };

  return (
    <section id="projects" className="py-20 lg:py-28">
      <div className="container px-6 mx-auto max-w-6xl">
        <div className="mb-16 text-center lg:text-left">
          <span className="section-label">Selected Work</span>
          <h2 className="section-title mb-4">Applications</h2>
          <p className="section-subtitle mx-auto lg:mx-0">
            A selection of applications built for real-world use — internal
            management systems, data-processing utilities, and commercial
            websites. Each project reflects an emphasis on correctness, clarity,
            and long-term maintainability.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <article
              key={index}
              className="card-surface flex flex-col overflow-hidden card-container"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={`${project.title} thumbnail`}
                  className="w-full h-44 object-cover card-image"
                />
                {project.subtitle && (
                  <div className="absolute bottom-0 inset-x-0 px-4 py-2 bg-gradient-to-t from-black/80 to-transparent">
                    <p className="text-xs text-slate-300 truncate">{project.subtitle}</p>
                  </div>
                )}
              </div>

              <div className="card-content flex-1 flex flex-col p-5">
                <h3 className="font-semibold text-lg text-white mb-2">{project.title}</h3>
                <div
                  className={`text-sm text-slate-400 mb-4 card-description ${
                    expandedDescriptions[index] ? "expanded" : ""
                  }`}
                >
                  {expandedDescriptions[index]
                    ? project.description
                    : `${project.description.substring(0, 100)}...`}
                  <button
                    onClick={() => toggleDescription(index)}
                    className="text-blue-400 hover:text-blue-300 font-medium ml-1 focus:outline-none"
                  >
                    {expandedDescriptions[index] ? "See Less" : "See More"}
                  </button>
                </div>

                <div className="card-footer mt-auto flex gap-2">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-secondary flex-1 text-xs py-2"
                    >
                      Source
                    </a>
                  )}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta-primary flex-1 text-xs py-2"
                  >
                    {!project.github ? "Live Website" : "Live Demo"}
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
