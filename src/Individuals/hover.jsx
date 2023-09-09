import React, { useState } from 'react';
import './Individual.css';

const images = [  { id: 1, src: "https://cdn.shopify.com/s/files/1/0326/7189/t/65/assets/modules-1658428749753.png?v=1658428763", alt: "Image 1", text: "Text 1" },  { id: 2, src: "https://cdn.shopify.com/s/files/1/0326/7189/t/65/assets/klaviyo-drop-shadow-28075x-1663954625746.png?v=1663954627", alt: "Image 2", text: "Text 2" },  { id: 3, src: "https://cdn.shopify.com/s/files/1/0326/7189/t/65/assets/klaviyo-drop-shadow-28075x-1663954625746.png?v=1663954627", alt: "Image 3", text: "Text 3" },  { id: 4, src: "https://cdn.shopify.com/s/files/1/0326/7189/t/65/assets/klaviyo-drop-shadow-28075x-1663954625746.png?v=1663954627", alt: "Image 4", text: "Text 4" },  { id: 5, src: "https://cdn.shopify.com/s/files/1/0326/7189/t/65/assets/klaviyo-drop-shadow-28075x-1663954625746.png?v=1663954627", alt: "Image 5", text: "Text 5" },];

const HoverImage = () => {
  const [isHovered, setIsHovered] = useState({});

  const handleMouseEnter = (id) => {
    setIsHovered({ ...isHovered, [id]: true });
  };

  const handleMouseLeave = (id) => {
    setIsHovered({ ...isHovered, [id]: false });
  };

  return (
    <div className="flex justify-center">
      {images.map(({ id, src, alt, text }) => (
        <div
          key={id}
          className="relative m-4"
          onMouseEnter={() => handleMouseEnter(id)}
          onMouseLeave={() => handleMouseLeave(id)}
        >
          <div
            className={`h-full w-full absolute top-0 left-0 flex items-center justify-center text-black-900 ${isHovered[id] ? '' : 'hidden'}`}
          >
            {text}
          </div>
          <div
            className={`transition-all duration-500 ease-in-out transform h-64 w-64 ${isHovered[id] ? 'flip-back' : ''}`}
          >
            <img
              className="h-full w-full"
              src={src}
              alt={alt}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default HoverImage;




