'use client'
import { useState } from 'react';
import Head from 'next/head';

// Component for the contact form
const ContactForm = () => {
  // State to hold form data
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });

  // Handle changes in form inputs
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    // Update form data state
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent default form submission
    console.log('Form submitted:', formData); // Log form data
    // Reset form data after submission
    setFormData({ firstName: '', lastName: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="bg-zinc-800 shadow rounded-lg p-6">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex space-x-4">
          {/* First Name input */}
          <div className="flex-1">
            <label htmlFor="firstName" className="block text-base font-medium text-gray-300">First Name</label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="mt-1 py-2 block w-full rounded-md bg-zinc-600 text-white shadow-sm"
            />
          </div>
          {/* Last Name input */}
          <div className="flex-1">
            <label htmlFor="lastName" className="block text-base font-medium text-gray-300">Last Name</label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="mt-1 py-2 block w-full rounded-md bg-zinc-600 text-white shadow-sm"
            />
          </div>
        </div>
        {/* Email input */}
        <div>
          <label htmlFor="email" className="block text-base font-medium text-gray-300">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-1 py-2 block w-full rounded-md bg-zinc-600 text-white shadow-sm"
          />
        </div>
        {/* Phone Number input */}
        <div>
          <label htmlFor="phone" className="block text-base font-medium text-gray-300">Phone Number</label>
          <input
            type="tel"
            name="phone"
            id="phone"
            value={formData.phone}
            onChange={handleChange}
            className="mt-1 py-2 block w-full rounded-md bg-zinc-600 text-white shadow-sm"
          />
        </div>
        {/* Message input */}
        <div>
          <label htmlFor="message" className="block text-base font-medium text-gray-300">Message</label>
          <textarea
            name="message"
            id="message"
            rows="6"
            value={formData.message}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md bg-zinc-600 text-white shadow-sm"
          ></textarea>
        </div>
        {/* Submit button */}
        <div>
          <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md text-sm font-medium text-zinc-100 bg-blue-600 hover:bg-blue-900">
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

// Component for displaying additional contact information
const AdditionalInfo = () => (
  <div className="bg-zinc-800 rounded-lg p-6">
    <div className="space-y-4">
      {/* Email information section */}
      <h2 className="text-2xl font-semibold text-zinc-300 mb-6">Email</h2>
      <p className="flex items-center text-gray-300">
        {/* Email icon */}
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M14.243 5.757a6 6 0 10-.986 9.284 1 1 0 111.087 1.678A8 8 0 1118 10a3 3 0 01-4.8 2.401A4 4 0 1114 10a1 1 0 102 0c0-1.537-.586-3.07-1.757-4.243zM12 10a2 2 0 10-4 0 2 2 0 004 0z" clipRule="evenodd" />
        </svg>
        {/* Email address */}
        delongyang369@gmail.com
      </p>

      {/* Phone information section */}
      <h2 className="text-2xl font-semibold text-zinc-300 mb-6">Phone</h2>
      <p className="flex items-center text-gray-300">
        {/* Phone icon */}
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zm3 14a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
        </svg>
        {/* Phone number */}
        +44 7787756815
      </p>

      {/* Address information section */}
      <h2 className="text-2xl font-semibold text-zinc-300 mb-6">Address</h2>
      <p className="flex items-center text-gray-300">
        {/* Address icon */}
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 10-4 0 2 2 0 000 4z" clipRule="evenodd" />
        </svg>
        {/* Address details */}
        Billericay, Essex, United Kingdom
      </p>
    </div>
  </div>
);

// Main contact page component
export default function ContactPage() {
  return (
    <div id='contact' className="flex flex-col justify-center min-h-screen bg-zinc-900">
      <Head>
        {/* Metadata for the page */}
        <meta name="description" content="Get in touch with me" />
      </Head>
      
      <div className="max-w-5xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        {/* Page title */}
        <h1 className="text-4xl font-bold text-center text-zinc-300 mb-12">Get in touch</h1>
        
        {/* Grid layout for additional info and contact form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-9">
          {/* Additional contact information component */}
          <AdditionalInfo />
          {/* Contact form component */}
          <ContactForm />
        </div>
      </div>
    </div>
  );
}