import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Carousel from "./Slider/Carousel";


const Hero = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  
  }, []);
  return (
    <div className="relative w-full flex justify-center items-center py-10 pt-32">
      <Carousel />
    </div>
  );
};

export default Hero;
