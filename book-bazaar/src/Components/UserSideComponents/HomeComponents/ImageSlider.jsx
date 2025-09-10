import React, { useState } from "react";
import { MdOutlineNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";

const ImageSlider = () => {
  const images = [
    "https://cdn.pixabay.com/photo/2015/11/19/21/10/glasses-1052010_1280.jpg",
    "https://cdn.pixabay.com/photo/2022/03/06/10/23/books-7051311_1280.jpg",
    "https://cdn.pixabay.com/photo/2018/03/19/18/20/tea-time-3240766_1280.jpg",
    "https://cdn.pixabay.com/photo/2017/09/11/15/34/animals-2739386_1280.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full max-w-[90vw] mx-auto my-4">
      {/* Image */}
      <div className="overflow-hidden rounded-2xl shadow-lg">
        <img
          src={images[currentIndex]}
          alt="slider"
          className="w-full h-52 md:h-72 object-cover transition-all duration-700"
        />
      </div>

      {/* Prev Button */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/70 hover:bg-white text-black p-2 rounded-full shadow-lg"
      >
        <GrFormPrevious size={24} />
      </button>

      {/* Next Button */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/70 hover:bg-white text-black p-2 rounded-full shadow-lg"
      >
        <MdOutlineNavigateNext size={24} />
      </button>

      {/* Dots */}
      <div className="flex justify-center mt-3 space-x-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-3 h-3 rounded-full ${
              idx === currentIndex ? "bg-blue-500" : "bg-gray-300"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
