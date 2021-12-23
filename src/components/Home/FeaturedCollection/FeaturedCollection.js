import React from "react";
import { Link } from "react-router-dom";

import ImageOne from "../../../assets/img/bag-1.jpg";
import ImageTwo from "../../../assets/img/bag-2.jpg";
import ImageThree from "../../../assets/img/bag-3.jpg";
import ImageFeatured from "../../../assets/img/featured.jpg";

import { Buttons } from "../../Buttons/Buttons";
import "./FeaturedCollection.css";

const DataFeatured = [
  {
    title: "Sunset Chain Bag",
    price: "$1,000",
    image: ImageOne,
    alt: "sunset",
    button: "Add to Cart",
    discount: null,
  },
  {
    title: "Vertigo Print Bag",
    price: "$6,000",
    image: ImageTwo,
    alt: "vertigo",
    button: "Add to Cart",
    discount: null,
  },
  {
    title: "Carretto Print Bag",
    price: "$4,000",
    image: ImageThree,
    alt: "print",
    button: "Add to Cart",
    discount: "Save $1,400",
  },
];

export const FeaturedCollection = () => {
  return (
    <div className="featured-container">
      <h2 className="featured-heading">Featured Collection</h2>
      <div className="featured-wrapper">
        {DataFeatured.map((item, index) => {
          return (
            <div className="featured-card" key={index}>
              <div className="featured-favorite">
                <span className={item.discount && "banner"}>
                  {item.discount}
                </span>
                <span>
                  <i className="fa fa-heart" aria-hidden="true"></i>
                </span>
              </div>
              <img className="featured-image" src={item.image} alt={item.alt} />
              <div className="featured-info">
                <div className="featured-button">
                  <Buttons
                    to="/"
                    buttonStyle="button-outline"
                    buttonSize="button-medium"
                  >
                    {item.button}
                  </Buttons>
                </div>
                <h3 className="featured-title">{item.title}</h3>
                <p className="featured-price">{item.price}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="featured-info-container d-flex">
        <div className="featured-info-wrapper">
          <div className="featured-info-row">
            <div className="featured-column-one position-sticky top-2">
              <div className="image-wrap">
                <img className="featured-info-image" src={ImageFeatured} alt="info" />
              </div>
            </div>
            <div className="featured-column-two">
              <div className="featured-text-wrapper">
                <p className="featured-topline">T-Shirt</p>
                <h1 className="featured-card-heading">Graphic Print T-shirt</h1>
                <div className="info-price">
                  <span className="price text-decoration-line-through">
                    $400
                  </span>
                  <span className="price font-weight-bold">$290</span>
                  <span className="banner">Save $110</span>
                </div>
                <p className="subtitle">Tax Included</p>
                <hr />

                <div className="featured-sizes">
                  <p className="size-text">Size</p>
                  <div className="featured-sizes-btn">
                    <button className="size-button">S</button>
                    <button className="size-button">L</button>
                  </div>
                </div>
                <div className="button-wrap">
                  <Buttons
                    to="/"
                    buttonStyle="button-outline"
                    buttonSize="button-medium"
                  >
                    Add to Cart
                  </Buttons>
                  <Buttons
                    buttonStyle="button-primary"
                    buttonSize="button-medium"
                    to="/"
                  >
                    Buy it Now
                  </Buttons>
                </div>
                <div className="featured-tags">
                  <p>Tags</p>
                  <span className="banner-tags">2021</span>
                  <span className="banner-tags">Print</span>
                  <span className="banner-tags">T-Shirts</span>
                </div>
                <div className="featured-catalogues">
                  <p>Catalogue</p>
                  <span className="banner-tags">T-Shirts</span>
                </div>
                <Link to="/" className="item-link">
                  <p className="item-link-text">
                    Full Details
                    <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                  </p>
                </Link>
                <div className="featured-tags">
                  <span className="social-tags">
                    <i className="fa fa-instagram"></i>
                  </span>
                  <span className="social-tags">
                    <i className="fa fa-twitter"></i>
                  </span>
                  <span className="social-tags">
                    <i className="fa fa-pinterest"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
