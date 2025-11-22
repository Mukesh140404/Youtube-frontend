import React from 'react';

export default function ProfileImg() {
  return (
    <div className="p-1 shadow bg-gray-200 w-full h-full rounded-full overflow-hidden border">
      <img 
        src="/img3.jpeg" 
        alt="userProfile" 
        className="w-full h-full object-cover shrink-0 object-center"
      />
    </div>
  );
}
