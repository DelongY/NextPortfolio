import React from 'react';
import Image from 'next/image';
import profile from './profile.jpg';

const Portfolio = () => {
  return (
    <div className="h-[100vh] flex flex-col items-center justify-center">
      <h1 className="text-center text-5xl font-bold text-red-500 mb-8">
        Portfolio
      </h1>
      <nav className="flex justify-center mb-8">
        <a href="#about" className="text-lg font-bold text-gray-600 hover:text-gray-900">
          About
        </a>
        <a href="#projects" className="text-lg font-bold text-gray-600 hover:text-gray-900">
          Projects
        </a>
        <a href="#contact" className="text-lg font-bold text-gray-600 hover:text-gray-900">
          Contact
        </a>
      </nav>
      <section id="about" className="mb-8">
        <h2 className="text-3xl font-bold text-gray-600 mb-4">
          About Me
        </h2>
        <p className="text-lg text-gray-600 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.
        </p>
      </section>
      <section id="projects" className="mb-8">
        <h2 className="text-3xl font-bold text-gray-600 mb-4">
          Projects
        </h2>
        <ul className="flex flex-wrap justify-center mb-4">
          <li className="w-1/2 md:w-1/3 xl:w-1/4 p-4">
            <img src="profile" alt="Project 1" className="w-full h-48 object-cover mb-4" />
            <h3 className="text-lg font-bold text-gray-600 mb-2">
              Project 1
            </h3>
            <p className="text-lg text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.
            </p>
          </li>
          <li className="w-1/2 md:w-1/3 xl:w-1/4 p-4">
            <img src="profile.jpg" alt="Project 2" className="w-full h-48 object-cover mb-4" />
            <h3 className="text-lg font-bold text-gray-600 mb-2">
              Project 2
            </h3>
            <p className="text-lg text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.
            </p>
          </li>
        </ul>
      </section>
      <section id="contact" className="mb-8">
        <h2 className="text-3xl font-bold text-gray-600 mb-4">
          Contact
        </h2>
        <p className="text-lg text-gray-600 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.
        </p>
        <ul className="flex flex-wrap justify-center mb-4">
          <li className="w-1/2 md:w-1/3 xl:w-1/4 p-4">
            <a href="mailto:example@example.com" className="text-lg font-bold text-gray-600 hover:text-gray-900">
              Email
            </a>
          </li>
          <li className="w-1/2 md:w-1/3 xl:w-1/4 p-4">
            <a href="https://www.linkedin.com/in/example/" className="text-lg font-bold text-gray-600 hover:text-gray-900">
              LinkedIn
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Portfolio;