import React from "react";

const CountrySelect = ({ countries, placeholder, onValueChange }) => {
  return (
    <div className="mb-4">
      <label
        htmlFor="countries"
        className="block text-sm font-medium text-[#696F79]"
      >
        Select a country
      </label>
      <select
        id="countries"
        className="block w-full  px-3 py-2 mt-1 text-slate-900 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 hover:border-blue-500 hover:shadow-lg"
      >
        onChange=
        {(obj) => {
          onValueChange(obj);
        }}
        <option value="" selected>
          {placeholder || "Choose a country"}
        </option>
        {countries.map((country) => (
          <option key={country} value={country}>
            {country}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CountrySelect;
