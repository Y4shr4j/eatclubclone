import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";

const images = [
  "https://assets.box8.co.in/horizontal-rectangle/web/banner/2285",
  "https://assets.box8.co.in/horizontal-rectangle/web/banner/1820",
  "https://assets.box8.co.in/horizontal-rectangle/web/banner/2212",
  "https://assets.box8.co.in/horizontal-rectangle/web/banner/1827",
  "https://assets.box8.co.in/horizontal-rectangle/web/banner/1902",
  "https://assets.box8.co.in/horizontal-rectangle/web/banner/2331",
];

const SliderComponent = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="relative bg-custom-gray p-8">
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index} className="p-3">
            <img
              src={img}
              alt={`Slide ${index}`}
              className="w-full h-auto rounded"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} absolute top-1/2 right-5 transform -translate-y-1/2 text-3xl cursor-pointer z-10`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <MdKeyboardArrowRight />
    </div>
  );
};

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} absolute top-1/2 left-5 transform -translate-y-1/2 text-3xl cursor-pointer z-10`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <MdKeyboardArrowLeft />
    </div>
  );
};

export default SliderComponent;
