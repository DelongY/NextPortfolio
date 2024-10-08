'use client'
import { useState } from 'react';
import Head from 'next/head';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend or a service like Formspree
    console.log('Form submitted:', formData);
    // Reset form after submission
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div id='contact' className="flex flex-col justify-center min-h-screen bg-zinc-900">
      <Head>
        <title>Contact Me | Your Portfolio</title>
        <meta name="description" content="Get in touch with me" />
      </Head>
      
      <div className="max-w-5xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center text-zinc-300 mb-12">Contact Me</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-800 shadow rounded-lg p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-base font-medium text-gray-300">Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-1 py-2 block w-full rounded-md bg-gray-700 border-gray-600 text-white shadow-sm"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-base font-medium text-gray-300">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1 py-2 block w-full rounded-md bg-gray-700 border-gray-600 text-white shadow-sm"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-base font-medium text-gray-300">Message</label>
                <textarea
                  name="message"
                  id="message"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white shadow-sm"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-900"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
          
          <div className="bg-gray-800 shadow rounded-lg p-6">
            <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-zinc-300 mb-6">Email</h2>
              <p className="flex items-center text-gray-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M14.243 5.757a6 6 0 10-.986 9.284 1 1 0 111.087 1.678A8 8 0 1118 10a3 3 0 01-4.8 2.401A4 4 0 1114 10a1 1 0 102 0c0-1.537-.586-3.07-1.757-4.243zM12 10a2 2 0 10-4 0 2 2 0 004 0z" clipRule="evenodd" />
                </svg>
                delongyang369@gmail.com
              </p>
              <h2 className="text-2xl font-semibold text-zinc-300 mb-6">Phone</h2>
              <p className="flex items-center text-gray-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zm3 14a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                </svg>
                +44 7787756815
              </p>
              <h2 className="text-2xl font-semibold text-zinc-300 mb-6">Address</h2>
              <p className="flex items-center text-gray-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                Billericay, Essex, united Kingdom
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}