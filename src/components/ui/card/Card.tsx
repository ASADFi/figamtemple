import React from 'react';
import Link from 'next/link';

interface CardProps {
  icon: React.ReactNode;
  heading: string;
  description: string;
  href: string; // URL of the page to navigate to
}

const Card: React.FC<CardProps> = ({ icon, heading, description, href }) => {
  return (
    <Link href={href}>
      <div className="border border-gray-200 rounded-lg p-4 hover:border-blue-500 cursor-pointer">
        <div className="flex flex-col lg:flex-row items-center mb-2">
          <div className="mb-2 lg:mr-2 lg:mb-0">{icon}</div>
          <h2 className="text-lg font-semibold text-black">{heading}</h2>
        </div>
        <p className="text-gray-600 font-normal">{description}</p>
      </div>
    </Link>
  );
};

export default Card;
