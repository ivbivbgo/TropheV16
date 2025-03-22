import React, { useState, useEffect } from 'react';

const SPORTS_IMAGES = [
  // Cristiano Ronaldo - Football
  "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=1200&auto=format&fit=crop",
  // Serena Williams - Tennis
  "https://images.unsplash.com/photo-1630999604934-f62cf8f1d785?w=1200&auto=format&fit=crop",
  // Basketball pro (keeping this one as requested)
  "https://images.unsplash.com/photo-1504450758481-7338eba7524a?w=1200&auto=format&fit=crop",
  // Rugby pro
  "https://images.unsplash.com/photo-1628779238951-be2c9f2a59f4?w=1200&auto=format&fit=crop",
  // Athletics pro
  "https://images.unsplash.com/photo-1539616246908-0ce2c788a3f3?w=1200&auto=format&fit=crop"
];

export function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === SPORTS_IMAGES.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Changed to 3000ms (3 seconds)

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-full">
      {SPORTS_IMAGES.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-3000 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={image}
            alt={`Sports ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  );
}