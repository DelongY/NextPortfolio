"use client"; // Add this directive at the top

import { useState } from 'react';
import { useRouter } from 'next/navigation'; // Import useRouter
import PinInput from 'react-pin-input'; // Import PinInput

export default function LoginPage() {
  const [error, setError] = useState('');
  const router = useRouter(); // Initialize useRouter

  const handleComplete = (value: string) => {
    const correctPin = '1234'; // Replace with your actual PIN checking logic

    if (value === correctPin) {
      router.push('/pages/home'); // Navigate to the home page
    } else {
      setError('Incorrect PIN. Please try again.');
    }
  };

  return (
    <div className="h-[100vh] flex flex-col items-center justify-center">
      {/* Page Title */}
      <title>Login</title>
      <h1 className="text-center text-5xl font-bold text-red-500 mb-8">
        Login
      </h1>
      <div className="flex flex-col items-center">
        <PinInput
          length={4}
          type="numeric"
          inputMode="number"
          style={{ padding: '10px' }}
          inputStyle={{
            width: '50px',
            height: '50px',
            fontSize: '24px',
            textAlign: 'center',
            borderColor: 'gray',
            backgroundColor: '#ffffff',
            color: '#171717',
          }}
          onComplete={handleComplete}
        />
        {error && <p className="text-red-500 mt-3">{error}</p>}
      </div>
    </div>
  );
}