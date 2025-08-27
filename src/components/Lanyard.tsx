import React from 'react';

interface LanyardProps {
  name: string;
  role: string;
  image: string;
  className?: string;
}

const Lanyard: React.FC<LanyardProps> = ({ name, role, image, className = '' }) => {
  return (
    <div className={`relative group ${className}`}>
      {/* Lanyard Cord */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-8 bg-gray-400 rounded-full"></div>
      
      {/* ID Card */}
      <div className="relative mt-8 bg-white rounded-lg shadow-lg p-4 transform transition-all duration-300 hover:scale-105 hover:rotate-1 group-hover:shadow-xl">
        {/* Lanyard attachment hole */}
        <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gray-300 rounded-full border-2 border-white shadow-inner"></div>
        
        {/* Card Content */}
        <div className="text-center">
          <div className="w-16 h-16 mx-auto mb-3 rounded-full overflow-hidden bg-gradient-to-br from-green-100 to-lime-100 flex items-center justify-center">
            {image ? (
              <img src={image} alt={name} className="w-full h-full object-cover" />
            ) : (
              <div className="text-green-600 text-2xl font-bold">
                {name.split(' ').map(n => n[0]).join('')}
              </div>
            )}
          </div>
          
          <h3 className="font-bold text-gray-900 text-sm mb-1">{name}</h3>
          <p className="text-gray-600 text-xs">{role}</p>
          
          {/* Team badge */}
          <div className="mt-2 px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
            CLenFi Team
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lanyard;