"use client";

import React, { useState } from 'react';
import { HiEye, HiEyeOff } from 'react-icons/hi';

interface PasswordInputProps {
  label: string;
  placeholder: string;
}

const PasswordInput: React.FC<PasswordInputProps> = ({ label, placeholder }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="mb-4">
      <label htmlFor="password" className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <div className="mt-1 relative rounded-md shadow-sm">
        <input
          type={showPassword ? 'text' : 'password'}
          id="password"
          className="block w-full px-3 py-2 mt-1 border text-slate-800 border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          placeholder={placeholder}
        />
        <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
          {showPassword ? (
            <HiEyeOff
              className="h-5 w-5 text-gray-400 cursor-pointer"
              onClick={togglePasswordVisibility}
            />
          ) : (
            <HiEye
              className="h-5 w-5 text-gray-400 cursor-pointer"
              onClick={togglePasswordVisibility}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default PasswordInput;
