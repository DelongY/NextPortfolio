'use client'

import React from 'react';
import { useState, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import { SiJavascript, SiReact, SiNodedotjs, SiCss3, SiBootstrap, SiHtml5, SiGit, SiVisualstudiocode, SiNextdotjs, SiTailwindcss, SiAdobe, SiPython, SiTensorflow } from 'react-icons/si';
import Link from 'next/link';

interface Skill {
    name: string;
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    color: string;
}

const skills: Skill[] = [
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
    { name: 'Python', icon: SiPython, color: 'text-yellow-300' },
    { name: 'Tensorflow', icon: SiTensorflow, color: 'text-orange-400' },
    { name: 'Adobe Photoshop', icon: SiAdobe, color: 'text-blue-700' },
];

const SkillIcon = ({ skill }: { skill: Skill }) => {
    const [pos, setPos] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const iconRef = useRef<HTMLDivElement>(null);
    const requestRef = useRef<number | null>(null);

    // Custom throttle using requestAnimationFrame
    const handleMouseMove = useCallback((e: React.MouseEvent) => {
        if (requestRef.current === null) {
            requestRef.current = requestAnimationFrame(() => {
                if (iconRef.current) {
                    const rect = iconRef.current.getBoundingClientRect();
                    const x = e.clientX - (rect.left + rect.width / 2);
                    const y = e.clientY - (rect.top + rect.height / 2);
                    setPos({ x, y });
                }
                requestRef.current = null; // Reset after processing
            });
        }
    }, []);

    const handleMouseEnter = useCallback(() => setIsHovering(true), []);
    const handleMouseLeave = useCallback(() => {
        setIsHovering(false);
        setPos({ x: 0, y: 0 });
    }, []);

    return (
        <motion.div
            className="flex flex-col items-center justify-center p-4 relative"
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            ref={iconRef}
            style={{
                transform: `translate3d(${isHovering ? pos.x * 0.3 : 0}px, ${isHovering ? pos.y * 0.3 : 0}px, 0)`,
                transition: 'transform 0.1s ease-out',
            }}
        >
            <motion.div
                className={`text-4xl sm:text-5xl mb-2 ${skill.color}`}
                whileHover={{ scale: 1.1, rotate: 10 }}
                transition={{
                    type: "spring",
                    stiffness: 150, // Lowered stiffness for smoother effect
                    damping: 6,     // Increased damping to prevent too much bounciness
                }}
            >
                <skill.icon />
            </motion.div>
            <p className="text-sm sm:text-base mt-2">{skill.name}</p>
        </motion.div>
    );
};

const Skills = () => {
    return (
        <section id="skills" className="bg-gradient-to-br from-zinc-850 via-zinc-900 to-zinc-950 text-white min-h-screen flex items-center justify-center py-16 sm:py-20">
            <div className="container mx-auto px-3 max-w-3xl sm:max-w-5xl">
                <div className="text-center mb-8 sm:mb-12">
                    <p className="text-sm mb-4 tracking-wider text-zinc-400 uppercase">A problem is a chance for you to do your best.</p>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold relative inline-block group">
                        Skills & Experience
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
                        <p>Visit my <Link href="https://www.linkedin.com/in/delong-yang-a7a673296/" className="text-violet-400 hover:text-violet-500 transition-colors duration-300">Linkedin</Link> for more details.</p>
                    </div>
                </div>
                
                <motion.div 
                    className="flex flex-wrap justify-center gap-4 sm:gap-7 mb-10 sm:mb-13"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, staggerChildren: 0.1 }}
                >
                    {skills.map((skill, index) => (
                        <motion.div 
                            key={index} 
                            className="flex-grow-0 flex-shrink-0 basis-auto"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <SkillIcon skill={skill} />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;