import React from 'react';
import Link from 'next/link';

interface CardProps {
  icon: React.ReactNode;
  heading: string;
  description: string;
  href: string; // URL of the page to navigate to
  onClickCallBack: Function;
}

const Card: React.FC<CardProps> = ({ icon, heading, description, href, onClickCallBack }) => {
  return (
    
      <div className="border border-gray-200 rounded-lg p-4 hover:border-blue-500 cursor-pointer" onClick={() => {
        onClickCallBack();
      }}>
        <div className="flex flex-col lg:flex-row items-center mb-2">
          <div className="mb-2 lg:mr-2 lg:mb-0 hover:fill-blue-900">{icon}</div>
          <h2 className="text-lg font-semibold relative text-black">{heading}</h2>
        <p className="text-gray-600 font-normal absolute mt-16 ml-14">{description}</p>
        </div>
      </div>
    
  );
};

export default Card;
