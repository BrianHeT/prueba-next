import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const settings = {
    infinite: true,
    centerMode: true,
    centerPadding: "15%", 
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3500,
    autoplaySpeed: 1000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          centerPadding: "10%",
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          centerPadding: "0px",
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="bg-white py-16" id="carousel">
      <div className="max-w-7xl mx-auto px-4 text-center mb-10">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Check our Work</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Take a look at some of our recent projects to see how we've helped businesses like yours succeed online.
        </p>
      </div>

      <div className="slider-container px-4 sm:px-8">
        <Slider {...settings}>
          <div>
            <img src="/images/carousel1.jpg" alt="1" className="rounded-lg shadow-md w-full h-auto object-cover" />
          </div>
          <div>
            <img src="/images/carousel2.jpg" alt="2" className="rounded-lg shadow-md w-full h-auto object-cover" />
          </div>
          <div>
            <img src="/images/carousel3.jpg" alt="3" className="rounded-lg shadow-md w-full h-auto object-cover" />
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default Carousel;
