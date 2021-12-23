import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { Buttons } from "../Buttons/Buttons";

export const Footer = () => {
  return (
    <div className="footer-container">
      <div className="top-container">
        <div className="left-top">
          <p>Follow us on social media</p>
        </div>
        <div className="right-top">
          <div className="social-icon">
            <i className="fa fa-facebook-f"></i>
          </div>
          <div className="social-icon">
            <i className="fa fa-instagram"></i>
          </div>
        </div>
      </div>
      <div className="content-container">
        <div className="left-content">
          <h2>Links</h2>
          <Link to="/" className="footer-link">
            Home
          </Link>
          <Link to="/" className="footer-link">
            Catalogue
          </Link>
          <Link to="/" className="footer-link">
            Wishlist
          </Link>
          <Link to="/" className="footer-link">
            Help
          </Link>
          <Link to="/" className="footer-link">
            Buy Now
          </Link>
        </div>
        <div className="mid-content"></div>
        <div className="right-content">
          <h2>Sign up to our mailing list</h2>
          <form action="#">
            <div className="footer-form-wrap">
              <label htmlFor="email">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Your email"
                />
              </label>
              <Buttons
                to="/"
                buttonStyle="button-primary"
                buttonSize="button-large"
              >
                Subscribe
              </Buttons>
            </div>
          </form>
        </div>
      </div>
      <div className="bottom-container">
        <div className="left-bottom">
          <p>&copy; 2021, Creative Tim. Powered by Shopify</p>
        </div>
      </div>
    </div>
  );
};
