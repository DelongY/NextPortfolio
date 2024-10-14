'use client'
import React from 'react';
import { FaBriefcase, FaGraduationCap, FaDownload } from 'react-icons/fa';
import { motion } from 'framer-motion';

// Types
interface Experience {
    position: string;
    company: string;
    period: string;
    responsibilities: string[];
    technologies: string[];
}

interface Education {
    degree: string;
    institution: string;
    period: string;
    achievements?: string[];
}

// Components
const TimelineItem: React.FC<{ 
    title: string; 
    subtitle: string; 
    period: string; 
    details: string[]; 
    tags?: string[];
    index: number;
}> = ({ title, subtitle, period, details, tags, index }) => (
    <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="mb-12 relative pl-8 last:mb-0 border-l-2 border-indigo-500"
    >
        <div className="absolute left-0 top-0 -ml-3.5 w-7 h-7 bg-indigo-500 rounded-full shadow-lg" />
        <h3 className="text-2xl font-bold text-indigo-300 mb-1">{title}</h3>
        <p className="text-gray-200 text-lg mb-2 font-semibold">{subtitle}</p>
        <p className="text-gray-400 text-sm mb-3 italic">{period}</p>
        <ul className="space-y-2 mb-4">
            {details.map((detail, idx) => (
                <li key={idx} className="text-gray-300 text-sm flex items-start">
                    <span className="mr-2 mt-1 text-indigo-400">•</span>
                    {detail}
                </li>
            ))}
        </ul>
        {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-3">
                {tags.map((tag, idx) => (
                    <span key={idx} className="inline-block bg-indigo-900 text-indigo-200 rounded-full px-3 py-1 text-xs font-semibold transition-all duration-300 hover:bg-indigo-800">
                        {tag}
                    </span>
                ))}
            </div>
        )}
    </motion.div>
);

// Data
const experiences: Experience[] = [
    {
        position: 'Freelance Developer',
        company: 'Self Employed',
        period: 'Sep 2019 - Present',
        responsibilities: [
            'Designed and developed full-stack web applications for various clients',
            'Implemented machine learning algorithms for data-driven solutions',
            'Created visually appealing graphics and branding materials using Adobe Photoshop',
            'Managed multiple projects simultaneously, ensuring timely delivery and client satisfaction',
            'Collaborated closely with clients to understand requirements and provide tailored solutions',
        ],
        technologies: ['Next.js', 'React', 'Tailwind CSS', 'Git', 'Adobe Photoshop', 'HTML5', 'CSS3', 'JavaScript']
    },
    {
        position: 'Front End Developer',
        company: 'Zebr',
        period: 'Mar 2024 - Jun 2024',
        responsibilities: [
            'Collaborated effectively in an Agile team environment',
            'Utilized Git for version control and collaborative development',
            'Developed and maintained responsive user interfaces using React and Next.js',
            'Implemented pixel-perfect designs using Tailwind CSS',
            'Gained valuable experience working with large-scale codebases',
        ],
        technologies: ['Next.js', 'React', 'Tailwind CSS', 'Git', 'HTML5', 'CSS3', 'JavaScript']
    },
    {
        position: 'Restaurant Waiter & Bartender',
        company: 'Felix Restaurant Ltd.',
        period: 'Nov 2016 - Present',
        responsibilities: [
            'Developed strong interpersonal skills through customer interactions',
            'Demonstrated excellent multitasking abilities in a fast-paced environment',
            'Collaborated effectively with team members to ensure smooth service operations',
            'Maintained a high level of customer satisfaction through attentive service',
        ],
        technologies: []
    },
];

const education: Education[] = [
    {
        degree: 'MSc Advanced Computer Science',
        institution: 'University of Sussex',
        period: 'Sep 2022 - Sep 2023',
        achievements: ['Graduated with Merit', 'Specialized in AI and Machine Learning']
    },
    {
        degree: 'BSc Computer Science with Artificial Intelligence (Honors)',
        institution: 'University of Brighton',
        period: 'Sep 2019 - Sep 2022',
        achievements: ['Graduated with 2.1 (Honors)', 'Completed a dissertation on Neural Networks']
    },
    {
        degree: 'BTEC Level 3 Extended Diploma Software Development',
        institution: 'University of Brighton',
        period: 'Sep 2016 - Jul 2019',
        achievements: ['Graduated with D* D* D*', 'Received award for Outstanding Academic Achievement']
    }
];

// Main component
const Resume: React.FC = () => {
    return (
        <div id='resume' className="bg-gradient-to-br from-zinc-850 via-zinc-900 to-zinc-950 text-white min-h-screen flex items-center justify-center py-16 sm:py-20">
            <main className="max-w-5xl mx-auto w-full px-4 sm:px-6 lg:px-8">
                <motion.header 
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-6xl md:text-7xl font-extrabold mb-4 relative inline-block bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
                        Resume
                        <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                    </h2>
                    <p className="text-gray-300 text-xl font-light mb-8">A journey through my professional experiences and education</p>
                    <motion.a 
                        href="/path-to-your-cv.pdf" 
                        download
                        className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-300 ease-in-out"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <FaDownload className="mr-2" />
                        Download CV
                    </motion.a>
                </motion.header>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <section className="bg-zinc-900 rounded-lg p-8 shadow-2xl">
                        <h2 className="text-3xl font-bold text-white mb-8 flex items-center border-b-2 border-indigo-500 pb-4">
                            <FaBriefcase className="mr-3 text-indigo-400" aria-hidden="true" />
                            Work Experience
                        </h2>
                        {experiences.map((exp, index) => (
                            <TimelineItem
                                key={index}
                                title={exp.position}
                                subtitle={exp.company}
                                period={exp.period}
                                details={exp.responsibilities}
                                tags={exp.technologies}
                                index={index}
                            />
                        ))}
                    </section>
                    
                    <section className="bg-zinc-900 rounded-lg p-8 shadow-2xl">
                        <h2 className="text-3xl font-bold text-white mb-8 flex items-center border-b-2 border-indigo-500 pb-4">
                            <FaGraduationCap className="mr-3 text-indigo-400" aria-hidden="true" />
                            Education
                        </h2>
                        {education.map((edu, index) => (
                            <TimelineItem
                                key={index}
                                title={edu.degree}
                                subtitle={edu.institution}
                                period={edu.period}
                                details={edu.achievements || []}
                                index={index}
                            />
                        ))}
                    </section>
                </div>
            </main>
        </div>
    );
};

export default Resume;