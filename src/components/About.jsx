import React from "react";

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden hero-glow dot-grid">
      <div className="container mx-auto px-6 pt-16 pb-24 lg:pt-24 lg:pb-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1 flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="relative group">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-blue-500/30 via-violet-500/20 to-transparent blur-xl opacity-60 group-hover:opacity-80 transition-opacity" />
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <img
                  className="object-cover object-center w-full h-full"
                  alt="Ioannis Psychias, full-stack TypeScript developer"
                  src="https://res.cloudinary.com/dlhs6o8ga/image/upload/v1720848432/Raul_vil6oq.jpg"
                />
              </div>
            </div>
            <p className="mt-5 text-sm text-slate-500">Athens, Greece</p>
            <p className="mt-1 text-xs text-slate-600 max-w-xs leading-relaxed">
              EPICODE Institute of Technology
              <br />
              Full-stack Development · 2022-2023
            </p>
          </div>

          <div className="order-1 lg:order-2">
            <span className="section-label">Full-Stack TypeScript Developer</span>

            <h1 className="section-title mb-6">
              I build production systems,{" "}
              <em className="italic text-blue-300">end to end</em>.
            </h1>

            <div className="space-y-4 section-subtitle mb-8">
              <p>
                Nearly three years of professional experience building production
                regulatory and internal systems across frontend, backend, and
                infrastructure.
              </p>
              <p>
                I work with React, GraphQL and REST APIs, SQL databases, and AWS
                (Lambda, API Gateway, CloudFront). I take features from requirements
                through architecture, implementation, and deployment, often handling
                client work directly with high ownership.
              </p>
              <p>
                The anchor project here is{" "}
                <a
                  href="#projects"
                  className="text-blue-400 hover:text-blue-300 underline-offset-2 hover:underline"
                >
                  Internal Task Force
                </a>
                : a TypeScript monorepo with strict RBAC and multi-team ticketing.
                Also included: a JSON-to-CSV data utility and production WordPress
                client sites.
              </p>
              <p className="text-slate-500 italic">
                When I'm not coding, I'm usually offline with a wagging tail
                nearby.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              <a href="#contact" className="cta-primary">
                Contact Me
              </a>
              <a href="#projects" className="cta-secondary">
                See My Past Work
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
