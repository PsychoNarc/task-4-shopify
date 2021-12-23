import React from "react";
import { Buttons } from "../../Buttons/Buttons";
import "./Newsletter.css";

export const Newsletter = () => {
  return (
    <div className="newsletter-container">
      <div className="newsletter-content">
        <span className="topline">Trending</span>
        <h3>Subscribe to our newsletter</h3>
        <p>
          Sign up for tailored new arrivals, exciting launches and exclusive
          early sale access
        </p>
        <form action="#">
          <div className="newsletter-form-wrap">
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
  );
};
