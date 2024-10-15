'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaGraduationCap, FaCode, FaCertificate } from 'react-icons/fa';
import { IconType } from 'react-icons';

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
        position: 'Bartender & Waiter',
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
        achievements: ['Graduated with Merit']
    },
    {
        degree: 'BSc Computer Science with Artificial Intelligence (Honors)',
        institution: 'University of Brighton',
        period: 'Sep 2019 - Sep 2022',
        achievements: ['Graduated with 2.1 (Honors)']
    },
    {
        degree: 'BTEC Level 3 Extended Diploma Software Development',
        institution: 'University of Brighton',
        period: 'Sep 2016 - Jul 2019',
        achievements: ['Graduated with D* D* D*']
    }
];

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
        className="mb-8 relative pl-8 last:mb-0 border-l-2 border-violet-500"
    >
        <div className="absolute left-0 top-0 -ml-2.5 w-5 h-5 bg-violet-500 rounded-full shadow-lg flex items-center justify-center">
            <div className="w-3 h-3 bg-white rounded-full"></div>
        </div>
        <h3 className="text-2xl font-bold text-violet-400 mb-1">{title}</h3>
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
                    <span key={idx} className="inline-block bg-violet-600 text-indigo-200 rounded-full px-3 py-1 text-xs font-semibold transition-all duration-300 hover:bg-violet-700">
                        {tag}
                    </span>
                ))}
            </div>
        )}
    </motion.div>
);

const SectionHeader: React.FC<{ icon: IconType; title: string }> = ({ icon: Icon, title }) => (
    <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
        <div className="bg-violet-500 p-3 rounded-full mr-4">
            <Icon className="text-white" aria-hidden="true" />
        </div>
        {title}
    </h2>
);

// Main component
const Resume: React.FC = () => {
    return (
        <div id='resume' className="bg-gradient-to-br from-zinc-850 via-zinc-900 to-zinc-950 text-white min-h-screen flex items-center justify-center py-16 sm:py-20">
            <main className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold relative inline-block">
                        My Journey
                    </h2>
                </motion.div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <motion.section 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="bg-zinc-800 rounded-lg p-8 shadow-2xl"
                    >
                        <SectionHeader icon={FaBriefcase} title="Work Experience" />
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
                    </motion.section>
                    
                    <motion.section 
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.3}}
                        className="bg-zinc-800 rounded-lg p-8 shadow-2xl"
                    >
                        <SectionHeader icon={FaGraduationCap} title="Education" />
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
                    </motion.section>
                </div>
            </main>
        </div>
    );
};

export default Resume;