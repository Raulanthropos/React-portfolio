import "@fortawesome/fontawesome-free/css/all.min.css";
import "./App.css";
import React from "react";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Navbar from "./components/Navbar.jsx";
import Projects from "./components/Projects.jsx";
import Skills from "./components/Skills.jsx";

function App() {
  return (
    <main className="min-h-screen text-slate-400 bg-[var(--bg-base)]">
      <Navbar />
      <About />
      <div className="section-divider mx-auto max-w-5xl" />
      <Projects />
      <div className="section-divider mx-auto max-w-5xl" />
      <Skills />
      <div className="section-divider mx-auto max-w-5xl" />
      <Contact />
    </main>
  );
}

export default App;
