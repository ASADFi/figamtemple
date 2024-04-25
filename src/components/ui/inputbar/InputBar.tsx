import React from 'react';

interface TextInputProps {
  label: string;
  placeholder: string;
}

const TextInput: React.FC<TextInputProps> = ({ label, placeholder }) => {
  return (
    <div className="mb-4">
      <label htmlFor="input" className="block text-sm font-medium text-[#696F79]">
        {label}
      </label>
      <input
        type="text"
        id="input"
        className="block w-full  px-3 py-2 mt-1 text-slate-900 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 hover:border-blue-500 hover:shadow-lg"
        placeholder={placeholder}
      />
    </div>
  );
};

export default TextInput;
