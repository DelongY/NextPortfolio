'use client'
import React, { useState } from 'react';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        surname: '',
        email: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        setFormData({ firstName: '', surname: '', email: '', message: '' });
    };

    const RequiredMark = () => (
        <span className="text-red-500 ml-1">*</span>
    );

    return (
        <section id="contact" className="bg-gradient-to-br from-zinc-850 via-zinc-900 to-zinc-950 text-white min-h-screen flex items-center justify-center py-16 sm:py-20">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="text-center mb-12">
                    <p className="text-sm mb-4 tracking-wider text-gray-400 uppercase">Let's create something amazing together</p>
                    <h2 className="text-4xl sm:text-5xl font-bold relative inline-block group">
                        Get In Touch
                        <span className="absolute bottom-0 left-0 w-full h-1 bg-yellow-500 transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                    </h2>
                </div>

                <div className="flex flex-col md:flex-row gap-8">
                    <div className="md:w-1/2">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="flex gap-4">
                                <div className="flex-1">
                                    <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                                        First Name<RequiredMark />
                                    </label>
                                    <input
                                        type="text"
                                        id="firstName"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                    />
                                </div>
                                <div className="flex-1">
                                    <label htmlFor="surname" className="block text-sm font-medium mb-2">
                                        Surname<RequiredMark />
                                    </label>
                                    <input
                                        type="text"
                                        id="surname"
                                        name="surname"
                                        value={formData.surname}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium mb-2">
                                    Email<RequiredMark />
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium mb-2">
                                    Message<RequiredMark />
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={4}
                                    placeholder="Type your message here..."
                                    className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-red-500 text-zinc-900 font-bold py-2 px-4 rounded-md hover:bg-red-600 transition duration-300"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                    <div className="md:w-1/2 flex flex-col justify-center max-h-96">
                        <div className="space-y-6">
                            <p className="text-lg">
                                I'm always open to new opportunities and exciting projects. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                            </p>
                            <div className="flex items-center space-x-4">
                                <FaEnvelope className="text-2xl text-white" />
                                <a href="mailto:your.email@example.com" className="hover:text-yellow-500 transition duration-300">delongyang369@gmail.com</a>
                            </div>
                            <div className="flex items-center space-x-4">
                                <FaLinkedin className="text-2xl text-white" />
                                <a href="https://www.linkedin.com/in/delong-yang-a7a673296/" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500 transition duration-300">LinkedIn</a>
                            </div>
                            <div className="flex items-center space-x-4">
                                <FaGithub className="text-2xl text-white" />
                                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500 transition duration-300">GitHub</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;