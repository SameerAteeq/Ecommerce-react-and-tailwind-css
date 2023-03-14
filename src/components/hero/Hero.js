import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const items = [
  <div className="h-full md:h-[85vh] w-full">
    <img
      src="./assets/hero1.png "
      className="h-full w-full  object-cover  bg-cover bg-no-repeat "
    />
  </div>,
  <div className="h-full md:h-[85vh] w-full">
    <img
      src="./assets/hero2.png"
      className="h-full w-full  object-cover  bg-cover bg-no-repeat "
    />
  </div>,
  <div className="h-full md:h-[85vh] w-full">
    <img
      src="./assets/hero3.png"
      className="h-full w-full  object-cover  bg-cover bg-no-repeat "
    />
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
    <section className=" h-full w-full  z-0">
      <AliceCarousel
        className="h-full"
        disableButtonsControls
        onSlideChanged={handleOnSlideChanged}
        onSlideEnd={handleOnSlideEnd}
        items={items}
      />
    </section>
  );
};

export default Hero;
