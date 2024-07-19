import React, { useState, useEffect } from "react";
import img2 from "../../assets/img 1.webp";
import img1 from "../../assets/BANER-SHANNH 1.png";
import img3 from "../../assets/img2.jpg";
import img4 from "../../assets/img3.jpeg";
import img5 from "../../assets/img4.jpeg";
import "./carousel.css";

const images = [img1, img2, img3, img4, img5];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel">
      <div
        className="carousel-inner"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Slide ${index + 1}`} />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
