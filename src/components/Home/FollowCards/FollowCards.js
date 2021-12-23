import React from "react";
import "./FollowCards.css";

import CardLogo from "../../../assets/img/instagram-logo.svg";
import CardOne from "../../../assets/img/card-1.jpg";
import CardTwo from "../../../assets/img/card-2.jpg";
import CardThree from "../../../assets/img/card-3.jpg";
import CardFour from "../../../assets/img/card-4.jpg";
import CardFive from "../../../assets/img/card-5.jpg";
import CardSix from "../../../assets/img/card-6.jpg";
import CardSeven from "../../../assets/img/card-7.jpg";
import CardEight from "../../../assets/img/card-8.jpg";
import CardNine from "../../../assets/img/card-9.jpg";
import CardTen from "../../../assets/img/card-10.jpg";
import CardEleven from "../../../assets/img/card-11.jpg";
import CardTwelve from "../../../assets/img/card-12.jpg";

const ImageDataRowOne = [
  {
    image: CardOne,
    alt: "Card One",
  },
  {
    image: CardTwo,
    alt: "Card Two",
  },
  {
    image: CardThree,
    alt: "Card Three",
  },
  {
    image: CardFour,
    alt: "Card Four",
  },
  {
    image: CardFive,
    alt: "Card Five",
  },
  {
    image: CardSix,
    alt: "Card Six",
  },
];

const ImageDataRowTwo = [
  {
    image: CardSeven,
    alt: "Card Seven",
  },
  {
    image: CardEight,
    alt: "Card Eight",
  },
  {
    image: CardNine,
    alt: "Card Nine",
  },
  {
    image: CardTen,
    alt: "Card Ten",
  },
  {
    image: CardEleven,
    alt: "Card Eleven",
  },
  {
    image: CardTwelve,
    alt: "Card Twelve",
  },
];

export const FollowCards = () => {
  return (
    <div className="follow-up">
      <div className="container">
        <img src={CardLogo} alt="insta-logo" />
        <h3 className="follow-up-header">Follow us on Instagram</h3>
        <div className="row row-one">
          {ImageDataRowOne.map((item, index) => (
            <div className="col text-center" key={index}>
              <div className="follow-up-card">
                <img src={item.image} alt={item.alt} className="card-image" />
                <div className="overlay">
                  <div className="overlay-content overlay-fade">
                    <i
                      className="fa fa-instagram"
                      aria-hidden="true"
                    ></i>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="row row-two">
          {ImageDataRowTwo.map((item, index) => (
            <div className="col text-center" key={index}>
              <div className="follow-up-card">
                <img src={item.image} alt={item.alt} className="card-image" />
                <div className="overlay">
                  <div className="overlay-content overlay-fade">
                    <i
                      className="fa fa-instagram"
                      aria-hidden="true"
                    ></i>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
