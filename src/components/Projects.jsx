import React, { useState } from "react";
import { projects } from "../data";
import "./Projects.css";

function ProjectLinks({ project }) {
  return (
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
  );
}

function FeaturedProject({ project }) {
  return (
    <article className="card-surface featured-project overflow-hidden mb-8">
      <div className="grid lg:grid-cols-5 gap-0">
        <div className="lg:col-span-2 relative min-h-[220px] lg:min-h-full">
          <img
            src={project.image}
            alt={`${project.title} thumbnail`}
            className="w-full h-full min-h-[220px] object-cover featured-project-image"
          />
          {project.subtitle && (
            <div className="absolute bottom-0 inset-x-0 px-4 py-3 bg-gradient-to-t from-black/90 to-transparent">
              <p className="text-xs text-slate-300">{project.subtitle}</p>
            </div>
          )}
        </div>

        <div className="lg:col-span-3 p-6 sm:p-8 flex flex-col">
          <span className="text-xs font-semibold uppercase tracking-widest text-blue-400 mb-2">
            Flagship Project
          </span>
          <h3 className="font-display text-2xl sm:text-3xl text-white mb-4">
            {project.title}
          </h3>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed mb-5">
            {project.description}
          </p>
          {project.highlights && (
            <ul className="text-sm text-slate-400 space-y-2 mb-6 list-disc list-inside">
              {project.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )}
          <ProjectLinks project={project} />
        </div>
      </div>
    </article>
  );
}

function ProjectCard({ project, index, expandedDescriptions, toggleDescription }) {
  return (
    <article className="card-surface flex flex-col overflow-hidden card-container">
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
        <ProjectLinks project={project} />
      </div>
    </article>
  );
}

export default function Projects() {
  const featuredProject = projects.find((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  const [expandedDescriptions, setExpandedDescriptions] = useState(
    new Array(otherProjects.length).fill(false)
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
            Production systems, data utilities, and client-facing sites. Internal
            Task Force is the most complex piece and the best place to start.
          </p>
        </div>

        {featuredProject && <FeaturedProject project={featuredProject} />}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {otherProjects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              expandedDescriptions={expandedDescriptions}
              toggleDescription={toggleDescription}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
