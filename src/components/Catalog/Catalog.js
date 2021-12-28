import React from "react";
import "./Catalog.css";
// import { Link } from "react-router-dom";
import { Buttons } from "../Buttons/Buttons";
import { Navbar } from "../Navbar/Navbar";
import { CatalogData } from "./CatalogData";

export const Catalog = () => {
  return (
    <div className="catalog-container">
      <Navbar navStyle="navLinks-black" />
      <h2 className="catalog-heading">Products</h2>
      <div className="catalog-wrapper">
        {CatalogData.map((item, index) => {
          return (
            <div className="catalog-card" key={index}>
              <div className="catalog-favorite">
                <span className={item.discount && "banner"}>
                  {item.discount}
                </span>
                <span>
                  <i className="fa fa-heart" aria-hidden="true"></i>
                </span>
              </div>

              <img className="catalog-image" src={item.image} alt={item.alt} />
              <div className="catalog-info">
                <div className="catalog-button">
                  <Buttons
                    to="/"
                    buttonStyle="button-outline"
                    buttonSize="button-medium"
                  >
                    {item.button}
                  </Buttons>
                </div>
                <h3 className="catalog-title">{item.title}</h3>
                <p className="catalog-price">{item.price}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
