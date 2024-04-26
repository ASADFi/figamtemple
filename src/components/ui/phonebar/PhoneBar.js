import React from "react";
import PhoneInput from "react-phone-number-input/input";
import flags from "react-phone-number-input/flags";

const PhoneInputComponent = ({ value, onChange, label }) => {
  return (
    <div className="">
      <label
        htmlFor="input"
        className="block text-sm font-medium text-[#696F79]"
      >
        {label}
      </label>
      <PhoneInput
        className="block w-full  px-3 py-2 mt-1 text-slate-900 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 hover:border-blue-500 hover:shadow-lg"
        placeholder="Enter phone number"
        defaultCountry="RU"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default PhoneInputComponent;
