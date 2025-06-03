import React from "react";
import Slider from "react-slick";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1.5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3500,
    autoplaySpeed: 1000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-container px-8 py-4">
      <Slider {...settings}>
        <div>
          <img src="/images/carousel1.jpg" alt="1" className="w-full h-auto" />
        </div>
        <div>
          <img src="/images/carousel2.jpg" alt="2" className="w-full h-auto" />
        </div>
        <div>
          <img src="/images/carousel3.jpg" alt="3" className="w-full h-auto" />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
