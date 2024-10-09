'use client'

import React, { useState, useMemo } from 'react';
import { FaCode, FaBriefcase, FaGraduationCap } from 'react-icons/fa';
import SkillProgress from '../components/SkillProgress';

// Types
interface Link {
    url: string;
    label: string;
    icon: React.ComponentType<{ size: number }>;
}

interface Skill {
    name: string;
    level: number;
}

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
    details?: string;
    achievements?: string[];
}

// Components
const SocialLinks: React.FC<{ links: Link[] }> = ({ links }) => (
    <div className="flex justify-center space-x-4 mb-8">
        {links.map((link, index) => (
            <a 
                key={index} 
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-zinc-300 hover:text-blue-600 transition-colors duration-300"
            >
                <link.icon size={24} aria-label={link.label} />
            </a>
        ))}
    </div>
);

const SkillsSection: React.FC<{ skills: Skill[] }> = ({ skills }) => {
    const sortedSkills = useMemo(() => 
        [...skills].sort((a, b) => b.level - a.level), 
    [skills]);

    return (
        <div className="bg-zinc-800 rounded-lg p-6 mb-6 shadow-lg">
            <h2 className="text-2xl font-semibold text-zinc-300 mb-6 flex items-center">
                <FaCode className="mr-3 text-blue-600" aria-hidden="true" />
                Skills
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {sortedSkills.map((skill, index) => (
                    <div key={index} className="mb-1">
                        <div className="flex justify-between mb-1">
                            <span className="text-zinc-300">{skill.name}</span>
                            <span className="text-zinc-400">{skill.level}%</span>
                        </div>
                        <SkillProgress 
                            value={skill.level} 
                            className="w-full h-3" 
                            aria-label={`${skill.name} proficiency: ${skill.level}%`} 
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

const ExperienceSection: React.FC<{ experiences: Experience[] }> = ({ experiences }) => (
    <div className="bg-zinc-800 rounded-lg p-6 mb-6 shadow-lg">
        <h2 className="text-2xl font-semibold text-zinc-300 mb-6 flex items-center">
            <FaBriefcase className="mr-3 text-blue-600" aria-hidden="true" />
            Work Experience
        </h2>
        {experiences.map((exp, index) => (
            <article key={index} className="mb-6 last:mb-0 border-b border-zinc-700 pb-6 last:border-b-0">
                <h3 className="text-lg font-semibold text-zinc-300">{exp.position}</h3>
                <p className="text-zinc-400">{exp.company} | {exp.period}</p>
                <ul className="list-disc list-inside text-zinc-300 mt-2 space-y-1">
                    {exp.responsibilities.map((resp, idx) => (
                        <li key={idx}>{resp}</li>
                    ))}
                </ul>
                <div className="mt-3 flex flex-wrap gap-2">
                    {exp.technologies.map((tech, idx) => (
                        <span key={idx} className="inline-block bg-blue-600 text-zinc-200 rounded-full px-3 py-1 text-sm font-semibold">
                            {tech}
                        </span>
                    ))}
                </div>
            </article>
        ))}
    </div>
);

const EducationSection: React.FC<{ education: Education[] }> = ({ education }) => (
    <div className="bg-zinc-800 rounded-lg p-6 shadow-lg">
        <h2 className="text-2xl font-semibold text-zinc-300 mb-6 flex items-center">
            <FaGraduationCap className="mr-3 text-blue-600" aria-hidden="true" />
            Education
        </h2>
        {education.map((edu, index) => (
            <article key={index} className="mb-4 last:mb-0 border-b border-zinc-700 pb-4 last:border-b-0">
                <h3 className="text-lg font-semibold text-zinc-300">{edu.degree}</h3>
                <p className="text-zinc-400">{edu.institution} | {edu.period}</p>
                {edu.details && <p className="text-zinc-300 mt-2">{edu.details}</p>}
                {edu.achievements && (
                    <ul className="list-disc list-inside text-zinc-300 mt-2 space-y-1">
                        {edu.achievements.map((achievement, idx) => (
                            <li key={idx}>{achievement}</li>
                        ))}
                    </ul>
                )}
            </article>
        ))}
    </div>
);

// Data
const initialSkills: Skill[] = [
    { name: 'Next.Js', level: 85 },
    { name: 'React.Js', level: 80 },
    { name: 'JavaScript', level: 85 },
    { name: 'Python', level: 80 },
    { name: 'SQL', level: 75 },
    { name: 'Git', level: 90 },
    { name: 'HTML5', level: 100 },
    { name: 'CSS3', level: 100 },
    { name: 'UI Design', level: 80 },
    { name: 'Adobe Photoshop', level: 80 },
];

const initialExperiences: Experience[] = [
    {
        position: 'Freelance Developer',
        company: 'Self Employed',
        period: 'Sep 2019 - Present',
        responsibilities: [
            'Designed and developed full-stack web applications, leveraging expertise in frontend and backend technologies',
            'Applied machine learning concepts to build intelligent and data-driven solutions for clients',
            'Utilized Adobe Photoshop to create visually appealing graphics, logos, and branding materials',
            'Managed multiple projects simultaneously, prioritizing tasks and meeting deadlines to deliver high-quality results',
            'Collaborated with clients to understand their needs, provided tailored solutions, and ensured customer satisfaction',
        ],
        technologies: ['Next.Js', 'React.Js', 'Tailwind', 'Git', 'Adobe Photoshop', 'HTML5', 'CSS3', 'JavaScript']
    },
    {
        position: 'Front End Developer',
        company: 'Zebr',
        period: 'Mar 2024 - Jun 2024',
        responsibilities: [
            'Learned to work effectively in a team environment',
            'Gained experience with Git for collaborative development',
            'Acquired new skills and concepts in frontend development',
            'Worked with latest technologies, including: React.Js and Next.Js',
            'Gained an overview of a large codebase, understanding its structure and complexity'
        ],
        technologies: ['Next.Js', 'React.Js', 'Tailwind', 'Git', 'HTML5', 'CSS3', 'JavaScript']
    },
    {
        position: 'Restaurant Waiter & Bartender',
        company: 'Felix Restaurant Ltd.',
        period: 'Nov 2016 - Present',
        responsibilities: [
            'Developed strong relationships with team members through positive communication',
            'Demonstrated excellent customer service skills while working in a fast-paced environment',
            'Demonstrated strong organizational skills while managing multiple tasks',
        ],
        technologies: []
    },
];

const initialEducation: Education[] = [
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

// Main component
const Resume: React.FC = () => {
    const [skills] = useState(initialSkills);
    const [experiences] = useState(initialExperiences);
    const [education] = useState(initialEducation);

    return (
        <div id='resume' className="flex flex-col justify-center min-h-screen bg-zinc-900">
            <main className="max-w-5xl mx-auto w-full px-3 sm:px-6 lg:px-9 py-9">
                <header className="text-center mb-6">
                    <h1 className="text-3xl font-bold text-zinc-300">Resume</h1>
                </header>
                <div className="space-y-8">
                    <SkillsSection skills={skills} />
                    <ExperienceSection experiences={experiences} />
                    <EducationSection education={education} />
                </div>
            </main>
        </div>
    );
};

export default Resume;