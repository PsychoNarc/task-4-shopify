import React from "react";
import { Navbar } from "../Navbar/Navbar";
import { Buttons } from "../Buttons/Buttons";
import "./ContactForm.css";

export const ContactForm = () => {
  return (
    <div className="contact-container">
      <Navbar navStyle="navLinks-black" />
      <div className="contact">
        <h3 className="contact-header">Contact Form</h3>
        <div className="contact-content container">
          <form className="row">
            <div className="col-md-6">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Name"
                required
              />
            </div>
            <div className="col-md-6 email">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Email"
                required
              />
            </div>
            <div className="col-md-12">
              <label htmlFor="phone" className="form-label">
                Phone Number
              </label>
              <input
                type="text"
                className="form-control"
                id="phone"
                placeholder="Phone Number"
              />
            </div>
            <div className="col-lg-12">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                className="form-control"
                id="message"
                rows="10"
              ></textarea>
            </div>
            <div className="btn-wrap">
              <Buttons to="/">Send</Buttons>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
