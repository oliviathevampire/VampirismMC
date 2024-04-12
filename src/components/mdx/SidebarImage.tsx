// components/SidebarImage.tsx

import React from 'react';

interface SidebarImageProps {
  title: string;
  description: string;
  imageUrl: string;
  position: 'left' | 'right';
  backgroundColor: string; // New prop for background color
}

const SidebarImage: React.FC<SidebarImageProps> = ({ title, description, imageUrl, position, backgroundColor }) => {
    // Decide the direction of flex based on the position of the image for medium screens and up
    const flexDirectionMd = position === 'left' ? 'md:flex-row' : 'md:flex-row-reverse';
    // Decide margin position for medium screens and up
    const marginMd = position === 'left' ? 'md:mr-2' : 'md:ml-2';
  
    return (
      <div className={`flex flex-col ${flexDirectionMd} items-center my-4 md:my-6 max-w-4xl mx-auto p-2 md:p-4 rounded-lg`} style={{ backgroundColor }}>
        <img src={imageUrl} alt={title} className={`w-full md:w-48 md:h-auto ${marginMd} mb-2 md:mb-0`} />
        <div className="flex-1">
          <h2 className="mdx-h2 mb-1">{title}</h2>
          <p className="text-center md:text-left">{description}</p>
        </div>
      </div>
  );
};

export default SidebarImage;
