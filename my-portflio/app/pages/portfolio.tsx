'use client'

import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { FaGithub, FaExternalLinkAlt, FaInfoCircle } from 'react-icons/fa';

// Types and Constants
type ProjectCategory = 'frontend' | 'backend' | 'fullstack';

interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  imageUrl: string;
  githubUrl: string;
  liveUrl: string;
  category: ProjectCategory;
}

const CATEGORIES = {
  ALL: 'all',
  FRONTEND: 'frontend',
  BACKEND: 'backend',
  FULLSTACK: 'fullstack',
} as const;

const CATEGORY_CONFIG = [
  { value: CATEGORIES.ALL, label: 'All Projects' },
  { value: CATEGORIES.FRONTEND, label: 'Frontend' },
  { value: CATEGORIES.BACKEND, label: 'Backend' },
  { value: CATEGORIES.FULLSTACK, label: 'Full Stack' },
] as const;

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

// Components
interface ProjectCardProps {
  project: Project;
  onDetailsClick: (project: Project) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onDetailsClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      {...fadeInUp}
      transition={{ duration: 0.5 }}
      className="group bg-zinc-800/90 rounded-xl overflow-hidden shadow-lg border border-zinc-700/50 hover:border-violet-500/30 transition-all duration-300 w-full max-w-sm"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-56 overflow-hidden">
        <Image
          src={project.imageUrl}
          alt={project.title}
          fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className={`object-cover transition-transform duration-500 ${
            isHovered ? 'scale-110' : 'scale-100'
          }`}
          priority
        />
        <div 
          className={`
            absolute inset-0 bg-black/60 
            flex items-center justify-center gap-6 
            transition-all duration-300
            ${isHovered ? 'opacity-100' : 'opacity-0'}
          `}
        >
          <ProjectLink href={project.githubUrl} icon={<FaGithub size={24} />} label="GitHub" />
          <ProjectLink href={project.liveUrl} icon={<FaExternalLinkAlt size={20} />} label="Live Demo" />
          <button
            onClick={() => onDetailsClick(project)}
            className="p-3 rounded-full bg-violet-600/20 text-white hover:bg-violet-600/40 hover:scale-110 transition-all duration-300"
            aria-label="View project details"
          >
            <FaInfoCircle size={20} />
          </button>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-violet-400 group-hover:text-violet-300 transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-300 mb-4 line-clamp-2">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <TechnologyBadge key={tech} tech={tech} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

interface ProjectLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

const ProjectLink: React.FC<ProjectLinkProps> = ({ href, icon, label }) => (
  <Link
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="p-3 rounded-full bg-violet-600/20 text-white hover:bg-violet-600/40 hover:scale-110 transition-all duration-300"
    aria-label={label}
  >
    {icon}
  </Link>
);

const TechnologyBadge: React.FC<{ tech: string }> = ({ tech }) => (
  <span className="px-3 py-1 bg-violet-600/20 text-violet-300 rounded-full text-sm font-medium">
    {tech}
  </span>
);

interface ProjectModalProps {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          className="bg-zinc-800 rounded-xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          onClick={e => e.stopPropagation()}
        >
          <div className="relative h-64 mb-6 rounded-lg overflow-hidden">
            <Image
              src={project.imageUrl}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
          </div>
          <h3 className="text-2xl font-bold mb-4 text-violet-400">{project.title}</h3>
          <p className="text-gray-300 mb-6">{project.longDescription}</p>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((tech) => (
              <TechnologyBadge key={tech} tech={tech} />
            ))}
          </div>
          <div className="flex gap-4">
            <ProjectLink href={project.githubUrl} icon={<FaGithub />} label="View on GitHub" />
            <ProjectLink href={project.liveUrl} icon={<FaExternalLinkAlt />} label="View Live Demo" />
          </div>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

const Projects: Project[] = [
  {
    id: 'next-portfolio',
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
    longDescription: 'This project recreates a website for a friend\'s personal training business to improve its user experience and showcase the trainer\'s expertise. Used Next.js for performance and TailwindCSS for efficient styling.',
    technologies: ['Next.js', 'React', 'Typescript', 'TailwindCSS', 'Framer Motion'],
    imageUrl: '/assets/oneAndOnlyOnePersonalTraining.jpg',
    githubUrl: 'https://github.com/DelongY/OneAndOnlyPersonalTraining',
    liveUrl: 'https://one-and-only-personal-training.vercel.app/',
    category: 'frontend',
  },

];

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState<typeof CATEGORIES.ALL | ProjectCategory>(CATEGORIES.ALL);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = Projects.filter(project =>
    filter === CATEGORIES.ALL ? true : project.category === filter
  );

  const handleProjectClick = useCallback((project: Project) => {
    setSelectedProject(project);
  }, []);

  return (
<section id="portfolio" className="relative text-white flex items-center justify-center min-h-screen py-12 sm:py-16 md:py-20">
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(120,88,166,0.08)_0%,_transparent_70%)]" />
  
  <div className="container mx-auto px-4 max-w-6xl relative">
    <motion.div 
      className="text-center mb-16"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <p className="text-sm tracking-wider uppercase font-medium mb-4">
        Showcasing my recent work
      </p>
      <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold inline-block">
        Portfolio
      </h2>
    </motion.div>

        <div className="flex justify-center mb-8 sm:mb-12 w-full">
          <div className="inline-flex flex-nowrap gap-2 sm:gap-3 bg-zinc-800/50 p-1.5 sm:p-2 rounded-xl border border-zinc-700/50">
            {CATEGORY_CONFIG.map(({ value, label }) => (
              <button
                key={value}
                onClick={() => setFilter(value)}
                className={`
                  whitespace-nowrap px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 
                  text-xs sm:text-sm md:text-base rounded-lg transition-all duration-300
                  ${filter === value
                    ? 'bg-violet-600 text-white shadow-lg'
                    : 'text-gray-400 hover:text-white hover:bg-zinc-700/50'
                  }
                `}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        <div className="w-full">
          <div className="flex flex-wrap justify-center gap-6 sm:gap-6 md:gap-8">
            <AnimatePresence mode="wait">
              {filteredProjects.map((project) => (
                <div key={project.id}>
                  <ProjectCard
                    project={project}
                    onDetailsClick={handleProjectClick}
                  />
                </div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {filteredProjects.length === 0 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center text-gray-400 py-12">
            No projects found in this category.
          </motion.div>
        )}

        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            isOpen={!!selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </div>
    </section>
  );
};

export default Portfolio;