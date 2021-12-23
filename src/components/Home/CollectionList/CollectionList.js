import React from "react";
import { Buttons } from "../../Buttons/Buttons";
import "./CollectionList.css";

import CollectionOne from "../../../assets/img/collection-1.jpg";
import CollectionTwo from "../../../assets/img/collection-2.jpg";
import CollectionThree from "../../../assets/img/collection-3.jpg";
import CollectionFour from "../../../assets/img/collection-4.png";
import CollectionFive from "../../../assets/img/collection-5.jpg";

const CollectionDataRowOne = [
  {
    title: "Bucket Bags",
    products: 3,
    image: CollectionOne,
  },
  {
    title: "Trousers",
    products: 3,
    image: CollectionTwo,
  },
];

const CollectionDataRowTwo = [
  {
    title: "T-shirts",
    products: 3,
    image: CollectionThree,
  },
  {
    title: "Suits",
    products: 3,
    image: CollectionFour,
  },
  {
    title: "Accessories",
    products: 3,
    image: CollectionFive,
  },
];

export const CollectionList = () => {
  return (
    <div className="collection-list">
      <div className="container">
        <h2 className="collection-list-header">Collections List</h2>
        <div className="row">
          {CollectionDataRowOne.map((item, index) => {
            return (
              <div className="col-md-6 text-center g-0" key={index}>
                <div className="collection-item">
                  <div className="image-box">
                    <img src={item.image} alt="" className="image-bg" />
                  </div>
                  <div className="details">
                    <h5 className="collection-title">{item.title}</h5>
                    <p className="collection-products">
                      {item.products} products
                    </p>
                    <Buttons
                      to="/"
                      buttonStyle="button-primary"
                      buttonSize="button-medium"
                    >
                      Shop Now
                    </Buttons>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="row row-two">
          {CollectionDataRowTwo.map((item, index) => {
            return (
              <div className="col-md-4 text-center g-0" key={index}>
                <div className="collection-item">
                  <div className="image-box">
                    <img src={item.image} alt="" className="image-bg-two" />
                  </div>
                  <div className="details">
                    <h5 className="collection-title">{item.title}</h5>
                    <p className="collection-products">
                      {item.products} products
                    </p>
                    <Buttons
                      to="/"
                      buttonStyle="button-primary"
                      buttonSize="button-medium"
                    >
                      Shop Now
                    </Buttons>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
