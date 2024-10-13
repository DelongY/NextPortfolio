'use client'
import React from 'react';
import Image from 'next/image';
import profile from '../assets/profile.jpg'

const AboutMe = () => {
    return (
        <section id="about" className="bg-gradient-to-br from-zinc-850 via-zinc-900 to-zinc-950 text-white min-h-screen flex items-center justify-center py-16 sm:py-20">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="flex flex-col md:flex-row items-center md:items-start justify-between">
                    <div className="md:w-2/5 mb-8 md:mb-0">
                        <div className="relative">
                            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden">
                                <Image src={profile} alt="Delong Yang" className="w-full h-full object-cover"/>
                            </div>
                        </div>
                    </div>
                    
                    <div className="md:w-3/5 md:pl-12">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 relative inline-block">
                        Hi, I'm Delong
                        </h2>
                        
                        <div className="space-y-4 mb-8">
                            <p className="text-lg">
                                A passionate front-end developer with a flair for creating captivating digital experiences.
                            </p>
                            <p className="text-base">
                            Problem solver, well-organised person, loyal employee with high attention to detail. Fan of Music, outdoor activities, video games, and coding of course...
                            </p>
                            <p className="text-base">
                            Interested in the entire frontend spectrum and working on ambitious projects with interesting people.
                            </p>
                        </div>
                        <div className="text-center sm:text-left">
                            <a 
                                href="#contact" 
                                className="inline-block bg-yellow-500 text-black font-semibold py-3 px-8 rounded-full hover:bg-yellow-400 transition duration-300 transform hover:scale-105 hover:shadow-lg text-base"
                            >
                                Let's Connect
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;