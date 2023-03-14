import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const items = [
  <div className="h-[-70vh] w-full">
    <img src="./assets/hero1.png " className="h-full w-full" />
  </div>,
  <div className="h-[-70vh] w-full">
    <img src="./assets/hero2.png" className="h-full w-full" />
  </div>,
  <div className="h-[-70vh] w-full">
    <img src="./assets/hero3.png" className="h-full w-full" />
  </div>,
];

const Hero = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleOnSlideChanged = (e) => {
    setSlideIndex(e.item);
  };
  const handleOnSlideEnd = () => {
    if (slideIndex === items.length - 1) {
      setSlideIndex(0);
    }
  };
  return (
    <section className="overflow-hidden box-border z-0">
      <AliceCarousel
        disableButtonsControls
        autoPlay
        autoPlayInterval={3000}
        onSlideChanged={handleOnSlideChanged}
        onSlideEnd={handleOnSlideEnd}
        items={items}
      />
    </section>
  );
};

export default Hero;
