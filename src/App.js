import "bootstrap/dist/css/bootstrap.min.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import "./App.css";
import React from "react";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Navbar from "./components/Navbar.jsx";
import Projects from "./components/Projects.jsx";
import Skills from "./components/Skills.jsx";
import Certificates from "./components/certificates/Certificates.jsx";

function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Certificates />
      <Contact />
      </main>
  );
}

export default App;