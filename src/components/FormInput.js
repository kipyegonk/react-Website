import React from 'react';

const FormInput = ({ label, error, ...props }) => {
  return (
    <div className="mb-4">
      <label htmlFor={props.name} className="block text-gray-700 mb-2">
        {label} {props.required && <span className="text-red-500">*</span>}
      </label>
      <input
        {...props}
        className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
          error ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-brand-light'
        }`}
      />
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );
};

export default FormInput;