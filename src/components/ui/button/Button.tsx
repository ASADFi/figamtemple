"use client";
import React from 'react';
import { useRouter } from 'next/navigation';

interface CustomButtonProps {
  color: string;
  text: string;
  href: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({ color, text, href }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(href);
  };

  return (
    <button
      className={`px-4 py-2 ${color} text-white text-sm rounded`}
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

export default CustomButton;
