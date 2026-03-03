import React from 'react';
import TextareaAutosize from 'react-textarea-autosize';

interface AutoResizeTextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  boxed?: boolean;
}

export const AutoResizeTextarea: React.FC<AutoResizeTextareaProps> = ({ 
  label, 
  boxed = false, 
  className = '', 
  ...props 
}) => {
  return (
    <div className="w-full">
      {label && <label className="font-semibold block mb-1 text-sm text-gray-700">{label}</label>}
      <TextareaAutosize
        minRows={1}
        className={`w-full bg-transparent outline-none transition-colors duration-200 resize-none overflow-hidden ${
          boxed 
            ? 'border border-gray-300 rounded p-2 focus:border-blue-500' 
            : 'border-b border-gray-400 py-1 focus:border-blue-500'
        } ${className}`}
        {...props}
      />
    </div>
  );
};
