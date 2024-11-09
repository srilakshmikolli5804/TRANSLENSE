import React from 'react';

interface FormInputProps {
  label: string;
  name: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  options?: string[];
  required?: boolean;
}

const FormInput: React.FC<FormInputProps> = ({ label, name, type, value, onChange, options, required }) => (
  <div className="mb-4">
    <label className="block text-sm font-medium text-gray-700" htmlFor={name}>{label}</label>
    {type === 'select' ? (
      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
        required={required}
      >
        {options?.map((option, index) => (
          <option key={index} value={option}>{option}</option>
        ))}
      </select>
    ) : (
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
        required={required}
      />
    )}
  </div>
);

export default FormInput;
