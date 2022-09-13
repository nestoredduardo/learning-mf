import React from 'react';

export interface ButtonProps {
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ children }) => {
  return (
    <button className="rounded-md hover:bg-indigo-800 bg-indigo-600 text-white h-12 px-3">
      {children}
    </button>
  );
};
