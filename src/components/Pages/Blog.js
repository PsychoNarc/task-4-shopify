import React from "react";
import { useParams } from "react-router-dom";
import { DataBlogs } from "../Home/BlogArticles/BlogArticles";
import { Navbar } from "../Navbar/Navbar";
import { Buttons } from "../Buttons/Buttons";
import "./Blog.css";

export const Blog = () => {
  const { id } = useParams();
  let blog = DataBlogs.find((item) => item.id === parseInt(id));

  return (
    <div className="blogs-container">
      <Navbar navStyle="navLinks-black" />
      <span className="blogs-span-header">BLOG</span>
      <h1 className="blogs-header">{blog.title}</h1>
      <div className="blogs-headnote">
        <span className="blogs-span">{blog.author}</span>
        <span className="blogs-span">{blog.date}</span>
      </div>
      <div className="blogs-content">
        <img className="blogs-image" src={blog.image} alt={blog.alt} />
        <span className="blogs-icon">
          <i className="fa fa-facebook-f"></i>
          <i className="fa fa-twitter"></i>
          <i className="fa fa-pinterest"></i>
        </span>
        <h3 className="blogs-content-heading">{blog.title}</h3>
        <p className="blogs-paragraphs">{blog.paraOne}</p>
        <p className="blogs-paragraphs">{blog.paraTwo}</p>
        <p className="blogs-paragraphs">{blog.paraThree}</p>
        <div className="comment-form">
          <h3 className="comment-header">Leave a Comment</h3>
          <div className="container">
            <form className="row">
              <div className="col-lg-12">
                <label htmlFor="phone" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="email"
                  placeholder="Name"
                />
              </div>
              <div className="col-lg-12">
                <label htmlFor="phone" className="form-label">
                  Email
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="email"
                  placeholder="Email"
                />
              </div>

              <div className="col-lg-12">
                <label htmlFor="phone" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  rows="4"
                ></textarea>
              </div>
              <div className="comment-btn-wrap">
                <span>Comments must be approved before they are published</span>
                <Buttons to="/">Send</Buttons>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
