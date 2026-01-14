import React from 'react';

export const TypingIndicator = () => (
  <div className="flex w-full mb-2 justify-start">
    <div className="bg-white p-2 md:p-3 rounded-lg rounded-tl-none shadow-sm flex items-center gap-1 w-14 md:w-16">
      <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
      <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
      <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
    </div>
  </div>
);
