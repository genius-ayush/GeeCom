import React from 'react';

function Card2({ icon, para }) {
  return (
    <div className="relative w-64 h-72 border-[1px] border-black/50 text-center p-5 group overflow-hidden">
      <div className="absolute inset-0 bg-[#50A246] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
      
      <div className="relative z-10">
        <div className="ml-[83px]" size={35}>{icon}</div>
        <div className="mt-8 font-thin">{para}</div>
      </div>
    </div>
  );
}

export default Card2;
