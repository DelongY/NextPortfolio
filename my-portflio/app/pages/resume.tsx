'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaGraduationCap, FaCode, FaCertificate, FaChevronRight } from 'react-icons/fa';
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

// Modified Components
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
        className="mb-8 bg-zinc-800 bg-opacity-75 rounded-lg p-6 shadow-lg"
    >
        <h3 className="text-xl font-bold text-violet-400 mb-1">{title}</h3>
        <p className="text-gray-300 text-base mb-2 font-semibold">{subtitle}</p>
        <p className="text-gray-400 text-sm mb-3 italic">{period}</p>
        <ul className="space-y-2 mb-4">
            {details.map((detail, idx) => (
                <li key={idx} className="text-gray-300 text-sm flex items-start">
                    <span className="text-violet-400 mr-2">{'>'}</span>
                    <span>{detail}</span>
                </li>
            ))}
        </ul>
        {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-3">
                {tags.map((tag, idx) => (
                    <span key={idx} className="inline-block bg-violet-600 bg-opacity-75 text-indigo-200 rounded px-2 py-1 text-xs font-mono">
                        {tag}
                    </span>
                ))}
            </div>
        )}
    </motion.div>
);

const SectionHeader: React.FC<{ icon: IconType; title: string }> = ({ icon: Icon, title }) => (
    <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-2xl font-bold text-white mb-6 flex items-center"
    >
        <Icon className="text-violet-400 mr-3 text-3xl" aria-hidden="true" />
        <span className="border-b-2 border-violet-400 pb-1">{title}</span>
    </motion.h2>
);

// Main component
const Resume: React.FC = () => {
    return (
        <div id='resume' className="text-white min-h-screen flex items-center justify-center py-16 sm:py-20 ">
            <main className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold inline-block">
                        My Journey
                    </h2>
                </motion.div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                    <section>
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
                    </section>
                    
                    <section>
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
                    </section>
                </div>
            </main>
        </div>
    );
};

export default Resume;