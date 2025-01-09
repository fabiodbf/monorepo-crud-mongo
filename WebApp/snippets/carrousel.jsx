import React, { useState } from "react";

const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () =>
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  const prevSlide = () =>
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );

  return (
    <div className="slider">
      <button onClick={prevSlide}>Prev</button>
      <img src={images[currentIndex]} alt="Slide" />
      <button onClick={nextSlide}>Next</button>
    </div>
  );
};

export default ImageSlider;
