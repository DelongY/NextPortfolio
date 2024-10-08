'use client'
import { useState } from 'react';
import Head from 'next/head';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';


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
            <label htmlFor="firstName" className="block text-base font-medium text-gray-300">
              First Name <span className="text-red-600 font-light">*</span>
            </label>
            <input type="text" name="firstName" id="firstName" value={formData.firstName} onChange={handleChange} required
              className="mt-1 px-2 py-2 block w-full rounded-md bg-zinc-600 text-white shadow-sm"/>
          </div>
          {/* Last Name input */}
          <div className="flex-1">
            <label htmlFor="lastName" className="block text-base font-medium text-gray-300">
              Last Name <span className="text-red-600 font-light">*</span>
            </label>
            <input type="text" name="lastName" id="lastName" value={formData.lastName} onChange={handleChange} required
              className="mt-1 px-2 py-2 block w-full rounded-md bg-zinc-600 text-white shadow-sm"/>
          </div>
        </div>
        {/* Email input */}
        <div>
          <label htmlFor="email" className="block text-base font-medium text-gray-300">
            Email <span className="text-red-600 font-light">*</span>
          </label>
          <input  type="email" name="email" id="email" value={formData.email} onChange={handleChange} required
            className="mt-1 px-2 py-2 block w-full rounded-md bg-zinc-600 text-white shadow-sm"/>
        </div>
        {/* Phone Number input */}
        <div>
          <label htmlFor="phone" className="block text-base font-medium text-gray-300">
            Phone Number
          </label>
          <input  type="tel" name="phone" id="phone" value={formData.phone} onChange={handleChange}
            className="mt-1 px-2 py-2 block w-full rounded-md bg-zinc-600 text-white shadow-sm"/>
        </div>
        {/* Message input */}
        <div>
          <label htmlFor="message" className="block text-base font-medium text-gray-300">
            Message <span className="text-red-600 font-light">*</span>
          </label>
          <textarea name="message" id="message" rows={6} value={formData.message} onChange={handleChange} required
            className="mt-1 px-2 py-2 block w-full rounded-md bg-zinc-600 text-white shadow-sm">
          </textarea>
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

const AdditionalInfo = () => (
  <div className="bg-zinc-800 rounded-lg p-6 max-h-[360px]">
    <div className="space-y-6">
      {/* Email information section */}
      <h2 className="text-lg font-semibold text-zinc-300">Email</h2>
      <p className="flex items-center text-gray-300">
        {/* Email icon */}
        <FaEnvelope className="h-6 w-6 mr-3 text-blue-600" />
        {/* Email address */}
        delongyang369@gmail.com
      </p>

      {/* Phone information section */}
      <h2 className="text-lg font-semibold text-zinc-300">Phone</h2>
      <p className="flex items-center text-gray-300">
        {/* Phone icon */}
        <FaPhone className="h-6 w-6 mr-3 text-blue-600" />
        {/* Phone number */}
        +44 77877*****
      </p>

      {/* Address information section */}
      <h2 className="text-lg font-semibold text-zinc-300">Address</h2>
      <p className="flex items-center text-gray-300">
        {/* Address icon */}
        <FaMapMarkerAlt className="h-6 w-6 mr-3 text-blue-600" />
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