import React from "react";

export default function About() {
return (
<section id="about">
<div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
<div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
<h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
Hi, I'm Ioannis Psychias!
</h1>
<p className="mb-8 leading-relaxed">
I have worked in management and administrative positions for more than five years, including 1.5 years in the telecoms industry. I developed a love for coding and started learning web and mobile development during the COVID-19 pandemic. I am now focusing on full-stack web development utilizing JavaScript, React, Redux, TypeScript, Node.js, and Express.js. I'm eager to start a career in web development since I'm a natural problem-solver and tech enthusiast who can use my abilities to create dynamic and effective websites and online applications. When I'm not coding, you can often find me with a wagging tail by my side.
</p>
<div className="flex justify-center">
<a
           href="#contact"
           className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
Contact Me
</a>
<a
           href="#projects"
           className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
See My Past Work
</a>
</div>
</div>
<div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
<div class="w-64 h-64 overflow-hidden">
  <img
    class="object-cover object-center w-full h-full"
    alt="hero"
    src="https://res.cloudinary.com/dlhs6o8ga/image/upload/v1681207526/meme-removebg-preview1_tgnhsn.png"
    style={{borderRadius: "50%"}}
  />
</div>

</div>
</div>
</section>
);
}