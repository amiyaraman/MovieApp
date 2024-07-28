// src/components/BannerSlideshow.jsx
import React, { useState, useEffect } from "react";

const slides = [
  "https://via.placeholder.com/1200x400?text=Slide+1",
  "https://via.placeholder.com/1200x400?text=Slide+2",
  "https://via.placeholder.com/1200x400?text=Slide+3",
];

const BannerSlideshow = ({images}) => {
    console.log(images)
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full mx-auto mt-4 overflow-hidden">
      <div
        className="flex transition-transform duration-700"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {images.map((slide, index) => (
          <div key={index} className="w-full flex-shrink-0">
            <img
              src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${
                search.poster_path ||
                search.profile_path ||
                search.backdrop_path
              }`}
              alt={`Slide ${index + 1}`}
              className="w-full"
            />
          </div>
        ))}
      </div>
      <div className="absolute bottom-0 left-0 right-0 flex justify-center p-2 space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 w-2 rounded-full ${
              currentSlide === index ? "bg-white" : "bg-gray-500"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default BannerSlideshow;
