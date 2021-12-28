import React from "react";
import "./Catalog.css";
// import { Link } from "react-router-dom";
import { Buttons } from "../Buttons/Buttons";
import { Navbar } from "../Navbar/Navbar";

export const Catalog = () => {
  return (
    <div className="catalog-container">
        <Navbar navStyle='navLinks-black' />
      <h2 className="catalog-heading">Products</h2>
      <div className="catalog-wrapper">
        <div className="catalog-card">
          <div className="catalog-favorite">
            <span className="banner">Discount field</span>
            <span>
              <i className="fa fa-heart" aria-hidden="true"></i>
            </span>
          </div>

          <img className="catalog-image" src="" alt="" />
          <div className="catalog-info">
            <div className="catalog-button">
              <Buttons
                to="/"
                buttonStyle="button-outline"
                buttonSize="button-medium"
              >
                BUTTON
              </Buttons>
            </div>
            <h3 className="catalog-title">TITLE</h3>
            <p className="catalog-price">PRICE</p>
          </div>
        </div>
      </div>
    </div>
  );
};
