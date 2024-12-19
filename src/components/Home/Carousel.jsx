import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./Carousel.css";

const Carousel = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef(null);
  const contentRefs = useRef([]);
  const autoNextInterval = 4000; // Auto-slide interval

  useEffect(() => {
    const nextSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    };

    timeoutRef.current = setTimeout(nextSlide, autoNextInterval);

    return () => clearTimeout(timeoutRef.current);
  }, [currentIndex, data.length]);

  useEffect(() => {
    // GSAP Timeline for smooth sequential animation
    const tl = gsap.timeline();

    tl.fromTo(
      contentRefs.current[currentIndex]?.querySelector(".description"),
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power2.out" }
    ).fromTo(
      contentRefs.current[currentIndex]?.querySelector(".title"),
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power2.out" },
      "+=0.2" // Add a small delay between animations
    );
  }, [currentIndex]);

  const handleArrowClick = (direction) => {
    clearTimeout(timeoutRef.current);
    if (direction === "next") {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    } else {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? data.length - 1 : prevIndex - 1
      );
    }
  };

  const getClassNames = (index) => {
    if (index === currentIndex) return "item active";
    if (index === (currentIndex + 1) % data.length) return "item next";
    if (index === (currentIndex - 1 + data.length) % data.length)
      return "item prev";
    return "item";
  };

  return (
    <div className="carousel">
      <div className="list">
        {data.map((item, index) => (
          <div className={getClassNames(index)} key={index}>
            <img src={item.img} alt={`Slide ${index + 1}`} />
            <div
              className="content"
              ref={(el) => (contentRefs.current[index] = el)}
            >
              <h2 className="title">{item.title}</h2>
              <p className="description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Uncomment the arrows for navigation */}
      {/* <div className="arrows">
        <button onClick={() => handleArrowClick("prev")}>&lt;</button>
        <button onClick={() => handleArrowClick("next")}>&gt;</button>
      </div> */}
    </div>
  );
};

export default Carousel;
