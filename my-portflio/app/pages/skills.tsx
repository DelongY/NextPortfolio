'use client'
import React, { useState } from 'react';
import { SiJavascript, SiReact, SiVuedotjs, SiNodedotjs, SiWordpress, SiPhp, SiSass, SiCss3, SiBootstrap, SiHtml5, SiGit, SiVisualstudiocode, SiNextdotjs, SiTailwindcss, SiFigma } from 'react-icons/si';
import { TbBrandSupabase } from 'react-icons/tb';

const skills = [
    { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-400' },
    { name: 'React.js', icon: SiReact, color: 'text-blue-400' },
    { name: 'Next.js', icon: SiNextdotjs, color: 'text-white' },
    { name: 'Node.js', icon: SiNodedotjs, color: 'text-green-500' },
    { name: 'CSS3', icon: SiCss3, color: 'text-blue-500' },
    { name: 'Tailwind', icon: SiTailwindcss, color: 'text-cyan-400' },
    { name: 'Bootstrap', icon: SiBootstrap, color: 'text-purple-500' },
    { name: 'HTML5', icon: SiHtml5, color: 'text-orange-500' },
    { name: 'Git', icon: SiGit, color: 'text-red-500' },
    { name: 'VS Code', icon: SiVisualstudiocode, color: 'text-blue-600' },
];

const SkillIcon = ({ skill }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div 
            className="flex flex-col items-center justify-center p-4 transition-all duration-300 ease-in-out transform hover:scale-110"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <skill.icon className={`text-5xl mb-2 ${skill.color}`} />
            <span className="text-sm font-medium text-center">{skill.name}</span>
            {isHovered && (
                <div className="absolute top-full mt-2 bg-gray-800 text-white text-xs rounded-md py-1 px-2 opacity-100 transition-opacity duration-300">
                    {skill.name}
                </div>
            )}
        </div>
    );
};

const Skills = () => {
    return (
        <section id="skills" className="bg-gradient-to-b from-zinc-950 to-zinc-900 text-white min-h-screen py-16 sm:py-20">
            <div className="container mx-auto px-4">
                <p className="text-sm mb-4 tracking-wider text-gray-400 uppercase text-center">Crafting Digital Experiences</p>
                
                <div className="text-center">
                    <h2 className="text-4xl sm:text-5xl font-bold mb-8 sm:mb-12 relative inline-block group">
                        Skills & Expertise
                        <span className="absolute bottom-0 left-0 w-full h-1 bg-yellow-500 transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                    </h2>
                </div>
                
                <div className="max-w-3xl mx-auto mb-10 sm:mb-12 text-center">
                    <p className="text-base sm:text-lg mb-4 sm:mb-6">
                        As a design-oriented front-end developer, I blend creativity with technical prowess to create visually stunning and highly interactive web experiences.
                    </p>
                    
                    <p className="text-sm sm:text-base mb-6 sm:mb-8">
                        My expertise lies in crafting responsive and accessible user interfaces using cutting-edge web technologies. With a strong foundation in HTML, CSS, and JavaScript, and advanced proficiency in React and Next.js, I build scalable web applications that push the boundaries of user experience.
                    </p>
                </div>
                
                <div className="flex flex-wrap justify-center items-start gap-6 sm:gap-8 mb-10 sm:mb-12">
                    {skills.map((skill, index) => (
                        <SkillIcon key={index} skill={skill} />
                    ))}
                </div>
                
                <div className="text-center">
                    <a 
                        href="https://www.linkedin.com/in/yourprofile" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="inline-block bg-yellow-500 text-black font-semibold py-2 sm:py-3 px-6 sm:px-8 rounded-full hover:bg-yellow-400 transition duration-300 transform hover:scale-105 hover:shadow-lg text-sm sm:text-base"
                    >
                        View My LinkedIn Profile
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Skills;