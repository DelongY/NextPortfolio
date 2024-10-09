'use client'

import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

// Types
interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}

interface ContactInfoItem {
  icon: React.ElementType;
  title: string;
  content: string;
}

// Components
const FormInput: React.FC<{
  label: string;
  name: keyof FormData;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  required?: boolean;
}> = ({ label, name, type, value, onChange, required = false }) => (
  <div>
    <label htmlFor={name} className="block text-base font-medium text-gray-300">
      {label} {required && <span className="text-red-600 font-light">*</span>}
    </label>
    {type === 'textarea' ? (
      <textarea
        name={name}
        id={name}
        rows={6}
        value={value}
        onChange={onChange}
        required={required}
        className="mt-1 px-2 py-2 block w-full rounded-md bg-zinc-600 text-white shadow-sm"
      />
    ) : (
      <input
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        required={required}
        className="mt-1 px-2 py-2 block w-full rounded-md bg-zinc-600 text-white shadow-sm"
      />
    )}
  </div>
);

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ firstName: '', lastName: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="bg-zinc-800 shadow rounded-lg p-6">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex space-x-4">
          <FormInput label="First Name" name="firstName" type="text" value={formData.firstName} onChange={handleChange} required />
          <FormInput label="Last Name" name="lastName" type="text" value={formData.lastName} onChange={handleChange} required />
        </div>
        <FormInput label="Email" name="email" type="email" value={formData.email} onChange={handleChange} required />
        <FormInput label="Phone Number" name="phone" type="tel" value={formData.phone} onChange={handleChange} />
        <FormInput label="Message" name="message" type="textarea" value={formData.message} onChange={handleChange} required />
        <div>
          <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md text-sm font-medium text-zinc-100 bg-blue-600 hover:bg-blue-900">
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

const ContactInfoItem: React.FC<ContactInfoItem> = ({ icon: Icon, title, content }) => (
  <div>
    <h2 className="text-lg font-semibold text-zinc-300">{title}</h2>
    <p className="flex items-center text-gray-300">
      <Icon className="h-6 w-6 mr-3 text-blue-600" />
      {content}
    </p>
  </div>
);

const AdditionalInfo: React.FC = () => {
  const contactInfo: ContactInfoItem[] = [
    { icon: FaEnvelope, title: 'Email', content: 'delongyang369@gmail.com' },
    { icon: FaPhone, title: 'Phone', content: '+44 77877*****' },
    { icon: FaMapMarkerAlt, title: 'Address', content: 'Billericay, Essex, United Kingdom' },
  ];

  return (
    <div className="bg-zinc-800 rounded-lg p-6 max-h-[360px]">
      <div className="space-y-6">
        {contactInfo.map((item, index) => (
          <ContactInfoItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

const ContactPage: React.FC = () => {
  return (
    <div id='contact' className="flex flex-col justify-center min-h-screen bg-zinc-900">
    <main className="max-w-5xl mx-auto w-full px-3 sm:px-6 lg:px-9 py-9">
        <header className="text-center mb-6">
            <h1 className="text-3xl font-bold text-zinc-300">Get in touch</h1>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-9">
          <AdditionalInfo />
          <ContactForm />
        </div>
      </main>
    </div>
  );
};

export default ContactPage;