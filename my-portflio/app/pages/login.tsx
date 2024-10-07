"use client"; // Add this directive at the top

import { useState } from 'react';
import { useRouter } from 'next/navigation'; // Import useRouter
import PinInput from 'react-pin-input'; // Import PinInput

export default function Login() {
  const [error, setError] = useState('');
  const router = useRouter(); // Initialize useRouter

  const handleComplete = (value: string) => {
    const correctPin = '1234'; // Replace with your actual PIN checking logic

    if (value === correctPin) {
      router.push('/home'); // Navigate to the home page
    } else {
      setError('Incorrect PIN. Please try again.');
    }
  };

  return (
    <div
      className="fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-inherit"
      style={{ zIndex: 60, overflow: 'hidden' }}> 
      <h1 className="font-mono text-center text-5xl font-bold text-red-500 mb-6">
        Login
      </h1>
      <div className="flex flex-col items-center">
        <PinInput
          length={4} type="numeric" inputMode="number" style={{ padding: '10px' }}
          inputStyle={{width: '60px', height: '60px', fontSize: '24px', textAlign: 'center',
            borderColor: 'gray', backgroundColor: '#ffffff',color: '#171717', borderRadius: '12px'}}
          onComplete={handleComplete}
        />
        {error && <p className="text-red-500 mt-3">{error}</p>}
      </div>
    </div>
  );
}