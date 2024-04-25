"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { FaGoogle } from 'react-icons/fa';

interface CustomLoginButtonProps {
  color: string;
  text: string;
  href: string;
}

const CustomLoginButton: React.FC<CustomLoginButtonProps> = ({ color, text, href }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(href);
  };

  return (
    <button
      className={`flex items-center justify-between px-4 py-2 ${color} text-black rounded`}
      onClick={handleClick}
    >
      <FaGoogle />
      <span className='ml-24'>{text}</span>
    </button>
  );
};

export default CustomLoginButton;
