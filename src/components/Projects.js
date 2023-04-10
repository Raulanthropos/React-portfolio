// import { CodeIcon } from "@heroicons/react/solid";
// import React from "react";
// import {projects} from "../data";


// export default function Projects() {
//   return (
// <section id="projects" className="text-gray-400 bg-gray-900 body-font">
//   <div className="container px-5 py-10 mx-auto text-center lg:px-40">
//     <div className="flex flex-col w-full mb-20">
//       <CodeIcon className="mx-auto inline-block w-10 mb-4" />
//       <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
//         Apps I've Built
//       </h1>
//       <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
//         I'm a creative developer who loves to work on excellent and appealing Web-Applications, with a passion for creating and consuming APIs... Below you may find some of my latest projects.
//       </p>
//     </div>
//     <div className="flex flex-row justify-center items-center">
//       {projects.map((project, index) => (
//         <div key={index} className="flex flex-col w-64 mx-4 my-4 bg-white rounded-lg shadow-lg">
//           <img src={project.image} alt="Project Thumbnail" className="object-cover object-center w-full h-48 rounded-t-lg" />
//           <div className="p-4 space-x-2">
//             <h2 className="font-bold text-lg mb-2">{project.name}</h2>
//             <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 font-semibold mb-2">
//               Source
//             </a>
//             <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded">
//               <a href={project.link} target="_blank" rel="noopener noreferrer">Live Demo</a>
//             </button>
//           </div>
//         </div>
//       ))}
//     </div>
//   </div>
// </section>

//   );
// }

import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../data";
import "./Projects.css";

export default function Projects() {
  return (
    <section
      id="projects"
      className="text-gray-400 bg-gray-900 body-font"
    >
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <CodeIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Apps I've Built
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            I'm a creative developer who loves to work on excellent and
            appealing Web-Applications, with a passion for creating and
            consuming APIs... Below you may find some of my latest
            projects.
          </p>
        </div>
        <div className="flex flex-row justify-center items-center flex-wrap verticalwhenmobile">
          {projects.map((project, index) => (
            <div
              key={index}
              className="flex flex-col w-64 mx-4 my-4 bg-white rounded-lg shadow-lg"
            >
              <img
                src={project.image}
                alt="Project Thumbnail"
                className="object-cover object-center w-full h-48 rounded-t-lg"
              />
              <div className="p-4 space-x-2">
                <h2 className="font-bold text-lg mb-2">
                  {project.name}
                </h2>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-700 font-semibold mb-2"
                >
                  Source
                </a>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
