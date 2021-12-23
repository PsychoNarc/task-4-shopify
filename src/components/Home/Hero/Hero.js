import React, { useState } from "react";
import "./Hero.css";
import ImageOne from "../../../assets/img/bg-one.jpg";
import ImageTwo from "../../../assets/img/bg-two.jpg";
import { Buttons } from "../../Buttons/Buttons";

const SliderData = [
  {
    title: "Not Just Clothes",
    caption:
      "This is the best way to find your favorite stuff. Don't forget all these items are unique pieces hand-crafted by people.",
    image: ImageOne,
    alt: "Bg-One",
    path: "/",
    button: "Buy Now",
  },
  {
    title: "But a lifestyle",
    caption:
      "This is the best way to find your favorite stuff. Don't forget all these items are unique pieces hand-crafted by people.",
    image: ImageTwo,
    alt: "Bg-Two",
    path: "/",
    button: "Buy Now",
  },
];

export const Hero = () => {
  const [current, setCurrent] = useState(0);
  const length = SliderData.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const moveDot = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  return (
    <div className="hero-section">
      <div className="hero-wrapper">
        {SliderData.map((slide, index) => {
          return (
            <div className="hero-slide" key={index}>
              {index === current && (
                <div className="hero-slider">
                  <img
                    className="hero-image"
                    src={slide.image}
                    alt={slide.alt}
                  />
                  <div className="hero-content">
                    <h1>{slide.title}</h1>
                    <p>{slide.caption}</p>
                    {/* <button className="hero-btn" type="button" to={slide.path}>
                      Buy Now
                    </button> */}
                    <div className="hero-btn">
                      <Buttons to="/">{slide.button}</Buttons>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
        <div className="slider-buttons">
          <i
            className="prev-arrow fa fa-chevron-left"
            aria-hidden="true"
            onClick={prevSlide}
          ></i>
          <div className="container-dots">
            {Array.from({ length }).map((item, index) => (
              <div
                onClick={() => moveDot()}
                className={current === index ? "dot active" : "dot"}
                key={index}
              ></div>
            ))}
          </div>
          <i
            className="next-arrow fa fa-chevron-right"
            aria-hidden="true"
            onClick={nextSlide}
          ></i>
        </div>
      </div>
    </div>
  );
};
