import React from 'react';
import { FaCode, FaPaintBrush, FaMobileAlt } from 'react-icons/fa';

const About = () => {
  const skills = [
    { name: 'Web Development', icon: FaCode, description: 'Proficient in React, Next.js, and Node.js' },
    { name: 'UI/UX Design', icon: FaPaintBrush, description: 'Creating intuitive and visually appealing interfaces' },
    { name: 'Mobile Development', icon: FaMobileAlt, description: 'Building cross-platform apps with React Native' },
  ];

  return (
    <section id='about' className="bg-gradient-to-b from-zinc-900 to-zinc-800 py-20">
      <div className="max-w-5xl mx-auto px-9 sm:px-6 lg:px-9">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            About Me
          </h2>
          <div className="mt-4 max-w-3xl mx-auto">
            <p className="text-xl text-gray-300">
              I'm a passionate developer with a keen eye for design and a love for creating seamless user experiences. With expertise in both frontend and backend technologies, I bring ideas to life through code.
            </p>
          </div>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((skill, index) => (
              <div key={index} className="bg-zinc-700 rounded-lg p-6 hover:shadow-lg transition duration-300">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white mx-auto">
                  <skill.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <div className="mt-4 text-center">
                  <h3 className="text-lg font-medium text-white">{skill.name}</h3>
                  <p className="mt-2 text-base text-gray-300">
                    {skill.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <a href="#contact" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition duration-300">
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;