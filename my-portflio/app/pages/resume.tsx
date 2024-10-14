'use client'
import React from 'react';
import { FaBriefcase, FaGraduationCap, FaCode, FaCircle } from 'react-icons/fa';
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
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="mb-12 relative pl-8 last:mb-0"
    >
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-500 to-purple-500 rounded-full" />
        <div className="absolute left-0 top-2 -ml-2.5 w-5 h-5 bg-white rounded-full border-4 border-indigo-500" />
        <h3 className="text-2xl font-bold text-indigo-300 mb-1">{title}</h3>
        <p className="text-gray-200 text-lg mb-2 font-semibold">{subtitle}</p>
        <p className="text-gray-400 text-sm mb-3 italic">{period}</p>
        <ul className="space-y-2 mb-4">
            {details.map((detail, idx) => (
                <li key={idx} className="text-gray-300 text-sm flex items-start">
                    <span className="mr-2 mt-1 text-purple-400">•</span>
                    {detail}
                </li>
            ))}
        </ul>
        {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-3">
                {tags.map((tag, idx) => (
                    <span key={idx} className="inline-block bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full px-3 py-1 text-xs font-semibold transition-all duration-300 hover:from-indigo-500 hover:to-purple-500 hover:shadow-lg">
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
        <div id='resume' className="flex flex-col justify-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20">
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
                    <p className="text-gray-300 text-xl font-light">A journey through my professional experiences and education</p>
                </motion.header>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    <section>
                        <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
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
                    
                    <section>
                        <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
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
                
                <motion.section 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="mt-16"
                >
                    <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
                        <FaCode className="mr-3 text-indigo-400" aria-hidden="true" />
                        Skills
                    </h2>
                    <div className="flex flex-wrap gap-3">
                        {['JavaScript', 'React', 'Next.js', 'HTML5', 'CSS3', 'Tailwind CSS', 'Git', 'Node.js', 'Adobe Photoshop', 'Python', 'Machine Learning'].map((skill, index) => (
                            <motion.span 
                                key={index} 
                                className="inline-block bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300 hover:from-indigo-500 hover:to-purple-500 hover:shadow-lg cursor-default"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {skill}
                            </motion.span>
                        ))}
                    </div>
                </motion.section>
            </main>
        </div>
    );
};

export default Resume;