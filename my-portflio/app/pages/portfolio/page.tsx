import React from 'react';
import Image from 'next/image';
import profile from './profile.jpg';

// Define an interface for project props
interface ProjectProps {
  title: string;
  description: string;
}

// Define a Project component
const Project: React.FC<ProjectProps> = ({ title, description }) => (
  <div className="bg-white shadow-md rounded-lg p-4">
    <h3 className="text-2xl font-bold mb-2">{title}</h3>
    <p className="text-gray-700">{description}</p>
  </div>
);

// Define the main Portfolio component
const Portfolio: React.FC = () => {
  // Define project data with meaningful descriptions
  const projects: ProjectProps[] = [
    {
      title: 'Project 1',
      description: 'A web application designed to streamline task management for teams.',
    },
    {
      title: 'Project 2',
      description: 'An innovative platform for real-time collaboration and communication.',
    },
    {
      title: 'Project 3',
      description: 'A mobile app that helps users track their fitness goals and progress.',
    },
    {
      title: 'Project 4',
      description: 'An e-commerce site with a focus on user experience and seamless transactions.',
    },
    {
      title: 'Project 5',
      description: 'A data visualization tool that turns complex data into actionable insights.',
    },
    {
      title: 'Project 6',
      description: 'A social media app that connects people with similar interests.',
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Title */}
      <title>My Portfolio</title>

      <main className="flex-grow container mx-auto px-4 py-8">
        {/* Intro Section */}
        <section id="about" className="text-center mb-12">
          <h2 className="text-4xl font-bold mt-24">My Portfolio</h2>
          <p className="mt-3 text-gray-700">
            I am a passionate web developer with experience in building web applications using modern technologies.
          </p>
        </section>

        {/* Projects Section */}
        <section id="projects" className="mb-12">
          <h2 className="text-4xl font-bold text-center mb-8">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Project key={index} title={project.title} description={project.description} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Portfolio;