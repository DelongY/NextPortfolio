'use client'
import React from 'react';
import Image from 'next/image';
import profile from '@/public/assets/profile.jpg'

export default function About() {
    return (
        <section id="about" className="bg-gradient-to-br from-zinc-850 via-zinc-900 to-zinc-950 text-white min-h-screen flex items-center justify-center py-16 sm:py-20">
            <div className="container mx-auto px-6 max-w-6xl flex flex-col md:flex-row items-center md:items-start justify-between">
                <div className="lg:w-2/5 mb-12 lg:mb-0">
                    <div className="relative w-80 h-80 md:w-96 md:h-96 mb-8">
                        <div className="absolute inset-0" style={{
                            clipPath: 'circle(50%)',
                            overflow: 'hidden'
                        }}>
                            <Image src={profile} alt="Delong Yang" layout="fill" objectFit="cover" className="transition-transform duration-300 hover:scale-110" />
                        </div>
                    </div>
                </div>

                <div className="md:w-3/5 md:pl-12">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 relative inline-block">
                        Hi, I'm Delong
                    </h2>

                    <div className="space-y-6 mb-8 text-lg text-justify">
                        <p className="leading-relaxed">
                            A passionate front-end developer with a flair for creating captivating digital experiences. I transform ideas into interactive realities, blending creativity with technical expertise.
                        </p>
                        <p className="leading-relaxed">
                            As a problem solver with a keen eye for detail, I thrive on challenges and continuously push the boundaries of what's possible in web development. When I'm not coding, you'll find me exploring the outdoors, immersed in music, or conquering virtual worlds in video games.
                        </p>
                        <p className="leading-relaxed">
                            I'm always excited to collaborate on ambitious projects and connect with like-minded individuals who share my passion for innovation in the ever-evolving frontend landscape.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};