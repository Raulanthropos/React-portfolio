import React from "react";

export default function About() {
return (
<section id="about">
<div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
<div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
<h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
Hi, I'm Mark Otuya!
</h1>
<p className="mb-8 leading-relaxed">
I'm a full stack developer with a passion for building innovative and user-friendly web applications. With over 5 years of experience in the industry, I've honed my skills in both front-end and back-end development, as well as in agile methodologies and project management. My strong understanding of software architecture and best practices allows me to deliver high-quality solutions that meet business needs and exceed user expectations. When I'm not coding, you can find me exploring out-door activities, listening to music  or Playing football.
</p>
<div className="flex justify-center">
<a
           href="#Contact"
           className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
Work With Me
</a>
<a
           href="#projects"
           className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
See My Past Work
</a>
</div>
</div>
<div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
<img
         className="object-cover object-center rounded"
         alt="hero"
         src="./coding.svg"
       />
</div>
</div>
</section>
);
}
