import React from 'react';

const InputField = ({ label, type, name, value, onChange, placeholder }) => (
  <div className="w-full mb-4">
    <label className="text-sm text-[#6C25FF] mb-1 block">{label}</label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full px-4 py-2 text-gray-700 placeholder-gray-400 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-[#6C25FF]"
      required
    />
  </div>
);

export default InputField;
