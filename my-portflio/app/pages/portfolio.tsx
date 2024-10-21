'use client'
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from   
 'next/image';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

// Types
interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  imageUrl: string;
  githubUrl: string;
  liveUrl: string;
  category: 'frontend' | 'backend' | 'fullstack';
}

// Sample projects data (you can replace this with data fetched from `client`)
const sampleProjects: Project[] = [
  {
    id: 'portfolio-website',
    title: 'Next Portfolio',
    description: 'A modern, responsive portfolio website built with Next.js and TailwindCSS.',
    longDescription: 'This portfolio website showcases my work and skills as a frontend developer. Built with Next.js for optimal performance and TailwindCSS for styling, it features smooth animations, responsive design, and interactive elements.',
    technologies: ['Next.js', 'React', 'Typescript', 'TailwindCSS', 'Framer Motion'],
    imageUrl: '/assets/homePageProfilePicture.jpg',
    githubUrl: 'https://github.com/yourusername/portfolio',
    liveUrl: 'https://next-portfolio-rose-eta.vercel.app/',
    category: 'fullstack',
  },

  {
    id: 'one-and-only-personal-training',
    title: 'One And Only Personal Training',
    description: 'A recreated website for a friend\'s personal training business, built with Next.js and TailwindCSS.',
    longDescription: 'This project involved redesigning and rebuilding a personal training business website to improve its user experience and showcase the trainer\'s expertise. I used Next.js for performance and TailwindCSS for efficient styling.',
    technologies: ['Next.js', 'React', 'TailwindCSS'],
    imageUrl: '/assets/oneAndOnlyOnePersonalTraining.jpg',
    githubUrl: 'https://github.com/DelongY/OneAndOnlyPersonalTraining',
    liveUrl: 'https://one-and-only-personal-training.vercel.app/',
    category: 'frontend'
  }
  // Add more projects here
];
// Function to apply hover styles
const applyHoverStyles = (isProjectHovered: boolean) => (
  isProjectHovered ? 'scale-110' : 'scale-100'
);

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const [isProjectHovered, setIsProjectHovered] = useState(false);

  const handleMouseEnter = () => setIsProjectHovered(true);
  const handleMouseLeave = () => setIsProjectHovered(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-zinc-800 rounded-lg overflow-hidden shadow-lg"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          src={project.imageUrl}
          alt={project.title}
          layout="fill"
          objectFit="cover"
          className={`transition-transform duration-500 ${applyHoverStyles(isProjectHovered)}`}
        />
        <div className={`absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ${isProjectHovered ? 'opacity-100' : 'opacity-0'} flex items-center justify-center gap-4`}>
          <Link
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-violet-400 transition-colors duration-300"
          >
            <FaGithub className="text-2xl" />
          </Link>
          <Link
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-violet-400 transition-colors duration-300"
          >
            <FaExternalLinkAlt className="text-2xl" />
          </Link>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-violet-400">{project.title}</h3>
        <p className="text-gray-300 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-violet-600 bg-opacity-25 text-violet-300 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Portfolio: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>(sampleProjects); // Use fetched data if available
  const [filter, setFilter] = useState<'all' | 'frontend' | 'backend' | 'fullstack'>('all');

  const filteredProjects = projects.filter(project =>
    filter === 'all' ? true : project.category === filter
  );

  return (
    <section id="portfolio" className="bg-gradient-to-br from-zinc-850 via-zinc-900 to-zinc-950 text-white min-h-screen flex items-center justify-center py-16 sm:py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <p className="text-sm mb-4 tracking-wider text-zinc-400 uppercase">
            Showcasing my recent work
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold mb-8">
            Portfolio
          </h2>
        </div>

        <div className="flex justify-center mb-8">
          <div className="flex gap-4 bg-zinc-800 p-2 rounded-lg">
            {['all', 'frontend', 'backend', 'fullstack'].map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category as typeof filter)}
                className={`px-4 py-2 rounded-md transition-colors duration-300 ${
                  filter === category
                    ? 'bg-violet-600 text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center text-gray-400 py-12">
            No projects found in this category.
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;