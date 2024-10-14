'use client'
import React, { useState } from 'react';
import { SiJavascript, SiReact, SiNodedotjs, SiCss3, SiBootstrap, SiHtml5, SiGit, SiVisualstudiocode, SiNextdotjs, SiTailwindcss, SiAdobe } from 'react-icons/si';

interface Skill {
    name: string;
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    color: string;
}

const skills = [
    { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-400' },
    { name: 'React.js', icon: SiReact, color: 'text-blue-400' },
    { name: 'Next.js', icon: SiNextdotjs, color: 'text-white' },
    { name: 'Node.js', icon: SiNodedotjs, color: 'text-green-500' },
    { name: 'CSS3', icon: SiCss3, color: 'text-blue-500' },
    { name: 'Tailwind', icon: SiTailwindcss, color: 'text-cyan-400' },
    { name: 'Bootstrap', icon: SiBootstrap, color: 'text-purple-500' },
    { name: 'HTML5', icon: SiHtml5, color: 'text-orange-500' },
    { name: 'VS Code', icon: SiVisualstudiocode, color: 'text-blue-600' },
    { name: 'Git', icon: SiGit, color: 'text-red-500' },
    { name: 'Adobe Photoshop', icon: SiAdobe, color: 'text-blue-700' },
];

const SkillIcon = ({ skill }: { skill: Skill }) => {
    return (
        <div 
            className="flex flex-col items-center justify-center p-4 transition-all duration-300 ease-in-out transform hover:scale-110 relative"
        >
            <skill.icon className={`text-4xl sm:text-5xl mb-2 ${skill.color}`} />
            <span className="text-xs sm:text-sm font-medium text-center">{skill.name}</span>
        </div>
    );
};

const Skills = () => {
    return (
        <section id="skills" className="bg-gradient-to-br from-zinc-850 via-zinc-900 to-zinc-950 text-white min-h-screen flex items-center justify-center py-16 sm:py-20">
            <div className="container mx-auto px-4 max-w-3xl sm:max-w-5xl">
                <div className="text-center mb-8 sm:mb-12">
                    <p className="text-sm mb-4 tracking-wider text-gray-400 uppercase">A problem is a chance for you to do your best.</p>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold relative inline-block group">
                        Skills & Experience
                        <span className="absolute bottom-0 left-0 w-full h-1 bg-yellow-500 transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                    </h2>
                </div>
                
                <div className="mb-10 sm:mb-12 flex flex-col items-center">
                    <div className="max-w-2xl text-center">
                        <p className="text-base sm:text-lg mb-4 sm:mb-6">
                            As a design-oriented front-end developer, I blend creativity with technical prowess to create visually stunning and highly interactive web experiences.
                        </p>
                        
                        <p className="text-sm sm:text-base mb-6 sm:mb-8">
                            My expertise lies in crafting responsive and accessible user interfaces using cutting-edge web technologies. With a strong foundation in HTML, CSS, and JavaScript, and advanced proficiency in React and Next.js, I build scalable web applications that push the boundaries of user experience.
                        </p>
                        <p>Visit my <a href="https://www.linkedin.com/in/delong-yang-a7a673296/" className="text-orange-300 hover:text-orange-400 transition-colors duration-300">Linkedin</a> for more details.</p>
                    </div>
                </div>
                
                <div className="flex flex-wrap justify-center gap-4 sm:gap-7 mb-10 sm:mb-13">
                    {skills.map((skill, index) => (
                    <div key={index} className="flex-grow-0 flex-shrink-0 basis-auto">
                        <SkillIcon skill={skill} />
                    </div>
                ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;