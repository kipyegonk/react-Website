import React from 'react';

const Button = ({ 
  children, 
  type = 'button', 
  onClick, 
  disabled = false, 
  className = '',
  variant = 'primary' 
}) => {
  const baseClasses = 'px-6 py-3 rounded-lg transition-colors font-medium';
  
  const variantClasses = {
    primary: 'bg-brand-primary text-white hover:bg-brand-dark',
    secondary: 'bg-brand-secondary text-white hover:bg-opacity-90',
    outline: 'border border-brand-primary text-brand-primary hover:bg-brand-light'
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses[variant]} ${disabled ? 'opacity-70 cursor-not-allowed' : ''} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;